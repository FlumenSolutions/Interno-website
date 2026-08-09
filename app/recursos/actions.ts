'use server'

import { prisma } from '@/lib/prisma'
import { unstable_cache } from 'next/cache'
import { getLocalPosts, getLocalPostBySlug } from '@/data/posts'

/**
 * Ventana de caché de las consultas del blog.
 *
 * Antes cada visita a /recursos golpeaba la base de datos: la página llevaba
 * `force-dynamic` y las consultas `noStore()`. El listado solo cambia cuando
 * se publica un artículo, así que una hora de caché quita prácticamente toda
 * esa carga sin que el contenido se quede visiblemente viejo.
 *
 * Ojo: /recursos lee `searchParams.category`, lo que la vuelve dinámica de
 * todos modos — por eso se cachea la consulta y no la página. El coste que se
 * elimina es el de la base de datos, no el del render.
 *
 * Contrapartida: un artículo recién publicado puede tardar hasta una hora en
 * aparecer. Si algún día hace falta que sea inmediato, `revalidateTag('posts')`
 * desde una ruta protegida lo fuerza sin esperar.
 */
const CACHE_SEGUNDOS = 3600

/**
 * `unstable_cache` serializa a JSON, así que los DateTime de Prisma vuelven
 * del caché como string y revientan en cuanto alguien llama `.toISOString()`
 * sobre ellos. Hay que reconstruirlos al salir.
 */
const CAMPOS_FECHA = ['publishedAt', 'createdAt', 'updatedAt'] as const

function revivirFechas<T>(registro: T): T {
    if (!registro || typeof registro !== 'object') return registro
    const copia: any = { ...registro }
    for (const campo of CAMPOS_FECHA) {
        if (typeof copia[campo] === 'string') {
            copia[campo] = new Date(copia[campo])
        }
    }
    return copia as T
}

const fetchPublishedPosts = unstable_cache(
    async (category?: string) => {
        const where: any = { published: true }
        if (category && category !== 'Todas') {
            where.category = category
        }

        return prisma.post.findMany({
            where,
            orderBy: {
                publishedAt: 'desc',
            },
            select: {
                title: true,
                excerpt: true,
                category: true,
                slug: true,
                publishedAt: true,
                updatedAt: true,
                coverImage: true,
            },
        })
    },
    ['recursos-posts'],
    { revalidate: CACHE_SEGUNDOS, tags: ['posts'] }
)

export async function getPosts(category?: string) {
    try {
        // El try/catch envuelve la llamada, no la consulta cacheada: así un
        // fallo de la BD no queda cacheado durante una hora.
        const posts = (await fetchPublishedPosts(category)).map(revivirFechas)

        // Si la BD responde pero no hay posts publicados, usa los de respaldo.
        if (posts.length === 0) {
            return getLocalPosts(category)
        }

        return posts
    } catch (error) {
        // BD no disponible: usa los artículos de respaldo locales.
        console.error('Error fetching posts (usando posts locales de respaldo):', error)
        return getLocalPosts(category)
    }
}

const fetchRelatedPosts = unstable_cache(
    async (currentSlug: string, category?: string | null, tags?: string[]) => {
        // 1. Misma categoría (excluyendo el actual)
        const byCategory = category
            ? await prisma.post.findMany({
                  where: { published: true, slug: { not: currentSlug }, category },
                  orderBy: { publishedAt: 'desc' },
                  take: 3,
                  select: { title: true, slug: true, excerpt: true, coverImage: true, category: true, publishedAt: true },
              })
            : []

        if (byCategory.length >= 3) return byCategory.slice(0, 3)

        // 2. Completar con posts que compartan tags
        const existingSlugs = new Set([currentSlug, ...byCategory.map((p) => p.slug)])
        let byTags: typeof byCategory = []
        if (tags && tags.length > 0) {
            byTags = await prisma.post.findMany({
                where: { published: true, slug: { notIn: Array.from(existingSlugs) }, tags: { hasSome: tags } },
                orderBy: { publishedAt: 'desc' },
                take: 3 - byCategory.length,
                select: { title: true, slug: true, excerpt: true, coverImage: true, category: true, publishedAt: true },
            })
        }
        const combined = [...byCategory, ...byTags]
        if (combined.length >= 2) return combined.slice(0, 3)

        // 3. Rellenar con los más recientes
        const allSlugs = new Set([currentSlug, ...combined.map((p) => p.slug)])
        const recent = await prisma.post.findMany({
            where: { published: true, slug: { notIn: Array.from(allSlugs) } },
            orderBy: { publishedAt: 'desc' },
            take: 3 - combined.length,
            select: { title: true, slug: true, excerpt: true, coverImage: true, category: true, publishedAt: true },
        })
        return [...combined, ...recent].slice(0, 3)
    },
    ['recursos-related'],
    { revalidate: CACHE_SEGUNDOS, tags: ['posts'] }
)

export async function getRelatedPosts(currentSlug: string, category?: string | null, tags?: string[]) {
    try {
        return (await fetchRelatedPosts(currentSlug, category, tags)).map(revivirFechas)
    } catch {
        // Fallback local
        const local = getLocalPosts().filter((p) => p.slug !== currentSlug).slice(0, 3)
        return local
    }
}

const fetchPostBySlug = unstable_cache(
    async (slug: string) =>
        prisma.post.findUnique({
            where: {
                slug,
                published: true,
            },
        }),
    ['recursos-post'],
    { revalidate: CACHE_SEGUNDOS, tags: ['posts'] }
)

export async function getPostBySlug(slug: string) {
    try {
        const post = revivirFechas(await fetchPostBySlug(slug))

        // Si no está en la BD, intenta con los posts de respaldo locales.
        return post ?? getLocalPostBySlug(slug)
    } catch (error) {
        console.error(`Error fetching post ${slug} (usando posts locales de respaldo):`, error)
        return getLocalPostBySlug(slug)
    }
}

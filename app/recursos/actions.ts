'use server'

import { prisma } from '@/lib/prisma'
import { unstable_noStore as noStore } from 'next/cache'
import { getLocalPosts, getLocalPostBySlug } from '@/data/posts'

export async function getPosts(category?: string) {
    noStore(); // Disable cache for this action
    try {
        const where: any = { published: true }
        // Filter by category if provided
        if (category && category !== 'Todas') {
            where.category = category
        }

        const posts = await prisma.post.findMany({
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
                coverImage: true,
            },
        })

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

export async function getRelatedPosts(currentSlug: string, category?: string | null, tags?: string[]) {
    noStore()
    try {
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
    } catch {
        // Fallback local
        const local = getLocalPosts().filter((p) => p.slug !== currentSlug).slice(0, 3)
        return local
    }
}

export async function getPostBySlug(slug: string) {
    try {
        const post = await prisma.post.findUnique({
            where: {
                slug,
                published: true,
            },
        })

        // Si no está en la BD, intenta con los posts de respaldo locales.
        return post ?? getLocalPostBySlug(slug)
    } catch (error) {
        console.error(`Error fetching post ${slug} (usando posts locales de respaldo):`, error)
        return getLocalPostBySlug(slug)
    }
}

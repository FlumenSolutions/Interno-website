import { MetadataRoute } from 'next'
import { getPosts } from './recursos/actions'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://flumensolutions.com'

    const staticRoutes = [
        '',
        '/servicios',
        '/servicios/desarrollo-aplicaciones',
        '/servicios/paginas-web',
        '/servicios/chatbots-asistentes-ia',
        '/servicios/automatizacion-procesos',
        '/proceso',
        '/recursos',
        '/nosotros',
        '/contacto',
    ]

    // Sin lastModified: no tenemos fecha real de última edición por página
    // estática, y poner new Date() en cada build/request le miente a Google
    // ("esto cambió ahora mismo" en cada request) — eso hace que ignore la
    // señal. Mejor omitirla que fingirla.
    const staticEntries: MetadataRoute.Sitemap = staticRoutes.map((route) => ({
        url: `${baseUrl}${route}`,
        changeFrequency: route === '' ? 'daily' : 'weekly',
        priority: route === '' ? 1 : route.startsWith('/servicios') ? 0.9 : 0.8,
    }))

    // Posts del blog (BD o respaldo local). Si falla, el sitemap igual se genera.
    let postEntries: MetadataRoute.Sitemap = []
    try {
        const posts = await getPosts()
        postEntries = posts.map((post: any) => {
            const realDate = post.updatedAt || post.publishedAt
            return {
                url: `${baseUrl}/recursos/${post.slug}`,
                ...(realDate ? { lastModified: new Date(realDate) } : {}),
                changeFrequency: 'monthly',
                priority: 0.7,
            }
        })
    } catch {
        postEntries = []
    }

    return [...staticEntries, ...postEntries]
}

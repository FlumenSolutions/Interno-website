import { MetadataRoute } from 'next'
import { getPosts } from './recursos/actions'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://flumensolutions.com'

    const staticRoutes = [
        '',
        '/servicios',
        '/servicios/automatizacion-procesos',
        '/servicios/integracion-crm',
        '/servicios/asistentes-ia',
        '/servicios/implementacion-n8n',
        '/proceso',
        '/recursos',
        '/nosotros',
        '/contacto',
    ]

    const staticEntries: MetadataRoute.Sitemap = staticRoutes.map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: route === '' ? 'daily' : 'weekly',
        priority: route === '' ? 1 : route.startsWith('/servicios') ? 0.9 : 0.8,
    }))

    // Posts del blog (BD o respaldo local). Si falla, el sitemap igual se genera.
    let postEntries: MetadataRoute.Sitemap = []
    try {
        const posts = await getPosts()
        postEntries = posts.map((post: any) => ({
            url: `${baseUrl}/recursos/${post.slug}`,
            lastModified: post.publishedAt ? new Date(post.publishedAt) : new Date(),
            changeFrequency: 'monthly',
            priority: 0.7,
        }))
    } catch {
        postEntries = []
    }

    return [...staticEntries, ...postEntries]
}

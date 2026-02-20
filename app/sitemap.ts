import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://flumensolutions.com'

    const routes = [
        '',
        '/servicios',
        '/servicios/automatizacion-procesos',
        '/servicios/integracion-crm',
        '/servicios/asistentes-ia',
        '/servicios/implementacion-n8n',
        '/casos-exito',
        '/proceso',
        '/recursos',
        '/nosotros',
        '/contacto',
    ]

    return routes.map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: route === '' ? 'daily' : 'weekly',
        priority: route === '' ? 1 : route.startsWith('/servicios') ? 0.9 : 0.8,
    }))
}

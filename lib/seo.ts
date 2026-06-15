import { Metadata } from 'next'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://flumensolutions.com'
const siteName = 'Flumen Solutions'
const siteDescription = 'Automatización de procesos empresariales, integración de CRM y WhatsApp, asistentes de IA y consultoría en automatización en Bogotá, Colombia.'

export function generateMetadata({
    title,
    description,
    image,
    path = '',
    noIndex = false,
    type = 'website',
    publishedTime,
}: {
    title: string
    description?: string
    image?: string
    path?: string
    noIndex?: boolean
    type?: 'website' | 'article'
    publishedTime?: string
}): Metadata {
    const url = `${siteUrl}${path}`
    const ogImage = image || `${siteUrl}/og-image.png`
    const metaDescription = description || siteDescription

    return {
        title: {
            default: title,
            template: `%s | ${siteName}`,
        },
        description: metaDescription,
        keywords: [
            'automatización de procesos',
            'integración CRM',
            'WhatsApp Business',
            'asistentes IA',
            'n8n',
            'Make',
            'automatización empresarial',
            'Bogotá',
            'Colombia',
        ],
        authors: [{ name: siteName }],
        creator: siteName,
        publisher: siteName,
        formatDetection: {
            email: false,
            address: false,
            telephone: false,
        },
        metadataBase: new URL(siteUrl),
        alternates: {
            canonical: url,
        },
        openGraph: {
            title,
            description: metaDescription,
            url,
            siteName,
            images: [{ url: ogImage, width: 1200, height: 630, alt: title }],
            locale: 'es_CO',
            type,
            ...(type === 'article' && publishedTime ? { publishedTime } : {}),
        },
        twitter: {
            card: 'summary_large_image',
            title,
            description: metaDescription,
            images: [ogImage],
        },
        robots: {
            index: !noIndex,
            follow: !noIndex,
            googleBot: {
                index: !noIndex,
                follow: !noIndex,
                'max-video-preview': -1,
                'max-image-preview': 'large',
                'max-snippet': -1,
            },
        },
    }
}

export function generateOrganizationSchema() {
    return {
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: siteName,
        url: siteUrl,
        logo: `${siteUrl}/logo.png`,
        description: siteDescription,
        address: {
            '@type': 'PostalAddress',
            addressLocality: 'Bogotá',
            addressCountry: 'CO',
        },
        contactPoint: {
            '@type': 'ContactPoint',
            telephone: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER,
            contactType: 'customer service',
            areaServed: 'CO',
            availableLanguage: 'Spanish',
        },
        sameAs: [
            'https://www.linkedin.com/company/flumensolutions',
        ],
    }
}

export function generateLocalBusinessSchema() {
    return {
        '@context': 'https://schema.org',
        '@type': 'ProfessionalService',
        '@id': `${siteUrl}/#business`,
        name: siteName,
        url: siteUrl,
        logo: `${siteUrl}/logo.png`,
        image: `${siteUrl}/og-image.png`,
        description: siteDescription,
        priceRange: '$$',
        areaServed: [
            { '@type': 'Country', name: 'Colombia' },
            { '@type': 'Country', name: 'México' },
        ],
        address: {
            '@type': 'PostalAddress',
            addressLocality: 'Bogotá',
            addressRegion: 'Cundinamarca',
            addressCountry: 'CO',
        },
        contactPoint: {
            '@type': 'ContactPoint',
            telephone: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER,
            contactType: 'customer service',
            areaServed: ['CO', 'MX'],
            availableLanguage: ['Spanish', 'English'],
        },
        sameAs: ['https://www.linkedin.com/company/flumensolutions'],
    }
}

export function generateWebSiteSchema() {
    return {
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        name: siteName,
        url: siteUrl,
        inLanguage: 'es-CO',
        publisher: { '@type': 'Organization', name: siteName, url: siteUrl },
    }
}

export function generateArticleSchema(article: {
    title: string
    description: string
    slug: string
    publishedAt?: string
    image?: string
}) {
    return {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: article.title,
        description: article.description,
        image: article.image || `${siteUrl}/og-image.png`,
        datePublished: article.publishedAt,
        dateModified: article.publishedAt,
        mainEntityOfPage: {
            '@type': 'WebPage',
            '@id': `${siteUrl}/recursos/${article.slug}`,
        },
        author: { '@type': 'Organization', name: siteName, url: siteUrl },
        publisher: {
            '@type': 'Organization',
            name: siteName,
            logo: { '@type': 'ImageObject', url: `${siteUrl}/logo.png` },
        },
    }
}

export function generateServiceSchema(service: {
    name: string
    description: string
    url: string
}) {
    return {
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: service.name,
        description: service.description,
        provider: {
            '@type': 'Organization',
            name: siteName,
            url: siteUrl,
        },
        areaServed: {
            '@type': 'Country',
            name: 'Colombia',
        },
        url: service.url,
    }
}

export function generateFAQSchema(faqs: Array<{ question: string; answer: string }>) {
    return {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: faqs.map((faq) => ({
            '@type': 'Question',
            name: faq.question,
            acceptedAnswer: {
                '@type': 'Answer',
                text: faq.answer,
            },
        })),
    }
}

export function generateBreadcrumbSchema(items: Array<{ name: string; url: string }>) {
    return {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: items.map((item, index) => ({
            '@type': 'ListItem',
            position: index + 1,
            name: item.name,
            item: item.url,
        })),
    }
}

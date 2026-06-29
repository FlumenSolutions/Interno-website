import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { WhatsAppButton } from '@/components/forms/WhatsAppButton'
import { LanguageProvider } from '@/lib/i18n'
import { generateMetadata as genMeta, generateOrganizationSchema, generateLocalBusinessSchema, generateWebSiteSchema } from '@/lib/seo'
import { Analytics } from '@/components/analytics/Analytics'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export const metadata: Metadata = genMeta({
    title: 'Flumen Solutions - Software a la medida, construido con IA',
    description:
        'Construimos las aplicaciones, sitios web, chatbots y automatizaciones que tu negocio necesita — más rápido y a menor costo, gracias a la IA. Colombia.',
})

// viewportFit: 'cover' permite que env(safe-area-inset-*) tenga valores reales
// en iPhones con notch / Dynamic Island / indicador de inicio.
export const viewport: Viewport = {
    width: 'device-width',
    initialScale: 1,
    viewportFit: 'cover',
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    const graph = {
        '@context': 'https://schema.org',
        '@graph': [
            generateOrganizationSchema(),
            generateLocalBusinessSchema(),
            generateWebSiteSchema(),
        ],
    }

    return (
        <html lang="es" className={inter.variable}>
            <head>
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }}
                />
            </head>
            <body className={inter.className}>
                <Analytics />
                <LanguageProvider>
                    <Navbar />
                    <main>{children}</main>
                    <Footer />
                    <WhatsAppButton />
                </LanguageProvider>
            </body>
        </html>
    )
}

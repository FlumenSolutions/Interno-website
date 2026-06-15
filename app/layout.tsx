import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { WhatsAppButton } from '@/components/forms/WhatsAppButton'
import { LanguageProvider } from '@/lib/i18n'
import { generateMetadata as genMeta, generateOrganizationSchema, generateLocalBusinessSchema, generateWebSiteSchema } from '@/lib/seo'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export const metadata: Metadata = genMeta({
    title: 'Flumen Solutions - Automatización de Procesos Empresariales en Colombia',
    description:
        'Automatización de procesos, integración de CRM y WhatsApp, asistentes de IA y consultoría en automatización en Bogotá, Colombia. Recupera tiempo operativo y escala sin contratar.',
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
                {process.env.NEXT_PUBLIC_GA_ID && (
                    <>
                        <script
                            async
                            src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
                        />
                        <script
                            dangerouslySetInnerHTML={{
                                __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}');
                `,
                            }}
                        />
                    </>
                )}
            </head>
            <body className={inter.className}>
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

import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { WhatsAppButton } from '@/components/forms/WhatsAppButton'
import { LanguageProvider } from '@/lib/i18n'
import { generateMetadata as genMeta, generateOrganizationSchema, generateLocalBusinessSchema, generateWebSiteSchema } from '@/lib/seo'
import { Analytics } from '@/components/analytics/Analytics'
import { CookieConsent } from '@/components/analytics/CookieConsent'

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
                {/* Primer elemento enfocable de la página: permite saltar los
                    seis enlaces del navbar en cada navegación (WCAG 2.4.1).
                    Oculto salvo cuando recibe foco por teclado. */}
                <a
                    href="#contenido"
                    className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:rounded-lg focus:bg-accent focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-background focus:shadow-lg"
                >
                    Saltar al contenido
                </a>
                <LanguageProvider>
                    <Navbar />
                    <main id="contenido">{children}</main>
                    <Footer />
                    <WhatsAppButton />
                    <CookieConsent />
                </LanguageProvider>
            </body>
        </html>
    )
}

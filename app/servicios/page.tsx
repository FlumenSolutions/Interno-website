import { PageHeader } from '@/components/sections/PageHeader'
import { ServiceCard } from '@/components/sections/ServiceCard'
import { ScrollReveal } from '@/components/sections/ScrollReveal'
import { services } from '@/data/services'
import { generateMetadata as genMeta } from '@/lib/seo'
import { Metadata } from 'next'

export const metadata: Metadata = genMeta({
    title: 'Qué construimos — Software a la medida con IA',
    description:
        'Aplicaciones a la medida, páginas web, chatbots con IA y automatización de procesos. Software hecho para tu negocio, construido más rápido con IA. Colombia.',
    path: '/servicios',
})

export default function ServiciosPage() {
    return (
        <>
            <PageHeader
                title="Qué construimos"
                description="Desde aplicaciones y sitios web hasta chatbots con IA y automatizaciones — software a la medida de lo que tu negocio necesita."
            />

            <section className="section-padding bg-background">
                <div className="container">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {services.map((service, index) => {
                            const Icon = service.icon
                            return (
                                <ScrollReveal key={service.id} delay={index * 0.1}>
                                    <ServiceCard
                                        title={service.title}
                                        description={service.description}
                                        icon={<Icon className="w-6 h-6 text-accent transition-transform duration-500 group-hover:scale-110" />}
                                        features={service.features}
                                        href={`/servicios/${service.slug}`}
                                    />
                                </ScrollReveal>
                            )
                        })}
                    </div>

                    <ScrollReveal delay={0.4}>
                        <div className="mt-16 p-8 bg-accent/10 border border-accent/20 rounded-lg text-center max-w-3xl mx-auto">
                            <h3 className="text-h3 mb-4 text-white">¿No sabes por dónde empezar?</h3>
                            <p className="text-body text-white/80 mb-6">
                                Cuéntanos qué necesitas y te decimos qué podemos construir para tu negocio, sin compromiso.
                            </p>
                            <a
                                href="/contacto"
                                className="inline-block px-8 py-3 bg-accent text-white rounded-md hover:bg-accent/90 transition-colors font-medium shadow-lg shadow-accent/20"
                            >
                                Cuéntanos tu idea
                            </a>
                        </div>
                    </ScrollReveal>
                </div>
            </section>
        </>
    )
}

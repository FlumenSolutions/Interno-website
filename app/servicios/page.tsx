import { PageHeader } from '@/components/sections/PageHeader'
import { ServiceCard } from '@/components/sections/ServiceCard'
import { ScrollReveal } from '@/components/sections/ScrollReveal'
import { services } from '@/data/services'
import { generateMetadata as genMeta } from '@/lib/seo'
import { Metadata } from 'next'

export const metadata: Metadata = genMeta({
    title: 'Servicios de Automatización Empresarial',
    description:
        'Automatización de procesos, integración de CRM y WhatsApp, asistentes de IA con RAG, e implementación de n8n. Soluciones completas para empresas en Colombia.',
    path: '/servicios',
})

export default function ServiciosPage() {
    return (
        <>
            <PageHeader
                title="Servicios de Automatización"
                description="Desde automatización de procesos hasta asistentes de IA, tenemos la solución perfecta para cada necesidad de tu empresa."
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
                            <h3 className="text-h3 mb-4 text-white">¿No estás seguro cuál servicio necesitas?</h3>
                            <p className="text-body text-white/80 mb-6">
                                Agenda una auditoría gratuita y te ayudaremos a identificar la mejor solución para tu negocio.
                            </p>
                            <a
                                href="/contacto"
                                className="inline-block px-8 py-3 bg-accent text-white rounded-md hover:bg-accent/90 transition-colors font-medium shadow-lg shadow-accent/20"
                            >
                                Agendar Auditoría Gratuita
                            </a>
                        </div>
                    </ScrollReveal>
                </div>
            </section>
        </>
    )
}

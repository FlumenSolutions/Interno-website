import { PageHeader } from '@/components/sections/PageHeader'
import { CaseCard } from '@/components/sections/CaseCard'
import { ScrollReveal } from '@/components/sections/ScrollReveal'
import { cases } from '@/data/cases'
import { generateMetadata as genMeta } from '@/lib/seo'
import { Metadata } from 'next'

export const metadata: Metadata = genMeta({
    title: 'Casos de Éxito - Empresas que Automatizaron sus Procesos',
    description:
        'Descubre cómo empresas en Colombia automatizaron sus procesos y recuperaron hasta 80% de su tiempo operativo. Resultados reales, ROI comprobado.',
    path: '/casos-exito',
})

export default function CasosExitoPage() {
    return (
        <>
            <PageHeader
                title="Casos de Éxito"
                subtitle="Resultados Reales"
                description="Descubre cómo nuestros clientes recuperaron tiempo, eliminaron errores y escalaron sin aumentar costos."
            />

            <section className="section-padding bg-background">
                <div className="container">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {cases.map((caseStudy, index) => (
                            <ScrollReveal key={caseStudy.id} delay={index * 0.1}>
                                <CaseCard
                                    client={caseStudy.client}
                                    industry={caseStudy.industry}
                                    location={caseStudy.location}
                                    challenge={caseStudy.challenge}
                                    results={caseStudy.results}
                                    slug={caseStudy.slug}
                                />
                            </ScrollReveal>
                        ))}
                    </div>
                </div>
            </section>

            <section className="section-padding bg-muted/30">
                <div className="container">
                    <ScrollReveal>
                        <div className="max-w-3xl mx-auto text-center">
                            <h2 className="text-h2 mb-4">¿Quieres resultados similares?</h2>
                            <p className="text-body text-muted-foreground mb-8">
                                Agenda una auditoría gratuita y descubre cómo podemos ayudarte a automatizar tu negocio.
                            </p>
                            <a
                                href="/contacto"
                                className="inline-block px-8 py-3 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors font-medium"
                            >
                                Solicitar Auditoría Gratuita
                            </a>
                        </div>
                    </ScrollReveal>
                </div>
            </section>
        </>
    )
}

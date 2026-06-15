import { PageHeader } from '@/components/sections/PageHeader'
import { ProcessStep } from '@/components/sections/ProcessStep'
import { FAQAccordion } from '@/components/sections/FAQAccordion'
import { CTASection } from '@/components/sections/CTASection'
import { ScrollReveal } from '@/components/sections/ScrollReveal'
import { getFAQsByCategory } from '@/data/faqs'
import { generateMetadata as genMeta } from '@/lib/seo'
import { Metadata } from 'next'
import { Search, Lightbulb, Code, Rocket, HeadphonesIcon } from 'lucide-react'

export const metadata: Metadata = genMeta({
    title: 'Cómo trabajamos — De tu idea al software funcionando',
    description:
        'Conoce nuestro proceso para construir tu software: entendemos tu idea, diseñamos la solución, la construimos con IA y la entregamos funcionando, con acompañamiento.',
    path: '/proceso',
})

export default function ProcesoPage() {
    const faqs = getFAQsByCategory('proceso')

    return (
        <>
            <PageHeader
                title="Cómo trabajamos"
                description="Desde que nos cuentas tu idea hasta el soporte continuo, te acompañamos en cada paso del camino."
            />

            <section className="section-padding bg-background">
                <div className="container">
                    <ScrollReveal>
                        <div className="max-w-4xl mx-auto text-center mb-16">
                            <h2 className="text-h2 mb-4 text-white">5 Fases, de principio a fin</h2>
                            <p className="text-body text-white/70">
                                Un proceso transparente y estructurado, paso a paso
                            </p>
                        </div>
                    </ScrollReveal>

                    <div className="max-w-4xl mx-auto space-y-16">
                        <ScrollReveal delay={0.1}>
                            <ProcessStep
                                icon={<Search className="w-7 h-7 text-accent" />}
                                title="Cuéntanos tu idea"
                                description="Empezamos por entender qué necesita tu negocio: el problema que quieres resolver o la herramienta que te hace falta. Te decimos con claridad qué se puede construir, cómo lo haríamos y un estimado de tiempo. Sin tecnicismos y sin compromiso."
                                deliverables={[
                                    'Entendemos tu necesidad real',
                                    'Propuesta clara de qué construir',
                                    'Estimado de tiempo y presupuesto',
                                    'Todo explicado sin jerga',
                                ]}
                            />
                        </ScrollReveal>

                        <ScrollReveal delay={0.2}>
                            <ProcessStep
                                icon={<Lightbulb className="w-7 h-7 text-accent" />}
                                title="Diseño de Solución"
                                description="Diseñamos los flujos de automatización específicos para tu negocio. Creamos diagramas detallados, definimos integraciones necesarias y validamos contigo cada paso antes de la implementación."
                                deliverables={[
                                    'Diagramas de flujo de automatización',
                                    'Especificaciones técnicas detalladas',
                                    'Plan de integración con sistemas existentes',
                                    'Sesión de validación y ajustes',
                                ]}
                            />
                        </ScrollReveal>

                        <ScrollReveal delay={0.3}>
                            <ProcessStep
                                icon={<Code className="w-7 h-7 text-accent" />}
                                title="Desarrollo con IA"
                                description="Construimos tu software apoyados en IA de última generación para llegar a algo funcional más rápido. Lo conectamos con las herramientas que ya usas y lo probamos a fondo antes de entregar."
                                deliverables={[
                                    'Software construido y funcional',
                                    'Versión funcional para probar pronto',
                                    'Integración con tus herramientas',
                                    'Documentación de lo construido',
                                ]}
                            />
                        </ScrollReveal>

                        <ScrollReveal delay={0.4}>
                            <ProcessStep
                                icon={<Rocket className="w-7 h-7 text-accent" />}
                                title="Implementación y Capacitación"
                                description="Implementamos las automatizaciones en tu entorno de producción de forma gradual y controlada. Capacitamos a tu equipo para que puedan usar, monitorear y hacer ajustes básicos."
                                deliverables={[
                                    'Migración a producción sin interrupciones',
                                    'Capacitación del equipo (presencial o virtual)',
                                    'Manuales de usuario y videos tutoriales',
                                    'Plan de contingencia y rollback',
                                ]}
                            />
                        </ScrollReveal>

                        <ScrollReveal delay={0.5}>
                            <ProcessStep
                                icon={<HeadphonesIcon className="w-7 h-7 text-accent" />}
                                title="Soporte y Optimización"
                                description="Brindamos 30 días de soporte post-implementación incluido. Monitoreamos el rendimiento, resolvemos cualquier inconveniente y optimizamos los flujos según sea necesario. Después puedes contratar soporte continuo o ajustes puntuales."
                                deliverables={[
                                    '30 días de soporte incluido',
                                    'Monitoreo de rendimiento y alertas',
                                    'Optimización basada en uso real',
                                    'Opciones de soporte continuo',
                                ]}
                            />
                        </ScrollReveal>
                    </div>
                </div>
            </section>

            {/* Timeline */}
            <section className="section-padding bg-[#0A0F1C]">
                <div className="container">
                    <ScrollReveal>
                        <h2 className="text-h2 text-center mb-12 text-white">Tiempos de Implementación</h2>
                    </ScrollReveal>

                    <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
                        <ScrollReveal delay={0.1}>
                            <div className="text-center p-6 bg-gradient-to-br from-card/80 to-card/40 border border-border/40 rounded-lg hover:border-accent/30 transition-all duration-300">
                                <div className="text-3xl font-bold text-accent mb-2">2-3 semanas</div>
                                <div className="text-sm font-semibold mb-2 text-white">Proyectos Simples</div>
                                <div className="text-sm text-white/60">
                                    Automatización de 1-2 procesos básicos
                                </div>
                            </div>
                        </ScrollReveal>

                        <ScrollReveal delay={0.2}>
                            <div className="text-center p-6 bg-gradient-to-br from-card/80 to-card/40 border border-border/40 rounded-lg hover:border-accent/30 transition-all duration-300">
                                <div className="text-3xl font-bold text-accent mb-2">4-6 semanas</div>
                                <div className="text-sm font-semibold mb-2 text-white">Proyectos Medios</div>
                                <div className="text-sm text-white/60">
                                    Múltiples integraciones y flujos complejos
                                </div>
                            </div>
                        </ScrollReveal>

                        <ScrollReveal delay={0.3}>
                            <div className="text-center p-6 bg-gradient-to-br from-card/80 to-card/40 border border-border/40 rounded-lg hover:border-accent/30 transition-all duration-300">
                                <div className="text-3xl font-bold text-accent mb-2">6-8 semanas</div>
                                <div className="text-sm font-semibold mb-2 text-white">Proyectos Complejos</div>
                                <div className="text-sm text-white/60">
                                    Asistentes de IA y automatización enterprise
                                </div>
                            </div>
                        </ScrollReveal>
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section className="section-padding bg-background">
                <div className="container">
                    <FAQAccordion faqs={faqs} />
                </div>
            </section>

            {/* CTA */}
            <CTASection
                title="¿Listo para comenzar?"
                description="Agenda tu auditoría gratuita y da el primer paso hacia la automatización"
                primaryCTA={{
                    text: 'Cuéntanos tu idea',
                    href: '/contacto',
                }}
                variant="accent"
            />
        </>
    )
}

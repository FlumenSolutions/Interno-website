import { PageHeader } from '@/components/sections/PageHeader'
import { ScrollReveal } from '@/components/sections/ScrollReveal'
import { CTASection } from '@/components/sections/CTASection'
import { generateMetadata as genMeta } from '@/lib/seo'
import { Metadata } from 'next'
import { Target, Eye, Award, Users } from 'lucide-react'

export const metadata: Metadata = genMeta({
    title: 'Sobre Nosotros - Flumen Solutions',
    description:
        'Somos expertos en automatización de procesos empresariales en Colombia. Ayudamos a empresas a recuperar tiempo, eliminar errores y escalar sin límites.',
    path: '/nosotros',
})

const values = [
    {
        icon: Target,
        title: 'Resultados Medibles',
        description: 'Cada proyecto tiene métricas claras de éxito y ROI comprobable.',
    },
    {
        icon: Users,
        title: 'Soporte Local',
        description: 'Equipo en Colombia con respuesta rápida y entendimiento del mercado local.',
    },
    {
        icon: Award,
        title: 'Excelencia Técnica',
        description: 'Certificados en las mejores herramientas de automatización del mercado.',
    },
    {
        icon: Eye,
        title: 'Transparencia Total',
        description: 'Comunicación clara, presupuestos sin sorpresas y procesos transparentes.',
    },
]

export default function NosotrosPage() {
    return (
        <>
            <PageHeader
                title="Sobre Flumen Solutions"
                subtitle="Quiénes Somos"
                description="Ayudamos a empresas a recuperar tiempo, eliminar errores y escalar sin límites a través de la automatización inteligente."
            />

            {/* Mission */}
            <section className="section-padding bg-background">
                <div className="container">
                    <div className="max-w-4xl mx-auto">
                        <ScrollReveal>
                            <h2 className="text-h2 mb-6 text-center text-white">Nuestra Misión</h2>
                            <p className="text-body-lg text-center text-muted-foreground mb-8">
                                Democratizar la automatización empresarial en Colombia, haciendo que tecnologías avanzadas
                                sean accesibles para empresas de todos los tamaños. Creemos que ningún negocio debería
                                perder tiempo en tareas repetitivas cuando puede enfocarse en lo que realmente importa:
                                sus clientes y su crecimiento.
                            </p>
                        </ScrollReveal>
                    </div>
                </div>
            </section>

            {/* Vision */}
            <section className="section-padding bg-muted/5 border-y border-white/5">
                <div className="container">
                    <div className="max-w-4xl mx-auto">
                        <ScrollReveal>
                            <h2 className="text-h2 mb-6 text-center text-white">Nuestra Visión</h2>
                            <p className="text-body-lg text-center text-muted-foreground">
                                Ser la consultora de automatización #1 en Colombia, reconocida por transformar
                                negocios a través de soluciones inteligentes que generan resultados medibles y
                                sostenibles en el tiempo.
                            </p>
                        </ScrollReveal>
                    </div>
                </div>
            </section>

            {/* Values */}
            <section className="section-padding bg-background">
                <div className="container">
                    <ScrollReveal>
                        <h2 className="text-h2 mb-12 text-center text-white">Nuestros Valores</h2>
                    </ScrollReveal>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {values.map((value, index) => {
                            const Icon = value.icon
                            return (
                                <ScrollReveal key={index} delay={index * 0.1}>
                                    <div className="text-center p-6 rounded-lg hover:bg-white/5 transition-colors">
                                        <div className="w-16 h-16 rounded-lg bg-accent/10 flex items-center justify-center mx-auto mb-4">
                                            <Icon className="w-8 h-8 text-accent" />
                                        </div>
                                        <h3 className="text-h4 mb-2 text-white">{value.title}</h3>
                                        <p className="text-sm text-muted-foreground">{value.description}</p>
                                    </div>
                                </ScrollReveal>
                            )
                        })}
                    </div>
                </div>
            </section>

            {/* Why Choose Us */}
            <section className="section-padding bg-muted/5 border-y border-white/5">
                <div className="container">
                    <ScrollReveal>
                        <h2 className="text-h2 mb-12 text-center text-white">¿Por qué elegirnos?</h2>
                    </ScrollReveal>

                    <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
                        {[
                            {
                                title: 'Experiencia Comprobada',
                                description: '50+ empresas automatizadas con resultados medibles y ROI comprobado.',
                            },
                            {
                                title: 'Tecnología de Punta',
                                description: 'Usamos las mejores herramientas: n8n, Make, OpenAI, y más.',
                            },
                            {
                                title: 'Soporte Local',
                                description: 'Equipo en Colombia con respuesta en menos de 24 horas.',
                            },
                            {
                                title: 'Implementación Rápida',
                                description: 'Proyectos listos en 2-8 semanas según complejidad.',
                            },
                            {
                                title: 'Sin Costos Ocultos',
                                description: 'Presupuestos claros y transparentes desde el inicio.',
                            },
                            {
                                title: 'Capacitación Incluida',
                                description: 'Tu equipo aprende a usar y mantener las automatizaciones.',
                            },
                        ].map((item, index) => (
                            <ScrollReveal key={index} delay={index * 0.1}>
                                <div className="p-6 bg-card border border-border/50 rounded-lg shadow-sm hover:border-accent/50 transition-colors">
                                    <h3 className="text-h4 mb-2 text-white">{item.title}</h3>
                                    <p className="text-sm text-muted-foreground">{item.description}</p>
                                </div>
                            </ScrollReveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* Team */}
            <section className="section-padding bg-background">
                <div className="container">
                    <ScrollReveal>
                        <div className="max-w-3xl mx-auto text-center">
                            <h2 className="text-h2 mb-4 text-white">Nuestro Equipo</h2>
                            <p className="text-body text-muted-foreground mb-12">
                                Un equipo multidisciplinario de ingenieros, consultores y especialistas en automatización
                                dedicados a transformar tu negocio.
                            </p>
                            <p className="text-body-lg font-semibold text-accent">
                                Certificados en n8n, Make, y tecnologías de IA
                            </p>
                        </div>
                    </ScrollReveal>
                </div>
            </section>

            {/* CTA */}
            <CTASection
                title="¿Listo para trabajar con nosotros?"
                description="Agenda una auditoría gratuita y descubre cómo podemos ayudarte"
                primaryCTA={{
                    text: 'Solicitar Auditoría Gratuita',
                    href: '/contacto',
                }}
                secondaryCTA={{
                    text: 'Ver Casos de Éxito',
                    href: '/casos-exito',
                }}
                variant="accent"
            />
        </>
    )
}

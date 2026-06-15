import { PageHeader } from '@/components/sections/PageHeader'
import { ScrollReveal } from '@/components/sections/ScrollReveal'
import { SectionBackground } from '@/components/sections/SectionBackground'
import { CTASection } from '@/components/sections/CTASection'
import { generateMetadata as genMeta } from '@/lib/seo'
import { Metadata } from 'next'
import { Target, Eye, Award, Users } from 'lucide-react'

export const metadata: Metadata = genMeta({
    title: 'Sobre Nosotros - Flumen Solutions',
    description:
        'Somos expertos en automatización de procesos empresariales en Colombia. Ayudamos a empresas a recuperar tiempo, reducir errores y escalar a través de la automatización inteligente.',
    path: '/nosotros',
})

const values = [
    {
        icon: Target,
        title: 'Resultados Medibles',
        description: 'Cada proyecto se define con métricas claras de éxito desde el inicio.',
    },
    {
        icon: Users,
        title: 'Soporte Local',
        description: 'Equipo en Colombia con respuesta rápida y entendimiento del mercado local.',
    },
    {
        icon: Award,
        title: 'Fundamento Técnico',
        description: 'Equipo de ingeniería que trabaja a fondo con las principales herramientas de automatización.',
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
                description="Ayudamos a empresas a recuperar tiempo, reducir errores y escalar a través de la automatización inteligente."
            />

            {/* Mission & Vision */}
            <section className="section-padding bg-background relative overflow-hidden">
                <SectionBackground variant="grid" glows={['left', 'right']} />
                <div className="container relative z-10">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
                        {/* Misión */}
                        <ScrollReveal>
                            <article className="group relative h-full overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.06] to-white/[0.02] p-8 lg:p-10 transition-all duration-500 hover:border-accent/30 hover:shadow-2xl hover:shadow-accent/5">
                                <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-accent/10 blur-3xl transition-opacity duration-500 group-hover:opacity-150" />
                                <div className="relative">
                                    <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-accent/10 border border-accent/20">
                                        <Target className="h-7 w-7 text-accent" />
                                    </div>
                                    <h2 className="text-2xl lg:text-3xl font-bold text-white mb-4">Nuestra Misión</h2>
                                    <p className="text-body text-white/70 leading-relaxed">
                                        Democratizar la automatización empresarial en Colombia, haciendo que tecnologías
                                        avanzadas sean accesibles para empresas de todos los tamaños. Creemos que ningún
                                        negocio debería perder tiempo en tareas repetitivas cuando puede enfocarse en lo
                                        que realmente importa: sus clientes y su crecimiento.
                                    </p>
                                </div>
                            </article>
                        </ScrollReveal>

                        {/* Visión */}
                        <ScrollReveal delay={0.1}>
                            <article className="group relative h-full overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.06] to-white/[0.02] p-8 lg:p-10 transition-all duration-500 hover:border-accent/30 hover:shadow-2xl hover:shadow-accent/5">
                                <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-primary/20 blur-3xl transition-opacity duration-500 group-hover:opacity-150" />
                                <div className="relative">
                                    <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-accent/10 border border-accent/20">
                                        <Eye className="h-7 w-7 text-accent" />
                                    </div>
                                    <h2 className="text-2xl lg:text-3xl font-bold text-white mb-4">Nuestra Visión</h2>
                                    <p className="text-body text-white/70 leading-relaxed">
                                        Ser un referente de automatización en Colombia, reconocido por transformar
                                        negocios a través de soluciones inteligentes que generan resultados medibles y
                                        sostenibles en el tiempo.
                                    </p>
                                </div>
                            </article>
                        </ScrollReveal>
                    </div>
                </div>
            </section>

            {/* Values */}
            <section className="section-padding bg-background relative overflow-hidden">
                <SectionBackground variant="dots" glows={['top']} />
                <div className="container relative z-10">
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
            <section className="section-padding bg-muted/5 border-y border-white/5 relative overflow-hidden">
                <SectionBackground variant="grid" glows={['bottom']} />
                <div className="container relative z-10">
                    <ScrollReveal>
                        <h2 className="text-h2 mb-12 text-center text-white">¿Por qué elegirnos?</h2>
                    </ScrollReveal>

                    <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
                        {[
                            {
                                title: 'Fundadores Técnicos',
                                description: 'Construido por ingenieros que diseñan e implementan cada automatización de principio a fin.',
                            },
                            {
                                title: 'Tecnología de Punta',
                                description: 'Usamos las mejores herramientas: n8n, Make, OpenAI, y más.',
                            },
                            {
                                title: 'Soporte Local',
                                description: 'Equipo en Colombia que entiende tu mercado y responde rápido.',
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
            <section className="section-padding bg-background relative overflow-hidden">
                <SectionBackground variant="glow" glows={['center']} />
                <div className="container relative z-10">
                    <ScrollReveal>
                        <div className="max-w-3xl mx-auto text-center">
                            <h2 className="text-h2 mb-4 text-white">Nuestro Equipo</h2>
                            <p className="text-body text-muted-foreground mb-12">
                                Flumen fue fundada por tres ingenieros apasionados por la automatización.
                                Diseñamos, construimos e implementamos cada solución de principio a fin.
                            </p>
                            <p className="text-body-lg font-semibold text-accent">
                                Trabajamos con n8n, Make y tecnologías de IA
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
                variant="accent"
            />
        </>
    )
}

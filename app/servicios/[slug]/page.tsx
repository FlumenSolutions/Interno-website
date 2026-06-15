import { notFound } from 'next/navigation'
import { Hero } from '@/components/sections/Hero'
import { FAQAccordion } from '@/components/sections/FAQAccordion'
import { CTASection } from '@/components/sections/CTASection'
import { ScrollReveal } from '@/components/sections/ScrollReveal'
import { getServiceBySlug } from '@/data/services'
import { getFAQsByCategory } from '@/data/faqs'
import { generateMetadata as genMeta, generateServiceSchema, generateFAQSchema, generateBreadcrumbSchema } from '@/lib/seo'
import { Metadata } from 'next'
import { CheckCircle, Sparkles, Zap, Target } from 'lucide-react'

interface ServicePageProps {
    params: {
        slug: string
    }
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
    const service = getServiceBySlug(params.slug)
    if (!service) return {}

    return genMeta({
        title: service.title,
        description: service.description,
        path: `/servicios/${service.slug}`,
    })
}

export default function ServicePage({ params }: ServicePageProps) {
    const service = getServiceBySlug(params.slug)
    if (!service) notFound()

    const faqs = getFAQsByCategory('servicios')
    const Icon = service.icon

    const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://flumensolutions.com'
    const serviceSchema = generateServiceSchema({
        name: service.title,
        description: service.description,
        url: `${siteUrl}/servicios/${service.slug}`,
    })
    const faqSchema = faqs.length > 0 ? generateFAQSchema(faqs) : null
    const breadcrumbSchema = generateBreadcrumbSchema([
        { name: 'Inicio', url: siteUrl },
        { name: 'Servicios', url: `${siteUrl}/servicios` },
        { name: service.title, url: `${siteUrl}/servicios/${service.slug}` },
    ])

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
            />
            {faqSchema && (
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
                />
            )}

            <Hero
                title={service.title}
                subtitle={service.description}
                primaryCTA={{
                    text: 'Cuéntanos tu idea',
                    href: '/contacto',
                }}
            />

            {/* Who is this for - Premium Grid */}
            <section className="relative py-24 bg-background overflow-hidden">
                {/* Subtle gradient background */}
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-accent/5 via-background to-background pointer-events-none" />

                <div className="container relative z-10">
                    <ScrollReveal>
                        <div className="max-w-6xl mx-auto">
                            {/* Header with icon */}
                            <div className="flex items-center gap-4 mb-12">
                                <div className="relative">
                                    <div className="absolute inset-0 bg-accent/20 blur-xl rounded-full" />
                                    <div className="relative w-16 h-16 rounded-2xl bg-gradient-to-br from-accent/20 to-accent/5 border border-accent/20 flex items-center justify-center">
                                        <Icon className="w-8 h-8 text-accent" />
                                    </div>
                                </div>
                                <div>
                                    <h2 className="text-3xl md:text-4xl font-bold text-white">¿Para quién es este servicio?</h2>
                                    <p className="text-white/60 mt-1">Ideal para estos perfiles empresariales</p>
                                </div>
                            </div>

                            {/* Grid of target audiences */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {service.whoIsFor.map((item, index) => (
                                    <ScrollReveal key={index} delay={index * 0.05}>
                                        <div className="group relative p-6 rounded-2xl bg-gradient-to-br from-card/50 to-card/30 border border-border/40 hover:border-accent/30 transition-all duration-300 hover:shadow-lg hover:shadow-accent/5">
                                            <div className="flex items-start gap-4">
                                                <div className="mt-1 w-6 h-6 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0 group-hover:bg-accent/20 transition-colors">
                                                    <CheckCircle className="w-4 h-4 text-accent" />
                                                </div>
                                                <p className="text-white/90 leading-relaxed group-hover:text-white transition-colors">{item}</p>
                                            </div>
                                        </div>
                                    </ScrollReveal>
                                ))}
                            </div>
                        </div>
                    </ScrollReveal>
                </div>
            </section>

            {/* What's included - Bento Grid Style */}
            <section className="relative py-24 bg-[#0A0F1C]">
                <div className="container">
                    <ScrollReveal>
                        <div className="text-center mb-16">
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 mb-6">
                                <Sparkles className="w-4 h-4 text-accent" />
                                <span className="text-sm font-medium text-accent">Todo incluido</span>
                            </div>
                            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Qué incluye</h2>
                            <p className="text-white/60 max-w-2xl mx-auto">Solución completa end-to-end para transformar tu negocio</p>
                        </div>
                    </ScrollReveal>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-6xl mx-auto">
                        {service.features.map((feature, index) => (
                            <ScrollReveal key={index} delay={index * 0.03}>
                                <div className="group relative p-6 rounded-2xl bg-gradient-to-br from-card/80 to-card/40 border border-border/40 hover:border-accent/30 transition-all duration-300 hover:shadow-xl hover:shadow-accent/5 hover:-translate-y-1">
                                    <div className="flex items-start gap-3">
                                        <div className="mt-0.5 w-5 h-5 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0 group-hover:bg-accent/20 transition-colors">
                                            <CheckCircle className="w-3.5 h-3.5 text-accent" />
                                        </div>
                                        <p className="text-sm font-medium text-white/90 leading-relaxed group-hover:text-white transition-colors">{feature}</p>
                                    </div>
                                </div>
                            </ScrollReveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* Use Cases - Card Grid */}
            <section className="relative py-24 bg-background">
                <div className="container">
                    <ScrollReveal>
                        <div className="text-center mb-16">
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 mb-6">
                                <Target className="w-4 h-4 text-accent" />
                                <span className="text-sm font-medium text-accent">Casos de uso</span>
                            </div>
                            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Casos de uso</h2>
                            <p className="text-white/60 max-w-2xl mx-auto">Ejemplos de cómo este servicio puede transformar tu negocio</p>
                        </div>
                    </ScrollReveal>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                        {service.useCases.map((useCase, index) => (
                            <ScrollReveal key={index} delay={index * 0.05}>
                                <div className="group relative p-8 rounded-2xl bg-gradient-to-br from-card/60 to-card/30 border border-border/40 hover:border-accent/30 transition-all duration-300 hover:shadow-xl hover:shadow-accent/5 hover:-translate-y-1">
                                    <div className="absolute top-6 right-6 w-8 h-8 rounded-lg bg-accent/5 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                                        <Zap className="w-4 h-4 text-accent" />
                                    </div>
                                    <h3 className="text-lg font-semibold text-white leading-snug pr-8">{useCase}</h3>
                                </div>
                            </ScrollReveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* Benefits - Two Column Premium Cards */}
            <section className="relative py-24 bg-[#0A0F1C]">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-accent/5 via-transparent to-transparent pointer-events-none" />

                <div className="container relative z-10">
                    <ScrollReveal>
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Beneficios</h2>
                            <p className="text-white/60 max-w-2xl mx-auto">Resultados medibles que impactan tu negocio</p>
                        </div>
                    </ScrollReveal>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
                        {service.benefits.map((benefit, index) => (
                            <ScrollReveal key={index} delay={index * 0.1}>
                                <div className="group relative p-8 rounded-2xl bg-gradient-to-br from-card/80 to-card/40 border border-border/40 hover:border-accent/30 transition-all duration-300 hover:shadow-2xl hover:shadow-accent/10">
                                    <div className="flex items-start gap-5">
                                        <div className="relative">
                                            <div className="absolute inset-0 bg-accent/20 blur-lg rounded-full" />
                                            <div className="relative w-12 h-12 rounded-xl bg-gradient-to-br from-accent/20 to-accent/5 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                                                <CheckCircle className="w-6 h-6 text-accent" />
                                            </div>
                                        </div>
                                        <div className="flex-1">
                                            <p className="text-lg font-semibold text-white leading-relaxed">{benefit}</p>
                                        </div>
                                    </div>
                                </div>
                            </ScrollReveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* Tools - Pill Grid */}
            <section className="relative py-24 bg-background">
                <div className="container">
                    <ScrollReveal>
                        <div className="text-center mb-12">
                            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Herramientas que usamos</h2>
                            <p className="text-white/60">Stack tecnológico de primer nivel</p>
                        </div>
                    </ScrollReveal>

                    <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
                        {service.tools.map((tool, index) => (
                            <ScrollReveal key={index} delay={index * 0.03}>
                                <div className="group px-6 py-3 rounded-full bg-gradient-to-r from-card/80 to-card/40 border border-border/40 hover:border-accent/30 transition-all duration-300 hover:shadow-lg hover:shadow-accent/5 hover:-translate-y-0.5">
                                    <span className="text-sm font-medium text-white/90 group-hover:text-white transition-colors">{tool}</span>
                                </div>
                            </ScrollReveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section className="relative py-24 bg-background">
                <div className="container max-w-4xl">
                    <ScrollReveal>
                        <div className="text-center mb-12">
                            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Preguntas Frecuentes</h2>
                            <p className="text-white/60">Todo lo que necesitas saber</p>
                        </div>
                    </ScrollReveal>
                    <FAQAccordion faqs={faqs} />
                </div>
            </section>

            {/* CTA */}
            <CTASection
                title={`¿Quieres algo así para tu negocio?`}
                description="Cuéntanos tu idea y te decimos qué podemos construir, sin compromiso"
                primaryCTA={{
                    text: 'Cuéntanos tu idea',
                    href: '/contacto',
                }}
                variant="accent"
            />
        </>
    )
}

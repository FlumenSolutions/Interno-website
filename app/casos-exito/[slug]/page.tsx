import { notFound } from 'next/navigation'
import { getCaseBySlug } from '@/data/cases'
import { TestimonialCard } from '@/components/sections/TestimonialCard'
import { CTASection } from '@/components/sections/CTASection'
import { ScrollReveal } from '@/components/sections/ScrollReveal'
import { generateMetadata as genMeta } from '@/lib/seo'
import { Metadata } from 'next'
import { MapPin, Clock, CheckCircle, Target, Lightbulb, TrendingUp } from 'lucide-react'

interface CasePageProps {
    params: {
        slug: string
    }
}

export async function generateMetadata({ params }: CasePageProps): Promise<Metadata> {
    const caseStudy = getCaseBySlug(params.slug)
    if (!caseStudy) return {}

    return genMeta({
        title: `Caso de Éxito: ${caseStudy.client}`,
        description: caseStudy.challenge,
        path: `/casos-exito/${caseStudy.slug}`,
    })
}

export default function CasePage({ params }: CasePageProps) {
    const caseStudy = getCaseBySlug(params.slug)
    if (!caseStudy) notFound()

    return (
        <>
            {/* Premium 2025 SaaS Hero - Layered Background with Visual Depth */}
            <section className="relative pt-32 pb-32 overflow-hidden">
                {/* Multi-layered Background System */}
                {/* Base gradient - deep navy to dark */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#0A0F1C] via-[#0D1321] to-background" />

                {/* Aurora-style radial glows */}
                <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-accent/20 rounded-full blur-[120px] opacity-30 animate-pulse" />
                <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-blue-500/15 rounded-full blur-[100px] opacity-20" />

                {/* Subtle grid pattern overlay */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_80%)]" />

                {/* Noise texture for premium feel */}
                <div className="absolute inset-0 opacity-[0.015] mix-blend-overlay bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxwYXRoIGQ9Ik0wIDBoMzAwdjMwMEgweiIgZmlsdGVyPSJ1cmwoI2EpIiBvcGFjaXR5PSIuMDUiLz48L3N2Zz4=')]" />

                {/* Floating blurred shapes for depth */}
                <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-accent/10 to-blue-500/10 rounded-full blur-3xl opacity-40 animate-[float_20s_ease-in-out_infinite]" />
                <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-tl from-teal-500/10 to-accent/10 rounded-full blur-3xl opacity-30 animate-[float_25s_ease-in-out_infinite_reverse]" />

                <div className="container relative z-10">
                    <ScrollReveal>
                        <div className="max-w-5xl mx-auto">
                            {/* Premium Tag Pills with Gradients */}
                            <div className="flex items-center justify-center gap-3 mb-10 flex-wrap">
                                {/* Industry tag - primary accent gradient */}
                                <span className="group relative px-5 py-2.5 bg-gradient-to-r from-accent/20 via-accent/10 to-accent/5 border border-accent/30 rounded-full text-sm font-semibold text-accent hover:border-accent/50 transition-all duration-300 hover:shadow-lg hover:shadow-accent/20 hover:-translate-y-0.5 cursor-default">
                                    <span className="relative z-10">{caseStudy.industry}</span>
                                    <div className="absolute inset-0 bg-gradient-to-r from-accent/0 via-accent/10 to-accent/0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity blur-sm" />
                                </span>

                                {/* Location tag - glassmorphic */}
                                <span className="group flex items-center gap-2 px-4 py-2.5 bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-full text-sm font-medium text-white/70 hover:text-white/90 hover:border-white/20 transition-all duration-300 hover:shadow-lg hover:shadow-white/5 hover:-translate-y-0.5 cursor-default">
                                    <MapPin className="w-4 h-4 group-hover:text-accent transition-colors" />
                                    {caseStudy.location}
                                </span>

                                {/* Duration tag - glassmorphic */}
                                <span className="group flex items-center gap-2 px-4 py-2.5 bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-full text-sm font-medium text-white/70 hover:text-white/90 hover:border-white/20 transition-all duration-300 hover:shadow-lg hover:shadow-white/5 hover:-translate-y-0.5 cursor-default">
                                    <Clock className="w-4 h-4 group-hover:text-accent transition-colors" />
                                    {caseStudy.duration}
                                </span>
                            </div>

                            {/* Hero Title - Bold & Elegant Typography */}
                            <h1 className="text-center text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-[1.1] tracking-tight">
                                <span className="inline-block bg-gradient-to-br from-white via-white to-white/80 bg-clip-text text-transparent drop-shadow-2xl">
                                    {caseStudy.client}
                                </span>
                            </h1>

                            {/* Spacer for visual breathing room */}
                            <div className="h-12" />

                            {/* Challenge Card - Premium Glassmorphism with Elevation */}
                            <div className="relative group">
                                {/* Glow effect behind card */}
                                <div className="absolute -inset-1 bg-gradient-to-r from-red-500/20 via-orange-500/20 to-red-500/20 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                {/* Main glassmorphic card */}
                                <div className="relative p-10 md:p-14 rounded-3xl bg-gradient-to-br from-white/[0.07] via-white/[0.03] to-white/[0.01] backdrop-blur-2xl border border-white/10 shadow-2xl shadow-black/40 hover:shadow-red-500/10 transition-all duration-500 hover:border-white/20">
                                    {/* Subtle inner glow */}
                                    <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-red-500/5 via-transparent to-orange-500/5 opacity-50" />

                                    {/* Content */}
                                    <div className="relative z-10">
                                        {/* Icon badge with gradient */}
                                        <div className="inline-flex items-center gap-2.5 px-4 py-2.5 rounded-full bg-gradient-to-r from-red-500/15 via-red-500/10 to-orange-500/10 border border-red-400/30 mb-8 shadow-lg shadow-red-500/10">
                                            <div className="w-5 h-5 rounded-full bg-red-500/20 flex items-center justify-center">
                                                <Target className="w-3.5 h-3.5 text-red-400" />
                                            </div>
                                            <span className="text-sm font-bold tracking-wide text-red-400 uppercase">El Desafío</span>
                                        </div>

                                        {/* Challenge text with premium typography */}
                                        <p className="text-xl md:text-2xl lg:text-3xl text-white/90 leading-relaxed font-light tracking-tight">
                                            {caseStudy.challenge}
                                        </p>
                                    </div>

                                    {/* Decorative corner accents */}
                                    <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-red-500/10 to-transparent rounded-3xl blur-2xl" />
                                    <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-orange-500/10 to-transparent rounded-3xl blur-2xl" />
                                </div>
                            </div>
                        </div>
                    </ScrollReveal>
                </div>

                {/* Bottom gradient fade */}
                <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent pointer-events-none" />
            </section>

            {/* Solution - Layered Dark Section */}
            <section className="relative py-24 bg-[#0A0F1C]">
                <div className="container">
                    <div className="max-w-4xl mx-auto">
                        <ScrollReveal>
                            <div className="mb-12">
                                {/* Icon badge */}
                                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 mb-6">
                                    <Lightbulb className="w-4 h-4 text-accent" />
                                    <span className="text-sm font-medium text-accent">La Solución</span>
                                </div>

                                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">La Solución</h2>
                                <p className="text-lg md:text-xl text-white/80 leading-relaxed mb-10">
                                    {caseStudy.solution}
                                </p>

                                {/* Tools section */}
                                <div>
                                    <h3 className="text-xl font-semibold text-white mb-6">Herramientas utilizadas:</h3>
                                    <div className="flex flex-wrap gap-3">
                                        {caseStudy.tools.map((tool, index) => (
                                            <ScrollReveal key={index} delay={index * 0.05}>
                                                <span className="px-5 py-2.5 bg-gradient-to-r from-card/80 to-card/40 border border-border/40 hover:border-accent/30 rounded-full text-sm font-medium text-white/90 hover:text-white transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-accent/5">
                                                    {tool}
                                                </span>
                                            </ScrollReveal>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </ScrollReveal>
                    </div>
                </div>
            </section>

            {/* Results - Premium Stats Grid */}
            <section className="relative py-24 bg-background">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-accent/5 via-transparent to-transparent pointer-events-none" />

                <div className="container relative z-10">
                    <div className="max-w-5xl mx-auto">
                        <ScrollReveal>
                            <div className="text-center mb-16">
                                {/* Icon badge */}
                                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 mb-6">
                                    <TrendingUp className="w-4 h-4 text-accent" />
                                    <span className="text-sm font-medium text-accent">Resultados</span>
                                </div>

                                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Resultados</h2>
                                <p className="text-white/60 max-w-2xl mx-auto">Impacto medible en el negocio</p>
                            </div>
                        </ScrollReveal>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {caseStudy.results.map((result, index) => (
                                <ScrollReveal key={index} delay={index * 0.1}>
                                    <div className="group relative p-8 rounded-2xl bg-gradient-to-br from-card/80 to-card/40 border border-border/40 hover:border-accent/30 transition-all duration-300 hover:shadow-2xl hover:shadow-accent/10 hover:-translate-y-1">
                                        {/* Glow effect on hover */}
                                        <div className="absolute inset-0 bg-accent/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity blur-xl" />

                                        <div className="relative text-center">
                                            <div className="text-5xl md:text-6xl font-bold text-accent mb-3 group-hover:scale-110 transition-transform">
                                                {result.value}
                                            </div>
                                            <div className="text-lg font-semibold text-white mb-2">
                                                {result.metric}
                                            </div>
                                            <div className="text-sm text-white/60 leading-relaxed">
                                                {result.description}
                                            </div>
                                        </div>
                                    </div>
                                </ScrollReveal>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Testimonial - Dark Accent Section */}
            <section className="relative py-24 bg-gradient-to-br from-[#0A0F1C] to-background">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-accent/10 via-transparent to-transparent pointer-events-none" />

                <div className="container relative z-10">
                    <div className="max-w-3xl mx-auto">
                        <ScrollReveal>
                            <TestimonialCard
                                quote={caseStudy.testimonial.quote}
                                author={caseStudy.testimonial.author}
                                position={caseStudy.testimonial.position}
                            />
                        </ScrollReveal>
                    </div>
                </div>
            </section>

            {/* Services Used - Clean Grid */}
            <section className="relative py-24 bg-background">
                <div className="container">
                    <div className="max-w-4xl mx-auto">
                        <ScrollReveal>
                            <div className="text-center mb-12">
                                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Servicios implementados</h2>
                                <p className="text-white/60">Soluciones aplicadas en este proyecto</p>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {caseStudy.services.map((serviceSlug, index) => (
                                    <ScrollReveal key={index} delay={index * 0.05}>
                                        <div className="group flex items-center gap-4 p-6 rounded-xl bg-gradient-to-r from-card/60 to-card/30 border border-border/40 hover:border-accent/30 transition-all duration-300 hover:shadow-lg hover:shadow-accent/5">
                                            <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0 group-hover:bg-accent/20 transition-colors">
                                                <CheckCircle className="w-5 h-5 text-accent" />
                                            </div>
                                            <span className="font-medium text-white/90 group-hover:text-white transition-colors capitalize">
                                                {serviceSlug.replace(/-/g, ' ')}
                                            </span>
                                        </div>
                                    </ScrollReveal>
                                ))}
                            </div>
                        </ScrollReveal>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <CTASection
                title="¿Quieres resultados similares para tu negocio?"
                description="Agenda una auditoría gratuita y descubre cómo podemos ayudarte"
                primaryCTA={{
                    text: 'Solicitar Auditoría Gratuita',
                    href: '/contacto',
                }}
                secondaryCTA={{
                    text: 'Ver Más Casos',
                    href: '/casos-exito',
                }}
                variant="accent"
            />
        </>
    )
}

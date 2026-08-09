'use client'

import { motion } from 'framer-motion'
import { Hero } from '@/components/sections/Hero'
import { ServiceCard } from '@/components/sections/ServiceCard'
import { ProcessStep } from '@/components/sections/ProcessStep'
import { TrustBar } from '@/components/sections/TrustBar'
import { CTASection } from '@/components/sections/CTASection'
import { ScrollReveal } from '@/components/sections/ScrollReveal'
import { SectionBackground } from '@/components/sections/SectionBackground'
import { services } from '@/data/services'
import { ArrowRight, Search, Map, Zap, Rocket } from 'lucide-react'
import { useLanguage } from '@/lib/i18n'

export default function HomePage() {
    const { t } = useLanguage()

    return (
        <>
            {/* Hero Section */}
            <Hero
                title={t('home.hero.title')}
                subtitle={t('home.hero.subtitle')}
                primaryCTA={{
                    text: t('home.hero.cta.primary'),
                    href: '/contacto',
                }}
                benefits={[
                    t('home.hero.benefit1'),
                    t('home.hero.benefit2'),
                    t('home.hero.benefit3'),
                ]}
            />

            {/* Problem → Solution Section */}
            <section className="section-padding bg-background relative overflow-hidden">
                <SectionBackground variant="dots" glows={['top-right']} />
                <div className="container relative z-10">
                    <ScrollReveal>
                        <h2 className="text-h2 text-center mb-16 text-white">
                            {t('home.problem.title')}
                        </h2>
                    </ScrollReveal>

                    <div className="max-w-3xl mx-auto divide-y divide-white/10">
                        {[
                            { problem: t('home.problem.manual'), solution: t('home.solution.auto'), solutionDesc: t('home.solution.auto.desc') },
                            { problem: t('home.problem.errors'), solution: t('home.solution.zero'), solutionDesc: t('home.solution.zero.desc') },
                            { problem: t('home.problem.slow'), solution: t('home.solution.247'), solutionDesc: t('home.solution.247.desc') },
                        ].map((row, i) => (
                            <ScrollReveal key={i} delay={i * 0.1}>
                                <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6 py-6">
                                    <span className="text-base sm:text-lg text-white/40 line-through decoration-white/20 sm:w-[38%] sm:text-right sm:flex-shrink-0">
                                        {row.problem}
                                    </span>
                                    <ArrowRight className="hidden sm:block w-5 h-5 text-accent flex-shrink-0" />
                                    <span className="text-lg sm:text-xl font-semibold text-white">
                                        {row.solution}
                                        <span className="block sm:inline sm:before:content-['_—_'] text-sm sm:text-base font-normal text-white/60">
                                            {row.solutionDesc}
                                        </span>
                                    </span>
                                </div>
                            </ScrollReveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* How It Works */}
            <section className="section-padding bg-background relative overflow-hidden">
                <SectionBackground variant="grid" glows={['left']} />
                <div className="container relative z-10">
                    <ScrollReveal>
                        <h2 className="text-h2 text-center mb-4 text-white">{t('home.how.title')}</h2>
                        <p className="text-body text-center text-white/70 mb-16 max-w-2xl mx-auto">
                            {t('home.how.subtitle')}
                        </p>
                    </ScrollReveal>

                    <div className="max-w-4xl mx-auto space-y-0">
                        <ProcessStep
                            icon={<Search className="w-7 h-7 text-accent" />}
                            title={t('home.how.step1.title')}
                            description={t('home.how.step1.desc')}
                            deliverables={[
                                t('home.how.step1.del1'),
                                t('home.how.step1.del2'),
                                t('home.how.step1.del3'),
                            ]}
                            isFirst={true}
                        />

                        <ProcessStep
                            icon={<Map className="w-7 h-7 text-accent" />}
                            title={t('home.how.step2.title')}
                            description={t('home.how.step2.desc')}
                            deliverables={[
                                t('home.how.step2.del1'),
                                t('home.how.step2.del2'),
                                t('home.how.step2.del3'),
                            ]}
                        />

                        <ProcessStep
                            icon={<Zap className="w-7 h-7 text-accent" />}
                            title={t('home.how.step3.title')}
                            description={t('home.how.step3.desc')}
                            deliverables={[
                                t('home.how.step3.del1'),
                                t('home.how.step3.del2'),
                                t('home.how.step3.del3'),
                            ]}
                        />

                        <ProcessStep
                            icon={<Rocket className="w-7 h-7 text-accent" />}
                            title={t('home.how.step4.title')}
                            description={t('home.how.step4.desc')}
                            deliverables={[
                                t('home.how.step4.del1'),
                                t('home.how.step4.del2'),
                                t('home.how.step4.del3'),
                            ]}
                            isLast={true}
                        />
                    </div>
                </div>
            </section>

            {/* Services Grid */}
            <section className="section-padding bg-muted/30 relative overflow-hidden">
                <SectionBackground variant="dots" glows={['bottom']} />
                <div className="container relative z-10">
                    <ScrollReveal>
                        <div className="max-w-5xl mx-auto mb-16 md:mb-20">
                            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 md:gap-12">
                                <h2 className="text-h2 max-w-xl">{t('home.services.title')}</h2>
                                <p className="text-body text-muted-foreground max-w-sm md:text-right md:pb-2">
                                    {t('home.services.subtitle')}
                                </p>
                            </div>
                            <div className="w-24 h-1.5 bg-accent rounded-full mt-8" />
                        </div>
                    </ScrollReveal>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
                        {services.map((service, index) => {
                            const Icon = service.icon
                            return (
                                <ScrollReveal key={service.id} delay={index * 0.1}>
                                    <ServiceCard
                                        title={service.title}
                                        description={service.shortDescription}
                                        icon={<Icon className="w-6 h-6 text-accent transition-transform duration-500 group-hover:scale-110" />}
                                        features={service.features}
                                        href={`/servicios/${service.slug}`}
                                    />
                                </ScrollReveal>
                            )
                        })}
                    </div>
                </div>
            </section>

            {/* Use Cases & Trust Section */}
            <section className="section-padding relative bg-background overflow-hidden">
                {/* Background Effects */}
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-accent/5 via-background to-background pointer-events-none" />

                <div className="container relative z-10">
                    <ScrollReveal>
                        <h2 className="text-h2 text-center mb-16 text-white">{t('home.usecases.title')}</h2>
                    </ScrollReveal>

                    {/* Use Cases */}
                    <div className="flex flex-wrap justify-center gap-2.5 max-w-3xl mx-auto px-4 mb-16 lg:mb-20">
                        {[1, 2, 3, 4, 5, 6].map((num, index) => (
                            <motion.span
                                key={num}
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: '-40px' }}
                                transition={{ delay: index * 0.04, duration: 0.3 }}
                                className="text-sm text-white/75 bg-white/[0.03] px-4 py-2 rounded-full border border-white/10 hover:border-accent/30 hover:text-white transition-colors duration-300 cursor-default"
                            >
                                {t(`home.usecase.${num}`)}
                            </motion.span>
                        ))}
                    </div>

                    {/* Divider */}
                    <div className="relative w-full max-w-4xl mx-auto mb-16 lg:mb-20">
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-accent/50 to-transparent blur-sm h-px" />
                        <div className="w-full h-px bg-gradient-to-r from-transparent via-accent/20 to-transparent" />
                    </div>

                    {/* Trust Bar */}
                    <TrustBar />
                </div>
            </section>

            {/* Final CTA */}
            <CTASection
                title={t('home.cta.title')}
                description={t('home.cta.desc')}
                primaryCTA={{
                    text: t('home.cta.primary'),
                    href: '/contacto',
                }}
            />
        </>
    )
}

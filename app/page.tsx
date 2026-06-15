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
import { ArrowRight, CheckCircle, XCircle, Search, Map, Zap, Rocket } from 'lucide-react'
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

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                        <ScrollReveal delay={0.1}>
                            <div className="text-center p-6 bg-destructive/10 border border-destructive/30 rounded-lg">
                                <XCircle className="w-12 h-12 text-destructive mx-auto mb-4" />
                                <h3 className="font-semibold text-lg mb-2 text-white">{t('home.problem.manual')}</h3>
                                <p className="text-sm text-white/70">
                                    {t('home.problem.manual.desc')}
                                </p>
                            </div>
                        </ScrollReveal>

                        <ScrollReveal delay={0.2}>
                            <div className="text-center p-6 bg-destructive/10 border border-destructive/30 rounded-lg">
                                <XCircle className="w-12 h-12 text-destructive mx-auto mb-4" />
                                <h3 className="font-semibold text-lg mb-2 text-white">{t('home.problem.errors')}</h3>
                                <p className="text-sm text-white/70">
                                    {t('home.problem.errors.desc')}
                                </p>
                            </div>
                        </ScrollReveal>

                        <ScrollReveal delay={0.3}>
                            <div className="text-center p-6 bg-destructive/10 border border-destructive/30 rounded-lg">
                                <XCircle className="w-12 h-12 text-destructive mx-auto mb-4" />
                                <h3 className="font-semibold text-lg mb-2 text-white">{t('home.problem.slow')}</h3>
                                <p className="text-sm text-white/70">
                                    {t('home.problem.slow.desc')}
                                </p>
                            </div>
                        </ScrollReveal>
                    </div>

                    <div className="flex justify-center my-8">
                        <ArrowRight className="w-8 h-8 text-accent rotate-90" />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                        <ScrollReveal delay={0.4}>
                            <div className="text-center p-6 bg-accent/10 border border-accent/30 rounded-lg">
                                <CheckCircle className="w-12 h-12 text-accent mx-auto mb-4" />
                                <h3 className="font-semibold text-lg mb-2 text-white">{t('home.solution.auto')}</h3>
                                <p className="text-sm text-white/70">
                                    {t('home.solution.auto.desc')}
                                </p>
                            </div>
                        </ScrollReveal>

                        <ScrollReveal delay={0.5}>
                            <div className="text-center p-6 bg-accent/10 border border-accent/30 rounded-lg">
                                <CheckCircle className="w-12 h-12 text-accent mx-auto mb-4" />
                                <h3 className="font-semibold text-lg mb-2 text-white">{t('home.solution.zero')}</h3>
                                <p className="text-sm text-white/70">
                                    {t('home.solution.zero.desc')}
                                </p>
                            </div>
                        </ScrollReveal>

                        <ScrollReveal delay={0.6}>
                            <div className="text-center p-6 bg-accent/10 border border-accent/30 rounded-lg">
                                <CheckCircle className="w-12 h-12 text-accent mx-auto mb-4" />
                                <h3 className="font-semibold text-lg mb-2 text-white">{t('home.solution.247')}</h3>
                                <p className="text-sm text-white/70">
                                    {t('home.solution.247.desc')}
                                </p>
                            </div>
                        </ScrollReveal>
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
                        <div className="flex flex-col items-center mb-16">
                            <h2 className="text-h2 text-center mb-6">{t('home.services.title')}</h2>
                            <div className="w-24 h-1.5 bg-accent rounded-full mb-8" />
                            <p className="text-body text-center text-muted-foreground max-w-2xl mx-auto">
                                {t('home.services.subtitle')}
                            </p>
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
            <section className="relative py-24 bg-background overflow-hidden">
                {/* Background Effects */}
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-accent/5 via-background to-background pointer-events-none" />

                <div className="container relative z-10">
                    <ScrollReveal>
                        <h2 className="text-h2 text-center mb-16 text-white">{t('home.usecases.title')}</h2>
                    </ScrollReveal>

                    {/* Use Cases Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto px-4 mb-16 lg:mb-20">
                        {[1, 2, 3, 4, 5, 6].map((num, index) => (
                            <motion.div
                                key={num}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: '-40px' }}
                                transition={{ delay: index * 0.05, duration: 0.4 }}
                                className={`
                                    flex items-center gap-4 p-4 rounded-lg border border-white/5 bg-white/[0.02]
                                    hover:bg-white/[0.04] hover:border-accent/30 hover:-translate-y-0.5 transition-all duration-300 cursor-default
                                    ${index % 3 === 1 ? 'lg:translate-y-6 lg:hover:translate-y-[calc(1.5rem-2px)]' : ''}
                                `}
                            >
                                <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0 border border-accent/20 shadow-[0_0_10px_rgba(0,184,169,0.1)]">
                                    <CheckCircle className="w-4 h-4 text-accent drop-shadow-[0_0_5px_rgba(0,184,169,0.5)]" />
                                </div>
                                <span className="text-sm font-medium text-white/90 tracking-wide">{t(`home.usecase.${num}`)}</span>
                            </motion.div>
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
                variant="accent"
            />
        </>
    )
}

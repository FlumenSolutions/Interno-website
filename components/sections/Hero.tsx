'use client'

import { Button } from '@/components/ui/button'
import { WavyBackground } from '@/components/ui/wavy-background'
import { CheckCircle } from 'lucide-react'
import Link from 'next/link'

interface HeroProps {
    title: string
    subtitle: string
    description?: string
    primaryCTA?: {
        text: string
        href: string
    }
    secondaryCTA?: {
        text: string
        href: string
    }
    benefits?: string[]
}

export function Hero({ title, subtitle, description, primaryCTA, secondaryCTA, benefits }: HeroProps) {
    return (
        <WavyBackground
            className="max-w-5xl mx-auto"
            containerClassName="relative min-h-[100svh] md:min-h-screen"
            colors={[
                "#26377D", // Flumen Deep Blue
                "#00B8A9", // Aqua/Teal
                "#C2DDE5", // Light Blue
                "#4A5F9D", // Medium Blue
                "#1ECAD3", // Bright Aqua
            ]}
            waveWidth={48}
            backgroundFill="#0F1524"
            blur={11}
            speed="slow"
            waveOpacity={0.5}
        >
            <div className="text-center px-4 pt-24 md:pt-32">
                {/* Title */}
                <h1
                    className="hero-rise mx-auto max-w-[18ch] text-balance font-bold text-white mb-6 leading-[1.08] tracking-[-0.02em]"
                    style={{ fontSize: "clamp(2.25rem, 6vw, 5.25rem)", ['--hero-delay' as any]: '40ms' }}
                >
                    {title}
                </h1>

                {/* Subtitle */}
                <p
                    className="hero-rise text-pretty text-lg sm:text-xl md:text-2xl text-white/85 mb-8 max-w-2xl mx-auto leading-relaxed"
                    style={{ ['--hero-delay' as any]: '160ms' }}
                >
                    {subtitle}
                </p>

                {/* Description */}
                {description && (
                    <p
                        className="hero-rise text-pretty text-base sm:text-lg text-white/65 mb-10 max-w-2xl mx-auto leading-relaxed"
                        style={{ ['--hero-delay' as any]: '240ms' }}
                    >
                        {description}
                    </p>
                )}

                {/* CTAs */}
                <div
                    className="hero-rise flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
                    style={{ ['--hero-delay' as any]: '320ms' }}
                >
                    {primaryCTA && (
                        <Button
                            asChild
                            size="lg"
                            className="w-full sm:w-auto text-lg px-8 py-6 rounded-xl bg-accent hover:bg-accent/90 text-white shadow-lg shadow-accent/20 hover:shadow-xl hover:shadow-accent/30 hover:-translate-y-0.5 transition-all group"
                        >
                            <Link href={primaryCTA.href}>
                                {primaryCTA.text}
                                <span className="ml-2 group-hover:translate-x-1 transition-transform inline-block">
                                    →
                                </span>
                            </Link>
                        </Button>
                    )}
                    {secondaryCTA && (
                        <Button
                            asChild
                            variant="outline"
                            size="lg"
                            className="w-full sm:w-auto text-lg px-8 py-6 rounded-xl bg-white/10 hover:bg-white/20 text-white border-white/30 backdrop-blur-sm"
                        >
                            <Link href={secondaryCTA.href}>{secondaryCTA.text}</Link>
                        </Button>
                    )}
                </div>

                {/* Benefits */}
                {benefits && benefits.length > 0 && (
                    <ul
                        className="hero-rise flex flex-wrap gap-3 sm:gap-4 justify-center items-center mb-8"
                        style={{ ['--hero-delay' as any]: '400ms' }}
                    >
                        {benefits.map((benefit, index) => (
                            <li
                                key={index}
                                className="flex items-center gap-2 text-sm md:text-base text-white/90 bg-white/[0.06] px-4 py-2 rounded-full border border-white/10"
                            >
                                <CheckCircle className="w-4 h-4 md:w-5 md:h-5 text-accent flex-shrink-0" />
                                <span>{benefit}</span>
                            </li>
                        ))}
                    </ul>
                )}

                {/* Scroll Indicator */}
                <div className="hero-rise flex justify-center" style={{ ['--hero-delay' as any]: '600ms' }}>
                    <div className="hero-scroll-dot w-6 h-10 border-2 border-white/40 rounded-full flex items-start justify-center p-2">
                        <span className="block w-1.5 h-1.5 bg-white/80 rounded-full" />
                    </div>
                </div>
            </div>
        </WavyBackground>
    )
}

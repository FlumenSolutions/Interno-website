'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'
import { ScrollReveal } from './ScrollReveal'

interface CTASectionProps {
    title: string
    description: string
    primaryCTA: {
        text: string
        href: string
    }
    secondaryCTA?: {
        text: string
        href: string
    }
    variant?: 'default' | 'accent'
}

export function CTASection({
    title,
    description,
    primaryCTA,
    secondaryCTA,
    variant = 'default',
}: CTASectionProps) {
    return (
        <section className="relative py-28 md:py-36 overflow-hidden">
            {/* Background Gradient.
                Usa accent-700 → accent-800 y no el teal DEFAULT: sobre #00B8A9
                el titular blanco daba 2,49:1 y el párrafo 2,27:1, muy por
                debajo del 3:1 y 4,5:1 que exige WCAG AA. Con accent-700 como
                extremo claro quedan en 6,14:1 y 5,33:1 sin salirse de la
                escala de marca ya definida en tailwind.config. */}
            <div className="absolute inset-0 bg-gradient-to-br from-accent-700 to-accent-800" />

            {/* Content */}
            <div className="container relative z-10">
                <ScrollReveal className="max-w-4xl mx-auto text-center">
                    <h2 className="text-balance text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 tracking-tight leading-[0.98]">
                        {title}
                    </h2>
                    <p className="text-lg md:text-xl text-white/90 mb-10 max-w-2xl mx-auto leading-relaxed font-medium">
                        {description}
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        {/* Primary Button */}
                        <Button
                            asChild
                            size="xl"
                            className="bg-white text-accent-700 hover:bg-white/95 hover:-translate-y-1 hover:scale-[1.02] shadow-lg hover:shadow-2xl transition-all duration-300 ease-out font-bold px-8 h-14 rounded-xl group"
                        >
                            <Link href={primaryCTA.href}>
                                {primaryCTA.text}
                                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </Button>

                        {/* Secondary Button */}
                        {secondaryCTA && (
                            <Button
                                asChild
                                size="xl"
                                variant="outline"
                                // border-white/60 y no /30: el borde es lo único que
                                // delimita este botón, y a 30% quedaba en 1,86:1 sobre
                                // el fondo — por debajo del 3:1 que WCAG pide a un
                                // elemento de interfaz. A 60% da 3,25:1.
                                className="bg-transparent border-2 border-white/60 text-white hover:bg-white/10 hover:border-white hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] transition-all duration-300 font-semibold px-8 h-14 rounded-xl"
                            >
                                <Link href={secondaryCTA.href}>{secondaryCTA.text}</Link>
                            </Button>
                        )}
                    </div>
                </ScrollReveal>
            </div>
        </section>
    )
}

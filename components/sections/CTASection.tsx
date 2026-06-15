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
        <section className="relative py-20 overflow-hidden">
            {/* Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#00B8A9] to-[#009F95]" />

            {/* Content */}
            <div className="container relative z-10">
                <ScrollReveal className="max-w-4xl mx-auto text-center">
                    <h2 className="text-balance text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
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
                            className="bg-white text-[#009F95] hover:bg-white/95 hover:-translate-y-0.5 shadow-lg hover:shadow-xl transition-all duration-300 font-bold px-8 h-14 rounded-xl group"
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
                                className="bg-transparent border-2 border-white/30 text-white hover:bg-white/10 hover:border-white hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] transition-all duration-300 font-semibold px-8 h-14 rounded-xl"
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

'use client'

import { ScrollReveal } from '@/components/sections/ScrollReveal'

interface PageHeaderProps {
    title: string
    subtitle?: string
    description?: string
    centered?: boolean
}

export function PageHeader({ title, subtitle, description, centered = true }: PageHeaderProps) {
    return (
        <section className="pt-32 pb-16 md:pt-40 md:pb-20 bg-background relative overflow-hidden">
            {/* Subtle background glow - consistent across all headers */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-64 bg-accent/5 blur-[100px] rounded-full pointer-events-none" />

            <div className="container relative z-10">
                <ScrollReveal>
                    <div className={`max-w-4xl ${centered ? 'mx-auto text-center' : ''}`}>
                        {subtitle && (
                            <span className="inline-block px-3 py-1 mb-6 text-xs font-medium tracking-widest uppercase border border-white/10 rounded-full text-accent bg-accent/5">
                                {subtitle}
                            </span>
                        )}
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight text-white mb-6 leading-tight">
                            {title}
                        </h1>
                        {description && (
                            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                                {description}
                            </p>
                        )}
                    </div>
                </ScrollReveal>
            </div>
        </section>
    )
}

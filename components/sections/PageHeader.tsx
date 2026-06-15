'use client'

import { ScrollReveal } from '@/components/sections/ScrollReveal'
import { SectionBackground } from '@/components/sections/SectionBackground'

interface PageHeaderProps {
    title: string
    description?: string
    centered?: boolean
}

export function PageHeader({ title, description, centered = true }: PageHeaderProps) {
    return (
        <section className="pt-32 pb-16 md:pt-40 md:pb-20 bg-background relative overflow-hidden">
            <SectionBackground variant="dots" glows={['top']} />

            <div className="container relative z-10">
                <ScrollReveal>
                    <div className={`max-w-4xl ${centered ? 'mx-auto text-center' : ''}`}>
                        <h1 className="text-balance text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-5 leading-[1.1]">
                            {title}
                        </h1>
                        {description && (
                            <p className="text-pretty text-lg md:text-xl text-white/70 leading-relaxed max-w-2xl mx-auto">
                                {description}
                            </p>
                        )}
                    </div>
                </ScrollReveal>
            </div>
        </section>
    )
}

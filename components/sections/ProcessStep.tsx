'use client'

import { CheckCircle2 } from 'lucide-react'
import { ScrollReveal } from './ScrollReveal'

interface ProcessStepProps {
    icon: React.ReactNode
    title: string
    description: string
    deliverables?: string[]
    isFirst?: boolean
    isLast?: boolean
}

export function ProcessStep({ icon, title, description, deliverables, isFirst, isLast }: ProcessStepProps) {
    return (
        <ScrollReveal className="relative flex gap-6 md:gap-12 pb-16 last:pb-0">
            {/* Timeline Line */}
            {!isLast && (
                <div className="absolute left-[32px] top-[68px] bottom-0 w-0.5 bg-gradient-to-b from-accent/60 to-accent/10" />
            )}

            {/* Icon Column */}
            <div className="flex-shrink-0 relative z-10">
                <div className="w-16 h-16 rounded-2xl bg-background border border-accent/30 flex items-center justify-center shadow-[0_0_25px_rgba(0,184,169,0.3)] group hover:scale-110 hover:border-accent/60 transition-all duration-300">
                    {icon}
                </div>
            </div>

            {/* Content Column */}
            <div className="flex-1 pt-1.5">
                <h3 className="text-2xl md:text-4xl font-black text-white mb-3 tracking-tight">
                    {title}
                </h3>
                <p className="text-lg text-white/70 mb-6 max-w-xl leading-relaxed">
                    {description}
                </p>

                {/* Deliverables */}
                {deliverables && deliverables.length > 0 && (
                    <div className="flex flex-wrap gap-3">
                        {deliverables.map((item, i) => (
                            <div key={i} className="flex items-center gap-2 text-white/90 bg-white/5 px-3 py-1.5 rounded-lg border border-white/10 hover:border-accent/30 hover:bg-accent/5 transition-all duration-300">
                                <CheckCircle2 className="w-4 h-4 text-accent" />
                                <span className="text-sm font-medium">{item}</span>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </ScrollReveal>
    )
}

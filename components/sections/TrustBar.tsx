'use client'

import { Award, Clock, Users, ShieldCheck } from 'lucide-react'
import { ScrollReveal } from './ScrollReveal'

const trustMetrics = [
    {
        icon: Award,
        value: 'IA + código',
        label: 'Construimos más rápido con IA de última generación',
    },
    {
        icon: Users,
        value: 'Fundadores',
        label: 'Ingenieros que construyen tu solución',
    },
    {
        icon: Clock,
        value: 'A la medida',
        label: 'Software hecho para tu negocio, no plantillas',
    },
    {
        icon: ShieldCheck,
        value: 'Local',
        label: 'Equipo e infraestructura en Colombia',
    },
]

export function TrustBar() {
    return (
        <ScrollReveal>
            <div className="flex flex-wrap justify-center gap-3 md:gap-4 max-w-4xl mx-auto px-4">
                {trustMetrics.map((metric, index) => {
                    const Icon = metric.icon
                    return (
                        <div
                            key={index}
                            className="flex items-center gap-2.5 text-white/90 bg-white/5 px-4 py-2.5 rounded-lg border border-white/10 hover:border-accent/30 hover:bg-accent/5 transition-all duration-300"
                        >
                            <Icon className="w-4 h-4 text-accent flex-shrink-0" />
                            <span className="text-sm font-medium">{metric.label}</span>
                        </div>
                    )
                })}
            </div>
        </ScrollReveal>
    )
}

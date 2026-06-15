'use client'

import { Award, Clock, Users, ShieldCheck } from 'lucide-react'
import { ScrollReveal } from './ScrollReveal'

const trustMetrics = [
    {
        icon: Award,
        value: 'n8n / Make',
        label: 'Herramientas que dominamos',
    },
    {
        icon: Users,
        value: 'Fundadores',
        label: 'Ingenieros que construyen tu solución',
    },
    {
        icon: Clock,
        value: '24/7',
        label: 'Automatizaciones que no descansan',
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
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 max-w-5xl mx-auto px-4">
                {trustMetrics.map((metric, index) => {
                    const Icon = metric.icon
                    return (
                        <div key={index} className="text-center group">
                            <div className="w-14 h-14 mx-auto mb-5 rounded-2xl bg-white/5 border border-white/5 flex items-center justify-center group-hover:bg-accent/10 group-hover:border-accent/20 transition-all duration-500 shadow-lg shadow-black/20">
                                <Icon className="w-7 h-7 text-accent/70 group-hover:text-accent transition-colors duration-500" />
                            </div>
                            <div className="text-2xl md:text-3xl font-bold text-white mb-2 tracking-tight">{metric.value}</div>
                            <div className="text-sm text-white/65 font-medium uppercase tracking-wider">{metric.label}</div>
                        </div>
                    )
                })}
            </div>
        </ScrollReveal>
    )
}

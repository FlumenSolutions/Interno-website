'use client'

import { motion } from 'framer-motion'
import { Building2, Award, Clock, Users } from 'lucide-react'

const trustMetrics = [
    {
        icon: Building2,
        value: '50+',
        label: 'Empresas automatizadas',
    },
    {
        icon: Award,
        value: 'Certificados',
        label: 'Especialistas n8n/Make',
    },
    {
        icon: Users,
        value: 'Local',
        label: 'Infraestructura en Colombia',
    },
    {
        icon: Clock,
        value: '<24h',
        label: 'Tiempo de respuesta',
    },
]

export function TrustBar() {
    return (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 max-w-5xl mx-auto px-4">
            {trustMetrics.map((metric, index) => {
                const Icon = metric.icon
                return (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 + index * 0.1 }}
                        className="text-center group"
                    >
                        <div className="w-14 h-14 mx-auto mb-5 rounded-2xl bg-white/5 border border-white/5 flex items-center justify-center group-hover:bg-accent/10 group-hover:border-accent/20 transition-all duration-500 shadow-lg shadow-black/20">
                            <Icon className="w-7 h-7 text-accent/70 group-hover:text-accent transition-colors duration-500" />
                        </div>
                        <div className="text-3xl md:text-4xl font-bold text-white mb-2 tracking-tight">{metric.value}</div>
                        <div className="text-sm text-white/50 font-medium uppercase tracking-wider">{metric.label}</div>
                    </motion.div>
                )
            })}
        </div>
    )
}

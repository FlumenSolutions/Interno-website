'use client'

import { Button } from '@/components/ui/button'
import { WavyBackground } from '@/components/ui/wavy-background'
import { motion } from 'framer-motion'
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
            containerClassName="relative"
            colors={[
                "#26377D", // Flumen Deep Blue
                "#00B8A9", // Aqua/Teal
                "#C2DDE5", // Light Blue
                "#4A5F9D", // Medium Blue
                "#1ECAD3", // Bright Aqua
            ]}
            waveWidth={60}
            backgroundFill="#1C2536"
            blur={12}
            speed="slow"
            waveOpacity={0.6}
        >
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-center px-4 pt-24 md:pt-32"
            >
                {/* Title */}
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 tracking-tight">
                    {title}
                </h1>

                {/* Subtitle */}
                <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto">
                    {subtitle}
                </p>

                {/* Description */}
                {description && (
                    <p className="text-lg text-white/70 mb-10 max-w-2xl mx-auto">
                        {description}
                    </p>
                )}

                {/* CTAs */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
                    {primaryCTA && (
                        <Button
                            asChild
                            size="lg"
                            className="text-lg px-8 py-6 rounded-xl bg-accent hover:bg-accent/90 text-white shadow-lg hover:shadow-xl transition-all group"
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
                            className="text-lg px-8 py-6 rounded-xl bg-white/10 hover:bg-white/20 text-white border-white/30 backdrop-blur-sm"
                        >
                            <Link href={secondaryCTA.href}>{secondaryCTA.text}</Link>
                        </Button>
                    )}
                </div>

                {/* Benefits */}
                {benefits && benefits.length > 0 && (
                    <div className="flex flex-wrap gap-6 justify-center items-center mb-8">
                        {benefits.map((benefit, index) => (
                            <div
                                key={index}
                                className="flex items-center gap-2 text-sm md:text-base text-white/80 bg-white/5 backdrop-blur-sm px-4 py-2 rounded-full border border-white/10"
                            >
                                <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                                <span>{benefit}</span>
                            </div>
                        ))}
                    </div>
                )}

                {/* Scroll Indicator - Below benefits */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1, duration: 1 }}
                    className="flex justify-center"
                >
                    <motion.div
                        animate={{ y: [0, 10, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2"
                    >
                        <motion.div
                            animate={{ y: [0, 12, 0] }}
                            transition={{ duration: 2, repeat: Infinity }}
                            className="w-1.5 h-1.5 bg-white/80 rounded-full"
                        />
                    </motion.div>
                </motion.div>
            </motion.div>
        </WavyBackground>
    )
}

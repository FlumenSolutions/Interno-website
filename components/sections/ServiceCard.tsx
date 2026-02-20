'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { ArrowRight, ChevronDown, ChevronUp, Check } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

interface ServiceCardProps {
    title: string
    description: string
    icon: React.ReactNode
    features: string[]
    href: string
}

export function ServiceCard({ title, description, icon, features, href }: ServiceCardProps) {
    const [isExpanded, setIsExpanded] = useState(false)

    return (
        <motion.div
            whileHover={{ y: -5 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="h-full"
        >
            <Card className="h-full flex flex-col bg-card border-border/40 hover:border-accent/50 hover:shadow-xl hover:shadow-accent/5 transition-all duration-500 group overflow-hidden relative rounded-xl">
                {/* Top Accent Line */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-accent/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <CardHeader className="pb-2 pt-6 px-6">
                    <div className="flex items-center gap-4 mb-3">
                        {/* Icon Container */}
                        <div className="w-12 h-12 flex-shrink-0 rounded-xl bg-background border border-border group-hover:border-accent/30 flex items-center justify-center shadow-sm group-hover:shadow-[0_0_15px_rgba(0,184,169,0.2)] transition-all duration-500">
                            {icon}
                        </div>

                        <h3 className="text-xl font-bold group-hover:text-accent transition-colors duration-300">
                            {title}
                        </h3>
                    </div>

                    <p className="text-muted-foreground text-sm leading-relaxed line-clamp-2">
                        {description}
                    </p>
                </CardHeader>

                <CardContent className="flex-1 px-6 py-4">
                    <div className="space-y-3">
                        {/* Visible Features (First 3) */}
                        {features.slice(0, 3).map((feature, index) => (
                            <div key={index} className="flex items-start gap-2.5 text-sm group/item">
                                <div className="mt-1 w-4 h-4 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0 group-hover/item:bg-accent/20 transition-colors">
                                    <Check className="w-2.5 h-2.5 text-accent" />
                                </div>
                                <span className="text-muted-foreground/80 group-hover/item:text-muted-foreground transition-colors">{feature}</span>
                            </div>
                        ))}

                        {/* Expandable Features */}
                        <AnimatePresence>
                            {isExpanded && (
                                <motion.div
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: 'auto', opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    transition={{ duration: 0.3 }}
                                    className="overflow-hidden space-y-3"
                                >
                                    {features.slice(3).map((feature, index) => (
                                        <div key={index + 3} className="flex items-start gap-2.5 text-sm group/item">
                                            <div className="mt-1 w-4 h-4 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0 group-hover/item:bg-accent/20 transition-colors">
                                                <Check className="w-2.5 h-2.5 text-accent" />
                                            </div>
                                            <span className="text-muted-foreground/80 group-hover/item:text-muted-foreground transition-colors">{feature}</span>
                                        </div>
                                    ))}
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>

                    {features.length > 3 && (
                        <button
                            onClick={(e) => {
                                e.preventDefault()
                                setIsExpanded(!isExpanded)
                            }}
                            className="mt-4 text-xs font-medium text-accent flex items-center gap-1 hover:text-accent/80 transition-colors focus:outline-none"
                        >
                            {isExpanded ? (
                                <>
                                    Ver menos <ChevronUp className="w-3 h-3" />
                                </>
                            ) : (
                                <>
                                    Ver más detalles <ChevronDown className="w-3 h-3" />
                                </>
                            )}
                        </button>
                    )}
                </CardContent>

                <CardFooter className="px-6 pb-6 pt-0">
                    <Button asChild className="w-full bg-primary text-white hover:bg-primary/90 shadow-md hover:shadow-lg transition-all duration-300 h-10 rounded-lg text-sm font-medium group/btn">
                        <Link href={href}>
                            Solicitar servicio
                            <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                        </Link>
                    </Button>
                </CardFooter>
            </Card>
        </motion.div>
    )
}

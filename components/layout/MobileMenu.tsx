'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { motion, AnimatePresence } from 'framer-motion'

const navigation = [
    { name: 'Servicios', href: '/servicios' },
    { name: 'Proceso', href: '/proceso' },
    { name: 'Recursos', href: '/recursos' },
    { name: 'Nosotros', href: '/nosotros' },
    { name: 'Contacto', href: '/contacto' },
]

interface MobileMenuProps {
    isOpen: boolean
    onClose: () => void
}

export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-black/50 z-40 lg:hidden"
                    />

                    {/* Menu */}
                    <motion.div
                        initial={{ x: '100%' }}
                        animate={{ x: 0 }}
                        exit={{ x: '100%' }}
                        transition={{ type: 'tween', duration: 0.3 }}
                        className="fixed top-16 md:top-20 right-0 bottom-0 w-full max-w-sm bg-[#0F1524]/95 backdrop-blur-lg border-l border-white/10 z-40 lg:hidden shadow-xl"
                    >
                        <div className="flex flex-col h-full p-6">
                            <nav className="flex-1 space-y-2">
                                {navigation.map((item) => (
                                    <Link
                                        key={item.name}
                                        href={item.href}
                                        onClick={onClose}
                                        className="block px-4 py-3 text-lg font-medium text-white/65 hover:text-white hover:bg-white/5 rounded-lg transition-colors"
                                    >
                                        {item.name}
                                    </Link>
                                ))}
                            </nav>

                            <div className="pt-6 border-t border-white/10">
                                <Button asChild className="w-full" size="lg">
                                    <Link href="/contacto" onClick={onClose}>
                                        Cuéntanos tu idea
                                    </Link>
                                </Button>
                            </div>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    )
}

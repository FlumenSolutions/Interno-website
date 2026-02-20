'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Menu, X } from 'lucide-react'
import { MobileMenu } from './MobileMenu'
import { LanguageSwitcher } from './LanguageSwitcher'
import { useLanguage } from '@/lib/i18n'

const navigation = [
    { nameKey: 'nav.services', href: '/servicios' },
    { nameKey: 'nav.cases', href: '/casos-exito' },
    { nameKey: 'nav.process', href: '/proceso' },
    { nameKey: 'nav.resources', href: '/recursos' },
    { nameKey: 'nav.about', href: '/nosotros' },
]

export function Navbar() {
    const { t } = useLanguage()
    const [isScrolled, setIsScrolled] = useState(false)
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <>
            <nav
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-background/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
                    }`}
            >
                <div className="w-full px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16 md:h-20">
                        {/* Logo - Flush Left with Subtle Glow - Shrinks on Scroll */}
                        <Link href="/" className="flex items-center">
                            <Image
                                src="/logoinverted.svg"
                                alt="Flumen Solutions"
                                width={48}
                                height={48}
                                className={`w-auto transition-all duration-300 ${isScrolled ? 'h-8' : 'h-11'
                                    }`}
                                style={{
                                    filter: 'drop-shadow(0 0 6px rgba(194, 221, 229, 0.4)) drop-shadow(0 0 12px rgba(255, 255, 255, 0.25))'
                                }}
                                priority
                            />
                        </Link>

                        {/* Navigation Group - Flush Right */}
                        <div className="hidden lg:flex items-center gap-6">
                            {/* Navigation Links */}
                            {navigation.map((item) => (
                                <Link
                                    key={item.nameKey}
                                    href={item.href}
                                    className="text-lg font-semibold text-white hover:text-accent transition-colors"
                                >
                                    {t(item.nameKey)}
                                </Link>
                            ))}

                            {/* Language Switcher */}
                            <LanguageSwitcher />

                            {/* CTA Button */}
                            <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-white font-semibold text-base">
                                <Link href="/contacto">{t('nav.cta')}</Link>
                            </Button>
                        </div>

                        {/* Mobile Menu Button */}
                        <button
                            className="lg:hidden p-2 text-white hover:text-accent transition-colors"
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            aria-label="Toggle menu"
                        >
                            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                        </button>
                    </div>
                </div>
            </nav>

            {/* Mobile Menu */}
            <MobileMenu isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} />
        </>
    )
}

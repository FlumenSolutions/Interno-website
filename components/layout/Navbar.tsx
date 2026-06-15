'use client'

import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Menu, X, ArrowRight } from 'lucide-react'
import { MobileMenu } from './MobileMenu'
import { useLanguage } from '@/lib/i18n'

const navigation = [
    { nameKey: 'nav.services', href: '/servicios' },
    { nameKey: 'nav.process', href: '/proceso' },
    { nameKey: 'nav.resources', href: '/recursos' },
    { nameKey: 'nav.about', href: '/nosotros' },
]

export function Navbar() {
    const { t } = useLanguage()
    const pathname = usePathname()
    const [isScrolled, setIsScrolled] = useState(false)
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 10)
        handleScroll()
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const isActive = (href: string) =>
        href === '/' ? pathname === '/' : pathname.startsWith(href)

    return (
        <>
            <header className="fixed top-0 left-0 right-0 z-50 flex justify-center px-[max(1rem,env(safe-area-inset-left),env(safe-area-inset-right))] pt-[calc(0.75rem+env(safe-area-inset-top))] md:pt-[calc(1rem+env(safe-area-inset-top))]">
                <nav
                    className={`flex w-full max-w-6xl items-center justify-between gap-4 rounded-2xl border px-4 md:px-5 transition-all duration-300 ${isScrolled
                        ? 'h-14 md:h-16 border-white/10 bg-[#0F1524]/85 shadow-lg shadow-black/30 backdrop-blur-lg'
                        : 'h-16 md:h-[4.5rem] border-white/5 bg-white/[0.03] backdrop-blur-md'
                        }`}
                >
                    {/* Logo */}
                    <Link href="/" className="flex items-center" aria-label="Flumen Solutions — inicio">
                        <Image
                            src="/logoinverted.svg"
                            alt="Flumen Solutions"
                            width={132}
                            height={36}
                            className={`w-auto transition-all duration-300 ${isScrolled ? 'h-7' : 'h-8 md:h-9'}`}
                            priority
                        />
                    </Link>

                    {/* Desktop nav */}
                    <div className="hidden items-center gap-1 lg:flex">
                        {navigation.map((item) => {
                            const active = isActive(item.href)
                            return (
                                <Link
                                    key={item.nameKey}
                                    href={item.href}
                                    aria-current={active ? 'page' : undefined}
                                    className={`relative rounded-lg px-3.5 py-2 text-[15px] font-medium transition-colors ${active ? 'text-white' : 'text-white/65 hover:text-white'
                                        }`}
                                >
                                    {t(item.nameKey)}
                                    <span
                                        className={`absolute inset-x-3 -bottom-0.5 h-px origin-center bg-gradient-to-r from-transparent via-accent to-transparent transition-transform duration-300 ${active ? 'scale-x-100' : 'scale-x-0'
                                            }`}
                                    />
                                </Link>
                            )
                        })}

                        <div className="ml-2">
                            <Button
                                asChild
                                className="group h-10 rounded-xl bg-accent px-5 font-semibold text-white shadow-md shadow-accent/20 transition-all hover:bg-accent/90 hover:shadow-lg hover:shadow-accent/30"
                            >
                                <Link href="/contacto">
                                    {t('nav.cta')}
                                    <ArrowRight className="ml-1.5 h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                                </Link>
                            </Button>
                        </div>
                    </div>

                    {/* Mobile menu button */}
                    <button
                        className="rounded-lg p-2 text-white transition-colors hover:bg-white/5 lg:hidden"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        aria-label="Abrir menú"
                        aria-expanded={isMobileMenuOpen}
                    >
                        {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                    </button>
                </nav>
            </header>

            <MobileMenu isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} />
        </>
    )
}

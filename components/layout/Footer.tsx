'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Mail, MapPin, ArrowRight } from 'lucide-react'

const services = [
    { name: 'Aplicaciones a la medida', href: '/servicios/desarrollo-aplicaciones' },
    { name: 'Páginas y sitios web', href: '/servicios/paginas-web' },
    { name: 'Chatbots con IA', href: '/servicios/chatbots-asistentes-ia' },
    { name: 'Automatización de procesos', href: '/servicios/automatizacion-procesos' },
]

const company = [
    { name: 'Nosotros', href: '/nosotros' },
    { name: 'Proceso', href: '/proceso' },
    { name: 'Recursos', href: '/recursos' },
]

const legal = [
    { name: 'Privacidad', href: '/privacidad' },
    { name: 'Términos', href: '/terminos' },
]

export function Footer() {
    return (
        <footer className="relative bg-[#0B0F1A] text-white overflow-hidden shadow-[0_-10px_30px_rgba(0,0,0,0.3)]">
            {/* Background Effects */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/5 via-transparent to-transparent opacity-50 pointer-events-none" />

            <div className="container relative z-10 pt-20 pb-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">
                    {/* Brand Column (Wider) */}
                    <div className="lg:col-span-4">
                        <div className="flex flex-col items-start gap-6">
                            <Link href="/" className="inline-block group">
                                <Image
                                    src="/logoinverted.svg"
                                    alt="Flumen Solutions"
                                    width={150}
                                    height={40}
                                    className="h-10 w-auto transition-opacity duration-300 group-hover:opacity-90"
                                />
                            </Link>
                            <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
                                Automatización inteligente para empresas que buscan escalar. Recupera tiempo, elimina errores y optimiza tus operaciones con tecnología de vanguardia.
                            </p>
                            <div className="flex flex-col gap-3 mt-2">
                                <a href="mailto:info@flumensolutions.com" className="flex items-center gap-3 text-sm text-slate-400 hover:text-white transition-colors group">
                                    <Mail className="w-4 h-4 text-slate-500 group-hover:text-white transition-colors" />
                                    info@flumensolutions.com
                                </a>
                                <div className="flex items-center gap-3 text-sm text-slate-400">
                                    <MapPin className="w-4 h-4 text-slate-500" />
                                    Bogotá, Colombia
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Links Columns */}
                    <div className="lg:col-span-2 lg:col-start-6">
                        <h3 className="font-semibold text-white mb-6">Servicios</h3>
                        <ul className="space-y-4">
                            {services.map((item) => (
                                <li key={item.name}>
                                    <Link
                                        href={item.href}
                                        className="text-sm text-slate-400 hover:text-white transition-colors opacity-80 hover:opacity-100 block"
                                    >
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="lg:col-span-2">
                        <h3 className="font-semibold text-white mb-6">Empresa</h3>
                        <ul className="space-y-4">
                            {company.map((item) => (
                                <li key={item.name}>
                                    <Link
                                        href={item.href}
                                        className="text-sm text-slate-400 hover:text-white transition-colors opacity-80 hover:opacity-100 block"
                                    >
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* CTA Column */}
                    <div className="lg:col-span-3">
                        <h3 className="font-semibold text-white mb-6">¿Listo para escalar?</h3>
                        <p className="text-sm text-slate-400 mb-6 leading-relaxed">
                            Agenda una auditoría gratuita y descubre el potencial de tu empresa.
                        </p>
                        <Link
                            href="/contacto"
                            className="inline-flex items-center gap-2 px-5 py-2.5 bg-white text-[#0B0F1A] rounded-lg hover:bg-gray-100 transition-colors font-medium text-sm group"
                        >
                            Cuéntanos tu idea
                            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                        </Link>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-xs text-slate-400">
                        © {new Date().getFullYear()} Flumen Solutions. Todos los derechos reservados.
                    </p>
                    <div className="flex gap-6">
                        {legal.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className="text-xs text-slate-400 hover:text-white transition-colors"
                            >
                                {item.name}
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    )
}

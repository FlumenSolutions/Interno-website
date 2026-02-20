'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Mail, Phone, MapPin, ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'

const services = [
    { name: 'Automatización de Procesos', href: '/servicios/automatizacion-procesos' },
    { name: 'Integración CRM', href: '/servicios/integracion-crm' },
    { name: 'Asistentes de IA', href: '/servicios/asistentes-ia' },
    { name: 'Implementación n8n', href: '/servicios/implementacion-n8n' },
]

const company = [
    { name: 'Nosotros', href: '/nosotros' },
    { name: 'Proceso', href: '/proceso' },
    { name: 'Casos de Éxito', href: '/casos-exito' },
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
            <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay pointer-events-none"
                style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
                }}
            />

            <div className="container relative z-10 pt-20 pb-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">
                    {/* Brand Column (Wider) */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="lg:col-span-4"
                    >
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
                    </motion.div>

                    {/* Links Columns */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="lg:col-span-2 lg:col-start-6"
                    >
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
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="lg:col-span-2"
                    >
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
                    </motion.div>

                    {/* CTA Column */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="lg:col-span-3"
                    >
                        <h3 className="font-semibold text-white mb-6">¿Listo para escalar?</h3>
                        <p className="text-sm text-slate-400 mb-6 leading-relaxed">
                            Agenda una auditoría gratuita y descubre el potencial de tu empresa.
                        </p>
                        <Link
                            href="/contacto"
                            className="inline-flex items-center gap-2 px-5 py-2.5 bg-white text-[#0B0F1A] rounded-lg hover:bg-gray-100 transition-colors font-medium text-sm group"
                        >
                            Auditoría Gratuita
                            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                        </Link>
                    </motion.div>
                </div>

                {/* Bottom Bar */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4"
                >
                    <p className="text-xs text-slate-500">
                        © {new Date().getFullYear()} Flumen Solutions. Todos los derechos reservados.
                    </p>
                    <div className="flex gap-6">
                        {legal.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className="text-xs text-slate-500 hover:text-slate-300 transition-colors"
                            >
                                {item.name}
                            </Link>
                        ))}
                    </div>
                </motion.div>
            </div>
        </footer>
    )
}

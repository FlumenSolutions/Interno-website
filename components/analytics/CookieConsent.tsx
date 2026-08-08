'use client'

import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { Cookie, X } from 'lucide-react'
import { getCookieConsent, setCookieConsent } from '@/lib/cookie-consent'

/**
 * Modelo opt-out: la medición ya está activa por defecto (ver Analytics.tsx),
 * así que este banner no bloquea nada — informa y ofrece rechazar. Cualquier
 * cierre sin rechazar (Aceptar o la X) se guarda como "accepted" para no
 * volver a preguntar; solo "Rechazar" cambia el comportamiento de tracking.
 */
export function CookieConsent() {
    const pathname = usePathname()
    const [visible, setVisible] = useState(false)

    useEffect(() => {
        if (getCookieConsent() !== null) return
        const timer = setTimeout(() => setVisible(true), 900)
        return () => clearTimeout(timer)
    }, [])

    if (pathname?.startsWith('/lab')) return null

    function dismiss(status: 'accepted' | 'rejected') {
        setCookieConsent(status)
        setVisible(false)
    }

    return (
        <AnimatePresence>
            {visible && (
                <motion.div
                    role="region"
                    aria-label="Aviso de cookies"
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 12 }}
                    transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                    className="fixed z-50 bottom-[calc(1rem+env(safe-area-inset-bottom))] left-4 right-20 sm:left-6 sm:right-auto sm:w-full sm:max-w-sm"
                >
                    <div className="rounded-xl bg-[#141B2E] border border-white/10 shadow-xl shadow-black/30 p-5">
                        <div className="flex items-start gap-3">
                            <div className="flex-shrink-0 w-9 h-9 rounded-lg bg-accent/10 flex items-center justify-center">
                                <Cookie className="w-5 h-5 text-accent" />
                            </div>
                            <div className="flex-1 min-w-0">
                                <p className="text-sm text-slate-300 leading-relaxed">
                                    Usamos cookies para entender cómo usas el sitio y mostrarte anuncios relevantes.{' '}
                                    <a href="/cookies" className="text-white underline hover:no-underline">
                                        Más detalles
                                    </a>
                                    .
                                </p>
                            </div>
                            <button
                                type="button"
                                onClick={() => dismiss('accepted')}
                                aria-label="Cerrar aviso de cookies"
                                className="flex-shrink-0 text-slate-500 hover:text-white transition-colors -m-1 p-1 rounded-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2"
                            >
                                <X className="w-4 h-4" />
                            </button>
                        </div>

                        <div className="flex items-center justify-end gap-3 mt-4">
                            <button
                                type="button"
                                onClick={() => dismiss('rejected')}
                                className="text-sm text-slate-400 hover:text-white transition-colors px-3 py-2 rounded-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2"
                            >
                                Rechazar
                            </button>
                            <button
                                type="button"
                                onClick={() => dismiss('accepted')}
                                className="text-sm font-medium text-white bg-accent hover:bg-[#00A396] transition-colors px-4 py-2 rounded-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-white focus-visible:outline-offset-2"
                            >
                                Aceptar
                            </button>
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    )
}

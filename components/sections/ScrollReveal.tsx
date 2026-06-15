'use client'

import { useRef, useEffect, useState, ReactNode } from 'react'

interface ScrollRevealProps {
    children: ReactNode
    delay?: number
    className?: string
}

/**
 * Revela el contenido al entrar en viewport SIN gatear su visibilidad:
 * el estado por defecto es visible. Solo cuando JS confirma que puede observar
 * (y el usuario no pidió menos movimiento) arma el estado "armed" (oculto) y
 * lo libera al intersectar. Si JS no corre, el observer no dispara, o se prefiere
 * reduced-motion, el contenido permanece visible — nunca queda en blanco.
 */
export function ScrollReveal({ children, delay = 0, className = '' }: ScrollRevealProps) {
    const ref = useRef<HTMLDivElement>(null)
    const [armed, setArmed] = useState(false)
    const [shown, setShown] = useState(false)

    useEffect(() => {
        const el = ref.current
        if (!el) return

        const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
        if (prefersReduced) return

        // Si ya está en viewport al montar, no lo ocultamos (evita parpadeo).
        const rect = el.getBoundingClientRect()
        const alreadyVisible = rect.top < window.innerHeight && rect.bottom > 0
        if (alreadyVisible) {
            setShown(true)
            return
        }

        setArmed(true)
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting) {
                    setShown(true)
                    observer.disconnect()
                }
            },
            { rootMargin: '-80px' }
        )
        observer.observe(el)
        return () => observer.disconnect()
    }, [])

    return (
        <div
            ref={ref}
            className={className}
            style={{
                opacity: armed && !shown ? 0 : 1,
                transform: armed && !shown ? 'translateY(20px)' : 'translateY(0)',
                transition: `opacity 0.6s cubic-bezier(0.16,1,0.3,1) ${delay}s, transform 0.6s cubic-bezier(0.16,1,0.3,1) ${delay}s`,
            }}
        >
            {children}
        </div>
    )
}

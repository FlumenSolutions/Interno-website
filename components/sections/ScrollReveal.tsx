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
 *
 * En móvil el revelado es más rápido y se dispara antes (el elemento apenas
 * asoma), porque al scrollear rápido con el dedo un revelado lento/tardío se
 * percibe como "los componentes aparecen de la nada".
 */
export function ScrollReveal({ children, delay = 0, className = '' }: ScrollRevealProps) {
    const ref = useRef<HTMLDivElement>(null)
    const [armed, setArmed] = useState(false)
    const [shown, setShown] = useState(false)
    const [isMobile, setIsMobile] = useState(false)

    useEffect(() => {
        const el = ref.current
        if (!el) return

        const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
        if (prefersReduced) return

        const mobile = window.matchMedia('(max-width: 768px)').matches
        setIsMobile(mobile)

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
            // Dispara cuando el elemento asoma un poco por el borde inferior. En móvil
            // las tarjetas se apilan en 1 columna: un margen grande haría que las de
            // abajo dispararan tarde y se revelaran de golpe. Un umbral pequeño y
            // simétrico hace que cada una entre suave justo al aparecer.
            { rootMargin: mobile ? '0px 0px -10% 0px' : '-60px 0px', threshold: 0.01 }
        )
        observer.observe(el)
        return () => observer.disconnect()
    }, [])

    // En móvil: animación corta y SIN escalonado. El stagger (delays 0.1→0.6) está
    // pensado para filas horizontales en desktop; en móvil las tarjetas se apilan en
    // una columna y cada ScrollReveal se observa por separado, así que un delay por
    // tarjeta hace que esperen su turno y "aparezcan de golpe". Cada una se revela al
    // entrar, sin delay, con su propio observer — entrada limpia e independiente.
    const duration = isMobile ? 0.5 : 0.6
    const effectiveDelay = isMobile ? 0 : delay
    const distance = isMobile ? 16 : 20

    return (
        <div
            ref={ref}
            className={className}
            style={{
                opacity: armed && !shown ? 0 : 1,
                transform: armed && !shown ? `translateY(${distance}px)` : 'translateY(0)',
                transition: `opacity ${duration}s cubic-bezier(0.16,1,0.3,1) ${effectiveDelay}s, transform ${duration}s cubic-bezier(0.16,1,0.3,1) ${effectiveDelay}s`,
                willChange: armed && !shown ? 'opacity, transform' : 'auto',
            }}
        >
            {children}
        </div>
    )
}

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
            // En móvil dispara apenas el elemento empieza a asomar (margen positivo,
            // se adelanta) para que la animación ya esté terminando cuando el usuario
            // lo ve. En desktop, un pequeño margen negativo se siente más intencional.
            { rootMargin: mobile ? '120px 0px' : '-60px 0px', threshold: 0 }
        )
        observer.observe(el)
        return () => observer.disconnect()
    }, [])

    // En móvil: animación más corta y sin escalonado largo (el delay se recorta),
    // porque el scroll táctil es rápido y un delay completo se siente como lag.
    const duration = isMobile ? 0.45 : 0.6
    const effectiveDelay = isMobile ? Math.min(delay, 0.15) : delay
    const distance = isMobile ? 14 : 20

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

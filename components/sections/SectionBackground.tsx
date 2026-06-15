'use client'

/**
 * Capa decorativa de fondo reutilizable para dar profundidad a las secciones.
 * Todo es CSS barato (gradientes/máscaras), sin canvas ni feTurbulence.
 * Se monta como hijo absolute dentro de una <section className="relative overflow-hidden">.
 *
 * variant:
 *  - 'dots'  → retícula de puntos muy tenue con desvanecido radial
 *  - 'grid'  → cuadrícula de líneas finas con desvanecido radial
 *  - 'glow'  → solo glows de color (sin patrón)
 * glow: posición(es) de los resplandores de color de marca.
 */
type Glow = 'top' | 'bottom' | 'left' | 'right' | 'center' | 'top-left' | 'top-right'

interface SectionBackgroundProps {
    variant?: 'dots' | 'grid' | 'glow' | 'none'
    glows?: Glow[]
    className?: string
}

const glowStyles: Record<Glow, string> = {
    top: 'left-1/2 top-0 -translate-x-1/2 -translate-y-1/3',
    bottom: 'left-1/2 bottom-0 -translate-x-1/2 translate-y-1/3',
    left: 'left-0 top-1/2 -translate-x-1/3 -translate-y-1/2',
    right: 'right-0 top-1/2 translate-x-1/3 -translate-y-1/2',
    center: 'left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2',
    'top-left': 'left-0 top-0 -translate-x-1/4 -translate-y-1/4',
    'top-right': 'right-0 top-0 translate-x-1/4 -translate-y-1/4',
}

export function SectionBackground({
    variant = 'dots',
    glows = [],
    className = '',
}: SectionBackgroundProps) {
    return (
        <div aria-hidden="true" className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}>
            {/* Patrón */}
            {variant === 'dots' && (
                <div
                    className="absolute inset-0 opacity-[0.5]"
                    style={{
                        backgroundImage:
                            'radial-gradient(rgba(255,255,255,0.06) 1px, transparent 1px)',
                        backgroundSize: '22px 22px',
                        maskImage:
                            'radial-gradient(ellipse 80% 60% at 50% 40%, black 30%, transparent 75%)',
                        WebkitMaskImage:
                            'radial-gradient(ellipse 80% 60% at 50% 40%, black 30%, transparent 75%)',
                    }}
                />
            )}
            {variant === 'grid' && (
                <div
                    className="absolute inset-0"
                    style={{
                        backgroundImage:
                            'linear-gradient(rgba(255,255,255,0.045) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.045) 1px, transparent 1px)',
                        backgroundSize: '56px 56px',
                        maskImage:
                            'radial-gradient(ellipse 75% 55% at 50% 45%, black 25%, transparent 75%)',
                        WebkitMaskImage:
                            'radial-gradient(ellipse 75% 55% at 50% 45%, black 25%, transparent 75%)',
                    }}
                />
            )}

            {/* Glows de color de marca */}
            {glows.map((g, i) => (
                <div
                    key={i}
                    className={`absolute h-[380px] w-[380px] rounded-full blur-[90px] ${glowStyles[g]}`}
                    style={{
                        background:
                            i % 2 === 0
                                ? 'radial-gradient(circle, rgba(0,184,169,0.18), transparent 70%)'
                                : 'radial-gradient(circle, rgba(38,55,125,0.28), transparent 70%)',
                    }}
                />
            ))}
        </div>
    )
}

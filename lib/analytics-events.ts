import { hasRejectedCookies } from '@/lib/cookie-consent'

/**
 * Eventos de conversión para retargeting/optimización de campañas.
 * No falla si GA4/Meta no están cargados (dev, adblockers, IDs vacíos),
 * y no dispara nada si la persona ya rechazó cookies en este navegador.
 */

export function trackGA4Event(eventName: string, params?: Record<string, unknown>) {
    if (hasRejectedCookies()) return
    if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
        window.gtag('event', eventName, params)
    }
}

export function trackMetaEvent(eventName: string, params?: Record<string, unknown>) {
    if (hasRejectedCookies()) return
    if (typeof window !== 'undefined' && typeof window.fbq === 'function') {
        window.fbq('track', eventName, params)
    }
}

export function trackLinkedInConversion(conversionId: number) {
    if (hasRejectedCookies()) return
    if (typeof window !== 'undefined' && typeof window.lintrk === 'function') {
        window.lintrk('track', { conversion_id: conversionId })
    }
}

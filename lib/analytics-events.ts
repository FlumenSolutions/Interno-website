/**
 * Eventos de conversión para retargeting/optimización de campañas.
 * No falla si GA4/Meta no están cargados (dev, adblockers, IDs vacíos).
 */

export function trackGA4Event(eventName: string, params?: Record<string, unknown>) {
    if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
        window.gtag('event', eventName, params)
    }
}

export function trackMetaEvent(eventName: string, params?: Record<string, unknown>) {
    if (typeof window !== 'undefined' && typeof window.fbq === 'function') {
        window.fbq('track', eventName, params)
    }
}

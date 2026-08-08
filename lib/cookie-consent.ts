const STORAGE_KEY = 'cookie_consent'

export type CookieConsentStatus = 'accepted' | 'rejected'

/**
 * Modelo opt-out: por defecto medimos (igual que hoy) salvo que la persona
 * rechace explícitamente. `null` significa "todavía no decidió" — se sigue
 * midiendo, y el banner sigue visible hasta que interactúe.
 */
export function getCookieConsent(): CookieConsentStatus | null {
    if (typeof window === 'undefined') return null
    const value = window.localStorage.getItem(STORAGE_KEY)
    return value === 'accepted' || value === 'rejected' ? value : null
}

export function setCookieConsent(status: CookieConsentStatus) {
    if (typeof window === 'undefined') return
    window.localStorage.setItem(STORAGE_KEY, status)

    if (status === 'rejected') {
        if (typeof window.gtag === 'function') {
            window.gtag('consent', 'update', {
                analytics_storage: 'denied',
                ad_storage: 'denied',
            })
        }
        if (typeof window.fbq === 'function') {
            window.fbq('consent', 'revoke')
        }
    }
}

export function hasRejectedCookies(): boolean {
    return getCookieConsent() === 'rejected'
}

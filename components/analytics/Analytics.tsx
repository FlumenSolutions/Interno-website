'use client'

import Script from 'next/script'
import { Suspense, useEffect } from 'react'
import { usePathname, useSearchParams } from 'next/navigation'

declare global {
    interface Window {
        dataLayer: unknown[]
        gtag: (...args: unknown[]) => void
        fbq: (...args: unknown[]) => void
    }
}

/**
 * Next.js hace navegación client-side entre rutas (no hay full page reload),
 * así que gtag/fbq solo se enteran del primer page_view a menos que los
 * avisemos manualmente en cada cambio de pathname/query.
 */
function RouteChangeTracker() {
    const pathname = usePathname()
    const searchParams = useSearchParams()

    useEffect(() => {
        const url = pathname + (searchParams.toString() ? `?${searchParams.toString()}` : '')

        if (typeof window.gtag === 'function') {
            window.gtag('event', 'page_view', {
                page_path: url,
                page_location: window.location.href,
                page_title: document.title,
            })
        }

        if (typeof window.fbq === 'function') {
            window.fbq('track', 'PageView')
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [pathname, searchParams])

    return null
}

/**
 * Centraliza los scripts de medición y retargeting.
 * Cada bloque se renderiza solo si su variable de entorno está configurada,
 * así la web nunca carga píxeles vacíos en desarrollo o si aún no se activan.
 *
 * Variables (en Vercel → Settings → Environment Variables):
 *   NEXT_PUBLIC_GA_ID          -> Google Analytics 4 (ej. G-XXXXXXXXXX)
 *   NEXT_PUBLIC_META_PIXEL_ID  -> Meta/Facebook Pixel (solo dígitos)
 *   NEXT_PUBLIC_LINKEDIN_ID    -> LinkedIn Insight Tag (Partner ID, solo dígitos)
 *
 * El page_view inicial y cada cambio de ruta posterior se reportan desde
 * RouteChangeTracker, así que send_page_view va en false para no duplicar
 * el primer hit.
 */
export function Analytics() {
    const gaId = process.env.NEXT_PUBLIC_GA_ID
    const metaPixelId = process.env.NEXT_PUBLIC_META_PIXEL_ID
    const linkedInId = process.env.NEXT_PUBLIC_LINKEDIN_ID

    return (
        <>
            {/* Google Analytics 4 */}
            {gaId && (
                <>
                    <Script
                        src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
                        strategy="afterInteractive"
                    />
                    <Script id="ga4-init" strategy="afterInteractive">
                        {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              window.gtag = gtag;
              gtag('js', new Date());
              gtag('config', '${gaId}', { send_page_view: false });
            `}
                    </Script>
                </>
            )}

            {/* Meta (Facebook/Instagram) Pixel — para retargeting a visitantes */}
            {metaPixelId && (
                <>
                    <Script id="meta-pixel" strategy="afterInteractive">
                        {`
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '${metaPixelId}');
            `}
                    </Script>
                    <noscript>
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                            height="1"
                            width="1"
                            style={{ display: 'none' }}
                            alt=""
                            src={`https://www.facebook.com/tr?id=${metaPixelId}&ev=PageView&noscript=1`}
                        />
                    </noscript>
                </>
            )}

            {/* LinkedIn Insight Tag — para retargeting y medición en LinkedIn Ads */}
            {linkedInId && (
                <>
                    <Script id="linkedin-insight" strategy="afterInteractive">
                        {`
              _linkedin_partner_id = "${linkedInId}";
              window._linkedin_data_partner_ids = window._linkedin_data_partner_ids || [];
              window._linkedin_data_partner_ids.push(_linkedin_partner_id);
              (function(l) {
                if (!l){window.lintrk = function(a,b){window.lintrk.q.push([a,b])};
                window.lintrk.q=[]}
                var s = document.getElementsByTagName("script")[0];
                var b = document.createElement("script");
                b.type = "text/javascript";b.async = true;
                b.src = "https://snap.licdn.com/li.lms-analytics/insight.min.js";
                s.parentNode.insertBefore(b, s);
              })(window.lintrk);
            `}
                    </Script>
                    <noscript>
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                            height="1"
                            width="1"
                            style={{ display: 'none' }}
                            alt=""
                            src={`https://px.ads.linkedin.com/collect/?pid=${linkedInId}&fmt=gif`}
                        />
                    </noscript>
                </>
            )}

            {(gaId || metaPixelId) && (
                <Suspense fallback={null}>
                    <RouteChangeTracker />
                </Suspense>
            )}
        </>
    )
}

'use client'

import { MessageCircle } from 'lucide-react'
import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import { trackGA4Event, trackMetaEvent, trackLinkedInConversion } from '@/lib/analytics-events'

const LINKEDIN_CONTACT_CONVERSION_ID = 29280354

export function WhatsAppButton() {
    const pathname = usePathname()
    const [isVisible, setIsVisible] = useState(false)
    const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '+573180640132'
    const message = encodeURIComponent('Hola, me gustaría obtener más información sobre sus servicios de automatización.')
    const whatsappUrl = `https://wa.me/${whatsappNumber.replace(/[^0-9]/g, '')}?text=${message}`

    useEffect(() => {
        const handleScroll = () => {
            setIsVisible(window.scrollY > 300)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    if (pathname?.startsWith('/lab')) return null

    return (
        <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => {
                trackGA4Event('whatsapp_click', { page_path: pathname })
                trackMetaEvent('Contact')
                trackLinkedInConversion(LINKEDIN_CONTACT_CONVERSION_ID)
            }}
            className={`fixed bottom-[calc(1.5rem+env(safe-area-inset-bottom))] right-[calc(1.5rem+env(safe-area-inset-right))] z-50 bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:bg-[#20BA5A] transition-all duration-300 group ${isVisible ? 'scale-100 opacity-100' : 'scale-0 opacity-0'
                }`}
            aria-label="Contactar por WhatsApp"
        >
            <MessageCircle className="w-6 h-6" />
            <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-gray-900 text-white text-sm px-3 py-2 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                ¿Necesitas ayuda?
            </span>
        </a>
    )
}

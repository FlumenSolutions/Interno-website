'use client'

import { MessageCircle } from 'lucide-react'
import { useState, useEffect } from 'react'

export function WhatsAppButton() {
    const [isVisible, setIsVisible] = useState(false)
    const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '+573001234567'
    const message = encodeURIComponent('Hola, me gustaría obtener más información sobre sus servicios de automatización.')
    const whatsappUrl = `https://wa.me/${whatsappNumber.replace(/[^0-9]/g, '')}?text=${message}`

    useEffect(() => {
        const handleScroll = () => {
            setIsVisible(window.scrollY > 300)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
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

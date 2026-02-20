'use client'

import { useLanguage } from '@/lib/i18n'
import { Globe, ChevronDown } from 'lucide-react'
import { useState, useRef, useEffect } from 'react'

const languages = [
    { code: 'es' as const, name: 'Español', flag: '🇪🇸' },
    { code: 'en' as const, name: 'English', flag: '🇺🇸' },
]

export function LanguageSwitcher() {
    const { language, setLanguage, t } = useLanguage()
    const [isOpen, setIsOpen] = useState(false)
    const dropdownRef = useRef<HTMLDivElement>(null)

    const currentLanguage = languages.find((lang) => lang.code === language)

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsOpen(false)
            }
        }

        document.addEventListener('mousedown', handleClickOutside)
        return () => document.removeEventListener('mousedown', handleClickOutside)
    }, [])

    return (
        <div className="relative" ref={dropdownRef}>
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-white hover:text-accent transition-colors rounded-md hover:bg-white/10"
                aria-label="Select language"
            >
                <Globe className="w-4 h-4" />
                <span className="hidden sm:inline">{currentLanguage?.code.toUpperCase()}</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
            </button>

            {isOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 overflow-hidden z-50">
                    {languages.map((lang) => (
                        <button
                            key={lang.code}
                            onClick={() => {
                                setLanguage(lang.code)
                                setIsOpen(false)
                            }}
                            className={`w-full flex items-center gap-3 px-4 py-3 text-sm hover:bg-gray-100 transition-colors ${language === lang.code ? 'bg-primary/5 text-primary font-medium' : 'text-gray-900 font-normal'
                                }`}
                        >
                            <span className="text-xl">{lang.code.toUpperCase()}</span>
                            <span>{t(`lang.${lang.code === 'es' ? 'spanish' : 'english'}`)}</span>
                            {language === lang.code && (
                                <svg
                                    className="ml-auto w-4 h-4 text-primary"
                                    fill="none"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path d="M5 13l4 4L19 7"></path>
                                </svg>
                            )}
                        </button>
                    ))}
                </div>
            )}
        </div>
    )
}

'use client'

import { createContext, useContext, useState, useEffect, ReactNode } from 'react'

type Language = 'es' | 'en'

interface LanguageContextType {
    language: Language
    setLanguage: (lang: Language) => void
    t: (key: string) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
    const [language, setLanguageState] = useState<Language>('es')

    useEffect(() => {
        // Load language from localStorage
        const savedLang = localStorage.getItem('language') as Language
        if (savedLang && (savedLang === 'es' || savedLang === 'en')) {
            setLanguageState(savedLang)
        }
    }, [])

    const setLanguage = (lang: Language) => {
        setLanguageState(lang)
        localStorage.setItem('language', lang)
    }

    const t = (key: string): string => {
        return translations[language]?.[key] || translations['es'][key] || key
    }

    return (
        <LanguageContext.Provider value={{ language, setLanguage, t }}>
            {children}
        </LanguageContext.Provider>
    )
}

export function useLanguage() {
    const context = useContext(LanguageContext)
    if (!context) {
        throw new Error('useLanguage must be used within LanguageProvider')
    }
    return context
}

// Complete Translations
const translations: Record<Language, Record<string, string>> = {
    es: {
        // Navbar
        'nav.services': 'Servicios',
        'nav.process': 'Proceso',
        'nav.resources': 'Recursos',
        'nav.about': 'Nosotros',
        'nav.contact': 'Contacto',
        'nav.cta': 'Auditoría Gratuita',

        // Language Selector
        'lang.spanish': 'Español',
        'lang.english': 'English',

        // Home Hero
        'home.hero.title': 'Automatiza tu negocio y recupera tiempo operativo',
        'home.hero.subtitle': 'Conectamos tu CRM, WhatsApp y sistemas internos con flujos inteligentes 24/7',
        'home.hero.cta.primary': 'Obtén una Auditoría Gratuita',
        'home.hero.benefit1': 'Sin contratar personal adicional',
        'home.hero.benefit2': 'Implementado en días',
        'home.hero.benefit3': 'Soporte local en Colombia',

        // Home - Problem/Solution
        'home.problem.title': 'De procesos manuales a automatización inteligente',
        'home.problem.manual': 'Facturación manual',
        'home.problem.manual.desc': 'Horas perdidas ingresando datos manualmente',
        'home.problem.errors': 'Errores humanos',
        'home.problem.errors.desc': 'Información incorrecta y clientes insatisfechos',
        'home.problem.slow': 'Procesos lentos',
        'home.problem.slow.desc': 'Respuestas tardías y oportunidades perdidas',
        'home.solution.auto': 'Facturación automática',
        'home.solution.auto.desc': 'Procesos instantáneos sin intervención humana',
        'home.solution.zero': 'Menos errores',
        'home.solution.zero.desc': 'Procesos consistentes que reducen los errores manuales',
        'home.solution.247': 'Workflows 24/7',
        'home.solution.247.desc': 'Tu negocio funciona incluso mientras duermes',

        // Home - How It Works
        'home.how.title': 'Cómo funciona',
        'home.how.subtitle': 'Un proceso simple y transparente para transformar tu negocio',
        'home.how.step1.title': 'Auditoría Gratuita',
        'home.how.step1.desc': 'Analizamos tus procesos actuales e identificamos oportunidades de automatización con ROI estimado.',
        'home.how.step1.del1': 'Análisis de procesos',
        'home.how.step1.del2': 'Propuesta personalizada',
        'home.how.step1.del3': 'Estimación de ROI',
        'home.how.step2.title': 'Diseño de Solución',
        'home.how.step2.desc': 'Diseñamos los flujos de automatización específicos para tu negocio y validamos contigo.',
        'home.how.step2.del1': 'Diagrama de flujos',
        'home.how.step2.del2': 'Especificaciones técnicas',
        'home.how.step2.del3': 'Timeline de implementación',
        'home.how.step3.title': 'Implementación',
        'home.how.step3.desc': 'Configuramos e implementamos las automatizaciones con pruebas exhaustivas.',
        'home.how.step3.del1': 'Automatizaciones configuradas',
        'home.how.step3.del2': 'Pruebas completas',
        'home.how.step3.del3': 'Documentación',
        'home.how.step4.title': 'Soporte Continuo',
        'home.how.step4.desc': 'Capacitamos a tu equipo y brindamos soporte para optimizar y escalar.',
        'home.how.step4.del1': 'Capacitación del equipo',
        'home.how.step4.del2': 'Soporte 30 días',
        'home.how.step4.del3': 'Optimización continua',

        // Home - Services
        'home.services.title': 'Nuestros servicios',
        'home.services.subtitle': 'Soluciones completas de automatización para cada necesidad de tu negocio',

        // Home - Use Cases
        'home.usecases.title': 'Casos de uso más populares',
        'home.usecase.1': 'Automatización de facturación y cobranza',
        'home.usecase.2': 'Integración CRM + WhatsApp',
        'home.usecase.3': 'Captura automática de leads',
        'home.usecase.4': 'Generación de reportes automáticos',
        'home.usecase.5': 'Limpieza y migración de datos',
        'home.usecase.6': 'Recordatorios y agendamiento',

        // Home - Final CTA
        'home.cta.title': '¿Listo para recuperar tiempo en tu operación?',
        'home.cta.desc': 'Obtén tu auditoría gratuita hoy y descubre qué procesos puedes automatizar',
        'home.cta.primary': 'Solicitar Auditoría Gratuita',

        // Common
        'common.readMore': 'Leer más',
        'common.viewMore': 'Ver más',
        'common.contactUs': 'Contáctanos',
        'common.learnMore': 'Saber más',
        'common.deliverables': 'Entregables',

        // Footer
        'footer.tagline': 'Automatización inteligente para empresas en Colombia',
        'footer.services': 'Servicios',
        'footer.company': 'Empresa',
        'footer.contact': 'Contacto',
        'footer.rights': 'Todos los derechos reservados',
        'footer.cta': '¿Listo para automatizar?',
        'footer.cta.button': 'Agenda tu Auditoría',
    },
    en: {
        // Navbar
        'nav.services': 'Services',
        'nav.process': 'Process',
        'nav.resources': 'Resources',
        'nav.about': 'About Us',
        'nav.contact': 'Contact',
        'nav.cta': 'Free Audit',

        // Language Selector
        'lang.spanish': 'Español',
        'lang.english': 'English',

        // Home Hero
        'home.hero.title': 'Automate your business and recover operational time',
        'home.hero.subtitle': 'We connect your CRM, WhatsApp and internal systems with intelligent 24/7 flows',
        'home.hero.cta.primary': 'Get a Free Audit',
        'home.hero.benefit1': 'No need to hire additional staff',
        'home.hero.benefit2': 'Implemented in days',
        'home.hero.benefit3': 'Local support in Colombia',

        // Home - Problem/Solution
        'home.problem.title': 'From manual processes to intelligent automation',
        'home.problem.manual': 'Manual invoicing',
        'home.problem.manual.desc': 'Hours wasted entering data manually',
        'home.problem.errors': 'Human errors',
        'home.problem.errors.desc': 'Incorrect information and dissatisfied customers',
        'home.problem.slow': 'Slow processes',
        'home.problem.slow.desc': 'Late responses and missed opportunities',
        'home.solution.auto': 'Automatic invoicing',
        'home.solution.auto.desc': 'Instant processes without human intervention',
        'home.solution.zero': 'Fewer errors',
        'home.solution.zero.desc': 'Consistent processes that reduce manual errors',
        'home.solution.247': '24/7 Workflows',
        'home.solution.247.desc': 'Your business runs even while you sleep',

        // Home - How It Works
        'home.how.title': 'How it works',
        'home.how.subtitle': 'A simple and transparent process to transform your business',
        'home.how.step1.title': 'Free Audit',
        'home.how.step1.desc': 'We analyze your current processes and identify automation opportunities with estimated ROI.',
        'home.how.step1.del1': 'Process analysis',
        'home.how.step1.del2': 'Personalized proposal',
        'home.how.step1.del3': 'ROI estimation',
        'home.how.step2.title': 'Solution Design',
        'home.how.step2.desc': 'We design automation flows specific to your business and validate with you.',
        'home.how.step2.del1': 'Flow diagrams',
        'home.how.step2.del2': 'Technical specifications',
        'home.how.step2.del3': 'Implementation timeline',
        'home.how.step3.title': 'Implementation',
        'home.how.step3.desc': 'We configure and implement automations with exhaustive testing.',
        'home.how.step3.del1': 'Configured automations',
        'home.how.step3.del2': 'Complete testing',
        'home.how.step3.del3': 'Documentation',
        'home.how.step4.title': 'Continuous Support',
        'home.how.step4.desc': 'We train your team and provide support to optimize and scale.',
        'home.how.step4.del1': 'Team training',
        'home.how.step4.del2': '30-day support',
        'home.how.step4.del3': 'Continuous optimization',

        // Home - Services
        'home.services.title': 'Our services',
        'home.services.subtitle': 'Complete automation solutions for every business need',

        // Home - Use Cases
        'home.usecases.title': 'Most popular use cases',
        'home.usecase.1': 'Invoicing and collection automation',
        'home.usecase.2': 'CRM + WhatsApp integration',
        'home.usecase.3': 'Automatic lead capture',
        'home.usecase.4': 'Automatic report generation',
        'home.usecase.5': 'Data cleaning and migration',
        'home.usecase.6': 'Reminders and scheduling',

        // Home - Final CTA
        'home.cta.title': 'Ready to recover time in your operation?',
        'home.cta.desc': 'Get your free audit today and discover which processes you can automate',
        'home.cta.primary': 'Request Free Audit',

        // Common
        'common.readMore': 'Read more',
        'common.viewMore': 'View more',
        'common.contactUs': 'Contact us',
        'common.learnMore': 'Learn more',
        'common.deliverables': 'Deliverables',

        // Footer
        'footer.tagline': 'Intelligent automation for companies in Colombia',
        'footer.services': 'Services',
        'footer.company': 'Company',
        'footer.contact': 'Contact',
        'footer.rights': 'All rights reserved',
        'footer.cta': 'Ready to automate?',
        'footer.cta.button': 'Schedule your Audit',
    },
}

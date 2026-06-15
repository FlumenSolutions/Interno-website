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
        'nav.cta': 'Cuéntanos tu idea',

        // Language Selector
        'lang.spanish': 'Español',
        'lang.english': 'English',

        // Home Hero
        'home.hero.title': 'Software a la medida, construido con IA',
        'home.hero.subtitle': 'Creamos las aplicaciones, sitios web, chatbots y automatizaciones que tu negocio necesita — más rápido, gracias a la IA.',
        'home.hero.cta.primary': 'Cuéntanos tu idea',
        'home.hero.benefit1': 'Hecho a la medida, no plantillas',
        'home.hero.benefit2': 'Construido en días, no meses',
        'home.hero.benefit3': 'Acompañamiento cercano',

        // Home - Problem/Solution
        'home.problem.title': 'De la idea al software funcionando',
        'home.problem.manual': 'Todo en Excel',
        'home.problem.manual.desc': 'Hojas de cálculo que ya se quedaron cortas para tu operación',
        'home.problem.errors': 'Herramientas que no encajan',
        'home.problem.errors.desc': 'Software comercial que no hace lo que tu negocio necesita',
        'home.problem.slow': 'Ideas estancadas',
        'home.problem.slow.desc': 'Proyectos que no arrancan porque desarrollar parece caro y lento',
        'home.solution.auto': 'Hecho a tu medida',
        'home.solution.auto.desc': 'Software que se ajusta a tu proceso, no al revés',
        'home.solution.zero': 'Construido con IA',
        'home.solution.zero.desc': 'Usamos IA de última generación para entregar más rápido y a menor costo',
        'home.solution.247': 'Tuyo de principio a fin',
        'home.solution.247.desc': 'Eres dueño del código y los datos, listo para crecer',

        // Home - How It Works
        'home.how.title': 'Cómo trabajamos',
        'home.how.subtitle': 'Un proceso simple y transparente, de tu idea al software funcionando',
        'home.how.step1.title': 'Cuéntanos tu idea',
        'home.how.step1.desc': 'Entendemos qué necesita tu negocio y te decimos con claridad qué se puede construir, sin compromiso.',
        'home.how.step1.del1': 'Entendemos tu necesidad',
        'home.how.step1.del2': 'Propuesta clara',
        'home.how.step1.del3': 'Sin tecnicismos',
        'home.how.step2.title': 'Diseñamos la solución',
        'home.how.step2.desc': 'Definimos cómo se verá y qué hará, y lo validamos contigo antes de construir.',
        'home.how.step2.del1': 'Alcance definido',
        'home.how.step2.del2': 'Propuesta validada contigo',
        'home.how.step2.del3': 'Tiempos claros',
        'home.how.step3.title': 'Construimos con IA',
        'home.how.step3.desc': 'Desarrollamos tu software apoyados en IA de última generación, para llegar a algo funcional más rápido.',
        'home.how.step3.del1': 'Desarrollo acelerado con IA',
        'home.how.step3.del2': 'Versión funcional para probar',
        'home.how.step3.del3': 'Ajustes sobre la marcha',
        'home.how.step4.title': 'Entregamos y acompañamos',
        'home.how.step4.desc': 'Lo dejamos funcionando en la nube y te acompañamos después de entregar.',
        'home.how.step4.del1': 'Desplegado y funcionando',
        'home.how.step4.del2': 'Eres dueño del código',
        'home.how.step4.del3': 'Soporte y mejoras',

        // Home - Services
        'home.services.title': 'Qué construimos',
        'home.services.subtitle': 'Software a la medida para tu negocio: lo que necesites, lo construimos',

        // Home - Use Cases
        'home.usecases.title': 'Algunas cosas que podemos construir',
        'home.usecase.1': 'Aplicaciones internas para tu operación',
        'home.usecase.2': 'Páginas y sitios web',
        'home.usecase.3': 'Chatbots y asistentes con IA',
        'home.usecase.4': 'Portales para tus clientes',
        'home.usecase.5': 'Automatización de tareas repetitivas',
        'home.usecase.6': 'Reemplazar ese Excel que se quedó corto',

        // Home - Final CTA
        'home.cta.title': '¿Tienes una idea en mente?',
        'home.cta.desc': 'Cuéntanos qué necesitas y te decimos qué podemos construir, sin compromiso',
        'home.cta.primary': 'Cuéntanos tu idea',

        // Common
        'common.readMore': 'Leer más',
        'common.viewMore': 'Ver más',
        'common.contactUs': 'Contáctanos',
        'common.learnMore': 'Saber más',
        'common.deliverables': 'Entregables',

        // Footer
        'footer.tagline': 'Software a la medida, construido con IA, para empresas en Colombia',
        'footer.services': 'Servicios',
        'footer.company': 'Empresa',
        'footer.contact': 'Contacto',
        'footer.rights': 'Todos los derechos reservados',
        'footer.cta': '¿Tienes una idea?',
        'footer.cta.button': 'Cuéntanos tu idea',
    },
    en: {
        // Navbar
        'nav.services': 'Services',
        'nav.process': 'Process',
        'nav.resources': 'Resources',
        'nav.about': 'About Us',
        'nav.contact': 'Contact',
        'nav.cta': 'Tell us your idea',

        // Language Selector
        'lang.spanish': 'Español',
        'lang.english': 'English',

        // Home Hero
        'home.hero.title': 'Custom software, built with AI',
        'home.hero.subtitle': 'We build the apps, websites, chatbots and automations your business needs — faster, thanks to AI.',
        'home.hero.cta.primary': 'Tell us your idea',
        'home.hero.benefit1': 'Built for you, not templates',
        'home.hero.benefit2': 'Built in days, not months',
        'home.hero.benefit3': 'Close, hands-on support',

        // Home - Problem/Solution
        'home.problem.title': 'From idea to working software',
        'home.problem.manual': 'Everything in Excel',
        'home.problem.manual.desc': 'Spreadsheets that have outgrown your operation',
        'home.problem.errors': 'Tools that don\'t fit',
        'home.problem.errors.desc': 'Off-the-shelf software that doesn\'t do what your business needs',
        'home.problem.slow': 'Stalled ideas',
        'home.problem.slow.desc': 'Projects that never start because building seems slow and expensive',
        'home.solution.auto': 'Built for you',
        'home.solution.auto.desc': 'Software that fits your process, not the other way around',
        'home.solution.zero': 'Built with AI',
        'home.solution.zero.desc': 'We use the latest AI to deliver faster and at a lower cost',
        'home.solution.247': 'Yours, end to end',
        'home.solution.247.desc': 'You own the code and the data, ready to grow',

        // Home - How It Works
        'home.how.title': 'How we work',
        'home.how.subtitle': 'A simple, transparent process, from your idea to working software',
        'home.how.step1.title': 'Tell us your idea',
        'home.how.step1.desc': 'We understand what your business needs and tell you clearly what can be built, no commitment.',
        'home.how.step1.del1': 'We understand your need',
        'home.how.step1.del2': 'Clear proposal',
        'home.how.step1.del3': 'No jargon',
        'home.how.step2.title': 'We design the solution',
        'home.how.step2.desc': 'We define how it will look and what it will do, and validate it with you before building.',
        'home.how.step2.del1': 'Defined scope',
        'home.how.step2.del2': 'Proposal validated with you',
        'home.how.step2.del3': 'Clear timeline',
        'home.how.step3.title': 'We build with AI',
        'home.how.step3.desc': 'We develop your software powered by the latest AI, to reach something functional faster.',
        'home.how.step3.del1': 'AI-accelerated development',
        'home.how.step3.del2': 'A working version to try',
        'home.how.step3.del3': 'Adjustments along the way',
        'home.how.step4.title': 'We deliver and support',
        'home.how.step4.desc': 'We leave it running in the cloud and support you after delivery.',
        'home.how.step4.del1': 'Deployed and running',
        'home.how.step4.del2': 'You own the code',
        'home.how.step4.del3': 'Support and improvements',

        // Home - Services
        'home.services.title': 'What we build',
        'home.services.subtitle': 'Custom software for your business: whatever you need, we build it',

        // Home - Use Cases
        'home.usecases.title': 'Some things we can build',
        'home.usecase.1': 'Internal apps for your operation',
        'home.usecase.2': 'Websites and landing pages',
        'home.usecase.3': 'Chatbots and AI assistants',
        'home.usecase.4': 'Customer portals',
        'home.usecase.5': 'Automation of repetitive tasks',
        'home.usecase.6': 'Replace that Excel that fell short',

        // Home - Final CTA
        'home.cta.title': 'Have an idea in mind?',
        'home.cta.desc': 'Tell us what you need and we\'ll tell you what we can build, no commitment',
        'home.cta.primary': 'Tell us your idea',

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

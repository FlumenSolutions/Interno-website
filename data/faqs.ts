export interface FAQ {
    question: string
    answer: string
    category: string
}

export const faqs: FAQ[] = [
    // General
    {
        category: 'general',
        question: '¿Qué es Flumen Solutions?',
        answer: 'Somos una consultora especializada en automatización de procesos empresariales. Ayudamos a empresas en Colombia a eliminar tareas manuales, integrar sistemas y escalar operaciones sin aumentar costos.',
    },
    {
        category: 'general',
        question: '¿En qué se diferencia de contratar más personal?',
        answer: 'La automatización trabaja 24/7 con procesos consistentes, no requiere capacitación continua, no se enferma ni toma vacaciones, y el costo es una inversión única vs. salarios recurrentes. Además, permite que tu equipo se enfoque en tareas estratégicas.',
    },
    {
        category: 'general',
        question: '¿Trabajan solo en Bogotá?',
        answer: 'Aunque estamos basados en Bogotá, trabajamos con empresas en toda Colombia de forma remota. Ofrecemos soporte local y reuniones presenciales cuando sea necesario.',
    },

    // Servicios
    {
        category: 'servicios',
        question: '¿Cuánto tiempo toma implementar una automatización?',
        answer: 'Depende de la complejidad. Proyectos simples pueden estar listos en 2-3 semanas, mientras que implementaciones complejas pueden tomar 6-8 semanas. En la auditoría inicial te damos un timeline exacto.',
    },
    {
        category: 'servicios',
        question: '¿Necesito conocimientos técnicos para usar las automatizaciones?',
        answer: 'No. Diseñamos las automatizaciones para que funcionen sin intervención técnica. Además, capacitamos a tu equipo para que puedan monitorear y hacer ajustes básicos si lo desean.',
    },
    {
        category: 'servicios',
        question: '¿Qué pasa si mi sistema no es compatible?',
        answer: 'Trabajamos con APIs y webhooks que permiten conectar prácticamente cualquier sistema. Si tu software tiene una API o permite exportar datos, podemos integrarlo. En casos excepcionales, buscamos alternativas viables.',
    },
    {
        category: 'servicios',
        question: '¿Puedo automatizar solo una parte de mi proceso?',
        answer: 'Sí, absolutamente. De hecho, recomendamos empezar con automatizaciones pequeñas y de alto impacto, y luego escalar a procesos más complejos.',
    },

    // Costos
    {
        category: 'costos',
        question: '¿Cuánto cuesta una automatización?',
        answer: 'Los proyectos van desde $2M COP para automatizaciones simples hasta $15M COP para implementaciones complejas con IA. En la auditoría gratuita te damos una cotización exacta basada en tus necesidades.',
    },
    {
        category: 'costos',
        question: '¿Hay costos recurrentes?',
        answer: 'Depende de las herramientas. Si usamos n8n en tu servidor, no hay costos de licencia. Si usamos servicios cloud como Make o APIs de terceros, hay costos mensuales que te detallamos antes de empezar.',
    },
    {
        category: 'costos',
        question: '¿Cómo se mide el retorno de la inversión?',
        answer: 'El retorno proviene del tiempo que tu equipo deja de gastar en tareas manuales y de la reducción de errores. En la auditoría gratuita estimamos contigo cuántas horas podrías recuperar y en qué procesos, para que tengas una base concreta antes de invertir.',
    },

    // Técnico
    {
        category: 'tecnico',
        question: '¿Qué herramientas usan?',
        answer: 'Principalmente n8n y Make para automatizaciones, WhatsApp Business API para integraciones de mensajería, y OpenAI/LangChain para asistentes de IA. Elegimos la mejor herramienta según tus necesidades.',
    },
    {
        category: 'tecnico',
        question: '¿Mis datos están seguros?',
        answer: 'Sí. Implementamos las automatizaciones siguiendo mejores prácticas de seguridad. Si usas n8n en tu servidor, tus datos nunca salen de tu infraestructura. Firmamos acuerdos de confidencialidad cuando es necesario.',
    },
    {
        category: 'tecnico',
        question: '¿Qué pasa si algo falla?',
        answer: 'Configuramos alertas automáticas para detectar errores. Incluimos soporte post-implementación y documentación completa. Además, diseñamos fallbacks para que los procesos críticos nunca se detengan.',
    },

    // Proceso
    {
        category: 'proceso',
        question: '¿Cómo funciona la auditoría gratuita?',
        answer: 'Es una sesión de 30-60 minutos donde analizamos tus procesos actuales, identificamos oportunidades de automatización y te damos una propuesta con ROI estimado. Sin compromiso.',
    },
    {
        category: 'proceso',
        question: '¿Capacitan a nuestro equipo?',
        answer: 'Sí, todos nuestros proyectos incluyen capacitación para que tu equipo pueda usar, monitorear y hacer ajustes básicos a las automatizaciones.',
    },
    {
        category: 'proceso',
        question: '¿Dan soporte después de la implementación?',
        answer: 'Sí, incluimos 30 días de soporte post-implementación. Después puedes contratar planes de soporte mensual o solicitar ajustes puntuales según necesites.',
    },
]

export function getFAQsByCategory(category: string): FAQ[] {
    return faqs.filter((faq) => faq.category === category)
}

export const faqCategories = [
    { id: 'general', name: 'General' },
    { id: 'servicios', name: 'Servicios' },
    { id: 'costos', name: 'Costos y ROI' },
    { id: 'tecnico', name: 'Técnico' },
    { id: 'proceso', name: 'Proceso' },
]

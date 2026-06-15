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
        answer: 'Somos un equipo de ingenieros que construye software a la medida con IA: aplicaciones, sitios web, chatbots y automatizaciones. Ayudamos a empresas en Colombia a tener la herramienta que necesitan, construida más rápido y a menor costo gracias a la IA.',
    },
    {
        category: 'general',
        question: '¿Qué tipo de cosas construyen?',
        answer: 'Aplicaciones a la medida (paneles internos, portales de clientes, sistemas de gestión), páginas y sitios web, chatbots y asistentes con IA, y automatización de tareas repetitivas. Si tu negocio necesita una herramienta de software, probablemente podemos construirla.',
    },
    {
        category: 'general',
        question: '¿Trabajan solo en Bogotá?',
        answer: 'Aunque estamos basados en Bogotá, trabajamos con empresas en toda Colombia de forma remota. Ofrecemos soporte local y reuniones presenciales cuando sea necesario.',
    },

    // Servicios
    {
        category: 'servicios',
        question: '¿Cuánto tiempo toma construir mi proyecto?',
        answer: 'Depende de qué tan grande sea. Como construimos apoyados en IA, solemos llegar a una versión funcional para probar mucho más rápido que un desarrollo tradicional. Cuando nos cuentes tu idea te damos un tiempo estimado concreto.',
    },
    {
        category: 'servicios',
        question: '¿Necesito conocimientos técnicos?',
        answer: 'No. Nos encargamos de toda la parte técnica y te explicamos todo sin jerga. Te entregamos algo listo para usar y te acompañamos para que tú y tu equipo lo aprovechen.',
    },
    {
        category: 'servicios',
        question: '¿Se conecta con las herramientas que ya uso?',
        answer: 'Sí. Trabajamos con APIs e integraciones que permiten conectar prácticamente cualquier sistema. Si tu software tiene API o permite exportar datos, podemos integrarlo.',
    },
    {
        category: 'servicios',
        question: '¿Puedo empezar con algo pequeño?',
        answer: 'Sí, y de hecho lo recomendamos. Conviene empezar con una primera versión enfocada en lo de mayor impacto, probarla con uso real, y crecer desde ahí.',
    },

    // Costos
    {
        category: 'costos',
        question: '¿Cuánto cuesta un proyecto?',
        answer: 'Depende del alcance. Como construimos apoyados en IA, solemos lograr costos más bajos que un desarrollo tradicional. Cuando nos cuentes tu idea te damos una cotización clara y sin sorpresas antes de empezar.',
    },
    {
        category: 'costos',
        question: '¿Hay costos recurrentes?',
        answer: 'Depende del proyecto. Algunos servicios (hosting, una base de datos en la nube, APIs de terceros) tienen un costo mensual, normalmente bajo. Te detallamos cualquier costo recurrente antes de empezar, sin letra pequeña.',
    },
    {
        category: 'costos',
        question: '¿De quién es el código y los datos?',
        answer: 'Tuyos. Eres dueño del código y de los datos de lo que construimos. No te dejamos amarrado: si el día de mañana quieres seguir por tu cuenta o con otro equipo, puedes hacerlo.',
    },

    // Técnico
    {
        category: 'tecnico',
        question: '¿Con qué tecnología construyen?',
        answer: 'Usamos tecnologías web modernas y probadas (como React, Next.js y bases de datos en la nube) y nos apoyamos en IA de última generación para construir más rápido. Elegimos la herramienta adecuada según lo que tu proyecto necesite.',
    },
    {
        category: 'tecnico',
        question: '¿Mis datos están seguros?',
        answer: 'Sí. Construimos siguiendo buenas prácticas de seguridad y tú eres el dueño de tus datos. Firmamos acuerdos de confidencialidad cuando es necesario.',
    },
    {
        category: 'tecnico',
        question: '¿Qué pasa si algo falla después de entregar?',
        answer: 'Te acompañamos después de la entrega: incluimos soporte y documentación de lo que construimos. Si aparece un problema, lo revisamos y lo resolvemos.',
    },

    // Proceso
    {
        category: 'proceso',
        question: '¿Cómo es la primera conversación?',
        answer: 'Nos cuentas tu idea o el problema que quieres resolver, y nosotros te decimos con claridad qué se puede construir, cómo lo haríamos y un estimado de tiempo. Sin tecnicismos y sin compromiso.',
    },
    {
        category: 'proceso',
        question: '¿Puedo ir viendo avances?',
        answer: 'Sí. Trabajamos hacia una versión funcional que puedas probar pronto, e iremos ajustando con tu retroalimentación en vez de desaparecer hasta el final.',
    },
    {
        category: 'proceso',
        question: '¿Dan soporte después de entregar?',
        answer: 'Sí, te acompañamos después de la entrega. Podemos hacer ajustes, agregar funcionalidades o darte soporte continuo según lo que necesites.',
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

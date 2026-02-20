export interface CaseStudy {
    id: string
    slug: string
    client: string
    industry: string
    location: string
    logo?: string
    challenge: string
    solution: string
    results: {
        metric: string
        value: string
        description: string
    }[]
    testimonial: {
        quote: string
        author: string
        position: string
        photo?: string
    }
    services: string[]
    tools: string[]
    duration: string
    image?: string
}

export const cases: CaseStudy[] = [
    {
        id: '1',
        slug: 'distribuidor-alimentos-bogota',
        client: 'Distribuidora de Alimentos ABC',
        industry: 'Distribución',
        location: 'Bogotá',
        challenge: 'Procesaban más de 200 pedidos diarios de forma manual, generando errores en facturación y retrasos en entregas. El equipo dedicaba 6 horas diarias solo a ingresar pedidos al sistema.',
        solution: 'Implementamos un flujo automatizado que captura pedidos desde WhatsApp, los valida contra inventario, genera facturas automáticamente y sincroniza con el sistema de entregas. Integramos WhatsApp Business API con su ERP usando n8n.',
        results: [
            {
                metric: 'Tiempo ahorrado',
                value: '75%',
                description: 'Reducción en tiempo de procesamiento de pedidos',
            },
            {
                metric: 'Errores eliminados',
                value: '95%',
                description: 'Menos errores en facturación y entregas',
            },
            {
                metric: 'ROI',
                value: '3 meses',
                description: 'Recuperación de la inversión',
            },
        ],
        testimonial: {
            quote: 'Pasamos de procesar 200 pedidos con 3 personas a manejar 400 pedidos con el mismo equipo. La automatización nos permitió crecer sin aumentar costos operativos.',
            author: 'Carlos Méndez',
            position: 'Gerente de Operaciones',
        },
        services: ['integracion-crm', 'automatizacion-procesos'],
        tools: ['n8n', 'WhatsApp Business API', 'ERP'],
        duration: '6 semanas',
    },
    {
        id: '2',
        slug: 'agencia-inmobiliaria-medellin',
        client: 'Inmobiliaria Premium',
        industry: 'Inmobiliaria',
        location: 'Medellín',
        challenge: 'Recibían más de 100 consultas diarias por WhatsApp sobre propiedades, pero solo podían responder el 30% en horario laboral. Perdían leads valiosos fuera del horario de oficina.',
        solution: 'Desarrollamos un asistente de IA con RAG entrenado con información de todas sus propiedades. El bot responde consultas 24/7, agenda visitas automáticamente y captura leads en HubSpot.',
        results: [
            {
                metric: 'Tasa de respuesta',
                value: '100%',
                description: 'Respuesta inmediata 24/7',
            },
            {
                metric: 'Conversión',
                value: '+45%',
                description: 'Aumento en visitas agendadas',
            },
            {
                metric: 'Leads capturados',
                value: '+200%',
                description: 'Más leads fuera de horario laboral',
            },
        ],
        testimonial: {
            quote: 'El asistente de IA se convirtió en nuestro mejor vendedor. Responde consultas complejas sobre propiedades mejor que algunos de nuestros agentes junior.',
            author: 'María Rodríguez',
            position: 'Directora Comercial',
        },
        services: ['asistentes-ia', 'integracion-crm'],
        tools: ['OpenAI GPT', 'LangChain', 'HubSpot', 'WhatsApp API'],
        duration: '8 semanas',
    },
    {
        id: '3',
        slug: 'ecommerce-moda-colombia',
        client: 'Tienda de Moda Online',
        industry: 'E-commerce',
        location: 'Colombia',
        challenge: 'Gestionaban 3 canales de venta (web, Instagram, WhatsApp) con sistemas separados. Inventario desincronizado causaba sobreventa y clientes insatisfechos.',
        solution: 'Centralizamos todos los canales en un solo sistema automatizado. Sincronización de inventario en tiempo real, procesamiento automático de pedidos y notificaciones de estado por WhatsApp.',
        results: [
            {
                metric: 'Sobreventa',
                value: '0%',
                description: 'Eliminación total de sobreventa',
            },
            {
                metric: 'Tiempo de procesamiento',
                value: '-80%',
                description: 'De 30 min a 6 min por pedido',
            },
            {
                metric: 'Satisfacción',
                value: '4.8/5',
                description: 'Calificación de clientes',
            },
        ],
        testimonial: {
            quote: 'Antes perdíamos ventas por no actualizar inventario a tiempo. Ahora todo está sincronizado y nuestros clientes reciben notificaciones automáticas de cada etapa.',
            author: 'Juliana Castro',
            position: 'Fundadora',
        },
        services: ['automatizacion-procesos', 'integracion-crm'],
        tools: ['n8n', 'Shopify', 'Instagram API', 'WhatsApp API'],
        duration: '5 semanas',
    },
    {
        id: '4',
        slug: 'consultoria-legal-bogota',
        client: 'Firma de Abogados',
        industry: 'Servicios Legales',
        location: 'Bogotá',
        challenge: 'Dedicaban 10 horas semanales a generar reportes de casos, facturación y seguimientos. Procesos manuales en Excel propensos a errores.',
        solution: 'Automatizamos la generación de reportes, facturación recurrente y recordatorios de pagos. Implementamos n8n en su servidor para mantener privacidad de datos sensibles.',
        results: [
            {
                metric: 'Tiempo en reportes',
                value: '-90%',
                description: 'De 10 horas a 1 hora semanal',
            },
            {
                metric: 'Cobranza',
                value: '+35%',
                description: 'Mejora en recuperación de cartera',
            },
            {
                metric: 'Errores',
                value: '0',
                description: 'Cero errores en facturación',
            },
        ],
        testimonial: {
            quote: 'La automatización nos dio tiempo para enfocarnos en lo que realmente importa: nuestros clientes. Los reportes se generan solos cada lunes a las 8am.',
            author: 'Dr. Andrés Gómez',
            position: 'Socio Principal',
        },
        services: ['implementacion-n8n', 'automatizacion-procesos'],
        tools: ['n8n', 'PostgreSQL', 'Google Workspace'],
        duration: '4 semanas',
    },
]

export function getCaseBySlug(slug: string): CaseStudy | undefined {
    return cases.find((c) => c.slug === slug)
}

export function getCasesByService(serviceSlug: string): CaseStudy[] {
    return cases.filter((c) => c.services.includes(serviceSlug))
}

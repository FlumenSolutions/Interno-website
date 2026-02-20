import { Zap, Bot, Workflow, Database } from 'lucide-react'

export interface Service {
    id: string
    slug: string
    title: string
    shortDescription: string
    description: string
    icon: any
    features: string[]
    useCases: string[]
    tools: string[]
    benefits: string[]
    whoIsFor: string[]
    pricing: {
        min: number
        max: number
        currency: string
    }
}

export const services: Service[] = [
    {
        id: '1',
        slug: 'automatizacion-procesos',
        title: 'Automatización de Procesos',
        shortDescription: 'Elimina tareas repetitivas y recupera hasta 80% del tiempo operativo',
        description: 'Diseñamos e implementamos flujos de trabajo automatizados que conectan tus sistemas, eliminan tareas manuales y reducen errores humanos. Desde facturación hasta reportes, automatizamos procesos end-to-end.',
        icon: Zap,
        features: [
            'Análisis y mapeo de procesos actuales',
            'Diseño de flujos automatizados personalizados',
            'Implementación con n8n o Make',
            'Integración con sistemas existentes',
            'Monitoreo y optimización continua',
            'Documentación completa',
            'Capacitación del equipo',
        ],
        useCases: [
            'Automatización de facturación y cobranza',
            'Generación automática de reportes',
            'Sincronización de inventarios',
            'Procesamiento de pedidos',
            'Gestión de aprobaciones',
            'Limpieza y migración de datos',
        ],
        tools: ['n8n', 'Make', 'Zapier', 'API REST', 'Webhooks'],
        benefits: [
            'Reducción de 50-80% en tiempo operativo',
            'Eliminación de errores humanos',
            'Procesos 24/7 sin intervención',
            'Escalabilidad sin contratar personal',
            'ROI visible en 2-3 meses',
        ],
        whoIsFor: [
            'Empresas con procesos repetitivos',
            'Equipos sobrecargados de tareas manuales',
            'Negocios que buscan escalar sin aumentar costos',
            'Empresas con múltiples sistemas desconectados',
        ],
        pricing: {
            min: 2000000,
            max: 8000000,
            currency: 'COP',
        },
    },
    {
        id: '2',
        slug: 'integracion-crm',
        title: 'Integración CRM + WhatsApp',
        shortDescription: 'Conecta tu CRM con WhatsApp y automatiza la gestión de clientes',
        description: 'Integramos tu CRM (HubSpot, Zoho, Pipedrive, etc.) con WhatsApp Business API para automatizar conversaciones, capturar leads y gestionar clientes desde un solo lugar.',
        icon: Database,
        features: [
            'Integración CRM con WhatsApp Business API',
            'Captura automática de leads desde WhatsApp',
            'Sincronización bidireccional de contactos',
            'Automatización de respuestas y seguimientos',
            'Dashboards de conversaciones',
            'Etiquetado y segmentación automática',
            'Reportes de conversión',
        ],
        useCases: [
            'Captura de leads desde WhatsApp al CRM',
            'Respuestas automáticas a consultas frecuentes',
            'Seguimiento automatizado de cotizaciones',
            'Recordatorios de pagos por WhatsApp',
            'Encuestas de satisfacción automatizadas',
            'Notificaciones de estado de pedidos',
        ],
        tools: ['WhatsApp Business API', 'HubSpot', 'Zoho CRM', 'Pipedrive', 'n8n', 'Make'],
        benefits: [
            'Respuesta inmediata a clientes 24/7',
            'Aumento de 40% en tasa de conversión',
            'Centralización de comunicaciones',
            'Reducción de tiempos de respuesta',
            'Mejor experiencia del cliente',
        ],
        whoIsFor: [
            'Empresas que usan WhatsApp para ventas',
            'Equipos comerciales con alto volumen de consultas',
            'Negocios que quieren centralizar comunicaciones',
            'Empresas con CRM subutilizado',
        ],
        pricing: {
            min: 3000000,
            max: 10000000,
            currency: 'COP',
        },
    },
    {
        id: '3',
        slug: 'asistentes-ia',
        title: 'Asistentes de IA (RAG)',
        shortDescription: 'Chatbots inteligentes que responden con información de tu empresa',
        description: 'Desarrollamos asistentes de IA personalizados usando RAG (Retrieval-Augmented Generation) que aprenden de tus documentos, manuales y bases de conocimiento para responder consultas de clientes o empleados.',
        icon: Bot,
        features: [
            'Entrenamiento con documentos de tu empresa',
            'Integración con WhatsApp, web y otros canales',
            'Respuestas contextuales y precisas',
            'Actualización continua de conocimiento',
            'Análisis de conversaciones',
            'Escalamiento a múltiples idiomas',
            'Dashboard de métricas',
        ],
        useCases: [
            'Soporte al cliente automatizado',
            'Asistente de ventas 24/7',
            'Consultas sobre productos y servicios',
            'Onboarding de nuevos empleados',
            'Asistente de recursos humanos',
            'Búsqueda en bases de conocimiento internas',
        ],
        tools: ['OpenAI GPT', 'LangChain', 'Pinecone', 'ChromaDB', 'n8n', 'WhatsApp API'],
        benefits: [
            'Reducción de 70% en consultas al equipo',
            'Disponibilidad 24/7',
            'Respuestas consistentes y precisas',
            'Escalabilidad sin límites',
            'Mejora continua con aprendizaje',
        ],
        whoIsFor: [
            'Empresas con alto volumen de consultas repetitivas',
            'Negocios con catálogos extensos',
            'Equipos de soporte sobrecargados',
            'Empresas que buscan innovar en atención al cliente',
        ],
        pricing: {
            min: 4000000,
            max: 15000000,
            currency: 'COP',
        },
    },
    {
        id: '4',
        slug: 'implementacion-n8n',
        title: 'Implementación n8n',
        shortDescription: 'Instalación y configuración de n8n en tu infraestructura',
        description: 'Implementamos n8n (plataforma open-source de automatización) en tu servidor o nube, configuramos workflows personalizados y capacitamos a tu equipo para que puedan crear sus propias automatizaciones.',
        icon: Workflow,
        features: [
            'Instalación en servidor propio o nube',
            'Configuración de seguridad y backups',
            'Creación de workflows iniciales',
            'Integración con tus sistemas',
            'Capacitación del equipo técnico',
            'Documentación de workflows',
            'Soporte post-implementación',
        ],
        useCases: [
            'Automatización de procesos internos',
            'Integraciones entre sistemas',
            'Webhooks y APIs personalizadas',
            'Procesamiento de datos',
            'Notificaciones automatizadas',
            'Sincronización de bases de datos',
        ],
        tools: ['n8n', 'Docker', 'PostgreSQL', 'Redis', 'Nginx', 'SSL'],
        benefits: [
            'Control total de tus automatizaciones',
            'Sin costos recurrentes de licencias',
            'Escalabilidad ilimitada',
            'Privacidad y seguridad de datos',
            'Autonomía para crear workflows',
        ],
        whoIsFor: [
            'Empresas que buscan independencia tecnológica',
            'Equipos técnicos que quieren aprender automatización',
            'Negocios con necesidades de integración complejas',
            'Empresas con requisitos de privacidad de datos',
        ],
        pricing: {
            min: 2500000,
            max: 7000000,
            currency: 'COP',
        },
    },
]

export function getServiceBySlug(slug: string): Service | undefined {
    return services.find((service) => service.slug === slug)
}

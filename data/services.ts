import { Code2, Globe, Bot, Workflow } from 'lucide-react'

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
        slug: 'desarrollo-aplicaciones',
        title: 'Aplicaciones a la medida',
        shortDescription: 'Software hecho para tu negocio, no plantillas genéricas',
        description: 'Construimos la aplicación que tu negocio necesita: paneles internos, herramientas de gestión, portales para clientes o el sistema que hoy resuelves a mano en Excel. Usamos IA de última generación para construir más rápido, así llegas a una versión funcional en mucho menos tiempo que un desarrollo tradicional.',
        icon: Code2,
        features: [
            'Análisis de lo que tu negocio necesita de verdad',
            'Diseño y desarrollo a la medida (no plantillas)',
            'Construcción acelerada con IA de última generación',
            'Base de datos y backend incluidos',
            'Versión funcional para probar pronto, e ir ajustando',
            'Despliegue en la nube listo para usar',
            'Acompañamiento y soporte después de entregar',
        ],
        useCases: [
            'Panel interno para gestionar tu operación',
            'Portal o área privada para tus clientes',
            'Reemplazar ese Excel que ya se quedó corto',
            'Sistema de pedidos, reservas o inventario',
            'Herramienta interna para tu equipo',
            'MVP de tu idea para validarla en el mercado',
        ],
        tools: ['Next.js', 'React', 'TypeScript', 'PostgreSQL', 'Cloud', 'IA generativa'],
        benefits: [
            'Software que se ajusta a tu proceso, no al revés',
            'Construido más rápido gracias a la IA',
            'Menos costo que un desarrollo tradicional',
            'Tú eres el dueño del código y los datos',
            'Crece contigo: se amplía cuando lo necesites',
        ],
        whoIsFor: [
            'Negocios que resuelven todo a mano en Excel',
            'Empresas que necesitan una herramienta propia',
            'Emprendedores con una idea que quieren construir',
            'Equipos con un proceso que ningún software comercial cubre',
        ],
        pricing: { min: 0, max: 0, currency: 'COP' },
    },
    {
        id: '2',
        slug: 'paginas-web',
        title: 'Páginas y sitios web',
        shortDescription: 'Tu presencia digital, rápida, moderna y que convierte',
        description: 'Diseñamos y desarrollamos sitios web y landing pages a la medida: rápidos, modernos, optimizados para celular y para aparecer en Google. No plantillas recicladas — un sitio pensado para que tu negocio se vea serio y convierta visitantes en clientes.',
        icon: Globe,
        features: [
            'Diseño a la medida de tu marca',
            'Optimizado para celular de verdad',
            'Rápido y optimizado para Google (SEO)',
            'Formularios de contacto que te avisan al instante',
            'Blog o sección de contenido si lo necesitas',
            'Conexión con tus herramientas (correo, WhatsApp, analítica)',
            'Desplegado y listo para vender',
        ],
        useCases: [
            'Sitio web corporativo de tu empresa',
            'Landing page para una campaña o producto',
            'Catálogo o portafolio de tus servicios',
            'Blog para atraer clientes desde Google',
            'Renovar una web vieja que ya no representa tu marca',
            'Página de captura de clientes potenciales',
        ],
        tools: ['Next.js', 'React', 'Tailwind CSS', 'Vercel', 'SEO', 'Analítica'],
        benefits: [
            'Una imagen profesional que genera confianza',
            'Más rápido que la mayoría de sitios',
            'Mejor posición en búsquedas de Google',
            'Funciona perfecto en celular',
            'Pensada para convertir, no solo para verse bonita',
        ],
        whoIsFor: [
            'Negocios sin web o con una desactualizada',
            'Empresas que quieren verse más profesionales',
            'Emprendedores lanzando un producto o servicio',
            'Quien necesita captar clientes desde internet',
        ],
        pricing: { min: 0, max: 0, currency: 'COP' },
    },
    {
        id: '3',
        slug: 'chatbots-asistentes-ia',
        title: 'Chatbots y asistentes con IA',
        shortDescription: 'Asistentes que responden con la información de tu negocio',
        description: 'Creamos chatbots y asistentes con IA que conocen tu negocio: responden preguntas frecuentes, atienden por WhatsApp o web, y dejan a tu equipo solo los casos que de verdad necesitan una persona. Entrenados con tu información para que respondan con datos correctos, no genéricos.',
        icon: Bot,
        features: [
            'Entrenado con la información de tu negocio',
            'Atiende por WhatsApp, web u otros canales',
            'Responde preguntas frecuentes al instante',
            'Pasa a una persona cuando el caso lo amerita',
            'Disponible 24/7, también fuera de horario',
            'Se actualiza cuando cambia tu información',
            'Acompañamiento para afinarlo con casos reales',
        ],
        useCases: [
            'Atención y soporte al cliente automatizado',
            'Responder preguntas frecuentes por WhatsApp',
            'Asistente de ventas que no duerme',
            'Consultas sobre productos, precios y servicios',
            'Filtrar y clasificar mensajes antes de tu equipo',
            'Asistente interno para tu propio equipo',
        ],
        tools: ['IA generativa', 'RAG', 'WhatsApp', 'Web', 'Integraciones API'],
        benefits: [
            'Tu equipo deja de responder lo mismo todo el día',
            'Respuestas inmediatas a cualquier hora',
            'Respuestas con tus datos, no genéricas',
            'Mejor experiencia para tus clientes',
            'Escala sin contratar más personal de atención',
        ],
        whoIsFor: [
            'Negocios que reciben muchas preguntas repetidas',
            'Equipos de atención saturados por WhatsApp',
            'Empresas con catálogos o información extensa',
            'Quien quiere atender bien sin estar pegado al celular',
        ],
        pricing: { min: 0, max: 0, currency: 'COP' },
    },
    {
        id: '4',
        slug: 'automatizacion-procesos',
        title: 'Automatización de procesos',
        shortDescription: 'Que el trabajo repetitivo se haga solo',
        description: 'Conectamos tus herramientas y automatizamos las tareas repetitivas que hoy te quitan tiempo: pasar datos de un lado a otro, generar reportes, enviar recordatorios. Diseñamos el flujo a la medida de cómo trabaja tu equipo, para que la operación corra sin intervención manual.',
        icon: Workflow,
        features: [
            'Mapeo de los procesos que más tiempo te quitan',
            'Diseño del flujo a la medida de tu operación',
            'Conexión entre las herramientas que ya usas',
            'Automatización de reportes y recordatorios',
            'Funciona sin que nadie tenga que estar pendiente',
            'Documentación de lo que se automatizó',
            'Ajustes y soporte después de entregar',
        ],
        useCases: [
            'Pasar datos entre sistemas sin copiar y pegar',
            'Generar reportes que antes hacías a mano',
            'Recordatorios de pago o seguimiento automáticos',
            'Sincronizar información entre herramientas',
            'Procesar pedidos o solicitudes',
            'Notificaciones automáticas a tu equipo o clientes',
        ],
        tools: ['Integraciones API', 'Webhooks', 'Cloud', 'IA', 'Bases de datos'],
        benefits: [
            'Recuperas las horas que se van en tareas manuales',
            'Menos errores que cuando se hace a mano',
            'La operación corre 24/7 sin intervención',
            'Tu equipo se enfoca en lo que de verdad importa',
            'Escalas sin tener que contratar más gente',
        ],
        whoIsFor: [
            'Negocios con tareas repetitivas que comen tiempo',
            'Equipos que copian y pegan datos entre sistemas',
            'Empresas que arman reportes a mano cada semana',
            'Quien quiere escalar sin aumentar la carga operativa',
        ],
        pricing: { min: 0, max: 0, currency: 'COP' },
    },
]

export function getServiceBySlug(slug: string): Service | undefined {
    return services.find((service) => service.slug === slug)
}

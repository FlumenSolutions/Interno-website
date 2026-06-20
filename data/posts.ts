// Artículos de respaldo (fallback) para el blog.
// Se usan cuando la base de datos (Prisma/Postgres) no está disponible o no tiene posts.
// Cuando exista la BD real con posts publicados, esos tienen prioridad — ver app/recursos/actions.ts.
// Contenido alineado con la marca: honesto, sin cifras inventadas ni casos de clientes falsos.

export interface LocalPost {
    title: string
    slug: string
    excerpt: string
    content: string // Markdown
    coverImage: string | null
    category: string | null
    tags: string[]
    metaTitle?: string
    metaDescription?: string
    publishedAt: Date
}

export const localPosts: LocalPost[] = [
    {
        title: 'Cómo automatizar WhatsApp en tu negocio (sin perder el trato humano)',
        slug: 'como-automatizar-whatsapp-negocio',
        excerpt:
            'WhatsApp es el canal donde te escriben tus clientes, pero responder lo mismo todo el día agota a tu equipo. Te explicamos qué se puede automatizar y qué conviene dejar en manos de una persona.',
        category: 'Guías',
        tags: ['whatsapp', 'automatización', 'atención al cliente', 'pymes'],
        coverImage: '/images/whatsapp.png',
        metaTitle: 'Cómo automatizar WhatsApp en tu negocio | Flumen',
        metaDescription:
            'Guía práctica para automatizar la atención por WhatsApp Business en tu PyME: respuestas automáticas, cotizaciones, recordatorios y cuándo dejar pasar a una persona.',
        publishedAt: new Date('2026-06-12T09:00:00Z'),
        content: `En Colombia y México, WhatsApp no es "un canal más": para muchas PyMEs es **el** canal. Es donde piden cotizaciones, preguntan precios, confirman pedidos y reclaman. El problema aparece cuando tu equipo pasa el día entero respondiendo lo mismo y aun así los mensajes se acumulan.

La buena noticia: gran parte de eso se puede automatizar sin que el cliente sienta que habla con un robot frío. La clave está en automatizar lo repetitivo y reservar a las personas para lo que de verdad necesita criterio.

## Qué sí conviene automatizar

Hay tareas que son candidatas casi seguras porque se repiten y siguen reglas claras:

- **Respuestas a preguntas frecuentes**: horarios, ubicación, formas de pago, tiempos de entrega.
- **Primer saludo y clasificación**: un mensaje de bienvenida que pregunta qué necesita el cliente y lo dirige al área correcta.
- **Cotizaciones simples**: si tus precios siguen una lógica (producto + cantidad), un flujo puede entregar el valor al instante.
- **Recordatorios y confirmaciones**: citas, pagos pendientes, estado del pedido.

> Regla práctica: si tu equipo escribe casi el mismo mensaje varias veces al día, ese mensaje es candidato a automatizarse.

## Qué NO conviene automatizar

Automatizar de más es tan dañino como no automatizar. Deja en manos de una persona:

- Reclamos delicados o clientes molestos.
- Negociaciones y ventas de alto valor.
- Cualquier caso donde una respuesta equivocada cueste un cliente.

El objetivo no es eliminar a tu equipo, es **liberarlo** de lo mecánico para que se concentre en lo que cierra ventas.

## Cómo se ve un flujo bien armado

Un buen sistema de WhatsApp automatizado suele funcionar así:

1. El cliente escribe y recibe un saludo inmediato, a cualquier hora.
2. El flujo entiende qué necesita y responde lo que puede resolver solo.
3. Si el caso necesita una persona, se lo pasa a tu equipo con el contexto ya recogido.

Así nadie espera horas por una respuesta básica, y tu equipo recibe los casos ya filtrados.

## El error más común

Muchos negocios compran un "bot" genérico, lo conectan y esperan magia. A las semanas lo apagan porque respondía mal y molestaba a los clientes. La diferencia no está en la herramienta, sino en **diseñar el flujo según cómo escribe de verdad tu cliente**.

Si quieres, en una auditoría gratuita revisamos tus conversaciones reales de WhatsApp y te decimos qué se puede automatizar sin arriesgar la relación con tus clientes, sin compromiso.`,
    },
    {
        title: 'Integrar tu CRM con el resto de tus herramientas: por dónde empezar',
        slug: 'integrar-crm-pyme-por-donde-empezar',
        excerpt:
            'Tener un CRM no sirve de mucho si vive aislado del resto de tu operación. Te explicamos qué significa integrarlo y cómo dar el primer paso sin un proyecto gigante.',
        category: 'Guías',
        tags: ['crm', 'integración', 'automatización', 'pymes'],
        coverImage: '/images/crm.png',
        metaTitle: 'Cómo integrar tu CRM en una PyME | Flumen',
        metaDescription:
            'Qué significa integrar un CRM con tus otras herramientas (WhatsApp, correo, facturación) y cómo empezar paso a paso sin un proyecto costoso.',
        publishedAt: new Date('2026-06-08T09:00:00Z'),
        content: `Muchas PyMEs compran un CRM con la mejor intención y, meses después, lo usan a medias. ¿La razón más común? El CRM vive **aislado**: los datos hay que meterlos a mano, no se conecta con WhatsApp ni con el correo, y termina siendo otra cosa más que actualizar.

Integrar tu CRM significa conectarlo con las herramientas que ya usas, para que la información fluya sola. Eso es lo que hace que de verdad valga la pena.

## Qué significa "integrar" en la práctica

Integrar no es un concepto técnico abstracto. Se ve así en el día a día:

- Un cliente nuevo escribe por WhatsApp → su contacto se crea solo en el CRM.
- Cierras una venta → se genera la factura sin volver a teclear los datos.
- Envías una cotización → queda registrada en el historial del cliente automáticamente.

La idea es simple: **capturar el dato una sola vez** y que viaje solo a donde se necesita.

## Por dónde empezar (sin morir en el intento)

No intentes integrar todo de golpe. El error clásico es querer un proyecto enorme y abandonarlo a la mitad. Empieza por el punto de más dolor:

1. **Identifica el copiado manual más frecuente.** ¿Qué dato re-escribe tu equipo todos los días? Ahí está la primera integración.
2. **Conecta dos herramientas, no diez.** Por ejemplo, formulario web → CRM. Una victoria pequeña genera confianza.
3. **Mide el tiempo recuperado.** Cuando veas el ahorro real, sabrás cuál integrar después.

> Una integración bien elegida puede eliminar horas de trabajo manual a la semana. Diez integraciones mal planeadas solo generan caos.

## Las herramientas no son el problema

CRMs como HubSpot, Zoho o Pipedrive ya tienen todo lo necesario para integrarse. El reto no es la herramienta: es **diseñar bien qué se conecta con qué** según cómo trabaja tu equipo.

Si tu CRM se siente como una carga en vez de una ayuda, probablemente el problema es que está aislado. En una auditoría gratuita revisamos tu operación y te mostramos qué integración te daría el mayor ahorro de tiempo primero, sin compromiso.`,
    },
    {
        title: 'Automatización con IA para PyMEs: qué es realista hoy y qué es humo',
        slug: 'automatizacion-ia-pymes-realista',
        excerpt:
            'La IA está en todas las conversaciones, pero ¿qué puede hacer de verdad por una pequeña o mediana empresa hoy? Separamos lo útil de lo exagerado.',
        category: 'Tendencias',
        tags: ['inteligencia artificial', 'automatización', 'pymes', 'tendencias'],
        coverImage: '/images/ia.png',
        metaTitle: 'Automatización con IA para PyMEs: qué es realista hoy | Flumen',
        metaDescription:
            'Qué puede hacer la inteligencia artificial por una PyME hoy mismo, qué todavía es exageración, y cómo evaluar si te conviene sin caer en promesas vacías.',
        publishedAt: new Date('2026-06-04T09:00:00Z'),
        content: `Cada semana aparece una herramienta nueva que promete "transformar tu negocio con IA". Para una PyME, separar lo útil de lo exagerado es difícil, y equivocarse cuesta tiempo y dinero. Vamos a ser concretos y honestos.

## Lo que la IA sí hace bien hoy

Estas aplicaciones ya son reales y aportan valor a empresas pequeñas:

- **Responder preguntas sobre tu propia información.** Un asistente que conoce tus precios, políticas y catálogo puede contestar a clientes y a tu equipo con datos correctos.
- **Resumir y clasificar.** Leer correos largos, ordenar solicitudes por prioridad, extraer datos clave de un documento.
- **Redactar borradores.** Cotizaciones, respuestas frecuentes, descripciones de producto que una persona luego revisa.

El patrón común: la IA hace el primer 80% del trabajo repetitivo y una persona pone el criterio final.

## Lo que todavía es humo (o riesgoso)

Conviene desconfiar cuando alguien promete:

- Que la IA va a "reemplazar a todo tu equipo". No es así, y no deberías quererlo.
- Resultados garantizados con cifras exactas sin conocer tu negocio.
- Un sistema que decide solo en temas sensibles (dinero, contratos, reclamos) sin supervisión humana.

> La IA es excelente asistente y mal jefe. Úsala para acelerar a tu equipo, no para sacarlo de las decisiones importantes.

## Cómo saber si te conviene

Antes de pagar por cualquier herramienta de IA, hazte tres preguntas:

1. ¿Qué tarea concreta y repetitiva quiero quitarle a mi equipo?
2. ¿Tengo la información ordenada para que la IA trabaje con datos reales?
3. ¿Quién va a revisar y corregir lo que produzca?

Si tienes respuestas claras, probablemente la IA te sirva. Si no, primero conviene ordenar el proceso.

## En resumen

La IA para PyMEs hoy es real y útil, pero no es magia. Lo que marca la diferencia es elegir **el problema correcto** y montarla con supervisión, no creer en promesas de reemplazo total.

Si quieres saber qué tarea de tu negocio es buena candidata para IA —y cuál no— en una auditoría gratuita lo revisamos juntos con los pies en la tierra, sin compromiso.`,
    },
    {
        title: '5 señales de que tu PyME ya necesita automatización',
        slug: 'senales-pyme-necesita-automatizacion',
        excerpt:
            'Si reconoces alguna de estas situaciones en tu día a día, probablemente estás perdiendo horas en tareas que un flujo automatizado podría resolver solo.',
        category: 'Guías',
        tags: ['automatización', 'pymes', 'productividad'],
        coverImage: '/images/senales.png',
        metaTitle: '5 señales de que tu PyME necesita automatización | Flumen',
        metaDescription:
            'Reconoce las señales de que tu empresa está lista para automatizar procesos: tareas repetitivas, errores manuales, respuestas lentas y más.',
        publishedAt: new Date('2026-06-10T09:00:00Z'),
        content: `La automatización no es solo para grandes corporaciones. La mayoría de las PyMEs ya tienen procesos perfectos para automatizar — el problema es que casi nadie se detiene a identificarlos. Aquí van cinco señales claras de que es momento de dar el paso.

## 1. Copias y pegas los mismos datos entre sistemas

Si tu equipo pasa información de un Excel al CRM, del correo a una hoja de cálculo, o de WhatsApp a un sistema de pedidos, estás haciendo trabajo que una integración resuelve en segundos. Cada copiado manual es además una oportunidad de error.

> Una regla simple: si haces la misma secuencia de clics más de tres veces por semana, probablemente se puede automatizar.

## 2. Respondes lo mismo una y otra vez

Preguntas frecuentes por WhatsApp, cotizaciones repetidas, recordatorios de pago. Cuando el 80% de tus mensajes son variaciones de las mismas cinco respuestas, un asistente bien configurado puede encargarse de la primera línea y dejar a tu equipo solo los casos que de verdad necesitan una persona.

## 3. Los reportes te quitan medio día

Si armar el reporte semanal o mensual significa abrir varias fuentes, consolidar a mano y revisar que todo cuadre, ese es uno de los procesos con mejor retorno al automatizar: pasa de horas a un reporte que se genera solo y llega a tu bandeja.

## 4. Los errores manuales te cuestan

Una factura con el monto equivocado, un pedido mal capturado, un cliente al que no le llegó la confirmación. Los errores manuales no solo cuestan tiempo en corregirlos — cuestan confianza. Los flujos automatizados aplican las mismas reglas siempre, sin distracciones ni cansancio.

## 5. Creciste, pero tu operación no escala

Si para atender más clientes la única salida que ves es contratar más gente para tareas operativas, la automatización es justo lo que te falta: te permite manejar más volumen con el mismo equipo, liberando a las personas para el trabajo que de verdad aporta.

## ¿Y ahora qué?

Reconocer estas señales es el primer paso. El segundo es mapear qué procesos concretos conviene automatizar primero — normalmente los más repetitivos y de mayor impacto. Si quieres, en una auditoría gratuita revisamos juntos tus procesos y te decimos dónde está el mayor ahorro de tiempo, sin compromiso.`,
    },
]

export function getLocalPosts(category?: string): LocalPost[] {
    if (category && category !== 'Todas') {
        return localPosts.filter((p) => p.category === category)
    }
    return localPosts
}

export function getLocalPostBySlug(slug: string): LocalPost | null {
    return localPosts.find((p) => p.slug === slug) ?? null
}

import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Política de Cookies | Flumen Solutions',
    description: 'Conoce qué cookies y tecnologías de seguimiento usa Flumen Solutions, con qué propósito y cómo puedes administrarlas.',
}

export default function CookiesPage() {
    return (
        <main className="pt-32 pb-24 bg-background min-h-screen">
            <div className="container max-w-4xl mx-auto px-6">
                <div className="mb-12">
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Política de Cookies</h1>
                    <p className="text-slate-400">Última actualización: Agosto 2026</p>
                </div>

                <div className="space-y-8 text-slate-300 leading-relaxed">
                    <section>
                        <p className="mb-4">
                            FLUMEN SOLUTIONS S.A.S. (en adelante, “FLUMEN”), identificada con NIT 902.004.333-8, utiliza cookies y tecnologías de
                            seguimiento similares en el sitio web flumensolutions.com para su correcto funcionamiento, para entender cómo se usa
                            y para medir y mejorar nuestras campañas de marketing. Esta Política complementa la{' '}
                            <a href="/privacidad" className="text-white underline hover:no-underline">Política de Privacidad</a> y describe
                            específicamente qué cookies usamos, con qué propósito y cómo puedes administrarlas.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">1. ¿Qué es una cookie?</h2>
                        <p>
                            Una cookie es un pequeño archivo de texto que un sitio web guarda en tu navegador cuando lo visitas. Permite que el
                            sitio recuerde información sobre tu visita —como tus preferencias o si ya interactuaste con el sitio antes— y que
                            terceros con quienes colaboramos (como Google, Meta y LinkedIn) reconozcan tu navegador en visitas posteriores.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">2. Cookies y tecnologías que usamos</h2>
                        <p className="mb-4">
                            Actualmente usamos las siguientes herramientas de terceros en flumensolutions.com:
                        </p>

                        <h3 className="text-xl font-semibold text-white mb-2">2.1. Google Analytics 4 (Google)</h3>
                        <p className="mb-4">
                            Recopila estadísticas de uso del sitio de forma agregada: qué páginas se visitan, desde dónde llegan los visitantes
                            y cómo navegan el sitio. Esto nos ayuda a entender qué contenido funciona y a mejorar la experiencia del sitio.
                        </p>

                        <h3 className="text-xl font-semibold text-white mb-2">2.2. Meta Pixel (Meta / Facebook, Instagram)</h3>
                        <p className="mb-4">
                            Registra tu visita al sitio y, si completas nuestro formulario de contacto o nos escribes por WhatsApp, ese evento
                            específico. Usamos esta información para medir el desempeño de nuestras campañas publicitarias en Facebook e
                            Instagram y para mostrar anuncios relevantes a personas que ya visitaron nuestro sitio (remarketing/retargeting).
                            Cuando corresponde, esta herramienta también usa datos de contacto proporcionados en nuestros formularios (como el
                            correo electrónico), de forma cifrada (hash), para mejorar la precisión de esa medición.
                        </p>

                        <h3 className="text-xl font-semibold text-white mb-2">2.3. LinkedIn Insight Tag (LinkedIn)</h3>
                        <p className="mb-4">
                            Registra tu visita al sitio y, si completas nuestro formulario o nos escribes por WhatsApp, ese evento específico.
                            Lo usamos para medir el desempeño de campañas publicitarias en LinkedIn y para mostrar anuncios relevantes a
                            personas que ya visitaron nuestro sitio.
                        </p>

                        <p>
                            Ninguna de estas herramientas nos entrega tu identidad directamente (nombre, correo) a partir de la sola visita al
                            sitio — solo lo hacen cuando tú mismo nos la proporcionas, por ejemplo, al llenar un formulario.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">3. Categorías de cookies</h2>
                        <ul className="list-disc pl-5 space-y-2">
                            <li>
                                <strong className="text-white">Necesarias / técnicas:</strong> permiten el funcionamiento básico del sitio.
                                No requieren consentimiento porque no funcionan sin ellas.
                            </li>
                            <li>
                                <strong className="text-white">Analíticas:</strong> nos ayudan a entender el uso del sitio (Google Analytics 4).
                            </li>
                            <li>
                                <strong className="text-white">Publicitarias / de terceros:</strong> usadas para medir y optimizar campañas de
                                marketing y mostrar anuncios relevantes (Meta Pixel, LinkedIn Insight Tag).
                            </li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">4. ¿Cómo puedo administrar o desactivar estas cookies?</h2>
                        <p className="mb-4">
                            Puedes administrar o bloquear cookies directamente desde la configuración de tu navegador (Chrome, Firefox, Safari,
                            Edge, entre otros) — la mayoría permite bloquear cookies de terceros o borrarlas manualmente. Ten en cuenta que
                            bloquear todas las cookies puede afectar el funcionamiento de algunas partes del sitio.
                        </p>
                        <p className="mb-4">
                            También puedes optar por no participar directamente en cada plataforma:
                        </p>
                        <ul className="list-disc pl-5 space-y-1">
                            <li>
                                Google Analytics:{' '}
                                <a
                                    href="https://tools.google.com/dlpage/gaoptout"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-white underline hover:no-underline"
                                >
                                    complemento de inhabilitación de Google Analytics
                                </a>
                            </li>
                            <li>
                                Meta (Facebook/Instagram):{' '}
                                <a
                                    href="https://www.facebook.com/adpreferences/ad_settings"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-white underline hover:no-underline"
                                >
                                    configuración de anuncios de Meta
                                </a>
                            </li>
                            <li>
                                LinkedIn:{' '}
                                <a
                                    href="https://www.linkedin.com/psettings/advertising"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-white underline hover:no-underline"
                                >
                                    configuración de publicidad de LinkedIn
                                </a>
                            </li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">5. Cambios a esta Política</h2>
                        <p>
                            Podemos actualizar esta Política de Cookies cuando cambiemos las herramientas de medición o marketing que usamos.
                            Recomendamos revisarla periódicamente.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">6. Contacto</h2>
                        <p>
                            Si tienes preguntas sobre esta Política, escríbenos a{' '}
                            <a href="mailto:contacto@flumensolutions.com" className="text-white underline hover:no-underline">
                                contacto@flumensolutions.com
                            </a>.
                        </p>
                    </section>
                </div>
            </div>
        </main>
    )
}

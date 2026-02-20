import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Términos y Condiciones | Flumen Solutions',
    description: 'Lee los términos y condiciones de uso del sitio y los servicios de Flumen Solutions.',
}

export default function TermsPage() {
    return (
        <main className="pt-32 pb-24 bg-background min-h-screen">
            <div className="container max-w-4xl mx-auto px-6">
                <div className="mb-12">
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Términos y Condiciones</h1>
                    <p className="text-slate-400">Última actualización: Octubre 2025</p>
                </div>

                <div className="space-y-8 text-slate-300 leading-relaxed">
                    <section>
                        <p className="mb-4">
                            Al acceder y utilizar este sitio web, aceptas los presentes Términos y Condiciones. Si no estás de acuerdo con alguna parte, por favor no uses nuestros servicios.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">1. Uso del sitio</h2>
                        <p>
                            El contenido de este sitio tiene fines informativos y promocionales. No garantizamos la disponibilidad continua ni la ausencia de errores.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">2. Propiedad intelectual</h2>
                        <p>
                            Todo el contenido, logotipos, gráficos y material presente en este sitio es propiedad de Flumen Solutions o sus socios y no puede reproducirse sin autorización.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">3. Modificaciones</h2>
                        <p>
                            Podemos actualizar estos términos en cualquier momento. Las versiones vigentes se publicarán en esta página.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">4. Contacto</h2>
                        <p>
                            Para consultas sobre estos términos, escríbenos a <a href="mailto:contacto@flumensolutions.com" className="text-white hover:text-emerald-400 transition-colors underline decoration-slate-600 underline-offset-4">contacto@flumensolutions.com</a>.
                        </p>
                    </section>
                </div>
            </div>
        </main>
    )
}

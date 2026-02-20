import { Hero } from '@/components/sections/Hero'
import { ContactForm } from '@/components/forms/ContactForm'
import { FAQAccordion } from '@/components/sections/FAQAccordion'
import { ScrollReveal } from '@/components/sections/ScrollReveal'
import { getFAQsByCategory } from '@/data/faqs'
import { generateMetadata as genMeta } from '@/lib/seo'
import { Metadata } from 'next'
import { Mail, Phone, MapPin, MessageCircle } from 'lucide-react'

export const metadata: Metadata = genMeta({
    title: 'Contacto - Solicita tu Auditoría Gratuita',
    description:
        'Agenda una auditoría gratuita de automatización para tu negocio. Respuesta en menos de 24 horas. Bogotá, Colombia.',
    path: '/contacto',
})

export default function ContactoPage() {
    const faqs = getFAQsByCategory('general')
    const whatsappNumber = '+57 318 064 0132'
    const whatsappUrl = `https://wa.me/${whatsappNumber.replace(/[^0-9]/g, '')}`

    return (
        <>
            <Hero
                title="Solicita tu Auditoría Gratuita"
                subtitle="Descubre cuánto tiempo y dinero puedes ahorrar automatizando tu negocio"
                description="Te respondemos en menos de 24 horas. Sin compromiso."
            />

            <section className="section-padding bg-background">
                <div className="container">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        {/* Contact Form */}
                        <ScrollReveal>
                            <ContactForm
                                source="audit"
                                title="Agenda tu Auditoría de Automatización"
                                description="Cuéntanos lo esencial sobre tu negocio y evaluamos si la automatización puede ayudarte."
                            />
                        </ScrollReveal>

                        {/* Contact Info */}
                        <div>
                            <ScrollReveal delay={0.1}>
                                <h2 className="text-h2 mb-6">Otras formas de contacto</h2>
                            </ScrollReveal>

                            <div className="space-y-6">
                                <ScrollReveal delay={0.2}>
                                    <a
                                        href={whatsappUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-start gap-4 p-6 bg-[#25D366]/10 border border-[#25D366]/30 rounded-lg hover:bg-[#25D366]/20 hover:border-[#25D366]/50 transition-all duration-300 group"
                                    >
                                        <div className="w-12 h-12 rounded-lg bg-[#25D366] flex items-center justify-center flex-shrink-0 shadow-lg shadow-[#25D366]/20">
                                            <MessageCircle className="w-6 h-6 text-white" />
                                        </div>
                                        <div>
                                            <h3 className="font-semibold text-lg mb-1 group-hover:text-[#25D366] transition-colors">
                                                WhatsApp
                                            </h3>
                                            <p className="text-sm text-muted-foreground mb-2">
                                                Respuesta inmediata en horario laboral
                                            </p>
                                            <p className="text-sm font-medium text-foreground">{whatsappNumber}</p>
                                        </div>
                                    </a>
                                </ScrollReveal>

                                <ScrollReveal delay={0.3}>
                                    <a
                                        href="mailto:info@flumensolutions.com"
                                        className="flex items-start gap-4 p-6 bg-primary/10 border border-primary/30 rounded-lg hover:bg-primary/20 hover:border-primary/50 transition-all duration-300 group"
                                    >
                                        <div className="w-12 h-12 rounded-lg bg-primary flex items-center justify-center flex-shrink-0 shadow-lg shadow-primary/20">
                                            <Mail className="w-6 h-6 text-white" />
                                        </div>
                                        <div>
                                            <h3 className="font-semibold text-lg mb-1 group-hover:text-primary transition-colors">
                                                Email
                                            </h3>
                                            <p className="text-sm text-muted-foreground mb-2">
                                                Respuesta en menos de 24 horas
                                            </p>
                                            <p className="text-sm font-medium text-foreground">info@flumensolutions.com</p>
                                        </div>
                                    </a>
                                </ScrollReveal>
                            </div>

                            <ScrollReveal delay={0.4}>
                                <div className="mt-8 p-6 bg-accent/10 border border-accent/30 rounded-lg hover:bg-accent/15 transition-all duration-300">
                                    <h3 className="font-semibold text-lg mb-2 text-accent">Horario de Atención</h3>
                                    <p className="text-sm text-muted-foreground">
                                        Lunes a Viernes: 9:00 AM - 6:00 PM<br />
                                        Sábados: 9:00 AM - 1:00 PM<br />
                                        Domingos y festivos: Cerrado
                                    </p>
                                    <p className="text-sm text-muted-foreground mt-3">
                                        * Respuesta a emails y WhatsApp en menos de 24 horas
                                    </p>
                                </div>
                            </ScrollReveal>
                        </div>
                    </div>
                </div>
            </section>

            {/* Map Placeholder */}
            <section className="section-padding bg-card/50">
                <div className="container">
                    <ScrollReveal>
                        <div className="bg-card border border-border rounded-lg p-12 text-center hover:border-primary/50 transition-all duration-300">
                            <MapPin className="w-16 h-16 text-primary mx-auto mb-4" />
                            <h3 className="text-h3 mb-2">Bogotá, Colombia</h3>
                            <p className="text-muted-foreground">
                                Atendemos empresas en toda Colombia de forma remota y presencial en Bogotá
                            </p>
                        </div>
                    </ScrollReveal>
                </div>
            </section>

            {/* FAQ */}
            <section className="section-padding bg-background">
                <div className="container">
                    <FAQAccordion faqs={faqs} title="Preguntas Frecuentes" />
                </div>
            </section>
        </>
    )
}

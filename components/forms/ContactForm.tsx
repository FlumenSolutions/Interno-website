'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { PhoneInput } from '@/components/ui/phone-input'
import { contactFormSchema, auditFormSchema, type ContactFormData, type AuditFormData } from '@/lib/validations'
import { Loader2, CheckCircle, AlertCircle } from 'lucide-react'

interface ContactFormProps {
    source?: 'contact' | 'audit'
    title?: string
    description?: string
}

type FormData = ContactFormData & AuditFormData

export function ContactForm({ source = 'contact', title, description }: ContactFormProps) {
    const [formData, setFormData] = useState<FormData>({
        name: '',
        email: '',
        phone: '',
        company: '',
        automationArea: '',
        companySize: '',
        message: '',
    })
    const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({})
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
    const [errorMessage, setErrorMessage] = useState('')

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target
        setFormData((prev) => ({ ...prev, [name]: value }))
        // Clear error for this field
        if (errors[name as keyof FormData]) {
            setErrors((prev) => ({ ...prev, [name]: undefined }))
        }
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setErrors({})
        setStatus('loading')
        setErrorMessage('')

        // Validate
        const schema = source === 'audit' ? auditFormSchema : contactFormSchema
        const result = schema.safeParse(formData)
        if (!result.success) {
            const fieldErrors: Partial<Record<keyof FormData, string>> = {}
            result.error.errors.forEach((error) => {
                if (error.path[0]) {
                    fieldErrors[error.path[0] as keyof FormData] = error.message
                }
            })
            setErrors(fieldErrors)
            setStatus('idle')
            return
        }

        // Submit
        try {
            const response = await fetch(`/api/${source}`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            })

            if (!response.ok) {
                throw new Error('Error al enviar el formulario')
            }

            setStatus('success')
            setFormData({
                name: '',
                email: '',
                phone: '',
                company: '',
                automationArea: '',
                companySize: '',
                message: ''
            })
        } catch (error) {
            setStatus('error')
            setErrorMessage('Hubo un error al enviar el formulario. Por favor intenta de nuevo.')
        }
    }

    if (status === 'success') {
        return (
            <div className="bg-accent/10 border border-accent rounded-lg p-8 text-center">
                <CheckCircle className="w-12 h-12 text-accent mx-auto mb-4" />
                <h3 className="text-h3 mb-2">¡Mensaje enviado!</h3>
                <p className="text-muted-foreground mb-4">
                    Gracias por contactarnos. Te responderemos en menos de 24 horas.
                </p>
                <Button onClick={() => setStatus('idle')} variant="outline">
                    Enviar otro mensaje
                </Button>
            </div>
        )
    }

    const defaultTitle = source === 'audit'
        ? 'Agenda tu Auditoría de Automatización'
        : 'Contáctanos'

    const defaultDescription = source === 'audit'
        ? 'Cuéntanos lo esencial sobre tu negocio y evaluamos si la automatización puede ayudarte.'
        : 'Completa el formulario y nos pondremos en contacto contigo.'

    return (
        <div>
            {title && <h2 className="text-h2 mb-4">{title || defaultTitle}</h2>}
            {description && <p className="text-body text-muted-foreground mb-8">{description || defaultDescription}</p>}

            <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium mb-2">
                            Nombre completo *
                        </label>
                        <Input
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Juan Pérez"
                            className={errors.name ? 'border-destructive' : ''}
                        />
                        {errors.name && <p className="text-sm text-destructive mt-1">{errors.name}</p>}
                    </div>

                    <div>
                        <label htmlFor="email" className="block text-sm font-medium mb-2">
                            Email *
                        </label>
                        <Input
                            id="email"
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="juan@empresa.com"
                            className={errors.email ? 'border-destructive' : ''}
                        />
                        {errors.email && <p className="text-sm text-destructive mt-1">{errors.email}</p>}
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label htmlFor="phone" className="block text-sm font-medium mb-2">
                            Teléfono (WhatsApp) {source === 'audit' ? '*' : '(opcional)'}
                        </label>
                        <PhoneInput
                            value={formData.phone}
                            onChange={(value) => {
                                setFormData((prev) => ({ ...prev, phone: value || '' }))
                                if (errors.phone) {
                                    setErrors((prev) => ({ ...prev, phone: undefined }))
                                }
                            }}
                            placeholder="+57 300 123 4567"
                            error={!!errors.phone}
                        />
                        {errors.phone && <p className="text-sm text-destructive mt-1">{errors.phone}</p>}
                    </div>

                    <div>
                        <label htmlFor="company" className="block text-sm font-medium mb-2">
                            Empresa {source === 'audit' ? '*' : '(opcional)'}
                        </label>
                        <Input
                            id="company"
                            name="company"
                            value={formData.company}
                            onChange={handleChange}
                            placeholder="Mi Empresa S.A.S"
                            className={errors.company ? 'border-destructive' : ''}
                        />
                        {errors.company && <p className="text-sm text-destructive mt-1">{errors.company}</p>}
                    </div>
                </div>

                {source === 'audit' && (
                    <>
                        <div>
                            <label htmlFor="automationArea" className="block text-sm font-medium mb-2">
                                ¿Qué te gustaría automatizar? *
                            </label>
                            <select
                                id="automationArea"
                                name="automationArea"
                                value={formData.automationArea}
                                onChange={handleChange}
                                className={`w-full px-3 py-2 bg-input border rounded-md text-sm text-foreground transition-all focus:outline-none focus:ring-2 focus:ring-ring/20 focus:border-ring ${errors.automationArea ? 'border-destructive' : 'border-border'
                                    }`}
                            >
                                <option value="">Selecciona una opción</option>
                                <option value="ventas">Ventas y captación de leads</option>
                                <option value="atencion">Atención al cliente / WhatsApp</option>
                                <option value="operaciones">Operaciones internas</option>
                                <option value="facturacion">Facturación / Finanzas</option>
                                <option value="diagnostico">No estoy seguro (quiero diagnóstico)</option>
                            </select>
                            {errors.automationArea && <p className="text-sm text-destructive mt-1">{errors.automationArea}</p>}
                        </div>

                        <div>
                            <label htmlFor="companySize" className="block text-sm font-medium mb-2">
                                Tamaño aproximado de tu empresa (opcional)
                            </label>
                            <select
                                id="companySize"
                                name="companySize"
                                value={formData.companySize}
                                onChange={handleChange}
                                className="w-full px-3 py-2 bg-input border border-border rounded-md text-sm text-foreground transition-all focus:outline-none focus:ring-2 focus:ring-ring/20 focus:border-ring"
                            >
                                <option value="">Selecciona una opción</option>
                                <option value="solo">Trabajo solo / Emprendedor</option>
                                <option value="2-10">2–10 personas</option>
                                <option value="11-50">11–50 personas</option>
                                <option value="50+">+50 personas</option>
                            </select>
                        </div>
                    </>
                )}

                <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                        Mensaje *
                    </label>
                    <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder={
                            source === 'audit'
                                ? 'Cuéntanos brevemente qué hace tu negocio y qué proceso hoy te quita más tiempo o dinero.'
                                : 'Escribe tu mensaje aquí...'
                        }
                        rows={5}
                        className={errors.message ? 'border-destructive' : ''}
                    />
                    {errors.message && <p className="text-sm text-destructive mt-1">{errors.message}</p>}
                </div>

                {status === 'error' && (
                    <div className="bg-destructive/10 border border-destructive rounded-lg p-4 flex items-start gap-3">
                        <AlertCircle className="w-5 h-5 text-destructive flex-shrink-0 mt-0.5" />
                        <p className="text-sm text-destructive">{errorMessage}</p>
                    </div>
                )}

                <Button type="submit" size="lg" className="w-full md:w-auto" disabled={status === 'loading'}>
                    {status === 'loading' && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                    {status === 'loading'
                        ? 'Enviando...'
                        : source === 'audit'
                            ? 'Solicitar diagnóstico gratuito'
                            : 'Enviar Mensaje'
                    }
                </Button>
            </form>
        </div>
    )
}

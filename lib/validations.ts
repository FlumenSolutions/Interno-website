import { z } from 'zod'

export const contactFormSchema = z.object({
    name: z.string().min(2, 'El nombre debe tener al menos 2 caracteres'),
    email: z.string().email('Email inválido'),
    phone: z.string().min(10, 'El teléfono debe tener al menos 10 dígitos').optional(),
    company: z.string().optional(),
    message: z.string().min(10, 'El mensaje debe tener al menos 10 caracteres'),
})

export type ContactFormData = z.infer<typeof contactFormSchema>

export const auditFormSchema = z.object({
    name: z.string().min(2, 'El nombre debe tener al menos 2 caracteres'),
    email: z.string().email('Email inválido'),
    phone: z.string().min(10, 'El teléfono debe tener al menos 10 dígitos'),
    company: z.string().min(2, 'El nombre de la empresa es requerido'),
    automationArea: z.string().min(1, 'Por favor selecciona un área'),
    companySize: z.string().optional(),
    message: z.string().min(10, 'Cuéntanos más sobre tu negocio'),
})

export type AuditFormData = z.infer<typeof auditFormSchema>

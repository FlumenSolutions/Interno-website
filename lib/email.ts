import { Resend } from 'resend'

const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null

const FROM = process.env.RESEND_FROM_EMAIL || 'Flumen <onboarding@resend.dev>'
const TO = process.env.RESEND_TO_EMAIL || 'info@flumensolutions.com'

export interface LeadEmailData {
    name: string
    email: string
    phone?: string | null
    company?: string | null
    message: string
    source: string // 'contact' | 'audit'
    automationArea?: string | null
    companySize?: string | null
}

function row(label: string, value?: string | null) {
    if (!value) return ''
    return `<p style="margin:4px 0"><strong>${label}:</strong> ${value}</p>`
}

export async function sendLeadEmail(data: LeadEmailData) {
    if (!resend) {
        console.warn('RESEND_API_KEY not configured, email not sent')
        return { success: false, error: 'Email service not configured' }
    }

    const isAudit = data.source === 'audit'
    const heading = isAudit ? 'Nueva solicitud de auditoría' : 'Nuevo mensaje de contacto'

    try {
        await resend.emails.send({
            from: FROM,
            to: TO,
            reply_to: data.email,
            subject: `${heading} — ${data.name}`,
            html: `
                <div style="font-family:Arial,sans-serif;max-width:560px;margin:0 auto">
                    <h2 style="color:#0F1524">${heading}</h2>
                    ${row('Nombre', data.name)}
                    ${row('Email', data.email)}
                    ${row('Teléfono', data.phone)}
                    ${row('Empresa', data.company)}
                    ${row('Área de automatización', data.automationArea)}
                    ${row('Tamaño de empresa', data.companySize)}
                    <p style="margin:12px 0 4px"><strong>Mensaje:</strong></p>
                    <p style="white-space:pre-wrap;color:#333">${data.message}</p>
                </div>
            `,
        })
        return { success: true }
    } catch (error) {
        console.error('Error sending email:', error)
        return { success: false, error: 'Failed to send email' }
    }
}

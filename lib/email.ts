import { Resend } from 'resend'

const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null

export async function sendContactEmail(data: {
    name: string
    email: string
    phone?: string
    company?: string
    message: string
    source: string
}) {
    if (!resend || !process.env.RESEND_API_KEY) {
        console.warn('RESEND_API_KEY not configured, email not sent')
        return { success: false, error: 'Email service not configured' }
    }

    try {
        await resend.emails.send({
            from: process.env.RESEND_FROM_EMAIL || 'contacto@flumensolutions.com',
            to: process.env.RESEND_TO_EMAIL || 'info@flumensolutions.com',
            subject: `Nuevo ${data.source === 'audit' ? 'Solicitud de Auditoría' : 'Contacto'} - ${data.name}`,
            html: `
        <h2>Nuevo ${data.source === 'audit' ? 'Solicitud de Auditoría' : 'Mensaje de Contacto'}</h2>
        <p><strong>Nombre:</strong> ${data.name}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        ${data.phone ? `<p><strong>Teléfono:</strong> ${data.phone}</p>` : ''}
        ${data.company ? `<p><strong>Empresa:</strong> ${data.company}</p>` : ''}
        <p><strong>Mensaje:</strong></p>
        <p>${data.message}</p>
      `,
        })

        return { success: true }
    } catch (error) {
        console.error('Error sending email:', error)
        return { success: false, error: 'Failed to send email' }
    }
}

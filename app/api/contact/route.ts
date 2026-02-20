import { NextRequest, NextResponse } from 'next/server'
import { contactFormSchema } from '@/lib/validations'

const WEBHOOK_URL = 'https://n8n.flumensolutions.com/webhook/form-pagina-web'

export async function POST(request: NextRequest) {
    try {
        const body = await request.json()

        // Validate
        const result = contactFormSchema.safeParse(body)
        if (!result.success) {
            return NextResponse.json(
                { error: 'Datos inválidos', details: result.error.errors },
                { status: 400 }
            )
        }

        const data = result.data

        // Prepare formatted data for webhook
        const webhookPayload = {
            formType: 'contact',
            timestamp: new Date().toISOString(),
            data: {
                nombre: data.name,
                email: data.email,
                telefono: data.phone || null,
                empresa: data.company || null,
                mensaje: data.message,
            },
            metadata: {
                source: 'Página Web - Formulario de Contacto',
                userAgent: request.headers.get('user-agent') || 'Unknown',
                ip: request.headers.get('x-forwarded-for') || request.headers.get('x-real-ip') || 'Unknown',
            },
        }

        // Send to n8n webhook
        const webhookResponse = await fetch(WEBHOOK_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(webhookPayload),
        })

        if (!webhookResponse.ok) {
            throw new Error(`Webhook responded with status: ${webhookResponse.status}`)
        }

        return NextResponse.json({ success: true }, { status: 200 })
    } catch (error) {
        console.error('Contact form error:', error)
        return NextResponse.json(
            { error: 'Error al procesar la solicitud' },
            { status: 500 }
        )
    }
}

import { NextRequest, NextResponse } from 'next/server'
import { contactFormSchema } from '@/lib/validations'
import { prisma } from '@/lib/prisma'
import { sendLeadEmail } from '@/lib/email'

export async function POST(request: NextRequest) {
    try {
        const body = await request.json()

        const result = contactFormSchema.safeParse(body)
        if (!result.success) {
            return NextResponse.json(
                { error: 'Datos inválidos', details: result.error.errors },
                { status: 400 }
            )
        }

        const data = result.data

        // 1) Guardar el lead en la BD (fuente de verdad — nunca se pierde).
        try {
            await prisma.lead.create({
                data: {
                    name: data.name,
                    email: data.email,
                    phone: data.phone || null,
                    company: data.company || null,
                    message: data.message,
                    source: 'contact',
                },
            })
        } catch (dbError) {
            console.error('Error guardando lead en BD:', dbError)
        }

        // 2) Enviar el correo de aviso (si Resend está configurado).
        await sendLeadEmail({
            name: data.name,
            email: data.email,
            phone: data.phone,
            company: data.company,
            message: data.message,
            source: 'contact',
        })

        return NextResponse.json({ success: true }, { status: 200 })
    } catch (error) {
        console.error('Contact form error:', error)
        return NextResponse.json(
            { error: 'Error al procesar la solicitud' },
            { status: 500 }
        )
    }
}

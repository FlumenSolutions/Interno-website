import { NextRequest, NextResponse } from 'next/server'
import { auditFormSchema } from '@/lib/validations'
import { prisma } from '@/lib/prisma'
import { sendLeadEmail } from '@/lib/email'

export async function POST(request: NextRequest) {
    try {
        const body = await request.json()

        const result = auditFormSchema.safeParse(body)
        if (!result.success) {
            return NextResponse.json(
                { error: 'Datos inválidos', details: result.error.errors },
                { status: 400 }
            )
        }

        const data = result.data

        // El área y tamaño se anexan al mensaje guardado (la tabla leads no tiene esas columnas).
        const fullMessage = [
            data.message,
            '',
            `Área de automatización: ${data.automationArea}`,
            `Tamaño de empresa: ${data.companySize || 'No especificado'}`,
        ].join('\n')

        // 1) Guardar el lead en la BD.
        try {
            await prisma.lead.create({
                data: {
                    name: data.name,
                    email: data.email,
                    phone: data.phone,
                    company: data.company,
                    message: fullMessage,
                    source: 'audit',
                },
            })
        } catch (dbError) {
            console.error('Error guardando lead en BD:', dbError)
        }

        // 2) Enviar el correo de aviso.
        await sendLeadEmail({
            name: data.name,
            email: data.email,
            phone: data.phone,
            company: data.company,
            message: data.message,
            source: 'audit',
            automationArea: data.automationArea,
            companySize: data.companySize,
        })

        return NextResponse.json({ success: true }, { status: 200 })
    } catch (error) {
        console.error('Audit form error:', error)
        return NextResponse.json(
            { error: 'Error al procesar la solicitud' },
            { status: 500 }
        )
    }
}

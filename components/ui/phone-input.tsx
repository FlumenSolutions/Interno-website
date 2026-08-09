'use client'

import React from 'react'
import PhoneInputWithCountry from 'react-phone-number-input'
import 'react-phone-number-input/style.css'
import { cn } from '@/lib/utils'

interface PhoneInputProps {
    value: string | undefined
    onChange: (value: string | undefined) => void
    placeholder?: string
    className?: string
    error?: boolean
    /**
     * Id del párrafo que contiene el mensaje de error. El componente no
     * propaga props sueltas al input interno, así que hay que pasarlo
     * explícitamente para poder anunciarlo con aria-describedby.
     */
    describedById?: string
}

export function PhoneInput({ value, onChange, placeholder, className, error, describedById }: PhoneInputProps) {
    return (
        <PhoneInputWithCountry
            international
            defaultCountry="CO"
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            numberInputProps={{
                id: 'phone',
                'aria-label': 'Teléfono (WhatsApp)',
                ...(error ? { 'aria-invalid': true } : {}),
                ...(describedById ? { 'aria-describedby': describedById } : {}),
            }}
            className={cn(
                'phone-input-container',
                error && 'phone-input-error',
                className
            )}
        />
    )
}


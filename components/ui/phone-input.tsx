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
}

export function PhoneInput({ value, onChange, placeholder, className, error }: PhoneInputProps) {
    return (
        <PhoneInputWithCountry
            international
            defaultCountry="CO"
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            className={cn(
                'phone-input-container',
                error && 'phone-input-error',
                className
            )}
        />
    )
}


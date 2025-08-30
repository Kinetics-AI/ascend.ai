'use client'

import { useState, useEffect } from 'react'

import { Input } from '@/components/ui/input'
import { CustomButtonV1 } from "@/components/ui/custom/button";

const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/



export function EmailSubscribe() {
    const [email, setEmail] = useState('')
    const [valid, setValid] = useState(false)
    const [loading, setLoading] = useState(false)
    const [placeholder, setPlaceholder] = useState('Email');
    useEffect(() => {
        const isValid = emailRegex.test(email.trim())
        setValid(isValid && email.trim() !== '')
    }, [email])

    const handleSubmit = async () => {
        if (!valid) return
        setLoading(true)

        const payload = new URLSearchParams();
        payload.append('EMAIL', email);

        try {
            const res = await fetch('https://2cd7a836.sibforms.com/serve/MUIFACBQktRcIIsh1i0dh_98dd7nkVCYuwqU3rJd4OAmPmjQ-9n0v5B4K9LCGVI36zerYTCXiREy9OegmtHRIhqjqVJKUTIGIVj_YJp1YL7zSh8hcaYnYHZCEOydLoBOLI2Rj3Qpao_MZ93lFas_RCrXKtRkFeEf88iYzNUM5MFOV0uQgiAeH3iJ8m72pNK9bPS-sKRDInMUvJ9p', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: payload.toString(),
            })
        } catch (err) {
        } finally {
            setEmail('')
            setPlaceholder('Subscribed');
            setLoading(false)
        }
    }

    const handleFocus = () => {
        if (placeholder === 'Subscribed') {
            setPlaceholder('Email');
        }
    };

    return (
        <div className="w-full flex flex-row gap-3 items-center">
            <Input
                type="email"
                placeholder={placeholder}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onFocus={handleFocus}
                className='rounded-full text-xs md:text-xs h-5 max-w-xs focus-visible:ring-0'
            />
            <CustomButtonV1 onClick={handleSubmit} disabled={!valid || loading} className='text-xs h-5 p-2 font-light bg-foreground'>
                {loading ? '...' : 'Subscribe'}
            </CustomButtonV1>
        </div>
    )
}

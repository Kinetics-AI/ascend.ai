'use client'

import { useState, useEffect } from 'react'
import {useTranslations} from "next-intl";

import { Input } from '@/components/ui/input'
import { CustomButtonV1 } from "@/components/ui/custom/button";


const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/



export function EmailSubscribe() {

    const t = useTranslations("Layout");

    const [email, setEmail] = useState('')
    const [valid, setValid] = useState(false)
    const [loading, setLoading] = useState(false)
    const [placeholder, setPlaceholder] = useState(t("email"));
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
            const res = await fetch('https://45ebcc24.sibforms.com/serve/MUIFAB69B0Bz3Ovq4GWdW_3DmgIUf2a8InjZB2D3gVyCVWK1J9f_z8XrobhgVhD7PLmh3CZ05WRGzUBUPZHmrzB9CVj7ENz1axKBuRTRJ4WKKvEJynaKePbv_pEbAK5xfyAiq3LBrquYm5cGluS1QaYYqwTPKwPyqkcTxGTYxr9yM52rNh-rdx9O8_yWF-gidk2lPi7WEVUmIdCj', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: payload.toString(),
            })
        } catch (err) {
        } finally {
            setEmail('')
            setPlaceholder(t("subscribed"));
            setLoading(false)
        }
    }

    const handleFocus = () => {
        if (placeholder === t("subscribed")) {
            setPlaceholder(t("email"));
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
                {loading ? '...' : t("subscribe")}
            </CustomButtonV1>
        </div>
    )
}

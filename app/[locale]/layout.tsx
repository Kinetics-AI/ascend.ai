import * as React from "react"
import type { Metadata } from "next";
import {notFound} from 'next/navigation';

import {hasLocale, NextIntlClientProvider} from 'next-intl';
import {setRequestLocale} from 'next-intl/server';
import {routing} from '@/i18n/routing';

import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
export function generateStaticParams() {
    return routing.locales.map((locale) => ({locale}));
}

import "../globals.css";
// font
import { Inter } from "next/font/google";
const inter = Inter({
    subsets: ["latin"],
    display: "swap",
});

// Google Analystics
import { GoogleAnalytics } from '@next/third-parties/google'



export const metadata: Metadata = {
    title: {
        default: "Ascend AI",
        template: "%s | Ascend AI"
    },
    // description: "xxx",
    keywords: ["Ascend AI", "Robotics", "Embodied AI"],
    icons: {
        icon: [
            {
                url: "/favicon.png",
                href: "/favicon.png",
            },
        ],
    },
};



export default async function RootLayout({
    children,
    params,
}: Readonly<{
    children: React.ReactNode
    params: Promise<{ locale: 'en' | 'zh' }>
}>) {

    const {locale} = await params;
    if (!hasLocale(routing.locales, locale)) {
        notFound();
    }
    // Enable static rendering
    setRequestLocale(locale);

    return (
        <html lang={locale} className={inter.className}>

            <body>       
                <NextIntlClientProvider>

                    <Header/>

                    <main className='w-full overflow-hidden'>

                        {children}

                    </main>

                    <Footer/>
                    
                </NextIntlClientProvider>
            </body>

            <GoogleAnalytics gaId="G-PEGEFQHXRE" />

        </html>
    );
}

import {use} from 'react';
import {setRequestLocale} from 'next-intl/server';
import {useTranslations} from 'next-intl';

import Image from 'next/image'

import { FadeIn } from "@/components/animation/fade-in"



export default function Page({
    params,
}: {
    params: Promise<{ locale: string }>
}) {

    const {locale} = use(params);
    // Enable static rendering
    setRequestLocale(locale);
    // Once the request locale is set, you
    // can call hooks from `next-intl`
    const t = useTranslations('Home');


    return (
        <>



            {/* Landing */}
            <div className="w-full h-svh flex flex-row justify-center relative items-center bg-gradient-to-br from-mblue via-morange to-mred bg-fixed">
                <div>
                    <Image
                        src="https://assets.ascendai.com/rMmibFe4czY.jpg"
                        alt="landing"
                        fill
                        className="object-cover object-center bg-gradient-loading select-none group-hover:scale-105 transition delay-100 duration-200"
                    />
                </div>
                <div className="w-full px-6 xl:px-0 max-w-7xl flex absolute flex-col gap-6 items-start">
                    <FadeIn>
                        <h1 className="font-bold text-t0 text-white">
                            {t('title')}
                        </h1>
                    </FadeIn>
                </div>
            </div>



        </>
    )
}

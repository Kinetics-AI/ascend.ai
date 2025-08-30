"use client"

import Link from "next/link"
import Image from 'next/image'

import { CustomButtonV1 } from "@/components/ui/custom/button";
import {
    Drawer,
    DrawerTrigger,
} from "@/components/ui/drawer"
import { MenuDrawer } from "./menu";
import { LanguageDrawer } from "./international"

import { Languages, Menu, ChevronUp } from "lucide-react"

import { FadeIn } from "@/components/animation/fade-in"



export function Header() {



    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" })
    }



    return (
        <header className="fixed mt-3 flex justify-between w-svw md:pr-2 z-10 select-none">



            {/* LOGO */}
            <FadeIn>
                <CustomButtonV1 className="ml-3">
                    <Link href="/" className="select-none">
                        <Image
                            src="/favicon.ico"
                            alt="Ascend AI"
                            width={6}
                            height={6}
                        />
                    </Link>
                </CustomButtonV1>
            </FadeIn>



            <div className="flex mr-3 md:gap-3">



                {/* Top */}
                <FadeIn>
                    <CustomButtonV1 onClick={scrollToTop}>
                        <ChevronUp/>
                    </CustomButtonV1>
                </FadeIn>



                {/* Language */}
                <Drawer direction="right">

                    <DrawerTrigger asChild>
                        <FadeIn>
                            <CustomButtonV1>
                                <Languages/>
                            </CustomButtonV1>
                        </FadeIn>
                    </DrawerTrigger>

                    <LanguageDrawer/>
                
                </Drawer>



                {/* Menu */}
                <Drawer direction="right">

                    <DrawerTrigger asChild>
                        <FadeIn>
                            <CustomButtonV1>
                                <Menu/>
                            </CustomButtonV1>
                        </FadeIn>
                    </DrawerTrigger>

                    <MenuDrawer/>
                
                </Drawer>



            </div>



        </header>
    )
}

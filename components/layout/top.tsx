"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ChevronUp } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"



export function BackToTop() {
    const [show, setShow] = useState(true)
    const [lastScrollY, setLastScrollY] = useState(0)

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY
            setShow(currentScrollY < lastScrollY || currentScrollY === 0)
            setLastScrollY(currentScrollY)
        }

        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [lastScrollY])

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" })
    }

    return (
        <div className="fixed bottom-0 flex justify-end w-svw md:pr-2 z-10 select-none">
            <AnimatePresence>
                {show && (
                    <motion.div
                        initial={{ y: 100, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: 100, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="fixed bottom-3 mr-3 z-10"
                    >
                        <Button className="bg-transparent hover:bg-background hover:text-foreground" onClick={scrollToTop}>
                            <ChevronUp/>
                        </Button>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}

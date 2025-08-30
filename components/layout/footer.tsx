import {useTranslations} from "next-intl";

import Link from "next/link"

import { Github, Mail, Twitter, Linkedin, Youtube, DiscIcon } from "lucide-react"; 
const media: {
    icon: React.ElementType;
    url: string;
}[] = [
    { icon: Mail, url: "mailto:contact@opendrivelab.com" },
    { icon: Github, url: "https://github.com/OpenDriveLab" },
    { icon: Twitter, url: "https://twitter.com/OpenDriveLab" },
    { icon: Linkedin, url: "https://www.linkedin.com/company/opendrivelab/" },
    { icon: Youtube, url: "https://www.youtube.com/@OpenDriveLab" },
    { icon: DiscIcon, url: "https://discord.gg/vCw2PjR2B8" },
];

import { Separator } from "@/components/ui/separator"
import { EmailSubscribe } from "@/components/layout/mailing"



export function Footer() {



    const t = useTranslations("Layout");



    const links: {
        link: string;
        url: string;
    }[] = [
        { link: t("about"), url: "/about" },
        { link: t("contact"), url: "/contact" },
        { link: t("careers"), url: "/careers" },
    ];



    return (
        <footer className="w-full px-6 my-6 md:my-12 gap-6 flex flex-col items-center select-none">


            <div className="w-full max-w-7xl flex gap-6 flex-wrap">
                {links.map(({link, url}, idx) => (
                    <Link href={url} key={idx} className="link link-animated">
                        {link}
                    </Link>
                ))}
            </div>


            <div className="w-full max-w-7xl">
                <Separator />
            </div>



            <div className="w-full max-w-7xl gap-6 flex flex-row justify-between items-center">
                <div className=" flex gap-6 flex-wrap">
                    {media.map(({icon: Icon, url}, idx) => (
                        <Link href={url} target="_blank" key={idx} className="group">
                            <Icon className="size-4 text-foreground group-hover:text-foreground/60 duration-300"/>
                        </Link>
                    ))}
                </div>
                <div>
                    <EmailSubscribe/>
                </div>
            </div>


            <div className="w-full max-w-7xl text-xs">
                Ascend AI 超维动力 © 2021 - 2025
            </div>

        </footer>
    )
}

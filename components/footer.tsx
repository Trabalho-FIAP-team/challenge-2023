'use client'

import Link from "next/link"
import {FooterMenu, FooterMenuItem, FooterMenuLink, FooterMenuList, FooterMenuTitle} from "@/components/ui/footer-menu";
import {cn} from "@/lib/utils";
import * as React from "react";
import {Facebook, Linkedin} from "lucide-react";
import {Logo} from "@/components/logo";

const links: { [key: string]: { title: string; href: string; }[] } = {
    conhecaMais: [
        {
            title: "Sobre nós",
            href: "about",
        },
        {
            title: "Blog",
            href: "blog",
        },
        {
            title: "Contato",
            href: "contact",
        },
        {
            title: "FAQ",
            href: "faq",
        },
    ],
    informacoesLegais: [
        {
            title: "Aviso Legal",
            href: "aviso-legal",
        },
        {
            title: "Política de Privacidade",
            href: "privacy-policy",
        },
        {
            title: "Termos de Serviço",
            href: "terms-of-service",
        },
    ]
}

const Footer = React.forwardRef<
    HTMLDivElement,
    React.HTMLAttributes<HTMLDivElement>
>(({ className }, ref) => (
    <footer className={cn(className, "space-y-8 py-16 lg:space-y-16")} ref={ref}>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            <div>
                <Logo />

                <p className="mt-4 max-w-xs text-gray-500">
                    Buscamos criar um ambiente colaborativo e
                    inspirador, onde as relações interpessoais se
                    fortalecem e a consciência ambiental cresce
                </p>

                <ul className="mt-8 flex gap-4">
                    <Link href="">
                        <Linkedin className="text-gray-700 transition hover:opacity-75"  />
                    </Link>
                    <Link href="">
                        <Facebook className="text-gray-700 transition hover:opacity-75"  />
                    </Link>
                </ul>
            </div>

            <FooterMenu>
                <FooterMenuList>
                    <FooterMenuTitle>Conheça Mais</FooterMenuTitle>
                    {links['conhecaMais'].map((item, index) => (
                        <FooterMenuItem key={item.href}>
                            <Link href={'/' + item.href} legacyBehavior passHref>
                                <FooterMenuLink>
                                    {item.title}
                                </FooterMenuLink>
                            </Link>
                        </FooterMenuItem>
                    ))}
                </FooterMenuList>

                <FooterMenuList>
                    <FooterMenuTitle>Informações Legais</FooterMenuTitle>
                    {links['informacoesLegais'].map((item, index) => (
                        <FooterMenuItem key={item.href}>
                            <Link href={'/' + item.href} legacyBehavior passHref>
                                <FooterMenuLink>
                                    {item.title}
                                </FooterMenuLink>
                            </Link>
                        </FooterMenuItem>
                    ))}
                </FooterMenuList>
            </FooterMenu>

        </div>

        <p className="text-xs text-gray-500">
            Design by <span>@Grupo-27</span>
        </p>

    </footer>
));

Footer.displayName = "Footer"

export default Footer;

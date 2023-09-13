import Link from "next/link";
import * as React from "react";
import {FooterMenu, FooterMenuItem, FooterMenuLink, FooterMenuList, FooterMenuTitle} from "@/components/ui/footer-menu";

const links: { [key: string]: { title: string; href: string; }[] } = {
    conhecaMais: [
        {
            title: "Sobre nós",
            href: "/about",
        },
        {
            title: "Blog",
            href: "/blog",
        },
        {
            title: "Contato",
            href: "/contact",
        },
        {
            title: "FAQ",
            href: "/faq",
        },
    ],
    informacoesLegais: [
        {
            title: "Aviso Legal",
            href: "/aviso-legal",
        },
        {
            title: "Política de Privacidade",
            href: "/privacy-policy",
        },
        {
            title: "Termos de Serviço",
            href: "/terms-of-service",
        },
    ]
}

export function FooterNav() {
    return (
        <FooterMenu>
            <FooterMenuList>
                <FooterMenuTitle>Conheça Mais</FooterMenuTitle>
                {links['conhecaMais'].map((item, index) => (
                    <FooterMenuItem>
                        <Link href={item.href} legacyBehavior passHref>
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
                    <FooterMenuItem>
                        <Link href={item.href} legacyBehavior passHref>
                            <FooterMenuLink>
                                {item.title}
                            </FooterMenuLink>
                        </Link>
                    </FooterMenuItem>
                ))}
            </FooterMenuList>
        </FooterMenu>
    )
}
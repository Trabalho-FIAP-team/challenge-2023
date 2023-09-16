'use client'

import Link from "next/link"
import { UserButton } from "@clerk/nextjs"
import { ThemeToggle } from "@/components/theme-toggle"
import { MainNav } from "./main-nav"
import { FooterNav } from "@/components/footer-nav";
import {cn} from "@/lib/utils";
import * as React from "react";
import {Facebook, Linkedin} from "lucide-react";
import {Logo} from "@/components/logo";

export const Footer = React.forwardRef<
    HTMLDivElement,
    React.HTMLAttributes<HTMLDivElement>
>(({ className }) => (
    <footer className={cn(className, "space-y-8 py-16 lg:space-y-16")}>

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

            <FooterNav />

        </div>

        <p className="text-xs text-gray-500">
            Design by <span>@Grupo-27</span>
        </p>

    </footer>
));

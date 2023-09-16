'use client'

import Link from "next/link"
import { UserButton } from "@clerk/nextjs"
import { ThemeToggle } from "@/components/theme-toggle"
import { MainNav } from "./main-nav"
import {cn} from "@/lib/utils";
import * as React from "react";

export const Navbar = React.forwardRef<
    HTMLDivElement,
    React.HTMLAttributes<HTMLDivElement>
>(({ className }) => (
    <div className={cn(className, "flex justify-between items-center py-2 h-16")}>
      <div className="flex items-center">
        <Link href={'/'}>
          <div className={"md:block text-xl md:text-3xl font-bold text-primary"}>
            <img src="./images/logo.png" className="w-24 h-8"/>
          </div>
        </Link>
      </div>
      <div className="flex items-center gap-x-4">
          <MainNav />
          <ThemeToggle />
          <UserButton afterSignOutUrl="/" />
      </div>
    </div>
));

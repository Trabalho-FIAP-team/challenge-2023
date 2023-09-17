'use client'

import Link from "next/link"
import { UserButton } from "@clerk/nextjs"
import { ThemeToggle } from "@/components/theme-toggle"
import { MainNav } from "./main-nav"
import {cn} from "@/lib/utils";
import * as React from "react";
import {Logo} from "@/components/logo";
import { Separator } from "./ui/separator"

export const Navbar = React.forwardRef<
    HTMLDivElement,
    React.HTMLAttributes<HTMLDivElement>
>(({ className }) => (
    <nav className={cn(className, "flex justify-between items-center py-2 h-16")}>
      <div className="flex items-center justify-center gap-x-2">
        <Link href={'/'}>
            <Logo />
        </Link>
      </div>
      <div className="flex items-center gap-x-4 ">
          <MainNav />
          <ThemeToggle />
          <UserButton afterSignOutUrl="/" />
      </div>
    </nav>
));

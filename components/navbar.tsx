'use client'

import Link from "next/link"
import { UserButton } from "@clerk/nextjs"
import { ThemeToggle } from "@/components/theme-toggle"
import { MainNav } from "./main-nav"
import {cn} from "@/lib/utils";
import * as React from "react";
import {Logo} from "@/components/logo";
import { Menu } from "lucide-react"
import {Notifications} from "@/components/notifications";

const Navbar = React.forwardRef<
    HTMLDivElement,
    React.HTMLAttributes<HTMLDivElement>
>(({ className }, ref) => (
    <nav className={cn(className, "flex justify-between items-center py-2 h-16")} ref={ref}>
      <div className="flex items-center justify-center gap-x-2">
        <Link href={'/'}>
            <Logo />
        </Link>
      </div>
      <div className="flex items-center gap-x-4 ">
          <Menu className="block md:hidden"/>
          <MainNav />
          <ThemeToggle />
          <Notifications />
          <UserButton afterSignOutUrl="/" />
      </div>
    </nav>
));

Navbar.displayName="Navbar"

export default Navbar;

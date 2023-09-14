'use client'

import Link from "next/link"
import { UserButton } from "@clerk/nextjs"
import { ThemeToggle } from "@/components/theme-toggle"
import { MainNav } from "./main-nav"

export const Navbar = () => {

  return (
    <div className="w-11/12 flex justify-between items-center py-2 px-4 h-16">
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
  )
}

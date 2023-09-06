'use client'

import Link from "next/link"
import { Poppins } from "next/font/google"
import { cn } from "@/lib/utils"
import { UserButton } from "@clerk/nextjs"
import { ThemeToggle } from "@/components/theme-toggle"
import { usePathname, useRouter } from "next/navigation"
import MainNav from "./main-nav"

const font = Poppins({
  weight: "600",
  subsets: ["latin"]
})

export const Navbar = () => {

  return (
    <div className="fixed w-7/12 z-50 flex justify-between items-center py-2 px-4 h-16">
      <div className="flex items-center">
        <Link href={'/'}>
          <div className={"md:block text-xl md:text-3xl font-bold text-primary"}>
            <img src="./images/logo.png"/>
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
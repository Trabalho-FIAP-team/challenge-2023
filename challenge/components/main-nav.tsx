'use client'

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation"

const MainNav = () => {

  const pathname = usePathname();
  const router = useRouter();

  const routes = [
    {
      href:"/",
      label:"Home",
    },
    {
      href:"/eventos",
      label:"Eventos",
    },
    {
      href:"/games",
      label:"Games",
    },
    {
      href:"/video",
      label:"Video Pitch",
    },
    {
      href:"/about",
      label:"Sobre o Projeto",
    }
  ]

  const onNavigate = (url: string) => {
    return router.push(url)
  }

  return (
    <nav
    className={"flex items-center space-x-2 lg:space-x-2"}>
    {routes.map((route) => (
      <div
        onClick={() => onNavigate(route.href)}
        key={route.href}
        className={cn(
          'text-sm font-medium cursor-pointer p-2 rounded-lg hover:text-primary hover:bg-primary/5 transition',
            pathname === route.href && 'text-primary font-bold'
        )}
      >
        {route.label}
    </div>
    ))}
  </nav>
  );
}
 
export default MainNav;
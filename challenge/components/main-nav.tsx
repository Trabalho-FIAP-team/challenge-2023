"use client"

import * as React from "react"
import Link from "next/link"

import { cn } from "@/lib/utils"

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { Unplug } from "lucide-react"

const games: { title: string; href: string; description: string }[] = [
  {
    title: "Topeira não sei o que lá",
    href: "/docs/primitives/alert-dialog",
    description:
      "fodase fodase fodase fodase fodase fodase fodase fodase",
  },
  {
    title: "fodase",
    href: "/docs/primitives/hover-card",
    description:
      "fodase fodase fodase fodase fodase fodase fodase fodase fodase fodase",
  },
  {
    title: "fodase",
    href: "/docs/primitives/progress",
    description:
      "fodase fodase fodase fodase fodase",
  },
  {
    title: "fodse",
    href: "/docs/primitives/scroll-area",
    description: "fodase fodase fodase fodase fodase",
  },
  {
    title: "fodase",
    href: "/docs/primitives/tabs",
    description:
      "asndpijapidjapijdipasjdpiajpdiojaopidjapisjdpiasjdpiasj",
  },
  {
    title: "aisjdi-pjkasd9p",
    href: "/docs/primitives/tooltip",
    description:
      "aouihdouijasdipjasipdjasipdjpasij",
  },
]

export function MainNav() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
      <NavigationMenuItem>
          <Link href="/docs" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Home
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Eventos</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <a
                    className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                    href="/"
                  >
                    <Unplug className="h-6 w-6" />
                    <div className="mb-2 mt-4 text-lg font-medium">
                      Eventos fodase 
                    </div>
                    <p className="text-sm leading-tight text-muted-foreground">
                      Eventos fodase ajskpajsipjapçjsahsoahs
                    </p>
                  </a>
                </NavigationMenuLink>
              </li>
              <ListItem href="/docs" title="sei la">
                fodasepiajipsjaijsioçajk
              </ListItem>
              <ListItem href="/docs/installation" title="sei la">
                aipsnipamsiçmaiçsmjaipiçamsçm
              </ListItem>
              <ListItem href="/docs/primitives/typography" title="sei la">
                a-s9djka9-jkd9-ajd9pjas
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Jogos</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
              {games.map((game) => (
                <ListItem
                  key={game.title}
                  title={game.title}
                  href={game.href}
                >
                  {game.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/docs" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Sobre o Projeto
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/docs" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Video Pitch
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"

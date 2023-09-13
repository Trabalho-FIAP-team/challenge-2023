"use client"

import * as React from "react"
import Link from "next/link"

import { cn } from "@/lib/utils"

import {
  NavigationMenu,
  NavigationMenuContent, NavigationMenuContentItem,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { Unplug } from "lucide-react"

const games: { title: string; href: string; description: string }[] = [
  {
    title: "Topeira Sustentável",
    href: "/games/topeira-sustentavel",
    description:
      "Acerte as topeiras que contém alimentos saudáveis",
  },
  {
    title: "Pacman Sustentável",
    href: "/games/pacman-sustentável",
    description:
      "Dê a fuga nos fantasmas enquanto aprende a ser sustentável!",
  },
  {
    title: "Quiz dos 5R's",
    href: "/docs/primitives/progress",
    description:
      "Teste seus conhecimentos de sustentabilidade",
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
              <NavigationMenuContentItem href="/docs" title="sei la">
                fodasepiajipsjaijsioçajk
              </NavigationMenuContentItem>
              <NavigationMenuContentItem href="/docs/installation" title="sei la">
                aipsnipamsiçmaiçsmjaipiçamsçm
              </NavigationMenuContentItem>
              <NavigationMenuContentItem href="/docs/primitives/typography" title="sei la">
                a-s9djka9-jkd9-ajd9pjas
              </NavigationMenuContentItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Jogos</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
              {games.map((game) => (
                <NavigationMenuContentItem
                  key={game.title}
                  title={game.title}
                  href={game.href}
                >
                  {game.description}
                </NavigationMenuContentItem>
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


"use client"

import * as React from "react"
import Link from "next/link"
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
import { Game } from "@/types"

const games:Game[] = [
  {
    gameTitle: "Topeira Sustentável",
    description: "Acerte as topeiras que contém alimentos saudáveis",
    gameId: "bb660205fb904ff0b6c6bddd924d986c?themeId=22&templateId=45&fontStackId=0"
  },
  {
    gameTitle: "Jogo da Memória",
    description: "sei la sei la sei la sei la sei la sei la sei la sei la sei la sei la!",
    gameId: "96f8ff22a88d415a9ecf2796bd0212a2?themeId=49&templateId=3&fontStackId=0"
  },
  {
    gameTitle: "PacMan",
    description: "Teste seus conhecimentos de sustentabilidade",
    gameId: "3cf4624e7efc477db2b209377e35c181?themeId=23&templateId=49&fontStackId=0"
  },
  {
    gameTitle: "Quiz dos 5R's",
    description: "Teste seus conhecimentos de sustentabilidade",
    gameId: "96f8ff22a88d415a9ecf2796bd0212a2?themeId=49&templateId=3&fontStackId=0"
  },
  {
    gameTitle: "PacMan",
    description: "Teste seus conhecimentos de sustentabilidade",
    gameId: "3cf4624e7efc477db2b209377e35c181?themeId=23&templateId=49&fontStackId=0"
  },
  {
    gameTitle: "Quiz dos 5R's",
    description: "Teste seus conhecimentos de sustentabilidade",
    gameId: "96f8ff22a88d415a9ecf2796bd0212a2?themeId=49&templateId=3&fontStackId=0"
  },
]

export function MainNav() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <Link href="/" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Home
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href='/events'>
            <NavigationMenuTrigger>Eventos</NavigationMenuTrigger>
          </Link>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <a
                    className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                    href="/"
                  >
                    <Unplug className="h-6 w-6"/>
                    <div className="mb-2 mt-4 text-lg font-medium">
                      Eventos fodase
                    </div>
                    <p className="text-sm leading-tight text-muted-foreground">
                      Eventos fodase ajskpajsipjapçjsahsoahs
                    </p>
                  </a>
                </NavigationMenuLink>
              </li>
              <NavigationMenuContentItem href="/" title="sei la">
                fodasepiajipsjaijsioçajk
              </NavigationMenuContentItem>
              <NavigationMenuContentItem href="/" title="sei la">
                aipsnipamsiçmaiçsmjaipiçamsçm
              </NavigationMenuContentItem>
              <NavigationMenuContentItem href="/" title="sei la">
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
                  key={game.gameTitle}
                  title={game.gameTitle}
                  href={`/games/${game.gameTitle}/${game.gameId}`}
                >
                  {game.description}
                </NavigationMenuContentItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/about" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Sobre o Projeto
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/video" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Video Pitch
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}


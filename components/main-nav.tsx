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
import { Flame } from "lucide-react"
import { events, games } from "@/data"

export function MainNav() {
  return (
    <NavigationMenu className="hidden lg:flex">
      <NavigationMenuList>
        <NavigationMenuItem>
          <Link href="/" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Home
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href='/events' legacyBehavior passHref>
            <NavigationMenuTrigger>Eventos</NavigationMenuTrigger>
          </Link>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <a
                    className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-r to-lime-700 from-lime-500 p-6 no-underline outline-none focus:shadow-md"
                    href="/events"
                  >
                    <Flame className="h-6 w-6 text-white"/>
                    <div className="mb-2 mt-4 text-lg text-white font-medium">
                      Eventos em Alta!
                    </div>
                    <p className="text-sm leading-tight text-white">
                      Eventos mais esperados pela galera!
                    </p>
                  </a>
                </NavigationMenuLink>
              </li>
              {events.slice(0, 3).map((event) => (
                <NavigationMenuContentItem
                  key={event.eventTitle}
                  title={event.eventTitle}
                  href={`/events/${event.eventTitle}/${event.eventId}`}
                >
                  teste teste teste
                </NavigationMenuContentItem>
              ))}
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

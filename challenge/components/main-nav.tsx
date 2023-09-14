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
import { Flame, Unplug } from "lucide-react"
import { Game, Event } from "@/types"

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

const events:Event[] =[
  {
    imagem: "https://picsum.photos/id/200/348/185",
    imagem_post: "https://picsum.photos/id/200/800/400",
    eventTitle: "Workshop de Eficiência Elétrica",
    eventAuthor: "Schneider Electric",
    eventData: "2023-09-15",
    eventText: "Junte-se a nós no Workshop de Eficiência Energética da Schneider Electric, onde exploraremos as melhores práticas e soluções para otimizar o consumo de energia em diversos setores. Especialistas da empresa irão compartilhar suas visões e experiências, e você terá a oportunidade de interagir e aprender com colegas de diversas áreas.",
    eventId: '1'
  },
  {
    imagem: "https://picsum.photos/id/201/348/185",
    imagem_post: "https://picsum.photos/id/201/800/400",
    eventTitle: "Seminário de Inovação Tecnológica",
    eventAuthor: "Tech Innovation Institute",
    eventData: "2023-10-20",
    eventText: "Participe do nosso Seminário de Inovação Tecnológica e descubra as últimas tendências e avanços em tecnologia. Este evento é uma oportunidade única para aprender com os líderes da indústria e explorar as inovações que estão moldando o futuro.",
    eventId: '2'
  },
  {
    imagem: "https://picsum.photos/id/202/348/185",
    imagem_post: "https://picsum.photos/id/202/800/400",
    eventTitle: "Conferência de Sustentabilidade",
    eventAuthor: "Green Earth Foundation",
    eventData: "2023-11-15",
    eventText: "Junte-se a nós na Conferência de Sustentabilidade Ambiental, onde discutiremos as questões ambientais mais urgentes e as soluções para um futuro sustentável. Especialistas em meio ambiente e sustentabilidade compartilharão suas ideias e insights valiosos.",
    eventId: '3'
  },
  {
    imagem: "https://picsum.photos/id/203/348/185",
    imagem_post: "https://picsum.photos/id/203/800/400",
    eventTitle: "Workshop de Desenvolvimento de Aplicativos",
    eventAuthor: "Code Masters",
    eventData: "2023-12-10",
    eventText: "Participe do nosso Workshop de Desenvolvimento de Aplicativos e aprimore suas habilidades em programação e desenvolvimento de software. Nossos instrutores experientes o guiarão através de projetos práticos e desafios emocionantes.",
    eventId: '4'
  },
  {
    imagem: "https://picsum.photos/id/204/348/185",
    imagem_post: "https://picsum.photos/id/204/800/400",
    eventTitle: "Conferência de Marketing Digital",
    eventAuthor: "Digital Marketing Institute",
    eventData: "2024-01-20",
    eventText: "Não perca a Conferência de Marketing Digital, onde os especialistas em marketing digital compartilharão estratégias avançadas para o sucesso online. Descubra as táticas mais recentes e eficazes para promover sua marca na era digital.",
    eventId: '5'
  },
  {
    imagem: "https://picsum.photos/id/205/348/185",
    imagem_post: "https://picsum.photos/id/205/800/400",
    eventTitle: "Simpósio de Inteligência Artificial",
    eventAuthor: "AI Innovations",
    eventData: "2024-02-15",
    eventText: "Participe do Simpósio de Inteligência Artificial e mergulhe no mundo da IA. Palestrantes renomados compartilharão os desenvolvimentos mais recentes em aprendizado de máquina, visão computacional e muito mais.",
    eventId: '6'
  }
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
                    className="flex h-full w-full select-none flex-col justify-end rounded-md  bg-gradient-to-t from-green-500 to-green-700 p-6 no-underline outline-none focus:shadow-md"
                    href="/"
                  >
                    <Flame className="h-6 w-6"/>
                    <div className="mb-2 mt-4 text-lg font-medium">
                      Eventos em Alta!
                    </div>
                    <p className="text-sm leading-tight text-muted-foreground">
                      Eventos que a galera mais t
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
                  teste
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


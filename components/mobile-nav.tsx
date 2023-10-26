import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"
import { games } from "@/data"
import Link from "next/link"
import { Calendar, Gamepad, Home, Lock, Menu, Settings, User2 } from "lucide-react"
import { useRouter } from "next/navigation"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useUser } from "@clerk/nextjs"
import React from "react"
import axios from "axios"


export function MobileNav() {

  const [user, setUser] = React.useState<{
    publicMetadata: {
      isAdmin: string
    }
  }>({} as {
    publicMetadata: {
      isAdmin: string
    }
  })

  const clerkUser = useUser();

  React.useEffect(() => {
    axios.post(`/api/user`).catch(() => null)
    setUser(clerkUser.user as any)
  }, [clerkUser])


  const router = useRouter()
  const routes = [
    {
      icon: Home,
      href: '/',
      label: "Home",
    },
    {
      icon: Calendar,
      href: '/events',
      label: "Eventos",
    },
    {
      icon: User2,
      href: '/about',
      label: "Sobre Nós",
    },
  ];

  const handleClick = (href: string) => {
    return router.push(href)
  }

  return (
    <div className="">
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="ghost"><Menu /></Button>
        </SheetTrigger>
        <SheetContent className="w-[150px] ">
          <div className="space-y-4 flex flex-col h-full text-primary mt-24">
            <div className="flex-1 flex justify-center">
              <div className="space-y-2">
                {routes.map((route) => (
                  <div
                    onClick={() => handleClick(route.href)}
                    key={route.href}
                    className="text-muted-foreground text-xs group flex p-3 w-full justify-start font-medium cursor-pointer hover:text-primary hover:bg-primary/10 rounded-lg transition"
                  >
                    <div className="flex flex-col gap-y-2 items-center flex-1">
                      <route.icon className="h-5 w-5" />
                      {route.label}
                    </div>
                  </div>
                ))}
                <div>
                  <DropdownMenu>
                    <DropdownMenuTrigger>
                      <div className="flex flex-col gap-y-2 items-center p-3 px-6 flex-1 text-muted-foreground text-xs justify-start font-medium over:text-primary hover:bg-primary/10 rounded-lg transition">
                        <Gamepad className="h-5 w-5" />
                        {'Jogos'}
                      </div>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                      {games.map((game) => (
                        <div key={Math.random()}>
                          <DropdownMenuItem>
                            <Link
                              href={`/games/${game.gameTitle}/${game.gameId}`}
                            >
                              {game.gameTitle}
                            </Link>
                          </DropdownMenuItem>
                          <DropdownMenuSeparator />
                        </div>
                      ))}
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
                {user?.publicMetadata?.isAdmin && (
                  <div
                    onClick={() => router.push('/admin')}
                    key={Math.random()}
                    className="text-muted-foreground text-xs group flex p-3 w-full justify-start font-medium cursor-pointer hover:text-primary hover:bg-primary/10 rounded-lg transition"
                  >
                    <div className="flex flex-col gap-y-2 items-center flex-1">
                      <Lock className="h-5 w-5" />
                      {'Admin'}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  )
}

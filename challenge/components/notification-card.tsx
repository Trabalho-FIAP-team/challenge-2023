'use client'

import { BellRing, Check } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Switch } from "@/components/ui/switch"
import toast from "react-hot-toast"

type CardProps = React.ComponentProps<typeof Card>

export function NotificationCard({ className, ...props }: CardProps) {
  return (
    <Card className={cn("w-[380px]", className)} {...props}>
      <CardHeader>
        <CardTitle>Notificações</CardTitle>
        <CardDescription>Quer receber notificações sobre o evento?</CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4">
        <div className=" flex items-center space-x-4 rounded-md border p-4">
          <BellRing />
          <div className="flex-1 space-y-1">
            <p className="text-sm font-medium leading-none">
              Enviar Notificações
            </p>
            <p className="text-sm text-muted-foreground">
              Desejo receber notificações
            </p>
          </div>
          <Switch />
        </div>
        <div>
            <div
              className="mb-4 grid grid-cols-[25px_1fr] items-start pb-4 last:mb-0 last:pb-0"
            >
              <span className="flex h-2 w-2 translate-y-1 rounded-full bg-lime-400" />
              <div className="space-y-1">
                <p className="text-sm ">
                  Você pode receber notificações fora do horário de trabalho!
                </p>
              </div>
            </div>
        </div>
      </CardContent>
      <CardFooter>
        <Button 
          className="w-full bg-lime-400 hover:bg-lime-500"
          onClick={() => {toast.success('Você vai receber notificações sobre esse evento!')}}
        >
          Receber Notificações
        </Button>
      </CardFooter>
    </Card>
  )
}

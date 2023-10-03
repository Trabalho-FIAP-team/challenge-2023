'use client'

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import toast from "react-hot-toast"
import SendEventEmailButton from "@/lib/send-email-button"

interface NotificatiionCardProps {
  eventTitle: string;
  eventImage: string;
}

export function NotificationCard({
  eventTitle,
  eventImage
}: NotificatiionCardProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Quer participar desse evento?</CardTitle>
        <CardDescription>
          Complete o formulário abaixo com os seus dados e embarque nessa experiência.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-2">
        <div className="space-y-1">
          <Label htmlFor="nome">Nome</Label>
          <Input id="nome" placeholder="Nome completo" />
        </div>
        <div className="space-y-1">
          <Label htmlFor="email">Email</Label>
          <Input id="email" placeholder="Seu melhor Email" />
        </div>
      </CardContent>
      <CardFooter>
        <SendEventEmailButton eventTitle={eventTitle} eventImage={eventImage}/>
      </CardFooter>
    </Card>
  )
}

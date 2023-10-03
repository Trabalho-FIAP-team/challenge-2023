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
import { Switch } from "./ui/switch"
import toast from "react-hot-toast"
import { useParams } from "next/navigation"
import { useState } from "react"
import { useUser } from "@clerk/nextjs"

export function NotificationCard() {

  const params = useParams();
  const [loading, setLoading] = useState(false)
  const user = useUser() 
  const userEmail = user?.user?.primaryEmailAddress?.emailAddress

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
        <div className="flex items-center space-x-2">
          <Switch id="atualizacao" />
          <Label htmlFor="airplane-mode">Quer Rebeber Atualizações?</Label>
        </div>
        <Button 
          className="p-6 bg-lime-500 hover:bg-lime-600"
          onClick={() => {
            console.log(userEmail)
            toast.success('email enviado com sucesso!')
          }}
          >Quero Participar!
        </Button>
      </CardFooter>
    </Card>
  )
}

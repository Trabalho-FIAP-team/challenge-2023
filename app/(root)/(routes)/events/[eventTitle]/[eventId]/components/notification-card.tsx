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
import axios from 'axios'
import { NextResponse } from "next/server"
import { toast } from "react-hot-toast"

interface NotificatiionCardProps {
  eventTitle: string;
  eventImage: string;
}


export function NotificationCard({
  eventTitle,
  eventImage
}: NotificatiionCardProps) {

  const sendEmail = async () => {
    try {
      const response = await axios.post('/api/send');
      if (response.status === 200) {
        toast.success('Verifique a caixa de entrada do seu Email!');
      } else {
        toast.error('Erro ao enviar o Email');
      }
    } catch (error) {
      toast.error('Erro ao enviar o Email');
    }
  };
  

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
        <Button onClick={sendEmail}> 
          Enviar email
        </Button>
      </CardFooter>
    </Card>
  )
}

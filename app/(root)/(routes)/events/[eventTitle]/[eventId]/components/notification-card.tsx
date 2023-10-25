"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm, useFormContext } from "react-hook-form"
import * as z from "zod"
import axios from "axios"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form"
import { Switch } from "@/components/ui/switch"
import { toast } from "react-hot-toast"
import { useState } from "react"


const FormSchema = z.object({
  notifications: z.boolean().default(false).optional(),
})

interface NotificationCardProps {
  eventTitle: string | null
}

export function NotificationCard({
  eventTitle
}: NotificationCardProps) {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  })

  const [isLoading, setIsLoading] = useState(false)

  const sendEmail = async () => {
    try {
      setIsLoading(true)
      const response = await axios.post('/api/send');
      if (response.status === 200) {

        toast.success('Verifique a caixa de entrada do seu Email!');
      } else {
        toast.error('Erro ao enviar o Email');
      }
    } catch (error) {
      toast.error('Erro ao enviar o Email');
    } finally {
      setIsLoading(false)
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(sendEmail)} className="w-full space-y-6">
        <div>
          <h3 className="mb-4 text-lg font-medium"></h3>
          <div className="space-y-4">
            <FormField
              control={form.control}
              name="notifications"
              render={({ field }) => (
                <div className="flex flex-col justify-center items-center">
                  <FormItem className="flex flex-rowitems-center justify-between rounded-lg border p-3 shadow-sm">
                    <div className="space-y-0.5">
                      <FormLabel>Inscrição no(a) {eventTitle}</FormLabel>
                      <FormDescription>
                        Quer receber emails e atualizações sobre esse evento?
                      </FormDescription>
                    </div>
                    <div>
                      <Button
                        disabled={isLoading}
                      >
                        {isLoading ? 'Sending...' : 'Submit'}
                      </Button>
                    </div>
                  </FormItem>
                </div>
              )}
            />
          </div>
        </div>
      </form>
    </Form>
  )
}

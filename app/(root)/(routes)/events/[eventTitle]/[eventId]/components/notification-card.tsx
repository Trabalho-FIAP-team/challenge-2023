"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
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
    <Form {...form}>
      <form onSubmit={form.handleSubmit(sendEmail)} className="w-full space-y-6">
        <div>
          <h3 className="mb-4 text-lg font-medium"></h3>
          <div className="space-y-4">
            <FormField
              control={form.control}
              name="notifications"
              render={({ field }) => (
                <FormItem className="flex flex-row items-center justify-between rounded-lg border p-3 shadow-sm">
                  <div className="space-y-0.5">
                    <FormLabel>Inscrição no(a) {eventTitle}</FormLabel>
                    <FormDescription>
                      Quer receber emails e atualizações sobre esse evento?
                    </FormDescription>
                  </div>
                  <FormControl>
                    <Switch
                      checked={field.value}
                      onCheckedChange={field.onChange}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
          </div>
        </div>
        <Button onClick={() => sendEmail()}>Submit</Button>
      </form>
    </Form>
  )
}

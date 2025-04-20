"use client"

import { useState } from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail, Phone, MapPin, Send, CheckCircle } from "lucide-react"
import { motion } from "framer-motion"

const formSchema = z.object({
  naam: z.string().min(2, {
    message: "Naam moet minimaal 2 karakters bevatten.",
  }),
  email: z.string().email({
    message: "Voer een geldig e-mailadres in.",
  }),
  onderwerp: z.string().min(5, {
    message: "Onderwerp moet minimaal 5 karakters bevatten.",
  }),
  bericht: z.string().min(10, {
    message: "Bericht moet minimaal 10 karakters bevatten.",
  }),
})

export default function ContactPage() {
  const [isSubmitted, setIsSubmitted] = useState(false)

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      naam: "",
      email: "",
      onderwerp: "",
      bericht: "",
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    // In een echte applicatie zou je hier een API call doen
    console.log(values)

    // Simuleer een succesvolle verzending
    setTimeout(() => {
      setIsSubmitted(true)
    }, 1000)
  }

  return (
    <div className="py-8 animate-fade-in">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-4">Contact</h1>
        <p className="text-muted-foreground">
          Heb je een vraag of wil je samenwerken? Neem gerust contact met me op via onderstaand formulier.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <Card className="h-full">
            <CardHeader>
              <CardTitle>Contactformulier</CardTitle>
              <CardDescription>Vul het formulier in en ik neem zo snel mogelijk contact met je op.</CardDescription>
            </CardHeader>
            <CardContent>
              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex flex-col items-center justify-center text-center py-8"
                >
                  <CheckCircle className="h-16 w-16 text-green-500 mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Bericht verzonden!</h3>
                  <p className="text-muted-foreground mb-6">
                    Bedankt voor je bericht. Ik neem zo snel mogelijk contact met je op.
                  </p>
                  <Button
                    onClick={() => {
                      setIsSubmitted(false)
                      form.reset()
                    }}
                  >
                    Nieuw bericht
                  </Button>
                </motion.div>
              ) : (
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <FormField
                        control={form.control}
                        name="naam"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Naam</FormLabel>
                            <FormControl>
                              <Input placeholder="Jouw naam" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>E-mail</FormLabel>
                            <FormControl>
                              <Input placeholder="jouw@email.nl" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    <FormField
                      control={form.control}
                      name="onderwerp"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Onderwerp</FormLabel>
                          <FormControl>
                            <Input placeholder="Onderwerp van je bericht" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="bericht"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Bericht</FormLabel>
                          <FormControl>
                            <Textarea placeholder="Schrijf hier je bericht..." className="min-h-[150px]" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <Button type="submit" className="w-full">
                      <Send className="mr-2 h-4 w-4" />
                      Verstuur bericht
                    </Button>
                  </form>
                </Form>
              )}
            </CardContent>
          </Card>
        </div>

        <div>
          <Card className="h-full">
            <CardHeader>
              <CardTitle>Contactgegevens</CardTitle>
              <CardDescription>Je kunt me ook direct bereiken via onderstaande gegevens.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-full">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium">E-mail</h3>
                  <p className="text-muted-foreground">kelvinschouten@gmail.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-full">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium">Telefoon</h3>
                  <p className="text-muted-foreground">+31 634015396</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-full">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium">Locatie</h3>
                  <p className="text-muted-foreground">Oud-Beijerland, Nederland</p>
                </div>
              </div>

              <div className="pt-6 mt-6 border-t">
                <h3 className="font-medium mb-4">Beschikbaarheid</h3>
                <p className="text-muted-foreground mb-4">
                  Ik ben momenteel beschikbaar voor freelance werk en fulltime posities.
                </p>
                <div className="grid grid-cols-2 gap-2 text-sm">
                  <div className="bg-muted p-2 rounded">
                    <span className="font-medium">Ma - Vr:</span> 09:00 - 18:00
                  </div>
                  <div className="bg-muted p-2 rounded">
                    <span className="font-medium">Za - Zo:</span> Op afspraak
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}


"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { toast } from "sonner"

const schemaFormulaire = z.object({
  nom: z.string().min(2, "Le nom doit contenir au moins 2 caractères"),
  email: z.string().email("Adresse email invalide"),
  telephone: z.string().min(10, "Le numéro de téléphone doit contenir au moins 10 chiffres"),
  entreprise: z.string().min(2, "Le nom de l'entreprise doit contenir au moins 2 caractères"),
  message: z.string().optional(),
})

export function DemoForm() {
  const [chargement, setChargement] = useState(false)

  const form = useForm<z.infer<typeof schemaFormulaire>>({
    resolver: zodResolver(schemaFormulaire),
    defaultValues: {
      nom: "",
      email: "",
      telephone: "",
      entreprise: "",
      message: "",
    },
  })

  async function onSubmit(values: z.infer<typeof schemaFormulaire>) {
    setChargement(true)
    try {
      // Simulation d'un appel API
      await new Promise((resolve) => setTimeout(resolve, 1000))
      toast.success("Demande de démonstration envoyée avec succès !")
      form.reset()
    } catch (error) {
      toast.error("Une erreur est survenue. Veuillez réessayer.")
    } finally {
      setChargement(false)
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FormField
            control={form.control}
            name="nom"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Nom</FormLabel>
                <FormControl>
                  <Input placeholder="Entrez votre nom" {...field} />
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
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="Entrez votre email" type="email" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="telephone"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Numéro de téléphone</FormLabel>
                <FormControl>
                  <Input placeholder="Votre numéro" type="tel" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="entreprise"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Entreprise</FormLabel>
                <FormControl>
                  <Input placeholder="Votre entreprise" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Message (Optionnel)</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Parlez-nous de vos besoins en matière de contrôle de température..."
                  className="min-h-[120px]"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="w-full bg-[#3eab35] hover:bg-[#dd234b]" disabled={chargement}>
          {chargement ? "Envoi en cours..." : "Demander une démonstration"}
        </Button>
      </form>
    </Form>
  )
}


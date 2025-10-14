"use client"

import { useMemo, useState } from "react"
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
import { useI18n } from "@/i18n/i18n-provider"

function buildSchema(messages: {
  name_min: string
  email_invalid: string
  phone_min: string
  company_min: string
}) {
  return z.object({
    nom: z.string().min(2, messages.name_min),
    email: z.string().email(messages.email_invalid),
    telephone: z.string().min(10, messages.phone_min),
    entreprise: z.string().min(2, messages.company_min),
    message: z.string().optional(),
  })
}

export function DemoForm() {
  const { t } = useI18n()
  const formT = useMemo(() => ({
    labels: {
      name: (t as any).form?.labels?.name ?? "Nom",
      email: (t as any).form?.labels?.email ?? "Email",
      phone: (t as any).form?.labels?.phone ?? "Numéro de téléphone",
      company: (t as any).form?.labels?.company ?? "Entreprise",
      message: (t as any).form?.labels?.message ?? "Message (Optionnel)",
      submit: (t as any).form?.labels?.submit ?? "Envoyer",
      sending: (t as any).form?.labels?.sending ?? "Envoi en cours...",
      placeholder_name: (t as any).form?.labels?.placeholders?.name ?? "Entrez votre nom",
      placeholder_email: (t as any).form?.labels?.placeholders?.email ?? "Entrez votre email",
      placeholder_phone: (t as any).form?.labels?.placeholders?.phone ?? "Votre numéro",
      placeholder_company: (t as any).form?.labels?.placeholders?.company ?? "Votre entreprise",
      placeholder_message: (t as any).form?.labels?.placeholders?.message ?? "Parlez-nous de vos besoins en matière de contrôle de température...",
    },
    messages: {
      name_min: (t as any).form?.messages?.name_min ?? "Le nom doit contenir au moins 2 caractères",
      email_invalid: (t as any).form?.messages?.email_invalid ?? "Adresse email invalide",
      phone_min: (t as any).form?.messages?.phone_min ?? "Le numéro de téléphone doit contenir au moins 10 chiffres",
      company_min: (t as any).form?.messages?.company_min ?? "Le nom de l'entreprise doit contenir au moins 2 caractères",
      success: (t as any).form?.messages?.success ?? "Demande de présentation envoyée avec succès !",
      error: (t as any).form?.messages?.error ?? "Une erreur est survenue. Veuillez réessayer.",
    }
  }), [t])

  const schemaFormulaire = useMemo(() => buildSchema(formT.messages), [formT.messages])
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
      const res = await fetch("/api/send-demo-mail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      if (!res.ok) throw new Error("send_error");
      toast.success(formT.messages.success);
      form.reset();
    } catch (error) {
      toast.error(formT.messages.error);
    } finally {
      setChargement(false);
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
                <FormLabel>{formT.labels.name}</FormLabel>
                <FormControl>
                  <Input placeholder={formT.labels.placeholder_name} {...field} />
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
                <FormLabel>{formT.labels.email}</FormLabel>
                <FormControl>
                  <Input placeholder={formT.labels.placeholder_email} type="email" {...field} />
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
                <FormLabel>{formT.labels.phone}</FormLabel>
                <FormControl>
                  <Input placeholder={formT.labels.placeholder_phone} type="tel" {...field} />
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
                <FormLabel>{formT.labels.company}</FormLabel>
                <FormControl>
                  <Input placeholder={formT.labels.placeholder_company} {...field} />
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
              <FormLabel>{formT.labels.message}</FormLabel>
              <FormControl>
                <Textarea
                  placeholder={formT.labels.placeholder_message}
                  className="min-h-[120px]"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="w-full bg-[#3eab35] hover:bg-[#dd234b]" disabled={chargement}>
          {chargement ? formT.labels.sending : formT.labels.submit}
        </Button>
      </form>
    </Form>
  )
}


"use client"

import { useMemo, useState } from "react"
import Link from "next/link"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { toast } from "sonner"
import { CircleCheck } from "lucide-react"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { useI18n } from "@/i18n/i18n-provider"
import { useHomeCopy } from "@/i18n/home-copy"

/**
 * Formulaire de demande de présentation : une seule étape, trois champs obligatoires (nom, e-mail,
 * téléphone) et un message facultatif. Le moins de friction possible pour maximiser les demandes.
 */
export function DemoForm() {
  const { t } = useI18n()
  const { contact } = useHomeCopy()
  const f = (t as any).form
  const labels = f.labels
  const messages = f.messages

  const schema = useMemo(
    () =>
      z.object({
        nom: z.string().trim().min(2, messages.name_min),
        email: z.string().trim().email(messages.email_invalid),
        telephone: z.string().trim().min(10, messages.phone_min),
        message: z.string().optional(),
      }),
    [messages],
  )

  const [loading, setLoading] = useState(false)
  const [sent, setSent] = useState(false)
  const form = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
    defaultValues: { nom: "", email: "", telephone: "", message: "" },
  })

  async function onSubmit(values: z.infer<typeof schema>) {
    setLoading(true)
    try {
      const res = await fetch("/api/send-demo-mail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...values, entreprise: "" }),
      })
      if (!res.ok) throw new Error("send_error")
      try {
        ;(window as any)?.gtag?.("event", "conversion", { send_to: "AW-1068513425/Lns5CPOSmPsaEJHxwP0D" })
      } catch {}
      form.reset()
      setSent(true)
    } catch {
      toast.error(messages.error)
    } finally {
      setLoading(false)
    }
  }

  if (sent) {
    return (
      <div className="animate-pop-in flex flex-col items-center gap-3 py-8 text-center" role="status">
        <CircleCheck aria-hidden className="size-12 text-moss-600" />
        <p className="font-display text-xl font-extrabold text-forest">{messages.success}</p>
        <p className="max-w-sm text-body">{contact.thanks}</p>
      </div>
    )
  }

  const input = "h-12 text-base"

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} noValidate className="flex flex-col gap-5">
        <FormField
          control={form.control}
          name="nom"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{labels.name}</FormLabel>
              <FormControl>
                <Input className={input} autoComplete="name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="grid gap-5 sm:grid-cols-2">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>{labels.email}</FormLabel>
                <FormControl>
                  <Input className={input} type="email" autoComplete="email" inputMode="email" {...field} />
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
                <FormLabel>{labels.phone}</FormLabel>
                <FormControl>
                  <Input className={input} type="tel" autoComplete="tel" inputMode="tel" {...field} />
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
              <FormLabel>{labels.message}</FormLabel>
              <FormControl>
                <Textarea className="min-h-[96px] text-base" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit" variant="cta" size="lg" className="w-full" disabled={loading}>
          {loading ? labels.sending : t.hero.cta}
        </Button>

        <p className="text-center text-xs leading-relaxed text-slate">
          {contact.note}{" "}
          <Link href="/politique-confidentialite" className="underline underline-offset-2 hover:text-forest">
            {contact.privacy}
          </Link>
        </p>
      </form>
    </Form>
  )
}

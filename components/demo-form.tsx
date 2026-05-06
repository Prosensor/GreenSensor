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
    internet_site: z.string().min(1, "Veuillez indiquer si vous avez internet sur votre site"),
    achat_ou_location: z.string().min(1, "Veuillez indiquer si vous souhaitez acheter ou louer"),
    longueur_sondes: z.string().min(1, "Veuillez choisir une longueur de sondes"),
    type_pack: z.string().min(1, "Veuillez préciser le type de pack souhaité"),
    distance_passerelle: z.string().min(1, "Veuillez indiquer la distance entre vos andains et la passerelle"),
  })
}

type SolutionAnswers = {
  internet_site: string
  achat_ou_location: string
  longueur_sondes: string
  type_pack: string
  distance_passerelle: string
}

function buildSolutionFromAnswers(values: SolutionAnswers) {
  const { internet_site, achat_ou_location, longueur_sondes, type_pack, distance_passerelle } = values

  if (!internet_site && !achat_ou_location && !longueur_sondes && !type_pack && !distance_passerelle) {
    return null
  }

  const lignes: string[] = []
  const refs: string[] = []

  const isBuy = achat_ou_location === "acheter"
  const isRent = achat_ou_location === "louer"

  let resume = ""

  const achatLabel = isBuy ? "Achat" : isRent ? "Location" : ""
  let longueurLabel = ""
  if (longueur_sondes === "1000") longueurLabel = "Lg 1000"
  if (longueur_sondes === "1500") longueurLabel = "Lg 1500"
  if (longueur_sondes === "2000") longueurLabel = "Lg 2000"

  let packLabel = ""
  if (type_pack === "pack2") packLabel = "Pack 2 sondes"
  if (type_pack === "pack3") packLabel = "Pack 3 sondes"
  if (type_pack === "unite") packLabel = "Sonde(s) à l'unité"

  if (achatLabel && longueurLabel && packLabel) {
    resume = `${achatLabel} – ${packLabel} ${longueurLabel}`
  }

  // Packs / sondes principales
  if (isBuy) {
    if (longueur_sondes === "1000") {
      if (type_pack === "pack2") {
        lignes.push("Pack 2 sondes Lg 1000 + routeur (IOTP0007)")
        refs.push("IOTP0007")
      } else if (type_pack === "pack3") {
        lignes.push("Pack 3 sondes Lg 1000 + routeur (IOTP0008)")
        refs.push("IOTP0008")
      } else if (type_pack === "unite") {
        lignes.push("Sonde supplémentaire Lg 1000 à l'unité (IOTP0001)")
        refs.push("IOTP0001")
      }
    } else if (longueur_sondes === "1500") {
      if (type_pack === "pack2") {
        lignes.push("Pack 2 sondes Lg 1500 + routeur (IOTP0025)")
        refs.push("IOTP0025")
      } else if (type_pack === "pack3") {
        lignes.push("Pack 3 sondes Lg 1500 + routeur (IOTP0026)")
        refs.push("IOTP0026")
      } else if (type_pack === "unite") {
        lignes.push("Sonde supplémentaire Lg 1500 à l'unité (IOTP0002)")
        refs.push("IOTP0002")
      }
    } else if (longueur_sondes === "2000") {
      // Uniquement sondes à l'unité connues
      lignes.push("Sonde(s) Lg 2000 (IOTP0003) – quantité à préciser")
      refs.push("IOTP0003")
    }

    // Références communes pour l'achat
    lignes.push("Forfait 1ère activation (IOTP0009), accès annuel plateforme (IOTP0010), frais de port et emballage (IOTP0011)")
    refs.push("IOTP0009", "IOTP0010", "IOTP0011")
  }

  if (isRent) {
    if (longueur_sondes === "1000") {
      if (type_pack === "pack2") {
        lignes.push("Pack 2 sondes Lg 1000 + routeur en location (IOTP0013)")
        refs.push("IOTP0013")
      } else if (type_pack === "pack3") {
        lignes.push("Pack 3 sondes Lg 1000 + routeur en location (IOTP0014)")
        refs.push("IOTP0014")
      } else if (type_pack === "unite") {
        lignes.push("Sonde Lg 1000 en location, à l'unité (IOTP0015)")
        refs.push("IOTP0015")
      }
    } else if (longueur_sondes === "1500") {
      lignes.push("Sonde(s) Lg 1500 en location (IOTP0016) – quantité / pack à préciser")
      refs.push("IOTP0016")
    } else if (longueur_sondes === "2000") {
      lignes.push("Sonde(s) Lg 2000 en location (IOTP0017) – quantité / pack à préciser")
      refs.push("IOTP0017")
    }

    lignes.push("Forfait 1ère activation (IOTP0009), accès annuel plateforme location (IOTP0018), frais de port et emballage (IOTP0011)")
    refs.push("IOTP0009", "IOTP0018", "IOTP0011")
  }

  // Internet sur site
  if (internet_site === "oui") {
    lignes.push("Site avec Internet (box / routeur).")
  } else if (internet_site === "non") {
    lignes.push("Site sans Internet : prévoir passerelle LTE 4G (réf interne Prosensor).")
  }

  // Distance
  if (distance_passerelle === "plus_2km") {
    lignes.push("Distance andains / passerelle > 2 km : antenne répéteur recommandée (référence à préciser).")
  }

  if (refs.length) {
    const uniqueRefs = Array.from(new Set(refs))
    lignes.push(`Références IOTP principales : ${uniqueRefs.join(", ")}`)
  }

  if (!resume && lignes.length === 0) {
    return null
  }

  return { resume, lignes }
}

export function DemoForm() {
  const { t, language } = useI18n()
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
  const [step, setStep] = useState(1)
  const [envoye, setEnvoye] = useState(false)
  const totalSteps = 3
  const stepLabel = language === "fr" ? "Étape" : language === "es" ? "Paso" : language === "de" ? "Schritt" : language === "pt" ? "Etapa" : language === "ro" ? "Pasul" : "Step"
  const ofLabel = language === "fr" ? "sur" : language === "es" ? "de" : language === "de" ? "von" : language === "pt" ? "de" : language === "ro" ? "din" : "of"
  const previousLabel = language === "fr" ? "Précédent" : language === "es" ? "Anterior" : language === "de" ? "Zurück" : language === "pt" ? "Anterior" : language === "ro" ? "Anterior" : "Previous"
  const nextLabel = language === "fr" ? "Suivant" : language === "es" ? "Siguiente" : language === "de" ? "Weiter" : language === "pt" ? "Seguinte" : language === "ro" ? "Următorul" : "Next"

  const form = useForm<z.infer<typeof schemaFormulaire>>({
    resolver: zodResolver(schemaFormulaire),
    defaultValues: {
      nom: "",
      email: "",
      telephone: "",
      entreprise: "",
      message: "",
      internet_site: "",
      achat_ou_location: "",
      longueur_sondes: "",
      type_pack: "",
      distance_passerelle: "",
    },
  })

  const solution = buildSolutionFromAnswers({
    internet_site: form.watch("internet_site"),
    achat_ou_location: form.watch("achat_ou_location"),
    longueur_sondes: form.watch("longueur_sondes"),
    type_pack: form.watch("type_pack"),
    distance_passerelle: form.watch("distance_passerelle"),
  })

  async function onSubmit(values: z.infer<typeof schemaFormulaire>) {
    setChargement(true)
    setEnvoye(false)
    try {
      const res = await fetch("/api/send-demo-mail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      if (!res.ok) throw new Error("send_error");
      toast.success(formT.messages.success);
      try {
        (window as any)?.gtag?.('event', 'conversion', { send_to: 'AW-1068513425/Lns5CPOSmPsaEJHxwP0D' });
      } catch {}
      form.reset({
        nom: "",
        email: "",
        telephone: "",
        entreprise: "",
        message: "",
        internet_site: "",
        achat_ou_location: "",
        longueur_sondes: "",
        type_pack: "",
        distance_passerelle: "",
      });
      setStep(1);
      setEnvoye(true);
    } catch (error) {
      toast.error(formT.messages.error);
    } finally {
      setChargement(false);
    }
  }

  async function handleNext() {
    const fieldsToValidate =
      step === 1
        ? ["nom", "email", "telephone", "entreprise"]
        : ["internet_site", "achat_ou_location", "longueur_sondes", "type_pack", "distance_passerelle"]

    const isValid = await form.trigger(fieldsToValidate as any)
    if (isValid && step < totalSteps) {
      setStep(step + 1)
    }
  }

  function handlePrevious() {
    if (step > 1) {
      setStep(step - 1)
    }
  }

  if (envoye) {
    return (
      <div className="rounded-lg border border-[#3eab35] bg-[#f0fdf4] p-6 text-center space-y-3">
        <p className="text-[#166534] font-semibold text-lg">Demande envoyée avec succès</p>
        <p className="text-gray-600 text-sm">
          Merci pour votre demande. Nous vous recontacterons rapidement.
        </p>
        <Button
          type="button"
          variant="outline"
          className="mt-2"
          onClick={() => setEnvoye(false)}
        >
          Envoyer une autre demande
        </Button>
      </div>
    )
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            {Array.from({ length: totalSteps }).map((_, index) => {
              const stepNumber = index + 1
              const isActive = stepNumber === step
              const isCompleted = stepNumber < step
              return (
                <div key={stepNumber} className="flex items-center">
                  <div
                    className={`flex h-8 w-8 items-center justify-center rounded-full text-sm font-medium ${
                      isActive
                        ? "bg-[#3eab35] text-white"
                        : isCompleted
                        ? "bg-[#16a34a] text-white"
                        : "bg-gray-200 text-gray-600"
                    }`}
                  >
                    {stepNumber}
                  </div>
                  {stepNumber < totalSteps && (
                    <div className="h-[2px] w-6 bg-gray-200 mx-1" />
                  )}
                </div>
              )
            })}
          </div>
          <span className="text-sm text-gray-600">
            {stepLabel} {step} {ofLabel} {totalSteps}
          </span>
        </div>

        {step === 1 && (
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
        )}

        {step === 2 && (
          <div className="space-y-4">
            <FormField
              control={form.control}
              name="internet_site"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Avez-vous internet sur votre site de compostage ?</FormLabel>
                  <FormControl>
                    <select
                      {...field}
                      className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#3eab35]"
                    >
                      <option value="">Sélectionnez une option</option>
                      <option value="oui">Oui</option>
                      <option value="non">Non</option>
                    </select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="achat_ou_location"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Souhaitez-vous acheter ou louer ?</FormLabel>
                  <FormControl>
                    <select
                      {...field}
                      className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#3eab35]"
                    >
                      <option value="">Sélectionnez une option</option>
                      <option value="acheter">Acheter</option>
                      <option value="louer">Louer</option>
                    </select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="longueur_sondes"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Quelle longueur de sondes utilisez-vous ?</FormLabel>
                  <FormControl>
                    <select
                      {...field}
                      className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#3eab35]"
                    >
                      <option value="">Sélectionnez une option</option>
                      <option value="1000">1000 mm</option>
                      <option value="1500">1500 mm</option>
                      <option value="2000">2000 mm</option>
                    </select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="type_pack"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>De combien de sondes avez-vous besoin ?</FormLabel>
                  <FormControl>
                    <select
                      {...field}
                      className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#3eab35]"
                    >
                      <option value="">Sélectionnez une option</option>
                      <option value="pack2">Pack de 2 sondes</option>
                      <option value="pack3">Pack de 3 sondes</option>
                      <option value="unite">À l'unité</option>
                    </select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="distance_passerelle"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Quelle est la distance entre vos andains et votre passerelle ?</FormLabel>
                  <FormControl>
                    <select
                      {...field}
                      className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#3eab35]"
                    >
                      <option value="">Sélectionnez une option</option>
                      <option value="plus_2km">Plus de 2 km en champs libre</option>
                      <option value="moins_2km">Moins de 2 km en champs libre</option>
                    </select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        )}

        {step === 3 && (
          <div className="space-y-4">
            {solution && (
              <div className="rounded-md bg-white border border-gray-200 p-4 text-sm text-gray-700 space-y-2">
                <p className="font-semibold">Configuration proposée (interne Prosensor)&nbsp;:</p>
                {solution.resume && (
                  <p className="text-gray-800">{solution.resume}</p>
                )}
                {solution.lignes.length > 0 && (
                  <ul className="list-disc pl-5 space-y-1">
                    {solution.lignes.map((ligne, idx) => (
                      <li key={idx}>{ligne}</li>
                    ))}
                  </ul>
                )}
              </div>
            )}

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

            <div className="rounded-md bg-gray-50 p-4 text-sm text-gray-700 space-y-1">
              <p className="font-semibold">Récapitulatif de votre besoin :</p>
              <p>Internet sur le site : <span className="font-medium">{form.watch("internet_site") === "oui" ? "Oui" : form.watch("internet_site") === "non" ? "Non" : "-"}</span></p>
              <p>Mode d&apos;acquisition : <span className="font-medium">{form.watch("achat_ou_location") || "-"}</span></p>
              <p>Longueur de sondes : <span className="font-medium">{form.watch("longueur_sondes") || "-"}</span></p>
              <p>Type de pack : <span className="font-medium">{form.watch("type_pack") || "-"}</span></p>
              <p>Distance andains / passerelle : <span className="font-medium">{form.watch("distance_passerelle") || "-"}</span></p>
            </div>
          </div>
        )}

        <div className="flex items-center justify-between pt-4 gap-2">
          <Button
            type="button"
            variant="outline"
            onClick={handlePrevious}
            disabled={step === 1 || chargement}
          >
            {previousLabel}
          </Button>

          {step < totalSteps && (
            <Button
              type="button"
              className="ml-auto bg-[#3eab35] hover:bg-[#dd234b]"
              onClick={handleNext}
              disabled={chargement}
            >
              {nextLabel}
            </Button>
          )}

          {step === totalSteps && (
            <Button
              type="submit"
              className="ml-auto bg-[#3eab35] hover:bg-[#dd234b]"
              disabled={chargement}
            >
              {chargement ? formT.labels.sending : formT.labels.submit}
            </Button>
          )}
        </div>
      </form>
    </Form>
  )
}


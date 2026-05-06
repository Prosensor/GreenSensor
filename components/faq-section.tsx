"use client"

import Image from "next/image"
import Link from "next/link"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { AnimatedSection } from "./animated-section"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { useI18n } from "@/i18n/i18n-provider"

export function FaqSection() {
  const { t, language } = useI18n()
  const faqT = (t as any).faq as {
    heading: string
    heading_highlight: string
    items: { q: string; a: string }[]
    cta: string
  }
  const displayedFaqs = faqT.items.slice(0, 6)

  return (
    <AnimatedSection id="faq" className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="max-w-3xl mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="inline-flex items-center rounded-full border border-[#3eab35]/20 bg-[#3eab35]/10 px-3 py-1 text-xs font-semibold tracking-wide text-[#2f8a29] mb-4">
            {language === "fr" ? "Support" : language === "es" ? "Soporte" : language === "de" ? "Support" : language === "pt" ? "Suporte" : language === "ro" ? "Suport" : "Support"}
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-gray-900 mb-4">
            {faqT.heading} <span className="text-[#3eab35]">{faqT.heading_highlight}</span>
          </h2>
          <p className="text-gray-600 text-base md:text-lg">
            {language === "fr" ? "Retrouvez les réponses aux questions les plus fréquentes sur GreenSensor, son déploiement et son utilisation au quotidien." : language === "es" ? "Encuentra respuestas a las preguntas más frecuentes sobre GreenSensor, su despliegue y su uso diario." : language === "de" ? "Hier finden Sie Antworten auf die häufigsten Fragen zu GreenSensor, zur Implementierung und zur täglichen Nutzung." : language === "pt" ? "Encontre respostas para as perguntas mais frequentes sobre GreenSensor, sua implementação e uso diário." : language === "ro" ? "Găsiți răspunsuri la cele mai frecvente întrebări despre GreenSensor, implementarea și utilizarea sa zilnică." : "Find answers to the most common questions about GreenSensor, its deployment and day-to-day use."}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          <motion.div 
            className="relative h-[300px] md:h-[420px] lg:h-[580px] lg:col-span-5 rounded-3xl overflow-hidden border border-gray-200 shadow-sm"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Image
              src="/faq.jpg"
              alt="Sonde Prosensor en action"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/15 to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 rounded-xl border border-white/20 bg-black/35 backdrop-blur-sm px-4 py-3">
              <p className="text-white/90 text-sm">
                {language === "fr" ? "Besoin d'une réponse rapide ? Notre équipe vous accompagne de la mise en service au suivi quotidien." : language === "es" ? "¿Necesitas una respuesta rápida? Nuestro equipo te acompaña desde la puesta en marcha hasta el seguimiento diario." : language === "de" ? "Brauchen Sie eine schnelle Antwort? Unser Team begleitet Sie von der Inbetriebnahme bis zum täglichen Monitoring." : language === "pt" ? "Precisa de uma resposta rápida? Nossa equipe acompanha você desde a implementação até o acompanhamento diário." : language === "ro" ? "Aveți nevoie de un răspuns rapid? Echipa noastră vă însoțește de la punerea în funcțiune până la monitorizarea zilnică." : "Need a quick answer? Our team supports you from setup to day-to-day monitoring."}
              </p>
            </div>
          </motion.div>

          <div className="space-y-6 lg:col-span-7">
            <div className="grid grid-cols-2 gap-3">
              <div className="rounded-xl border border-gray-200 bg-white px-4 py-3">
                <p className="text-xs uppercase tracking-wide text-gray-500">{language === "fr" ? "Questions" : language === "es" ? "Preguntas" : language === "de" ? "Fragen" : language === "pt" ? "Perguntas" : language === "ro" ? "Întrebări" : "Questions"}</p>
                <p className="text-2xl font-bold text-gray-900">{displayedFaqs.length}</p>
              </div>
              <div className="rounded-xl border border-gray-200 bg-white px-4 py-3">
                <p className="text-xs uppercase tracking-wide text-gray-500">{language === "fr" ? "Support" : language === "es" ? "Soporte" : language === "de" ? "Support" : language === "pt" ? "Suporte" : language === "ro" ? "Suport" : "Support"}</p>
                <p className="text-2xl font-bold text-[#3eab35]">{language === "fr" ? "Actif" : language === "es" ? "Activo" : language === "de" ? "Aktiv" : language === "pt" ? "Ativo" : language === "ro" ? "Activ" : "Active"}</p>
              </div>
            </div>

            <Accordion type="single" collapsible className="w-full">
              {displayedFaqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <AccordionItem
                    value={`item-${index}`}
                    className="bg-white border border-gray-200 mb-3 rounded-xl overflow-hidden shadow-sm"
                  >
                    <AccordionTrigger className="px-5 md:px-6 py-4 text-left text-gray-900 hover:no-underline hover:bg-gray-50">
                      <div className="flex items-center gap-4">
                        <span className="text-[#3eab35] font-mono text-sm">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                        <span className="font-medium leading-snug">{faq.q}</span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="px-5 md:px-6 py-4 text-gray-600 leading-relaxed">
                      {faq.a}
                    </AccordionContent>
                  </AccordionItem>
                </motion.div>
              ))}
            </Accordion>
            <div className="pt-2">
              <Button asChild className="bg-[#3eab35] text-white hover:bg-[#2f8a29] rounded-full px-7">
                <Link href="/faq">
                  {language === "fr" ? "Voir toute la FAQ" : language === "es" ? "Ver FAQ completa" : language === "de" ? "Komplette FAQ ansehen" : language === "pt" ? "Ver FAQ completa" : language === "ro" ? "Vezi FAQ complet" : "View full FAQ"}
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </AnimatedSection>
  )
}


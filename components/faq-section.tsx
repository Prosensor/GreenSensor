"use client"

import Image from "next/image"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { AnimatedSection } from "./animated-section"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { useCallback } from 'react'

const faqList = [
  {
    question: "Quelle est la précision de mesure des sondes GreenSensor ?",
    reponse: "Les sondes ProSensor offrent une précision de mesure exceptionnelle, avec une marge d'erreur de seulement ±0,5°C. Cette précision permet un contrôle optimal de la température dans le processus de production de composts.",
  },
  {
    question: "Comment puis-je intégrer GreenSensor à mon système de production actuel ?",
    reponse: "GreenSensor est conçu pour s'intégrer facilement à la plupart des systèmes de production existants. Notre équipe technique vous guidera tout au long du processus d'installation et d'intégration pour assurer une transition en douceur.",
  },
  {
    question: "Quelles sont les options de rapport et d'analyse disponibles ?",
    reponse: "GreenSensor offre une suite complète d'outils de rapport et d'analyse. Vous pouvez accéder à des graphiques en temps réel, des rapports détaillés sur l'historique des températures, et des analyses prédictives pour optimiser votre production.",
  },
  {
    question: "Comment configurer les alertes de température ?",
    reponse: "La configuration des alertes est simple et personnalisable. Dans l'interface GreenSensor, à la création de la campagne, naviguez vers Paramètres > Alertes pour définir vos seuils de température et choisir vos méthodes de notification préférées (SMS, email, notifications push).",
  },
]

export function FaqSection() {
  const scrollToDemo = useCallback((e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    const demoSection = document.getElementById('demo')
    if (demoSection) {
      demoSection.scrollIntoView({ behavior: 'smooth' })
    }
  }, [])

  return (
    <AnimatedSection id="faq" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            className="relative h-[600px]"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Image
              src="/faq.jpg"
              alt="Sonde ProSensor en action"
              fill
              className="rounded-lg shadow-lg object-cover"
            />
          </motion.div>
          <div className="space-y-8">
            <motion.h2 
              className="text-4xl font-bold tracking-tight text-gray-900"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Questions <span className="text-[#3eab35]">Fréquentes</span>
            </motion.h2>
            <Accordion type="single" collapsible className="w-full">
              {faqList.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <AccordionItem
                    value={`item-${index}`}
                    className="bg-white border border-gray-200 mb-4 rounded-lg overflow-hidden"
                  >
                    <AccordionTrigger className="px-6 py-4 text-gray-900 hover:no-underline hover:bg-gray-50">
                      <div className="flex items-center gap-4">
                        <span className="text-[#3eab35] font-mono">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                        {faq.question}
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="px-6 py-4 text-gray-600">
                      {faq.reponse}
                    </AccordionContent>
                  </AccordionItem>
                </motion.div>
              ))}
            </Accordion>
          </div>
        </div>
        <motion.div
          className="flex justify-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Button 
            size="lg" 
            className="bg-[#3eab35] text-white hover:bg-[#dd234b]"
            onClick={scrollToDemo}
          >
            Demander une présentation
          </Button>
        </motion.div>
      </div>
    </AnimatedSection>
  )
}


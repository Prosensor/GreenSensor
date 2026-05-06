"use client"

import Image from "next/image"
import { Thermometer, BarChart, Bell, Lock } from 'lucide-react'
import { AnimatedSection } from "./animated-section"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { useCallback } from 'react'
import { useI18n } from "@/i18n/i18n-provider"

const iconMap = {
  thermometer: Thermometer,
  chart: BarChart,
  bell: Bell,
  lock: Lock,
} as const

export function KeyFeaturesSection() {
  const { t, language } = useI18n()
  const keyT = (t as any).keyFeatures as {
    heading: string
    heading_highlight: string
    connector: string
    paragraph: string
    items: { iconKey: keyof typeof iconMap; label: string; highlight?: boolean }[]
    cta: string
  }
  const scrollToDemo = useCallback((e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    const demoSection = document.getElementById('demo')
    if (demoSection) {
      demoSection.scrollIntoView({ behavior: 'smooth' })
    }
  }, [])

  return (
    <AnimatedSection id="analyse" className="py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="max-w-3xl mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="inline-flex items-center rounded-full border border-[#3eab35]/20 bg-[#3eab35]/10 px-3 py-1 text-xs font-semibold tracking-wide text-[#2f8a29] mb-4">
            {language === "fr" ? "Analyse" : language === "es" ? "Análisis" : language === "de" ? "Analyse" : language === "pt" ? "Análise" : language === "ro" ? "Analiză" : "Analytics"}
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-gray-900 mb-4">
            {keyT.heading} <span className="text-[#3eab35]">{keyT.heading_highlight}</span> {keyT.connector} GreenSensor
          </h2>
          <p className="text-gray-600 text-base md:text-lg">
            {keyT.paragraph}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
          <motion.div
            className="lg:col-span-8 rounded-3xl border border-gray-200 bg-gradient-to-b from-gray-50 to-white p-4 md:p-6 min-h-[360px] md:min-h-[430px] lg:min-h-[500px]"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="relative h-full w-full">
              <Image
                src="/application_datasheet.png"
                alt="Interface Prosensor pour le contrôle de la température"
                fill
                className="object-contain object-center"
                sizes="(min-width: 1024px) 66vw, 100vw"
              />
            </div>
          </motion.div>

          <motion.div
            className="lg:col-span-4 rounded-2xl border border-gray-200 bg-white p-4 md:p-5 shadow-sm"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <p className="text-sm font-semibold tracking-wide uppercase text-gray-500 mb-4">
              {language === "fr" ? "Modules principaux" : language === "es" ? "Módulos principales" : language === "de" ? "Hauptmodule" : language === "pt" ? "Módulos principais" : language === "ro" ? "Module principale" : "Main modules"}
            </p>
            <div className="grid gap-3">
              {keyT.items.map((item, index) => {
                const Icon = iconMap[item.iconKey]
                return (
                  <motion.div
                    key={item.label}
                    className={`rounded-xl border px-4 py-4 transition-all ${
                      item.highlight
                        ? "border-[#3eab35]/40 bg-[#f6fff5] shadow-sm"
                        : "border-gray-200 bg-white"
                    }`}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.35, delay: 0.2 + index * 0.08 }}
                  >
                    <div className="flex items-start gap-3">
                      <div
                        className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                          item.highlight
                            ? "bg-[#3eab35] text-white"
                            : "bg-[#3eab35]/10 text-[#2f8a29]"
                        }`}
                      >
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="text-base font-semibold text-gray-900">
                          {item.label}
                        </p>
                        <p className="text-sm text-gray-500 mt-1">
                          {language === "fr" ? "Fonction disponible dans l'interface GreenSensor." : language === "es" ? "Función disponible en la interfaz GreenSensor." : language === "de" ? "Funktion in der GreenSensor-Oberfläche verfügbar." : language === "pt" ? "Função disponível na interface GreenSensor." : language === "ro" ? "Funcție disponibilă în interfața GreenSensor." : "Feature available in the GreenSensor interface."}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>
        </div>
        <motion.div
          className="flex justify-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Button 
            size="lg" 
            className="bg-[#3eab35] text-white hover:bg-[#2f8a29] rounded-full px-8"
            onClick={scrollToDemo}
          >
            {keyT.cta}
          </Button>
        </motion.div>
      </div>
    </AnimatedSection>
  )
}


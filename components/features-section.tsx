"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Thermometer, Bell, ShieldCheck, BarChart } from 'lucide-react'
import { AnimatedSection } from "./animated-section"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { useCallback } from 'react'
import { useI18n } from "@/i18n/i18n-provider"

const iconMap = {
  thermometer: Thermometer,
  bell: Bell,
  shield: ShieldCheck,
  chart: BarChart,
} as const

export function FeaturesSection() {
  const { t, language } = useI18n()
  const featuresT = (t as any).features as {
    heading: string
    heading_highlight: string
    subheading: string
    cta: string
    cards: { iconKey: keyof typeof iconMap; title: string; desc: string }[]
  }
  const scrollToDemo = useCallback((e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    const demoSection = document.getElementById('demo')
    if (demoSection) {
      demoSection.scrollIntoView({ behavior: 'smooth' })
    }
  }, [])

  return (
    <AnimatedSection className="py-24 bg-gray-50/60" id="fonctionnalites">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          <motion.div
            className="lg:col-span-4 lg:sticky lg:top-24"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-flex items-center rounded-full border border-[#3eab35]/20 bg-[#3eab35]/10 px-3 py-1 text-xs font-semibold tracking-wide text-[#2f8a29] mb-4">
              {language === "fr" ? "GreenSensor" : language === "es" ? "GreenSensor" : language === "de" ? "GreenSensor" : language === "pt" ? "GreenSensor" : language === "ro" ? "GreenSensor" : "GreenSensor"}
            </span>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900 mb-4">
              {featuresT.heading}
              <span className="text-[#3eab35]">{featuresT.heading_highlight}</span>
            </h2>
            <p className="text-gray-600 text-base md:text-lg mb-8">
              {featuresT.subheading}
            </p>

            <Button
              size="lg"
              className="bg-[#3eab35] text-white hover:bg-[#2f8a29] rounded-full px-8"
              onClick={scrollToDemo}
            >
              {featuresT.cta}
            </Button>
          </motion.div>

          <div className="lg:col-span-8">
            <div className="grid sm:grid-cols-2 gap-5">
              {featuresT.cards.map((card, index) => {
                const Icon = iconMap[card.iconKey]
                return (
                  <motion.div
                    key={card.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.45, delay: index * 0.08 }}
                  >
                    <Card className="h-full border border-gray-100 rounded-2xl bg-white shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                      <CardContent className="p-6 md:p-7">
                        <div className="mb-5 flex items-center justify-between">
                          <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-[#3eab35]/10 text-[#2f8a29]">
                            <Icon className="h-6 w-6" />
                          </span>
                          <span className="text-xs font-semibold tracking-wide text-gray-400 uppercase">
                            0{index + 1}
                          </span>
                        </div>

                        <h3 className="text-xl font-semibold text-gray-900 mb-2.5">
                          {card.title}
                        </h3>
                        <p className="text-gray-600 leading-relaxed">
                          {card.desc}
                        </p>
                      </CardContent>
                    </Card>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </AnimatedSection>
  )
}


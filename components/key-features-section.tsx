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
  const { t } = useI18n()
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
    <AnimatedSection id="analyse" className="py-24 bg-gray-50">
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
              src="/application_datasheet.png"
              alt="Interface Prosensor pour le contrôle de la température"
              fill
              className="object-contain"
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
              {keyT.heading} <span className="text-[#3eab35]">{keyT.heading_highlight}</span> {keyT.connector} GreenSensor
            </motion.h2>
            <motion.div 
              className="space-y-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <p className="text-gray-600 text-lg">
                {keyT.paragraph}
              </p>
            </motion.div>
            <motion.div 
              className="grid grid-cols-2 md:grid-cols-4 gap-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              {keyT.items.map((item, index) => {
                const Icon = iconMap[item.iconKey]
                return (
                <motion.div
                  key={item.label}
                  className="flex flex-col items-center gap-3 text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                >
                  <div
                    className={`w-12 h-12 rounded-full flex items-center justify-center ${
                      item.highlight
                        ? "bg-[#3eab35] text-white"
                        : "bg-gray-100 text-gray-600"
                    }`}
                  >
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="text-sm font-medium text-gray-700">
                    {item.label}
                  </span>
                </motion.div>
                )
              })}
            </motion.div>
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
            {keyT.cta}
          </Button>
        </motion.div>
      </div>
    </AnimatedSection>
  )
}


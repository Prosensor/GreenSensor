"use client"

import Image from "next/image"
import { Check } from 'lucide-react'
import { AnimatedSection } from "./animated-section"
import { motion } from "framer-motion"
import { useI18n } from "@/i18n/i18n-provider"

const avantages: never[] = []

export function RunSection() {
  const { t } = useI18n()
  const runT = (t as any).run as {
    heading_line1: string
    heading_highlight: string
    heading_line2: string
    paragraph_line1: string
    paragraph_line2: string
    advantages: string[]
    image_alt: string
  }
  return (
    <AnimatedSection id="specifications" className="py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <motion.h2 
              className="text-4xl font-bold tracking-tight text-gray-900"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              {runT.heading_line1} <span className="text-[#3eab35]">{runT.heading_highlight}</span> {runT.heading_line2}
              <br />
              
            </motion.h2>
            <motion.p 
              className="text-gray-600 text-lg max-w-xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              {runT.paragraph_line1}
              {" "}
              {runT.paragraph_line2}
            </motion.p>
            <motion.ul 
              className="space-y-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              {runT.advantages.map((avantage, index) => (
                <motion.li 
                  key={index} 
                  className="flex items-center gap-3"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                >
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#3eab35] flex items-center justify-center">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-gray-700">{avantage}</span>
                </motion.li>
              ))}
            </motion.ul>
          </div>
          <motion.div 
            className="relative h-[600px]"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Image
              src="/sonde-action.jpg"
              alt={runT.image_alt}
              fill
              className="rounded-lg shadow-xl object-cover"
            />
          </motion.div>
        </div>
      </div>
    </AnimatedSection>
  )
}


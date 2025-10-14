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
import { useI18n } from "@/i18n/i18n-provider"

const faqList: never[] = []

export function FaqSection() {
  const { t } = useI18n()
  const faqT = (t as any).faq as {
    heading: string
    heading_highlight: string
    items: { q: string; a: string }[]
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
              alt="Sonde Prosensor en action"
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
              {faqT.heading} <span className="text-[#3eab35]">{faqT.heading_highlight}</span>
            </motion.h2>
            <Accordion type="single" collapsible className="w-full">
              {faqT.items.map((faq, index) => (
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
                        {faq.q}
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="px-6 py-4 text-gray-600">
                      {faq.a}
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
            {faqT.cta}
          </Button>
        </motion.div>
      </div>
    </AnimatedSection>
  )
}


"use client"

import Image from "next/image"
import { Thermometer, BarChart, Bell, Lock } from 'lucide-react'
import { AnimatedSection } from "./animated-section"
import { motion } from "framer-motion"

const fonctionnalites = [
  {
    icon: Thermometer,
    titre: "Mesure Précise",
  },
  {
    icon: BarChart,
    titre: "Analyse en Temps Réel",
  },
  {
    icon: Bell,
    titre: "Alertes Personnalisées",
  },
  {
    icon: Lock,
    titre: "Sécurité des Données",
    highlight: true,
  },
]

export function KeyFeaturesSection() {
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
              src="/visu.jpg"
              alt="Interface ProSensor pour le contrôle de la température"
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
              Fonctionnalités <span className="text-[#3eab35]">Clés</span> de ProSensor
            </motion.h2>
            <motion.div 
              className="space-y-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <p className="text-gray-600 text-lg">
                Conceptualisez rapidement des portails de gestion fiables pour votre production. 
                Faites évoluer de manière interactive vos modèles synergiques plutôt que de vous 
                contenter d'initiatives révolutionnaires. Optimisez de manière unique la qualité 
                de vos produits grâce à nos vecteurs de contrôle omniprésents.
              </p>
            </motion.div>
            <motion.div 
              className="grid grid-cols-2 md:grid-cols-4 gap-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              {fonctionnalites.map((fonctionnalite, index) => (
                <motion.div
                  key={fonctionnalite.titre}
                  className="flex flex-col items-center gap-3 text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                >
                  <div
                    className={`w-12 h-12 rounded-full flex items-center justify-center ${
                      fonctionnalite.highlight
                        ? "bg-[#3eab35] text-white"
                        : "bg-gray-100 text-gray-600"
                    }`}
                  >
                    <fonctionnalite.icon className="w-6 h-6" />
                  </div>
                  <span className="text-sm font-medium text-gray-700">
                    {fonctionnalite.titre}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </AnimatedSection>
  )
}


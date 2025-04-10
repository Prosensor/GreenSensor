"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Thermometer, Bell, ShieldCheck, BarChart } from 'lucide-react'
import { AnimatedSection } from "./animated-section"
import { motion } from "framer-motion"

const fonctionnalites = [
  {
    icon: Thermometer,
    titre: "Mesure Précise",
    description: "Obtenez des lectures de température précises au degré près pour vos compotes.",
  },
  {
    icon: Bell,
    titre: "Alertes Personnalisées",
    description: "Configurez des notifications pour être informé lorsque la température idéale est atteinte.",
  },
  {
    icon: ShieldCheck,
    titre: "Sécurité Alimentaire",
    description: "Assurez-vous que vos compotes atteignent la température de sécurité requise.",
  },
  {
    icon: BarChart,
    titre: "Analyse des Données",
    description: "Visualisez et analysez les tendances de température pour optimiser votre production.",
  },
]

export function FeaturesSection() {
  return (
    <AnimatedSection className="py-24 bg-gray-50" id="fonctionnalites">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl font-bold mb-4">
            Fonctionnalités clés pour une <span className="text-[#3eab35]">Production Intelligente</span>
          </h2>
          <p className="text-gray-600 text-lg">
            Découvrez comment ProSensor révolutionne le contrôle de la température dans la production de compotes
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {fonctionnalites.map((fonctionnalite, index) => (
            <motion.div
              key={fonctionnalite.titre}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-6 text-center">
                  <div className="mb-4 flex justify-center">
                    <div className="w-16 h-16 rounded-full bg-[#d5f5e3] flex items-center justify-center">
                      <fonctionnalite.icon className="w-8 h-8 text-[#186a3b]" />
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{fonctionnalite.titre}</h3>
                  <p className="text-gray-600">{fonctionnalite.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  )
}


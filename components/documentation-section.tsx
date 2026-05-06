"use client"

import Link from "next/link"
import { AnimatedSection } from "./animated-section"
import { motion } from "framer-motion"
import { useI18n } from "@/i18n/i18n-provider"
import { BookOpen, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function DocumentationSection() {
  const { t, language } = useI18n()
  const isFr = language === "fr"
  const isEs = language === "es"
  const isDe = language === "de"
  const isPt = language === "pt"
  const isRo = language === "ro"

  const heading = isFr ? "Documentation technique" : isEs ? "Documentación técnica" : isDe ? "Technische Dokumentation" : isPt ? "Documentação técnica" : isRo ? "Documentație tehnică" : "Technical documentation"
  const intro = isFr
    ? "Guide complet pour connecter la passerelle LoRa au réseau, configurer l’interface Web et dépanner. Destiné aux clients GreenSensor."
    : isEs
    ? "Guía completa para conectar la pasarela LoRa a la red, configurar la interfaz web y resolver incidencias. Pensada para clientes GreenSensor."
    : isDe
    ? "Vollständige Anleitung zur Verbindung des LoRa-Gateways mit dem Netzwerk, zur Konfiguration der Weboberfläche und zur Fehlerbehebung. Für GreenSensor-Kunden."
    : isPt
    ? "Guia completo para ligar a gateway LoRa à rede, configurar a interface Web e resolver problemas. Destinado a clientes GreenSensor."
    : isRo
    ? "Ghid complet pentru conectarea gateway-ului LoRa la rețea, configurarea interfeței Web și depanare. Pentru clienții GreenSensor."
    : "Complete guide for connecting the LoRa gateway to the network, configuring the Web interface and troubleshooting. For GreenSensor customers."
  const cta = isFr ? "Consulter la documentation" : isEs ? "Ver documentación" : isDe ? "Dokumentation ansehen" : isPt ? "Ver documentação" : isRo ? "Vezi documentația" : "View documentation"
  const badge = isFr ? "Ressources" : isEs ? "Recursos" : isDe ? "Ressourcen" : isPt ? "Recursos" : isRo ? "Resurse" : "Resources"
  const includesTitle = isFr ? "Ce que vous trouverez" : isEs ? "Qué encontrarás" : isDe ? "Was Sie finden" : isPt ? "O que encontrará" : isRo ? "Ce veți găsi" : "What you will find"
  const includes = isFr
    ? [
        "Connexion passerelle (WiFi / Ethernet)",
        "Configuration de l'interface Web UI",
        "Indicateurs LED et états système",
        "Guide de dépannage pas à pas",
      ]
    : isEs
    ? [
        "Conexión de pasarela (WiFi / Ethernet)",
        "Configuración de la interfaz Web UI",
        "Indicadores LED y estados del sistema",
        "Guía de resolución paso a paso",
      ]
    : isDe
    ? [
        "Gateway-Verbindung (WLAN / Ethernet)",
        "Konfiguration der Web-Oberfläche",
        "LED-Anzeigen und Systemzustände",
        "Schritt-für-Schritt-Fehlerbehebung",
      ]
    : isPt
    ? [
        "Ligação da gateway (WiFi / Ethernet)",
        "Configuração da interface Web UI",
        "Indicadores LED e estados do sistema",
        "Guia de resolução passo a passo",
      ]
    : isRo
    ? [
        "Conectare gateway (WiFi / Ethernet)",
        "Configurarea interfeței Web UI",
        "Indicatori LED și stări de sistem",
        "Ghid de depanare pas cu pas",
      ]
    : [
        "Gateway connection (WiFi / Ethernet)",
        "Web UI configuration",
        "LED indicators and system states",
        "Step-by-step troubleshooting guide",
      ]

  return (
    <AnimatedSection id="documentation" className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
          <motion.div
            className="lg:col-span-7 rounded-3xl border border-gray-200 bg-white p-6 md:p-8 lg:p-10 shadow-sm"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-flex items-center rounded-full border border-[#3eab35]/20 bg-[#3eab35]/10 px-3 py-1 text-xs font-semibold tracking-wide text-[#2f8a29] mb-5">
              {badge}
            </span>
            <div className="flex items-center gap-3 mb-5">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-[#3eab35] text-white shadow-lg">
                <BookOpen className="h-6 w-6" />
              </div>
              <motion.h2
                className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                {heading}
              </motion.h2>
            </div>
            <motion.p
              className="text-gray-600 text-base md:text-lg leading-relaxed max-w-2xl"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              {intro}
            </motion.p>
          </motion.div>

          <motion.div
            className="lg:col-span-5 rounded-3xl border border-gray-200 bg-white p-6 md:p-7 shadow-sm"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.1 }}
          >
            <p className="text-sm font-semibold uppercase tracking-wide text-gray-500 mb-4">
              {includesTitle}
            </p>
            <ul className="space-y-3 mb-7">
              {includes.map((item) => (
                <li key={item} className="flex items-start gap-3 rounded-lg border border-gray-200 px-3 py-2.5 bg-gray-50/70">
                  <span className="mt-1 h-2 w-2 rounded-full bg-[#3eab35] shrink-0" />
                  <span className="text-sm md:text-base text-gray-700 leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>

            <Button
              asChild
              className="w-full bg-[#3eab35] hover:bg-[#2f8a29] text-white gap-2 rounded-full"
            >
              <Link href="/documentation">
                {cta}
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </AnimatedSection>
  )
}

"use client"


import Link from "next/link"
import { Thermometer } from 'lucide-react'
import { Facebook, Twitter, LinkedinIcon as LinkedIn, Youtube } from 'lucide-react'
import { DottedWorldMap } from "./dotted-world-map"
import Image from "next/image"
import { useCallback } from "react"
import { useI18n } from "@/i18n/i18n-provider"


const liensFooter = [
  { titre: "À propos", href: "#" },
  { titre: "Nous contacter", href: "#" },
  { titre: "Politique de confidentialité", href: "#" },
  { titre: "Conditions générales", href: "#" },
]

const liensSociaux = [
  { icon: Facebook, href: "#" },
  { icon: Twitter, href: "#" },
  { icon: LinkedIn, href: "#" },
  { icon: Youtube, href: "#" },
]

export function SiteFooter() {
  const { t } = useI18n()
  const ft = (t as any).footer as {
    description: string
    useful_links: string
    legal_info: string
    nav: { home: string; features: string; specs: string; analytics: string; faq: string; contact: string }
    legal: { mentions: string; privacy: string; terms: string; prosensor_site: string }
    copyright: string
  }
  const scrollToSection = useCallback((e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  return (
    <footer className="bg-gray-900 text-gray-400">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Logo et Description */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-2">
              <Image
                src="/GreenSensor_Logo.png"
                alt="Green Sensor Logo"
                width={150}
                height={80}
              />
            </Link>
            <p className="text-sm">
              {ft.description}
            </p>
          </div>

          {/* Liens utiles */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">{ft.useful_links}</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/#hero" className="hover:text-[#3eab35] transition-colors">{ft.nav.home}</Link>
              </li>
              <li>
                <Link href="/#fonctionnalites" className="hover:text-[#3eab35] transition-colors">{ft.nav.features}</Link>
              </li>
              <li>
                <Link href="/#specifications" className="hover:text-[#3eab35] transition-colors">{ft.nav.specs}</Link>
              </li>
              <li>
                <Link href="/#analyse" className="hover:text-[#3eab35] transition-colors">{ft.nav.analytics}</Link>
              </li>
              <li>
                <Link href="/#faq" className="hover:text-[#3eab35] transition-colors">{ft.nav.faq}</Link>
              </li>
              <li>
                <Link href="/#demo" className="hover:text-[#3eab35] transition-colors">{ft.nav.contact}</Link>
              </li>
            </ul>
          </div>

          {/* Liens légaux */}
          <div className="space-y-2">
            <h3 className="text-lg font-semibold text-white">{ft.legal_info}</h3>
            <Link href="/mentions-legales" className="hover:text-[#3eab35] transition-colors block">{ft.legal.mentions}</Link>
            <Link href="/politique-confidentialite" className="hover:text-[#3eab35] transition-colors block">{ft.legal.privacy}</Link>
            <Link href="/cgu" className="hover:text-[#3eab35] transition-colors block">{ft.legal.terms}</Link>
            <Link href="https://www.prosensor.fr/" className="hover:text-[#3eab35] transition-colors block">{ft.legal.prosensor_site}</Link>
            <div className="mt-4">
              <Image
                src="/prosensor-hq.jpg"
                alt="Prosensor, siège social"
                width={240}
                height={120}
                className="rounded-md object-cover border border-gray-800"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <p className="text-sm text-center">
            {ft.copyright}
          </p>
        </div>
      </div>
    </footer>
  )
}


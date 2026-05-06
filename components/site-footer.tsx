"use client"

import Link from "next/link"
import Image from "next/image"
import { useI18n } from "@/i18n/i18n-provider"

export function SiteFooter() {
  const { t, language } = useI18n()
  const ft = (t as any).footer as {
    description: string
    useful_links: string
    legal_info: string
    nav: { home: string; features: string; specs: string; analytics: string; faq: string; doc: string; contact: string }
    legal: { mentions: string; privacy: string; terms: string; prosensor_site: string }
    hours: { title: string; weekdays: string; weekend: string }
    copyright: string
  }

  return (
    <footer className="bg-[#0f1720] text-gray-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-12 gap-10 xl:gap-8">
          <div className="xl:col-span-4 space-y-5">
            <Link href="/" className="inline-flex items-center">
              <Image
                src="/2025_LogoGreenSensor_BlancVert.png"
                alt="Green Sensor Logo"
                width={150}
                height={80}
              />
            </Link>
            <p className="text-sm leading-relaxed text-gray-400 max-w-sm">
              {ft.description}
            </p>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-3.5 flex items-center gap-4 max-w-sm">
              <Image
                src="/Nouveaux batiment.jpg"
                alt="Prosensor, siège social"
                width={88}
                height={66}
                className="rounded-lg object-cover border border-white/10 shadow-sm"
              />
              <div>
                <p className="text-xs text-gray-400">
                  {language === 'fr' ? 'Une marque de' : language === 'es' ? 'Una marca de' : language === 'de' ? 'Eine Marke von' : language === 'pt' ? 'Uma marca da' : language === 'ro' ? 'Un brand al' : 'A brand of'}
                </p>
                <p className="text-white font-semibold">
                  <Link href="https://www.prosensor.fr/" target="_blank" rel="noopener noreferrer" className="hover:text-[#6fdc63] transition-colors">
                    Prosensor
                  </Link>
                </p>
                <p className="text-xs text-gray-400">
                  {language === 'fr' ? 'Fabricant depuis 1989' : language === 'es' ? 'Fabricante desde 1989' : language === 'de' ? 'Hersteller seit 1989' : language === 'pt' ? 'Fabricante desde 1989' : language === 'ro' ? 'Producător din 1989' : 'Manufacturer since 1989'}
                </p>
              </div>
            </div>
          </div>

          <div className="xl:col-span-3">
            <h3 className="text-base font-semibold text-white mb-4">{ft.useful_links}</h3>
            <ul className="space-y-2.5 text-sm">
              <li><Link href="/#hero" className="hover:text-[#6fdc63] transition-colors">{ft.nav.home}</Link></li>
              <li><Link href="/#fonctionnalites" className="hover:text-[#6fdc63] transition-colors">{ft.nav.features}</Link></li>
              <li><Link href="/#specifications" className="hover:text-[#6fdc63] transition-colors">{ft.nav.specs}</Link></li>
              <li><Link href="/#analyse" className="hover:text-[#6fdc63] transition-colors">{ft.nav.analytics}</Link></li>
              <li><Link href="/#faq" className="hover:text-[#6fdc63] transition-colors">{ft.nav.faq}</Link></li>
              <li><Link href="/documentation" className="hover:text-[#6fdc63] transition-colors">{ft.nav.doc}</Link></li>
              <li><Link href="/#demo" className="hover:text-[#6fdc63] transition-colors">{ft.nav.contact}</Link></li>
            </ul>
          </div>

          <div className="xl:col-span-3">
            <h3 className="text-base font-semibold text-white mb-4">{ft.legal_info}</h3>
            <div className="space-y-2.5 text-sm">
              <Link href="/mentions-legales" className="hover:text-[#6fdc63] transition-colors block">{ft.legal.mentions}</Link>
              <Link href="/politique-confidentialite" className="hover:text-[#6fdc63] transition-colors block">{ft.legal.privacy}</Link>
              <Link href="/cgu" className="hover:text-[#6fdc63] transition-colors block">{ft.legal.terms}</Link>
            </div>
          </div>

          <div className="xl:col-span-2">
            <h3 className="text-base font-semibold text-white mb-4">{ft.hours.title}</h3>
            <div className="space-y-2 text-sm text-gray-400">
              <p>{ft.hours.weekdays}</p>
              <p>{ft.hours.weekend}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <p className="text-sm text-center text-gray-400">
            {ft.copyright}
          </p>
        </div>
      </div>
    </footer>
  )
}


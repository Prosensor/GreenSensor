"use client"

import Link from "next/link"
import Image from "next/image"
import { Linkedin } from "lucide-react"
import { useI18n } from "@/i18n/i18n-provider"
import { useHomeCopy } from "@/i18n/home-copy"
import { Container } from "@/components/ui/container"

const linkClass = "text-sm leading-snug text-mint transition-colors hover:text-white hover:underline"
const headingClass = "font-heading text-sm font-bold uppercase tracking-[0.02em] text-white"

/** Pied de page vert très foncé, avec le logo GreenSensor et la mention de la marque mère. */
export function SiteFooter() {
  const { t } = useI18n()
  const copy = useHomeCopy()
  const ft = t.footer

  const navLinks = [
    { href: "/", label: ft.nav.home },
    { href: "/articles", label: ft.nav.articles },
    { href: "/faq", label: ft.nav.faq },
    { href: "/documentation", label: ft.nav.doc },
    { href: "/contact", label: ft.nav.contact },
  ]

  return (
    <footer className="on-dark bg-forest-950 text-mint">
      <Container className="pb-8 pt-12 lg:pt-[60px]">
        <div className="grid gap-10 md:grid-cols-2 xl:flex xl:items-start xl:justify-between xl:gap-12">
          <div className="flex max-w-[340px] flex-col gap-5 xl:w-[340px] xl:shrink-0">
            <Link href="/" className="w-fit" aria-label="GreenSensor">
              <Image src="/2025_LogoGreenSensor_BlancVert.png" alt="GreenSensor" width={150} height={80} className="h-[60px] w-auto" />
            </Link>
            <p className="text-sm leading-[1.5] text-mint">{ft.description}</p>
            <a
              href="https://www.linkedin.com/company/green-sensor/posts/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn GreenSensor"
              className="flex size-10 items-center justify-center rounded-full border border-white/25 text-mint transition-colors hover:border-white hover:text-white"
            >
              <Linkedin className="size-5" aria-hidden="true" />
            </a>
            <div className="flex flex-col gap-2 border-t border-white/15 pt-5">
              <p className="text-xs text-mint">{copy.brandOf}</p>
              <Link
                href="https://www.prosensor.fr/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-fit"
                aria-label="Prosensor"
              >
                <Image src="/logo-prosensor-white.png" alt="Prosensor" width={724} height={179} className="h-[43px] w-auto" />
              </Link>
              <p className="text-xs text-mint">{copy.since}</p>
            </div>
          </div>

          <nav aria-label={ft.useful_links}>
            <h2 className={headingClass}>{ft.useful_links}</h2>
            <ul className="mt-4 flex flex-col gap-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className={linkClass}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label={ft.legal_info}>
            <h2 className={headingClass}>{ft.legal_info}</h2>
            <ul className="mt-4 flex flex-col gap-3">
              <li>
                <Link href="/mentions-legales" className={linkClass}>
                  {ft.legal.mentions}
                </Link>
              </li>
              <li>
                <Link href="/politique-confidentialite" className={linkClass}>
                  {ft.legal.privacy}
                </Link>
              </li>
              <li>
                <Link href="/cgu" className={linkClass}>
                  {ft.legal.terms}
                </Link>
              </li>
            </ul>
          </nav>

          <div>
            <h2 className={headingClass}>{ft.hours.title}</h2>
            <div className="mt-4 flex flex-col gap-3 text-sm text-mint">
              <p>{ft.hours.weekdays}</p>
              <p>{ft.hours.weekend}</p>
            </div>
          </div>
        </div>
      </Container>

      <div className="border-t border-white/15">
        <Container className="py-5">
          <p className="text-sm text-mint">{ft.copyright}</p>
        </Container>
      </div>
    </footer>
  )
}

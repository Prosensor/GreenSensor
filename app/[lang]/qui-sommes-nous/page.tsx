import type { Metadata } from "next"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { MobileCta } from "@/components/mobile-cta"
import { AboutPageContent } from "@/components/about/about-page-content"
import { aboutPageCopy } from "@/i18n/about-page"
import { isLang } from "@/lib/i18n-routing"
import { pageMetadata } from "@/lib/seo"

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params
  if (!isLang(lang)) return {}
  const c = aboutPageCopy[lang]
  return pageMetadata(
    lang,
    "/qui-sommes-nous",
    { title: c.seoTitle, description: c.seoDescription },
    { images: [{ url: "https://greensensor.fr/usine-prosensor.jpg", width: 1792, height: 1024, alt: c.photoAlt }] },
  )
}

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main id="main" className="flex-1">
        <AboutPageContent />
      </main>
      <SiteFooter />
      <MobileCta />
    </div>
  )
}

import { LiveHero } from "@/components/live-hero"
import { TrustBand } from "@/components/trust-band"
import { ChallengeSection } from "@/components/challenge-section"
import { ChainSection } from "@/components/chain-section"
import { CurveSection } from "@/components/curve-section"
import { ReportSection } from "@/components/report-section"
import { SpecsSection } from "@/components/specs-section"
import { PlatformSection } from "@/components/platform-section"
import { WhySection } from "@/components/why-section"
import { FaqSection } from "@/components/faq-section"
import { DemoSection } from "@/components/demo-section"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { MobileCta } from "@/components/mobile-cta"
import type { Metadata } from "next"
import { pageSeo } from "@/i18n/page-seo"
import { isLang } from "@/lib/i18n-routing"
import { pageMetadata } from "@/lib/seo"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main id="main" className="flex-1">
        <LiveHero />
        <TrustBand />
        <ChallengeSection />
        <ChainSection />
        <CurveSection />
        <ReportSection />
        <SpecsSection />
        <PlatformSection />
        <WhySection />
        <FaqSection />
        <DemoSection />
      </main>
      <SiteFooter />
      <MobileCta />
    </div>
  )
}

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params
  if (!isLang(lang)) return {}
  return pageMetadata(lang, "/", pageSeo.home[lang])
}

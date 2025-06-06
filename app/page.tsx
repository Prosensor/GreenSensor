"use client"

import { SiteHeader } from "@/components/site-header"
import { HeroSection } from "@/components/hero-section"
import { FeaturesSection } from "@/components/features-section"
import { RunSection } from "@/components/run-section"
import { KeyFeaturesSection } from "@/components/key-features-section"
import { DownloadSection } from "@/components/download-section"
import { FaqSection } from "@/components/faq-section"
import { DemoSection } from "@/components/demo-section"
import { SiteFooter } from "@/components/site-footer"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <SiteHeader />
      <main className="flex-1">
        <HeroSection />
        <FeaturesSection />
        <RunSection />
        <KeyFeaturesSection />
        <DownloadSection />
        <FaqSection />
        <DemoSection />
      </main>
      <SiteFooter />
    </div>
  )
}


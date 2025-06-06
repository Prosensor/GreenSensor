import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Politique de confidentialité - GreenSensor",
  description: "Découvrez la politique de confidentialité de GreenSensor : gestion des données, droits RGPD, contact et sécurité.",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Politique de confidentialité - GreenSensor",
    description: "Découvrez la politique de confidentialité de GreenSensor : gestion des données, droits RGPD, contact et sécurité.",
    url: "https://greensensor.fr/politique-confidentialite",
    siteName: "GreenSensor",
    locale: "fr_FR",
    type: "article",
  },
  other: {
    "script:type": "application/ld+json",
    "script:innerHTML": JSON.stringify({
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "Politique de confidentialité - GreenSensor",
      "description": "Découvrez la politique de confidentialité de GreenSensor : gestion des données, droits RGPD, contact et sécurité.",
      "url": "https://greensensor.fr/politique-confidentialite",
      "publisher": {
        "@type": "Organization",
        "name": "GreenSensor",
        "url": "https://greensensor.fr"
      }
    })
  }
}

export default function PolitiqueConfidentialite() {
  return (
    <>
      <SiteHeader />
      <main className="container mx-auto max-w-2xl py-16 px-4">
        <h1 className="text-3xl font-bold mb-6">Politique de confidentialité</h1>
        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Données collectées</h2>
          <p>
            Nous collectons uniquement les informations nécessaires à la prise de contact et à la gestion des demandes (nom, email, téléphone, entreprise, message).
          </p>
        </section>
        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Utilisation des données</h2>
          <p>
            Les données collectées sont utilisées exclusivement pour répondre à vos demandes et ne sont jamais transmises à des tiers sans votre consentement.
          </p>
        </section>
        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Conservation des données</h2>
          <p>
            Vos données sont conservées pendant la durée nécessaire au traitement de votre demande, puis supprimées ou archivées de façon sécurisée.
          </p>
        </section>
        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Droits des utilisateurs</h2>
          <p>
            Conformément au RGPD, vous disposez d'un droit d'accès, de rectification, de suppression et d'opposition concernant vos données. Pour exercer ces droits, contactez-nous à <a href="mailto:info@prosensor.com" className="text-[#3eab35] underline">info@prosensor.com</a>.
          </p>
        </section>
        <section>
          <h2 className="text-xl font-semibold mb-2">Contact</h2>
          <p>
            Pour toute question relative à la confidentialité de vos données, vous pouvez nous écrire à <a href="mailto:info@prosensor.com" className="text-[#3eab35] underline">info@prosensor.com</a>.
          </p>
        </section>
      </main>
      <SiteFooter />
    </>
  )
} 
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Mentions légales - GreenSensor",
  description: "Consultez les mentions légales du site GreenSensor : éditeur, hébergeur, propriété intellectuelle, responsabilité et contact.",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Mentions légales - GreenSensor",
    description: "Consultez les mentions légales du site GreenSensor : éditeur, hébergeur, propriété intellectuelle, responsabilité et contact.",
    url: "https://greensensor.fr/mentions-legales",
    siteName: "GreenSensor",
    locale: "fr_FR",
    type: "article",
  },
  other: {
    "script:type": "application/ld+json",
    "script:innerHTML": JSON.stringify({
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "Mentions légales - GreenSensor",
      "description": "Consultez les mentions légales du site GreenSensor : éditeur, hébergeur, propriété intellectuelle, responsabilité et contact.",
      "url": "https://greensensor.fr/mentions-legales",
      "publisher": {
        "@type": "Organization",
        "name": "GreenSensor",
        "url": "https://greensensor.fr"
      }
    })
  }
}

export default function MentionsLegales() {
  return (
    <>
      <SiteHeader />
      <main className="container mx-auto max-w-2xl py-16 px-4">
        <h1 className="text-3xl font-bold mb-6">Mentions légales</h1>
        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Éditeur du site</h2>
          <p>
            <strong> Greensensor – l’innovation signée Prosensor </strong><br />
            info@prosensor.com<br />
            5 rue Maud Fontenoy, 57140 Norroy-le-Veneur, France<br />
            RCS : Metz 451 740 187
          </p>
        </section>
        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Hébergement</h2>
          <p>
            LWS (Ligne Web Services)<br />
            10, RUE PENTHIEVRE, 75008 PARIS, FRANCE<br />
            www.lws.fr
          </p>
        </section>
        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Propriété intellectuelle</h2>
          <p>
            L'ensemble du contenu du site GreenSensor (textes, images, graphismes, logo, icônes, etc.) est la propriété exclusive de GreenSensor, sauf mention contraire. Toute reproduction, représentation, modification, publication, adaptation de tout ou partie des éléments du site, quel que soit le moyen ou le procédé utilisé, est interdite, sauf autorisation écrite préalable.
          </p>
        </section>
        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Responsabilité</h2>
          <p>
            GreenSensor s'efforce de fournir sur le site des informations aussi précises que possible. Toutefois, il ne pourra être tenu responsable des omissions, des inexactitudes et des carences dans la mise à jour.
          </p>
        </section>
        <section>
          <h2 className="text-xl font-semibold mb-2">Contact</h2>
          <p>
            Pour toute question, vous pouvez nous contacter à l'adresse suivante : <a href="mailto:info@prosensor.com" className="text-[#3eab35] underline">info@prosensor.com</a>
          </p>
        </section>
      </main>
      <SiteFooter />
    </>
  )
} 
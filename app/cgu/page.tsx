import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Conditions Générales d'Utilisation - GreenSensor",
  description: "Consultez les conditions générales d'utilisation du site GreenSensor : accès, propriété intellectuelle, responsabilité, droit applicable.",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Conditions Générales d'Utilisation - GreenSensor",
    description: "Consultez les conditions générales d'utilisation du site GreenSensor : accès, propriété intellectuelle, responsabilité, droit applicable.",
    url: "https://greensensor.fr/cgu",
    siteName: "GreenSensor",
    locale: "fr_FR",
    type: "article",
  },
  other: {
    "script:type": "application/ld+json",
    "script:innerHTML": JSON.stringify({
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "Conditions Générales d'Utilisation - GreenSensor",
      "description": "Consultez les conditions générales d'utilisation du site GreenSensor : accès, propriété intellectuelle, responsabilité, droit applicable.",
      "url": "https://greensensor.fr/cgu",
      "publisher": {
        "@type": "Organization",
        "name": "GreenSensor",
        "url": "https://greensensor.fr"
      }
    })
  }
}

export default function CGU() {
  return (
    <>
      <SiteHeader />
      <main className="container mx-auto max-w-2xl py-16 px-4">
        <h1 className="text-3xl font-bold mb-6">Conditions Générales d'Utilisation</h1>
        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Objet</h2>
          <p>
            Les présentes conditions générales d'utilisation (CGU) ont pour objet de définir les modalités et conditions d'accès et d'utilisation du site GreenSensor.
          </p>
        </section>
        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Accès au site</h2>
          <p>
            Le site est accessible gratuitement à tout utilisateur disposant d'un accès à Internet. Tous les frais relatifs à l'accès au service sont à la charge de l'utilisateur.
          </p>
        </section>
        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Propriété intellectuelle</h2>
          <p>
            Tous les éléments du site (textes, images, logos, icônes, etc.) sont protégés par le droit d'auteur et sont la propriété exclusive de GreenSensor, sauf mention contraire.
          </p>
        </section>
        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Responsabilité</h2>
          <p>
            GreenSensor ne saurait être tenu responsable des dommages directs ou indirects pouvant résulter de l'accès ou de l'utilisation du site.
          </p>
        </section>
        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Évolution des CGU</h2>
          <p>
            GreenSensor se réserve le droit de modifier à tout moment les présentes CGU. Les utilisateurs sont invités à les consulter régulièrement.
          </p>
        </section>
        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Droit applicable</h2>
          <p>
            Les présentes CGU sont soumises au droit français. En cas de litige, les tribunaux français seront seuls compétents.
          </p>
        </section>
        <section>
          <h2 className="text-xl font-semibold mb-2">Contact</h2>
          <p>
            Pour toute question concernant les CGU, contactez-nous à <a href="mailto:contact@greensensor.fr" className="text-[#3eab35] underline">contact@greensensor.fr</a>.
          </p>
        </section>
      </main>
      <SiteFooter />
    </>
  )
} 
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

export default function MentionsLegales() {
  return (
    <>
      <SiteHeader />
      <main className="container mx-auto max-w-2xl py-16 px-4">
        <h1 className="text-3xl font-bold mb-6">Mentions légales</h1>
        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Éditeur du site</h2>
          <p>
            <strong>GreenSensor</strong><br />
            contact@greensensor.fr<br />
            123 rue de l'Innovation, 75000 Paris, France
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
            Pour toute question, vous pouvez nous contacter à l'adresse suivante : <a href="mailto:contact@greensensor.fr" className="text-[#3eab35] underline">contact@greensensor.fr</a>
          </p>
        </section>
      </main>
      <SiteFooter />
    </>
  )
} 
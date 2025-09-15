import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "CGU GreenSensor - Conditions Générales d'Utilisation | ProSensor",
  description: "Consultez les conditions générales d'utilisation complètes du site GreenSensor par ProSensor. Découvrez nos règles d'accès, propriété intellectuelle, responsabilité et droit applicable pour une utilisation transparente de nos services IoT.",
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
      <main className="container mx-auto max-w-4xl py-16 px-4">
        <div className="prose prose-lg max-w-none">
          <h1 className="text-4xl font-bold mb-8 text-gray-800">Conditions Générales d'Utilisation</h1>
          
          <div className="bg-blue-50 p-6 rounded-lg mb-8">
            <p className="text-gray-700 mb-0">
              <strong>Dernière mise à jour :</strong> Décembre 2024<br />
              <strong>Version :</strong> 1.0<br />
              <strong>Éditeur :</strong> ProSensor - GreenSensor
            </p>
          </div>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">1. Objet et champ d'application</h2>
            <p className="text-gray-700 mb-4">
              Les présentes conditions générales d'utilisation (CGU) régissent l'utilisation du site web GreenSensor, 
              propriété de ProSensor, société spécialisée dans les solutions IoT pour l'agriculture et l'environnement. 
              Ces conditions s'appliquent à tous les utilisateurs du site, qu'ils soient visiteurs occasionnels ou clients potentiels.
            </p>
            <p className="text-gray-700">
              Le site GreenSensor présente notre solution innovante de suivi intelligent du compostage par IoT, 
              incluant nos sondes de température connectées, notre plateforme cloud et nos services d'analyse de données.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">2. Accès et utilisation du site</h2>
            <p className="text-gray-700 mb-4">
              Le site GreenSensor est accessible gratuitement à tout utilisateur disposant d'un accès à Internet. 
              L'accès au site implique l'acceptation pleine et entière des présentes CGU.
            </p>
            <p className="text-gray-700 mb-4">
              L'utilisateur s'engage à utiliser le site de manière conforme à sa destination et à ne pas porter atteinte 
              aux droits de tiers ou à l'ordre public. Toute utilisation commerciale non autorisée est interdite.
            </p>
            <p className="text-gray-700">
              ProSensor se réserve le droit de suspendre ou d'interdire l'accès au site en cas de non-respect des présentes conditions.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">3. Propriété intellectuelle</h2>
            <p className="text-gray-700 mb-4">
              L'ensemble du contenu du site GreenSensor (textes, images, logos, icônes, graphismes, vidéos, 
              logiciels, bases de données, etc.) est protégé par le droit d'auteur et constitue la propriété exclusive de ProSensor.
            </p>
            <p className="text-gray-700 mb-4">
              Les marques "GreenSensor" et "ProSensor" ainsi que leurs logos sont des marques déposées. 
              Toute reproduction, représentation, modification, publication, adaptation de tout ou partie des éléments du site, 
              quel que soit le moyen ou le procédé utilisé, est interdite sans autorisation écrite préalable de ProSensor.
            </p>
            <p className="text-gray-700">
              Les technologies IoT développées par ProSensor, notamment nos algorithmes de traitement de données 
              et nos protocoles de communication, sont protégés par des brevets et secrets de fabrication.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">4. Responsabilité et garanties</h2>
            <p className="text-gray-700 mb-4">
              ProSensor s'efforce de fournir des informations exactes et à jour sur le site GreenSensor. 
              Cependant, nous ne pouvons garantir l'exactitude, la précision ou l'exhaustivité des informations diffusées.
            </p>
            <p className="text-gray-700 mb-4">
              L'utilisation du site se fait sous la responsabilité exclusive de l'utilisateur. ProSensor ne saurait être tenu responsable 
              des dommages directs ou indirects pouvant résulter de l'accès ou de l'utilisation du site, 
              notamment les pertes de données, les interruptions d'activité ou les préjudices commerciaux.
            </p>
            <p className="text-gray-700">
              Les informations techniques concernant nos solutions IoT sont données à titre indicatif et peuvent évoluer 
              selon les avancées technologiques et les retours clients.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">5. Données personnelles et confidentialité</h2>
            <p className="text-gray-700 mb-4">
              La collecte et le traitement des données personnelles sur le site GreenSensor sont régis par notre 
              <a href="/politique-confidentialite" className="text-[#3eab35] underline"> Politique de Confidentialité</a>, 
              conforme au Règlement Général sur la Protection des Données (RGPD).
            </p>
            <p className="text-gray-700">
              En utilisant le site, l'utilisateur consent au traitement de ses données personnelles dans les conditions 
              définies par notre politique de confidentialité.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">6. Liens externes et contenus tiers</h2>
            <p className="text-gray-700 mb-4">
              Le site GreenSensor peut contenir des liens vers des sites externes. ProSensor n'exerce aucun contrôle 
              sur ces sites et décline toute responsabilité quant à leur contenu ou leur politique de confidentialité.
            </p>
            <p className="text-gray-700">
              L'établissement de liens vers le site GreenSensor est autorisé sous réserve de ne pas porter atteinte 
              à l'image de ProSensor et de respecter les présentes CGU.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">7. Évolution des conditions</h2>
            <p className="text-gray-700 mb-4">
              ProSensor se réserve le droit de modifier les présentes CGU à tout moment pour s'adapter aux évolutions 
              légales, techniques ou commerciales. Les modifications entrent en vigueur dès leur publication sur le site.
            </p>
            <p className="text-gray-700">
              Il appartient à l'utilisateur de consulter régulièrement les CGU pour prendre connaissance des éventuelles modifications. 
              La poursuite de l'utilisation du site après modification vaut acceptation des nouvelles conditions.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">8. Droit applicable et juridiction</h2>
            <p className="text-gray-700 mb-4">
              Les présentes CGU sont soumises au droit français. En cas de litige, et après épuisement des voies amiables, 
              les tribunaux français seront seuls compétents.
            </p>
            <p className="text-gray-700">
              Conformément à la réglementation française, nous privilégions la résolution amiable des différends 
              et encourageons nos utilisateurs à nous contacter directement en cas de problème.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">9. Contact et support</h2>
            <p className="text-gray-700 mb-4">
              Pour toute question concernant les présentes CGU, nos solutions IoT ou notre entreprise, 
              vous pouvez nous contacter :
            </p>
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-gray-700 mb-2">
                <strong>ProSensor - GreenSensor</strong><br />
                Email : <a href="mailto:info@prosensor.com" className="text-[#3eab35] underline">info@prosensor.com</a><br />
                Adresse : 5 rue Maud Fontenoy, 57140 Norroy-le-Veneur, France<br />
                RCS : Metz 451 740 187
              </p>
            </div>
            <p className="text-gray-700 mt-4">
              Notre équipe technique est disponible pour répondre à vos questions sur nos solutions IoT 
              et vous accompagner dans vos projets de suivi du compostage.
            </p>
          </section>

          <div className="bg-green-50 p-6 rounded-lg mt-8">
            <h3 className="text-lg font-semibold mb-2 text-gray-800">Engagement Qualité</h3>
            <p className="text-gray-700 mb-0">
              ProSensor s'engage à fournir des solutions IoT de qualité pour l'agriculture durable. 
              Nos équipes travaillent continuellement à l'amélioration de nos technologies et services 
              pour répondre aux défis environnementaux actuels.
            </p>
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  )
} 
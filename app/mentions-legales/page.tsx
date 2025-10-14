import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Mentions Légales GreenSensor - Informations Éditeur et Hébergement | ProSensor",
  description: "Consultez les mentions légales complètes du site GreenSensor par ProSensor. Découvrez nos informations éditeur, hébergement, propriété intellectuelle et responsabilité pour une transparence totale sur nos services IoT.",
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
      <main className="container mx-auto max-w-4xl py-16 px-4">
        <div className="prose prose-lg max-w-none">
          <h1 className="text-4xl font-bold mb-8 text-gray-800">Mentions légales</h1>
          
          <div className="bg-blue-50 p-6 rounded-lg mb-8">
            <p className="text-gray-700 mb-0">
              <strong>Site web :</strong> GreenSensor - Sonde de température à Compost<br />
              <strong>Dernière mise à jour :</strong> Décembre 2024<br />
              <strong>Éditeur :</strong> ProSensor
            </p>
          </div>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">1. Éditeur du site</h2>
            <div className="bg-gray-50 p-6 rounded-lg mb-4">
              <p className="text-gray-700 mb-2">
                <strong>Raison sociale :</strong> ProSensor<br />
                <strong>Marque commerciale :</strong> GreenSensor<br />
                <strong>Email :</strong> <a href="mailto:info@prosensor.com" className="text-[#3eab35] underline">info@prosensor.com</a><br />
                <strong>Adresse :</strong> 5 rue Maud Fontenoy, 57140 Norroy-le-Veneur, France<br />
                <strong>RCS :</strong> Metz 451 740 187<br />
                <strong>SIRET :</strong> 451 740 187 00012<br />
                <strong>Code APE :</strong> 6201Z (Programmation informatique)
              </p>
            </div>
            <p className="text-gray-700 mb-4">
              ProSensor est une société française spécialisée dans le développement de solutions IoT pour l'agriculture et l'environnement. 
              Notre expertise technique nous permet de concevoir des systèmes innovants de suivi et d'analyse des processus naturels, 
              notamment dans le domaine du compostage.
            </p>
            <p className="text-gray-700">
              La marque GreenSensor représente notre solution phare de suivi intelligent du compostage par IoT, 
              intégrant des sondes de température connectées, une plateforme cloud sécurisée et des outils d'analyse avancés.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">2. Hébergement du site</h2>
            <div className="bg-gray-50 p-6 rounded-lg mb-4">
              <p className="text-gray-700 mb-2">
                <strong>Hébergeur :</strong> LWS (Ligne Web Services)<br />
                <strong>Adresse :</strong> 10, RUE PENTHIEVRE, 75008 PARIS, FRANCE<br />
                <strong>Site web :</strong> <a href="https://www.lws.fr" className="text-[#3eab35] underline" target="_blank" rel="noopener noreferrer">www.lws.fr</a><br />
                <strong>Téléphone :</strong> 01 77 62 30 03
              </p>
            </div>
            <p className="text-gray-700 mb-4">
              LWS est un hébergeur français reconnu pour la qualité de ses services et son engagement en faveur de la souveraineté numérique. 
              Le choix de cet hébergeur garantit la conformité de nos données avec la réglementation française et européenne.
            </p>
            <p className="text-gray-700">
              Nos serveurs sont situés en France, assurant ainsi une protection optimale des données de nos clients 
              et une performance optimale pour les utilisateurs français et européens.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">3. Propriété intellectuelle</h2>
            <p className="text-gray-700 mb-4">
              L'ensemble du contenu du site GreenSensor (textes, images, graphismes, logo, icônes, vidéos, 
              logiciels, bases de données, etc.) est la propriété exclusive de ProSensor, sauf mention contraire. 
              Toute reproduction, représentation, modification, publication, adaptation de tout ou partie des éléments du site, 
              quel que soit le moyen ou le procédé utilisé, est interdite, sauf autorisation écrite préalable.
            </p>
            <p className="text-gray-700 mb-4">
              Les marques "GreenSensor", "ProSensor" et leurs logos associés sont des marques déposées. 
              Toute utilisation non autorisée de ces marques est strictement interdite et peut faire l'objet de poursuites judiciaires.
            </p>
            <p className="text-gray-700 mb-4">
              Les technologies développées par ProSensor, notamment nos algorithmes de traitement de données IoT, 
              nos protocoles de communication sans fil et nos interfaces utilisateur, sont protégés par des brevets 
              et des secrets de fabrication. Ces innovations constituent le cœur de notre expertise technique.
            </p>
            <p className="text-gray-700">
              Les bases de données contenant les informations techniques sur nos solutions IoT sont également protégées 
              par le droit sui generis des bases de données, conformément à la directive européenne 96/9/CE.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">4. Responsabilité et limitations</h2>
            <p className="text-gray-700 mb-4">
              ProSensor s'efforce de fournir sur le site GreenSensor des informations aussi précises que possible. 
              Toutefois, il ne pourra être tenu responsable des omissions, des inexactitudes et des carences dans la mise à jour, 
              qu'elles soient de son fait ou du fait des tiers partenaires qui lui fournissent ces informations.
            </p>
            <p className="text-gray-700 mb-4">
              Les informations contenues sur le site sont données à titre indicatif et ne sauraient engager la responsabilité de ProSensor. 
              Elles peuvent être modifiées ou mises à jour sans préavis, notamment pour refléter les évolutions technologiques 
              de nos solutions IoT.
            </p>
            <p className="text-gray-700 mb-4">
              ProSensor ne saurait être tenu responsable des dommages directs ou indirects causés au matériel de l'utilisateur, 
              lors de l'accès au site GreenSensor, et résultant soit de l'utilisation d'un matériel ne répondant pas aux spécifications 
              requises, soit de l'apparition d'un bug ou d'une incompatibilité.
            </p>
            <p className="text-gray-700">
              En aucun cas ProSensor ne pourra être tenu responsable des dommages indirects (tels par exemple qu'une perte de marché 
              ou perte d'une chance) consécutifs à l'utilisation du site GreenSensor.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">5. Collecte et traitement des données</h2>
            <p className="text-gray-700 mb-4">
              La collecte et le traitement des données personnelles sur le site GreenSensor sont régis par notre 
              <a href="/politique-confidentialite" className="text-[#3eab35] underline"> Politique de Confidentialité</a>, 
              conforme au Règlement Général sur la Protection des Données (RGPD) et à la loi française "Informatique et Libertés".
            </p>
            <p className="text-gray-700 mb-4">
              ProSensor s'engage à respecter la vie privée de ses utilisateurs et à protéger leurs données personnelles. 
              Nous collectons uniquement les informations nécessaires à la fourniture de nos services et à l'amélioration 
              de l'expérience utilisateur.
            </p>
            <p className="text-gray-700">
              Les données techniques collectées par nos solutions IoT (températures, localisations, etc.) sont traitées 
              de manière anonymisée et utilisées exclusivement pour l'amélioration de nos algorithmes et services.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">6. Cookies et technologies de suivi</h2>
            <p className="text-gray-700 mb-4">
              Le site GreenSensor utilise des cookies et technologies similaires pour améliorer l'expérience utilisateur, 
              analyser le trafic et personnaliser le contenu. Ces technologies sont utilisées conformément à la réglementation 
              européenne sur les cookies.
            </p>
            <p className="text-gray-700">
              Les utilisateurs peuvent configurer leurs navigateurs pour refuser les cookies, mais cela peut affecter 
              certaines fonctionnalités du site. Notre politique détaillée concernant les cookies est disponible 
              dans notre Politique de Confidentialité.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">7. Liens hypertextes</h2>
            <p className="text-gray-700 mb-4">
              Le site GreenSensor peut contenir des liens hypertextes vers d'autres sites présents sur le réseau Internet. 
              ProSensor n'exerce aucun contrôle sur ces sites et décline toute responsabilité quant à leur contenu, 
              leur politique de confidentialité ou leurs pratiques.
            </p>
            <p className="text-gray-700">
              L'établissement de liens hypertextes vers le site GreenSensor est autorisé sous réserve de ne pas porter atteinte 
              à l'image de ProSensor et de respecter les présentes mentions légales. Tout lien doit être retiré sur simple demande.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">8. Droit applicable et juridiction</h2>
            <p className="text-gray-700 mb-4">
              Les présentes mentions légales sont soumises au droit français. En cas de litige, et après épuisement des voies amiables, 
              les tribunaux français seront seuls compétents.
            </p>
            <p className="text-gray-700">
              Conformément à la réglementation française, nous privilégions la résolution amiable des différends 
              et encourageons nos utilisateurs à nous contacter directement en cas de problème ou de réclamation.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">9. Contact et support</h2>
            <p className="text-gray-700 mb-4">
              Pour toute question concernant les présentes mentions légales, nos solutions IoT ou notre entreprise, 
              vous pouvez nous contacter :
            </p>
            <div className="bg-gray-50 p-6 rounded-lg mb-4">
              <p className="text-gray-700 mb-2">
                <strong>ProSensor - GreenSensor</strong><br />
                <strong>Email :</strong> <a href="mailto:info@prosensor.com" className="text-[#3eab35] underline">info@prosensor.com</a><br />
                <strong>Adresse :</strong> 5 rue Maud Fontenoy, 57140 Norroy-le-Veneur, France<br />
                <strong>RCS :</strong> Metz 451 740 187<br />
                <strong>Directeur de publication :</strong> Direction ProSensor
              </p>
            </div>
            <p className="text-gray-700">
              Notre équipe technique et commerciale est disponible pour répondre à vos questions sur nos solutions IoT 
              et vous accompagner dans vos projets de suivi du compostage. Nous nous engageons à vous répondre 
              dans les meilleurs délais.
            </p>
          </section>

          <div className="bg-green-50 p-6 rounded-lg mt-8">
            <h3 className="text-lg font-semibold mb-2 text-gray-800">Engagement Qualité et Innovation</h3>
            <p className="text-gray-700 mb-0">
              ProSensor s'engage à fournir des solutions IoT de qualité pour l'agriculture durable et l'environnement. 
              Nos équipes travaillent continuellement à l'amélioration de nos technologies et services pour répondre 
              aux défis environnementaux actuels et contribuer à une agriculture plus respectueuse de la planète.
            </p>
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  )
} 
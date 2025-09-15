import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Politique de Confidentialité GreenSensor - Protection des Données RGPD | ProSensor",
  description: "Découvrez la politique de confidentialité complète de GreenSensor par ProSensor. Protection des données personnelles, conformité RGPD, droits des utilisateurs et sécurité de nos solutions IoT pour le compostage.",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Politique de Confidentialité GreenSensor - Protection des Données RGPD",
    description: "Découvrez la politique de confidentialité complète de GreenSensor par ProSensor. Protection des données personnelles, conformité RGPD, droits des utilisateurs et sécurité de nos solutions IoT.",
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
      "name": "Politique de Confidentialité GreenSensor - Protection des Données RGPD",
      "description": "Découvrez la politique de confidentialité complète de GreenSensor par ProSensor. Protection des données personnelles, conformité RGPD, droits des utilisateurs et sécurité de nos solutions IoT.",
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
      <main className="container mx-auto max-w-4xl py-16 px-4">
        <div className="prose prose-lg max-w-none">
          <h1 className="text-4xl font-bold mb-8 text-gray-800">Politique de confidentialité</h1>
          
          <div className="bg-blue-50 p-6 rounded-lg mb-8">
            <p className="text-gray-700 mb-0">
              <strong>Dernière mise à jour :</strong> Décembre 2024<br />
              <strong>Version :</strong> 1.0<br />
              <strong>Responsable du traitement :</strong> ProSensor - GreenSensor
            </p>
          </div>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">1. Introduction et engagement</h2>
            <p className="text-gray-700 mb-4">
              ProSensor, éditeur du site GreenSensor, s'engage à protéger la vie privée et les données personnelles de ses utilisateurs. 
              Cette politique de confidentialité explique comment nous collectons, utilisons, stockons et protégeons vos informations 
              personnelles conformément au Règlement Général sur la Protection des Données (RGPD) et à la loi française "Informatique et Libertés".
            </p>
            <p className="text-gray-700 mb-4">
              En utilisant notre site web et nos services IoT, vous acceptez les pratiques décrites dans cette politique. 
              Nous nous réservons le droit de modifier cette politique à tout moment, et nous vous informerons de tout changement important.
            </p>
            <p className="text-gray-700">
              Notre engagement en faveur de la protection des données s'étend également à nos solutions techniques IoT, 
              garantissant que les données collectées par nos sondes de température sont traitées avec le plus grand respect de la vie privée.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">2. Responsable du traitement</h2>
            <div className="bg-gray-50 p-6 rounded-lg mb-4">
              <p className="text-gray-700 mb-2">
                <strong>Responsable du traitement :</strong> ProSensor<br />
                <strong>Marque commerciale :</strong> GreenSensor<br />
                <strong>Email :</strong> <a href="mailto:info@prosensor.com" className="text-[#3eab35] underline">info@prosensor.com</a><br />
                <strong>Adresse :</strong> 5 rue Maud Fontenoy, 57140 Norroy-le-Veneur, France<br />
                <strong>RCS :</strong> Metz 451 740 187
              </p>
            </div>
            <p className="text-gray-700">
              ProSensor est le responsable du traitement des données personnelles collectées via le site GreenSensor 
              et nos solutions IoT. Nous nous engageons à traiter vos données de manière transparente et sécurisée.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">3. Données collectées et finalités</h2>
            <p className="text-gray-700 mb-4">
              Nous collectons uniquement les données personnelles nécessaires à la fourniture de nos services et à l'amélioration 
              de votre expérience utilisateur. Les données collectées incluent :
            </p>
            
            <div className="bg-gray-50 p-6 rounded-lg mb-4">
              <h3 className="text-lg font-semibold mb-3 text-gray-800">Données de contact et commerciales :</h3>
              <ul className="text-gray-700 list-disc pl-6 mb-4">
                <li>Nom et prénom</li>
                <li>Adresse email</li>
                <li>Numéro de téléphone</li>
                <li>Nom de l'entreprise</li>
                <li>Message de contact</li>
              </ul>
              
              <h3 className="text-lg font-semibold mb-3 text-gray-800">Données techniques IoT :</h3>
              <ul className="text-gray-700 list-disc pl-6 mb-4">
                <li>Données de température (anonymisées)</li>
                <li>Localisation des sondes (géolocalisation)</li>
                <li>Données de performance des équipements</li>
                <li>Logs techniques et diagnostics</li>
              </ul>
              
              <h3 className="text-lg font-semibold mb-3 text-gray-800">Données de navigation :</h3>
              <ul className="text-gray-700 list-disc pl-6">
                <li>Adresse IP</li>
                <li>Type de navigateur</li>
                <li>Pages visitées</li>
                <li>Durée de visite</li>
                <li>Cookies et technologies similaires</li>
              </ul>
            </div>

            <p className="text-gray-700 mb-4">
              Ces données sont collectées pour les finalités suivantes :
            </p>
            <ul className="text-gray-700 list-disc pl-6 mb-4">
              <li>Répondre à vos demandes de contact et de démonstration</li>
              <li>Fournir nos services IoT de suivi du compostage</li>
              <li>Améliorer nos produits et services</li>
              <li>Analyser l'utilisation de notre site web</li>
              <li>Respecter nos obligations légales</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">4. Base légale du traitement</h2>
            <p className="text-gray-700 mb-4">
              Le traitement de vos données personnelles est basé sur les fondements légaux suivants :
            </p>
            <div className="bg-gray-50 p-6 rounded-lg mb-4">
              <ul className="text-gray-700 list-disc pl-6">
                <li><strong>Consentement :</strong> Pour l'envoi de communications marketing et l'utilisation de cookies non essentiels</li>
                <li><strong>Exécution du contrat :</strong> Pour la fourniture de nos services IoT et le support client</li>
                <li><strong>Intérêt légitime :</strong> Pour l'amélioration de nos produits et l'analyse du site web</li>
                <li><strong>Obligation légale :</strong> Pour respecter les réglementations applicables</li>
              </ul>
            </div>
            <p className="text-gray-700">
              Vous pouvez retirer votre consentement à tout moment en nous contactant ou en utilisant les options 
              de désabonnement dans nos communications.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">5. Partage et transfert des données</h2>
            <p className="text-gray-700 mb-4">
              ProSensor ne vend, ne loue ni ne partage vos données personnelles avec des tiers, sauf dans les cas suivants :
            </p>
            <ul className="text-gray-700 list-disc pl-6 mb-4">
              <li>Avec votre consentement explicite</li>
              <li>Pour respecter une obligation légale</li>
              <li>Avec nos prestataires de services (hébergement, maintenance) sous contrat de confidentialité</li>
              <li>En cas de fusion, acquisition ou restructuration de l'entreprise</li>
            </ul>
            <p className="text-gray-700 mb-4">
              Nos données sont hébergées en France chez LWS (Ligne Web Services), garantissant ainsi la conformité 
              avec la réglementation européenne sur la protection des données.
            </p>
            <p className="text-gray-700">
              Les données techniques IoT sont traitées de manière anonymisée et agrégée pour l'amélioration 
              de nos algorithmes, sans permettre l'identification des utilisateurs individuels.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">6. Conservation des données</h2>
            <p className="text-gray-700 mb-4">
              Nous conservons vos données personnelles pendant la durée nécessaire aux finalités pour lesquelles elles ont été collectées :
            </p>
            <div className="bg-gray-50 p-6 rounded-lg mb-4">
              <ul className="text-gray-700 list-disc pl-6">
                <li><strong>Données de contact :</strong> 3 ans après le dernier contact</li>
                <li><strong>Données commerciales :</strong> 3 ans après la fin de la relation contractuelle</li>
                <li><strong>Données IoT techniques :</strong> 5 ans pour les analyses et diagnostics</li>
                <li><strong>Données de navigation :</strong> 13 mois maximum</li>
                <li><strong>Données comptables :</strong> 10 ans conformément à la réglementation française</li>
              </ul>
            </div>
            <p className="text-gray-700">
              Passé ces délais, vos données sont soit supprimées définitivement, soit anonymisées pour des fins statistiques. 
              Vous pouvez demander la suppression anticipée de vos données en nous contactant.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">7. Sécurité des données</h2>
            <p className="text-gray-700 mb-4">
              ProSensor met en œuvre des mesures techniques et organisationnelles appropriées pour protéger vos données personnelles :
            </p>
            <div className="bg-gray-50 p-6 rounded-lg mb-4">
              <ul className="text-gray-700 list-disc pl-6">
                <li>Chiffrement des données en transit et au repos</li>
                <li>Accès restreint aux données personnelles</li>
                <li>Formation du personnel à la protection des données</li>
                <li>Audits de sécurité réguliers</li>
                <li>Sauvegardes sécurisées et redondantes</li>
                <li>Surveillance continue des systèmes</li>
              </ul>
            </div>
            <p className="text-gray-700">
              En cas de violation de données, nous nous engageons à vous informer dans les 72 heures et à prendre 
              toutes les mesures nécessaires pour limiter les conséquences.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">8. Vos droits RGPD</h2>
            <p className="text-gray-700 mb-4">
              Conformément au RGPD, vous disposez des droits suivants concernant vos données personnelles :
            </p>
            <div className="bg-gray-50 p-6 rounded-lg mb-4">
              <ul className="text-gray-700 list-disc pl-6">
                <li><strong>Droit d'accès :</strong> Obtenir une copie de vos données personnelles</li>
                <li><strong>Droit de rectification :</strong> Corriger des données inexactes ou incomplètes</li>
                <li><strong>Droit à l'effacement :</strong> Demander la suppression de vos données</li>
                <li><strong>Droit à la limitation :</strong> Restreindre le traitement de vos données</li>
                <li><strong>Droit à la portabilité :</strong> Récupérer vos données dans un format structuré</li>
                <li><strong>Droit d'opposition :</strong> Vous opposer au traitement de vos données</li>
                <li><strong>Droit de retrait du consentement :</strong> Retirer votre consentement à tout moment</li>
              </ul>
            </div>
            <p className="text-gray-700 mb-4">
              Pour exercer ces droits, contactez-nous à <a href="mailto:info@prosensor.com" className="text-[#3eab35] underline">info@prosensor.com</a> 
              en précisant votre demande et en joignant une copie de votre pièce d'identité.
            </p>
            <p className="text-gray-700">
              Vous avez également le droit d'introduire une réclamation auprès de la CNIL (Commission Nationale de l'Informatique et des Libertés) 
              si vous estimez que vos droits ne sont pas respectés.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">9. Cookies et technologies de suivi</h2>
            <p className="text-gray-700 mb-4">
              Notre site utilise des cookies et technologies similaires pour améliorer votre expérience utilisateur. 
              Les cookies sont de petits fichiers texte stockés sur votre appareil.
            </p>
            <div className="bg-gray-50 p-6 rounded-lg mb-4">
              <h3 className="text-lg font-semibold mb-3 text-gray-800">Types de cookies utilisés :</h3>
              <ul className="text-gray-700 list-disc pl-6">
                <li><strong>Cookies essentiels :</strong> Nécessaires au fonctionnement du site</li>
                <li><strong>Cookies analytiques :</strong> Pour analyser l'utilisation du site (Google Analytics)</li>
                <li><strong>Cookies de préférences :</strong> Pour mémoriser vos choix</li>
                <li><strong>Cookies marketing :</strong> Pour personnaliser les publicités</li>
              </ul>
            </div>
            <p className="text-gray-700">
              Vous pouvez gérer vos préférences de cookies via les paramètres de votre navigateur ou notre bannière de cookies. 
              Le refus de certains cookies peut affecter le fonctionnement du site.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">10. Données des mineurs</h2>
            <p className="text-gray-700 mb-4">
              Nos services ne sont pas destinés aux mineurs de moins de 16 ans. Nous ne collectons pas sciemment 
              de données personnelles de mineurs sans le consentement de leurs parents ou tuteurs légaux.
            </p>
            <p className="text-gray-700">
              Si nous apprenons qu'un mineur nous a fourni des données personnelles sans autorisation parentale, 
              nous supprimerons immédiatement ces informations de nos systèmes.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">11. Modifications de la politique</h2>
            <p className="text-gray-700 mb-4">
              Cette politique de confidentialité peut être mise à jour pour refléter les changements dans nos pratiques 
              ou pour des raisons légales ou réglementaires.
            </p>
            <p className="text-gray-700">
              Nous vous informerons de tout changement important par email ou via une notification sur notre site. 
              La date de dernière mise à jour est indiquée en haut de cette page.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">12. Contact et questions</h2>
            <p className="text-gray-700 mb-4">
              Pour toute question concernant cette politique de confidentialité ou le traitement de vos données personnelles, 
              vous pouvez nous contacter :
            </p>
            <div className="bg-gray-50 p-6 rounded-lg mb-4">
              <p className="text-gray-700 mb-2">
                <strong>ProSensor - GreenSensor</strong><br />
                <strong>Email :</strong> <a href="mailto:info@prosensor.com" className="text-[#3eab35] underline">info@prosensor.com</a><br />
                <strong>Adresse :</strong> 5 rue Maud Fontenoy, 57140 Norroy-le-Veneur, France<br />
                <strong>RCS :</strong> Metz 451 740 187
              </p>
            </div>
            <p className="text-gray-700">
              Notre équipe se tient à votre disposition pour répondre à toutes vos questions sur la protection de vos données 
              et vous accompagner dans l'exercice de vos droits.
            </p>
          </section>

          <div className="bg-green-50 p-6 rounded-lg mt-8">
            <h3 className="text-lg font-semibold mb-2 text-gray-800">Engagement Transparence</h3>
            <p className="text-gray-700 mb-0">
              ProSensor s'engage à maintenir la transparence la plus totale concernant le traitement de vos données personnelles. 
              Cette politique de confidentialité reflète notre engagement en faveur de la protection de la vie privée 
              et de la conformité avec les réglementations les plus strictes en matière de protection des données.
            </p>
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  )
}

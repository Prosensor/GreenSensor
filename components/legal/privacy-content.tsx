"use client"

import { useI18n } from "@/i18n/i18n-provider"

export function PrivacyContent() {
  const { language } = useI18n()
  if (language === "en") {
    return (
      <div className="prose prose-lg max-w-none">
        <h1 className="text-4xl font-bold mb-8 text-gray-800">Privacy Policy</h1>
        <div className="bg-blue-50 p-6 rounded-lg mb-8">
          <p className="text-gray-700 mb-0">
            <strong>Last updated:</strong> December 2024<br />
            <strong>Version:</strong> 1.0<br />
            <strong>Controller:</strong> ProSensor - GreenSensor
          </p>
        </div>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">1. Introduction</h2>
          <p className="text-gray-700 mb-4">We explain how we collect, use, store and protect your personal data in compliance with GDPR and French law.</p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">2. Data controller</h2>
          <p className="text-gray-700">ProSensor is the data controller for personal data collected via the GreenSensor website and IoT solutions. Contact: <a href="mailto:info@prosensor.com" className="text-[#3eab35] underline">info@prosensor.com</a>.</p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">3. Data we collect</h2>
          <p className="text-gray-700">Contact data, technical IoT data (anonymized), and browsing data. See the French version for full detail.</p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">4. Legal bases</h2>
          <p className="text-gray-700">Consent (marketing/cookies), contract performance (services), legitimate interest (improvements), legal obligation (compliance).</p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">5. Sharing</h2>
          <p className="text-gray-700">We do not sell your data. We may share only as required by law or with service providers under confidentiality, and in corporate transactions.</p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">6. Retention</h2>
          <p className="text-gray-700">Contact data: 3 years after last contact. Commercial data: 3 years after contract end. IoT technical data: 5 years. Browsing data: up to 13 months. Accounting data: 10 years.</p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">7. Security</h2>
          <p className="text-gray-700">Encryption, restricted access, staff training, audits, backups, and monitoring. We notify you in case of a data breach.</p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">8. Your rights</h2>
          <p className="text-gray-700">Access, rectification, erasure, restriction, portability, objection, and consent withdrawal. Contact us at <a href="mailto:info@prosensor.com" className="text-[#3eab35] underline">info@prosensor.com</a>.</p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">9. Cookies</h2>
          <p className="text-gray-700">We use essential, analytics, preference, and marketing cookies. Manage your preferences via your browser or our banner.</p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">10. Minors</h2>
          <p className="text-gray-700">Our services are not intended for children under 16. We delete unauthorized data as soon as we become aware of it.</p>
        </section>
      </div>
    )
  }
  // Contenu français (complet)
  return (
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
          personnelles conformément au Règlement Général sur la Protection des Données (RGPD) et à la loi française « Informatique et Libertés ».
        </p>
        <p className="text-gray-700 mb-4">
          En utilisant notre site web et nos services IoT, vous acceptez les pratiques décrites dans cette politique.
          Nous nous réservons le droit de la modifier à tout moment et vous informerons de tout changement important.
        </p>
        <p className="text-gray-700">
          Notre engagement s'étend à nos solutions IoT afin de garantir que les données collectées par nos sondes de température
          sont traitées avec le plus grand respect de la vie privée.
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
          ProSensor est le responsable du traitement des données personnelles collectées via le site GreenSensor et nos solutions IoT.
          Nous nous engageons à traiter vos données de manière transparente et sécurisée.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">3. Données collectées et finalités</h2>
        <p className="text-gray-700 mb-4">
          Nous collectons uniquement les données nécessaires à la fourniture de nos services et à l'amélioration de votre expérience.
          Les catégories de données incluent :
        </p>
        <div className="bg-gray-50 p-6 rounded-lg mb-4">
          <h3 className="text-lg font-semibold mb-3 text-gray-800">Données de contact et commerciales</h3>
          <ul className="text-gray-700 list-disc pl-6 mb-4">
            <li>Nom et prénom</li>
            <li>Adresse email</li>
            <li>Numéro de téléphone</li>
            <li>Nom de l'entreprise</li>
            <li>Message de contact</li>
          </ul>
          <h3 className="text-lg font-semibold mb-3 text-gray-800">Données techniques IoT</h3>
          <ul className="text-gray-700 list-disc pl-6 mb-4">
            <li>Données de température (anonymisées)</li>
            <li>Localisation des sondes</li>
            <li>Données de performance des équipements</li>
            <li>Logs techniques et diagnostics</li>
          </ul>
          <h3 className="text-lg font-semibold mb-3 text-gray-800">Données de navigation</h3>
          <ul className="text-gray-700 list-disc pl-6">
            <li>Adresse IP, type de navigateur</li>
            <li>Pages visitées et durée de visite</li>
            <li>Cookies et technologies similaires</li>
          </ul>
        </div>
        <p className="text-gray-700 mb-4">Finalités principales&nbsp;:</p>
        <ul className="text-gray-700 list-disc pl-6 mb-4">
          <li>Répondre à vos demandes de contact et de démonstration</li>
          <li>Fournir nos services IoT de suivi du compostage</li>
          <li>Améliorer nos produits et services</li>
          <li>Analyser l'utilisation du site</li>
          <li>Respecter nos obligations légales</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">4. Bases légales du traitement</h2>
        <p className="text-gray-700 mb-4">Nos traitements reposent selon les cas sur&nbsp;: le consentement, l'exécution du contrat, l'intérêt légitime, ou l'obligation légale.</p>
        <div className="bg-gray-50 p-6 rounded-lg mb-4">
          <ul className="text-gray-700 list-disc pl-6">
            <li><strong>Consentement</strong> (marketing, cookies non essentiels)</li>
            <li><strong>Exécution du contrat</strong> (fourniture des services IoT, support)</li>
            <li><strong>Intérêt légitime</strong> (amélioration produits, analyses)</li>
            <li><strong>Obligation légale</strong> (comptabilité, conformité)</li>
          </ul>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">5. Partage et transfert des données</h2>
        <p className="text-gray-700 mb-4">Nous ne vendons ni ne louons vos données. Des partages peuvent intervenir uniquement&nbsp;:</p>
        <ul className="text-gray-700 list-disc pl-6 mb-4">
          <li>Avec votre consentement</li>
          <li>Pour respecter une obligation légale</li>
          <li>Avec des prestataires (hébergement, maintenance) soumis à des engagements de confidentialité</li>
          <li>Dans le cadre d'opérations de fusion/acquisition/restructuration</li>
        </ul>
        <p className="text-gray-700">Les données sont hébergées en France (LWS), garantissant la conformité au cadre européen.</p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">6. Durées de conservation</h2>
        <div className="bg-gray-50 p-6 rounded-lg mb-4">
          <ul className="text-gray-700 list-disc pl-6">
            <li><strong>Données de contact&nbsp;:</strong> 3 ans après le dernier contact</li>
            <li><strong>Données commerciales&nbsp;:</strong> 3 ans après la fin de relation</li>
            <li><strong>Données IoT techniques&nbsp;:</strong> 5 ans</li>
            <li><strong>Données de navigation&nbsp;:</strong> 13 mois max.</li>
            <li><strong>Données comptables&nbsp;:</strong> 10 ans</li>
          </ul>
        </div>
        <p className="text-gray-700">Au-delà, les données sont supprimées ou anonymisées. Vous pouvez demander une suppression anticipée.</p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">7. Sécurité</h2>
        <div className="bg-gray-50 p-6 rounded-lg mb-4">
          <ul className="text-gray-700 list-disc pl-6">
            <li>Chiffrement en transit et au repos</li>
            <li>Accès restreint</li>
            <li>Formation des équipes</li>
            <li>Audits réguliers</li>
            <li>Sauvegardes sécurisées et redondantes</li>
            <li>Surveillance continue</li>
          </ul>
        </div>
        <p className="text-gray-700">En cas de violation, nous vous informons dans les 72 heures et prenons les mesures nécessaires.</p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">8. Vos droits (RGPD)</h2>
        <p className="text-gray-700 mb-4">Vous disposez notamment des droits d'accès, rectification, effacement, limitation, portabilité, opposition et retrait du consentement.</p>
        <p className="text-gray-700">
          Pour exercer vos droits, écrivez‑nous à <a href="mailto:info@prosensor.com" className="text-[#3eab35] underline">info@prosensor.com</a>
          en précisant votre demande et en joignant un justificatif d'identité. Vous pouvez aussi saisir la CNIL.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">9. Cookies</h2>
        <p className="text-gray-700 mb-4">Nous utilisons des cookies essentiels, analytiques, de préférences et marketing. Vous pouvez gérer vos préférences via votre navigateur ou notre bannière.</p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">10. Données des mineurs</h2>
        <p className="text-gray-700">Nos services ne visent pas les moins de 16 ans. Toute donnée collectée sans autorisation parentale est supprimée dès constat.</p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">11. Modifications</h2>
        <p className="text-gray-700">Cette politique peut évoluer pour des motifs organisationnels, techniques ou réglementaires. La date de mise à jour figure en tête de page.</p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">12. Contact</h2>
        <div className="bg-gray-50 p-6 rounded-lg mb-4">
          <p className="text-gray-700 mb-2">
            <strong>ProSensor - GreenSensor</strong><br />
            <strong>Email :</strong> <a href="mailto:info@prosensor.com" className="text-[#3eab35] underline">info@prosensor.com</a><br />
            <strong>Adresse :</strong> 5 rue Maud Fontenoy, 57140 Norroy-le-Veneur, France<br />
            <strong>RCS :</strong> Metz 451 740 187
          </p>
        </div>
        <p className="text-gray-700">Notre équipe reste disponible pour toute question relative à la protection des données.</p>
      </section>
    </div>
  )
}



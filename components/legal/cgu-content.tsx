"use client"

import { useI18n } from "@/i18n/i18n-provider"

export function CguContent() {
  const { language } = useI18n()
  if (language === "en") {
    return (
      <div className="prose prose-lg max-w-none">
        <h1 className="text-4xl font-bold mb-8 text-gray-800">Terms of Use</h1>
        <div className="bg-blue-50 p-6 rounded-lg mb-8">
          <p className="text-gray-700 mb-0">
            <strong>Last updated:</strong> December 2024<br />
            <strong>Version:</strong> 1.0<br />
            <strong>Publisher:</strong> ProSensor - GreenSensor
          </p>
        </div>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">1. Purpose</h2>
          <p className="text-gray-700 mb-4">These Terms govern use of the GreenSensor website, including information about our IoT solution for compost monitoring.</p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">2. Access and use</h2>
          <p className="text-gray-700 mb-4">The website is freely accessible online. Use implies full acceptance of these Terms. Users must not infringe third‑party rights or public order.</p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">3. Intellectual property</h2>
          <p className="text-gray-700 mb-4">All content is protected by copyright and is the exclusive property of ProSensor unless stated otherwise. Any reproduction or adaptation requires prior written consent.</p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">4. Liability and warranties</h2>
          <p className="text-gray-700 mb-4">Information provided may not be exhaustive or up to date at all times. Use of the site is at the user's own risk. ProSensor cannot be held liable for direct or indirect damages.</p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">5. Personal data</h2>
          <p className="text-gray-700">Personal data processing is governed by our <a href="/politique-confidentialite" className="text-[#3eab35] underline">Privacy Policy</a>, in compliance with GDPR.</p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">6. External links</h2>
          <p className="text-gray-700">The site may include links to external websites; ProSensor is not responsible for their content or privacy practices.</p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">7. Changes</h2>
          <p className="text-gray-700">ProSensor may update these Terms at any time. Continued use after changes constitutes acceptance of the revised Terms.</p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">8. Governing law</h2>
          <p className="text-gray-700">These Terms are governed by French law. French courts have exclusive jurisdiction.</p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">9. Contact</h2>
          <p className="text-gray-700">For any questions, contact us at <a href="mailto:info@prosensor.com" className="text-[#3eab35] underline">info@prosensor.com</a>.</p>
        </section>
      </div>
    )
  }

  // French content (full)
  return (
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
        <p className="text-gray-700 mb-4">Les présentes CGU régissent l'utilisation du site web GreenSensor, propriété de ProSensor.</p>
        <p className="text-gray-700">Le site présente notre solution de suivi intelligent du compostage par IoT.</p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">2. Accès et utilisation du site</h2>
        <p className="text-gray-700 mb-4">Accès gratuit. L'utilisation implique l'acceptation pleine et entière des CGU.</p>
        <p className="text-gray-700">Toute utilisation contraire à l'ordre public ou aux droits de tiers est interdite.</p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">3. Propriété intellectuelle</h2>
        <p className="text-gray-700">Contenus protégés par le droit d'auteur et propriété de ProSensor (sauf mention contraire).</p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">4. Responsabilité et garanties</h2>
        <p className="text-gray-700">Informations fournies à titre indicatif. Utilisation sous la responsabilité de l'utilisateur.</p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">5. Données personnelles et confidentialité</h2>
        <p className="text-gray-700">Voir la <a href="/politique-confidentialite" className="text-[#3eab35] underline">Politique de Confidentialité</a>.</p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">6. Liens externes</h2>
        <p className="text-gray-700">ProSensor n'est pas responsable du contenu des sites tiers.</p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">7. Évolution des conditions</h2>
        <p className="text-gray-700">ProSensor peut modifier les CGU à tout moment. L'utilisation vaut acceptation.</p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">8. Droit applicable</h2>
        <p className="text-gray-700">Droit français. Tribunaux français compétents.</p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">9. Contact</h2>
        <p className="text-gray-700">Contact&nbsp;: <a href="mailto:info@prosensor.com" className="text-[#3eab35] underline">info@prosensor.com</a>.</p>
      </section>
    </div>
  )
}



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

  return null
}



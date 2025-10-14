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

  return null
}



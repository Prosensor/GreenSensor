"use client"

import { useI18n } from "@/i18n/i18n-provider"

export function MentionsContent() {
  const { language } = useI18n()
  if (language === "en") {
    return (
      <div className="prose prose-lg max-w-none">
        <h1 className="text-4xl font-bold mb-8 text-gray-800">Legal Notice</h1>
        <div className="bg-blue-50 p-6 rounded-lg mb-8">
          <p className="text-gray-700 mb-0">
            <strong>Website:</strong> GreenSensor - Temperature probe for Compost<br />
            <strong>Last updated:</strong> December 2024<br />
            <strong>Publisher:</strong> Prosensor
          </p>
        </div>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">1. Publisher</h2>
          <div className="bg-gray-50 p-6 rounded-lg mb-4">
            <p className="text-gray-700 mb-2">
              <strong>Company name:</strong> Prosensor<br />
              <strong>Brand:</strong> GreenSensor<br />
              <strong>Email:</strong> <a href="mailto:info@prosensor.com" className="text-[#3eab35] underline">info@prosensor.com</a><br />
              <strong>Address:</strong> 5 rue Maud Fontenoy, 57140 Norroy-le-Veneur, France<br />
              <strong>RCS:</strong> Metz 451 740 187<br />
              <strong>SIRET:</strong> 451 740 187 00012<br />
              <strong>APE code:</strong> 6201Z (Computer programming)
            </p>
          </div>
          <p className="text-gray-700 mb-4">
          Prosensor is a French company specializing in IoT solutions for agriculture and the environment.
            Our expertise allows us to design innovative systems for monitoring and analyzing natural processes, including composting.
          </p>
          <p className="text-gray-700">
            The GreenSensor brand represents our flagship IoT solution for intelligent composting monitoring, combining connected temperature probes, a secure cloud platform, and advanced analytics tools.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">2. Hosting</h2>
          <div className="bg-gray-50 p-6 rounded-lg mb-4">
            <p className="text-gray-700 mb-2">
              <strong>Host:</strong> LWS (Ligne Web Services)<br />
              <strong>Address:</strong> 10, RUE PENTHIEVRE, 75008 PARIS, FRANCE<br />
              <strong>Website:</strong> <a href="https://www.lws.fr" className="text-[#3eab35] underline" target="_blank" rel="noopener noreferrer">www.lws.fr</a><br />
              <strong>Phone:</strong> 01 77 62 30 03
            </p>
          </div>
          <p className="text-gray-700 mb-4">
            LWS is a recognized French hosting provider. Our servers are located in France to ensure compliance with EU regulations and optimal performance for our users.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">3. Intellectual property</h2>
          <p className="text-gray-700 mb-4">
            All content on the GreenSensor website (texts, images, graphics, logo, icons, videos, software, databases, etc.) is the exclusive property of Prosensor, unless otherwise stated. Any reproduction or adaptation is prohibited without prior written consent.
          </p>
          <p className="text-gray-700 mb-4">
            The trademarks "GreenSensor" and "Prosensor" and their associated logos are registered trademarks. Any unauthorized use is strictly prohibited.
          </p>
          <p className="text-gray-700">
            IoT technologies developed by Prosensor (data processing algorithms, wireless protocols, UIs) are protected by patents and trade secrets.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">4. Liability</h2>
          <p className="text-gray-700 mb-4">Information is provided for guidance only and may be updated without notice. Prosensor cannot be held liable for direct or indirect damages arising from use of the site.</p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">5. Data and privacy</h2>
          <p className="text-gray-700">Personal data processing is governed by our <a href="/politique-confidentialite" className="text-[#3eab35] underline">Privacy Policy</a>, in compliance with GDPR.</p>
        </section>
      </div>
    )
  }

  // French content (full)
  return (
    <div className="prose prose-lg max-w-none">
      <h1 className="text-4xl font-bold mb-8 text-gray-800">Mentions légales</h1>

      <div className="bg-blue-50 p-6 rounded-lg mb-8">
        <p className="text-gray-700 mb-0">
          <strong>Site web :</strong> GreenSensor - Sonde de température à Compost<br />
          <strong>Dernière mise à jour :</strong> Décembre 2024<br />
          <strong>Éditeur :</strong> Prosensor
        </p>
      </div>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">1. Éditeur du site</h2>
        <div className="bg-gray-50 p-6 rounded-lg mb-4">
          <p className="text-gray-700 mb-2">
            <strong>Raison sociale :</strong> Prosensor<br />
            <strong>Marque commerciale :</strong> GreenSensor<br />
            <strong>Email :</strong> <a href="mailto:info@prosensor.com" className="text-[#3eab35] underline">info@prosensor.com</a><br />
            <strong>Adresse :</strong> 5 rue Maud Fontenoy, 57140 Norroy-le-Veneur, France<br />
            <strong>RCS :</strong> Metz 451 740 187<br />
            <strong>SIRET :</strong> 451 740 187 00012<br />
          </p>
        </div>
        <p className="text-gray-700 mb-4">
        Prosensor est une société française spécialisée dans le développement de solutions IoT pour l'agriculture et l'environnement.
          Notre expertise permet de concevoir des systèmes innovants de suivi et d'analyse des processus naturels, notamment le compostage.
        </p>
        <p className="text-gray-700">
          La marque GreenSensor représente notre solution de suivi intelligent du compostage par IoT : sondes de température connectées,
          plateforme cloud sécurisée et outils d'analyse avancés.
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
          LWS est un hébergeur français reconnu. Nos serveurs sont situés en France afin d'assurer conformité et performance.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">3. Propriété intellectuelle</h2>
        <p className="text-gray-700 mb-4">
          L'ensemble du contenu du site GreenSensor (textes, images, graphismes, logo, icônes, vidéos, logiciels, bases de données, etc.)
          est la propriété exclusive de Prosensor, sauf mention contraire. Toute reproduction, représentation ou adaptation est interdite
          sans autorisation écrite préalable.
        </p>
        <p className="text-gray-700 mb-4">
          Les marques "GreenSensor" et "Prosensor" ainsi que leurs logos sont des marques déposées. Toute utilisation non autorisée est interdite.
        </p>
        <p className="text-gray-700">
          Les technologies IoT développées par Prosensor (algorithmes, protocoles de communication, interfaces) sont protégées par des brevets
          et des secrets de fabrication.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">4. Responsabilité et limitations</h2>
        <p className="text-gray-700 mb-4">
          Les informations du site sont fournies à titre indicatif et peuvent être mises à jour sans préavis. Prosensor ne saurait être tenu responsable
          des omissions, inexactitudes ou carences, ni des dommages directs ou indirects liés à l'utilisation du site.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">5. Données personnelles</h2>
        <p className="text-gray-700">
          Le traitement des données personnelles est régi par notre <a href="/politique-confidentialite" className="text-[#3eab35] underline">Politique de Confidentialité</a>,
          conforme au RGPD et à la loi française.
        </p>
      </section>
    </div>
  )
}



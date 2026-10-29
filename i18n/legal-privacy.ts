import { FACTS as F, type LegalDoc, type LegalLang } from "@/i18n/legal-facts"

const mail = `[${F.email}](mailto:${F.email})`
const ads = "[adssettings.google.com](https://adssettings.google.com)"
const cnil = "[cnil.fr](https://www.cnil.fr)"

const fr: LegalDoc = {
  title: "Politique de confidentialité",
  subtitle: "Quelles données nous collectons, pourquoi, et comment vous gardez la main dessus.",
  updated: "29 octobre 2026",
  sections: [
    {
      title: "Qui est responsable de vos données",
      blocks: [
        { p: `${F.name} (${F.address}) est responsable du traitement des données collectées sur ${F.site}. Pour toute question : ${mail}.` },
      ],
    },
    {
      title: "Les données que nous collectons",
      blocks: [
        { p: "Nous ne collectons que ce qui est nécessaire :" },
        {
          ul: [
            "**Formulaire de contact** : nom, e-mail et téléphone, plus l'entreprise, un message et des précisions sur votre projet (longueur de sondes, accès Internet sur le site…) si vous les renseignez.",
            "**Données techniques** : adresse IP, navigateur et pages consultées, enregistrées par notre hébergeur. L'adresse IP sert aussi, 10 minutes et sans être enregistrée, à limiter les envois abusifs du formulaire.",
            "**Traceurs** : voir la section « Cookies et traceurs ».",
          ],
        },
        { note: "Les mesures de vos sondes ne passent pas par ce site. Nous ne collectons aucune donnée sensible." },
      ],
    },
    {
      title: "Pourquoi nous les utilisons",
      blocks: [
        {
          ul: [
            "Répondre à votre demande de présentation et vous recontacter : mesures précontractuelles prises à votre demande, et notre intérêt légitime à répondre aux professionnels qui nous sollicitent.",
            "Assurer la sécurité du site et limiter les abus : notre intérêt légitime.",
            "Mesurer l'efficacité de nos annonces Google Ads : votre consentement.",
          ],
        },
      ],
    },
    {
      title: "Qui y a accès",
      blocks: [
        { p: `Les équipes habilitées de ${F.name}, et nos prestataires techniques, qui n'agissent que sur nos instructions :` },
        { rows: [[F.host, "Hébergement du site"], ["LWS (France)", "Messagerie électronique"], ["Google Ireland Limited", "Mesure des conversions Google Ads"]] },
        { p: "Nous ne vendons ni ne louons vos données." },
      ],
    },
    {
      title: "Transferts hors de l'Union européenne",
      blocks: [{ p: "Vercel et Google peuvent traiter des données aux États-Unis. Ces transferts sont encadrés par les clauses contractuelles types de la Commission européenne ou par le cadre de protection des données UE-États-Unis, selon le prestataire." }],
    },
    {
      title: "Combien de temps nous les conservons",
      blocks: [
        {
          rows: [
            ["Demandes de contact", "3 ans après le dernier échange, puis suppression ou anonymisation"],
            ["Cookie de langue", "12 mois"],
            ["Cookies Google Ads", "Durée limitée, fixée par Google"],
            ["Adresse IP anti-abus", "10 minutes, sans enregistrement"],
          ],
        },
      ],
    },
    {
      title: "Cookies et traceurs",
      blocks: [
        {
          rows: [
            ["language", "Mémorise la langue choisie. Déposé par Prosensor, 12 mois."],
            ["Google Ads", "Mesure les conversions publicitaires, par exemple l'envoi d'une demande après un clic sur une annonce. Déposé par Google Ireland Limited."],
          ],
        },
        { p: `Vous pouvez refuser ou supprimer les cookies dans les paramètres de votre navigateur, et gérer la personnalisation des annonces sur ${ads}.` },
      ],
    },
    {
      title: "Sécurité",
      blocks: [{ p: "Les échanges avec le site sont chiffrés (HTTPS). Les messages du formulaire sont transmis à notre messagerie par une connexion chiffrée, et leur accès est limité aux personnes qui en ont besoin." }],
    },
    {
      title: "Vos droits",
      blocks: [
        { p: "Vous pouvez à tout moment demander l'accès à vos données, leur rectification, leur effacement, la limitation ou l'opposition à leur traitement, leur portabilité, et retirer votre consentement. Vous pouvez aussi donner des directives sur le sort de vos données après votre décès." },
        { p: `Écrivez-nous à ${mail} : nous répondons sous un mois. Nous pouvons vous demander un justificatif d'identité en cas de doute.` },
      ],
    },
    {
      title: "Réclamation",
      blocks: [{ p: `Si vous estimez que vos droits ne sont pas respectés, vous pouvez saisir la CNIL (Commission nationale de l'informatique et des libertés) : ${cnil}.` }],
    },
    {
      title: "Modifications",
      blocks: [{ p: "Cette politique peut évoluer. La date de dernière mise à jour est indiquée en haut de page." }],
    },
  ],
}

const en: LegalDoc = {
  title: "Privacy policy",
  subtitle: "What data we collect, why, and how you stay in control of it.",
  updated: "October 29, 2026",
  sections: [
    {
      title: "Who is responsible for your data",
      blocks: [{ p: `${F.name} (${F.address}) is the controller of the data collected on ${F.site}. For any question: ${mail}.` }],
    },
    {
      title: "The data we collect",
      blocks: [
        { p: "We only collect what is necessary:" },
        {
          ul: [
            "**Contact form**: name, email and phone number, plus your company, a message and details about your project (probe length, Internet access on site…) if you provide them.",
            "**Technical data**: IP address, browser and pages viewed, logged by our host. The IP address is also used, for 10 minutes and without being stored, to limit abusive form submissions.",
            "**Trackers**: see the “Cookies and trackers” section.",
          ],
        },
        { note: "Your probes' measurements do not go through this site. We collect no sensitive data." },
      ],
    },
    {
      title: "Why we use it",
      blocks: [
        {
          ul: [
            "To answer your presentation request and get back to you: pre-contractual steps taken at your request, and our legitimate interest in replying to professionals who contact us.",
            "To keep the site secure and limit abuse: our legitimate interest.",
            "To measure the effectiveness of our Google Ads campaigns: your consent.",
          ],
        },
      ],
    },
    {
      title: "Who has access",
      blocks: [
        { p: `${F.name}'s authorised teams, and our technical providers, who act only on our instructions:` },
        { rows: [[F.host, "Site hosting"], ["LWS (France)", "Email service"], ["Google Ireland Limited", "Google Ads conversion measurement"]] },
        { p: "We do not sell or rent your data." },
      ],
    },
    {
      title: "Transfers outside the European Union",
      blocks: [{ p: "Vercel and Google may process data in the United States. These transfers are covered by the European Commission's standard contractual clauses or by the EU-US Data Privacy Framework, depending on the provider." }],
    },
    {
      title: "How long we keep it",
      blocks: [
        {
          rows: [
            ["Contact requests", "3 years after the last exchange, then deleted or anonymised"],
            ["Language cookie", "12 months"],
            ["Google Ads cookies", "Limited period, set by Google"],
            ["Anti-abuse IP address", "10 minutes, not stored"],
          ],
        },
      ],
    },
    {
      title: "Cookies and trackers",
      blocks: [
        {
          rows: [
            ["language", "Remembers your chosen language. Set by Prosensor, 12 months."],
            ["Google Ads", "Measures advertising conversions, for example a request sent after clicking an ad. Set by Google Ireland Limited."],
          ],
        },
        { p: `You can refuse or delete cookies in your browser settings, and manage ad personalisation at ${ads}.` },
      ],
    },
    {
      title: "Security",
      blocks: [{ p: "Exchanges with the site are encrypted (HTTPS). Form messages are sent to our mail system over an encrypted connection, and access is limited to the people who need it." }],
    },
    {
      title: "Your rights",
      blocks: [
        { p: "At any time you can ask to access your data, have it corrected or erased, restrict or object to its processing, receive it in a portable format, and withdraw your consent. You can also give instructions about what happens to your data after your death." },
        { p: `Write to us at ${mail}: we reply within one month. We may ask for proof of identity if in doubt.` },
      ],
    },
    {
      title: "Complaints",
      blocks: [{ p: `If you believe your rights are not being respected, you can lodge a complaint with the CNIL (the French data protection authority): ${cnil}.` }],
    },
    {
      title: "Changes",
      blocks: [{ p: "This policy may change. The date of the last update is shown at the top of the page." }],
    },
  ],
}

const es: LegalDoc = {
  title: "Política de privacidad",
  subtitle: "Qué datos recogemos, por qué, y cómo conserva usted el control.",
  updated: "29 de octubre de 2026",
  sections: [
    {
      title: "Quién es responsable de sus datos",
      blocks: [{ p: `${F.name} (${F.address}) es el responsable del tratamiento de los datos recogidos en ${F.site}. Para cualquier pregunta: ${mail}.` }],
    },
    {
      title: "Los datos que recogemos",
      blocks: [
        { p: "Solo recogemos lo necesario:" },
        {
          ul: [
            "**Formulario de contacto**: nombre, correo y teléfono, además de la empresa, un mensaje y detalles sobre su proyecto (longitud de sondas, acceso a Internet en el sitio…) si los indica.",
            "**Datos técnicos**: dirección IP, navegador y páginas consultadas, registrados por nuestro proveedor de alojamiento. La IP también se usa, durante 10 minutos y sin almacenarse, para limitar los envíos abusivos del formulario.",
            "**Rastreadores**: véase la sección « Cookies y rastreadores ».",
          ],
        },
        { note: "Las mediciones de sus sondas no pasan por este sitio. No recogemos datos sensibles." },
      ],
    },
    {
      title: "Para qué los usamos",
      blocks: [
        {
          ul: [
            "Responder a su solicitud de presentación y volver a contactarle: medidas precontractuales a petición suya e interés legítimo en atender a los profesionales que nos contactan.",
            "Garantizar la seguridad del sitio y limitar los abusos: nuestro interés legítimo.",
            "Medir la eficacia de nuestros anuncios de Google Ads: su consentimiento.",
          ],
        },
      ],
    },
    {
      title: "Quién tiene acceso",
      blocks: [
        { p: `Los equipos autorizados de ${F.name} y nuestros proveedores técnicos, que solo actúan siguiendo nuestras instrucciones:` },
        { rows: [[F.host, "Alojamiento del sitio"], ["LWS (Francia)", "Correo electrónico"], ["Google Ireland Limited", "Medición de conversiones de Google Ads"]] },
        { p: "No vendemos ni alquilamos sus datos." },
      ],
    },
    {
      title: "Transferencias fuera de la Unión Europea",
      blocks: [{ p: "Vercel y Google pueden tratar datos en Estados Unidos. Estas transferencias se amparan en las cláusulas contractuales tipo de la Comisión Europea o en el Marco de Privacidad de Datos UE-EE. UU., según el proveedor." }],
    },
    {
      title: "Cuánto tiempo los conservamos",
      blocks: [
        {
          rows: [
            ["Solicitudes de contacto", "3 años tras el último intercambio; después se suprimen o anonimizan"],
            ["Cookie de idioma", "12 meses"],
            ["Cookies de Google Ads", "Duración limitada, fijada por Google"],
            ["IP antiabuso", "10 minutos, sin almacenarse"],
          ],
        },
      ],
    },
    {
      title: "Cookies y rastreadores",
      blocks: [
        {
          rows: [
            ["language", "Recuerda el idioma elegido. Instalada por Prosensor, 12 meses."],
            ["Google Ads", "Mide las conversiones publicitarias, por ejemplo el envío de una solicitud tras hacer clic en un anuncio. Instalada por Google Ireland Limited."],
          ],
        },
        { p: `Puede rechazar o eliminar las cookies en los ajustes de su navegador y gestionar la personalización de anuncios en ${ads}.` },
      ],
    },
    {
      title: "Seguridad",
      blocks: [{ p: "Los intercambios con el sitio están cifrados (HTTPS). Los mensajes del formulario llegan a nuestro correo mediante una conexión cifrada y el acceso se limita a quien lo necesita." }],
    },
    {
      title: "Sus derechos",
      blocks: [
        { p: "En cualquier momento puede solicitar el acceso a sus datos, su rectificación o supresión, la limitación u oposición a su tratamiento, su portabilidad, y retirar su consentimiento. También puede dar instrucciones sobre el destino de sus datos tras su fallecimiento." },
        { p: `Escríbanos a ${mail}: respondemos en un mes. Podemos pedirle un justificante de identidad en caso de duda.` },
      ],
    },
    {
      title: "Reclamaciones",
      blocks: [{ p: `Si considera que no se respetan sus derechos, puede presentar una reclamación ante la CNIL (autoridad francesa de protección de datos): ${cnil}.` }],
    },
    {
      title: "Modificaciones",
      blocks: [{ p: "Esta política puede cambiar. La fecha de la última actualización figura en la parte superior de la página." }],
    },
  ],
}

const de: LegalDoc = {
  title: "Datenschutzerklärung",
  subtitle: "Welche Daten wir erheben, warum, und wie Sie die Kontrolle behalten.",
  updated: "29. Oktober 2026",
  sections: [
    {
      title: "Wer für Ihre Daten verantwortlich ist",
      blocks: [{ p: `${F.name} (${F.address}) ist Verantwortlicher für die auf ${F.site} erhobenen Daten. Bei Fragen: ${mail}.` }],
    },
    {
      title: "Die Daten, die wir erheben",
      blocks: [
        { p: "Wir erheben nur, was nötig ist:" },
        {
          ul: [
            "**Kontaktformular**: Name, E-Mail und Telefonnummer sowie, falls angegeben, Unternehmen, eine Nachricht und Angaben zu Ihrem Projekt (Sondenlänge, Internetzugang vor Ort …).",
            "**Technische Daten**: IP-Adresse, Browser und aufgerufene Seiten, protokolliert von unserem Hosting-Anbieter. Die IP-Adresse dient außerdem, 10 Minuten lang und ohne Speicherung, der Begrenzung missbräuchlicher Formularsendungen.",
            "**Tracker**: siehe Abschnitt „Cookies und Tracker“.",
          ],
        },
        { note: "Die Messwerte Ihrer Sonden laufen nicht über diese Website. Wir erheben keine sensiblen Daten." },
      ],
    },
    {
      title: "Wofür wir sie verwenden",
      blocks: [
        {
          ul: [
            "Um Ihre Anfrage nach einer Vorstellung zu beantworten und Sie zu kontaktieren: vorvertragliche Maßnahmen auf Ihre Anfrage und unser berechtigtes Interesse, Fachleuten zu antworten, die uns kontaktieren.",
            "Um die Sicherheit der Website zu gewährleisten und Missbrauch zu begrenzen: unser berechtigtes Interesse.",
            "Um die Wirksamkeit unserer Google-Ads-Anzeigen zu messen: Ihre Einwilligung.",
          ],
        },
      ],
    },
    {
      title: "Wer Zugriff hat",
      blocks: [
        { p: `Die berechtigten Teams von ${F.name} sowie unsere technischen Dienstleister, die nur auf unsere Weisung handeln:` },
        { rows: [[F.host, "Hosting der Website"], ["LWS (Frankreich)", "E-Mail-Dienst"], ["Google Ireland Limited", "Conversion-Messung für Google Ads"]] },
        { p: "Wir verkaufen oder vermieten Ihre Daten nicht." },
      ],
    },
    {
      title: "Übermittlung außerhalb der Europäischen Union",
      blocks: [{ p: "Vercel und Google können Daten in den USA verarbeiten. Diese Übermittlungen beruhen je nach Dienstleister auf den Standardvertragsklauseln der Europäischen Kommission oder dem EU-US Data Privacy Framework." }],
    },
    {
      title: "Wie lange wir sie speichern",
      blocks: [
        {
          rows: [
            ["Kontaktanfragen", "3 Jahre nach dem letzten Austausch, danach Löschung oder Anonymisierung"],
            ["Sprach-Cookie", "12 Monate"],
            ["Google-Ads-Cookies", "Begrenzte Dauer, von Google festgelegt"],
            ["Anti-Missbrauch-IP-Adresse", "10 Minuten, ohne Speicherung"],
          ],
        },
      ],
    },
    {
      title: "Cookies und Tracker",
      blocks: [
        {
          rows: [
            ["language", "Merkt sich die gewählte Sprache. Gesetzt von Prosensor, 12 Monate."],
            ["Google Ads", "Misst Werbe-Conversions, z. B. das Absenden einer Anfrage nach einem Klick auf eine Anzeige. Gesetzt von Google Ireland Limited."],
          ],
        },
        { p: `Sie können Cookies in den Einstellungen Ihres Browsers ablehnen oder löschen und die Anzeigenpersonalisierung unter ${ads} verwalten.` },
      ],
    },
    {
      title: "Sicherheit",
      blocks: [{ p: "Der Austausch mit der Website ist verschlüsselt (HTTPS). Formularnachrichten gelangen über eine verschlüsselte Verbindung in unser Mailsystem; der Zugriff ist auf die Personen beschränkt, die ihn benötigen." }],
    },
    {
      title: "Ihre Rechte",
      blocks: [
        { p: "Sie können jederzeit Auskunft über Ihre Daten, deren Berichtigung oder Löschung, die Einschränkung oder den Widerspruch gegen die Verarbeitung und die Übertragbarkeit verlangen sowie Ihre Einwilligung widerrufen. Sie können auch Anweisungen für den Umgang mit Ihren Daten nach Ihrem Tod geben." },
        { p: `Schreiben Sie uns an ${mail}: Wir antworten innerhalb eines Monats. Im Zweifelsfall können wir einen Identitätsnachweis verlangen.` },
      ],
    },
    {
      title: "Beschwerde",
      blocks: [{ p: `Wenn Sie der Ansicht sind, dass Ihre Rechte nicht beachtet werden, können Sie sich bei der CNIL (französische Datenschutzbehörde) beschweren: ${cnil}.` }],
    },
    {
      title: "Änderungen",
      blocks: [{ p: "Diese Erklärung kann sich ändern. Das Datum der letzten Aktualisierung steht oben auf der Seite." }],
    },
  ],
}

const pt: LegalDoc = {
  title: "Política de privacidade",
  subtitle: "Que dados recolhemos, porquê, e como mantém o controlo sobre eles.",
  updated: "29 de outubro de 2026",
  sections: [
    {
      title: "Quem é responsável pelos seus dados",
      blocks: [{ p: `A ${F.name} (${F.address}) é responsável pelo tratamento dos dados recolhidos em ${F.site}. Para qualquer questão: ${mail}.` }],
    },
    {
      title: "Os dados que recolhemos",
      blocks: [
        { p: "Recolhemos apenas o necessário:" },
        {
          ul: [
            "**Formulário de contacto**: nome, e-mail e telefone, além da empresa, de uma mensagem e de detalhes sobre o seu projeto (comprimento das sondas, acesso à Internet no local…) se os indicar.",
            "**Dados técnicos**: endereço IP, navegador e páginas consultadas, registados pelo nosso alojamento. O IP também serve, durante 10 minutos e sem ser guardado, para limitar os envios abusivos do formulário.",
            "**Rastreadores**: ver a secção « Cookies e rastreadores ».",
          ],
        },
        { note: "As medições das suas sondas não passam por este site. Não recolhemos dados sensíveis." },
      ],
    },
    {
      title: "Para que os utilizamos",
      blocks: [
        {
          ul: [
            "Responder ao seu pedido de apresentação e voltar a contactá-lo: diligências pré-contratuais a seu pedido e o nosso interesse legítimo em responder aos profissionais que nos contactam.",
            "Garantir a segurança do site e limitar abusos: o nosso interesse legítimo.",
            "Medir a eficácia dos nossos anúncios Google Ads: o seu consentimento.",
          ],
        },
      ],
    },
    {
      title: "Quem tem acesso",
      blocks: [
        { p: `As equipas autorizadas da ${F.name} e os nossos prestadores técnicos, que atuam apenas segundo as nossas instruções:` },
        { rows: [[F.host, "Alojamento do site"], ["LWS (França)", "Correio eletrónico"], ["Google Ireland Limited", "Medição de conversões Google Ads"]] },
        { p: "Não vendemos nem alugamos os seus dados." },
      ],
    },
    {
      title: "Transferências para fora da União Europeia",
      blocks: [{ p: "A Vercel e a Google podem tratar dados nos Estados Unidos. Estas transferências são enquadradas pelas cláusulas contratuais-tipo da Comissão Europeia ou pelo Quadro de Privacidade de Dados UE-EUA, consoante o prestador." }],
    },
    {
      title: "Durante quanto tempo os conservamos",
      blocks: [
        {
          rows: [
            ["Pedidos de contacto", "3 anos após a última troca; depois eliminados ou anonimizados"],
            ["Cookie de idioma", "12 meses"],
            ["Cookies Google Ads", "Duração limitada, definida pela Google"],
            ["IP antiabuso", "10 minutos, sem ser guardado"],
          ],
        },
      ],
    },
    {
      title: "Cookies e rastreadores",
      blocks: [
        {
          rows: [
            ["language", "Memoriza o idioma escolhido. Colocado pela Prosensor, 12 meses."],
            ["Google Ads", "Mede as conversões publicitárias, por exemplo o envio de um pedido após clicar num anúncio. Colocado pela Google Ireland Limited."],
          ],
        },
        { p: `Pode recusar ou eliminar os cookies nas definições do navegador e gerir a personalização de anúncios em ${ads}.` },
      ],
    },
    {
      title: "Segurança",
      blocks: [{ p: "As trocas com o site são cifradas (HTTPS). As mensagens do formulário chegam ao nosso correio por uma ligação cifrada e o acesso é limitado a quem precisa." }],
    },
    {
      title: "Os seus direitos",
      blocks: [
        { p: "Pode, a qualquer momento, pedir o acesso aos seus dados, a retificação ou o apagamento, a limitação ou a oposição ao tratamento, a portabilidade, e retirar o seu consentimento. Pode também dar instruções sobre o destino dos seus dados após a sua morte." },
        { p: `Escreva-nos para ${mail}: respondemos no prazo de um mês. Podemos pedir um comprovativo de identidade em caso de dúvida.` },
      ],
    },
    {
      title: "Reclamações",
      blocks: [{ p: `Se considerar que os seus direitos não são respeitados, pode apresentar reclamação à CNIL (autoridade francesa de proteção de dados): ${cnil}.` }],
    },
    {
      title: "Alterações",
      blocks: [{ p: "Esta política pode evoluir. A data da última atualização está indicada no topo da página." }],
    },
  ],
}

const ro: LegalDoc = {
  title: "Politica de confidențialitate",
  subtitle: "Ce date colectăm, de ce, și cum păstrați controlul asupra lor.",
  updated: "29 octombrie 2026",
  sections: [
    {
      title: "Cine răspunde de datele dvs.",
      blocks: [{ p: `${F.name} (${F.address}) este operatorul datelor colectate pe ${F.site}. Pentru orice întrebare: ${mail}.` }],
    },
    {
      title: "Datele pe care le colectăm",
      blocks: [
        { p: "Colectăm doar ce este necesar:" },
        {
          ul: [
            "**Formularul de contact**: nume, e-mail și telefon, plus compania, un mesaj și detalii despre proiectul dvs. (lungimea sondelor, acces la internet pe amplasament…) dacă le completați.",
            "**Date tehnice**: adresa IP, browserul și paginile consultate, înregistrate de găzduitorul nostru. Adresa IP servește și, 10 minute și fără a fi stocată, la limitarea trimiterilor abuzive ale formularului.",
            "**Trackere**: vezi secțiunea „Cookie-uri și trackere”.",
          ],
        },
        { note: "Măsurătorile sondelor dvs. nu trec prin acest site. Nu colectăm date sensibile." },
      ],
    },
    {
      title: "De ce le folosim",
      blocks: [
        {
          ul: [
            "Pentru a răspunde cererii dvs. de prezentare și a vă contacta: demersuri precontractuale la cererea dvs. și interesul nostru legitim de a răspunde profesioniștilor care ne contactează.",
            "Pentru a asigura securitatea site-ului și a limita abuzurile: interesul nostru legitim.",
            "Pentru a măsura eficiența anunțurilor noastre Google Ads: consimțământul dvs.",
          ],
        },
      ],
    },
    {
      title: "Cine are acces",
      blocks: [
        { p: `Echipele autorizate ale ${F.name} și prestatorii noștri tehnici, care acționează doar la instrucțiunile noastre:` },
        { rows: [[F.host, "Găzduirea site-ului"], ["LWS (Franța)", "Poștă electronică"], ["Google Ireland Limited", "Măsurarea conversiilor Google Ads"]] },
        { p: "Nu vă vindem și nu vă închiriem datele." },
      ],
    },
    {
      title: "Transferuri în afara Uniunii Europene",
      blocks: [{ p: "Vercel și Google pot prelucra date în Statele Unite. Aceste transferuri sunt acoperite de clauzele contractuale standard ale Comisiei Europene sau de cadrul UE-SUA privind protecția datelor, în funcție de prestator." }],
    },
    {
      title: "Cât timp le păstrăm",
      blocks: [
        {
          rows: [
            ["Cereri de contact", "3 ani de la ultimul schimb, apoi ștergere sau anonimizare"],
            ["Cookie de limbă", "12 luni"],
            ["Cookie-uri Google Ads", "Durată limitată, stabilită de Google"],
            ["IP anti-abuz", "10 minute, fără stocare"],
          ],
        },
      ],
    },
    {
      title: "Cookie-uri și trackere",
      blocks: [
        {
          rows: [
            ["language", "Reține limba aleasă. Plasat de Prosensor, 12 luni."],
            ["Google Ads", "Măsoară conversiile publicitare, de exemplu trimiterea unei cereri după un clic pe un anunț. Plasat de Google Ireland Limited."],
          ],
        },
        { p: `Puteți refuza sau șterge cookie-urile din setările browserului și puteți gestiona personalizarea anunțurilor pe ${ads}.` },
      ],
    },
    {
      title: "Securitate",
      blocks: [{ p: "Schimburile cu site-ul sunt criptate (HTTPS). Mesajele din formular ajung în poșta noastră printr-o conexiune criptată, iar accesul este limitat la persoanele care au nevoie de el." }],
    },
    {
      title: "Drepturile dvs.",
      blocks: [
        { p: "Puteți oricând solicita accesul la date, rectificarea sau ștergerea lor, restricționarea sau opoziția la prelucrare, portabilitatea și puteți retrage consimțământul. Puteți da și instrucțiuni privind soarta datelor după decesul dvs." },
        { p: `Scrieți-ne la ${mail}: răspundem în termen de o lună. Putem solicita un act de identitate în caz de îndoială.` },
      ],
    },
    {
      title: "Reclamații",
      blocks: [{ p: `Dacă apreciați că drepturile dvs. nu sunt respectate, puteți depune o plângere la CNIL (autoritatea franceză pentru protecția datelor): ${cnil}.` }],
    },
    {
      title: "Modificări",
      blocks: [{ p: "Această politică poate evolua. Data ultimei actualizări este afișată în partea de sus a paginii." }],
    },
  ],
}

export const privacyDocs: Record<LegalLang, LegalDoc> = { fr, en, es, de, pt, ro }

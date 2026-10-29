/**
 * Textes de la page Documentation, dans les 6 langues : une seule procédure d'installation en cinq étapes
 * (passerelle, connexion Ethernet, vérification des voyants, sonde, objectifs / phases / campagne).
 */
export type DocLang = "fr" | "en" | "es" | "de" | "pt" | "ro"

export type DocCopy = {
  home: string
  title: string
  lead: string
  toc: string
  cta: { title: string; text: string }
}

/** La procédure d'installation, dans l'ordre : passerelle, connexion, vérification, sonde, campagne. */
export type DocSteps = {
  stepsLabel: string
  power: { title: string; text: string }
  connect: { title: string; lead: string; ethernetSteps: string[] }
  /** `leds` : le texte lu par les lecteurs d'écran pour chacun des trois voyants dessinés. */
  check: { title: string; lead: string; leds: { eth: string; net: string; power: string } }
  probe: { title: string; lead: string; tips: string[] }
  campaign: { title: string; steps: string[] }
}

export const docCopy: Record<DocLang, DocCopy> = {
  fr: {
    home: "Accueil",
    title: "Documentation",
    lead: "De la passerelle à la première alerte : l'installation, dans l'ordre.",
    toc: "Sommaire",
    cta: { title: "Besoin d'aide ?", text: "Un conseiller Prosensor vous répond par téléphone ou par e-mail." },
  },
  en: {
    home: "Home",
    title: "Documentation",
    lead: "From the gateway to your first alert: the installation, in order.",
    toc: "Contents",
    cta: { title: "Need help?", text: "A Prosensor advisor will answer by phone or e-mail." },
  },
  es: {
    home: "Inicio",
    title: "Documentación",
    lead: "De la pasarela a la primera alerta: la instalación, en orden.",
    toc: "Contenido",
    cta: { title: "¿Necesita ayuda?", text: "Un asesor de Prosensor le responde por teléfono o por correo." },
  },
  de: {
    home: "Start",
    title: "Dokumentation",
    lead: "Vom Gateway bis zur ersten Warnung: die Installation, der Reihe nach.",
    toc: "Inhalt",
    cta: { title: "Brauchen Sie Hilfe?", text: "Ein Prosensor-Berater antwortet per Telefon oder E-Mail." },
  },
  pt: {
    home: "Início",
    title: "Documentação",
    lead: "Do gateway ao primeiro alerta: a instalação, por ordem.",
    toc: "Índice",
    cta: { title: "Precisa de ajuda?", text: "Um consultor da Prosensor responde por telefone ou por e-mail." },
  },
  ro: {
    home: "Acasă",
    title: "Documentație",
    lead: "De la gateway la prima alertă: instalarea, în ordine.",
    toc: "Cuprins",
    cta: { title: "Aveți nevoie de ajutor?", text: "Un consultant Prosensor vă răspunde prin telefon sau e-mail." },
  },
}

export const docSteps: Record<DocLang, DocSteps> = {
  fr: {
    stepsLabel: "Installation",
    power: { title: "Brancher la passerelle", text: "Branchez-la au secteur avec son câble d'alimentation et attendez 1 à 2 minutes. Placez-la sur le site, à moins de 2 km des sondes en champ libre." },
    connect: { title: "La connecter à Internet", lead: "Le plus simple et le plus fiable : un câble entre votre box et la passerelle.", ethernetSteps: ["Branchez le câble Ethernet entre votre box et la passerelle.", "C'est tout : la connexion se fait toute seule en 1 à 2 minutes."] },
    check: { title: "Vérifier la connexion", lead: "Les trois voyants de la passerelle doivent être comme ci-dessous.", leds: { eth: "Ethernet : voyant vert", net: "Internet : voyant vert", power: "Alimentation : voyant rouge" } },
    probe: { title: "Allumer et planter la sonde", lead: "La passerelle est prête : vous pouvez installer les sondes.", tips: ["Appuyez 5 secondes sur le bouton du boîtier pour allumer la sonde.", "Enfoncez-la à la main, avec les deux poignées, au cœur de l'andain.", "Visez au moins 50 cm de profondeur, idéalement entre 80 cm et 1 m.", "Gardez le même emplacement pendant toute la campagne."] },
    campaign: { title: "Objectifs, phases et campagne", steps: ["Créez vos objectifs de température.", "Utilisez-les dans vos phases : fermentation, hygiénisation et maturation.", "Créez ensuite une campagne et reliez la sonde à son andain.", "Suivez les données en direct, recevez les alertes par SMS ou e-mail et exportez les rapports."] },
  },
  en: {
    stepsLabel: "Installation",
    power: { title: "Plug in the gateway", text: "Plug it into the mains with its power cable and wait 1 to 2 minutes. Place it on site, within 2 km of the probes in open field." },
    connect: { title: "Connect it to the Internet", lead: "The simplest and most reliable option: a cable between your router and the gateway.", ethernetSteps: ["Plug the Ethernet cable between your router and the gateway.", "That's all: it connects by itself within 1 to 2 minutes."] },
    check: { title: "Check the connection", lead: "The gateway's three lights should look like this.", leds: { eth: "Ethernet: green light", net: "Internet: green light", power: "Power: red light" } },
    probe: { title: "Switch on and push in the probe", lead: "The gateway is ready: you can now install the probes.", tips: ["Press the button on the housing for 5 seconds to switch the probe on.", "Push it in by hand, using the two handles, into the core of the windrow.", "Aim for at least 50 cm deep, ideally between 80 cm and 1 m.", "Keep the same spot for the whole campaign."] },
    campaign: { title: "Objectives, phases and campaign", steps: ["Create your temperature objectives.", "Use them in your phases: fermentation, hygienisation and maturation.", "Then create a campaign and link the probe to its windrow.", "Follow live data, get SMS or e-mail alerts and export reports."] },
  },
  es: {
    stepsLabel: "Instalación",
    power: { title: "Conectar la pasarela", text: "Conéctela a la red eléctrica con su cable de alimentación y espere de 1 a 2 minutos. Colóquela en el sitio, a menos de 2 km de las sondas en campo abierto." },
    connect: { title: "Conectarla a Internet", lead: "La opción más sencilla y fiable: un cable entre su router y la pasarela.", ethernetSteps: ["Conecte el cable Ethernet entre su router y la pasarela.", "Eso es todo: se conecta sola en 1 a 2 minutos."] },
    check: { title: "Comprobar la conexión", lead: "Los tres indicadores de la pasarela deben verse como abajo.", leds: { eth: "Ethernet: indicador verde", net: "Internet: indicador verde", power: "Alimentación: indicador rojo" } },
    probe: { title: "Encender y clavar la sonda", lead: "La pasarela está lista: ya puede instalar las sondas.", tips: ["Pulse 5 segundos el botón de la caja para encender la sonda.", "Clávela a mano, con las dos asas, en el núcleo de la hilera.", "Busque al menos 50 cm de profundidad, idealmente entre 80 cm y 1 m.", "Mantenga el mismo lugar durante toda la campaña."] },
    campaign: { title: "Objetivos, fases y campaña", steps: ["Cree sus objetivos de temperatura.", "Utilícelos en sus fases: fermentación, higienización y maduración.", "Después cree una campaña y vincule la sonda a su hilera.", "Siga los datos en directo, reciba alertas por SMS o correo y exporte los informes."] },
  },
  de: {
    stepsLabel: "Installation",
    power: { title: "Gateway anschließen", text: "Schließen Sie es mit dem Netzkabel ans Stromnetz an und warten Sie 1 bis 2 Minuten. Stellen Sie es vor Ort auf, im freien Feld höchstens 2 km von den Sonden entfernt." },
    connect: { title: "Mit dem Internet verbinden", lead: "Am einfachsten und zuverlässigsten: ein Kabel zwischen Router und Gateway.", ethernetSteps: ["Stecken Sie das Ethernet-Kabel zwischen Router und Gateway.", "Das war's: Es verbindet sich in 1 bis 2 Minuten von selbst."] },
    check: { title: "Verbindung prüfen", lead: "Die drei LEDs des Gateways sollten so aussehen.", leds: { eth: "Ethernet: grüne LED", net: "Internet: grüne LED", power: "Stromversorgung: rote LED" } },
    probe: { title: "Sonde einschalten und einstecken", lead: "Das Gateway ist bereit: Sie können jetzt die Sonden installieren.", tips: ["Drücken Sie 5 Sekunden lang die Taste am Gehäuse, um die Sonde einzuschalten.", "Stecken Sie sie von Hand, mit den beiden Griffen, in den Kern der Miete.", "Peilen Sie mindestens 50 cm Tiefe an, idealerweise zwischen 80 cm und 1 m.", "Behalten Sie dieselbe Stelle für die ganze Kampagne bei."] },
    campaign: { title: "Ziele, Phasen und Kampagne", steps: ["Legen Sie Ihre Temperaturziele an.", "Verwenden Sie sie in Ihren Phasen: Fermentation, Hygienisierung und Reifung.", "Erstellen Sie danach eine Kampagne und verknüpfen Sie die Sonde mit ihrer Miete.", "Verfolgen Sie die Live-Daten, erhalten Sie Warnungen per SMS oder E-Mail und exportieren Sie Berichte."] },
  },
  pt: {
    stepsLabel: "Instalação",
    power: { title: "Ligar o gateway", text: "Ligue-o à rede elétrica com o cabo de alimentação e aguarde 1 a 2 minutos. Coloque-o no local, a menos de 2 km das sondas em campo aberto." },
    connect: { title: "Ligá-lo à Internet", lead: "O mais simples e fiável: um cabo entre o seu router e o gateway.", ethernetSteps: ["Ligue o cabo Ethernet entre o seu router e o gateway.", "É tudo: liga-se sozinho em 1 a 2 minutos."] },
    check: { title: "Verificar a ligação", lead: "Os três LED do gateway devem estar como abaixo.", leds: { eth: "Ethernet: LED verde", net: "Internet: LED verde", power: "Alimentação: LED vermelho" } },
    probe: { title: "Ligar e cravar a sonda", lead: "O gateway está pronto: já pode instalar as sondas.", tips: ["Prima durante 5 segundos o botão da caixa para ligar a sonda.", "Crave-a à mão, com as duas pegas, no núcleo da leira.", "Procure pelo menos 50 cm de profundidade, idealmente entre 80 cm e 1 m.", "Mantenha o mesmo local durante toda a campanha."] },
    campaign: { title: "Objetivos, fases e campanha", steps: ["Crie os seus objetivos de temperatura.", "Utilize-os nas suas fases: fermentação, higienização e maturação.", "Depois crie uma campanha e associe a sonda à sua leira.", "Acompanhe os dados em direto, receba alertas por SMS ou e-mail e exporte os relatórios."] },
  },
  ro: {
    stepsLabel: "Instalare",
    power: { title: "Conectați gateway-ul", text: "Conectați-l la rețeaua electrică cu cablul de alimentare și așteptați 1-2 minute. Plasați-l pe amplasament, la mai puțin de 2 km de sonde în câmp deschis." },
    connect: { title: "Conectați-l la internet", lead: "Cea mai simplă și fiabilă variantă: un cablu între router și gateway.", ethernetSteps: ["Conectați cablul Ethernet între router și gateway.", "Atât: se conectează singur în 1-2 minute."] },
    check: { title: "Verificați conexiunea", lead: "Cele trei LED-uri ale gateway-ului trebuie să arate ca mai jos.", leds: { eth: "Ethernet: LED verde", net: "Internet: LED verde", power: "Alimentare: LED roșu" } },
    probe: { title: "Porniți și înfigeți sonda", lead: "Gateway-ul este gata: puteți instala sondele.", tips: ["Apăsați 5 secunde butonul de pe carcasă pentru a porni sonda.", "Înfigeți-o cu mâna, folosind cele două mânere, în miezul șirului.", "Țintiți cel puțin 50 cm adâncime, ideal între 80 cm și 1 m.", "Păstrați același loc pe toată durata campaniei."] },
    campaign: { title: "Obiective, faze și campanie", steps: ["Creați obiectivele de temperatură.", "Folosiți-le în fazele dvs.: fermentare, igienizare și maturare.", "Apoi creați o campanie și asociați sonda cu șirul ei.", "Urmăriți datele în direct, primiți alerte prin SMS sau e-mail și exportați rapoartele."] },
  },
}

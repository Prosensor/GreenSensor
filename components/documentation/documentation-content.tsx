"use client"

import Link from "next/link"
import { useI18n } from "@/i18n/i18n-provider"
import { ChevronRight, BookOpen, Wifi, Cpu, Power, Shield, AlertCircle, ExternalLink, Zap, HelpCircle, CheckCircle2 } from "lucide-react"

const anchor = (id: string) => id

export function DocumentationContent() {
  const { language } = useI18n()
  const isFr = language === "fr"
  const isEs = language === "es"
  const isDe = language === "de"
  const isPt = language === "pt"
  const isRo = language === "ro"
  const tr = (fr: string, en: string, es: string, de: string, pt: string, ro: string) =>
    language === "fr" ? fr : language === "es" ? es : language === "de" ? de : language === "pt" ? pt : language === "ro" ? ro : en

  const frText = {
        breadcrumb: "Documentation",
        title: "Guide d'utilisation",
        subtitle: "Connecter votre passerelle GreenSensor",
        intro: "Ce guide vous explique pas à pas comment installer et connecter la passerelle qui relie vos sondes à l’interface GreenSensor. Aucune compétence technique n’est nécessaire : suivez les étapes dans l’ordre.",
        toc: "Sommaire",
        start: "Par où commencer ?",
        startSteps: [
          "Branchez la passerelle au secteur (câble d’alimentation).",
          "Attendez 1 à 2 minutes. Regardez les voyants sur la passerelle (voir la section « Comprendre les voyants »).",
          "Choisissez comment la connecter à Internet (voir « Quelle connexion choisir ? »).",
          "Ouvrez la page de réglages dans votre navigateur (voir la section correspondant à votre type de connexion).",
          "Une fois connectée, le voyant principal en façade (souvent noté « SYS ») doit être vert fixe. Vous pouvez alors utiliser l’interface GreenSensor comme d’habitude.",
        ],
        whichConnection: "Quelle connexion choisir ?",
        whichConnectionIntro: "Répondez aux questions ci-dessous pour savoir quelle option utiliser. En cas de doute, contactez Prosensor.",
        whichConnectionQ1: "Avez-vous Internet sur votre site (box / Wi-Fi) ?",
        whichConnectionQ1Yes: "Oui, j’ai une box ou du Wi-Fi",
        whichConnectionQ1No: "Non, pas d’Internet sur le site",
        whichConnectionQ2: "Peux-tu tirer un câble réseau (Ethernet) de ta box jusqu’à l’endroit où se trouve la passerelle ?",
        whichConnectionQ2Yes: "Oui → utilisez la connexion par câble (Ethernet). C’est le plus simple et le plus fiable.",
        whichConnectionQ2No: "Non → utilisez la connexion Wi-Fi : la passerelle se connecte à votre box en Wi-Fi.",
        whichConnectionNoInternet: "Avec la solution GreenSensor, une passerelle 4G peut être fournie (sans box sur le site). Prosensor vous indiquera la procédure. Si vous avez déjà une passerelle et pas d’Internet, contactez-nous.",
        whichConnectionFirstTime: "Première installation ou dépannage : vous pouvez aussi vous connecter directement au Wi-Fi émis par la passerelle (ou en câble PC direct) pour accéder à la page de réglages. Voir les sections « Connexion Wi-Fi directe » et « Connexion câble PC direct ».",
        connexion: "Comment me connecter ? (détail)",
        connexionIntro: "La « page de réglages » (ou interface Web) est une page que vous ouvrez dans votre navigateur (Chrome, Firefox, etc.) pour configurer la passerelle. Les identifiants par défaut sont indiqués à la fin de cette section.",
        leds: "Comprendre les voyants",
        ledsIntro: "Sur la passerelle, plusieurs voyants (LED) indiquent si tout fonctionne. Sur le boîtier, ils peuvent être notés POWER, ETH, SYS, WIFI. Voici ce qu’il faut retenir :",
        ledsOk: "Tout va bien",
        ledsOkDetail: "Le voyant principal en façade (souvent noté « SYS » ou un symbole de connexion) est vert fixe → la passerelle est connectée à Internet et à GreenSensor. Vous n’avez rien à faire.",
        ledsProblem: "Problème de connexion",
        ledsProblemDetail: "Le voyant clignote en vert ou est rouge → la passerelle n’est pas bien connectée à Internet. Suivez la section « Les données ne remontent plus » ou vérifiez votre type de connexion (câble bien branché, mot de passe Wi-Fi correct, etc.).",
        ledsList: [
          { name: "Alimentation (voyant rouge « POWER »)", meaning: "Allumé = la passerelle est alimentée." },
          { name: "Voyant câble (souvent noté « ETH »)", meaning: "Vert qui clignote = le câble réseau est branché et détecté." },
          { name: "Voyant principal (souvent noté « SYS »)", meaning: "Vert fixe = tout est OK. Vert clignotant ou rouge = pas de connexion Internet ou en cours de démarrage." },
          { name: "Voyant Wi-Fi (souvent noté « WIFI »)", meaning: "Indique la connexion Wi-Fi. Vert fixe = connecté. Vert clignotant = pas connecté au serveur." },
        ],
        depannage: "Les données ne remontent plus",
        depannageIntro: "Si vos sondes n’envoient plus de données sur l’interface GreenSensor, suivez ces étapes dans l’ordre :",
        depannageSteps: [
          "Regardez le voyant principal (SYS) ou le voyant WIFI sur la passerelle : s’il clignote en vert, la passerelle n’est plus connectée au serveur.",
          "Sur un ordinateur, ouvrez la page de réglages de la passerelle (comme lors de la première installation — en Wi-Fi direct ou par câble selon votre cas).",
          "Sur la page d’accueil de la WebUI, si le logo LoRa affiche une coche rouge, cliquez dessus. Une autre page s’ouvre (LoRaWan – Basic Station).",
          "En bas de cette page, cliquez sur le bouton « Save & Apply » (Enregistrer et appliquer). Cela réinitialise la connexion au serveur.",
          "Revenez sur la page d’accueil : le logo LoRa doit maintenant avoir une coche verte, et le voyant principal sur la passerelle doit passer au vert fixe. Les données devraient recommencer à remonter.",
        ],
        depannageContact: "Si après ces étapes les données ne remontent toujours pas, contactez Prosensor (téléphone ou e-mail) en indiquant ce que vous voyez sur les voyants.",
        button: "Le bouton sur la passerelle",
        buttonIntro: "Un petit bouton (souvent dans un trou) permet de réinitialiser la connexion ou les réglages :",
        buttonShort: "Appui court (4 à 5 secondes) : recharge la connexion réseau et le Wi-Fi. Utile si la passerelle ne se connecte plus. Le voyant du câble (ETH) clignote en bleu pendant l’opération.",
        buttonLong: "Appui long (plus de 10 secondes) : restaure les réglages d’usine (mot de passe Wi-Fi de la passerelle, etc.). Les données déjà enregistrées ne sont pas effacées. À utiliser seulement en cas de besoin ou sur conseil de Prosensor.",
        credentials: "Identifiants pour ouvrir la page de réglages",
        credentialsDetail: "La première fois que vous ouvrez la page de réglages de la passerelle, utilisez :",
        credentialsUser: "Nom d’utilisateur :",
        credentialsPass: "Mot de passe :",
        credentialsNote: "Nous vous conseillons de noter ces identifiants dans un endroit sûr. Vous pouvez les modifier plus tard dans les réglages si vous le souhaitez.",
        technical: "Détails techniques (pour les techniciens)",
        technicalIntro: "Pour les personnes à l’aise avec le réseau : paramètres avancés, adresses IP, règles pare-feu.",
        back: "Retour à l’accueil",
        refGreen: "Documentation GreenSensor. Pour toute question : contact Prosensor.",
      }

  const enText = {
        breadcrumb: "Documentation",
        title: "User guide",
        subtitle: "Connect your GreenSensor gateway",
        intro: "This guide explains step by step how to install and connect the gateway that links your probes to the GreenSensor interface. No technical skills required: follow the steps in order.",
        toc: "Table of contents",
        start: "Where do I start?",
        startSteps: [
          "Plug the gateway into the mains (power cable).",
          "Wait 1 to 2 minutes. Check the lights on the gateway (see « Understanding the lights »).",
          "Choose how to connect it to the Internet (see « Which connection? »).",
          "Open the settings page in your browser (see the section for your connection type).",
          "Once connected, the main front light (often labelled \"SYS\") should be solid green. You can then use the GreenSensor interface as usual.",
        ],
        whichConnection: "Which connection should I use?",
        whichConnectionIntro: "Answer the questions below to know which option to use. When in doubt, contact Prosensor.",
        whichConnectionQ1: "Do you have Internet on site (router / Wi‑Fi)?",
        whichConnectionQ1Yes: "Yes, I have a router or Wi‑Fi",
        whichConnectionQ1No: "No Internet on site",
        whichConnectionQ2: "Can you run a network cable (Ethernet) from your router to where the gateway is?",
        whichConnectionQ2Yes: "Yes → use cable (Ethernet) connection. It’s the simplest and most reliable.",
        whichConnectionQ2No: "No → use Wi‑Fi connection: the gateway connects to your router via Wi‑Fi.",
        whichConnectionNoInternet: "With the GreenSensor solution, a 4G gateway can be supplied (no router on site). Prosensor will give you the procedure. If you already have a gateway and no Internet, contact us.",
        whichConnectionFirstTime: "First-time setup or troubleshooting: you can also connect directly to the Wi‑Fi emitted by the gateway (or direct PC cable) to open the settings page. See « Direct Wi‑Fi connection » and « Direct PC cable connection ».",
        connexion: "How do I connect? (details)",
        connexionIntro: "The « settings page » (or Web interface) is a page you open in your browser (Chrome, Firefox, etc.) to configure the gateway. Default login details are given at the end of this section.",
        leds: "Understanding the lights",
        ledsIntro: "Several lights (LEDs) on the gateway show whether everything is working. On the case, they may be labelled POWER, ETH, SYS, WIFI. Here’s what to remember:",
        ledsOk: "All good",
        ledsOkDetail: "The main front light (often labelled \"SYS\" or with a connection symbol) is solid green → the gateway is connected to the Internet and GreenSensor. Nothing to do.",
        ledsProblem: "Connection problem",
        ledsProblemDetail: "The light is blinking green or is red → the gateway is not properly connected to the Internet. Follow the « Data no longer updating » section or check your connection (cable plugged in, correct Wi‑Fi password, etc.).",
        ledsList: [
          { name: "Power (red \"POWER\" light)", meaning: "On = gateway is powered." },
          { name: "Cable light (often labelled \"ETH\")", meaning: "Green blinking = network cable is plugged in and detected." },
          { name: "Main light (often labelled \"SYS\")", meaning: "Solid green = all OK. Blinking green or red = no Internet or still starting up." },
          { name: "Wi‑Fi light (often labelled \"WIFI\")", meaning: "Shows Wi‑Fi connection. Solid green = connected. Blinking green = not connected to server." },
        ],
        depannage: "Data no longer updating",
        depannageIntro: "If your probes stop sending data to the GreenSensor interface, follow these steps in order:",
        depannageSteps: [
          "Check the main (SYS) or WIFI light on the gateway: if it’s blinking green, the gateway is no longer connected to the server.",
          "On a computer, open the gateway settings page (as during first setup — via direct Wi‑Fi or cable, depending on your case).",
          "On the home page, if the LoRa logo shows a red check, click it. Another page opens (LoRaWan – Basic Station).",
          "At the bottom of that page, click the « Save & Apply » button. This resets the connection to the server.",
          "Go back to the home page: the LoRa logo should now have a green check, and the light on the gateway should be solid green. Data should start updating again.",
        ],
        depannageContact: "If data still doesn’t update after these steps, contact Prosensor (phone or email) and describe what you see on the lights.",
        button: "The button on the gateway",
        buttonIntro: "A small button (often in a small hole) lets you reset the connection or settings:",
        buttonShort: "Short press (4–5 seconds): reloads the network and Wi‑Fi connection. Use when the gateway won’t connect. The cable (ETH) light blinks blue during the operation.",
        buttonLong: "Long press (over 10 seconds): restores factory settings (gateway Wi‑Fi password, etc.). Stored data is not erased. Use only when needed or on Prosensor’s advice.",
        credentials: "Login to open the settings page",
        credentialsDetail: "The first time you open the gateway settings page, use:",
        credentialsUser: "Username:",
        credentialsPass: "Password:",
        credentialsNote: "We recommend writing these down. You can change them later in the settings if you wish.",
        technical: "Technical details (for technicians)",
        technicalIntro: "For those familiar with networking: advanced settings, IP addresses, firewall rules.",
        back: "Back to home",
        refGreen: "GreenSensor documentation. For any questions: contact Prosensor.",
      }

  const esText = {
    breadcrumb: "Documentación",
    title: "Guía de usuario",
    subtitle: "Conectar su pasarela GreenSensor",
    intro: "Esta guía explica paso a paso cómo instalar y conectar la pasarela que vincula sus sondas con la interfaz GreenSensor. No se requieren conocimientos técnicos: siga los pasos en orden.",
    toc: "Índice",
    start: "¿Por dónde empezar?",
    startSteps: [
      "Conecte la pasarela a la corriente (cable de alimentación).",
      "Espere 1 o 2 minutos. Revise las luces de la pasarela (ver « Comprender los indicadores »).",
      "Elija cómo conectarla a Internet (ver « ¿Qué conexión elegir? »).",
      "Abra la página de ajustes en su navegador (según su tipo de conexión).",
      "Una vez conectada, el indicador principal frontal (normalmente « SYS ») debe quedar en verde fijo. Ya puede usar la interfaz GreenSensor.",
    ],
    whichConnection: "¿Qué conexión elegir?",
    whichConnectionIntro: "Responda las preguntas siguientes para elegir la opción adecuada. En caso de duda, contacte con Prosensor.",
    whichConnectionQ1: "¿Tiene Internet en su sitio (router / Wi‑Fi)?",
    whichConnectionQ1Yes: "Sí, tengo router o Wi‑Fi",
    whichConnectionQ1No: "No, no hay Internet en el sitio",
    whichConnectionQ2: "¿Puede llevar un cable de red (Ethernet) desde el router hasta la pasarela?",
    whichConnectionQ2Yes: "Sí → use conexión por cable (Ethernet). Es la más simple y fiable.",
    whichConnectionQ2No: "No → use conexión Wi‑Fi: la pasarela se conecta al router por Wi‑Fi.",
    whichConnectionNoInternet: "Con GreenSensor se puede suministrar una pasarela 4G (sin router en el sitio). Prosensor le indicará el procedimiento.",
    whichConnectionFirstTime: "Primera instalación o soporte: también puede conectarse al Wi‑Fi emitido por la pasarela (o por cable directo al PC) para acceder a los ajustes.",
    connexion: "¿Cómo me conecto? (detalle)",
    connexionIntro: "La « página de ajustes » (interfaz web) se abre en su navegador para configurar la pasarela. Las credenciales por defecto están al final de esta sección.",
    leds: "Comprender los indicadores",
    ledsIntro: "Varios LED de la pasarela muestran si todo funciona. En la carcasa pueden aparecer como POWER, ETH, SYS, WIFI.",
    ledsOk: "Todo correcto",
    ledsOkDetail: "El indicador principal frontal (normalmente « SYS ») en verde fijo significa que la pasarela está conectada a Internet y a GreenSensor.",
    ledsProblem: "Problema de conexión",
    ledsProblemDetail: "Si el indicador parpadea en verde o está en rojo, la pasarela no está bien conectada a Internet.",
    ledsList: [
      { name: "Alimentación (LED rojo « POWER »)", meaning: "Encendido = la pasarela tiene alimentación." },
      { name: "LED de cable (normalmente « ETH »)", meaning: "Parpadeo verde = cable de red conectado y detectado." },
      { name: "LED principal (normalmente « SYS »)", meaning: "Verde fijo = correcto. Verde intermitente o rojo = sin Internet o iniciando." },
      { name: "LED Wi‑Fi (normalmente « WIFI »)", meaning: "Indica estado Wi‑Fi. Verde fijo = conectado. Verde intermitente = no conectado al servidor." },
    ],
    depannage: "Los datos ya no se actualizan",
    depannageIntro: "Si sus sondas dejan de enviar datos a GreenSensor, siga estos pasos en orden:",
    depannageSteps: [
      "Revise el LED SYS o WIFI: si parpadea en verde, la pasarela ya no está conectada al servidor.",
      "Abra la página de ajustes desde un ordenador (como en la primera instalación).",
      "En inicio, si el logo LoRa tiene marca roja, haga clic para abrir LoRaWan – Basic Station.",
      "Al final de la página, pulse « Save & Apply » para reiniciar la conexión.",
      "Vuelva al inicio: el logo LoRa debe quedar en verde y el LED principal en verde fijo.",
    ],
    depannageContact: "Si tras estos pasos no se restablecen los datos, contacte con Prosensor e indique el estado de los LED.",
    button: "Botón en la pasarela",
    buttonIntro: "Un pequeño botón (a menudo en un orificio) permite reiniciar conexión o ajustes:",
    buttonShort: "Pulsación corta (4–5 s): recarga la conexión de red y Wi‑Fi.",
    buttonLong: "Pulsación larga (más de 10 s): restaura ajustes de fábrica.",
    credentials: "Credenciales para abrir la página de ajustes",
    credentialsDetail: "La primera vez, use:",
    credentialsUser: "Usuario:",
    credentialsPass: "Contraseña:",
    credentialsNote: "Le recomendamos guardar estas credenciales en un lugar seguro.",
    technical: "Detalles técnicos (para técnicos)",
    technicalIntro: "Para perfiles técnicos: ajustes avanzados, IP y reglas de firewall.",
    back: "Volver al inicio",
    refGreen: "Documentación GreenSensor. Para cualquier duda: contacte con Prosensor.",
  }

  const deText = {
    breadcrumb: "Dokumentation",
    title: "Benutzerhandbuch",
    subtitle: "Ihr GreenSensor-Gateway verbinden",
    intro: "Diese Anleitung erklärt Schritt für Schritt, wie Sie das Gateway installieren und verbinden, das Ihre Sonden mit der GreenSensor-Oberfläche verknüpft.",
    toc: "Inhaltsverzeichnis",
    start: "Wo fange ich an?",
    startSteps: [
      "Gateway an das Stromnetz anschließen.",
      "1 bis 2 Minuten warten und LED-Anzeigen prüfen.",
      "Passende Internetverbindung wählen.",
      "Einstellungsseite im Browser öffnen.",
      "Bei erfolgreicher Verbindung leuchtet die SYS-LED dauerhaft grün.",
    ],
    whichConnection: "Welche Verbindung soll ich verwenden?",
    whichConnectionIntro: "Beantworten Sie die Fragen unten, um die passende Option zu wählen.",
    whichConnectionQ1: "Gibt es Internet vor Ort (Router / WLAN)?",
    whichConnectionQ1Yes: "Ja, Router oder WLAN vorhanden",
    whichConnectionQ1No: "Nein, kein Internet vor Ort",
    whichConnectionQ2: "Kann ein Ethernet-Kabel vom Router bis zum Gateway verlegt werden?",
    whichConnectionQ2Yes: "Ja → Kabelverbindung (Ethernet) verwenden.",
    whichConnectionQ2No: "Nein → WLAN-Verbindung verwenden.",
    whichConnectionNoInternet: "Mit GreenSensor kann ein 4G-Gateway bereitgestellt werden.",
    whichConnectionFirstTime: "Für Erstinstallation oder Fehlerbehebung ist auch direkte Verbindung möglich.",
    connexion: "Wie verbinde ich mich? (Details)",
    connexionIntro: "Die Einstellungsseite (Weboberfläche) wird im Browser geöffnet.",
    leds: "LED-Anzeigen verstehen",
    ledsIntro: "Die LEDs zeigen den Betriebszustand des Gateways.",
    ledsOk: "Alles in Ordnung",
    ledsOkDetail: "SYS dauerhaft grün = Gateway ist mit Internet und GreenSensor verbunden.",
    ledsProblem: "Verbindungsproblem",
    ledsProblemDetail: "Blinkendes Grün oder Rot = keine stabile Internetverbindung.",
    ledsList: [
      { name: "Strom (rote « POWER » LED)", meaning: "An = Gateway hat Strom." },
      { name: "Kabel-LED (« ETH »)", meaning: "Grün blinkend = Netzwerkkabel erkannt." },
      { name: "Haupt-LED (« SYS »)", meaning: "Dauerhaft grün = OK. Blinkend/rot = kein Internet oder Startvorgang." },
      { name: "WLAN-LED (« WIFI »)", meaning: "Zeigt WLAN-Status an." },
    ],
    depannage: "Daten werden nicht mehr aktualisiert",
    depannageIntro: "Wenn Sonden keine Daten mehr senden, folgen Sie diesen Schritten:",
    depannageSteps: [
      "SYS/WIFI prüfen: blinkend grün = keine Serververbindung.",
      "Einstellungsseite wie bei Erstinstallation öffnen.",
      "Bei roter LoRa-Markierung LoRaWan – Basic Station öffnen.",
      "« Save & Apply » klicken.",
      "Prüfen, ob LoRa grün und SYS dauerhaft grün ist.",
    ],
    depannageContact: "Wenn das Problem bleibt, Prosensor kontaktieren.",
    button: "Taste am Gateway",
    buttonIntro: "Mit der Taste kann Verbindung oder Konfiguration zurückgesetzt werden:",
    buttonShort: "Kurzer Druck (4–5 s): Netzwerk/WLAN neu laden.",
    buttonLong: "Langer Druck (>10 s): Werkseinstellungen wiederherstellen.",
    credentials: "Anmeldedaten für die Einstellungsseite",
    credentialsDetail: "Beim ersten Zugriff verwenden:",
    credentialsUser: "Benutzername:",
    credentialsPass: "Passwort:",
    credentialsNote: "Zugangsdaten sicher notieren.",
    technical: "Technische Details (für Techniker)",
    technicalIntro: "Erweiterte Einstellungen, IPs und Firewall-Regeln.",
    back: "Zur Startseite",
    refGreen: "GreenSensor-Dokumentation. Bei Fragen: Prosensor kontaktieren.",
  }

  const ptText = {
    breadcrumb: "Documentação",
    title: "Guia do utilizador",
    subtitle: "Ligar a sua gateway GreenSensor",
    intro: "Este guia explica passo a passo como instalar e ligar a gateway que conecta as suas sondas à interface GreenSensor.",
    toc: "Índice",
    start: "Por onde começar?",
    startSteps: [
      "Ligue a gateway à corrente elétrica.",
      "Aguarde 1 a 2 minutos e verifique os LEDs.",
      "Escolha o tipo de ligação à Internet.",
      "Abra a página de configurações no navegador.",
      "Com ligação correta, o LED SYS fica verde fixo.",
    ],
    whichConnection: "Que ligação devo usar?",
    whichConnectionIntro: "Responda às perguntas abaixo para escolher a opção adequada.",
    whichConnectionQ1: "Tem Internet no local (router / Wi‑Fi)?",
    whichConnectionQ1Yes: "Sim, tenho router ou Wi‑Fi",
    whichConnectionQ1No: "Não, sem Internet no local",
    whichConnectionQ2: "Pode passar um cabo Ethernet do router até à gateway?",
    whichConnectionQ2Yes: "Sim → use ligação por cabo (Ethernet).",
    whichConnectionQ2No: "Não → use ligação por Wi‑Fi.",
    whichConnectionNoInternet: "Com GreenSensor, pode ser fornecida gateway 4G.",
    whichConnectionFirstTime: "Na primeira instalação ou suporte, também pode usar ligação direta.",
    connexion: "Como me ligo? (detalhes)",
    connexionIntro: "A página de configurações é aberta no navegador para configurar a gateway.",
    leds: "Compreender os indicadores",
    ledsIntro: "Os LEDs da gateway indicam o estado do sistema.",
    ledsOk: "Tudo correto",
    ledsOkDetail: "SYS verde fixo = ligação à Internet e ao GreenSensor ativa.",
    ledsProblem: "Problema de ligação",
    ledsProblemDetail: "LED intermitente verde ou vermelho = ligação instável/ausente.",
    ledsList: [
      { name: "Alimentação (LED vermelho « POWER »)", meaning: "Ligado = gateway com alimentação." },
      { name: "LED de cabo (« ETH »)", meaning: "Verde intermitente = cabo de rede detetado." },
      { name: "LED principal (« SYS »)", meaning: "Verde fixo = OK. Intermitente/vermelho = sem Internet ou arranque." },
      { name: "LED Wi‑Fi (« WIFI »)", meaning: "Indica estado da ligação Wi‑Fi." },
    ],
    depannage: "Os dados deixaram de atualizar",
    depannageIntro: "Se as sondas deixarem de enviar dados, siga estes passos:",
    depannageSteps: [
      "Verifique SYS/WIFI: verde intermitente indica perda de ligação ao servidor.",
      "Abra a página de configurações.",
      "Se LoRa estiver em vermelho, abra LoRaWan – Basic Station.",
      "Clique em « Save & Apply ».",
      "Confirme LoRa verde e SYS verde fixo.",
    ],
    depannageContact: "Se o problema persistir, contacte a Prosensor.",
    button: "Botão na gateway",
    buttonIntro: "O botão permite reiniciar ligação ou configurações:",
    buttonShort: "Pressão curta (4–5 s): recarrega rede e Wi‑Fi.",
    buttonLong: "Pressão longa (>10 s): repõe definições de fábrica.",
    credentials: "Credenciais para abrir a página de configurações",
    credentialsDetail: "No primeiro acesso, use:",
    credentialsUser: "Utilizador:",
    credentialsPass: "Palavra-passe:",
    credentialsNote: "Guarde estas credenciais em local seguro.",
    technical: "Detalhes técnicos (para técnicos)",
    technicalIntro: "Parâmetros avançados, IPs e regras de firewall.",
    back: "Voltar ao início",
    refGreen: "Documentação GreenSensor. Para qualquer questão: contacte a Prosensor.",
  }

  const roText = {
    breadcrumb: "Documentație",
    title: "Ghid de utilizare",
    subtitle: "Conectați gateway-ul GreenSensor",
    intro: "Acest ghid explică pas cu pas instalarea și conectarea gateway-ului care leagă sondele de interfața GreenSensor.",
    toc: "Cuprins",
    start: "De unde încep?",
    startSteps: [
      "Conectați gateway-ul la alimentare.",
      "Așteptați 1–2 minute și verificați LED-urile.",
      "Alegeți tipul de conexiune la Internet.",
      "Deschideți pagina de setări în browser.",
      "Când conexiunea este corectă, LED-ul SYS este verde continuu.",
    ],
    whichConnection: "Ce conexiune să folosesc?",
    whichConnectionIntro: "Răspundeți la întrebările de mai jos pentru a alege opțiunea potrivită.",
    whichConnectionQ1: "Aveți Internet la locație (router / Wi‑Fi)?",
    whichConnectionQ1Yes: "Da, am router sau Wi‑Fi",
    whichConnectionQ1No: "Nu, nu există Internet la locație",
    whichConnectionQ2: "Puteți trage un cablu Ethernet de la router până la gateway?",
    whichConnectionQ2Yes: "Da → folosiți conexiune prin cablu (Ethernet).",
    whichConnectionQ2No: "Nu → folosiți conexiune Wi‑Fi.",
    whichConnectionNoInternet: "Cu GreenSensor se poate furniza un gateway 4G.",
    whichConnectionFirstTime: "La prima instalare sau depanare, puteți folosi și conexiune directă.",
    connexion: "Cum mă conectez? (detalii)",
    connexionIntro: "Pagina de setări (interfață web) se deschide în browser pentru configurarea gateway-ului.",
    leds: "Înțelegerea indicatorilor",
    ledsIntro: "LED-urile gateway-ului indică starea sistemului.",
    ledsOk: "Totul este în regulă",
    ledsOkDetail: "SYS verde continuu = gateway conectat la Internet și la GreenSensor.",
    ledsProblem: "Problemă de conexiune",
    ledsProblemDetail: "LED verde intermitent sau roșu = conexiune absentă/instabilă.",
    ledsList: [
      { name: "Alimentare (LED roșu « POWER »)", meaning: "Aprins = gateway alimentat." },
      { name: "LED cablu (« ETH »)", meaning: "Verde intermitent = cablu de rețea detectat." },
      { name: "LED principal (« SYS »)", meaning: "Verde continuu = OK. Intermitent/roșu = fără Internet sau pornire." },
      { name: "LED Wi‑Fi (« WIFI »)", meaning: "Indică starea conexiunii Wi‑Fi." },
    ],
    depannage: "Datele nu se mai actualizează",
    depannageIntro: "Dacă sondele nu mai trimit date, urmați pașii de mai jos:",
    depannageSteps: [
      "Verificați SYS/WIFI: verde intermitent indică pierderea conexiunii la server.",
      "Deschideți pagina de setări.",
      "Dacă LoRa este roșu, deschideți LoRaWan – Basic Station.",
      "Apăsați « Save & Apply ».",
      "Verificați LoRa verde și SYS verde continuu.",
    ],
    depannageContact: "Dacă problema persistă, contactați Prosensor.",
    button: "Butonul gateway-ului",
    buttonIntro: "Butonul permite resetarea conexiunii sau a setărilor:",
    buttonShort: "Apăsare scurtă (4–5 s): reîncarcă rețeaua și Wi‑Fi.",
    buttonLong: "Apăsare lungă (>10 s): revine la setările din fabrică.",
    credentials: "Date de autentificare pentru pagina de setări",
    credentialsDetail: "La prima conectare utilizați:",
    credentialsUser: "Utilizator:",
    credentialsPass: "Parolă:",
    credentialsNote: "Păstrați aceste credențiale într-un loc sigur.",
    technical: "Detalii tehnice (pentru tehnicieni)",
    technicalIntro: "Setări avansate, adrese IP și reguli firewall.",
    back: "Înapoi la început",
    refGreen: "Documentație GreenSensor. Pentru întrebări: contactați Prosensor.",
  }

  const txt = isFr ? frText : isEs ? esText : isDe ? deText : isPt ? ptText : isRo ? roText : enText

  return (
    <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-10 lg:py-14">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-sm text-gray-500 mb-6">
        <Link href="/" className="hover:text-[#3eab35] transition-colors">
          {tr("Accueil", "Home", "Inicio", "Start", "Início", "Acasă")}
        </Link>
        <ChevronRight className="h-4 w-4 shrink-0" />
        <span className="text-gray-700 font-medium">{txt.breadcrumb}</span>
      </nav>

      {/* Header */}
      <header className="mb-10">
        <div className="rounded-3xl border border-gray-200 bg-white p-6 sm:p-8 shadow-sm">
          <div className="flex items-center gap-3 mb-3">
            <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-[#3eab35] text-white shadow-lg">
              <BookOpen className="h-7 w-7" />
            </div>
            <div>
              <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight">
                {txt.title}
              </h1>
              <p className="text-lg text-[#3eab35] font-medium mt-0.5">{txt.subtitle}</p>
            </div>
          </div>
          <p className="text-gray-600 leading-relaxed max-w-3xl">
            {txt.intro}
          </p>
        </div>
      </header>

      <div className="grid lg:grid-cols-12 gap-8 lg:gap-10 items-start">
        {/* Table of contents */}
        <aside className="lg:col-span-4 lg:sticky lg:top-24 space-y-4">
          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <h2 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
              <span className="text-[#3eab35]">#</span> {txt.toc}
            </h2>
            <ul className="space-y-2 text-sm">
              <li><a href={`#${anchor("start")}`} className="text-gray-600 hover:text-[#3eab35] transition-colors">{txt.start}</a></li>
              <li><a href={`#${anchor("which")}`} className="text-gray-600 hover:text-[#3eab35] transition-colors">{txt.whichConnection}</a></li>
              <li><a href={`#${anchor("connexion")}`} className="text-gray-600 hover:text-[#3eab35] transition-colors">{txt.connexion}</a></li>
              <li><a href={`#${anchor("leds")}`} className="text-gray-600 hover:text-[#3eab35] transition-colors">{txt.leds}</a></li>
              <li><a href={`#${anchor("depannage")}`} className="text-gray-600 hover:text-[#3eab35] transition-colors">{txt.depannage}</a></li>
              <li><a href={`#${anchor("button")}`} className="text-gray-600 hover:text-[#3eab35] transition-colors">{txt.button}</a></li>
              <li><a href={`#${anchor("technical")}`} className="text-gray-600 hover:text-[#3eab35] transition-colors">{txt.technical}</a></li>
            </ul>
          </div>

          <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
            <p className="text-gray-500 text-sm mb-3">{txt.refGreen}</p>
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-[#3eab35] font-medium hover:underline"
            >
              <ChevronRight className="h-4 w-4 rotate-180" /> {txt.back}
            </Link>
          </div>
        </aside>

        <div className="lg:col-span-8 space-y-12">
          <section id={anchor("start")} className="scroll-mt-24">
            <div className="rounded-xl border-2 border-[#3eab35]/30 bg-[#3eab35]/5 p-6 sm:p-8 shadow-sm">
              <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <Zap className="h-6 w-6 text-[#3eab35]" />
                {txt.start}
              </h2>
              <ol className="space-y-4">
                {txt.startSteps.map((step, i) => (
                  <li key={i} className="flex gap-3">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#3eab35] text-white text-sm font-bold">
                      {i + 1}
                    </span>
                    <span className="text-gray-700 pt-0.5">{step}</span>
                  </li>
                ))}
              </ol>
            </div>
          </section>

          {/* Quelle connexion choisir */}
          <section id={anchor("which")} className="scroll-mt-24">
            <div className="rounded-xl border border-gray-200 bg-white p-6 sm:p-8 shadow-sm">
              <h2 className="text-xl font-bold text-gray-900 mb-2 flex items-center gap-2">
                <HelpCircle className="h-6 w-6 text-[#3eab35]" />
                {txt.whichConnection}
              </h2>
              <p className="text-gray-600 mb-6">{txt.whichConnectionIntro}</p>
              <div className="space-y-4 text-gray-700">
                <p className="font-medium text-gray-900">{txt.whichConnectionQ1}</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    <strong>{txt.whichConnectionQ1Yes}</strong>
                    <p className="mt-1 text-gray-600">{txt.whichConnectionQ2}</p>
                    <ul className="list-disc pl-6 mt-1 space-y-0.5">
                      <li>{txt.whichConnectionQ2Yes}</li>
                      <li>{txt.whichConnectionQ2No}</li>
                    </ul>
                  </li>
                  <li>
                    <strong>{txt.whichConnectionQ1No}</strong>
                    <p className="mt-1 text-gray-600">{txt.whichConnectionNoInternet}</p>
                  </li>
                </ul>
                <p className="text-sm text-gray-600 pt-2 border-t border-gray-200">{txt.whichConnectionFirstTime}</p>
              </div>
            </div>
          </section>

          {/* Comment me connecter - détail */}
          <section id={anchor("connexion")} className="scroll-mt-24">
            <div className="rounded-xl border border-gray-200 bg-white p-6 sm:p-8 shadow-sm">
              <h2 className="text-xl font-bold text-gray-900 mb-2">{txt.connexion}</h2>
              <p className="text-gray-600 mb-6">{txt.connexionIntro}</p>

              <div className="space-y-8">
                {/* Wi-Fi direct */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2 flex items-center gap-2">
                    <Wifi className="h-5 w-5 text-[#3eab35]" />
                    {tr(
                      "Connexion Wi-Fi directe (première fois ou dépannage)",
                      "Direct Wi‑Fi connection (first time or troubleshooting)",
                      "Conexión Wi‑Fi directa (primera vez o solución de problemas)",
                      "Direkte WLAN-Verbindung (Ersteinrichtung oder Fehlerbehebung)",
                      "Ligação Wi‑Fi direta (primeira instalação ou resolução de problemas)",
                      "Conexiune Wi‑Fi directă (prima instalare sau depanare)"
                    )}
                  </h3>
                  <p className="text-gray-600 text-sm mb-3">
                    {tr(
                      "Choisissez cette option pour accéder à la page de réglages sans avoir besoin de votre box : la passerelle crée son propre réseau Wi-Fi.",
                      "Use this to open the settings page without your router: the gateway creates its own Wi‑Fi network.",
                      "Use esta opción para abrir la página de ajustes sin router: la pasarela crea su propia red Wi‑Fi.",
                      "Nutzen Sie diese Option, um die Einstellungsseite ohne Router zu öffnen: Das Gateway erstellt ein eigenes WLAN.",
                      "Use esta opção para abrir a página de configurações sem router: o gateway cria a sua própria rede Wi‑Fi.",
                      "Folosiți această opțiune pentru a deschide pagina de setări fără router: gateway-ul creează propria rețea Wi‑Fi."
                    )}
                  </p>
                  <div className="rounded-lg bg-green-50 border border-green-200 p-4 mb-3">
                    <p className="text-sm font-semibold text-gray-900 mb-2">{tr("À faire :", "Do this:", "Qué hacer:", "So geht's:", "A fazer:", "De făcut:")}</p>
                    <ol className="list-decimal pl-5 text-gray-700 text-sm space-y-1">
                      <li>{isFr ? "Sur votre ordinateur ou téléphone, connectez-vous au réseau Wi-Fi dont le nom commence par « dragino- » (ex. dragino-xxxxxx)." : "On your computer or phone, connect to the Wi‑Fi network whose name starts with « dragino- » (e.g. dragino-xxxxxx)."}</li>
                      <li>{isFr ? "Mot de passe du réseau :" : "Network password:"} <code className="bg-white px-1 rounded">dragino+dragino</code></li>
                      <li>{isFr ? "Ouvrez votre navigateur (Chrome, Firefox…) et allez à l’adresse :" : "Open your browser (Chrome, Firefox…) and go to:"} <strong className="text-[#3eab35]">10.130.1.1</strong></li>
                      <li>{isFr ? "Vous arrivez sur la page de réglages. Utilisez les identifiants indiqués plus bas." : "You’ll see the settings page. Use the login details below."}</li>
                    </ol>
                  </div>
                </div>

                {/* Ethernet routeur */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{tr("Connexion par câble (Ethernet) à votre box", "Cable (Ethernet) connection to your router", "Conexión por cable (Ethernet) al router", "Kabelverbindung (Ethernet) zum Router", "Ligação por cabo (Ethernet) ao router", "Conexiune prin cablu (Ethernet) la router")}</h3>
                  <p className="text-gray-600 text-sm mb-3">
                    {isFr ? "Branchez un câble réseau entre votre box (ou routeur) et la passerelle. La box attribue une adresse automatiquement." : "Plug a network cable between your router and the gateway. The router assigns an address automatically."}
                  </p>
                  <div className="rounded-lg bg-green-50 border border-green-200 p-4 mb-3">
                    <p className="text-sm font-semibold text-gray-900 mb-2">{tr("À faire :", "Do this:", "Qué hacer:", "So geht's:", "A fazer:", "De făcut:")}</p>
                    <ol className="list-decimal pl-5 text-gray-700 text-sm space-y-1">
                      <li>{isFr ? "Branchez le câble Ethernet entre la box et la passerelle. Attendez 1 à 2 minutes." : "Plug the Ethernet cable between the router and the gateway. Wait 1–2 minutes."}</li>
                      <li>{isFr ? "Pour ouvrir la page de réglages, il faut connaître l’adresse IP de la passerelle. Soit elle est indiquée sur l’étiquette ou dans le courrier Prosensor, soit vous pouvez la trouver dans l’interface de votre box (liste des appareils connectés)." : "To open the settings page you need the gateway’s IP address. It may be on the label or in Prosensor’s letter, or you can find it in your router’s interface (list of connected devices)."}</li>
                      <li>{isFr ? "Dans le navigateur, tapez cette adresse (ex. 192.168.1.xx) pour accéder à la page de réglages." : "In the browser, type that address (e.g. 192.168.1.xx) to open the settings page."}</li>
                    </ol>
                  </div>
                  <p className="text-xs text-gray-500">
                    {tr("Réglage avancé (IP fixe) : dans la page de réglages, menu Network → Network, Mode Static, puis renseigner IP (ex. 192.168.1.10), Gateway (ex. 192.168.1.1), Netmask 255.255.255.0, DNS 1.1.1.2.", "Advanced (static IP): in the settings page, menu Network → Network, Mode Static, then set IP (e.g. 192.168.1.10), Gateway (e.g. 192.168.1.1), Netmask 255.255.255.0, DNS 1.1.1.2.", "Ajuste avanzado (IP fija): en la página de ajustes, menú Network → Network, Mode Static, y luego IP (ej. 192.168.1.10), Gateway (ej. 192.168.1.1), Netmask 255.255.255.0, DNS 1.1.1.2.", "Erweiterte Einstellung (statische IP): auf der Einstellungsseite im Menü Network → Network, Mode Static, dann IP (z. B. 192.168.1.10), Gateway (z. B. 192.168.1.1), Netmask 255.255.255.0, DNS 1.1.1.2.", "Configuração avançada (IP fixa): na página de configurações, menu Network → Network, Mode Static, e depois IP (ex. 192.168.1.10), Gateway (ex. 192.168.1.1), Netmask 255.255.255.0, DNS 1.1.1.2.", "Setare avansată (IP static): în pagina de setări, meniul Network → Network, Mode Static, apoi IP (ex. 192.168.1.10), Gateway (ex. 192.168.1.1), Netmask 255.255.255.0, DNS 1.1.1.2.")}
                  </p>
                </div>

                {/* Ethernet direct PC */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{tr("Connexion câble PC direct (dépannage ou pas de box à proximité)", "Direct PC cable connection (troubleshooting or no router nearby)", "Conexión directa por cable al PC (soporte o sin router cerca)", "Direkte PC-Kabelverbindung (Fehlerbehebung oder kein Router in der Nähe)", "Ligação direta por cabo ao PC (resolução de problemas ou sem router por perto)", "Conexiune directă prin cablu la PC (depanare sau fără router în apropiere)")}</h3>
                  <p className="text-gray-600 text-sm mb-3">
                    {isFr ? "Un câble relie directement votre ordinateur à la passerelle. Utile pour la première configuration ou le dépannage." : "A cable connects your computer directly to the gateway. Useful for first-time setup or troubleshooting."}
                  </p>
                  <div className="rounded-lg bg-green-50 border border-green-200 p-4 mb-3">
                    <p className="text-sm font-semibold text-gray-900 mb-2">{tr("À faire :", "Do this:", "Qué hacer:", "So geht's:", "A fazer:", "De făcut:")}</p>
                    <ol className="list-decimal pl-5 text-gray-700 text-sm space-y-1">
                      <li>{isFr ? "Branchez le câble entre le port Ethernet du PC et le port WAN de la passerelle." : "Plug the cable between the PC’s Ethernet port and the gateway’s WAN port."}</li>
                      <li>{isFr ? "Sur le PC : Paramètres → Réseau et Internet → Ethernet → modifier les options de la connexion → Protocole Internet version 4 (TCP/IPv4) : réglez l’adresse IP sur 172.31.255.253 et le masque sur 255.255.255.252." : "On the PC: Settings → Network & Internet → Ethernet → change adapter options → Internet Protocol Version 4 (TCP/IPv4): set IP to 172.31.255.253 and mask to 255.255.255.252."}</li>
                      <li>{isFr ? "Dans le navigateur, allez à l’adresse :" : "In the browser, go to:"} <strong className="text-[#3eab35]">172.31.255.254</strong></li>
                    </ol>
                  </div>
                </div>

                {/* Wi-Fi routeur */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{tr("Connexion Wi-Fi à votre box", "Wi‑Fi connection to your router", "Conexión Wi‑Fi al router", "WLAN-Verbindung zum Router", "Ligação Wi‑Fi ao router", "Conexiune Wi‑Fi la router")}</h3>
                  <p className="text-gray-600 text-sm mb-3">
                    {isFr ? "La passerelle se connecte à votre box en Wi-Fi (sans câble). Il faut d’abord accéder à la page de réglages une fois (en Wi-Fi direct ou câble PC), puis configurer le Wi-Fi." : "The gateway connects to your router via Wi‑Fi (no cable). You must first open the settings page once (via direct Wi‑Fi or PC cable), then configure Wi‑Fi."}
                  </p>
                  <div className="rounded-lg bg-green-50 border border-green-200 p-4 mb-3">
                    <p className="text-sm font-semibold text-gray-900 mb-2">{tr("À faire (dans la page de réglages) :", "Do this (in the settings page):", "Qué hacer (en la página de ajustes):", "So geht's (auf der Einstellungsseite):", "A fazer (na página de configurações):", "De făcut (în pagina de setări):")}</p>
                    <ol className="list-decimal pl-5 text-gray-700 text-sm space-y-1">
                      <li>{isFr ? "Menu Network → Wifi → Wifi WAN client settings." : "Menu Network → Wifi → Wifi WAN client settings."}</li>
                      <li>{isFr ? "Cochez « Enable Wifi WAN Client »." : "Check « Enable Wifi WAN Client »."}</li>
                      <li>{isFr ? "Dans la liste « Wifi survey », sélectionnez votre réseau Wi-Fi (nom de votre box)." : "In the « Wifi survey » list, select your Wi‑Fi network (your router’s name)."}</li>
                      <li>{isFr ? "Dans « Passphrase », entrez le mot de passe de votre Wi-Fi." : "In « Passphrase », enter your Wi‑Fi password."}</li>
                      <li>{isFr ? "Cliquez sur « Save & Apply » (Enregistrer et appliquer)." : "Click « Save & Apply »."}</li>
                    </ol>
                  </div>
                </div>

                {/* Identifiants */}
                <div className="rounded-lg bg-amber-50 border border-amber-200 p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">{txt.credentials}</h3>
                  <p className="text-sm text-gray-700 mb-2">{txt.credentialsDetail}</p>
                  <p className="text-gray-800 font-mono text-sm">
                    {txt.credentialsUser} <strong>root</strong><br />
                    {txt.credentialsPass} <strong>dragino</strong>
                  </p>
                  <p className="text-gray-600 text-sm mt-2">{txt.credentialsNote}</p>
                </div>
              </div>
            </div>
          </section>

          {/* Voyants */}
          <section id={anchor("leds")} className="scroll-mt-24">
            <div className="rounded-xl border border-gray-200 bg-white p-6 sm:p-8 shadow-sm">
              <h2 className="text-xl font-bold text-gray-900 mb-2 flex items-center gap-2">
                <Cpu className="h-6 w-6 text-[#3eab35]" />
                {txt.leds}
              </h2>
              <p className="text-gray-600 mb-6">{txt.ledsIntro}</p>
              <div className="grid sm:grid-cols-2 gap-4 mb-6">
                <div className="rounded-lg bg-green-50 border border-green-200 p-4">
                  <p className="font-semibold text-green-800 flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5" /> {txt.ledsOk}
                  </p>
                  <p className="text-sm text-gray-700 mt-1">{txt.ledsOkDetail}</p>
                </div>
                <div className="rounded-lg bg-amber-50 border border-amber-200 p-4">
                  <p className="font-semibold text-amber-800 flex items-center gap-2">
                    <AlertCircle className="h-5 w-5" /> {txt.ledsProblem}
                  </p>
                  <p className="text-sm text-gray-700 mt-1">{txt.ledsProblemDetail}</p>
                </div>
              </div>
              <ul className="space-y-3 text-gray-700 text-sm">
                {txt.ledsList.map((item, i) => (
                  <li key={i} className="flex gap-2">
                    <strong className="text-gray-900 shrink-0">{item.name} :</strong>
                    <span>{item.meaning}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* Dépannage */}
          <section id={anchor("depannage")} className="scroll-mt-24">
            <div className="rounded-xl border-2 border-amber-200 bg-amber-50/50 p-6 sm:p-8 shadow-sm">
              <h2 className="text-xl font-bold text-gray-900 mb-2 flex items-center gap-2">
                <AlertCircle className="h-6 w-6 text-amber-600" />
                {txt.depannage}
              </h2>
              <p className="text-gray-700 mb-4">{txt.depannageIntro}</p>
              <ol className="list-decimal pl-5 space-y-2 text-gray-700 mb-4">
                {txt.depannageSteps.map((step, i) => (
                  <li key={i}>{step}</li>
                ))}
              </ol>
              <p className="text-gray-700 font-medium">{txt.depannageContact}</p>
            </div>
          </section>

          {/* Bouton */}
          <section id={anchor("button")} className="scroll-mt-24">
            <div className="rounded-xl border border-gray-200 bg-white p-6 sm:p-8 shadow-sm">
              <h2 className="text-xl font-bold text-gray-900 mb-2 flex items-center gap-2">
                <Power className="h-6 w-6 text-[#3eab35]" />
                {txt.button}
              </h2>
              <p className="text-gray-600 mb-4">{txt.buttonIntro}</p>
              <ul className="space-y-3 text-gray-700 text-sm">
                <li className="flex gap-3">
                  <span className="shrink-0 font-semibold text-gray-900">{tr("Court :", "Short:", "Corto:", "Kurz:", "Curto:", "Scurt:")}</span>
                  {txt.buttonShort}
                </li>
                <li className="flex gap-3">
                  <span className="shrink-0 font-semibold text-gray-900">{tr("Long :", "Long:", "Largo:", "Lang:", "Longo:", "Lung:")}</span>
                  {txt.buttonLong}
                </li>
              </ul>
            </div>
          </section>

          {/* Détails techniques */}
          <section id={anchor("technical")} className="scroll-mt-24">
            <div className="rounded-xl border border-gray-200 bg-gray-50 p-6 sm:p-8 shadow-sm">
              <h2 className="text-xl font-bold text-gray-900 mb-2 flex items-center gap-2">
                <Shield className="h-6 w-6 text-gray-500" />
                {txt.technical}
              </h2>
              <p className="text-gray-600 text-sm mb-4">{txt.technicalIntro}</p>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li><strong>Web UI</strong> : 10.130.1.1 (Wi‑Fi direct), 172.31.255.254 (câble PC direct), ou IP attribuée par le routeur (Ethernet/Wi‑Fi box).</li>
                <li><strong>LoRaWAN Basic Station</strong> : TCP 443, 4443, 8887. DHCP : UDP 67, 68 et 546, 547. DNS : TCP/UDP 53. Windows (connexion directe) : UDP 1700.</li>
                <li>{tr("IP fixe (ex.) : 192.168.1.10, Gateway 192.168.1.1, Netmask 255.255.255.0, DNS 1.1.1.2. Menu Network → Network, Mode Static.", "Static IP (e.g.): 192.168.1.10, Gateway 192.168.1.1, Netmask 255.255.255.0, DNS 1.1.1.2. Menu Network → Network, Mode Static.", "IP fija (ej.): 192.168.1.10, Gateway 192.168.1.1, Netmask 255.255.255.0, DNS 1.1.1.2. Menú Network → Network, Mode Static.", "Statische IP (z. B.): 192.168.1.10, Gateway 192.168.1.1, Netmask 255.255.255.0, DNS 1.1.1.2. Menü Network → Network, Mode Static.", "IP fixa (ex.): 192.168.1.10, Gateway 192.168.1.1, Netmask 255.255.255.0, DNS 1.1.1.2. Menu Network → Network, Mode Static.", "IP static (ex.): 192.168.1.10, Gateway 192.168.1.1, Netmask 255.255.255.0, DNS 1.1.1.2. Meniu Network → Network, Mode Static.")}</li>
              </ul>
              <p className="text-gray-500 text-sm mt-4">
                <a href="https://www.dragino.com/products/lora-lorawan-gateway/item/228-lps8v2.html" target="_blank" rel="noopener noreferrer" className="text-[#3eab35] hover:underline inline-flex items-center gap-1">
                  Dragino LPS8-V2 <ExternalLink className="h-4 w-4" />
                </a>
                {" · "}
                <a href="http://wiki.dragino.com/xwiki/bin/view/Main/User%20Manual%20for%20All%20Gateway%20models/HP0C/" target="_blank" rel="noopener noreferrer" className="text-[#3eab35] hover:underline inline-flex items-center gap-1">
                  {tr("Manuel Wiki", "Wiki manual", "Manual Wiki", "Wiki-Handbuch", "Manual Wiki", "Manual Wiki")} <ExternalLink className="h-4 w-4" />
                </a>
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}

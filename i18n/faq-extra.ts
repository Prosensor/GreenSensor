/**
 * Questions ajoutées à la page FAQ, rédigées d'après la fiche technique, la présentation et le flyer GreenSensor.
 * `before` : sections placées avant les sections historiques ; `after` : après. `drop` retire trois questions
 * historiques dont la réponse contredisait la fiche technique (nombre de capteurs, fréquence de mesure, autonomie) :
 * elles sont remplacées par les questions de la section « Le produit ».
 */
export type FaqItem = { q: string; a: string }
export type FaqSection = { title: string; items: FaqItem[] }
export type FaqLang = "fr" | "en" | "es" | "de" | "pt" | "ro"

type Extra = { before: FaqSection[]; after: FaqSection[]; drop: string[] }

const fr: Extra = {
  before: [
    {
      title: "Le produit",
      items: [
        {
          q: "Qu'est-ce que GreenSensor ?",
          a: "GreenSensor est une solution clé en main qui combine une sonde connectée et une application web pour gérer le process de votre site de compostage. La sonde se plante à la main dans l'andain, mesure la température au cœur du tas et l'envoie par radio à une passerelle. Vous suivez chaque andain en direct sur la plateforme, vous recevez un SMS quand un seuil critique est atteint, et vous éditez des rapports qui valident votre process de compostage.",
        },
        { q: "Quelle est la précision des mesures ?", a: "±0,5 °C de -10 °C à +85 °C." },
        {
          q: "Que mesure exactement la sonde ?",
          a: "Deux capteurs numériques : un au bout du tube, qui mesure la température au cœur de l'andain, et un dans le boîtier, qui mesure la température de l'air. Sur les sondes de 2 m, un second point de mesure peut être ajouté en option, à 1 m, au milieu de la tige.",
        },
        { q: "À quelle fréquence la sonde mesure-t-elle ?", a: "Une mesure toutes les heures. Cet intervalle est fixe." },
        { q: "Quelle est l'autonomie de la batterie ?", a: "5 ans à une mesure par heure. La batterie est remplaçable et aucune alimentation n'est nécessaire sur l'andain : la sonde fonctionne sur sa batterie." },
        { q: "Quelles longueurs de sonde existent ?", a: "1 m, 1.5 m ou 2 m, avec un tube en inox 316L de Ø 16 mm. La longueur se mesure des poignées jusqu'à la pointe." },
        { q: "Où est fabriquée la sonde ?", a: "Dans l'usine Prosensor, en France. Chaque sonde est testée à 100 %. Prosensor fabrique des sondes de température depuis 1989." },
        { q: "Existe-t-il des versions sur mesure ?", a: "Oui, sur demande. Notre bureau d'études peut adapter la longueur, les capteurs et les options à votre site." },
      ],
    },
    {
      title: "Prise en main et installation",
      items: [
        {
          q: "Comment démarrer avec GreenSensor ?",
          a: "En quatre étapes. 1. Installez la passerelle sur le site, à moins de 2 km en champ libre. 2. Plantez la sonde à la main dans l'andain, grâce à ses deux poignées. 3. Créez vos objectifs et utilisez-les dans vos phases, puis créez une campagne qui relie la sonde à son andain. 4. Suivez les données en direct, recevez les alertes et exportez les rapports.",
        },
        { q: "Faut-il tirer des câbles ou alimenter quelque chose sur l'andain ?", a: "Non. La sonde fonctionne sur batterie et communique par radio : ni câble, ni alimentation à prévoir sur l'andain." },
        { q: "Peut-on mettre plusieurs sondes dans un même andain ?", a: "Oui. Vous utilisez une ou plusieurs sondes par andain, et vous les reliez à leur andain dans la plateforme." },
        {
          q: "Quelle technologie radio utilise la sonde ?",
          a: "Une radio longue portée et basse consommation, sur la bande 868 MHz (Europe). L'émetteur est vissé directement sur la sonde, en une seule pièce. Les données suivent le trajet sonde, passerelle, serveur cloud sécurisé, plateforme web GreenSensor.",
        },
        {
          q: "Où placer la passerelle ?",
          a: "Sur le site, à moins de 2 km des sondes en champ libre. Plus il y a d'obstacles (bâtiments, relief), plus la portée réelle diminue. La connexion Internet de la passerelle est détaillée dans la section dédiée.",
        },
      ],
    },
    {
      title: "La plateforme en détail",
      items: [
        { q: "Que voit-on sur le tableau de bord ?", a: "Tous vos andains et toutes vos sondes sur un seul écran, mis à jour automatiquement." },
        {
          q: "Comment fonctionnent les campagnes et les phases ?",
          a: "Le suivi se construit en trois temps. 1. Vous créez vos objectifs de température (par exemple 14 jours à 55 °C ou plus). 2. Vous les utilisez dans les phases : fermentation, hygiénisation et maturation. 3. Seulement ensuite, vous créez une campagne qui enchaîne ces phases, et vous la suivez en cours, terminée ou archivée. Une phase peut se terminer automatiquement quand son objectif est atteint.",
        },
        { q: "Que conserve la plateforme ?", a: "L'historique des mesures sur 1 an. Vous pouvez exporter les données et imprimer des rapports pour vos audits." },
      ],
    },
  ],
  after: [
    {
      title: "Commande, garantie et contact",
      items: [
        {
          q: "Que comprend une commande ?",
          a: "Pour une première commande, il s'agit souvent de quelques sondes et d'une passerelle pour tester la solution. Ensuite, les sites équipent généralement leurs andains avec des dizaines de sondes. Chaque commande comprend aussi la première activation, l'accès annuel à la plateforme GreenSensor et les frais de port.",
        },
        { q: "Quelle garantie est incluse ?", a: "3 ans, incluse dans chaque commande." },
        { q: "Peut-on ajouter des sondes plus tard ?", a: "Oui, des sondes supplémentaires sont disponibles à l'unité, en 1 m, 1.5 m ou 2 m." },
        {
          q: "Comment demander un devis ou une présentation ?",
          a: "Remplissez le formulaire « Demander une présentation » en bas de la page, appelez le +33 3 87 53 53 53 ou écrivez à info@prosensor.com. Un conseiller Prosensor vous répond.",
        },
        { q: "Où se trouve Prosensor ?", a: "EcoParc, 5 rue Maud Fontenoy, 57140 Norroy-le-Veneur, France." },
      ],
    },
  ],
  drop: ["Combien de capteurs", "A quelle fréquence", "Quelle est l'autonomie de la batterie"],
}

const en: Extra = {
  before: [
    {
      title: "The product",
      items: [
        {
          q: "What is GreenSensor?",
          a: "GreenSensor is a turnkey solution that combines a connected probe and a web application to manage the composting process of your site. You push the probe into the windrow by hand: it measures the temperature in the core of the pile and sends it by radio to a gateway. You follow each windrow live on the platform, get an SMS when a critical threshold is reached, and issue reports that validate your composting process.",
        },
        { q: "How accurate are the measurements?", a: "±0.5 °C from -10 °C to +85 °C." },
        {
          q: "What does the probe measure exactly?",
          a: "Two digital sensors: one at the tip of the rod, which measures the core temperature of the windrow, and one in the housing, which measures the air temperature. On 2 m probes, an optional 2nd measuring point can be added at 1 m, in the middle of the rod.",
        },
        { q: "How often does the probe measure?", a: "Once an hour. This interval is fixed." },
        { q: "How long does the battery last?", a: "5 years at one reading per hour. The battery is replaceable and no power supply is needed on the windrow: the probe runs on its battery." },
        { q: "What probe lengths are available?", a: "1 m, 1.5 m or 2 m, with a Ø 16 mm 316L stainless steel rod. The length is measured from the handles to the tip." },
        { q: "Where is the probe made?", a: "In Prosensor's own factory in France. Every probe is 100% tested. Prosensor has made temperature probes since 1989." },
        { q: "Are custom versions available?", a: "Yes, on request. Our R&D team can adapt the length, sensors and options to your site." },
      ],
    },
    {
      title: "Getting started and installation",
      items: [
        {
          q: "How do I get started with GreenSensor?",
          a: "In four steps. 1. Install the gateway on site, within 2 km in open field. 2. Push the probe into the windrow by hand, using its two handles. 3. Create your objectives and use them in your phases, then create a campaign that links the probe to its windrow. 4. Follow live data, get alerts and export reports.",
        },
        { q: "Do I need to run cables or power on the windrow?", a: "No. The probe runs on its battery and communicates by radio: no cables and no power supply on the windrow." },
        { q: "Can I use several probes in one windrow?", a: "Yes. You use one or more probes per windrow, and you link them to their windrow in the platform." },
        {
          q: "What radio technology does the probe use?",
          a: "Long-range, low-power radio in the 868 MHz band (EU). The transmitter is screwed directly on top of the probe, as one single piece. Data follows the path probe, gateway, secure cloud server, GreenSensor web platform.",
        },
        {
          q: "Where should I place the gateway?",
          a: "On site, within 2 km of the probes in open field. The more obstacles there are (buildings, terrain), the shorter the real range. The gateway's internet connection is covered in the connectivity section.",
        },
      ],
    },
    {
      title: "The platform in detail",
      items: [
        { q: "What does the dashboard show?", a: "All your windrows and probes on one screen, updated automatically." },
        {
          q: "How do campaigns and phases work?",
          a: "Tracking is built in three steps. 1. You create your temperature objectives (for example 14 days at 55 °C or above). 2. You use them in the phases: fermentation, hygienisation and maturation. 3. Only then do you create a campaign that chains these phases, and follow it as running, completed or archived. A phase can end automatically when its objective is reached.",
        },
        { q: "What does the platform keep?", a: "The measurement history over 1 year. You can export the data and print reports for your audits." },
      ],
    },
  ],
  after: [
    {
      title: "Ordering, warranty and contact",
      items: [
        {
          q: "What does an order include?",
          a: "A first order is often a few probes and a gateway to test the solution. After that, sites typically order dozens of probes. Every order also includes the first activation, annual access to the GreenSensor platform and shipping costs.",
        },
        { q: "What warranty is included?", a: "3 years, included in every order." },
        { q: "Can I add probes later?", a: "Yes, extra probes are available one by one, in 1 m, 1.5 m or 2 m." },
        {
          q: "How do I ask for a quote or a presentation?",
          a: "Fill in the “Request a presentation” form at the bottom of the page, call +33 3 87 53 53 53 or write to info@prosensor.com. A Prosensor advisor will get back to you.",
        },
        { q: "Where is Prosensor based?", a: "EcoParc, 5 rue Maud Fontenoy, 57140 Norroy-le-Veneur, France." },
      ],
    },
  ],
  drop: ["How many temperature sensors", "How often are measurements", "What is battery life"],
}

const es: Extra = {
  before: [
    {
      title: "El producto",
      items: [
        {
          q: "¿Qué es GreenSensor?",
          a: "GreenSensor es una solución llave en mano que combina una sonda conectada y una aplicación web para gestionar el proceso de compostaje de su sitio. La sonda se clava a mano en la hilera: mide la temperatura en el núcleo de la pila y la envía por radio a una pasarela. Usted sigue cada hilera en directo en la plataforma, recibe un SMS cuando se alcanza un umbral crítico y emite informes que validan su proceso de compostaje.",
        },
        { q: "¿Qué precisión tienen las mediciones?", a: "±0,5 °C de -10 °C a +85 °C." },
        {
          q: "¿Qué mide exactamente la sonda?",
          a: "Dos sensores digitales: uno en la punta del tubo, que mide la temperatura en el núcleo de la hilera, y otro en la caja, que mide la temperatura del aire. En las sondas de 2 m se puede añadir, como opción, un segundo punto de medición a 1 m, en el centro de la varilla.",
        },
        { q: "¿Con qué frecuencia mide la sonda?", a: "Una medición cada hora. Este intervalo es fijo." },
        { q: "¿Cuánto dura la batería?", a: "5 años con una medición por hora. La batería es reemplazable y no hace falta alimentación en la hilera: la sonda funciona con su batería." },
        { q: "¿Qué longitudes de sonda existen?", a: "1 m, 1,5 m o 2 m, con un tubo de acero inoxidable 316L de Ø 16 mm. La longitud se mide desde las asas hasta la punta." },
        { q: "¿Dónde se fabrica la sonda?", a: "En la fábrica de Prosensor, en Francia. Cada sonda se prueba al 100 %. Prosensor fabrica sondas de temperatura desde 1989." },
        { q: "¿Existen versiones a medida?", a: "Sí, bajo petición. Nuestra oficina de ingeniería puede adaptar la longitud, los sensores y las opciones a su sitio." },
      ],
    },
    {
      title: "Puesta en marcha e instalación",
      items: [
        {
          q: "¿Cómo empezar con GreenSensor?",
          a: "En cuatro pasos. 1. Instale la pasarela en el sitio, a menos de 2 km en campo abierto. 2. Clave la sonda a mano en la hilera, con sus dos asas. 3. Cree sus objetivos y utilícelos en sus fases; después cree una campaña que vincule la sonda a su hilera. 4. Siga los datos en directo, reciba las alertas y exporte los informes.",
        },
        { q: "¿Hay que tender cables o alimentar algo en la hilera?", a: "No. La sonda funciona con batería y se comunica por radio: ni cables ni alimentación en la hilera." },
        { q: "¿Se pueden poner varias sondas en una misma hilera?", a: "Sí. Se usan una o varias sondas por hilera, y se vinculan a su hilera en la plataforma." },
        {
          q: "¿Qué tecnología de radio utiliza la sonda?",
          a: "Una radio de largo alcance y bajo consumo, en la banda de 868 MHz (Europa). El emisor está atornillado directamente en la sonda, como una sola pieza. Los datos siguen el recorrido sonda, pasarela, servidor cloud seguro, plataforma web GreenSensor.",
        },
        {
          q: "¿Dónde colocar la pasarela?",
          a: "En el sitio, a menos de 2 km de las sondas en campo abierto. Cuantos más obstáculos haya (edificios, relieve), menor será el alcance real. La conexión a Internet de la pasarela se detalla en la sección dedicada.",
        },
      ],
    },
    {
      title: "La plataforma en detalle",
      items: [
        { q: "¿Qué se ve en el panel?", a: "Todas sus hileras y todas sus sondas en una sola pantalla, actualizadas automáticamente." },
        {
          q: "¿Cómo funcionan las campañas y las fases?",
          a: "El seguimiento se construye en tres pasos. 1. Crea sus objetivos de temperatura (por ejemplo, 14 días a 55 °C o más). 2. Los utiliza en las fases: fermentación, higienización y maduración. 3. Solo después crea una campaña que encadena estas fases y la sigue en curso, terminada o archivada. Una fase puede terminar automáticamente cuando se alcanza su objetivo.",
        },
        { q: "¿Qué conserva la plataforma?", a: "El historial de mediciones de 1 año. Puede exportar los datos e imprimir informes para sus auditorías." },
      ],
    },
  ],
  after: [
    {
      title: "Pedido, garantía y contacto",
      items: [
        {
          q: "¿Qué incluye un pedido?",
          a: "Un primer pedido suele incluir algunas sondas y una pasarela para probar la solución. Después, los sitios suelen pedir decenas de sondas. Cada pedido incluye además la primera activación, el acceso anual a la plataforma GreenSensor y los gastos de envío.",
        },
        { q: "¿Qué garantía incluye?", a: "3 años, incluida en cada pedido." },
        { q: "¿Se pueden añadir sondas más adelante?", a: "Sí, hay sondas adicionales disponibles por unidad, de 1 m, 1,5 m o 2 m." },
        {
          q: "¿Cómo pedir un presupuesto o una presentación?",
          a: "Rellene el formulario «Solicitar una presentación» al final de la página, llame al +33 3 87 53 53 53 o escriba a info@prosensor.com. Un asesor de Prosensor le responderá.",
        },
        { q: "¿Dónde está Prosensor?", a: "EcoParc, 5 rue Maud Fontenoy, 57140 Norroy-le-Veneur, Francia." },
      ],
    },
  ],
  drop: ["¿Cuántos sensores", "¿Con qué frecuencia se registran", "¿Cuál es la autonomía"],
}

const de: Extra = {
  before: [
    {
      title: "Das Produkt",
      items: [
        {
          q: "Was ist GreenSensor?",
          a: "GreenSensor ist eine Komplettlösung, die eine vernetzte Sonde und eine Webanwendung kombiniert, um den Kompostierungsprozess Ihres Standorts zu steuern. Die Sonde wird von Hand in die Miete gesteckt: Sie misst die Temperatur im Kern des Haufens und sendet sie per Funk an ein Gateway. Sie verfolgen jede Miete live auf der Plattform, erhalten eine SMS, wenn eine kritische Schwelle erreicht wird, und erstellen Berichte, die Ihren Kompostierungsprozess validieren.",
        },
        { q: "Wie genau sind die Messungen?", a: "±0,5 °C von -10 °C bis +85 °C." },
        {
          q: "Was misst die Sonde genau?",
          a: "Zwei digitale Sensoren: einen an der Spitze des Rohrs, der die Kerntemperatur der Miete misst, und einen im Gehäuse, der die Lufttemperatur misst. Bei den Sonden mit 2 m kann optional ein zweiter Messpunkt bei 1 m, in der Mitte der Stange, ergänzt werden.",
        },
        { q: "Wie oft misst die Sonde?", a: "Einmal pro Stunde. Dieses Intervall ist fest." },
        { q: "Wie lange hält die Batterie?", a: "5 Jahre bei einer Messung pro Stunde. Die Batterie ist austauschbar, und auf der Miete wird keine Stromversorgung benötigt: Die Sonde läuft mit ihrer Batterie." },
        { q: "Welche Sondenlängen gibt es?", a: "1 m, 1,5 m oder 2 m, mit einem Rohr aus Edelstahl 316L, Ø 16 mm. Die Länge wird von den Griffen bis zur Spitze gemessen." },
        { q: "Wo wird die Sonde hergestellt?", a: "In der eigenen Fabrik von Prosensor in Frankreich. Jede Sonde wird zu 100 % getestet. Prosensor stellt seit 1989 Temperatursonden her." },
        { q: "Gibt es Sonderversionen?", a: "Ja, auf Anfrage. Unsere Entwicklungsabteilung kann Länge, Sensoren und Optionen an Ihren Standort anpassen." },
      ],
    },
    {
      title: "Inbetriebnahme und Installation",
      items: [
        {
          q: "Wie starte ich mit GreenSensor?",
          a: "In vier Schritten. 1. Installieren Sie das Gateway vor Ort, im freien Feld höchstens 2 km entfernt. 2. Stecken Sie die Sonde mit den beiden Griffen von Hand in die Miete. 3. Legen Sie Ihre Ziele an und verwenden Sie sie in Ihren Phasen, dann erstellen Sie eine Kampagne, die die Sonde mit ihrer Miete verknüpft. 4. Verfolgen Sie die Daten live, erhalten Sie Warnungen und exportieren Sie Berichte.",
        },
        { q: "Muss ich Kabel verlegen oder etwas mit Strom versorgen?", a: "Nein. Die Sonde läuft mit Batterie und kommuniziert per Funk: keine Kabel und keine Stromversorgung auf der Miete." },
        { q: "Kann ich mehrere Sonden in einer Miete einsetzen?", a: "Ja. Sie setzen eine oder mehrere Sonden pro Miete ein und verknüpfen sie in der Plattform mit ihrer Miete." },
        {
          q: "Welche Funktechnik nutzt die Sonde?",
          a: "Eine stromsparende Langstreckenfunkverbindung im 868-MHz-Band (EU). Der Sender ist direkt auf die Sonde geschraubt, als ein einziges Teil. Die Daten laufen über den Weg Sonde, Gateway, sicherer Cloud-Server, GreenSensor-Webplattform.",
        },
        {
          q: "Wo sollte das Gateway stehen?",
          a: "Vor Ort, im freien Feld höchstens 2 km von den Sonden entfernt. Je mehr Hindernisse es gibt (Gebäude, Gelände), desto kürzer ist die tatsächliche Reichweite. Die Internetverbindung des Gateways wird im Abschnitt zur Konnektivität erklärt.",
        },
      ],
    },
    {
      title: "Die Plattform im Detail",
      items: [
        { q: "Was zeigt die Übersicht?", a: "Alle Ihre Mieten und Sonden auf einem Bildschirm, automatisch aktualisiert." },
        {
          q: "Wie funktionieren Kampagnen und Phasen?",
          a: "Das Tracking besteht aus drei Schritten. 1. Sie legen Ihre Temperaturziele an (zum Beispiel 14 Tage bei 55 °C oder mehr). 2. Sie verwenden sie in den Phasen: Fermentation, Hygienisierung und Reifung. 3. Erst danach erstellen Sie eine Kampagne, die diese Phasen verkettet, und verfolgen sie laufend, abgeschlossen oder archiviert. Eine Phase kann automatisch enden, sobald ihr Ziel erreicht ist.",
        },
        { q: "Was speichert die Plattform?", a: "Den Messverlauf über 1 Jahr. Sie können die Daten exportieren und Berichte für Ihre Audits drucken." },
      ],
    },
  ],
  after: [
    {
      title: "Bestellung, Garantie und Kontakt",
      items: [
        {
          q: "Was umfasst eine Bestellung?",
          a: "Eine Erstbestellung umfasst oft einige Sonden und ein Gateway zum Testen der Lösung. Danach bestellen die Standorte in der Regel Dutzende Sonden. Jede Bestellung enthält außerdem die Erstaktivierung, den jährlichen Zugang zur GreenSensor-Plattform und die Versandkosten.",
        },
        { q: "Welche Garantie ist enthalten?", a: "3 Jahre, in jeder Bestellung enthalten." },
        { q: "Kann ich später Sonden hinzufügen?", a: "Ja, zusätzliche Einzelsonden sind mit 1 m, 1,5 m oder 2 m erhältlich." },
        {
          q: "Wie frage ich ein Angebot oder eine Präsentation an?",
          a: "Füllen Sie unten auf der Seite das Formular „Präsentation anfragen“ aus, rufen Sie +33 3 87 53 53 53 an oder schreiben Sie an info@prosensor.com. Ein Prosensor-Berater meldet sich bei Ihnen.",
        },
        { q: "Wo sitzt Prosensor?", a: "EcoParc, 5 rue Maud Fontenoy, 57140 Norroy-le-Veneur, Frankreich." },
      ],
    },
  ],
  drop: ["Wie viele Temperatursensoren", "Wie häufig werden Messungen", "Wie lange hält die Batterie"],
}

const pt: Extra = {
  before: [
    {
      title: "O produto",
      items: [
        {
          q: "O que é o GreenSensor?",
          a: "O GreenSensor é uma solução chave na mão que combina uma sonda ligada e uma aplicação web para gerir o processo de compostagem do seu local. A sonda crava-se à mão na leira: mede a temperatura no núcleo da pilha e envia-a por rádio para um gateway. Acompanha cada leira em direto na plataforma, recebe um SMS quando um limiar crítico é atingido e emite relatórios que validam o seu processo de compostagem.",
        },
        { q: "Qual é a precisão das medições?", a: "±0,5 °C de -10 °C a +85 °C." },
        {
          q: "O que mede exatamente a sonda?",
          a: "Dois sensores digitais: um na ponta do tubo, que mede a temperatura no núcleo da leira, e outro na caixa, que mede a temperatura do ar. Nas sondas de 2 m, pode acrescentar-se, como opção, um segundo ponto de medição a 1 m, a meio da haste.",
        },
        { q: "Com que frequência mede a sonda?", a: "Uma medição por hora. Este intervalo é fixo." },
        { q: "Quanto dura a bateria?", a: "5 anos com uma medição por hora. A bateria é substituível e não é necessária alimentação na leira: a sonda funciona com a sua bateria." },
        { q: "Que comprimentos de sonda existem?", a: "1 m, 1,5 m ou 2 m, com um tubo em aço inoxidável 316L de Ø 16 mm. O comprimento mede-se das pegas até à ponta." },
        { q: "Onde é fabricada a sonda?", a: "Na fábrica da Prosensor, em França. Cada sonda é testada a 100 %. A Prosensor fabrica sondas de temperatura desde 1989." },
        { q: "Existem versões à medida?", a: "Sim, a pedido. O nosso gabinete de estudos pode adaptar o comprimento, os sensores e as opções ao seu local." },
      ],
    },
    {
      title: "Primeiros passos e instalação",
      items: [
        {
          q: "Como começar com o GreenSensor?",
          a: "Em quatro passos. 1. Instalar o gateway no local, a menos de 2 km em campo aberto. 2. Cravar a sonda à mão na leira, com as duas pegas. 3. Criar os objetivos e usá-los nas fases, depois criar uma campanha que associa a sonda à sua leira. 4. Acompanhar os dados em direto, receber os alertas e exportar os relatórios.",
        },
        { q: "É preciso passar cabos ou alimentar alguma coisa na leira?", a: "Não. A sonda funciona com bateria e comunica por rádio: sem cabos nem alimentação na leira." },
        { q: "Podem usar-se várias sondas na mesma leira?", a: "Sim. Utiliza uma ou várias sondas por leira e associa-as à respetiva leira na plataforma." },
        {
          q: "Que tecnologia de rádio utiliza a sonda?",
          a: "Um rádio de longo alcance e baixo consumo, na banda de 868 MHz (Europa). O emissor está aparafusado diretamente na sonda, numa só peça. Os dados seguem o percurso sonda, gateway, servidor cloud seguro, plataforma web GreenSensor.",
        },
        {
          q: "Onde colocar o gateway?",
          a: "No local, a menos de 2 km das sondas em campo aberto. Quantos mais obstáculos houver (edifícios, relevo), menor será o alcance real. A ligação à Internet do gateway é detalhada na secção dedicada.",
        },
      ],
    },
    {
      title: "A plataforma em detalhe",
      items: [
        { q: "O que se vê no painel?", a: "Todas as suas leiras e todas as suas sondas num único ecrã, atualizadas automaticamente." },
        {
          q: "Como funcionam as campanhas e as fases?",
          a: "O acompanhamento constrói-se em três passos. 1. Cria os seus objetivos de temperatura (por exemplo, 14 dias a 55 °C ou mais). 2. Utiliza-os nas fases: fermentação, higienização e maturação. 3. Só depois cria uma campanha que encadeia estas fases e acompanha-a em curso, terminada ou arquivada. Uma fase pode terminar automaticamente quando o objetivo é atingido.",
        },
        { q: "O que guarda a plataforma?", a: "O histórico de medições de 1 ano. Pode exportar os dados e imprimir relatórios para as suas auditorias." },
      ],
    },
  ],
  after: [
    {
      title: "Encomenda, garantia e contacto",
      items: [
        {
          q: "O que inclui uma encomenda?",
          a: "Uma primeira encomenda inclui muitas vezes algumas sondas e um gateway para testar a solução. Depois, os locais encomendam normalmente dezenas de sondas. Cada encomenda inclui ainda a primeira ativação, o acesso anual à plataforma GreenSensor e os portes de envio.",
        },
        { q: "Que garantia está incluída?", a: "3 anos, incluída em cada encomenda." },
        { q: "É possível acrescentar sondas mais tarde?", a: "Sim, estão disponíveis sondas adicionais à unidade, de 1 m, 1,5 m ou 2 m." },
        {
          q: "Como pedir um orçamento ou uma apresentação?",
          a: "Preencha o formulário «Pedir uma apresentação» no fim da página, ligue para +33 3 87 53 53 53 ou escreva para info@prosensor.com. Um consultor da Prosensor responder-lhe-á.",
        },
        { q: "Onde fica a Prosensor?", a: "EcoParc, 5 rue Maud Fontenoy, 57140 Norroy-le-Veneur, França." },
      ],
    },
  ],
  drop: ["Quantos sensores", "Com que frequência as medições", "Qual é a autonomia"],
}

const ro: Extra = {
  before: [
    {
      title: "Produsul",
      items: [
        {
          q: "Ce este GreenSensor?",
          a: "GreenSensor este o soluție la cheie care combină o sondă conectată și o aplicație web pentru a gestiona procesul de compostare al amplasamentului dvs. Sonda se înfige cu mâna în șir: măsoară temperatura din miezul grămezii și o trimite prin radio către un gateway. Urmăriți fiecare șir în direct pe platformă, primiți un SMS când este atins un prag critic și emiteți rapoarte care validează procesul dvs. de compostare.",
        },
        { q: "Cât de precise sunt măsurătorile?", a: "±0,5 °C între -10 °C și +85 °C." },
        {
          q: "Ce măsoară exact sonda?",
          a: "Doi senzori digitali: unul la vârful tubului, care măsoară temperatura din miezul șirului, și unul în carcasă, care măsoară temperatura aerului. La sondele de 2 m se poate adăuga opțional un al doilea punct de măsurare, la 1 m, la mijlocul tijei.",
        },
        { q: "Cât de des măsoară sonda?", a: "O măsurătoare pe oră. Acest interval este fix." },
        { q: "Cât durează bateria?", a: "5 ani la o măsurătoare pe oră. Bateria este înlocuibilă și nu este necesară nicio alimentare pe șir: sonda funcționează pe baterie." },
        { q: "Ce lungimi de sondă există?", a: "1 m, 1,5 m sau 2 m, cu un tub din inox 316L cu Ø 16 mm. Lungimea se măsoară de la mânere până la vârf." },
        { q: "Unde este fabricată sonda?", a: "În fabrica Prosensor, în Franța. Fiecare sondă este testată 100 %. Prosensor fabrică sonde de temperatură din 1989." },
        { q: "Există versiuni personalizate?", a: "Da, la cerere. Biroul nostru de studii poate adapta lungimea, senzorii și opțiunile la amplasamentul dvs." },
      ],
    },
    {
      title: "Pornire și instalare",
      items: [
        {
          q: "Cum încep cu GreenSensor?",
          a: "În patru pași. 1. Instalați gateway-ul pe amplasament, la mai puțin de 2 km în câmp deschis. 2. Înfigeți sonda cu mâna în șir, folosind cele două mânere. 3. Creați obiectivele și folosiți-le în faze, apoi creați o campanie care asociază sonda cu șirul ei. 4. Urmăriți datele în direct, primiți alertele și exportați rapoartele.",
        },
        { q: "Trebuie să trag cabluri sau să alimentez ceva pe șir?", a: "Nu. Sonda funcționează pe baterie și comunică prin radio: fără cabluri și fără alimentare pe șir." },
        { q: "Pot pune mai multe sonde în același șir?", a: "Da. Folosiți una sau mai multe sonde per șir și le asociați cu șirul lor în platformă." },
        {
          q: "Ce tehnologie radio folosește sonda?",
          a: "Un radio cu rază lungă și consum redus, pe banda de 868 MHz (UE). Emițătorul este înșurubat direct pe sondă, dintr-o singură piesă. Datele urmează traseul sondă, gateway, server cloud securizat, platformă web GreenSensor.",
        },
        {
          q: "Unde plasez gateway-ul?",
          a: "Pe amplasament, la mai puțin de 2 km de sonde în câmp deschis. Cu cât există mai multe obstacole (clădiri, relief), cu atât raza reală scade. Conexiunea la internet a gateway-ului este detaliată în secțiunea dedicată.",
        },
      ],
    },
    {
      title: "Platforma în detaliu",
      items: [
        { q: "Ce se vede pe panou?", a: "Toate șirurile și toate sondele dvs. pe un singur ecran, actualizate automat." },
        {
          q: "Cum funcționează campaniile și fazele?",
          a: "Urmărirea se construiește în trei pași. 1. Creați obiectivele de temperatură (de exemplu 14 zile la 55 °C sau mai mult). 2. Le folosiți în faze: fermentare, igienizare și maturare. 3. Abia apoi creați o campanie care înlănțuie aceste faze și o urmăriți în curs, încheiată sau arhivată. O fază se poate încheia automat când obiectivul este atins.",
        },
        { q: "Ce păstrează platforma?", a: "Istoricul măsurătorilor pe 1 an. Puteți exporta datele și tipări rapoarte pentru auditurile dvs." },
      ],
    },
  ],
  after: [
    {
      title: "Comandă, garanție și contact",
      items: [
        {
          q: "Ce include o comandă?",
          a: "O primă comandă include adesea câteva sonde și un gateway pentru testarea soluției. Apoi, amplasamentele comandă de obicei zeci de sonde. Fiecare comandă include și prima activare, accesul anual la platforma GreenSensor și costurile de transport.",
        },
        { q: "Ce garanție este inclusă?", a: "3 ani, inclusă în fiecare comandă." },
        { q: "Pot adăuga sonde mai târziu?", a: "Da, sonde suplimentare sunt disponibile la bucată, de 1 m, 1,5 m sau 2 m." },
        {
          q: "Cum cer o ofertă sau o prezentare?",
          a: "Completați formularul „Solicită o prezentare” din josul paginii, sunați la +33 3 87 53 53 53 sau scrieți la info@prosensor.com. Un consultant Prosensor vă va răspunde.",
        },
        { q: "Unde se află Prosensor?", a: "EcoParc, 5 rue Maud Fontenoy, 57140 Norroy-le-Veneur, Franța." },
      ],
    },
  ],
  drop: ["Câți senzori", "Cât de des se înregistrează", "Care este durata de viață"],
}

export const faqExtra: Record<FaqLang, Extra> = { fr, en, es, de, pt, ro }

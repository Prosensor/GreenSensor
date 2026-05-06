"use client"

import Link from "next/link"
import { useI18n } from "@/i18n/i18n-provider"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

type FaqItem = { q: string; a: string }
type FaqSection = { title: string; items: FaqItem[] }

const frSections: FaqSection[] = [
  {
    title: "Fonctionnement et installation des sondes",
    items: [
      { q: "Quelle est la portée de transmission des sondes GreenSensor ?", a: "Les sondes communiquent sans fil avec une portée pouvant atteindre 2 km en environnement dégagé. La portée réelle dépend des obstacles et de la configuration du site." },
      { q: "Combien de capteurs de température comporte chaque sonde ?", a: "Chaque sonde intègre un ou deux points de mesure selon sa longueur pour suivre à la fois la surface et le coeur de l'andain." },
      { q: "A quelle profondeur mesurer la température d'un andain ?", a: "La mesure doit se faire au coeur de l'andain, au moins a 50 cm, idealement entre 80 cm et 1 m. Les sondes 1 m, 1.5 m et 2 m repondent aux usages terrain." },
      { q: "L'installation nécessite-t-elle un technicien ?", a: "Non. L'installation est conçue pour être autonome et rapide, avec accompagnement possible du support Prosensor." },
      { q: "Les sondes résistent-elles aux conditions extérieures ?", a: "Oui. Elles sont conçues pour les conditions de compostage: humidité, UV, milieu corrosif et températures élevées." },
      { q: "Peut-on remplacer une sonde en cours de campagne ?", a: "Oui. L'historique reste conservé et la nouvelle sonde prend le relais dans la campagne." },
    ],
  },
  {
    title: "Infrastructure, connectivité et routeurs",
    items: [
      { q: "Le routeur est-il indispensable si les bureaux sont proches ?", a: "Oui. Le routeur doit être positionné proche de la zone de compostage pour collecter les données radio des sondes." },
      { q: "De quelle connexion Internet le routeur a-t-il besoin ?", a: "Selon la configuration, la passerelle peut fonctionner en 4G/LTE, Ethernet ou via le réseau existant du site." },
      { q: "Que se passe-t-il en cas de perte temporaire de connexion ?", a: "Une coupure réseau peut perturber la remontée des données en temps réel. Une connexion stable est recommandée en phase critique." },
      { q: "Peut-on gérer plusieurs plateformes avec un seul compte ?", a: "Oui. Le mode multi-sites permet de centraliser plusieurs plateformes sous un même compte." },
    ],
  },
  {
    title: "Conformité, hygiénisation et sécurité",
    items: [
      { q: "Quelles températures valident l'hygiénisation réglementaire ?", a: "Références usuelles: 55°C pendant 2 semaines, 65°C pendant 1 semaine, ou 70°C pendant 3 jours. GreenSensor aide a tracer ces phases." },
      { q: "GreenSensor aide-t-il a prévenir la combustion spontanée ?", a: "Oui. Des alertes SMS/email peuvent être déclenchées sur seuil haut pour intervenir avant un incident." },
      { q: "GreenSensor est-il compatible avec une démarche HACCP ?", a: "Oui. La traçabilité continue des températures s'intègre dans une logique HACCP et qualité." },
      { q: "Comment configurer les alertes et les destinataires ?", a: "Les seuils se configurent par sonde ou groupe. Les notifications peuvent être envoyées a plusieurs contacts simultanément." },
    ],
  },
  {
    title: "Plateforme cloud, données et rapports",
    items: [
      { q: "Peut-on annoter les événements sur les courbes ?", a: "Oui. Des annotations horodatées peuvent être ajoutées pour enrichir l'analyse et les rapports." },
      { q: "Quels rapports peut-on générer ?", a: "La plateforme génère des rapports de campagne exportables en PDF et CSV/Excel." },
      { q: "A quelle fréquence les températures sont-elles mesurées ?", a: "Les mesures sont réalisées a intervalles réguliers configurables pour un suivi continu." },
      { q: "La plateforme est-elle accessible sur smartphone/tablette ?", a: "Oui. L'interface web est responsive et utilisable sur mobile, tablette et ordinateur." },
      { q: "Peut-on gérer plusieurs utilisateurs avec des droits différents ?", a: "Oui. GreenSensor permet la gestion multi-utilisateurs avec niveaux d'accès distincts." },
    ],
  },
  {
    title: "Matériel, maintenance et calibration",
    items: [
      { q: "Qu'est-ce que le certificat d'étalonnage ?", a: "Il certifie la justesse de mesure de la sonde selon une référence métrologique traçable." },
      { q: "Quelle est l'autonomie de la batterie ?", a: "L'autonomie est de plusieurs années selon l'usage. Le niveau de batterie est suivi dans la plateforme." },
      { q: "Y a-t-il un nombre maximum de sondes par routeur ?", a: "La limite dépend du dimensionnement radio. Pour les grandes plateformes, plusieurs routeurs peuvent être déployés." },
    ],
  },
  {
    title: "Tarifs, activation et commandes",
    items: [
      { q: "Le modèle tarifaire est-il achat, abonnement ou les deux ?", a: "La solution combine généralement matériel et services plateforme. Le détail est proposé selon votre besoin." },
      { q: "Existe-t-il des remises pour commandes en volume ?", a: "Oui, des conditions dégressives peuvent être proposées selon les quantités et le contexte multi-sites." },
      { q: "Les frais d'activation s'appliquent a quoi ?", a: "Ils couvrent la mise en service du compte et l'enregistrement de l'infrastructure associée." },
    ],
  },
  {
    title: "Usages et secteurs d'application",
    items: [
      { q: "GreenSensor fonctionne-t-il en andains et en tunnels ?", a: "Oui, la solution est adaptée aux principaux modes de compostage, en extérieur comme en confinement." },
      { q: "Peut-on suivre digestats et boues avec GreenSensor ?", a: "Oui, la solution s'applique a différents types de matières organiques fermentescibles." },
      { q: "La solution est-elle adaptée aux petites structures ?", a: "Oui. Une configuration minimale peut convenir aux exploitations de taille réduite." },
      { q: "Pourquoi choisir GreenSensor pour le marché français ?", a: "Solution française, support local, adaptation réglementaire et accompagnement terrain par Prosensor." },
    ],
  },
]

const enSections: FaqSection[] = [
  {
    title: "Probe operation and installation",
    items: [
      { q: "What is the transmission range of GreenSensor probes?", a: "The probes communicate wirelessly up to around 2 km in open areas. Effective range depends on obstacles and site layout." },
      { q: "How many temperature sensors does each probe include?", a: "Each probe includes one or two measurement points depending on model length, to monitor both surface and core temperatures." },
      { q: "At what depth should temperature be measured in windrows?", a: "Temperature should be measured at the core of the windrow, at least 50 cm deep and ideally between 80 cm and 1 m." },
      { q: "Does installation require a technician?", a: "No. The solution is designed for quick self-installation, with optional remote support from Prosensor." },
      { q: "Are probes resistant to outdoor conditions?", a: "Yes. They are designed for composting conditions: humidity, UV, corrosive environments and high temperatures." },
      { q: "Can a probe be replaced during an active campaign?", a: "Yes. Historical data remains available and the replacement probe can continue the same campaign." },
    ],
  },
  {
    title: "Infrastructure, connectivity and routers",
    items: [
      { q: "Is a router still required if offices are nearby?", a: "Yes. The router should be positioned close to composting areas to reliably collect radio data from probes." },
      { q: "What internet connection does the router need?", a: "Depending on setup, gateways can use 4G/LTE, Ethernet or the site's existing internet access." },
      { q: "What happens during temporary internet loss?", a: "Temporary outages may impact real-time data transmission. A stable connection is recommended for critical phases." },
      { q: "Can multiple sites be managed from one account?", a: "Yes. Multi-site mode enables centralized monitoring for several composting platforms." },
    ],
  },
  {
    title: "Compliance, hygienisation and safety",
    items: [
      { q: "What temperatures are used for hygienisation compliance?", a: "Typical references are 55°C for 2 weeks, 65°C for 1 week, or 70°C for 3 days. GreenSensor helps document those periods." },
      { q: "Does GreenSensor help prevent spontaneous combustion?", a: "Yes. SMS/email alerts can be triggered on high thresholds to support preventive action before incidents." },
      { q: "Is GreenSensor compatible with HACCP workflows?", a: "Yes. Continuous temperature traceability supports HACCP-style controls and quality systems." },
      { q: "How are alerts configured and assigned?", a: "Thresholds can be set per probe or group. Alerts can be sent to multiple recipients simultaneously." },
    ],
  },
  {
    title: "Cloud platform, data and reporting",
    items: [
      { q: "Can events be annotated directly on temperature curves?", a: "Yes. Timestamped comments can be added and exported with campaign reports." },
      { q: "What report formats are available?", a: "Campaign reports can be exported in PDF and CSV/Excel formats." },
      { q: "How often are measurements recorded?", a: "Measurements are captured at configurable regular intervals for continuous monitoring." },
      { q: "Is the platform usable on mobile and tablet?", a: "Yes. The interface is responsive and available on smartphone, tablet and desktop." },
      { q: "Can multiple users have different access levels?", a: "Yes. Multi-user access with role-based permissions is supported." },
    ],
  },
  {
    title: "Hardware, maintenance and calibration",
    items: [
      { q: "What is the calibration certificate?", a: "It certifies measurement accuracy against traceable metrology references." },
      { q: "What is battery life?", a: "Battery life is multi-year in typical use. Battery level is visible in the platform." },
      { q: "Is there a maximum number of probes per router?", a: "Capacity depends on radio design and site architecture. Multiple routers can be deployed when needed." },
    ],
  },
  {
    title: "Pricing, activation and bulk orders",
    items: [
      { q: "Is pricing hardware purchase, subscription, or both?", a: "Pricing typically combines hardware and platform services, tailored to your configuration." },
      { q: "Are there discounts for larger orders?", a: "Yes, volume pricing can be discussed depending on quantities and multi-site needs." },
      { q: "What do activation fees cover?", a: "Activation usually covers account onboarding and infrastructure registration." },
    ],
  },
  {
    title: "Use cases and sectors",
    items: [
      { q: "Does GreenSensor work for windrows and enclosed tunnels?", a: "Yes, it supports major composting setups in both open and enclosed environments." },
      { q: "Is it suitable for digestate and sludge monitoring?", a: "Yes, it can be used across various fermentable organic materials." },
      { q: "Is it suitable for smaller operations?", a: "Yes. A light setup can fit smaller organizations and local composting initiatives." },
      { q: "Why choose GreenSensor for the French market?", a: "French solution, local support, regulatory alignment and field expertise from Prosensor." },
    ],
  },
]

const esSections: FaqSection[] = [
  {
    title: "Funcionamiento e instalación de sondas",
    items: [
      { q: "¿Cuál es el alcance de transmisión de las sondas GreenSensor?", a: "Las sondas se comunican de forma inalámbrica hasta unos 2 km en zonas abiertas. El alcance real depende de obstáculos y de la configuración del sitio." },
      { q: "¿Cuántos sensores de temperatura incluye cada sonda?", a: "Cada sonda incluye uno o dos puntos de medición según la longitud del modelo, para controlar superficie y núcleo." },
      { q: "¿A qué profundidad debe medirse la temperatura en una pila?", a: "La temperatura debe medirse en el núcleo, al menos a 50 cm y, de forma ideal, entre 80 cm y 1 m." },
      { q: "¿La instalación requiere técnico?", a: "No. La solución está diseñada para una instalación rápida y autónoma, con soporte remoto opcional de Prosensor." },
      { q: "¿Las sondas resisten condiciones exteriores?", a: "Sí. Están diseñadas para compostaje: humedad, UV, entorno corrosivo y altas temperaturas." },
      { q: "¿Se puede reemplazar una sonda durante una campaña activa?", a: "Sí. El histórico se conserva y la nueva sonda puede continuar la misma campaña." },
    ],
  },
  {
    title: "Infraestructura, conectividad y routers",
    items: [
      { q: "¿Sigue siendo necesario un router si las oficinas están cerca?", a: "Sí. El router debe colocarse cerca de la zona de compostaje para recoger correctamente los datos de radio." },
      { q: "¿Qué conexión a Internet necesita el router?", a: "Según la configuración, la pasarela puede usar 4G/LTE, Ethernet o la conexión existente del sitio." },
      { q: "¿Qué ocurre ante una pérdida temporal de Internet?", a: "Los cortes temporales pueden afectar el tiempo real. Se recomienda una conexión estable en fases críticas." },
      { q: "¿Se pueden gestionar varios sitios con una sola cuenta?", a: "Sí. El modo multisitio permite centralizar varias plataformas de compostaje." },
    ],
  },
  {
    title: "Cumplimiento, higienización y seguridad",
    items: [
      { q: "¿Qué temperaturas se usan para validar la higienización?", a: "Referencias habituales: 55°C durante 2 semanas, 65°C durante 1 semana o 70°C durante 3 días. GreenSensor ayuda a documentar estos periodos." },
      { q: "¿GreenSensor ayuda a prevenir la combustión espontánea?", a: "Sí. Se pueden activar alertas SMS/email por umbral alto para actuar de forma preventiva." },
      { q: "¿GreenSensor es compatible con flujos HACCP?", a: "Sí. La trazabilidad continua de temperatura apoya controles tipo HACCP y sistemas de calidad." },
      { q: "¿Cómo se configuran y asignan las alertas?", a: "Los umbrales pueden definirse por sonda o grupo, y enviarse a varios destinatarios simultáneamente." },
    ],
  },
  {
    title: "Plataforma cloud, datos e informes",
    items: [
      { q: "¿Se pueden anotar eventos en las curvas de temperatura?", a: "Sí. Se pueden añadir comentarios con marca de tiempo y exportarlos en informes de campaña." },
      { q: "¿Qué formatos de informe están disponibles?", a: "Los informes pueden exportarse en PDF y CSV/Excel." },
      { q: "¿Con qué frecuencia se registran las mediciones?", a: "Las mediciones se realizan a intervalos configurables para una monitorización continua." },
      { q: "¿La plataforma puede usarse en móvil y tablet?", a: "Sí. La interfaz es responsive y funciona en smartphone, tablet y escritorio." },
      { q: "¿Se pueden definir distintos niveles de acceso por usuario?", a: "Sí. Se admite acceso multiusuario con permisos por rol." },
    ],
  },
  {
    title: "Hardware, mantenimiento y calibración",
    items: [
      { q: "¿Qué es el certificado de calibración?", a: "Certifica la precisión de medición frente a referencias metrológicas trazables." },
      { q: "¿Cuál es la autonomía de la batería?", a: "La batería tiene autonomía de varios años en uso típico. El nivel se consulta en la plataforma." },
      { q: "¿Hay un máximo de sondas por router?", a: "La capacidad depende del diseño radio y del sitio. Se pueden desplegar varios routers si es necesario." },
    ],
  },
  {
    title: "Precios, activación y pedidos por volumen",
    items: [
      { q: "¿El precio es compra de hardware, suscripción o ambos?", a: "Normalmente combina hardware y servicios de plataforma, ajustado a su configuración." },
      { q: "¿Hay descuentos para pedidos grandes?", a: "Sí, puede aplicarse tarifa por volumen según cantidades y necesidades multisitio." },
      { q: "¿Qué cubren los costes de activación?", a: "Suelen cubrir la puesta en marcha de la cuenta y el registro de la infraestructura." },
    ],
  },
  {
    title: "Casos de uso y sectores",
    items: [
      { q: "¿GreenSensor funciona en pilas y túneles cerrados?", a: "Sí, se adapta a los principales esquemas de compostaje en entornos abiertos y cerrados." },
      { q: "¿Es apto para digestato y lodos?", a: "Sí, puede utilizarse con distintos materiales orgánicos fermentables." },
      { q: "¿Es apto para operaciones pequeñas?", a: "Sí. Una configuración ligera puede ajustarse a estructuras de menor tamaño." },
      { q: "¿Por qué elegir GreenSensor para el mercado francés?", a: "Solución francesa, soporte local, alineación regulatoria y experiencia de campo de Prosensor." },
    ],
  },
]

const deSections: FaqSection[] = [
  {
    title: "Sondenbetrieb und Installation",
    items: [
      { q: "Wie groß ist die Übertragungsreichweite der GreenSensor-Sonden?", a: "Die Sonden kommunizieren drahtlos bis etwa 2 km in offenem Gelände. Die effektive Reichweite hängt von Hindernissen und der Standortstruktur ab." },
      { q: "Wie viele Temperatursensoren hat jede Sonde?", a: "Je nach Modelllänge enthält jede Sonde ein oder zwei Messpunkte, um Oberfläche und Kern zu überwachen." },
      { q: "In welcher Tiefe sollte die Temperatur im Mietenkörper gemessen werden?", a: "Die Messung sollte im Kern erfolgen, mindestens 50 cm tief, idealerweise zwischen 80 cm und 1 m." },
      { q: "Ist für die Installation ein Techniker erforderlich?", a: "Nein. Die Lösung ist für eine schnelle Selbstinstallation ausgelegt; optional mit Remote-Support von Prosensor." },
      { q: "Sind die Sonden für Außenbedingungen geeignet?", a: "Ja. Sie sind für Kompostbedingungen ausgelegt: Feuchtigkeit, UV, korrosive Umgebung und hohe Temperaturen." },
      { q: "Kann eine Sonde während einer laufenden Kampagne ersetzt werden?", a: "Ja. Historische Daten bleiben erhalten und die Ersatzsonde kann die Kampagne fortführen." },
    ],
  },
  {
    title: "Infrastruktur, Konnektivität und Router",
    items: [
      { q: "Ist ein Router weiterhin nötig, wenn die Büros in der Nähe sind?", a: "Ja. Der Router sollte nahe an den Kompostbereichen positioniert werden, um die Funksignale zuverlässig zu erfassen." },
      { q: "Welche Internetverbindung benötigt der Router?", a: "Je nach Setup können Gateways 4G/LTE, Ethernet oder den vorhandenen Internetzugang nutzen." },
      { q: "Was passiert bei einem vorübergehenden Internetausfall?", a: "Temporäre Ausfälle können die Echtzeitübertragung beeinträchtigen. Für kritische Phasen wird eine stabile Verbindung empfohlen." },
      { q: "Können mehrere Standorte mit einem Konto verwaltet werden?", a: "Ja. Der Multi-Site-Modus ermöglicht eine zentrale Überwachung mehrerer Plattformen." },
    ],
  },
  {
    title: "Compliance, Hygienisierung und Sicherheit",
    items: [
      { q: "Welche Temperaturen gelten für die Hygienisierungs-Compliance?", a: "Übliche Referenzen: 55°C für 2 Wochen, 65°C für 1 Woche oder 70°C für 3 Tage. GreenSensor hilft bei der Dokumentation." },
      { q: "Hilft GreenSensor, Selbstentzündung zu vermeiden?", a: "Ja. SMS/E-Mail-Warnungen können bei hohen Schwellen ausgelöst werden, um frühzeitig zu reagieren." },
      { q: "Ist GreenSensor mit HACCP-Workflows kompatibel?", a: "Ja. Die kontinuierliche Temperatur-Rückverfolgbarkeit unterstützt HACCP-ähnliche Kontrollen und Qualitätssysteme." },
      { q: "Wie werden Warnungen konfiguriert und zugewiesen?", a: "Schwellenwerte können pro Sonde oder Gruppe gesetzt und an mehrere Empfänger gleichzeitig gesendet werden." },
    ],
  },
  {
    title: "Cloud-Plattform, Daten und Berichte",
    items: [
      { q: "Können Ereignisse direkt in Temperaturkurven kommentiert werden?", a: "Ja. Zeitgestempelte Kommentare können hinzugefügt und mit Kampagnenberichten exportiert werden." },
      { q: "Welche Berichtsformate sind verfügbar?", a: "Kampagnenberichte können als PDF und CSV/Excel exportiert werden." },
      { q: "Wie häufig werden Messungen erfasst?", a: "Messungen werden in konfigurierbaren Intervallen für eine kontinuierliche Überwachung erfasst." },
      { q: "Ist die Plattform auf Smartphone und Tablet nutzbar?", a: "Ja. Die Oberfläche ist responsiv und auf Smartphone, Tablet und Desktop verfügbar." },
      { q: "Können mehrere Nutzer unterschiedliche Zugriffsrechte haben?", a: "Ja. Multi-User-Zugriff mit rollenbasierten Berechtigungen wird unterstützt." },
    ],
  },
  {
    title: "Hardware, Wartung und Kalibrierung",
    items: [
      { q: "Was ist das Kalibrierzertifikat?", a: "Es bestätigt die Messgenauigkeit anhand rückverfolgbarer metrologischer Referenzen." },
      { q: "Wie lange hält die Batterie?", a: "Die Batterielaufzeit beträgt bei typischer Nutzung mehrere Jahre. Der Batteriestand ist in der Plattform sichtbar." },
      { q: "Gibt es eine maximale Anzahl an Sonden pro Router?", a: "Die Kapazität hängt vom Funkdesign und der Standortarchitektur ab. Bei Bedarf können mehrere Router eingesetzt werden." },
    ],
  },
  {
    title: "Preise, Aktivierung und Sammelbestellungen",
    items: [
      { q: "Besteht die Preisstruktur aus Hardwarekauf, Abo oder beidem?", a: "Die Preisgestaltung kombiniert in der Regel Hardware und Plattformservices, angepasst an Ihre Konfiguration." },
      { q: "Gibt es Rabatte bei größeren Bestellungen?", a: "Ja, Mengenpreise sind je nach Stückzahl und Multi-Site-Bedarf möglich." },
      { q: "Was decken Aktivierungsgebühren ab?", a: "Sie decken üblicherweise Konto-Onboarding und Infrastrukturregistrierung ab." },
    ],
  },
  {
    title: "Anwendungsfälle und Branchen",
    items: [
      { q: "Funktioniert GreenSensor für Mieten und geschlossene Tunnel?", a: "Ja, die Lösung unterstützt die wichtigsten Kompostierungs-Setups in offenen und geschlossenen Umgebungen." },
      { q: "Ist sie für Gärreste und Schlamm geeignet?", a: "Ja, sie kann für verschiedene fermentierbare organische Materialien genutzt werden." },
      { q: "Ist sie für kleinere Betriebe geeignet?", a: "Ja. Ein leichtes Setup passt auch zu kleineren Organisationen." },
      { q: "Warum GreenSensor für den französischen Markt?", a: "Französische Lösung, lokaler Support, regulatorische Ausrichtung und Praxiserfahrung von Prosensor." },
    ],
  },
]

const ptSections: FaqSection[] = [
  {
    title: "Operação e instalação das sondas",
    items: [
      { q: "Qual é o alcance de transmissão das sondas GreenSensor?", a: "As sondas comunicam sem fio até cerca de 2 km em áreas abertas. O alcance real depende de obstáculos e da configuração do local." },
      { q: "Quantos sensores de temperatura cada sonda inclui?", a: "Cada sonda inclui um ou dois pontos de medição, conforme o comprimento do modelo, para monitorizar superfície e núcleo." },
      { q: "A que profundidade deve ser medida a temperatura na leira?", a: "A medição deve ser feita no núcleo da leira, pelo menos a 50 cm e, idealmente, entre 80 cm e 1 m." },
      { q: "A instalação requer técnico?", a: "Não. A solução foi concebida para auto-instalação rápida, com suporte remoto opcional da Prosensor." },
      { q: "As sondas resistem a condições exteriores?", a: "Sim. Foram concebidas para condições de compostagem: humidade, UV, ambiente corrosivo e altas temperaturas." },
      { q: "É possível substituir uma sonda durante uma campanha ativa?", a: "Sim. O histórico mantém-se e a nova sonda pode continuar a mesma campanha." },
    ],
  },
  {
    title: "Infraestrutura, conectividade e routers",
    items: [
      { q: "O router continua a ser necessário se os escritórios estiverem perto?", a: "Sim. O router deve ficar próximo da área de compostagem para recolher os dados rádio das sondas com fiabilidade." },
      { q: "Que ligação à Internet o router precisa?", a: "Consoante a configuração, o gateway pode usar 4G/LTE, Ethernet ou a ligação existente no local." },
      { q: "O que acontece em caso de perda temporária de Internet?", a: "Falhas temporárias podem afetar a transmissão em tempo real. Recomenda-se uma ligação estável em fases críticas." },
      { q: "É possível gerir vários locais com uma só conta?", a: "Sim. O modo multi-site permite monitorização centralizada de várias plataformas." },
    ],
  },
  {
    title: "Conformidade, higienização e segurança",
    items: [
      { q: "Que temperaturas são usadas para conformidade de higienização?", a: "Referências típicas: 55°C por 2 semanas, 65°C por 1 semana ou 70°C por 3 dias. O GreenSensor ajuda a documentar estes períodos." },
      { q: "O GreenSensor ajuda a prevenir combustão espontânea?", a: "Sim. Alertas SMS/email podem ser acionados em limiares altos para ação preventiva." },
      { q: "O GreenSensor é compatível com fluxos HACCP?", a: "Sim. A rastreabilidade contínua da temperatura apoia controlos tipo HACCP e sistemas de qualidade." },
      { q: "Como configurar e atribuir alertas?", a: "Os limiares podem ser definidos por sonda ou grupo e enviados para vários destinatários em simultâneo." },
    ],
  },
  {
    title: "Plataforma cloud, dados e relatórios",
    items: [
      { q: "É possível anotar eventos nas curvas de temperatura?", a: "Sim. Comentários com carimbo temporal podem ser adicionados e exportados com os relatórios de campanha." },
      { q: "Que formatos de relatório estão disponíveis?", a: "Os relatórios podem ser exportados em PDF e CSV/Excel." },
      { q: "Com que frequência as medições são registadas?", a: "As medições são registadas em intervalos configuráveis para monitorização contínua." },
      { q: "A plataforma funciona em smartphone e tablet?", a: "Sim. A interface é responsiva e está disponível em smartphone, tablet e desktop." },
      { q: "Vários utilizadores podem ter níveis de acesso diferentes?", a: "Sim. É suportado acesso multiutilizador com permissões por função." },
    ],
  },
  {
    title: "Hardware, manutenção e calibração",
    items: [
      { q: "O que é o certificado de calibração?", a: "Certifica a precisão de medição com base em referências metrológicas rastreáveis." },
      { q: "Qual é a autonomia da bateria?", a: "A autonomia é de vários anos em uso típico. O nível de bateria é visível na plataforma." },
      { q: "Existe um número máximo de sondas por router?", a: "A capacidade depende do desenho rádio e da arquitetura do local. Podem ser instalados vários routers quando necessário." },
    ],
  },
  {
    title: "Preços, ativação e encomendas em volume",
    items: [
      { q: "O preço é compra de hardware, subscrição ou ambos?", a: "Normalmente combina hardware e serviços da plataforma, ajustados à sua configuração." },
      { q: "Há descontos para encomendas maiores?", a: "Sim, podem ser aplicados preços por volume, dependendo das quantidades e necessidades multi-site." },
      { q: "O que cobrem as taxas de ativação?", a: "Cobrem normalmente o onboarding da conta e o registo da infraestrutura." },
    ],
  },
  {
    title: "Casos de uso e setores",
    items: [
      { q: "O GreenSensor funciona para leiras e túneis fechados?", a: "Sim, suporta os principais cenários de compostagem em ambientes abertos e fechados." },
      { q: "É adequado para digestato e lamas?", a: "Sim, pode ser usado em vários materiais orgânicos fermentáveis." },
      { q: "É adequado para operações pequenas?", a: "Sim. Uma configuração leve adapta-se a organizações de menor dimensão." },
      { q: "Porque escolher GreenSensor para o mercado francês?", a: "Solução francesa, suporte local, alinhamento regulatório e experiência de campo da Prosensor." },
    ],
  },
]

const roSections: FaqSection[] = [
  {
    title: "Funcționarea și instalarea sondelor",
    items: [
      { q: "Care este raza de transmisie a sondelor GreenSensor?", a: "Sondele comunică wireless până la aproximativ 2 km în zone deschise. Raza efectivă depinde de obstacole și de configurația locației." },
      { q: "Câți senzori de temperatură include fiecare sondă?", a: "Fiecare sondă include unul sau două puncte de măsurare, în funcție de lungimea modelului, pentru suprafață și nucleu." },
      { q: "La ce adâncime se măsoară temperatura în grămadă?", a: "Temperatura trebuie măsurată în nucleu, cel puțin la 50 cm și ideal între 80 cm și 1 m." },
      { q: "Instalarea necesită tehnician?", a: "Nu. Soluția este proiectată pentru instalare rapidă în regim propriu, cu suport remote opțional de la Prosensor." },
      { q: "Sondele rezistă la condiții exterioare?", a: "Da. Sunt proiectate pentru condiții de compostare: umiditate, UV, mediu coroziv și temperaturi ridicate." },
      { q: "Se poate înlocui o sondă în timpul unei campanii active?", a: "Da. Istoricul rămâne disponibil, iar sonda nouă poate continua aceeași campanie." },
    ],
  },
  {
    title: "Infrastructură, conectivitate și routere",
    items: [
      { q: "Mai este necesar un router dacă birourile sunt aproape?", a: "Da. Routerul trebuie poziționat aproape de zona de compostare pentru colectarea fiabilă a datelor radio." },
      { q: "Ce conexiune la internet necesită routerul?", a: "În funcție de configurație, gateway-urile pot folosi 4G/LTE, Ethernet sau conexiunea existentă a locației." },
      { q: "Ce se întâmplă la pierderea temporară a internetului?", a: "Întreruperile temporare pot afecta transmiterea în timp real. Se recomandă conexiune stabilă în fazele critice." },
      { q: "Se pot gestiona mai multe locații dintr-un singur cont?", a: "Da. Modul multi-site permite monitorizare centralizată pentru mai multe platforme." },
    ],
  },
  {
    title: "Conformitate, igienizare și siguranță",
    items: [
      { q: "Ce temperaturi sunt folosite pentru conformitatea igienizării?", a: "Referințe uzuale: 55°C timp de 2 săptămâni, 65°C timp de 1 săptămână sau 70°C timp de 3 zile. GreenSensor ajută la documentarea acestor perioade." },
      { q: "Ajută GreenSensor la prevenirea autoaprinderii?", a: "Da. Alertele SMS/email pot fi declanșate la praguri înalte pentru intervenție preventivă." },
      { q: "Este GreenSensor compatibil cu fluxuri HACCP?", a: "Da. Trasabilitatea continuă a temperaturii susține controale de tip HACCP și sisteme de calitate." },
      { q: "Cum se configurează și alocă alertele?", a: "Pragurile se pot seta pe sondă sau grup, iar alertele se pot trimite simultan către mai mulți destinatari." },
    ],
  },
  {
    title: "Platformă cloud, date și rapoarte",
    items: [
      { q: "Se pot adăuga anotări pe curbele de temperatură?", a: "Da. Se pot adăuga comentarii cu timestamp, exportabile împreună cu rapoartele campaniei." },
      { q: "Ce formate de raport sunt disponibile?", a: "Rapoartele de campanie pot fi exportate în PDF și CSV/Excel." },
      { q: "Cât de des se înregistrează măsurătorile?", a: "Măsurătorile sunt colectate la intervale configurabile pentru monitorizare continuă." },
      { q: "Platforma este utilizabilă pe mobil și tabletă?", a: "Da. Interfața este responsive și disponibilă pe smartphone, tabletă și desktop." },
      { q: "Mai mulți utilizatori pot avea niveluri diferite de acces?", a: "Da. Este suportat acces multiutilizator cu permisiuni pe roluri." },
    ],
  },
  {
    title: "Hardware, mentenanță și calibrare",
    items: [
      { q: "Ce este certificatul de calibrare?", a: "Certifică acuratețea măsurării în raport cu referințe metrologice trasabile." },
      { q: "Care este durata de viață a bateriei?", a: "Durata bateriei este de mai mulți ani în utilizare tipică. Nivelul bateriei este vizibil în platformă." },
      { q: "Există un număr maxim de sonde per router?", a: "Capacitatea depinde de designul radio și arhitectura locației. Se pot instala mai multe routere dacă este necesar." },
    ],
  },
  {
    title: "Prețuri, activare și comenzi în volum",
    items: [
      { q: "Prețul înseamnă achiziție hardware, abonament sau ambele?", a: "De regulă, prețul combină hardware și servicii de platformă, adaptate configurației dvs." },
      { q: "Există reduceri pentru comenzi mai mari?", a: "Da, se pot discuta prețuri de volum în funcție de cantități și nevoi multi-site." },
      { q: "Ce acoperă taxele de activare?", a: "Acoperă în mod obișnuit onboarding-ul contului și înregistrarea infrastructurii." },
    ],
  },
  {
    title: "Cazuri de utilizare și sectoare",
    items: [
      { q: "Funcționează GreenSensor pentru grămezi și tuneluri închise?", a: "Da, soluția acoperă principalele configurații de compostare în medii deschise și închise." },
      { q: "Este potrivit pentru digestat și nămol?", a: "Da, poate fi utilizat pentru diverse materiale organice fermentabile." },
      { q: "Este potrivit pentru operațiuni mici?", a: "Da. O configurație ușoară se potrivește organizațiilor de dimensiuni reduse." },
      { q: "De ce GreenSensor pentru piața franceză?", a: "Soluție franceză, suport local, aliniere la reglementări și expertiză de teren Prosensor." },
    ],
  },
]

export function FaqPageContent() {
  const { language } = useI18n()
  const isFr = language === "fr"
  const isEs = language === "es"
  const isDe = language === "de"
  const isPt = language === "pt"
  const isRo = language === "ro"
  const sections = isFr ? frSections : isEs ? esSections : isDe ? deSections : isPt ? ptSections : isRo ? roSections : enSections
  const totalQuestions = sections.reduce((acc, section) => acc + section.items.length, 0)

  return (
    <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-10 lg:py-14">
      <nav className="text-sm text-gray-500 mb-6">
        <Link href="/" className="hover:text-[#3eab35] transition-colors">
          {isFr ? "Accueil" : isEs ? "Inicio" : isDe ? "Start" : isPt ? "Início" : isRo ? "Acasă" : "Home"}
        </Link>
        <span className="mx-2">/</span>
        <span className="text-gray-700 font-medium">FAQ</span>
      </nav>

      <header className="rounded-3xl border border-gray-200 bg-white p-6 sm:p-8 shadow-sm mb-8">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900">
          {isFr ? "Questions fréquentes GreenSensor" : isEs ? "Preguntas frecuentes GreenSensor" : isDe ? "Häufige Fragen zu GreenSensor" : isPt ? "Perguntas frequentes GreenSensor" : isRo ? "Întrebări frecvente GreenSensor" : "GreenSensor Frequently Asked Questions"}
        </h1>
        <p className="text-[#3eab35] mt-2 font-medium">
          {isFr ? "Sondes connectées, conformité, alertes et exploitation terrain" : isEs ? "Sondas conectadas, cumplimiento, alertas y uso en campo" : isDe ? "Vernetzte Sonden, Compliance, Warnungen und Feldeinsatz" : isPt ? "Sondas conectadas, conformidade, alertas e operação no terreno" : isRo ? "Sonde conectate, conformitate, alerte și operare în teren" : "Connected probes, compliance, alerts and field operations"}
        </p>
        <div className="mt-4 text-sm text-gray-600">
          {totalQuestions} {isFr ? "questions disponibles" : isEs ? "preguntas disponibles" : isDe ? "verfügbare Fragen" : isPt ? "perguntas disponíveis" : isRo ? "întrebări disponibile" : "questions available"}
        </div>
      </header>

      <div className="space-y-8">
        {sections.map((section) => (
          <section key={section.title} className="rounded-2xl border border-gray-200 bg-white p-5 sm:p-6 shadow-sm">
            <h2 className="text-lg sm:text-xl font-semibold text-gray-900 mb-4">{section.title}</h2>
            <Accordion type="single" collapsible className="w-full">
              {section.items.map((item, idx) => (
                <AccordionItem
                  key={`${section.title}-${idx}`}
                  value={`${section.title}-${idx}`}
                  className="border border-gray-200 mb-3 rounded-xl overflow-hidden bg-white"
                >
                  <AccordionTrigger className="px-4 py-3 text-left hover:no-underline hover:bg-gray-50">
                    <span className="font-medium text-gray-900">{item.q}</span>
                  </AccordionTrigger>
                  <AccordionContent className="px-4 pb-4 text-gray-600 leading-relaxed">
                    {item.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </section>
        ))}
      </div>
    </div>
  )
}


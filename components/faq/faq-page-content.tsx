"use client"

import Link from "next/link"
import { useEffect, useMemo, useState } from "react"
import { Mail, Phone, Search } from "lucide-react"
import { useI18n } from "@/i18n/i18n-provider"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Container } from "@/components/ui/container"
import { FaqAnswer } from "@/components/faq/faq-answer"
import { buttonVariants } from "@/components/ui/button"
import { faqExtra, type FaqLang, type FaqSection } from "@/i18n/faq-extra"
import { cn } from "@/lib/utils"

const frSections: FaqSection[] = [
  {
    title: "Loi AGEC et tri des biodéchets",
    items: [
      {
        q: "Qu'est-ce que la loi AGEC et pourquoi concerne-t-elle le compostage ?",
        a: "La loi AGEC (Anti-Gaspillage pour une Économie Circulaire), promulguée le 10 février 2020, impose le tri à la source des biodéchets pour tous les acteurs — particuliers, entreprises et administrations — à partir du 1er janvier 2024, afin qu'ils soient valorisés par compostage ou méthanisation plutôt qu'incinérés ou enfouis. Les biodéchets représentent 30 % du contenu d'une poubelle ménagère et plus de 28,4 millions de tonnes sont générées chaque année en France (source ADEME 2024).",
      },
      {
        q: "Depuis quand le tri des biodéchets est-il obligatoire en France ?",
        a: "Le calendrier a été progressif : depuis 2016 pour les professionnels produisant plus de 10 t/an ; depuis le 1er janvier 2023 pour ceux produisant plus de 5 t/an ; et depuis le 1er janvier 2024 pour tous sans exception de volume — ménages, entreprises et administrations. L'obligation porte sur le tri à la source : séparer les biodéchets avant toute collecte, sans obligation de composteur individuel.",
      },
      {
        q: "Quels types de déchets sont concernés par cette obligation ?",
        a: "Sont visés les déchets alimentaires (épluchures, restes de repas, produits périmés, marc de café, coquilles d'œufs…), les déchets verts (tontes, feuilles mortes, tailles de haies) et, pour les professionnels, les déchets de cuisine (restaurants, cantines, traiteurs, grandes surfaces, agroalimentaire). Sont exclus les déchets dangereux et les emballages non biodégradables.",
      },
      {
        q: "Quelles sont les obligations spécifiques pour les entreprises ?",
        a: "Depuis le 1er janvier 2024, toutes les entreprises doivent mettre en place un tri à la source sur site, assurer la valorisation de leurs biodéchets (compostage ou méthanisation) et pouvoir justifier leur destination via un contrat avec un prestataire agréé ou une plateforme de compostage. Sont particulièrement concernées : restauration, hôtellerie, grande distribution, industrie agroalimentaire et établissements de santé.",
      },
      {
        q: "Quelles sont les obligations pour les collectivités territoriales ?",
        a: "Les collectivités doivent proposer une solution de tri à la source à tous leurs habitants : collecte séparée vers une plateforme industrielle, ou gestion de proximité (composteurs individuels, sites partagés). Au 1er juillet 2024, 40 % de la population française était couverte. Les collectivités de plus de 50 000 habitants étaient visées au 1er janvier 2024 ; les autres ont jusqu'au 31 décembre 2026.",
      },
      {
        q: "Pourquoi la loi AGEC accélère-t-elle le développement des plateformes de compostage ?",
        a: "La généralisation du tri crée un afflux massif de biodéchets à traiter. Les opérateurs (Veolia, Suez, Sépur, Paprec, Pizzorno, Moulinot…) agrandissent leurs plateformes, créent de nouveaux sites et diversifient leurs procédés (co-compostage, lombricompostage, méthanisation). La filière biodéchets représente une opportunité de plusieurs milliards d'euros d'ici 2030.",
      },
      {
        q: "Quels sont les bénéfices environnementaux du tri des biodéchets ?",
        a: "Le tri et la valorisation réduisent les émissions de gaz à effet de serre (éviter le méthane lié à l'enfouissement), enrichissent les sols agricoles via le compost produit, réduisent le recours aux engrais chimiques et soutiennent l'économie circulaire locale. En France, 62 % des composts produits sont utilisés en agriculture.",
      },
      {
        q: "Comment GreenSensor aide-t-il à se conformer à la loi AGEC ?",
        a: "Se conformer à la loi AGEC implique de trier, mais aussi de mesurer, tracer et justifier sa gestion des biodéchets. GreenSensor apporte une réponse concrète : mesure en temps réel des flux, traçabilité réglementaire avec génération automatique de documents justificatifs, optimisation des collectes par alertes de remplissage, et reporting ESG pour valoriser vos efforts environnementaux. Chaque kilo de biodéchet valorisé est mesuré, prouvé et intégrable dans votre bilan environnemental.",
      },
    ],
  },
  {
    title: "Fonctionnement et installation des sondes",
    items: [
      { q: "Quelle est la portée de transmission des sondes GreenSensor ?", a: "Les sondes communiquent sans fil avec une portée pouvant atteindre 2 km en environnement dégagé. La portée réelle dépend des obstacles et de la configuration du site." },
      { q: "Combien de capteurs de température comporte chaque sonde ?", a: "Chaque sonde intègre un ou deux points de mesure selon sa longueur pour suivre à la fois la surface et le coeur de l'andain." },
      { q: "A quelle profondeur mesurer la température d'un andain ?", a: "La mesure doit se faire au coeur de l'andain, au moins a 50 cm, idealement entre 80 cm et 1 m. Les sondes 1 m, 1.5 m et 2 m repondent aux usages terrain." },
      { q: "L'installation nécessite-t-elle un technicien ?", a: "Non. Il suffit de connecter le routeur à Internet et de démarrer la sonde en appuyant sur le bouton du boîtier." },
      { q: "Les sondes résistent-elles aux conditions extérieures ?", a: "Oui. Elles sont conçues pour les conditions de compostage: humidité, UV, milieu corrosif et températures élevées." },
      { q: "Peut-on remplacer une sonde en cours de campagne ?", a: "Oui. L'historique reste conservé et la nouvelle sonde prend le relais dans la campagne." },
    ],
  },
  {
    title: "Infrastructure, connectivité et routeurs",
    items: [
      { q: "Le routeur est-il indispensable si les bureaux sont proches ?", a: "Oui. Le routeur doit être positionné proche de la zone de compostage pour collecter les données radio des sondes." },
      { q: "De quelle connexion Internet le routeur a-t-il besoin ?", a: "Idéalement en Ethernet. Pour les sites sans connexion Internet, des solutions 4G existent." },
      { q: "Que se passe-t-il en cas de perte temporaire de connexion ?", a: "Une coupure réseau peut perturber la remontée des données en temps réel. Une connexion stable est recommandée en phase critique." },
      { q: "Peut-on gérer plusieurs plateformes avec un seul compte ?", a: "Oui. Le mode multi-sites permet de centraliser plusieurs plateformes sous un même compte." },
    ],
  },
  {
    title: "Conformité, hygiénisation et sécurité",
    items: [
      { q: "Quelles températures valident l'hygiénisation réglementaire ?", a: "Références usuelles: 55°C pendant 2 semaines, 65°C pendant 1 semaine, ou 70°C pendant 3 jours. GreenSensor aide a tracer ces phases." },
      { q: "GreenSensor aide-t-il a prévenir la combustion spontanée ?", a: "Oui. Des alertes SMS/email peuvent être déclenchées sur seuil haut pour intervenir avant un incident." },
      { q: "Comment configurer les alertes et les destinataires ?", a: "Directement sur la plateforme : chaque utilisateur paramètre lui-même les seuils d'alerte et les destinataires." },
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
      { q: "Peut-on acheter les sondes ?", a: "Oui. Les sondes s'achètent avec l'accès annuel à la plateforme GreenSensor. Une première commande comprend souvent quelques sondes et une passerelle pour tester, puis les sites passent à des dizaines de sondes. Contactez-nous pour un devis adapté à votre site." },
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
    title: "AGEC law and biowaste sorting",
    items: [
      {
        q: "What is the AGEC law and why does it matter for composting?",
        a: "The AGEC law (Anti-Waste for a Circular Economy), enacted on 10 February 2020, requires source sorting of biowaste for all actors — households, businesses and public bodies — from 1 January 2024, so materials are recovered through composting or anaerobic digestion rather than incineration or landfill. Biowaste accounts for 30% of household bin content and over 28.4 million tonnes are generated each year in France (ADEME 2024).",
      },
      {
        q: "Since when has biowaste sorting been mandatory in France?",
        a: "The timeline was gradual: since 2016 for professionals producing more than 10 t/year; since 1 January 2023 for those producing more than 5 t/year; and since 1 January 2024 for everyone with no volume exemption. The obligation is source sorting — separating biowaste before collection — not necessarily owning an individual composter.",
      },
      {
        q: "Which waste types are covered by this obligation?",
        a: "Food waste (peelings, leftovers, expired products, coffee grounds, eggshells), green waste (lawn clippings, dead leaves, hedge trimmings) and, for professionals, kitchen waste from restaurants, canteens, caterers, supermarkets and food industry. Hazardous waste and non-biodegradable packaging are excluded.",
      },
      {
        q: "What are the specific obligations for businesses?",
        a: "Since 1 January 2024, all businesses must implement on-site source sorting, ensure biowaste recovery (composting or anaerobic digestion) and be able to prove destination through a contract with an approved service provider or composting platform. Restaurants, hotels, retail, food industry and healthcare facilities are especially concerned.",
      },
      {
        q: "What are the obligations for local authorities?",
        a: "Authorities must offer a source-sorting solution to all residents: separate collection to an industrial platform, or local management (individual composters, shared neighbourhood sites). As of 1 July 2024, 40% of the French population was covered. Authorities over 50,000 inhabitants were targeted by 1 January 2024; others have until 31 December 2026.",
      },
      {
        q: "Why does the AGEC law accelerate composting platform development?",
        a: "Universal sorting creates a massive influx of biowaste to process. Operators (Veolia, Suez, Sépur, Paprec, Pizzorno, Moulinot…) are expanding platforms, opening new sites and diversifying processes (co-composting, vermicomposting, anaerobic digestion). The biowaste sector represents a multi-billion euro opportunity by 2030.",
      },
      {
        q: "What are the environmental benefits of biowaste sorting?",
        a: "Sorting and recovery reduce greenhouse gas emissions (avoiding landfill methane), enrich agricultural soils through compost, reduce reliance on chemical fertilisers and support local circular economy. In France, 62% of compost produced is used in agriculture.",
      },
      {
        q: "How does GreenSensor help comply with the AGEC law?",
        a: "Compliance requires sorting, but also measuring, tracing and proving biowaste management. GreenSensor provides real-time flow monitoring, regulatory traceability with automatic supporting documents, collection optimisation through fill-level alerts, and ESG reporting to demonstrate environmental performance. Every recovered kilo can be measured, evidenced and included in your environmental balance sheet.",
      },
    ],
  },
  {
    title: "Probe operation and installation",
    items: [
      { q: "What is the transmission range of GreenSensor probes?", a: "The probes communicate wirelessly up to around 2 km in open areas. Effective range depends on obstacles and site layout." },
      { q: "How many temperature sensors does each probe include?", a: "Each probe includes one or two measurement points depending on model length, to monitor both surface and core temperatures." },
      { q: "At what depth should temperature be measured in windrows?", a: "Temperature should be measured at the core of the windrow, at least 50 cm deep and ideally between 80 cm and 1 m." },
      { q: "Does installation require a technician?", a: "No. Just connect the router to the Internet and start the probe by pressing the button on its housing." },
      { q: "Are probes resistant to outdoor conditions?", a: "Yes. They are designed for composting conditions: humidity, UV, corrosive environments and high temperatures." },
      { q: "Can a probe be replaced during an active campaign?", a: "Yes. Historical data remains available and the replacement probe can continue the same campaign." },
    ],
  },
  {
    title: "Infrastructure, connectivity and routers",
    items: [
      { q: "Is a router still required if offices are nearby?", a: "Yes. The router should be positioned close to composting areas to reliably collect radio data from probes." },
      { q: "What internet connection does the router need?", a: "Ideally Ethernet. For sites without an Internet connection, 4G solutions are available." },
      { q: "What happens during temporary internet loss?", a: "Temporary outages may impact real-time data transmission. A stable connection is recommended for critical phases." },
      { q: "Can multiple sites be managed from one account?", a: "Yes. Multi-site mode enables centralized monitoring for several composting platforms." },
    ],
  },
  {
    title: "Compliance, hygienisation and safety",
    items: [
      { q: "What temperatures are used for hygienisation compliance?", a: "Typical references are 55°C for 2 weeks, 65°C for 1 week, or 70°C for 3 days. GreenSensor helps document those periods." },
      { q: "Does GreenSensor help prevent spontaneous combustion?", a: "Yes. SMS/email alerts can be triggered on high thresholds to support preventive action before incidents." },
      { q: "How are alerts configured and assigned?", a: "Directly on the platform: each user sets the alert thresholds and recipients themselves." },
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
      { q: "Can the probes be purchased?", a: "Yes. The probes are sold with annual access to the GreenSensor platform. A first order often includes a few probes and a gateway to test, then sites move on to dozens of probes. Contact us for a quote tailored to your site." },
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
    title: "Ley AGEC y clasificación de biorresiduos",
    items: [
      {
        q: "¿Qué es la ley AGEC y por qué afecta al compostaje?",
        a: "La ley AGEC (Anti-desperdicio para una Economía Circular), promulgada el 10 de febrero de 2020, impone la clasificación en origen de biorresiduos para todos los actores a partir del 1 de enero de 2024, para valorizarlos mediante compostaje o metanización en lugar de incineración o vertedero. Los biorresiduos representan el 30 % del contenido de un cubo de basura doméstica y se generan más de 28,4 millones de toneladas al año en Francia (ADEME 2024).",
      },
      {
        q: "¿Desde cuándo es obligatoria la clasificación de biorresiduos en Francia?",
        a: "El calendario fue progresivo: desde 2016 para profesionales que producen más de 10 t/año; desde el 1 de enero de 2023 para más de 5 t/año; y desde el 1 de enero de 2024 para todos sin excepción de volumen. La obligación es la clasificación en origen, no necesariamente disponer de un compostador individual.",
      },
      {
        q: "¿Qué tipos de residuos están concernidos?",
        a: "Residuos alimentarios (cáscaras, restos de comida, productos caducados, posos de café, cáscaras de huevo), residuos verdes (césped, hojas, podas) y, para profesionales, residuos de cocina de restaurantes, cantinas, caterings, supermercados e industria agroalimentaria. Quedan excluidos residuos peligrosos y envases no biodegradables.",
      },
      {
        q: "¿Cuáles son las obligaciones específicas para las empresas?",
        a: "Desde el 1 de enero de 2024, todas las empresas deben implementar clasificación en origen, garantizar la valorización (compostaje o metanización) y poder justificar el destino mediante contrato con un prestador autorizado o plataforma de compostaje.",
      },
      {
        q: "¿Cuáles son las obligaciones para las colectividades?",
        a: "Deben ofrecer una solución de clasificación en origen: recogida separada hacia una plataforma industrial o gestión de proximidad (compostadores individuales, sitios compartidos). Al 1 de julio de 2024, el 40 % de la población francesa estaba cubierta. Las colectividades de más de 50 000 habitantes debían cumplir antes del 1 de enero de 2024; las demás hasta el 31 de diciembre de 2026.",
      },
      {
        q: "¿Por qué la ley AGEC acelera el desarrollo de plataformas de compostaje?",
        a: "La generalización del tri crea un aflujo masivo de biorresiduos. Los operadores amplían plataformas, crean nuevos sitios y diversifican procesos (co-compostaje, lombricompostaje, metanización). La filière representa una oportunidad de varios miles de millones de euros de aquí a 2030.",
      },
      {
        q: "¿Cuáles son los beneficios ambientales del tri de biorresiduos?",
        a: "Reduce emisiones de gases de efecto invernadero, enriquece suelos agrícolas mediante compost, reduce fertilizantes químicos y apoya la economía circular local. En Francia, el 62 % del compost producido se utiliza en agricultura.",
      },
      {
        q: "¿Cómo ayuda GreenSensor a cumplir la ley AGEC?",
        a: "Cumplir implica clasificar, pero también medir, trazar y justificar la gestión. GreenSensor ofrece medición en tiempo real, trazabilidad regulatoria con documentos justificativos automáticos, optimización de recogidas mediante alertas de llenado y reporting ESG. Cada kilo valorizado puede medirse, probarse e integrarse en su balance ambiental.",
      },
    ],
  },
  {
    title: "Funcionamiento e instalación de sondas",
    items: [
      { q: "¿Cuál es el alcance de transmisión de las sondas GreenSensor?", a: "Las sondas se comunican de forma inalámbrica hasta unos 2 km en zonas abiertas. El alcance real depende de obstáculos y de la configuración del sitio." },
      { q: "¿Cuántos sensores de temperatura incluye cada sonda?", a: "Cada sonda incluye uno o dos puntos de medición según la longitud del modelo, para controlar superficie y núcleo." },
      { q: "¿A qué profundidad debe medirse la temperatura en una pila?", a: "La temperatura debe medirse en el núcleo, al menos a 50 cm y, de forma ideal, entre 80 cm y 1 m." },
      { q: "¿La instalación requiere técnico?", a: "No. Basta con conectar el router a Internet y poner en marcha la sonda pulsando el botón de su caja." },
      { q: "¿Las sondas resisten condiciones exteriores?", a: "Sí. Están diseñadas para compostaje: humedad, UV, entorno corrosivo y altas temperaturas." },
      { q: "¿Se puede reemplazar una sonda durante una campaña activa?", a: "Sí. El histórico se conserva y la nueva sonda puede continuar la misma campaña." },
    ],
  },
  {
    title: "Infraestructura, conectividad y routers",
    items: [
      { q: "¿Sigue siendo necesario un router si las oficinas están cerca?", a: "Sí. El router debe colocarse cerca de la zona de compostaje para recoger correctamente los datos de radio." },
      { q: "¿Qué conexión a Internet necesita el router?", a: "Idealmente Ethernet. Para los sitios sin conexión a Internet existen soluciones 4G." },
      { q: "¿Qué ocurre ante una pérdida temporal de Internet?", a: "Los cortes temporales pueden afectar el tiempo real. Se recomienda una conexión estable en fases críticas." },
      { q: "¿Se pueden gestionar varios sitios con una sola cuenta?", a: "Sí. El modo multisitio permite centralizar varias plataformas de compostaje." },
    ],
  },
  {
    title: "Cumplimiento, higienización y seguridad",
    items: [
      { q: "¿Qué temperaturas se usan para validar la higienización?", a: "Referencias habituales: 55°C durante 2 semanas, 65°C durante 1 semana o 70°C durante 3 días. GreenSensor ayuda a documentar estos periodos." },
      { q: "¿GreenSensor ayuda a prevenir la combustión espontánea?", a: "Sí. Se pueden activar alertas SMS/email por umbral alto para actuar de forma preventiva." },
      { q: "¿Cómo se configuran y asignan las alertas?", a: "Directamente en la plataforma: cada usuario define por sí mismo los umbrales de alerta y los destinatarios." },
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
      { q: "¿Se pueden comprar las sondas?", a: "Sí. Las sondas se compran con el acceso anual a la plataforma GreenSensor. Un primer pedido suele incluir algunas sondas y una pasarela para probar, y luego los sitios pasan a decenas de sondas. Contáctenos para un presupuesto adaptado a su sitio." },
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
    title: "AGEC-Gesetz und Bioabfalltrennung",
    items: [
      {
        q: "Was ist das AGEC-Gesetz und warum betrifft es die Kompostierung?",
        a: "Das AGEC-Gesetz (Anti-Verschwendung für eine Kreislaufwirtschaft) vom 10. Februar 2020 schreibt ab dem 1. Januar 2024 die getrennte Erfassung von Bioabfällen für alle Akteure vor, damit sie durch Kompostierung oder Vergärung statt Verbrennung oder Deponierung verwertet werden. Bioabfälle machen 30 % des Hausmülls aus; in Frankreich entstehen jährlich über 28,4 Mio. Tonnen (ADEME 2024).",
      },
      {
        q: "Seit wann ist die Bioabfalltrennung in Frankreich Pflicht?",
        a: "Stufenweise: seit 2016 für Profis mit mehr als 10 t/Jahr; seit 1. Januar 2023 für mehr als 5 t/Jahr; seit 1. Januar 2024 für alle ohne Mengenausnahme. Pflicht ist die Trennung an der Quelle, nicht zwingend ein eigener Komposter.",
      },
      {
        q: "Welche Abfallarten sind betroffen?",
        a: "Lebensmittelabfälle, Grünschnitt und für Profis Küchenabfälle aus Gastronomie, Kantinen, Caterern, Supermärkten und Lebensmittelindustrie. Gefährliche Abfälle und nicht biologisch abbaubare Verpackungen sind ausgenommen.",
      },
      {
        q: "Welche Pflichten gelten für Unternehmen?",
        a: "Seit 1. Januar 2024 müssen alle Unternehmen getrennte Erfassung vor Ort einführen, Verwertung sicherstellen und die Entsorgung per Vertrag mit zugelassenem Dienstleister oder Kompostierplattform nachweisen können.",
      },
      {
        q: "Welche Pflichten gelten für Kommunen?",
        a: "Kommunen müssen eine Trennlösung anbieten: separate Sammlung zu Industrieanlagen oder lokale Lösungen (Einzelkomposter, gemeinsame Standorte). Im Juli 2024 waren 40 % der Bevölkerung versorgt. Kommunen über 50 000 Einwohner ab 1. Januar 2024; andere bis 31. Dezember 2026.",
      },
      {
        q: "Warum beschleunigt das AGEC-Gesetz den Ausbau von Kompostieranlagen?",
        a: "Die flächendeckende Trennung erzeugt einen massiven Bioabfallzufluss. Betreiber erweitern Anlagen, schaffen neue Standorte und diversifizieren Verfahren. Die Branche birgt Milliardenpotenzial bis 2030.",
      },
      {
        q: "Welche Umweltvorteile bringt die Bioabfalltrennung?",
        a: "Sie reduziert Treibhausgasemissionen, verbessert Böden durch Kompost, senkt den Bedarf an chemischen Düngemitteln und stärkt die lokale Kreislaufwirtschaft. In Frankreich werden 62 % des Komposts in der Landwirtschaft genutzt.",
      },
      {
        q: "Wie hilft GreenSensor bei der AGEC-Compliance?",
        a: "Compliance erfordert Trennung, Messung, Rückverfolgbarkeit und Nachweis. GreenSensor bietet Echtzeit-Monitoring, regulatorische Traceability mit automatischen Belegen, optimierte Abholungen durch Füllstandswarnungen und ESG-Reporting für den Nachweis der Umweltleistung.",
      },
    ],
  },
  {
    title: "Sondenbetrieb und Installation",
    items: [
      { q: "Wie groß ist die Übertragungsreichweite der GreenSensor-Sonden?", a: "Die Sonden kommunizieren drahtlos bis etwa 2 km in offenem Gelände. Die effektive Reichweite hängt von Hindernissen und der Standortstruktur ab." },
      { q: "Wie viele Temperatursensoren hat jede Sonde?", a: "Je nach Modelllänge enthält jede Sonde ein oder zwei Messpunkte, um Oberfläche und Kern zu überwachen." },
      { q: "In welcher Tiefe sollte die Temperatur im Mietenkörper gemessen werden?", a: "Die Messung sollte im Kern erfolgen, mindestens 50 cm tief, idealerweise zwischen 80 cm und 1 m." },
      { q: "Ist für die Installation ein Techniker erforderlich?", a: "Nein. Es genügt, den Router mit dem Internet zu verbinden und die Sonde durch Drücken der Taste am Gehäuse zu starten." },
      { q: "Sind die Sonden für Außenbedingungen geeignet?", a: "Ja. Sie sind für Kompostbedingungen ausgelegt: Feuchtigkeit, UV, korrosive Umgebung und hohe Temperaturen." },
      { q: "Kann eine Sonde während einer laufenden Kampagne ersetzt werden?", a: "Ja. Historische Daten bleiben erhalten und die Ersatzsonde kann die Kampagne fortführen." },
    ],
  },
  {
    title: "Infrastruktur, Konnektivität und Router",
    items: [
      { q: "Ist ein Router weiterhin nötig, wenn die Büros in der Nähe sind?", a: "Ja. Der Router sollte nahe an den Kompostbereichen positioniert werden, um die Funksignale zuverlässig zu erfassen." },
      { q: "Welche Internetverbindung benötigt der Router?", a: "Idealerweise Ethernet. Für Standorte ohne Internetanschluss gibt es 4G-Lösungen." },
      { q: "Was passiert bei einem vorübergehenden Internetausfall?", a: "Temporäre Ausfälle können die Echtzeitübertragung beeinträchtigen. Für kritische Phasen wird eine stabile Verbindung empfohlen." },
      { q: "Können mehrere Standorte mit einem Konto verwaltet werden?", a: "Ja. Der Multi-Site-Modus ermöglicht eine zentrale Überwachung mehrerer Plattformen." },
    ],
  },
  {
    title: "Compliance, Hygienisierung und Sicherheit",
    items: [
      { q: "Welche Temperaturen gelten für die Hygienisierungs-Compliance?", a: "Übliche Referenzen: 55°C für 2 Wochen, 65°C für 1 Woche oder 70°C für 3 Tage. GreenSensor hilft bei der Dokumentation." },
      { q: "Hilft GreenSensor, Selbstentzündung zu vermeiden?", a: "Ja. SMS/E-Mail-Warnungen können bei hohen Schwellen ausgelöst werden, um frühzeitig zu reagieren." },
      { q: "Wie werden Warnungen konfiguriert und zugewiesen?", a: "Direkt auf der Plattform: Jeder Nutzer legt die Alarmschwellen und die Empfänger selbst fest." },
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
      { q: "Kann man die Sonden kaufen?", a: "Ja. Die Sonden werden mit jährlichem Zugang zur GreenSensor-Plattform verkauft. Eine Erstbestellung umfasst oft einige Sonden und ein Gateway zum Testen, danach wechseln die Standorte zu Dutzenden von Sonden. Kontaktieren Sie uns für ein Angebot für Ihren Standort." },
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
    title: "Lei AGEC e triagem de biorresíduos",
    items: [
      {
        q: "O que é a lei AGEC e por que diz respeito ao compostagem?",
        a: "A lei AGEC (Anti-desperdício para uma Economia Circular), promulgada a 10 de fevereiro de 2020, impõe a triagem na origem dos biorresíduos para todos os atores a partir de 1 de janeiro de 2024, para valorização por compostagem ou metanização em vez de incineração ou aterro. Os biorresíduos representam 30 % do lixo doméstico e mais de 28,4 milhões de toneladas são geradas por ano em França (ADEME 2024).",
      },
      {
        q: "Desde quando a triagem de biorresíduos é obrigatória em França?",
        a: "Calendário progressivo: desde 2016 para profissionais com mais de 10 t/ano; desde 1 de janeiro de 2023 para mais de 5 t/ano; e desde 1 de janeiro de 2024 para todos sem exceção de volume. A obrigação é triagem na origem, não necessariamente um compostor individual.",
      },
      {
        q: "Que tipos de resíduos estão abrangidos?",
        a: "Resíduos alimentares, resíduos verdes e, para profissionais, resíduos de cozinha de restauração, cantinas, catering, grandes superfícies e indústria agroalimentar. Excluem-se resíduos perigosos e embalagens não biodegradáveis.",
      },
      {
        q: "Quais são as obrigações específicas para empresas?",
        a: "Desde 1 de janeiro de 2024, todas as empresas devem implementar triagem na origem, garantir valorização e poder justificar o destino via contrato com prestador autorizado ou plataforma de compostagem.",
      },
      {
        q: "Quais são as obrigações para coletividades?",
        a: "Devem propor uma solução de triagem: recolha separada para plataforma industrial ou gestão de proximidade. Em julho de 2024, 40 % da população francesa estava coberta. Coletividades acima de 50 000 habitantes até 1 de janeiro de 2024; outras até 31 de dezembro de 2026.",
      },
      {
        q: "Por que a lei AGEC acelera o desenvolvimento de plataformas de compostagem?",
        a: "A generalização da triagem cria um afluxo massivo de biorresíduos. Operadores ampliam plataformas, criam novos locais e diversificam processos. A filière representa uma oportunidade de vários mil milhões de euros até 2030.",
      },
      {
        q: "Quais são os benefícios ambientais da triagem de biorresíduos?",
        a: "Reduz emissões de GEE, enriquece solos agrícolas via compost, reduz fertilizantes químicos e apoia a economia circular local. Em França, 62 % do compost produzido é usado na agricultura.",
      },
      {
        q: "Como o GreenSensor ajuda a cumprir a lei AGEC?",
        a: "Cumprir implica triar, medir, rastrear e justificar a gestão. O GreenSensor oferece medição em tempo real, rastreabilidade regulatória com documentos automáticos, otimização de recolhas por alertas de enchimento e reporting ESG.",
      },
    ],
  },
  {
    title: "Operação e instalação das sondas",
    items: [
      { q: "Qual é o alcance de transmissão das sondas GreenSensor?", a: "As sondas comunicam sem fio até cerca de 2 km em áreas abertas. O alcance real depende de obstáculos e da configuração do local." },
      { q: "Quantos sensores de temperatura cada sonda inclui?", a: "Cada sonda inclui um ou dois pontos de medição, conforme o comprimento do modelo, para monitorizar superfície e núcleo." },
      { q: "A que profundidade deve ser medida a temperatura na leira?", a: "A medição deve ser feita no núcleo da leira, pelo menos a 50 cm e, idealmente, entre 80 cm e 1 m." },
      { q: "A instalação requer técnico?", a: "Não. Basta ligar o router à Internet e arrancar a sonda premindo o botão da caixa." },
      { q: "As sondas resistem a condições exteriores?", a: "Sim. Foram concebidas para condições de compostagem: humidade, UV, ambiente corrosivo e altas temperaturas." },
      { q: "É possível substituir uma sonda durante uma campanha ativa?", a: "Sim. O histórico mantém-se e a nova sonda pode continuar a mesma campanha." },
    ],
  },
  {
    title: "Infraestrutura, conectividade e routers",
    items: [
      { q: "O router continua a ser necessário se os escritórios estiverem perto?", a: "Sim. O router deve ficar próximo da área de compostagem para recolher os dados rádio das sondas com fiabilidade." },
      { q: "Que ligação à Internet o router precisa?", a: "Idealmente Ethernet. Para os locais sem ligação à Internet, existem soluções 4G." },
      { q: "O que acontece em caso de perda temporária de Internet?", a: "Falhas temporárias podem afetar a transmissão em tempo real. Recomenda-se uma ligação estável em fases críticas." },
      { q: "É possível gerir vários locais com uma só conta?", a: "Sim. O modo multi-site permite monitorização centralizada de várias plataformas." },
    ],
  },
  {
    title: "Conformidade, higienização e segurança",
    items: [
      { q: "Que temperaturas são usadas para conformidade de higienização?", a: "Referências típicas: 55°C por 2 semanas, 65°C por 1 semana ou 70°C por 3 dias. O GreenSensor ajuda a documentar estes períodos." },
      { q: "O GreenSensor ajuda a prevenir combustão espontânea?", a: "Sim. Alertas SMS/email podem ser acionados em limiares altos para ação preventiva." },
      { q: "Como configurar e atribuir alertas?", a: "Diretamente na plataforma: cada utilizador define os limiares de alerta e os destinatários." },
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
      { q: "É possível comprar as sondas?", a: "Sim. As sondas são vendidas com o acesso anual à plataforma GreenSensor. Uma primeira encomenda inclui muitas vezes algumas sondas e um gateway para testar, e depois os locais passam a dezenas de sondas. Contacte-nos para um orçamento adaptado ao seu local." },
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
    title: "Legea AGEC și sortarea biordeșeurilor",
    items: [
      {
        q: "Ce este legea AGEC și de ce privește compostarea?",
        a: "Legea AGEC (Anti-risipă pentru o Economie Circulară), promulgată la 10 februarie 2020, impune sortarea la sursă a biordeșeurilor pentru toți actorii de la 1 ianuarie 2024, pentru valorificare prin compostare sau metanizare, nu incinerare sau depozitare. Biordeșeurile reprezintă 30 % din gunoiul menajer și peste 28,4 milioane tone sunt generate anual în Franța (ADEME 2024).",
      },
      {
        q: "De când este obligatorie sortarea biordeșeurilor în Franța?",
        a: "Calendar progresiv: din 2016 pentru profesioniști cu peste 10 t/an; din 1 ianuarie 2023 pentru peste 5 t/an; din 1 ianuarie 2024 pentru toți, fără excepție de volum. Obligația este sortarea la sursă, nu neapărat un compostor individual.",
      },
      {
        q: "Ce tipuri de deșeuri sunt vizate?",
        a: "Deșeuri alimentare, deșeuri verzi și, pentru profesioniști, deșeuri de bucătărie din restaurante, cantine, catering, supermarketuri și industrie alimentară. Sunt excluse deșeurile periculoase și ambalajele non-biodegradabile.",
      },
      {
        q: "Care sunt obligațiile specifice pentru întreprinderi?",
        a: "Din 1 ianuarie 2024, toate întreprinderile trebuie să implementeze sortare la sursă, să asigure valorificarea și să poată justifica destinația prin contract cu un prestator autorizat sau platformă de compostare.",
      },
      {
        q: "Care sunt obligațiile pentru colectivități?",
        a: "Trebuie să ofere o soluție de sortare: colectare separată către o platformă industrială sau gestionare locală. La 1 iulie 2024, 40 % din populația franceză era acoperită. Colectivitățile peste 50 000 locuitori până la 1 ianuarie 2024; celelalte până la 31 decembrie 2026.",
      },
      {
        q: "De ce legea AGEC accelerează dezvoltarea platformelor de compostare?",
        a: "Generalizarea sortării creează un aflux masiv de biordeșeuri. Operatorii extind platforme, deschid site-uri noi și diversifică procedeele. Sectorul reprezintă o oportunitate de miliarde de euro până în 2030.",
      },
      {
        q: "Care sunt beneficiile de mediu ale sortării biordeșeurilor?",
        a: "Reduce emisiile de GES, îmbogățește solurile agricole prin compost, reduce îngrășămintele chimice și susține economia circulară locală. În Franța, 62 % din compostul produs este folosit în agricultură.",
      },
      {
        q: "Cum ajută GreenSensor la conformarea cu legea AGEC?",
        a: "Conformarea implică sortare, măsurare, trasabilitate și justificare. GreenSensor oferă monitorizare în timp real, trasabilitate regulamentară cu documente automate, optimizarea colectărilor prin alerte de umplere și raportare ESG.",
      },
    ],
  },
  {
    title: "Funcționarea și instalarea sondelor",
    items: [
      { q: "Care este raza de transmisie a sondelor GreenSensor?", a: "Sondele comunică wireless până la aproximativ 2 km în zone deschise. Raza efectivă depinde de obstacole și de configurația locației." },
      { q: "Câți senzori de temperatură include fiecare sondă?", a: "Fiecare sondă include unul sau două puncte de măsurare, în funcție de lungimea modelului, pentru suprafață și nucleu." },
      { q: "La ce adâncime se măsoară temperatura în grămadă?", a: "Temperatura trebuie măsurată în nucleu, cel puțin la 50 cm și ideal între 80 cm și 1 m." },
      { q: "Instalarea necesită tehnician?", a: "Nu. Este suficient să conectați routerul la internet și să porniți sonda apăsând butonul de pe carcasă." },
      { q: "Sondele rezistă la condiții exterioare?", a: "Da. Sunt proiectate pentru condiții de compostare: umiditate, UV, mediu coroziv și temperaturi ridicate." },
      { q: "Se poate înlocui o sondă în timpul unei campanii active?", a: "Da. Istoricul rămâne disponibil, iar sonda nouă poate continua aceeași campanie." },
    ],
  },
  {
    title: "Infrastructură, conectivitate și routere",
    items: [
      { q: "Mai este necesar un router dacă birourile sunt aproape?", a: "Da. Routerul trebuie poziționat aproape de zona de compostare pentru colectarea fiabilă a datelor radio." },
      { q: "Ce conexiune la internet necesită routerul?", a: "Ideal prin Ethernet. Pentru locațiile fără conexiune la internet există soluții 4G." },
      { q: "Ce se întâmplă la pierderea temporară a internetului?", a: "Întreruperile temporare pot afecta transmiterea în timp real. Se recomandă conexiune stabilă în fazele critice." },
      { q: "Se pot gestiona mai multe locații dintr-un singur cont?", a: "Da. Modul multi-site permite monitorizare centralizată pentru mai multe platforme." },
    ],
  },
  {
    title: "Conformitate, igienizare și siguranță",
    items: [
      { q: "Ce temperaturi sunt folosite pentru conformitatea igienizării?", a: "Referințe uzuale: 55°C timp de 2 săptămâni, 65°C timp de 1 săptămână sau 70°C timp de 3 zile. GreenSensor ajută la documentarea acestor perioade." },
      { q: "Ajută GreenSensor la prevenirea autoaprinderii?", a: "Da. Alertele SMS/email pot fi declanșate la praguri înalte pentru intervenție preventivă." },
      { q: "Cum se configurează și alocă alertele?", a: "Direct pe platformă: fiecare utilizator stabilește singur pragurile de alertă și destinatarii." },
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
      { q: "Se pot cumpăra sondele?", a: "Da. Sondele se cumpără cu accesul anual la platforma GreenSensor. O primă comandă include adesea câteva sonde și un gateway pentru testare, apoi amplasamentele trec la zeci de sonde. Contactați-ne pentru o ofertă adaptată locației dvs." },
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

const norm = (v: string) => v.normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase()

const UI: Record<FaqLang, { home: string; title: string; lead: string; count: string; search: string; none: string; ctaTitle: string; ctaText: string; categories: string; results: string }> = {
  fr: {
    home: "Accueil",
    title: "Questions fréquentes",
    lead: "Le produit, l'installation, la plateforme, la réglementation et la commande : tout ce qu'il faut savoir sur GreenSensor.",
    count: "questions",
    search: "Rechercher une question",
    none: "Aucune question ne correspond à votre recherche.",
    ctaTitle: "Une question sans réponse ?",
    ctaText: "Un conseiller Prosensor vous répond par téléphone ou par e-mail.",
    categories: "Thèmes",
    results: "résultats",
  },
  en: {
    home: "Home",
    title: "Frequently asked questions",
    lead: "The product, installation, the platform, regulation and ordering: everything you need to know about GreenSensor.",
    count: "questions",
    search: "Search a question",
    none: "No question matches your search.",
    ctaTitle: "Still have a question?",
    ctaText: "A Prosensor advisor will answer by phone or e-mail.",
    categories: "Topics",
    results: "results",
  },
  es: {
    home: "Inicio",
    title: "Preguntas frecuentes",
    lead: "El producto, la instalación, la plataforma, la normativa y el pedido: todo lo que necesita saber sobre GreenSensor.",
    count: "preguntas",
    search: "Buscar una pregunta",
    none: "Ninguna pregunta coincide con su búsqueda.",
    ctaTitle: "¿Tiene otra pregunta?",
    ctaText: "Un asesor de Prosensor le responde por teléfono o por correo.",
    categories: "Temas",
    results: "resultados",
  },
  de: {
    home: "Start",
    title: "Häufige Fragen",
    lead: "Produkt, Installation, Plattform, Vorschriften und Bestellung: alles, was Sie über GreenSensor wissen müssen.",
    count: "Fragen",
    search: "Frage suchen",
    none: "Keine Frage entspricht Ihrer Suche.",
    ctaTitle: "Noch eine Frage?",
    ctaText: "Ein Prosensor-Berater antwortet per Telefon oder E-Mail.",
    categories: "Themen",
    results: "Ergebnisse",
  },
  pt: {
    home: "Início",
    title: "Perguntas frequentes",
    lead: "O produto, a instalação, a plataforma, a regulamentação e a encomenda: tudo o que precisa de saber sobre o GreenSensor.",
    count: "perguntas",
    search: "Pesquisar uma pergunta",
    none: "Nenhuma pergunta corresponde à sua pesquisa.",
    ctaTitle: "Ainda tem uma pergunta?",
    ctaText: "Um consultor da Prosensor responde por telefone ou por e-mail.",
    categories: "Temas",
    results: "resultados",
  },
  ro: {
    home: "Acasă",
    title: "Întrebări frecvente",
    lead: "Produsul, instalarea, platforma, reglementările și comanda: tot ce trebuie să știți despre GreenSensor.",
    count: "întrebări",
    search: "Caută o întrebare",
    none: "Nicio întrebare nu corespunde căutării dvs.",
    ctaTitle: "Mai aveți o întrebare?",
    ctaText: "Un consultant Prosensor vă răspunde prin telefon sau e-mail.",
    categories: "Teme",
    results: "rezultate",
  },
}

const historic: Record<FaqLang, FaqSection[]> = { fr: frSections, en: enSections, es: esSections, de: deSections, pt: ptSections, ro: roSections }

/** Page FAQ : bandeau sombre avec recherche, thèmes à gauche, questions à droite, puis appel à l'action. */
export function FaqPageContent() {
  const { language, t } = useI18n()
  const lang = language as FaqLang
  const ui = UI[lang]
  const [query, setQuery] = useState("")
  const [active, setActive] = useState(0)

  const sections = useMemo(() => {
    const extra = faqExtra[lang]
    const drop = extra.drop.map(norm)
    const kept = historic[lang]
      .map((section) => ({ ...section, items: section.items.filter((item) => !drop.some((d) => norm(item.q).startsWith(d))) }))
      .filter((section) => section.items.length > 0)
    return [...extra.before, ...kept, ...extra.after]
  }, [lang])

  const total = sections.reduce((acc, section) => acc + section.items.length, 0)
  const q = norm(query.trim())
  const visible = useMemo(
    () =>
      sections
        .map((section) => ({ ...section, items: q ? section.items.filter((item) => norm(item.q + " " + item.a).includes(q)) : section.items }))
        .filter((section) => section.items.length > 0),
    [sections, q],
  )
  const found = visible.reduce((acc, section) => acc + section.items.length, 0)

  // Le thème affiché dans la liste de gauche suit le défilement.
  useEffect(() => {
    const els = visible.map((_, i) => document.getElementById(`faq-section-${i}`)).filter(Boolean) as HTMLElement[]
    if (!els.length) return
    const observer = new IntersectionObserver(
      (entries) => {
        const hit = entries.filter((e) => e.isIntersecting).sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)[0]
        if (hit) setActive(Number(hit.target.id.replace("faq-section-", "")))
      },
      { rootMargin: "-20% 0px -65% 0px" },
    )
    els.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [visible])

  return (
    <>
      <section aria-labelledby="faq-page-title" className="on-dark relative isolate overflow-hidden bg-forest-950 pb-14 pt-10 text-white md:pb-20 md:pt-14">
        <div aria-hidden className="grid-bg absolute inset-0 -z-10" />
        <div
          aria-hidden
          className="absolute -right-48 -top-24 -z-10 size-[620px] rounded-full opacity-60"
          style={{ background: "radial-gradient(closest-side, rgba(62,171,53,0.16), transparent)" }}
        />
        <Container className="flex flex-col gap-6">
          <nav aria-label="Breadcrumb" className="text-sm text-white/60">
            <Link href="/" className="transition-colors hover:text-white">
              {ui.home}
            </Link>
            <span className="mx-2">/</span>
            <span className="font-medium text-white/90">FAQ</span>
          </nav>
          <h1 id="faq-page-title" className="font-display text-[34px] font-extrabold leading-[1.1] tracking-[-0.02em] sm:text-[44px] lg:text-[52px]">
            {ui.title}
          </h1>
          <p className="max-w-2xl font-alt text-base leading-[1.6] text-white/75 md:text-lg">{ui.lead}</p>

          <div className="mt-2 flex max-w-xl flex-col gap-2">
            <label htmlFor="faq-search" className="sr-only">
              {ui.search}
            </label>
            <div className="relative">
              <Search aria-hidden className="pointer-events-none absolute left-4 top-1/2 size-5 -translate-y-1/2 text-white/50" />
              <input
                id="faq-search"
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder={ui.search}
                autoComplete="off"
                className="h-14 w-full rounded-btn border border-white/20 bg-white/10 pl-12 pr-4 text-base text-white placeholder:text-white/50 focus:border-moss-400 focus:outline-none"
              />
            </div>
            <p aria-live="polite" className="text-sm text-white/60">
              {q ? `${found} ${ui.results}` : `${total} ${ui.count}`}
            </p>
          </div>
        </Container>
      </section>

      <section className="bg-surface py-12 md:py-16">
        <Container className="grid grid-cols-[minmax(0,1fr)] gap-10 lg:grid-cols-[250px_minmax(0,1fr)] lg:gap-14">
          <nav aria-label={ui.categories} className="hidden lg:block">
            <div className="sticky top-28">
              <p className="mb-3 font-display text-sm font-bold text-slate">{ui.categories}</p>
              <ul className="flex flex-col">
                {visible.map((section, i) => (
                  <li key={section.title}>
                    <a
                      href={`#faq-section-${i}`}
                      aria-current={active === i ? "true" : undefined}
                      className={cn(
                        "flex items-baseline justify-between gap-3 rounded-md px-3 py-2 text-[15px] leading-snug transition-colors",
                        active === i ? "bg-moss-100 font-semibold text-forest" : "text-body hover:bg-surface-2 hover:text-ink-strong",
                      )}
                    >
                      <span>{section.title}</span>
                      <span className="text-xs tabular-nums text-mute">{section.items.length}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </nav>

          <div className="flex min-w-0 flex-col gap-8">
            {visible.length === 0 && <p className="rounded-panel border border-line bg-white p-8 text-center text-body">{ui.none}</p>}
            {visible.map((section, i) => (
              <section key={section.title} id={`faq-section-${i}`} aria-labelledby={`faq-heading-${i}`} className="scroll-mt-28">
                <h2 id={`faq-heading-${i}`} className="mb-4 font-display text-2xl font-extrabold leading-tight tracking-[-0.01em] text-ink-strong">
                  {section.title}
                </h2>
                <Accordion type="single" collapsible className="overflow-hidden rounded-panel border border-line bg-white">
                  {section.items.map((item, idx) => (
                    <AccordionItem key={`${section.title}-${idx}`} value={`${i}-${idx}`} className="border-b border-line px-5 last:border-b-0 sm:px-7">
                      <AccordionTrigger className="gap-4 py-5 text-left font-heading text-[17px] font-extrabold leading-snug text-ink-strong hover:no-underline">
                        {item.q}
                      </AccordionTrigger>
                      <AccordionContent className="pb-7 pt-0 text-base text-body">
                        <FaqAnswer text={item.a} />
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </section>
            ))}
          </div>
        </Container>
      </section>

      <section aria-labelledby="faq-cta-title" className="on-dark bg-forest py-14 text-white md:py-16">
        <Container className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-xl">
            <h2 id="faq-cta-title" className="font-display text-[28px] font-extrabold leading-[1.15] tracking-[-0.01em] md:text-[34px]">
              {ui.ctaTitle}
            </h2>
            <p className="mt-3 font-alt text-base leading-[1.6] text-white/80 md:text-lg">{ui.ctaText}</p>
            <ul className="mt-5 flex flex-col gap-3 text-[15px] sm:flex-row sm:gap-8">
              <li className="flex items-center gap-3">
                <Phone aria-hidden className="size-5 text-mint" />
                <a href={`tel:${t.demo.phone_value.replace(/\s/g, "")}`} className="hover:underline">
                  {t.demo.phone_value}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail aria-hidden className="size-5 text-mint" />
                <a href={`mailto:${t.demo.email_value}`} className="hover:underline">
                  {t.demo.email_value}
                </a>
              </li>
            </ul>
          </div>
          <Link href="/contact" className={cn(buttonVariants({ variant: "cta", size: "lg" }), "shrink-0 self-start")}>
            {t.hero.cta}
          </Link>
        </Container>
      </section>
    </>
  )
}

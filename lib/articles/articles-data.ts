import type { ArticleBody, ArticleDefinition } from "./types"

/**
 * Articles du site. Les chiffres cités sur GreenSensor viennent de la fiche technique : mesure au cœur et dans
 * l'air, toutes les heures, ±0,5 °C, 5 ans d'autonomie, sondes de 1 m, 1.5 m et 2 m, second point en option sur 2 m.
 * Les articles sont rédigés en français et en anglais ; les autres langues affichent la version anglaise.
 */

const measureFr: ArticleBody = {
  title: "Mesurer la température d’un andain de compost : où, quand et avec quoi",
  intro:
    "Une température n’a de valeur que si elle est mesurée au bon endroit, au bon rythme et de la même façon d’une fois sur l’autre. Voici les règles simples qui font d’un relevé une donnée fiable, que l’on peut comparer, mettre en alerte et présenter lors d’un audit.",
  takeaways: [
    "Mesurez au cœur de l’andain : au moins 50 cm de profondeur, idéalement entre 80 cm et 1 m.",
    "Une mesure toutes les heures donne une vraie courbe, là où une tournée en donne une par jour.",
    "Fixez vos objectifs par phase, puis laissez la plateforme suivre leur avancement.",
    "Gardez l’historique : c’est lui qui prouve que le lot a été correctement traité.",
  ],
  sections: [
    {
      heading: "Pourquoi mesurer au cœur du tas",
      paragraphs: [
        "La chaleur d’un andain vient de l’activité des micro-organismes, et elle est la plus élevée au centre. En surface, le tas refroidit au contact de l’air : une mesure à faible profondeur peut afficher nettement moins qu’au cœur et donner une fausse impression de tas froid.",
        "C’est pourquoi une sonde GreenSensor porte son capteur à la pointe du tube, pour lire la température du cœur. Un second capteur, dans le boîtier, mesure la température de l’air : il sert de référence pour comprendre l’écart entre le tas et son environnement.",
      ],
    },
    {
      heading: "À quelle profondeur planter la sonde",
      paragraphs: [
        "Visez au moins 50 cm, et idéalement entre 80 cm et 1 m, selon la hauteur de l’andain. Les sondes de 1 m, 1.5 m et 2 m répondent aux différents gabarits. Sur les modèles de 2 m, un second point de mesure peut être ajouté en option à 1 m, au milieu de la tige, pour suivre deux niveaux dans le même tas.",
        "Plantez toujours la sonde à la main, à l’aide des deux poignées, et gardez le même emplacement tant que la campagne dure : c’est ce qui rend les courbes comparables.",
      ],
    },
    {
      heading: "À quelle fréquence mesurer",
      paragraphs: [
        "Une tournée de relevés manuels donne un point par jour, parfois moins. Une montée en température rapide, un refroidissement après un retournement ou un emballement peuvent passer inaperçus entre deux passages.",
        "Une sonde GreenSensor mesure toutes les heures, de jour comme de nuit et le week-end, avec une précision de ±0,5 °C. La batterie, remplaçable, dure 5 ans à ce rythme, sans câble ni alimentation sur l’andain.",
      ],
    },
    {
      heading: "Fixer des objectifs et des alertes",
      paragraphs: [
        "Mesurer ne suffit pas : il faut savoir ce que l’on attend. Pour chaque phase, vous définissez des objectifs de température et de durée, par exemple 14 jours à 55 °C ou plus. La plateforme suit leur avancement et peut terminer la phase automatiquement quand ils sont atteints.",
        "Fixez aussi un seuil d’alerte haut, pour être prévenu par SMS ou par e-mail avant qu’un tas ne s’emballe. Plusieurs sites placent ce seuil autour de 85 °C ; à vous de le régler selon vos matières.",
      ],
    },
    {
      heading: "Les erreurs fréquentes",
      paragraphs: ["Quelques habitudes faussent vite les relevés."],
      bullets: [
        "Mesurer trop près de la surface, où le tas est plus froid.",
        "Changer de profondeur ou d’emplacement en cours de campagne.",
        "Comparer des relevés pris à des heures différentes.",
        "Ne regarder que la température du tas, sans celle de l’air.",
        "Ne pas conserver l’historique, alors qu’il sert de preuve.",
      ],
    },
    {
      heading: "Garder la preuve",
      paragraphs: [
        "Toutes les mesures sont conservées. Pour chaque phase, la plateforme édite un rapport daté avec les objectifs, le pourcentage atteint, les périodes exactes et la courbe complète, que vous pouvez exporter ou imprimer pour vos audits.",
      ],
    },
  ],
  conclusion:
    "Au cœur du tas, à la même profondeur, toutes les heures et avec des objectifs clairs : ces quatre règles suffisent à transformer des relevés épars en un suivi fiable. Le reste, ce sont les alertes et le rapport qui s’en chargent.",
}

const measureEn: ArticleBody = {
  title: "Measuring compost windrow temperature: where, when and with what",
  intro:
    "A temperature only has value if it is taken in the right place, at the right pace and in the same way every time. Here are the simple rules that turn a reading into reliable data you can compare, set alerts on and show during an audit.",
  takeaways: [
    "Measure in the core of the windrow: at least 50 cm deep, ideally between 80 cm and 1 m.",
    "One reading per hour gives a real curve, where a manual round gives one per day.",
    "Set your targets per phase, then let the platform track their progress.",
    "Keep the history: it is what proves the batch was treated correctly.",
  ],
  sections: [
    {
      heading: "Why measure in the core of the pile",
      paragraphs: [
        "A windrow’s heat comes from microbial activity, and it is highest at the centre. At the surface the pile cools in contact with the air: a shallow reading can show much less than the core and give a false impression of a cold pile.",
        "That is why a GreenSensor probe carries its sensor at the tip of the rod, to read core temperature. A second sensor in the housing measures air temperature, a reference to understand the gap between the pile and its surroundings.",
      ],
    },
    {
      heading: "How deep to push the probe",
      paragraphs: [
        "Aim for at least 50 cm, and ideally between 80 cm and 1 m, depending on the height of the windrow. The 1 m, 1.5 m and 2 m probes cover the different sizes. On the 2 m models, an optional 2nd measuring point can be added at 1 m, in the middle of the rod, to follow two levels in the same pile.",
        "Always push the probe in by hand, using the two handles, and keep the same spot for the whole campaign: that is what makes curves comparable.",
      ],
    },
    {
      heading: "How often to measure",
      paragraphs: [
        "A manual round gives one point a day, sometimes fewer. A fast temperature rise, a cooling after turning or a runaway can go unnoticed between two visits.",
        "A GreenSensor probe measures every hour, day and night and over weekends, with ±0.5 °C accuracy. The replaceable battery lasts 5 years at that rate, with no cable or power supply on the windrow.",
      ],
    },
    {
      heading: "Set targets and alerts",
      paragraphs: [
        "Measuring is not enough: you need to know what you expect. For each phase you define temperature and duration targets, for example 14 days at 55 °C or above. The platform tracks their progress and can end the phase automatically when they are reached.",
        "Also set a high alert threshold, to be warned by SMS or e-mail before a pile runs away. Several sites place it around 85 °C; adjust it to your materials.",
      ],
    },
    {
      heading: "Common mistakes",
      paragraphs: ["A few habits quickly skew readings."],
      bullets: [
        "Measuring too close to the surface, where the pile is cooler.",
        "Changing depth or position during a campaign.",
        "Comparing readings taken at different times of day.",
        "Looking only at pile temperature, without the air temperature.",
        "Not keeping the history, when it serves as proof.",
      ],
    },
    {
      heading: "Keep the proof",
      paragraphs: [
        "Every measurement is kept. For each phase the platform issues a dated report with the targets, the percentage reached, the exact periods and the full curve, which you can export or print for your audits.",
      ],
    },
  ],
  conclusion:
    "In the core of the pile, at the same depth, every hour and with clear targets: these four rules are enough to turn scattered readings into reliable monitoring. Alerts and the report take care of the rest.",
}

const circularFr: ArticleBody = {
  title: "Compost et économie circulaire : suivre la température des andains",
  intro:
    "Les biodéchets triés à la source sont compostés sur des plateformes, puis le compost est épandu sur les sols. Pendant le compostage, la température des andains indique si la matière se transforme correctement et si le lot est hygiénisé. Cet article explique comment la suivre et en garder la trace.",
  takeaways: [
    "Le compost est épandu sur les sols : les biodéchets triés y reviennent sous forme d’amendement.",
    "La température de l’andain indique où en est chaque phase, de la fermentation à la maturation.",
    "Une mesure par heure donne une courbe complète, là où un relevé manuel donne un point par jour.",
    "L’historique de température documente l’hygiénisation de chaque lot.",
  ],
  sections: [
    {
      heading: "Du tri des biodéchets au compost",
      paragraphs: [
        "Ces dernières années, le tri à la source des biodéchets s’est généralisé en France. Restes alimentaires et déchets verts sont collectés séparément, puis compostés plutôt qu’enfouis ou incinérés.",
        "Le compostage produit un amendement organique. Épandu sur les sols agricoles, les espaces verts ou les jardins, le compost apporte de la matière organique, améliore la réserve en eau du sol et réduit le besoin d’engrais de synthèse.",
        "Les plateformes de compostage reçoivent ces déchets et les transforment en compost.",
      ],
    },
    {
      heading: "Ce que la température indique",
      paragraphs: [
        "Dans un andain, les micro-organismes dégradent la matière et dégagent de la chaleur. La température à cœur reflète leur activité.",
        "Pendant la fermentation, la température monte et reste élevée : c’est ce qui détruit les pathogènes et les graines d’adventices (hygiénisation). Pendant la maturation, elle redescend et se stabilise.",
        "Un lot qui ne monte pas assez, ou pas assez longtemps, n’est pas hygiénisé. Un lot qui s’emballe indique un manque d’air ou d’eau.",
      ],
    },
    {
      heading: "Les limites du relevé manuel",
      paragraphs: [
        "Sur beaucoup de plateformes, la température se relève encore à la main. Un opérateur parcourt les andains, plante un thermomètre, note la valeur et la reporte ensuite dans un tableau.",
        "Cette méthode a trois limites :",
      ],
      bullets: [
        "une mesure par jour au mieux, donc rien la nuit ni le week-end ;",
        "un temps de tournée qui augmente avec le nombre d’andains ;",
        "une traçabilité qui dépend des feuilles de relevé et de la rigueur de chacun.",
      ],
    },
    {
      heading: "Suivre chaque andain en continu",
      paragraphs: [
        "Une sonde de température connectée est plantée dans l’andain et mesure la température à cœur. La sonde GreenSensor relève la température toutes les heures et transmet les mesures par radio (LoRa) vers une passerelle.",
        "Sur la plateforme web, chaque sonde est affectée à un andain et à une campagne de fermentation ou de maturation. Les courbes s’affichent en temps réel, et une alerte SMS ou e-mail est envoyée quand un seuil est dépassé.",
        "Les retournements et les arrosages peuvent ainsi se décider à partir des mesures plutôt que d’un calendrier fixe, et les équipes passent moins de temps à relever les températures.",
      ],
    },
    {
      heading: "Documenter l’hygiénisation lot par lot",
      paragraphs: [
        "Un agriculteur ou une collectivité qui épand du compost peut vouloir vérifier qu’il a été correctement traité.",
        "L’historique horaire de chaque campagne montre la montée en température, la durée de maintien et la phase de maturation, lot par lot. Les données s’exportent et les rapports s’impriment pour un audit, une certification ou un client.",
        "Les données sont archivées automatiquement : elles remplacent les feuilles de relevé.",
      ],
    },
    {
      heading: "La sonde GreenSensor",
      paragraphs: [
        "GreenSensor est conçue et fabriquée en France par Prosensor, spécialiste de la thermométrie depuis plus de 30 ans. Tige en inox 316L, boîtier IP68, 5 ans d’autonomie. La sonde est prête à l’emploi, sans infrastructure lourde à installer.",
      ],
    },
  ],
  conclusion:
    "La température indique l’état de chaque lot. La mesurer toutes les heures et conserver l’historique permet de suivre la fermentation et de documenter l’hygiénisation.",
}

const circularEn: ArticleBody = {
  title: "Compost and the circular economy: monitoring windrow temperature",
  intro:
    "Biowaste sorted at source is composted on platforms, then the compost is spread on soil. During composting, windrow temperature shows whether the material is transforming properly and whether the batch is sanitised. This article explains how to monitor it and keep a record.",
  takeaways: [
    "Compost is spread on soil: sorted biowaste goes back to it as a soil amendment.",
    "Windrow temperature shows where each phase stands, from fermentation to maturation.",
    "One reading per hour gives a complete curve, where a manual reading gives one point a day.",
    "The temperature history documents the sanitisation of each batch.",
  ],
  sections: [
    {
      heading: "From biowaste sorting to compost",
      paragraphs: [
        "In recent years, source separation of biowaste has become widespread across France. Food scraps and green waste are collected separately, then composted rather than landfilled or incinerated.",
        "Composting produces an organic soil amendment. Spread on farmland, green spaces or gardens, compost adds organic matter, improves the soil’s water reserve and reduces the need for synthetic fertiliser.",
        "Composting platforms receive this waste and turn it into compost.",
      ],
    },
    {
      heading: "What temperature shows",
      paragraphs: [
        "In a windrow, microorganisms break down the material and give off heat. The core temperature reflects their activity.",
        "During fermentation, the temperature rises and stays high: this is what destroys pathogens and weed seeds (sanitisation). During maturation, it falls and stabilises.",
        "A batch that does not rise enough, or not for long enough, is not sanitised. A batch that runs away indicates a lack of air or water.",
      ],
    },
    {
      heading: "The limits of manual readings",
      paragraphs: [
        "On many platforms, temperature is still taken by hand. An operator walks the windrows, pushes in a thermometer, notes the value and enters it later in a spreadsheet.",
        "This method has three limits:",
      ],
      bullets: [
        "one reading a day at best, so nothing at night or over the weekend;",
        "a round that takes longer as the number of windrows grows;",
        "traceability that depends on record sheets and on each person’s rigour.",
      ],
    },
    {
      heading: "Monitor every windrow continuously",
      paragraphs: [
        "A connected temperature probe is pushed into the windrow and measures the core temperature. The GreenSensor probe reads the temperature every hour and sends the measurements by radio (LoRa) to a gateway.",
        "On the web platform, each probe is assigned to a windrow and to a fermentation or maturation campaign. Curves are displayed in real time, and an SMS or e-mail alert is sent when a threshold is exceeded.",
        "Turning and watering can then be decided from the measurements rather than a fixed calendar, and teams spend less time taking readings.",
      ],
    },
    {
      heading: "Document sanitisation batch by batch",
      paragraphs: [
        "A farmer or a local authority spreading compost may want to check that it was properly treated.",
        "The hourly history of each campaign shows the temperature rise, the holding time and the maturation phase, batch by batch. Data can be exported and reports printed for an audit, a certification or a customer.",
        "Data is archived automatically: it replaces the record sheets.",
      ],
    },
    {
      heading: "The GreenSensor probe",
      paragraphs: [
        "GreenSensor is designed and made in France by Prosensor, a temperature measurement specialist for over 30 years. 316L stainless steel rod, IP68 housing, 5 years of battery life. The probe is ready to use, with no heavy infrastructure to install.",
      ],
    },
  ],
  conclusion:
    "Temperature shows the state of each batch. Measuring it every hour and keeping the history makes it possible to follow fermentation and document sanitisation.",
}

const softwareFr: ArticleBody = {
  title: "Logiciel de suivi de compostage : piloter vos andains en ligne",
  intro:
    "Sur une plateforme de compostage, suivre les andains veut dire relever les températures, les noter et décider des retournements. Avec un logiciel de suivi, des sondes relèvent les températures automatiquement et vous les consultez en ligne. Cet article décrit son fonctionnement, de la création d’une campagne à l’export des données.",
  takeaways: [
    "Le logiciel s’organise en campagnes de fermentation ou de maturation, qui regroupent les andains suivis.",
    "Chaque sonde est affectée à un andain : les courbes se lisent andain par andain.",
    "Un SMS ou un e-mail part dès qu’un seuil de température est dépassé.",
    "Les données sont stockées en ligne, exportables et imprimables en rapport.",
  ],
  sections: [
    {
      heading: "Du cahier à l’écran",
      paragraphs: [
        "Avec des relevés manuels, chaque mesure demande un déplacement sur l’andain, une lecture, puis une saisie. Les données arrivent tard, parfois incomplètes, et il faut encore les rassembler pour les analyser.",
        "Avec des sondes connectées, la mesure est automatique. Chaque sonde transmet par radio (LoRa) vers une passerelle, puis vers un serveur. Les mesures s’affichent sur une plateforme web, depuis un ordinateur ou un téléphone. Il n’y a plus de tournée à faire pour relever les températures.",
        "Rien à installer sur vos ordinateurs : la plateforme s’ouvre dans un navigateur. La passerelle reçoit les données des sondes et les envoie vers la plateforme.",
      ],
    },
    {
      heading: "Une campagne par phase",
      paragraphs: [
        "Le logiciel s’organise en campagnes. Vous créez une campagne de fermentation ou de maturation, vous y rattachez les andains concernés et vous fixez vos objectifs de température pour cette phase.",
        "Ce découpage suit le cycle d’un andain : montage, montée en température, retournements, puis maturation. Une campagne regroupe les andains suivis, les sondes qui les mesurent et la période couverte. À la fin, toutes les mesures de ces andains sont au même endroit.",
        "Au passage en maturation, vous ouvrez une nouvelle campagne, avec ses propres objectifs.",
      ],
    },
    {
      heading: "Chaque sonde à son andain",
      paragraphs: [
        "Une fois la campagne créée, vous affectez les sondes aux andains concernés. Un andain peut recevoir une ou plusieurs sondes, et chaque courbe se lit ensuite andain par andain.",
        "Les sondes fonctionnent sur batterie, sans câble ni alimentation sur l’andain. Pour suivre un autre andain, vous déplacez la sonde, puis vous modifiez son affectation sur la plateforme.",
        "La batterie tient cinq ans à raison d’une mesure par heure, et elle se remplace.",
      ],
    },
    {
      heading: "Le tableau de bord",
      paragraphs: [
        "Le tableau de bord affiche les dernières mesures et l’historique de chaque andain. Deux températures sont relevées : au cœur du tas et dans l’air, au niveau du boîtier. Comparer les deux aide à distinguer une baisse liée au procédé d’un simple coup de froid.",
        "Avec une mesure par heure, la courbe montre la montée en température, le plateau, puis la redescente. Elle aide à choisir le moment d’un retournement ou d’un arrosage.",
        "Ce rythme donne vingt-quatre points par jour et par sonde, assez pour voir l’effet d’un retournement dans les heures qui suivent. En comparant deux andains de même composition, on repère aussi celui qui chauffe moins.",
      ],
    },
    {
      heading: "Les alertes",
      paragraphs: [
        "Personne ne regarde l’écran en permanence. Vous définissez des seuils de température : dès qu’un seuil est dépassé, un SMS ou un e-mail part vers les personnes choisies.",
        "Les seuils se règlent selon vos matières et votre procédé. Gardez-en peu : quand les alertes sont trop fréquentes, on finit par ne plus les lire.",
        "Exemple : un vendredi soir, un andain trop sec dépasse son seuil de température. Un échauffement excessif peut aller jusqu’au départ de feu. Sans alerte, l’écart se découvre le lundi. Avec une alerte, l’équipe est prévenue le soir même et peut arroser ou retourner l’andain.",
      ],
    },
    {
      heading: "Exporter et archiver",
      paragraphs: [
        "Le stockage des données est inclus. Toutes les mesures restent disponibles en ligne, sans serveur à gérer sur site. Vous pouvez les exporter pour vos propres analyses et imprimer des rapports par campagne.",
        "Les exports permettent aussi de comparer des campagnes, par exemple par saison ou par type de matière.",
        "Les rapports par campagne peuvent être transmis à vos clients ou présentés lors d’un contrôle.",
      ],
    },
  ],
  conclusion:
    "GreenSensor associe des sondes sans fil à une plateforme web qui comprend les campagnes, les alertes, le stockage des données et les rapports.",
}

const softwareEn: ArticleBody = {
  title: "Composting monitoring software: managing your windrows online",
  intro:
    "On a composting site, monitoring windrows means taking temperatures, writing them down and deciding when to turn. With monitoring software, probes take the temperatures automatically and you check them online. This article describes how it works, from creating a campaign to exporting the data.",
  takeaways: [
    "The software is organised into fermentation or maturation campaigns, which group the monitored windrows.",
    "Each probe is assigned to a windrow: curves are read windrow by windrow.",
    "An SMS or e-mail is sent as soon as a temperature threshold is exceeded.",
    "Data is stored online, can be exported and printed as reports.",
  ],
  sections: [
    {
      heading: "From logbook to screen",
      paragraphs: [
        "With manual readings, each measurement means walking to the windrow, reading a value, then entering it. Data arrives late, sometimes incomplete, and still has to be gathered before it can be analysed.",
        "With connected probes, measurement is automatic. Each probe transmits by radio (LoRa) to a gateway, then to a server. Measurements are displayed on a web platform, from a computer or a phone. There are no more rounds to take temperatures.",
        "Nothing to install on your computers: the platform opens in a browser. The gateway receives the data from the probes and sends it to the platform.",
      ],
    },
    {
      heading: "One campaign per phase",
      paragraphs: [
        "The software is organised into campaigns. You create a fermentation or maturation campaign, attach the windrows concerned and set your temperature targets for that phase.",
        "This split follows the life of a windrow: building, temperature rise, turning, then maturation. A campaign groups the monitored windrows, the probes that measure them and the period covered. At the end, all the measurements for these windrows are in one place.",
        "When the material moves to maturation, you open a new campaign, with its own targets.",
      ],
    },
    {
      heading: "Each probe to its windrow",
      paragraphs: [
        "Once the campaign is created, you assign the probes to the windrows concerned. A windrow can receive one or more probes, and each curve is then read windrow by windrow.",
        "The probes run on battery, with no cable or power supply on the windrow. To monitor another windrow, you move the probe, then change its assignment on the platform.",
        "The battery lasts five years at one measurement per hour, and it can be replaced.",
      ],
    },
    {
      heading: "The dashboard",
      paragraphs: [
        "The dashboard shows the latest measurements and the history of each windrow. Two temperatures are recorded: at the core of the pile and in the air, at the housing. Comparing the two helps tell a process-related drop from a simple cold snap.",
        "With one measurement per hour, the curve shows the temperature rise, the plateau, then the decline. It helps choose when to turn or water.",
        "This rate gives twenty-four points per day per probe, enough to see the effect of a turn within the following hours. Comparing two windrows of the same composition also shows which one is heating less.",
      ],
    },
    {
      heading: "Alerts",
      paragraphs: [
        "Nobody watches the screen all the time. You set temperature thresholds: as soon as one is exceeded, an SMS or e-mail goes to the people you choose.",
        "Thresholds depend on your materials and your process. Keep them few: when alerts come too often, people stop reading them.",
        "Example: on a Friday evening, a windrow that is too dry goes over its temperature threshold. Excessive heating can lead to a fire. Without an alert, the problem is found on Monday. With an alert, the team is told that evening and can water or turn the windrow.",
      ],
    },
    {
      heading: "Export and archive",
      paragraphs: [
        "Data storage is included. All measurements remain available online, with no server to manage on site. You can export them for your own analyses and print reports per campaign.",
        "Exports also let you compare campaigns, for example by season or by type of material.",
        "Campaign reports can be sent to your customers or shown during an inspection.",
      ],
    },
  ],
  conclusion:
    "GreenSensor combines wireless probes with a web platform that includes campaigns, alerts, data storage and reports.",
}

/*
 * Sources de l'article incendie : BARPI, « Incendies dans les activités de compostage des déchets », mai 2018
 * (124 accidents, 115 incendies) ; BARPI, inventaire des accidents 2022 (nov. 2023, compostage : 14 événements en
 * 2021, 28 en 2022) ; ministère, bilan de l'action 2025 de l'inspection des installations classées (juil. 2026) ;
 * fiche ARIA 57466 (Torcy, 2021) ; BioCycle, C. Coker, « Spontaneous combustion in
 * composting: the causes », 2021 (seuil d'environ 80 °C pour l'oxydation chimique).
 */
const fireFr: ArticleBody = {
  title: "Incendie sur une plateforme de compostage : comprendre le risque et le détecter à temps",
  intro:
    "L’incendie est le principal risque des plateformes de compostage. Dans sa dernière synthèse consacrée au compostage, publiée en mai 2018, le BARPI (ministère de la Transition écologique) a analysé 124 accidents survenus en France : 115 étaient des incendies. Les chiffres plus récents vont dans le même sens. Le plus souvent, le feu ne vient pas de l’extérieur mais du cœur du tas, par auto-échauffement. Cet article explique comment ce feu se forme, dans quelles situations le risque augmente, et ce qu’un suivi continu de la température permet d’anticiper.",
  takeaways: [
    "93 % des accidents de compostage analysés par le BARPI sont des incendies, et les événements sur les plateformes ont doublé entre 2021 et 2022.",
    "La cause la plus fréquente est la dérive de l’auto-échauffement : le feu démarre au cœur du tas, souvent sans flamme visible.",
    "Les matières sèches, les tas trop hauts, les stockages longs et les heures sans personnel augmentent le risque.",
    "Une mesure à cœur toutes les heures, avec une alerte par SMS ou e-mail, laisse le temps d’ouvrir, d’arroser ou de retourner le tas.",
  ],
  sections: [
    {
      heading: "Le premier risque d’une plateforme",
      paragraphs: [
        "La synthèse du BARPI porte sur les accidents impliquant une activité de compostage recensés dans la base ARIA jusqu’à fin 2017 : 124 accidents, dont la moitié entre 2013 et 2017. 115 d’entre eux sont des incendies, soit 93 %.",
        "Pour les 60 incendies dont l’origine est connue ou supposée, la cause la plus fréquente vient du procédé lui-même : près de la moitié (48 %) sont dus à une dérive de l’auto-échauffement. Suivent la malveillance (37 %) et les agressions externes comme la forte chaleur, le vent violent ou la foudre (35 %). Les défauts matériels sur les broyeurs, cribles ou convoyeurs (12 %) et les erreurs humaines (8 %) sont plus rares. Un même incendie peut avoir plusieurs causes, d’où un total supérieur à 100 %.",
        "Aucun décès ni blessé grave n’est recensé, mais les conséquences restent lourdes. Les fumées imposent parfois le confinement ou l’évacuation des riverains, et les eaux d’extinction doivent être traitées. Quand plus de 10 000 m³ de déchets sont touchés, l’intervention dure souvent plusieurs jours. Dans les cas les plus coûteux, les pertes atteignent 0,4 à 1 million d’euros.",
        "Le risque n’a pas diminué depuis. Dans son inventaire des accidents de 2022, le BARPI note que le nombre d’événements sur les installations de compostage a doublé en un an, de 14 en 2021 à 28 en 2022, tous liés à des incendies. En 2025, le traitement des déchets est le secteur qui compte le plus d’accidents et d’incidents parmi les installations classées (16 % des événements), et le ministère de la Transition écologique a fait des incendies dans les installations de gestion des déchets une priorité nationale.",
      ],
    },
    {
      heading: "Comment un tas prend feu de l’intérieur",
      paragraphs: [
        "La chaleur fait partie du compostage : les micro-organismes qui dégradent la matière en dégagent. Elle est même recherchée, puisque les installations soumises à autorisation doivent atteindre au moins 55 °C pendant 72 heures au total (arrêté du 22 avril 2008). Selon le BARPI, une température de 50 à 70 °C est idéale pendant la phase thermophile.",
        "Le problème commence quand le tas produit plus de chaleur qu’il n’en évacue. La température continue alors de monter. Vers 80 °C, des réactions chimiques d’oxydation prennent le relais de l’activité biologique, et elles s’accélèrent avec la température. Le tas peut atteindre 150 à 200 °C sans aucune source extérieure : c’est l’auto-combustion.",
        "Le feu reste d’abord couvant, sans flamme, au cœur du tas. Il est difficile à voir, et l’eau pénètre mal dans la masse. Quand le tas est ouvert ou que le vent l’aère, l’apport d’oxygène peut faire apparaître des flammes.",
      ],
    },
    {
      heading: "Les situations qui augmentent le risque",
      paragraphs: [
        "Le BARPI cite plusieurs facteurs : la composition des matières, leur humidité, la taille du tas, la température ambiante, la circulation de l’air et la durée de stockage. L’humidité joue un rôle central. Une matière entre 20 et 45 % d’humidité favorise l’auto-échauffement, alors que le compostage se déroule au mieux entre 40 et 55 %. Le compost mûr et les refus de criblage, plus secs, sont donc les plus exposés. Une humidité mal répartie pose aussi problème : une pluie sur un andain sec peut relancer l’échauffement.",
        "La taille du tas et la durée de stockage comptent ensuite. Plus un tas est haut, plus il garde sa chaleur. Les arrêtés de la rubrique ICPE 2780 limitent ainsi les tas de matières fermentescibles à 3 m de haut (5 m sur dérogation) en fermentation et en maturation. Lors d’un incendie (ARIA 47656), le compost était stocké sur 8 m au lieu des 2,5 m autorisés. Un stockage de plusieurs semaines ou plusieurs mois sans manipulation augmente le risque de la même façon.",
        "La météo aggrave ces situations : la canicule et la sécheresse assèchent les tas, le vent violent les oxygène. Les régions du sud de la France sont d’ailleurs surreprésentées dans les accidents. En 2022, année la plus chaude en France depuis 1900, la hausse des événements en compostage est en grande partie liée aux fortes chaleurs : 10 événements dus à des agressions naturelles, contre 1 en 2021.",
        "Enfin, le défaut de suivi revient souvent. À Torcy, en 2021 (ARIA 57466), un andain de déchets verts a pris feu : il n’avait pas été retourné à l’échéance prévue, et aucune mesure de température n’y était faite. Comme les plateformes sont rarement occupées en permanence, beaucoup d’incendies se déclarent la nuit ou le week-end et sont découverts par un riverain ou un tiers.",
      ],
    },
    {
      heading: "Ce que recommande le retour d’expérience",
      paragraphs: [
        "Le BARPI conclut que le seul respect des prescriptions réglementaires aurait permis d’éviter une large partie de ces incendies, en particulier ceux dus à une perte de contrôle du procédé. Les contrôles récents montrent que les bases manquent encore souvent : en 2025, la DREAL Occitanie a mené 70 inspections inopinées dans des installations de gestion des déchets et relevé 294 non-conformités, dont des extincteurs ou des détecteurs absents ou mal entretenus, et des plans de défense contre l’incendie inexistants ou insuffisants dans une quarantaine de sites.",
        "Ses recommandations portent d’abord sur la conduite des tas : respecter les hauteurs et volumes autorisés, séparer les stocks en lots espacés, réduire la durée de stockage sans manipulation, retourner plus souvent les andains et réhomogénéiser l’humidité après de fortes pluies.",
        "Elles portent ensuite sur la surveillance. Le BARPI conseille de mesurer la température plus souvent que le minimum réglementaire, et plus encore pendant les fortes chaleurs ou après de fortes précipitations. Il recommande aussi de former les opérateurs à repérer les feux couvants : fumerolles blanches, odeur de combustion, sondes de température enfoncées profondément dans les tas. Au-delà de 80 °C ou en présence de fumerolles, il faut ouvrir le tas, l’arroser et le surveiller pendant plusieurs jours.",
      ],
    },
    {
      heading: "Ce qu’apporte un suivi continu de la température",
      paragraphs: [
        "Selon le BARPI, l’auto-combustion est un phénomène plus lent qu’un feu de surface et laisse plus de temps pour agir, à condition de la voir venir. Après un incendie de compost, un exploitant a par exemple installé un suivi continu de la température dans ses tas en maturation, avec deux sondes par alvéole et un report d’alarme (ARIA 41238).",
        "La sonde GreenSensor mesure toutes les heures la température au cœur du tas et celle de l’air. Sur la courbe, un tas qui dépasse son plateau habituel et continue de monter se repère avant d’atteindre un niveau critique. La température de l’air aide à distinguer un échauffement interne d’un effet de la météo.",
        "Vous fixez un seuil d’alerte, par exemple entre 80 et 85 °C : au-dessus de la plage normale de 50 à 70 °C, au niveau où le BARPI recommande d’ouvrir et d’arroser le tas. Dès qu’il est dépassé, un SMS ou un e-mail part vers les personnes choisies, y compris la nuit et le week-end, quand personne n’est sur le site.",
        "Placez les sondes là où le risque est le plus élevé : stocks de compost mûr, refus de criblage, andains les plus gros. Sur un gros andain, prévoyez plusieurs sondes. Pendant une canicule ou un épisode de vent fort, les courbes permettent de suivre les tas sensibles sans multiplier les tournées. En cas de contrôle, l’historique montre que la température a été suivie.",
      ],
    },
  ],
  conclusion:
    "La cause la plus fréquente des incendies de compost est un échauffement qui monte au cœur du tas. Mesurer cette température en continu et être prévenu au-delà d’un seuil donne le temps d’ouvrir, d’arroser ou de retourner le tas avant qu’il ne prenne feu.",
}

const fireEn: ArticleBody = {
  title: "Fire on a composting site: understanding the risk and detecting it in time",
  intro:
    "Fire is the main risk on composting sites. In its latest review dedicated to composting, published in May 2018, the BARPI (the French Ministry of Ecological Transition’s accident analysis office) analysed 124 accidents in France: 115 were fires. More recent figures point the same way. Most often, the fire does not come from outside but from the core of the pile, through self-heating. This article explains how such a fire develops, which situations increase the risk, and what continuous temperature monitoring makes it possible to anticipate.",
  takeaways: [
    "93% of the composting accidents analysed by the BARPI are fires, and events on composting sites doubled between 2021 and 2022.",
    "The most frequent cause is runaway self-heating: the fire starts at the core of the pile, often with no visible flame.",
    "Dry materials, piles that are too high, long storage and unstaffed hours all increase the risk.",
    "A core reading every hour, with an SMS or e-mail alert, leaves time to open, water or turn the pile.",
  ],
  sections: [
    {
      heading: "The main risk on a composting site",
      paragraphs: [
        "The BARPI review covers accidents involving a composting activity recorded in the ARIA database up to the end of 2017: 124 accidents, half of them between 2013 and 2017. 115 of them are fires, or 93%.",
        "For the 60 fires whose origin is known or suspected, the most frequent cause lies in the process itself: almost half (48%) result from runaway self-heating. Next come malicious acts (37%) and external hazards such as extreme heat, strong wind or lightning (35%). Equipment failures on shredders, screens or conveyors (12%) and human error (8%) are less common. A single fire can have several causes, which is why the total exceeds 100%.",
        "No deaths or serious injuries were recorded, but the consequences are still heavy. Smoke sometimes forces residents to shelter or evacuate, and firefighting water has to be treated. When more than 10,000 m³ of waste is involved, the intervention often lasts several days. In the costliest cases, losses reach €0.4 to €1 million.",
        "The risk has not decreased since. In its inventory of 2022 accidents, the BARPI notes that the number of events at composting sites doubled in one year, from 14 in 2021 to 28 in 2022, all of them fires. In 2025, waste treatment was the sector with the most accidents and incidents among classified installations (16% of events), and the French Ministry of Ecological Transition made fires in waste management sites a national priority.",
      ],
    },
    {
      heading: "How a pile catches fire from the inside",
      paragraphs: [
        "Heat is part of composting: the microorganisms that break down the material give it off. It is even required, since permitted sites in France must reach at least 55 °C for a total of 72 hours (order of 22 April 2008). According to the BARPI, 50 to 70 °C is ideal during the thermophilic phase.",
        "The problem starts when the pile produces more heat than it releases. The temperature then keeps rising. At around 80 °C, chemical oxidation takes over from biological activity, and it speeds up as the temperature rises. The pile can reach 150 to 200 °C with no external source: this is spontaneous combustion.",
        "The fire first smoulders, without flames, at the core of the pile. It is hard to see, and water penetrates the mass poorly. When the pile is opened or the wind aerates it, the sudden supply of oxygen can bring out flames.",
      ],
    },
    {
      heading: "Situations that increase the risk",
      paragraphs: [
        "The BARPI lists several factors: the composition of the materials, their moisture, the size of the pile, the ambient temperature, air circulation and storage time. Moisture plays a central role. Material at 20 to 45% moisture favours self-heating, whereas composting works best between 40 and 55%. Mature compost and screening rejects, which are drier, are therefore the most exposed. Unevenly distributed moisture is also a problem: rain on a dry windrow can restart the heating.",
        "Pile size and storage time come next. The higher a pile, the more heat it holds. French regulations for composting sites therefore limit piles of fermentable material to 3 m high (5 m by exemption) during fermentation and maturation. In one fire (ARIA 47656), compost was stacked 8 m high instead of the authorised 2.5 m. Storage for weeks or months without handling increases the risk in the same way.",
        "Weather makes these situations worse: heatwaves and drought dry out the piles, strong wind oxygenates them. Regions in the south of France are over-represented in the accidents. In 2022, the hottest year in France since 1900, the rise in composting events was largely linked to the heat: 10 events caused by natural hazards, against 1 in 2021.",
        "Finally, lack of monitoring comes up again and again. In Torcy in 2021 (ARIA 57466), a green waste windrow caught fire: it had not been turned when scheduled, and its temperature was not being measured. Since sites are rarely staffed around the clock, many fires break out at night or at weekends and are discovered by a neighbour or a third party.",
      ],
    },
    {
      heading: "What lessons learned recommend",
      paragraphs: [
        "The BARPI concludes that simply complying with regulations would have prevented a large share of these fires, especially those caused by loss of process control. Recent inspections show that the basics are still often missing: in 2025, the Occitanie regional environment authority carried out 70 unannounced inspections of waste management sites and found 294 non-compliances, including missing or poorly maintained extinguishers and detectors, and fire defence plans that were missing or inadequate at around forty sites.",
        "Its recommendations first concern how piles are managed: complying with authorised heights and volumes, splitting stocks into spaced batches, reducing storage time without handling, turning windrows more often and evening out moisture after heavy rain.",
        "They then concern monitoring. The BARPI advises measuring temperature more often than the regulatory minimum, and even more during hot spells or after heavy rain. It also recommends training operators to spot smouldering fires: white fumes, smell of burning, temperature probes pushed deep into the piles. Above 80 °C or when fumes appear, the pile should be opened, watered and monitored for several days.",
      ],
    },
    {
      heading: "What continuous temperature monitoring brings",
      paragraphs: [
        "According to the BARPI, spontaneous combustion develops more slowly than a surface fire and leaves more time to act, provided it is seen coming. After a compost fire, one operator installed continuous temperature monitoring in its maturation piles, with two probes per bay and an alarm relay (ARIA 41238).",
        "The GreenSensor probe measures the core temperature of the pile and the air temperature every hour. On the curve, a pile that goes past its usual plateau and keeps rising can be spotted before it reaches a critical level. The air temperature helps tell internal heating from a weather effect.",
        "You set an alert threshold, for example between 80 and 85 °C: above the normal range of 50 to 70 °C, at the level where the BARPI recommends opening and watering the pile. As soon as it is exceeded, an SMS or e-mail goes to the people you choose, including at night and at weekends, when nobody is on site.",
        "Place the probes where the risk is highest: mature compost stocks, screening rejects, the largest windrows. On a large windrow, plan several probes. During a heatwave or a spell of strong wind, the curves let you follow the sensitive piles without adding rounds. During an inspection, the history shows that temperature was monitored.",
      ],
    },
  ],
  conclusion:
    "The most frequent cause of compost fires is heat building up at the core of the pile. Measuring that temperature continuously and being alerted above a threshold leaves time to open, water or turn the pile before it catches fire.",
}

export const ARTICLES: ArticleDefinition[] = [
  {
    slug: "incendie-plateforme-compostage",
    publishedAt: "2026-11-04",
    cover: { src: "/article-incendie-compostage.jpg", position: "50% 45%" },
    readingMinutes: { fr: 7, en: 7, es: 7, de: 7, pt: 7, ro: 7 },
    relatedSlugs: ["logiciel-suivi-compostage", "mesurer-temperature-andain-compost"],
    seo: {
      fr: {
        title: "Incendie sur une plateforme de compostage | GreenSensor",
        description:
          "93 % des accidents de compostage analysés en France sont des incendies. Causes, situations à risque, recommandations du BARPI et rôle du suivi de température en continu.",
      },
      en: {
        title: "Fire on a composting site | GreenSensor",
        description:
          "93% of composting accidents analysed in France are fires. Causes, risk situations, BARPI recommendations and the role of continuous temperature monitoring.",
      },
      es: {
        title: "Incendio en una planta de compostaje | GreenSensor",
        description:
          "El 93 % de los accidentes de compostaje analizados en Francia son incendios. Causas, situaciones de riesgo, recomendaciones del BARPI y papel del seguimiento continuo de la temperatura.",
      },
      de: {
        title: "Brand auf einer Kompostierungsanlage | GreenSensor",
        description:
          "93 % der in Frankreich analysierten Kompostierungsunfälle sind Brände. Ursachen, Risikosituationen, Empfehlungen des BARPI und die Rolle der kontinuierlichen Temperaturüberwachung.",
      },
      pt: {
        title: "Incêndio numa central de compostagem | GreenSensor",
        description:
          "93 % dos acidentes de compostagem analisados em França são incêndios. Causas, situações de risco, recomendações do BARPI e papel do acompanhamento contínuo da temperatura.",
      },
      ro: {
        title: "Incendiu pe o platformă de compostare | GreenSensor",
        description:
          "93 % dintre accidentele de compostare analizate în Franța sunt incendii. Cauze, situații de risc, recomandările BARPI și rolul monitorizării continue a temperaturii.",
      },
    },
    body: { fr: fireFr, en: fireEn, es: fireEn, de: fireEn, pt: fireEn, ro: fireEn },
  },
  {
    slug: "logiciel-suivi-compostage",
    publishedAt: "2026-11-04",
    cover: { src: "/article-logiciel-suivi-compostage.png", position: "50% 40%" },
    readingMinutes: { fr: 5, en: 5, es: 5, de: 5, pt: 5, ro: 5 },
    relatedSlugs: ["incendie-plateforme-compostage", "mesurer-temperature-andain-compost"],
    seo: {
      fr: {
        title: "Logiciel de suivi de compostage : piloter vos andains en ligne",
        description:
          "Campagnes, sondes affectées aux andains, alertes SMS et e-mail : comment un logiciel de suivi organise le travail d’une plateforme de compostage.",
      },
      en: {
        title: "Composting monitoring software: managing your windrows online",
        description:
          "Campaigns, probes assigned to windrows, SMS and e-mail alerts: how monitoring software organises the work of a composting site.",
      },
      es: {
        title: "Software de seguimiento del compostaje: gestionar sus hileras en línea",
        description:
          "Campañas, sondas asignadas a las hileras, alertas por SMS y correo electrónico: cómo un software de seguimiento organiza el trabajo de una planta de compostaje.",
      },
      de: {
        title: "Software zur Kompostüberwachung: Mieten online steuern",
        description:
          "Kampagnen, den Mieten zugeordnete Sonden, Warnungen per SMS und E-Mail: wie eine Überwachungssoftware die Arbeit einer Kompostierungsanlage organisiert.",
      },
      pt: {
        title: "Software de acompanhamento da compostagem: gerir as suas leiras online",
        description:
          "Campanhas, sondas atribuídas às leiras, alertas por SMS e e-mail: como um software de acompanhamento organiza o trabalho de uma central de compostagem.",
      },
      ro: {
        title: "Software de monitorizare a compostării: gestionați șirurile online",
        description:
          "Campanii, sonde atribuite șirurilor, alerte prin SMS și e-mail: cum organizează un software de monitorizare munca unei platforme de compostare.",
      },
    },
    body: { fr: softwareFr, en: softwareEn, es: softwareEn, de: softwareEn, pt: softwareEn, ro: softwareEn },
  },
  {
    slug: "compost-economie-circulaire-temperature",
    publishedAt: "2026-10-30",
    cover: { src: "/article-compost-economie-circulaire.jpg", position: "50% 50%" },
    readingMinutes: { fr: 5, en: 5, es: 5, de: 5, pt: 5, ro: 5 },
    relatedSlugs: ["logiciel-suivi-compostage", "mesurer-temperature-andain-compost"],
    seo: {
      fr: {
        title: "Compost et économie circulaire | GreenSensor",
        description:
          "Du tri des biodéchets au retour au sol : le rôle de la température des andains dans la qualité du compost, et comment la suivre et la documenter.",
      },
      en: {
        title: "Compost and the circular economy | GreenSensor",
        description:
          "From biowaste sorting to the return to the soil: the role of windrow temperature in compost quality, and how to monitor and document it.",
      },
      es: {
        title: "Compost y economía circular | GreenSensor",
        description:
          "De la separación de biorresiduos al retorno al suelo: el papel de la temperatura de las hileras en la calidad del compost y cómo seguirla y documentarla.",
      },
      de: {
        title: "Kompost und Kreislaufwirtschaft | GreenSensor",
        description:
          "Von der Bioabfalltrennung zurück in den Boden: welche Rolle die Mietentemperatur für die Kompostqualität spielt und wie man sie überwacht und dokumentiert.",
      },
      pt: {
        title: "Compostagem e economia circular | GreenSensor",
        description:
          "Da triagem de biorresíduos ao regresso ao solo: o papel da temperatura das leiras na qualidade do composto e como a acompanhar e documentar.",
      },
      ro: {
        title: "Compost și economie circulară | GreenSensor",
        description:
          "De la sortarea biodeșeurilor la întoarcerea în sol: rolul temperaturii șirurilor în calitatea compostului și cum se urmărește și se documentează.",
      },
    },
    body: { fr: circularFr, en: circularEn, es: circularEn, de: circularEn, pt: circularEn, ro: circularEn },
  },
  {
    slug: "mesurer-temperature-andain-compost",
    publishedAt: "2026-10-28",
    cover: { src: "/visu.jpg", position: "50% 55%" },
    readingMinutes: { fr: 5, en: 5, es: 5, de: 5, pt: 5, ro: 5 },
    relatedSlugs: ["logiciel-suivi-compostage", "compost-economie-circulaire-temperature"],
    seo: {
      fr: {
        title: "Mesurer la température d’un andain de compost | GreenSensor",
        description:
          "Où planter la sonde, à quelle profondeur, à quelle fréquence mesurer, comment fixer objectifs et alertes : les règles pour un suivi de température fiable en compostage.",
      },
      en: {
        title: "Measuring compost windrow temperature | GreenSensor",
        description:
          "Where to place the probe, how deep, how often to measure, how to set targets and alerts: the rules for reliable temperature monitoring in composting.",
      },
      es: {
        title: "Medir la temperatura de una hilera de compost | GreenSensor",
        description:
          "Dónde colocar la sonda, a qué profundidad, con qué frecuencia medir y cómo fijar objetivos y alertas en el compostaje.",
      },
      de: {
        title: "Temperatur einer Kompostmiete messen | GreenSensor",
        description:
          "Wo die Sonde platzieren, wie tief, wie oft messen und wie Ziele und Warnungen festlegen: Regeln für zuverlässige Temperaturüberwachung.",
      },
      pt: {
        title: "Medir a temperatura de uma leira de compostagem | GreenSensor",
        description:
          "Onde colocar a sonda, a que profundidade, com que frequência medir e como definir objetivos e alertas na compostagem.",
      },
      ro: {
        title: "Măsurarea temperaturii unui șir de compost | GreenSensor",
        description:
          "Unde se pune sonda, la ce adâncime, cât de des se măsoară și cum se stabilesc obiectivele și alertele în compostare.",
      },
    },
    body: { fr: measureFr, en: measureEn, es: measureEn, de: measureEn, pt: measureEn, ro: measureEn },
  },
]

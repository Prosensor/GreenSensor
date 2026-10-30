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
        "Une sonde de température connectée est plantée dans l’andain et mesure la température à cœur. La sonde GreenSensor relève la température toutes les heures et transmet les mesures par radio longue portée, jusqu’à 2 km en champ libre.",
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
        "A connected temperature probe is pushed into the windrow and measures the core temperature. The GreenSensor probe reads the temperature every hour and sends the measurements by long-range radio, up to 2 km in open field.",
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

export const ARTICLES: ArticleDefinition[] = [
  {
    slug: "compost-economie-circulaire-temperature",
    publishedAt: "2026-10-30",
    cover: { src: "/article-compost-economie-circulaire.jpg", position: "50% 50%" },
    readingMinutes: { fr: 5, en: 5, es: 5, de: 5, pt: 5, ro: 5 },
    relatedSlugs: ["mesurer-temperature-andain-compost"],
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
    relatedSlugs: ["compost-economie-circulaire-temperature"],
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

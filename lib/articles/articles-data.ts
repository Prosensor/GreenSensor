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

export const ARTICLES: ArticleDefinition[] = [
  {
    slug: "mesurer-temperature-andain-compost",
    publishedAt: "2026-10-28",
    cover: { src: "/visu.jpg", position: "50% 55%" },
    readingMinutes: { fr: 5, en: 5, es: 5, de: 5, pt: 5, ro: 5 },
    relatedSlugs: [],
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

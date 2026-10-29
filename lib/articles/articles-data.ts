import type { ArticleBody, ArticleDefinition } from "./types"

/**
 * Articles du site. Les chiffres cités sur GreenSensor viennent de la fiche technique : mesure au cœur et dans
 * l'air, toutes les heures, ±0,5 °C, 5 ans d'autonomie, sondes de 1 m, 1.5 m et 2 m, second point en option sur 2 m.
 * Les articles sont rédigés en français et en anglais ; les autres langues affichent la version anglaise.
 */

const co2StakeFr: ArticleBody = {
  title: "Sonde à piquer CO₂ : intérêt et limites pour le compostage",
  intro:
    "Les sondes à piquer équipées d’un capteur de dioxyde de carbone (CO₂) se multiplient. En compostage industriel ou agricole, elles promettent un regard sur l’activité biologique du tas. Voici ce qu’il est raisonnable d’en attendre, et comment les combiner avec la température.",
  takeaways: [
    "Le CO₂ renseigne sur l’activité microbienne et l’aération, pas sur l’hygiénisation.",
    "Une mesure de CO₂ n’a de valeur que comparée : même point, même profondeur, même heure.",
    "Le capteur demande de l’entretien : humidité corrosive, biofilm, chocs au piquage.",
    "La température reste le socle du pilotage et de la preuve ; le CO₂ la complète.",
  ],
  sections: [
    {
      heading: "Qu’est-ce qu’une sonde à piquer CO₂ ?",
      paragraphs: [
        "Il s’agit généralement d’une tige rigide ou semi-rigide que l’on enfonce dans le matériau. À l’extrémité ou le long de la tige, un capteur mesure la concentration de CO₂ dans l’air interstitiel, c’est-à-dire l’air piégé entre les particules du compost.",
        "Contrairement à la température, qui reflète surtout l’équilibre thermique du milieu, le CO₂ interstitiel est lié à la respiration des micro-organismes et à la circulation des gaz dans le tas.",
      ],
    },
    {
      heading: "Pourquoi s’intéresser au CO₂ dans un tas de compost ?",
      paragraphs: [
        "Un pic d’activité biologique produit plus de CO₂ : la dégradation des matières organiques libère du gaz. Une hausse peut donc signaler une reprise d’activité après un refroidissement ou un mélange, ou une zone plus active du tas.",
        "À l’inverse, des valeurs très basses dans une zone pourtant chaude peuvent refléter une compaction ou une saturation en eau qui limite les échanges gazeux. Ce n’est pas, en soi, le signe d’un bon compost.",
      ],
    },
    {
      heading: "Mise en œuvre sur le terrain",
      paragraphs: [
        "La profondeur de mesure, le délai après brassage et la position par rapport au cœur ou à la périphérie du tas influencent fortement la lecture. Pour un suivi sérieux, on fixe un protocole plutôt que de comparer des mesures ponctuelles hétérogènes.",
      ],
      bullets: ["Mêmes points de mesure d’un passage à l’autre", "Même profondeur et même heure", "Même délai après un retournement"],
    },
    {
      heading: "Entretien et limites",
      paragraphs: [
        "Les capteurs de gaz demandent du soin : humidité corrosive, biofilm, chocs mécaniques au piquage. Prévoyez nettoyage, contrôle de calage et remplacement périodique selon les recommandations du fabricant.",
        "Le CO₂ interstitiel n’est pas un indicateur sanitaire à lui seul : l’hygiénisation repose avant tout sur des profils de température et de durée validés.",
      ],
    },
    {
      heading: "Et la température ?",
      paragraphs: [
        "Le CO₂ apporte une dimension « dynamique biologique » et d’aération, là où la température décrit l’état thermique. GreenSensor se concentre sur la température : au cœur de l’andain et dans l’air, toutes les heures, avec une précision de ±0,5 °C. C’est la mesure qui sert à piloter, à alerter et à justifier.",
      ],
    },
  ],
  conclusion:
    "Une sonde CO₂ peut enrichir votre lecture du process si vous standardisez les mesures et les croisez avec la température et l’observation du matériau. Pour le pilotage quotidien et la conformité, la température reste la mesure la plus robuste.",
}

const co2StakeEn: ArticleBody = {
  title: "CO₂ stake probes for composting: what they add, and what they don’t",
  intro:
    "Stake-style probes with carbon dioxide (CO₂) sensors are increasingly common. In industrial or on-farm composting, they promise insight into biological activity inside the windrow. Here is what you can reasonably expect, and how to combine CO₂ with temperature.",
  takeaways: [
    "CO₂ tells you about microbial activity and aeration, not about pathogen reduction.",
    "A CO₂ reading only means something when compared: same point, same depth, same time.",
    "The sensor needs upkeep: corrosive moisture, biofilm, shocks when inserting the stake.",
    "Temperature remains the backbone of control and proof; CO₂ complements it.",
  ],
  sections: [
    {
      heading: "What is a CO₂ stake probe?",
      paragraphs: [
        "It is usually a rigid or semi-rigid rod pushed into the material. At the tip or along the shaft, a sensor measures CO₂ in the interstitial air, meaning the air trapped between compost particles.",
        "Unlike temperature, which mainly reflects thermal equilibrium, interstitial CO₂ is tied to microbial respiration and to how gases move through the pile.",
      ],
    },
    {
      heading: "Why CO₂ matters in a compost pile",
      paragraphs: [
        "A surge in biological activity produces more CO₂: organic breakdown releases gas. An increase may therefore indicate renewed activity after cooling or mixing, or a more active zone in the windrow.",
        "Conversely, very low values in a hot zone can reflect compaction or waterlogging that limits gas exchange. On its own, that is not a sign of good compost.",
      ],
    },
    {
      heading: "Field practice",
      paragraphs: [
        "Reading depth, time since turning, and position relative to the core or edge strongly influence results. For serious monitoring, define a protocol rather than comparing ad-hoc spot checks.",
      ],
      bullets: ["Same measuring points from one visit to the next", "Same depth and same time of day", "Same delay after turning"],
    },
    {
      heading: "Upkeep and limits",
      paragraphs: [
        "Gas sensors need care: corrosive moisture, biofilm, mechanical shock when inserting the stake. Plan for cleaning, verification and periodic replacement per manufacturer guidance.",
        "Interstitial CO₂ alone is not a sanitary indicator: pathogen reduction relies primarily on validated time and temperature profiles.",
      ],
    },
    {
      heading: "And temperature?",
      paragraphs: [
        "CO₂ adds a biological-dynamics and aeration dimension where temperature describes the thermal state. GreenSensor focuses on temperature: in the core of the windrow and in the air, every hour, with ±0.5 °C accuracy. That is the measurement used to steer, to alert and to prove.",
      ],
    },
  ],
  conclusion:
    "A CO₂ probe can enrich your understanding of the process if you standardize measurements and cross-check them with temperature and a look at the material. For day-to-day control and compliance, temperature remains the most robust measurement.",
}

const tempCo2Fr: ArticleBody = {
  title: "Température et CO₂ : deux vues complémentaires pour le compostage",
  intro:
    "Le compostage professionnel combine contraintes sanitaires, débits de matière et objectifs de qualité du produit fini. La température et le CO₂ ne mesurent pas la même chose : les croiser aide à comprendre ce qui se passe dans le tas, sans confondre corrélation et causalité.",
  takeaways: [
    "La température sert à piloter, à alerter et à prouver l’hygiénisation.",
    "Le CO₂ est un indicateur d’activité et d’aération, utile en comparaison.",
    "Température haute et CO₂ bas : une inspection s’impose (aération, eau, structure).",
    "Aucun capteur ne remplace le regard d’un opérateur expérimenté.",
  ],
  sections: [
    {
      heading: "La température : le pilier du pilotage et de la preuve",
      paragraphs: [
        "Les profils de température servent à démontrer l’hygiénisation, à décider des retournements et à détecter les anomalies : zones froides, canaux d’air, apports déséquilibrés. C’est l’indicateur le plus documenté et le plus directement exploitable pour la traçabilité.",
        "Une sonde bien positionnée, avec une courbe dans le temps, reste l’outil le plus simple pour suivre une campagne et déclencher des alertes.",
      ],
    },
    {
      heading: "Le CO₂ : un indicateur d’activité et d’aération",
      paragraphs: [
        "Le CO₂ interstitiel réagit vite aux variations d’activité microbienne et aux conditions de diffusion dans le matériau. Il peut aider à repérer une surcompaction, une zone trop humide ou, au contraire, une zone très active après brassage.",
        "Sans cadre de mesure (même point, même protocole), les valeurs fluctuent beaucoup : leur intérêt est surtout comparatif, dans le temps et entre zones homogènes du site.",
      ],
    },
    {
      heading: "Comment les lire ensemble",
      paragraphs: [
        "Une montée de température accompagnée d’une montée de CO₂ indique en général une phase active de dégradation. Une température élevée avec un CO₂ bas mérite une inspection.",
        "Dans tous les cas, l’observation sur le terrain (odeur, texture, couleur) reste indispensable.",
      ],
    },
    {
      heading: "Par où commencer",
      paragraphs: [
        "La température est le premier levier de performance pour la plupart des sites : elle se mesure simplement, elle se prouve, et elle déclenche des actions. GreenSensor centralise les mesures, les campagnes, les alertes et les rapports sur ce socle.",
        "Un capteur de gaz s’ajoute utilement une fois le suivi thermique maîtrisé et l’équipe prête à interpréter des signaux supplémentaires.",
      ],
    },
  ],
  conclusion:
    "Considérez la température comme votre référence de pilotage et de conformité, et le CO₂ comme une loupe optionnelle sur l’activité biologique et l’aération. Ensemble, ils donnent une vision plus riche, à condition d’avoir des protocoles clairs et une équipe formée à leur lecture.",
}

const tempCo2En: ArticleBody = {
  title: "Temperature and CO₂: complementary views for composting",
  intro:
    "Professional composting combines sanitary constraints, material throughput and finished-product quality goals. Temperature and CO₂ do not measure the same thing: combining them helps you understand what is happening in the pile, without confusing correlation with causation.",
  takeaways: [
    "Temperature is used to steer, to alert and to prove pathogen reduction.",
    "CO₂ is an indicator of activity and aeration, most useful in comparison.",
    "High temperature with low CO₂ calls for an inspection (aeration, water, structure).",
    "No sensor replaces the eye of an experienced operator.",
  ],
  sections: [
    {
      heading: "Temperature: the backbone of control and proof",
      paragraphs: [
        "Temperature profiles are used to demonstrate pathogen reduction, to decide when to turn, and to detect anomalies: cold zones, air channels, unbalanced inputs. It is the best-documented indicator and the most directly usable for traceability.",
        "A well-placed probe with a curve over time remains the simplest tool for following a campaign and triggering alerts.",
      ],
    },
    {
      heading: "CO₂: an indicator of activity and aeration",
      paragraphs: [
        "Interstitial CO₂ reacts quickly to changes in microbial activity and to diffusion conditions in the material. It can help spot over-compaction, a zone that is too wet, or on the contrary a very active zone after turning.",
        "Without a measurement framework (same point, same protocol), values fluctuate a lot: their value is mostly comparative, over time and between homogeneous zones of the site.",
      ],
    },
    {
      heading: "How to read them together",
      paragraphs: [
        "A rise in temperature with a rise in CO₂ usually indicates an active degradation phase. High temperature with low CO₂ deserves an inspection.",
        "In every case, field observation (smell, texture, colour) remains essential.",
      ],
    },
    {
      heading: "Where to start",
      paragraphs: [
        "Temperature is the first performance lever for most sites: it is simple to measure, it can be proven, and it triggers actions. GreenSensor centralizes measurements, campaigns, alerts and reports on that backbone.",
        "A gas sensor is a useful addition once thermal monitoring is under control and the team is ready to interpret extra signals.",
      ],
    },
  ],
  conclusion:
    "Treat temperature as your reference for control and compliance, and CO₂ as an optional magnifying glass on biological activity and aeration. Together they give a richer picture, provided you have clear protocols and a team trained to read them.",
}

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
    relatedSlugs: ["temperature-co2-compostage-complementaires", "sonde-co2-piquer-compost"],
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
  {
    slug: "sonde-co2-piquer-compost",
    publishedAt: "2026-05-12",
    cover: { src: "/article-co2-sonde-terrain.jpg", position: "50% 50%" },
    readingMinutes: { fr: 4, en: 4, es: 4, de: 4, pt: 4, ro: 4 },
    relatedSlugs: ["temperature-co2-compostage-complementaires", "mesurer-temperature-andain-compost"],
    seo: {
      fr: {
        title: "Sonde à piquer CO₂ et compostage | GreenSensor",
        description:
          "Rôle des sondes CO₂ à piquer dans le compostage : activité biologique, protocoles de mesure, limites et complémentarité avec la température.",
      },
      en: {
        title: "CO₂ stake probes and composting | GreenSensor",
        description:
          "How CO₂ stake probes help monitor compost piles: biological activity, field protocols, limits, and how they complement temperature monitoring.",
      },
      es: {
        title: "Sondas de CO₂ para compostaje | GreenSensor",
        description:
          "CO₂ intersticial en compost: actividad biológica, protocolos y límites; complemento de la temperatura en plantas profesionales.",
      },
      de: {
        title: "CO₂-Stechsonden im Kompost | GreenSensor",
        description:
          "CO₂ im Kompost: biologische Aktivität, Messprotokolle, Grenzen und Ergänzung zur Temperaturüberwachung.",
      },
      pt: {
        title: "Sondas de CO₂ no compostagem | GreenSensor",
        description:
          "CO₂ intersticial no compostagem: atividade biológica, protocolos, limites e complemento da temperatura.",
      },
      ro: {
        title: "Sonde CO₂ pentru compostare | GreenSensor",
        description:
          "CO₂ interstițial în compost: activitate biologică, protocoale, limite și complementaritate cu temperatura.",
      },
    },
    body: { fr: co2StakeFr, en: co2StakeEn, es: co2StakeEn, de: co2StakeEn, pt: co2StakeEn, ro: co2StakeEn },
  },
  {
    slug: "temperature-co2-compostage-complementaires",
    publishedAt: "2026-05-08",
    cover: { src: "/faq.jpg", position: "50% 60%" },
    readingMinutes: { fr: 5, en: 5, es: 5, de: 5, pt: 5, ro: 5 },
    relatedSlugs: ["sonde-co2-piquer-compost", "mesurer-temperature-andain-compost"],
    seo: {
      fr: {
        title: "Température et CO₂ en compostage | GreenSensor",
        description:
          "Croiser température et CO₂ pour mieux piloter le compostage : hygiénisation, activité biologique, aération et plateformes connectées.",
      },
      en: {
        title: "Temperature and CO₂ in composting | GreenSensor",
        description:
          "Combining temperature and CO₂ for better compost operations: pathogen reduction, biological activity, aeration, and connected monitoring.",
      },
      es: {
        title: "Temperatura y CO₂ en compostaje | GreenSensor",
        description:
          "Cómo combinar temperatura y CO₂ en compostaje profesional: higienización, actividad biológica y monitorización conectada.",
      },
      de: {
        title: "Temperatur und CO₂ im Kompost | GreenSensor",
        description:
          "Temperatur und CO₂ kombinieren: Hygienisierung, biologische Aktivität, Belüftung und vernetztes Monitoring.",
      },
      pt: {
        title: "Temperatura e CO₂ na compostagem | GreenSensor",
        description:
          "Cruzar temperatura e CO₂ na compostagem profissional: higienização, atividade biológica e monitorização ligada.",
      },
      ro: {
        title: "Temperatură și CO₂ în compostare | GreenSensor",
        description:
          "Combinarea temperaturii și CO₂: igienizare, activitate biologică, aerare și monitorizare conectată.",
      },
    },
    body: { fr: tempCo2Fr, en: tempCo2En, es: tempCo2En, de: tempCo2En, pt: tempCo2En, ro: tempCo2En },
  },
]

import type { ArticleDefinition } from "./types"

const co2StakeFr = {
  title: "Sonde à piquer CO₂ : intérêt et limites pour le compostage",
  intro:
    "Les sondes à piquer équipées d’un capteur de dioxyde de carbone (CO₂) se multiplient sur les plateformes de mesure environnementale. Dans un contexte de compostage industriel ou agricole, elles promettent un regard sur l’activité biologique du tas. Voici ce qu’il est raisonnable d’en attendre, et comment les combiner avec d’autres indicateurs comme la température.",
  sections: [
    {
      heading: "Qu’est-ce qu’une sonde à piquer CO₂ ?",
      paragraphs: [
        "Il s’agit généralement d’une tige rigide ou semi-rigide que l’on enfonce dans le matériau à analyser. À l’extrémité ou le long de la tige, un capteur mesure la concentration de CO₂ dans l’air interstitiel — l’air piégé entre les particules du compost.",
        "Contrairement à une mesure de température, qui reflète surtout l’équilibre thermique du milieu, le CO₂ interstitiel est fortement lié à la respiration microbienne et à la circulation des gaz dans le tas.",
      ],
    },
    {
      heading: "Pourquoi le CO₂ intéresse-t-on dans un tas de compost ?",
      paragraphs: [
        "Un pic d’activité biologique produit souvent plus de CO₂ : la dégradation des substrats organiques libère du gaz. Une hausse peut donc signaler une reprise d’activité après un refroidissement, un mélange, ou une zone plus active du tas.",
        "À l’inverse, des valeurs très basses sur une zone pourtant chaude peuvent parfois refléter une compaction ou une saturation en eau limitant les échanges gazeux — ce qui n’est pas synonyme de « bon compost » pris isolément.",
      ],
    },
    {
      heading: "Mise en œuvre sur le terrain",
      paragraphs: [
        "La profondeur de mesure, le délai après brassage, et la position par rapport au cœur ou à la périphérie du tas influencent fortement la lecture. Pour un suivi sérieux, on fixe des protocoles (mêmes points, même heure, même profondeur) plutôt que de comparer des mesures ponctuelles hétérogènes.",
        "Les capteurs nécessitent entretien et vérification : humidité corrosive, biofilm, chocs mécaniques au piquage. Prévoir nettoyage, contrôle de calage et remplacement périodique selon recommandation fabricant.",
      ],
    },
    {
      heading: "Limites et bon usage",
      paragraphs: [
        "Le CO₂ interstitiel n’est pas une norme de qualité sanitaire à lui seul : la conformité pasteurienne repose avant tout sur des profils thermiques et des procédures validées (durée, température, homogénéité).",
        "Le CO₂ complète utilement la température : il apporte une dimension « dynamique biologique » et d’aération, là où la température décrit surtout l’état thermique. GreenSensor met l’accent sur une mesure fiable de la température et son exploitation opérationnelle ; l’ajout de gaz reste un sujet d’optimisation avancée selon vos objectifs de pilotage.",
      ],
    },
  ],
  conclusion:
    "Une sonde à piquer CO₂ peut enrichir votre lecture du processus si vous standardisez les mesures et croisez systématiquement avec la température et l’observation visuelle du matériau. Pour la conformité et le pilotage quotidien, la température reste le socle le plus robuste — c’est autour de ce socle que s’articule l’écosystème GreenSensor.",
}

const co2StakeEn = {
  title: "CO₂ stake probes for composting: what they add — and what they don’t",
  intro:
    "Stake-style probes with carbon dioxide (CO₂) sensors are increasingly common in environmental monitoring. In industrial or on-farm composting, they promise insight into biological activity inside the windrow. Here is what you can reasonably expect, and how to combine CO₂ with other signals such as temperature.",
  sections: [
    {
      heading: "What is a CO₂ stake probe?",
      paragraphs: [
        "It is usually a rigid or semi-rigid rod inserted into the material. At the tip or along the shaft, a sensor measures CO₂ in the interstitial air — the air trapped between compost particles.",
        "Unlike temperature, which mainly reflects thermal equilibrium, interstitial CO₂ is tightly linked to microbial respiration and to how gases move through the pile.",
      ],
    },
    {
      heading: "Why CO₂ matters in a compost pile",
      paragraphs: [
        "A surge in biological activity often produces more CO₂: organic breakdown releases gas. An increase may therefore indicate renewed activity after cooling, mixing, or a more active zone in the windrow.",
        "Conversely, very low values in a hot zone can sometimes reflect compaction or waterlogging limiting gas exchange — which is not, on its own, a sign of “good compost”.",
      ],
    },
    {
      heading: "Field practice",
      paragraphs: [
        "Reading depth, time since turning, and position relative to the core or edge strongly influence results. For serious monitoring, define protocols (same points, same time, same depth) rather than comparing ad-hoc spot checks.",
        "Sensors need care: corrosive moisture, biofilm, mechanical shock when inserting the stake. Plan for cleaning, verification, and periodic replacement per manufacturer guidance.",
      ],
    },
    {
      heading: "Limits and sensible use",
      paragraphs: [
        "Interstitial CO₂ alone is not a sanitary quality metric: pathogen reduction relies primarily on validated time–temperature profiles and process control (duration, temperature, homogeneity).",
        "CO₂ usefully complements temperature: it adds a “biological dynamics / aeration” dimension where temperature mostly describes thermal state. GreenSensor focuses on reliable temperature measurement and operational use; adding gas sensing remains an advanced optimization topic depending on your control objectives.",
      ],
    },
  ],
  conclusion:
    "A CO₂ stake probe can enrich process understanding if you standardize measurements and always cross-check with temperature and visual assessment of the material. For compliance and day-to-day operations, temperature remains the most robust backbone — and that backbone is what the GreenSensor ecosystem is built around.",
}

const tempCo2Fr = {
  title: "Température et CO₂ : deux vues complémentaires pour le compostage",
  intro:
    "Le compostage professionnel combine contraintes sanitaires, débits de matière et objectifs de qualité du produit fini. La température et le dioxyde de carbone ne mesurent pas la même chose : les croiser permet de mieux comprendre ce qui se passe dans le tas, sans confondre corrélation et causalité.",
  sections: [
    {
      heading: "La température : le pilier réglementaire et opérationnel",
      paragraphs: [
        "Les profils thermiques servent à démontrer l’hygiénisation, à piloter les retournements et à détecter les anomalies (zones froides, canaux d’air, apports déséquilibrés). C’est l’indicateur historiquement documenté et le plus directement exploitable pour la traçabilité.",
        "Une sonde de température bien positionnée, avec une courbe dans le temps, reste l’outil le plus simple pour suivre une campagne et alimenter des alertes.",
      ],
    },
    {
      heading: "Le CO₂ : un proxy d’activité et d’aération",
      paragraphs: [
        "Le CO₂ interstitiel réagit vite aux variations d’activité microbienne et aux conditions de diffusion dans le matériau. Il peut aider à repérer une surcompaction, une zone trop humide ou, au contraire, une zone très active après brassage.",
        "Sans cadre de mesure (même point, même protocole), les valeurs CO₂ fluctuent fortement : leur valeur est surtout comparative dans le temps et entre zones homogènes du site.",
      ],
    },
    {
      heading: "Comment les utiliser ensemble",
      paragraphs: [
        "Une montée de température avec une montée de CO₂ peut indiquer une phase active de dégradation. Une température élevée avec un CO₂ bas mérite une inspection (aération, eau, structure).",
        "Dans tous les cas, l’observation terrain (odeur, texture, couleur) reste indispensable : aucun capteur ne remplace le jugement d’un opérateur expérimenté.",
      ],
    },
    {
      heading: "Vers un pilotage connecté",
      paragraphs: [
        "Les plateformes comme GreenSensor facilitent la centralisation des mesures, les campagnes, les exports et les alertes sur la température — premier levier de performance pour la majorité des sites.",
        "L’intégration future ou complémentaire de capteurs gaz peut s’envisager lorsque le processus est déjà stabilisé sur la donnée thermique et que l’équipe est prête à interpréter des signaux supplémentaires.",
      ],
    },
  ],
  conclusion:
    "Pensez la température comme votre référence de pilotage et de conformité, et le CO₂ comme une loupe optionnelle sur l’activité biologique et l’aération interne. Ensemble, ils dessinent une vision plus riche — à condition de protocoles clairs et d’une équipe formée à leur lecture.",
}

const tempCo2En = {
  title: "Temperature and CO₂: complementary views for composting",
  intro:
    "Professional composting balances sanitary requirements, material throughput, and finished-product quality targets. Temperature and carbon dioxide do not measure the same thing: combining them helps explain what is happening inside the windrow — without mistaking correlation for causation.",
  sections: [
    {
      heading: "Temperature: the regulatory and operational backbone",
      paragraphs: [
        "Thermal profiles demonstrate pathogen reduction, guide turning decisions, and flag anomalies (cold spots, air channels, imbalanced feedstocks). It is the historically documented indicator and the most straightforward for traceability.",
        "A well-placed temperature probe with a time series remains the simplest way to monitor a campaign and power alerts.",
      ],
    },
    {
      heading: "CO₂: a proxy for activity and aeration",
      paragraphs: [
        "Interstitial CO₂ responds quickly to changes in microbial activity and to how gases move through the matrix. It can help spot over-compaction, excess moisture, or, conversely, a very active zone after turning.",
        "Without a measurement framework (same point, same protocol), CO₂ values swing widely: their value is mostly comparative over time and between homogeneous zones on site.",
      ],
    },
    {
      heading: "Using both together",
      paragraphs: [
        "Rising temperature with rising CO₂ may indicate an active degradation phase. High temperature with low CO₂ warrants a field check (aeration, moisture, structure).",
        "In every case, on-site observation (odor, texture, color) remains essential: no sensor replaces an experienced operator’s judgment.",
      ],
    },
    {
      heading: "Toward connected operations",
      paragraphs: [
        "Platforms such as GreenSensor make it easier to centralize readings, manage campaigns, export data, and trigger temperature-based alerts — the main performance lever for most facilities.",
        "Adding or integrating gas sensors can be considered once the process is already stable on thermal data and the team is ready to interpret additional signals.",
      ],
    },
  ],
  conclusion:
    "Treat temperature as your control and compliance reference, and CO₂ as an optional magnifier on biological activity and internal aeration. Together they paint a richer picture — provided you use clear protocols and train staff to read them consistently.",
}

export const ARTICLES: ArticleDefinition[] = [
  {
    slug: "sonde-co2-piquer-compost",
    publishedAt: "2026-05-01",
    readingMinutes: { fr: 6, en: 6, es: 6, de: 6, pt: 6, ro: 6 },
    relatedSlugs: ["temperature-co2-compostage-complementaires"],
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
    body: {
      fr: co2StakeFr,
      en: co2StakeEn,
      es: co2StakeEn,
      de: co2StakeEn,
      pt: co2StakeEn,
      ro: co2StakeEn,
    },
  },
  {
    slug: "temperature-co2-compostage-complementaires",
    publishedAt: "2026-05-08",
    readingMinutes: { fr: 5, en: 5, es: 5, de: 5, pt: 5, ro: 5 },
    relatedSlugs: ["sonde-co2-piquer-compost"],
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
        title: "Temperatura e CO₂ no compostagem | GreenSensor",
        description:
          "Cruzar temperatura e CO₂ no compostagem profissional: higienização, atividade biológica e monitorização ligada.",
      },
      ro: {
        title: "Temperatură și CO₂ în compostare | GreenSensor",
        description:
          "Combinarea temperaturii și CO₂: igienizare, activitate biologică, aerare și monitorizare conectată.",
      },
    },
    body: {
      fr: tempCo2Fr,
      en: tempCo2En,
      es: tempCo2En,
      de: tempCo2En,
      pt: tempCo2En,
      ro: tempCo2En,
    },
  },
]

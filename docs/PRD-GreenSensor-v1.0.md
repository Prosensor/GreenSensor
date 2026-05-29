# PRD — GreenSensor (Prosensor)

> **Document généré** — Étape 2.1 BMAD · Mode Analyst / PM  
> Première mouture à partir des informations collectées (entretiens, specs terrain, retours clients, contenu produit existant).

─────────────────────────────

| Champ | Valeur |
|-------|--------|
| **Titre** | GreenSensor — Plateforme de suivi connecté du compostage |
| **Version** | 1.0 |
| **Date** | 19 mai 2026 |
| **Auteur** | Équipe produit Prosensor |
| **Statut** | Brouillon validé en revue interne |

─────────────────────────────

## 1. OBJECTIFS

### Objectif principal

Permettre aux exploitants de plateformes de compostage (professionnels et structures associatives) de **suivre en temps réel la température de leurs andains**, de **piloter leurs campagnes de maturation/fermentation** et de **garantir la conformité sanitaire** grâce à des sondes sans fil, une passerelle LoRa et une interface cloud GreenSensor.

### Objectifs secondaires

- Réduire le temps passé sur les relevés manuels et les tournées terrain.
- Centraliser l’historique des mesures, les commentaires sur points de données et l’export pour audits / rapports.
- Renforcer la notoriété de Prosensor via un **site vitrine multilingue** (FR, EN, ES, DE, PT, RO) orienté conversion (démo, documentation, articles SEO).
- Faciliter l’onboarding client (guide passerelle, FAQ, support).

### KPI de succès

| KPI | Cible (12 mois) |
|-----|-----------------|
| Taux d’activation post-livraison (compte + 1ère campagne créée) | ≥ 85 % |
| Disponibilité remontée données (sonde → cloud) | ≥ 98 % |
| Délai moyen de résolution alerte critique (température hors seuil) | < 4 h |
| Taux de conversion visite site → demande de démo | ≥ 3 % |
| NPS clients plateforme GreenSensor | ≥ 40 |
| Temps moyen d’installation passerelle (autonomie client) | < 45 min |

---

## 2. UTILISATEURS ET PERSONAS

### Persona 1 — **Marc, responsable de plateforme de compostage**

- **Profil :** 42 ans, gestionnaire opérationnel sur site industriel ou structure coopérative.
- **Besoins :** Suivre plusieurs andains, recevoir des alertes SMS/e-mail, prouver les phases thermophiles pour la traçabilité.
- **Frustrations :** Relevés manuels chronophages, risque d’erreur, difficulté à anticiper les retournements.
- **Comportement :** Consulte l’interface 2 à 4 fois par jour ; dépend des alertes sur mobile.

### Persona 2 —**Sophie, directrice technique / qualité (groupe ou réseau)**

- **Profil :** 38 ans, pilote plusieurs sites sous un même compte facturation.
- **Besoins :** Vue consolidée, export de données, rapports de campagne, politique d’accès multi-utilisateurs.
- **Frustrations :** Données éparpillées, manque de standardisation entre sites.
- **Comportement :** Analyse hebdomadaire des tendances ; interaction avec l’équipe support Prosensor pour déploiements.

### Persona 3 — **Lucas, prospect en phase d’évaluation**

- **Profil :** Responsable achat ou innovation, découvre GreenSensor via le web.
- **Besoins :** Comprendre le ROI, les specs (précision ±0,5 °C, autonomie batterie), demander une démo.
- **Frustrations :** Solutions IoT opaques, peur de la complexité d’installation.
- **Comportement :** Parcourt le site vitrine, la FAQ, la documentation passerelle ; remplit le formulaire de contact.

---

## 3. CAS D'USAGE PRINCIPAUX

| ID | Cas d'usage |
|----|-------------|
| **CU1** | Quand une **nouvelle campagne** de compostage démarre, l’exploitant **crée une campagne**, **affecte des sondes à des andains** et **définit des seuils** pour piloter la montée en température. |
| **CU2** | Quand la **température dépasse ou descend sous un seuil** configuré, le système **envoie une alerte SMS ou e-mail** afin que l’utilisateur **intervienne avant dégradation du lot** ou non-conformité sanitaire. |
| **CU3** | Quand l’utilisateur consulte l’**historique d’un lot**, il **visualise les courbes**, **ajoute des commentaires sur des points de données** et **exporte** les données pour un rapport ou un audit. |
| **CU4** | Quand une **sonde tombe en panne ou doit être remplacée** en cours de campagne, l’exploitant **change de sonde sur le lot** sans perdre la traçabilité de la campagne. |
| **CU5** | Quand un **nouveau client** reçoit son matériel, il **installe la passerelle LoRa** (Ethernet, Wi-Fi ou 4G) en suivant la documentation, jusqu’au **voyant SYS vert** et remontée des données sur l’interface. |
| **CU6** | Quand un **prospect** visite le site marketing, il **consulte les fonctionnalités**, lit les **articles métier** et **demande une présentation** via le formulaire de démo. |

---

## 4. FONCTIONNALITÉS CLÉS

### Feature 1 — Mesure de température sans fil (sondes GreenSensor)

- **Description :** Sondes avec 2 capteurs par sonde, précision annoncée ±0,5 °C, visibilité terrain (coloris fluo), portée LoRa ~2 km en champ libre vers la passerelle.
- **Use cases :** Relevé continu ; remplacement de sonde en cours de campagne ; multi-sondes par routeur sans plafond technique.

### Feature 2 — Passerelle & connectivité LoRaWAN

- **Description :** Passerelle reliant sondes au cloud ; connexion Internet via box site, Wi-Fi ou option 4G fournie par Prosensor ; indicateurs LED (SYS vert = opérationnel).
- **Use cases :** Sites sans fibre ; dépannage Basic Station via WebUI ; multi-sites sous un compte.

### Feature 3 — Interface cloud GreenSensor (campagnes & pilotage)

- **Description :** Création de campagnes fermentation/maturation, affectation sondes/andains, suivi d’objectifs, alertes, export, impression de rapports.
- **Use cases :** Pilotage quotidien ; traçabilité réglementaire ; commentaires sur points de mesure.

### Feature 4 — Alertes et notifications

- **Description :** Seuils personnalisables par étape de production ; notifications e-mail et SMS.
- **Use cases :** Intervention rapide ; réduction des pertes de lot.

### Feature 5 — Site vitrine & acquisition (ce dépôt `green-sensor`)

- **Description :** Site Next.js multilingue : hero, fonctionnalités, FAQ, documentation passerelle, hub articles SEO, formulaire démo (API e-mail), pages légales, sitemap.
- **Use cases :** Génération de leads ; support self-service ; référencement sur le compostage connecté.

### Feature 6 — Documentation & contenu d’aide

- **Description :** Guides pas-à-pas (connexion passerelle, dépannage LoRa), FAQ produit, articles éditoriaux (compostage, capteurs, CO₂, etc.).
- **Use cases :** Réduction du volume support N1 ; autonomie à l’installation.

---

## 5. CONTRAINTES

| Type | Détail |
|------|--------|
| **Temps** | Mise en production site vitrine Q2 2026 ; évolutions plateforme cloud selon roadmap trimestrielle Prosensor. |
| **Budget** | Stack open-source privilégiée (Next.js, hébergement Vercel ou équivalent) ; coûts matériels (sondes, passerelles, 4G) hors périmètre dev web. |
| **Technique** | Max. **5 routeurs par compte utilisateur** (limite technique) ; pas de limite de sondes par routeur ; autonomie batterie sonde ~4 ans (maintenance Prosensor, forfait révision). |
| **Réglementaire** | RGPD sur formulaires et données personnelles ; mentions légales, politique de confidentialité, CGU sur le site. |
| **Dépendances** | Réseau LoRa ↔ passerelle ↔ cloud Prosensor ; opérateur 4G si option sans box ; service d’envoi e-mail (API démo) ; DNS / certificats SSL. |
| **Organisationnelle** | Prix dégressifs selon volume ; engagement tarifaire clients jusqu’en juin 2027 pour clients engagés. |

---

## 6. RISQUES

| Risque | Mitigation |
|--------|------------|
| **Perte de connectivité sur site** (pas d’Internet, mauvaise couverture 4G) | Procédure passerelle 4G Prosensor ; guide dépannage WebUI / Basic Station ; support téléphonique. |
| **Interprétation erronée des courbes** (corrélation température / CO₂ mal comprise) | Articles pédagogiques ; formation à la démo ; libellés clairs dans l’UI. |
| **Dérive ou panne capteur** | Certificat d’étalonnage initial ; maintenance forfaitaire tous les 4 ans ; 2 capteurs redondants par sonde. |
| **Faible conversion site → démo** | A/B sur CTA, contenu articles SEO, formulaire court, suivi des leads. |
| **Complexité perçue à l’installation** | Documentation illustrée multilingue ; vidéos / démo live ; checklist voyant SYS vert. |
| **Dette technique site** (i18n, contenus dispersés) | Centralisation traductions (`i18n-provider`) ; registry articles typé ; revues PR régulières. |

---

## 7. CRITÈRES D'ACCEPTATION

| ID | Condition | Résultat attendu |
|----|-----------|------------------|
| **AC1** | Un exploitant crée une campagne et assigne au moins une sonde à un andain. | Les mesures apparaissent sur le tableau de bord en moins de **5 minutes** après mise sous tension. |
| **AC2** | La température franchit un seuil configuré. | Une alerte **SMS ou e-mail** est reçue en moins de **2 minutes** (hors indisponibilité réseau documentée). |
| **AC3** | L’utilisateur exporte les données d’une campagne terminée. | Un fichier exploitable (CSV ou format défini) contient l’historique et les métadonnées de campagne. |
| **AC4** | Un client installe la passerelle selon le guide. | Le voyant **SYS est vert fixe** et le logo LoRa affiche une **coche verte** sur la WebUI. |
| **AC5** | Un prospect soumet le formulaire « Demander une présentation » sur le site. | Un e-mail de notification est envoyé à Prosensor et l’utilisateur voit un **message de succès** (ou d’erreur explicite). |
| **AC6** | Un visiteur change la langue du site (FR / EN / ES / DE / PT / RO). | L’ensemble des sections marketing et légales accessibles s’affichent dans la langue choisie, sans rechargement cassé. |
| **AC7** | Un utilisateur consulte un article du hub `/articles`. | La page détail affiche titre, date, temps de lecture, contenu structuré et lien retour vers la liste. |
| **AC8** | Remplacement d’une sonde en cours de campagne. | La campagne reste active ; l’historique antérieur est conservé ; la nouvelle sonde remonte des mesures identifiées. |

---

## Annexe — Périmètre de ce dépôt (site `green-sensor`)

| In scope (v1 site) | Out of scope (plateforme cloud) |
|--------------------|----------------------------------|
| Pages marketing, FAQ, démo, articles | Logique métier campagnes côté serveur Prosensor |
| Documentation passerelle (contenu) | Firmware sondes / passerelle |
| i18n 6 langues | Facturation et abonnements |
| API `send-demo-mail` | Application mobile native dédiée |
| SEO (sitemap, métadonnées) | — |

---

*Fin du document — PRD GreenSensor v1.0*

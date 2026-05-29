# Tableau Kanban — GreenSensor (Prosensor)

> Organisation de travail — Kanban simplifié (sans sprints / dailies / rétros)  
> Limite WIP : **1–2** en cours · **2–3** en test

─────────────────────────────

**Projet :** GreenSensor · **Mise à jour :** 19 mai 2026  
**Sources :** Backlog v1.0 · PRD v1.0

─────────────────────────────

```
TABLEAU KANBAN :
─────────────────────────────
  À FAIRE          |    EN COURS      |    EN TEST       |    TERMINÉ
 [18 stories]     |   [1–2 max]      |   [2–3]          |   [✓ 14]
─────────────────────────────────────────────────────────────────────
```

---

## À FAIRE

### Refonte web — greensensor.fr (5 stories prioritaires)

- **[Web-14]** Page gammes produit (sondes, packs, options 4G)
- **[Web-15]** Optimiser Core Web Vitals (LCP images hero)
- **[Web-16]** Enrichir formulaire démo (config sonde / distance passerelle)
- **[Web-17]** Tracking conversion (événements CTA → démo)
- **[Web-18]** Revue accessibilité (contraste, focus, aria)

### App iOS — interface GreenSensor (8 stories)

- **[iOS-01]** Écran connexion compte exploitant
- **[iOS-02]** Liste des campagnes actives
- **[iOS-03]** Détail courbe température + andain
- **[iOS-04]** Notifications push sur alertes seuil
- **[iOS-05]** Commentaire sur point de mesure
- **[iOS-06]** Changement de sonde en cours de campagne
- **[iOS-07]** Export rapport campagne (partage fichier)
- **[iOS-08]** Mode hors-ligne lecture dernières mesures

### Outils internes (3 stories)

- **[Internal-01]** Back-office gestion leads formulaire démo
- **[Internal-02]** CMS produits (gammes, specs, tarifs dégressifs)
- **[Internal-03]** Éditeur articles SEO sans déploiement code

### Backlog plateforme cloud (non priorisé Kanban web)

- **[Cloud-01]** Export CSV campagne · **[Cloud-02]** Multi-sites · **[Cloud-03]** Rapport PDF

---

## EN COURS

| ID | Story | Assigné | Depuis |
|----|-------|---------|--------|
| **[Web-05]** | Optimiser images page d'accueil (WebP, `next/image`, lazy load bannière) | Dev web | 12 mai |

---

## EN TEST

| ID | Story | Environnement | Note |
|----|-------|---------------|------|
| **[Web-12]** | Hub articles `/articles` + pages détail `[slug]` | Preview Vercel | Revue contenu + métadonnées SEO |
| **[Web-13]** | Traductions RO / PT — relecture native | Staging | Corrections mineures libellés footer |

---

## TERMINÉ

### Refonte web ✓

- **[Web-01]** Setup projet Next.js 15 (App Router, TypeScript) ✓
- **[Web-02]** Design system (Tailwind, shadcn/ui, tokens vert `#3eab35`) ✓
- **[Web-03]** Page d'accueil — Hero, Features, Run, Key Features, Download ✓
- **[Web-04]** Header overlay + navigation ancres + footer ✓
- **[Web-06]** i18n 6 langues (FR, EN, ES, DE, PT, RO) + cookie langue ✓
- **[Web-07]** FAQ (section home + page `/faq`) ✓
- **[Web-08]** Documentation passerelle LoRa (`/documentation`) ✓
- **[Web-09]** Pages légales (mentions, confidentialité, CGU) ✓
- **[Web-10]** Formulaire démo + API `send-demo-mail` (Zod, Nodemailer) ✓
- **[Web-11]** SEO — `generateMetadata`, Open Graph, `sitemap.xml` ✓

### Technique transverse ✓

- **[TECH-01]** Déploiement Vercel · domaine greensensor.fr ✓
- **[TECH-02]** Rate limiting API démo (6 req / 10 min / IP) ✓
- **[TECH-03]** Animations sections (`framer-motion`) ✓

---

## Règles Kanban (équipe)

| Règle | Détail |
|-------|--------|
| **WIP EN COURS** | Maximum **2** cartes — finir avant d'en tirer une nouvelle |
| **WIP EN TEST** | Maximum **3** cartes — validation client ou preview sous 48 h |
| **Priorisation** | P0 web → puis iOS → outils internes → cloud |
| **Definition of Done** | Identique au backlog (AC validés, déployable, pas de régression mobile) |
| **Pas de Scrum** | Pas de sprint planning ni daily — revue hebdo 30 min suffisante |

---

## Synthèse

| Colonne | Nb cartes |
|---------|-----------|
| À faire | 18 (+ 3 cloud en attente) |
| En cours | 1 |
| En test | 2 |
| Terminé | 14 |
| **Total suivi** | **35** |

─────────────────────────────

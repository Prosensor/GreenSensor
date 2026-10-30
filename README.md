# GreenSensor — Site vitrine

> **Site marketing officiel de la solution GreenSensor (Prosensor)**  
> URL production : [https://greensensor.fr](https://greensensor.fr)  
> Dépôt GitHub : [Prosensor/GreenSensor](https://github.com/Prosensor/GreenSensor)

---

## Sommaire

1. [Pour le responsable / patron](#1-pour-le-responsable--patron)
2. [Pour le développeur](#2-pour-le-développeur)
3. [Installation locale](#3-installation-locale)
4. [Déploiement et hébergement](#4-déploiement-et-hébergement)
5. [Architecture du projet](#5-architecture-du-projet)
6. [Guide de maintenance courante](#6-guide-de-maintenance-courante)
7. [Formulaire de démo et e-mails](#7-formulaire-de-démo-et-e-mails)
8. [Internationalisation (6 langues)](#8-internationalisation-6-langues)
9. [SEO et analytics](#9-seo-et-analytics)
10. [Documentation produit (dossier `docs/`)](#10-documentation-produit-dossier-docs)
11. [Travaux restants et roadmap](#11-travaux-restants-et-roadmap)
12. [Dépannage fréquent](#12-dépannage-fréquent)
13. [Contacts et accès utiles](#13-contacts-et-accès-utiles)

---

## 1. Pour le responsable / patron

### De quoi s'agit-il ?

Ce dépôt contient **le site vitrine multilingue de GreenSensor** : la page publique qui présente le produit (sondes de température pour le compostage), répond aux questions fréquentes, publie des articles SEO et **reçoit les demandes de démonstration** des prospects.

**Ce site ne remplace pas la plateforme cloud** où les clients suivent leurs campagnes de compostage. La plateforme est hébergée séparément :

| Service | URL | Rôle |
|---------|-----|------|
| **Site vitrine** (ce dépôt) | [greensensor.fr](https://greensensor.fr) | Marketing, leads, FAQ, documentation passerelle |
| **Interface client** (hors dépôt) | [greensensor.prosensor.fr](https://greensensor.prosensor.fr/) | Pilotage des campagnes, courbes, alertes |

### Ce que le site fait aujourd'hui

- Présente le produit (hero, fonctionnalités, spécifications, analyse)
- Propose une **FAQ** complète (page dédiée + section sur l'accueil)
- Publie un **guide d'installation de la passerelle LoRa** (`/documentation`)
- Héberge un **hub d'articles SEO** (`/articles`) — 1 article publié à ce jour
- Reçoit les **demandes de présentation** via un formulaire enrichi (config sonde, pack, distance…)
- Envoie un **e-mail automatique** à `info@prosensor.com` à chaque demande
- Est disponible en **6 langues** : FR, EN, ES, DE, PT, RO
- Respecte le **RGPD** (mentions légales, politique de confidentialité, CGU)
- Est **référencé** (sitemap, métadonnées, Google Ads)

### Coûts et dépendances externes

| Service | Usage | Qui gère |
|---------|-------|----------|
| **Vercel** | Hébergement du site Next.js | Compte Prosensor (lié au dépôt GitHub) |
| **LWS** (`mail81.lwspanel.com`) | Envoi SMTP des e-mails formulaire | Compte `contact@greensensor.fr` |
| **Google Ads** | Suivi conversions (tag `AW-1068513425`) | Équipe marketing Prosensor |
| **Nom de domaine** | `greensensor.fr` | Prosensor / LWS |

**Variable secrète à conserver :** le mot de passe SMTP `MAIL_PASSWORD` (configuré sur Vercel, jamais dans le code).

### Ce qui n'est PAS dans ce dépôt

- La plateforme cloud (campagnes, alertes, export CSV)
- Le firmware des sondes et passerelles LoRa
- La facturation / abonnements clients
- L'application mobile iOS (en cours de conception — voir roadmap)

Pour le détail fonctionnel complet du produit, voir [`docs/PRD-GreenSensor-v1.0.md`](docs/PRD-GreenSensor-v1.0.md).

---

## 2. Pour le développeur

### Stack technique

| Couche | Technologie | Version |
|--------|-------------|---------|
| Framework | [Next.js](https://nextjs.org) (App Router) | 15.5.9 |
| UI | React 19, Tailwind CSS, [shadcn/ui](https://ui.shadcn.com) | — |
| Animations | Framer Motion | 11.x |
| Formulaires | React Hook Form + Zod | — |
| E-mails | Nodemailer (SMTP LWS) | 7.x |
| Langage | TypeScript | 5.x |
| Hébergement | Vercel | — |

Couleur de marque principale : **`#3eab35`** (vert GreenSensor).

### Prérequis

- **Node.js 20+** (LTS recommandé)
- **npm** (ou pnpm/yarn)
- Accès au dépôt GitHub `Prosensor/GreenSensor`
- Accès Vercel (pour les variables d'environnement et les déploiements)
- Mot de passe SMTP `contact@greensensor.fr` pour tester le formulaire en local

---

## 3. Installation locale

```bash
# Cloner le dépôt
git clone https://github.com/Prosensor/GreenSensor.git
cd GreenSensor

# Installer les dépendances
npm install

# Copier et remplir les variables d'environnement
cp .env.example .env.local
# Éditer .env.local → renseigner MAIL_PASSWORD

# Lancer le serveur de développement
npm run dev
```

Ouvrir [http://localhost:3000](http://localhost:3000).

### Scripts disponibles

| Commande | Description |
|----------|-------------|
| `npm run dev` | Serveur de développement (hot reload) |
| `npm run build` | Build de production (à lancer avant merge si doute) |
| `npm run start` | Serveur production local (après `build`) |
| `npm run lint` | Vérification ESLint Next.js |

---

## 4. Déploiement et hébergement

### Workflow automatique (recommandé)

1. Pousser sur la branche `main` du dépôt GitHub
2. **Vercel** déclenche un build et déploie automatiquement sur `greensensor.fr`
3. Vérifier le déploiement dans le dashboard Vercel

### Variables d'environnement Vercel

| Variable | Obligatoire | Description |
|----------|-------------|-------------|
| `MAIL_PASSWORD` | **Oui** | Mot de passe du compte SMTP `contact@greensensor.fr` |

Sans cette variable, le formulaire de démo affiche une erreur côté utilisateur et l'e-mail n'est pas envoyé.

### En-têtes de sécurité

Configurés dans [`next.config.ts`](next.config.ts) : HSTS, X-Frame-Options, nosniff, Referrer-Policy, Permissions-Policy.

---

## 5. Architecture du projet

```
green-sensor/
├── app/                          # Routes Next.js (App Router)
│   ├── page.tsx                  # Page d'accueil (toutes les sections)
│   ├── faq/                      # FAQ complète
│   ├── documentation/            # Guide passerelle LoRa
│   ├── articles/                 # Hub articles + [slug]
│   ├── mentions-legales/         # Pages légales RGPD
│   ├── politique-confidentialite/
│   ├── cgu/
│   ├── api/send-demo-mail/       # API POST — envoi e-mail formulaire
│   └── sitemap.xml/              # Sitemap dynamique
│
├── components/                   # Composants React
│   ├── hero-section.tsx          # Sections de la home
│   ├── demo-form.tsx             # Formulaire de démo (logique métier packs IOTP)
│   ├── site-header.tsx           # Navigation + sélecteur langue
│   ├── site-footer.tsx
│   ├── articles/                 # Hub et détail articles
│   ├── faq/                      # Contenu FAQ page dédiée
│   ├── documentation/            # Contenu guide passerelle
│   ├── legal/                    # Contenu pages légales
│   └── ui/                       # Composants shadcn/ui (Button, Form, etc.)
│
├── i18n/
│   └── i18n-provider.tsx         # Traductions FR/EN/ES/DE/PT/RO (~1100 lignes)
│
├── lib/
│   ├── articles/
│   │   ├── articles-data.ts      # ⭐ Contenu des articles (à éditer pour en ajouter)
│   │   ├── registry.ts           # Fonctions de lecture articles
│   │   └── types.ts              # Types TypeScript articles
│   └── utils.ts                  # Utilitaires (cn, etc.)
│
├── public/                       # Assets statiques (images, robots.txt, llms.txt)
├── docs/                         # Documentation produit BMAD (PRD, backlog, kanban)
└── .env.example                  # Template variables d'environnement
```

### Pages et routes

| Route | Fichier | Description |
|-------|---------|-------------|
| `/` | `app/page.tsx` | Accueil : hero, features, run, key features, download, FAQ, doc, démo |
| `/faq` | `app/faq/page.tsx` | FAQ étendue |
| `/documentation` | `app/documentation/page.tsx` | Guide installation passerelle |
| `/articles` | `app/articles/page.tsx` | Liste des articles |
| `/articles/[slug]` | `app/articles/[slug]/page.tsx` | Détail article (SSG) |
| `/mentions-legales` | `app/mentions-legales/page.tsx` | Mentions légales |
| `/politique-confidentialite` | `app/politique-confidentialite/page.tsx` | RGPD |
| `/cgu` | `app/cgu/page.tsx` | Conditions générales |
| `/sitemap.xml` | `app/sitemap.xml/route.ts` | Sitemap XML |
| `POST /api/send-demo-mail` | `app/api/send-demo-mail/route.ts` | Envoi e-mail démo |

### Flux principal (visiteur → lead)

```
Visiteur → greensensor.fr
    → Parcourt le site (i18n via localStorage)
    → Remplit le formulaire démo (#demo)
    → POST /api/send-demo-mail
        → Validation Zod
        → Rate limiting (6 req / 10 min / IP)
        → Calcul config IOTP (références produit)
        → E-mail HTML → info@prosensor.com
    → Toast succès / erreur côté client
```

---

## 6. Guide de maintenance courante

### Modifier un texte du site (hors articles)

Les traductions sont centralisées dans **un seul fichier** :

```
i18n/i18n-provider.tsx
```

Structure : objet `fr`, `en`, `es`, `de`, `pt`, `ro` avec les clés `nav`, `hero`, `features`, `faq`, `demo`, `footer`, etc.

**Important :** toute modification de texte visible doit être répliquée dans **les 6 langues** (ou au minimum FR + EN si urgence, puis compléter).

### Ajouter un article SEO

1. Ouvrir [`lib/articles/types.ts`](lib/articles/types.ts) — ajouter le slug dans le type `ArticleSlug`
2. Ouvrir [`lib/articles/articles-data.ts`](lib/articles/articles-data.ts) — ajouter un objet `ArticleDefinition` avec :
   - `slug`, `publishedAt`, `readingMinutes`
   - `seo` et `body` par langue (minimum `fr` + `en`, idéalement les 6)
   - `relatedSlugs` pour les articles liés
3. Lancer `npm run build` — Next.js génère automatiquement la page statique
4. Le sitemap (`app/sitemap.ts`) se met à jour automatiquement via `getArticleList()`

Articles actuels :
- `mesurer-temperature-andain-compost`
- `compost-economie-circulaire-temperature`

### Modifier la FAQ

- **Section accueil** : clés `faq.items` dans `i18n/i18n-provider.tsx`
- **Page `/faq` complète** : [`components/faq/faq-page-content.tsx`](components/faq/faq-page-content.tsx) (contenu plus détaillé, par langue)

### Modifier le guide passerelle

Fichier : [`components/documentation/documentation-content.tsx`](components/documentation/documentation-content.tsx)

### Changer une image

Placer le fichier dans `public/` et mettre à jour la référence dans le composant concerné. Préférer `next/image` pour les images above-the-fold (hero).

Images clés :
- `public/sonde-sur-tas.jpg` — photo de la sonde plantée dans l'andain (section sonde de l'accueil)
- `public/GreenSensor_Logo_horiz.png` — logo
- `public/logo-greensensor-by-prosensor-white.png` — logo du header

### Modifier les pages légales

| Page | Fichier contenu |
|------|-----------------|
| Mentions légales | `i18n/legal-mentions.ts` (gabarit : `components/legal/legal-page.tsx`) |
| Politique confidentialité | `i18n/legal-privacy.ts` |
| CGU | `i18n/legal-cgu.ts` (identité éditeur / hébergeur : `i18n/legal-facts.ts`) |

---

## 7. Formulaire de démo et e-mails

### Champs du formulaire

| Champ | Description |
|-------|-------------|
| nom, email, telephone, entreprise | Coordonnées prospect |
| message | Optionnel |
| internet_site | Oui / Non — présence Internet sur site |
| achat_ou_location | Acheter / Louer |
| longueur_sondes | 1000 / 1500 / 2000 mm |
| type_pack | Pack 2 / Pack 3 / À l'unité |
| distance_passerelle | < ou > 2 km |

### Logique métier IOTP

Le formulaire calcule automatiquement une **proposition de configuration** avec les références produit Prosensor (IOTP0001 à IOTP0018). Cette logique est dupliquée côté :

- **Client** : [`components/demo-form.tsx`](components/demo-form.tsx) — aperçu pour le prospect
- **Serveur** : [`app/api/send-demo-mail/route.ts`](app/api/send-demo-mail/route.ts) — détail dans l'e-mail interne

Si vous modifiez les références produit, **mettre à jour les deux fichiers**.

### Configuration SMTP

```
Hôte   : mail81.lwspanel.com
Port   : 465 (SSL)
Expéditeur : contact@greensensor.fr
Destinataire : info@prosensor.com
Auth   : contact@greensensor.fr + MAIL_PASSWORD
```

### Rate limiting

- **6 requêtes max par IP** sur une fenêtre de **10 minutes**
- Implémentation en mémoire (`Map`) — sur Vercel serverless, le compteur peut se réinitialiser entre instances. Suffisant pour le spam basique ; pour une protection renforcée, migrer vers Redis ou Vercel KV.

---

## 8. Internationalisation (6 langues)

| Code | Langue |
|------|--------|
| `fr` | Français (défaut) |
| `en` | Anglais |
| `es` | Espagnol |
| `de` | Allemand |
| `pt` | Portugais |
| `ro` | Roumain |

**Mécanisme :**
- Sélecteur dans le header → `localStorage` (`language`) + cookie (`language`, 1 an)
- Hook `useI18n()` dans les composants client : `{ language, setLanguage, t }`
- Métadonnées SEO serveur : lecture du cookie `language` dans `generateMetadata()`

**Limitation connue :** les articles n'ont pas encore de contenu complet dans les 6 langues — fallback FR/EN via `resolveArticleBody()` dans `lib/articles/registry.ts`.

---

## 9. SEO et analytics

| Élément | Emplacement |
|---------|-------------|
| Métadonnées par langue | `generateMetadata()` dans chaque `page.tsx` |
| Open Graph / Twitter | Idem + `app/layout.tsx` (défaut FR) |
| Sitemap | `/sitemap.xml` (route dynamique) |
| robots.txt | `public/robots.txt` |
| llms.txt | `public/llms.txt` (infos pour LLM/crawlers IA) |
| Google Ads | Tag `AW-1068513425` dans `app/layout.tsx` |

---

## 10. Documentation produit (dossier `docs/`)

Documents BMAD générés pour cadrer le produit et le projet. **À lire en priorité pour comprendre la vision globale GreenSensor.**

| Fichier | Contenu |
|---------|---------|
| [`docs/PRD-GreenSensor-v1.0.md`](docs/PRD-GreenSensor-v1.0.md) | Product Requirements Document — objectifs, personas, features, critères d'acceptation |
| [`docs/Backlog-GreenSensor-v1.0.md`](docs/Backlog-GreenSensor-v1.0.md) | 25 user stories découpées en 5 epics |
| [`docs/Kanban-GreenSensor.md`](docs/Kanban-GreenSensor.md) | Suivi opérationnel — ce qui est fait / en cours / à faire |

---

## 11. Travaux restants et roadmap

État au **6 juillet 2026** (voir [`docs/Kanban-GreenSensor.md`](docs/Kanban-GreenSensor.md) pour le détail).

### Site vitrine — terminé ✓

Setup Next.js, design system, home complète, i18n 6 langues, FAQ, documentation passerelle, pages légales, formulaire démo + API mail, SEO/sitemap, hub articles (2 articles), déploiement Vercel.

### Site vitrine — à faire (priorité)

| ID | Tâche |
|----|-------|
| Web-14 | Page gammes produit (sondes, packs, options 4G) |
| Web-15 | Optimiser Core Web Vitals (LCP images hero) |
| Web-16 | Enrichir formulaire démo (déjà partiellement fait — vérifier parité client/serveur) |
| Web-17 | Tracking conversion (événements CTA → démo) |
| Web-18 | Revue accessibilité (contraste, focus, aria) |

### Hors périmètre site (autres projets Prosensor)

- **App iOS** GreenSensor (8 stories — connexion, campagnes, alertes push…)
- **Outils internes** (back-office leads, CMS produits, éditeur articles sans déploiement)
- **Plateforme cloud** (export CSV, multi-sites, rapport PDF)

---

## 12. Dépannage fréquent

### Le formulaire renvoie « Erreur lors de l'envoi du mail »

1. Vérifier que `MAIL_PASSWORD` est définie (Vercel ou `.env.local`)
2. Tester les identifiants SMTP LWS (`contact@greensensor.fr`)
3. Consulter les logs Vercel → Functions → `send-demo-mail`

### Les traductions ne changent pas

1. Vider le `localStorage` du navigateur (clé `language`)
2. Vérifier que la clé existe dans **toutes** les langues dans `i18n-provider.tsx`

### Build échoue après ajout d'article

1. Vérifier que le slug est ajouté dans `lib/articles/types.ts`
2. Vérifier que `body.fr` et `body.en` existent minimum
3. Lancer `npm run build` localement pour voir l'erreur TypeScript

### Image hero lente (LCP)

Optimiser les images lourdes de `public/` (WebP, dimensions adaptées), en priorité `visu.jpg` et `faq.jpg` — voir Web-15.

### `npm run dev` — port déjà utilisé

```bash
npm run dev -- -p 3001
```

---

## 13. Contacts et accès utiles

| Ressource | Détail |
|-----------|--------|
| Site production | [https://greensensor.fr](https://greensensor.fr) |
| Plateforme client | [https://greensensor.prosensor.fr](https://greensensor.prosensor.fr/) |
| GitHub | [https://github.com/Prosensor/GreenSensor](https://github.com/Prosensor/GreenSensor) |
| E-mail leads | info@prosensor.com |
| E-mail expéditeur site | contact@greensensor.fr |
| Siège Prosensor | 5 rue Maud Fontenoy, 57140 Norroy-le-Veneur |
| Site corporate | [prosensor.com](https://prosensor.com) |

### Checklist reprise pour un nouveau développeur

- [ ] Accès GitHub `Prosensor/GreenSensor` (write)
- [ ] Accès dashboard Vercel (projet greensensor.fr)
- [ ] Mot de passe SMTP `contact@greensensor.fr` (LWS)
- [ ] Lire ce README + `docs/PRD-GreenSensor-v1.0.md`
- [ ] Cloner, `npm install`, copier `.env.example` → `.env.local`
- [ ] `npm run dev` → tester changement de langue + formulaire démo
- [ ] `npm run build` → vérifier que le build passe

---

*Documentation rédigée pour la passation de projet — GreenSensor / Prosensor — juillet 2026.*

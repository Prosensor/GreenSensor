# Backlog — GreenSensor (Prosensor)

> **Document généré** — Étape 4.1 BMAD · Mode Scrum Master  
> Backlog de stories détaillées, généré à partir du PRD v1.0 et de l'architecture technique.

─────────────────────────────

**Projet :** GreenSensor — Site vitrine & écosystème produit  
**Version :** 1.0  
**Date :** 19 mai 2026  
**Référence PRD :** PRD-GreenSensor-v1.0 · **Référence Architecture :** Architecture GreenSensor v1.0 (Next.js 15, API Route, i18n, LoRa → cloud Prosensor)

─────────────────────────────

## Légende

| Champ | Description |
|-------|-------------|
| **ID** | Identifiant unique de la story |
| **Priorité** | P0 (critique) · P1 · P2 · P3 |
| **Points** | Estimation Fibonacci (1, 2, 3, 5, 8, 13) |
| **Sprint** | Sprint cible ou « Backlog » |

---

## EPIC 1 — Site vitrine & conversion (dépôt `green-sensor`)

> **Objectif epic :** Permettre à un prospect (persona Lucas) de comprendre l'offre GreenSensor et de demander une démo en moins de 3 minutes de navigation.

| ID | Story | Critères d'acceptation | Priorité | Points | Sprint |
|----|-------|------------------------|----------|--------|--------|
| **US-1.1** | En tant que **prospect**, je veux **voir une page d'accueil claire** (hero, valeur produit, CTA) afin de **comprendre immédiatement ce qu'est GreenSensor**. | • Hero avec titre, sous-titre, chips (mesure, alertes, géolocalisation andains) et bouton « Demander une présentation » • Scroll fluide vers la section démo • Design responsive mobile / desktop | P0 | 5 | Sprint 1 |
| **US-1.2** | En tant que **prospect**, je veux **parcourir les sections fonctionnalités, analyse et production** afin d'**évaluer l'adéquation avec mon site de compostage**. | • Sections Features, Key Features, Run, Download présentes sur `/` • Contenu aligné PRD (±0,5 °C, alertes SMS/e-mail, rapports) • CTA répétés vers `#demo` | P0 | 5 | Sprint 1 |
| **US-1.3** | En tant que **prospect**, je veux **remplir un formulaire de demande de présentation** afin que **Prosensor me recontacte**. | • Champs : nom, e-mail, téléphone, entreprise, message optionnel • Validation Zod côté client et serveur • E-mail notification envoyé via API `send-demo-mail` • Message succès / erreur explicite (AC5 PRD) | P0 | 8 | Sprint 1 |
| **US-1.4** | En tant que **prospect**, je veux **accéder aux coordonnées Prosensor** (siège, téléphone, e-mail) afin de **contacter l'équipe sans formulaire**. | • Section démo avec adresse EcoParc Norroy-le-Veneur • Liens `tel:` et `mailto:` fonctionnels | P1 | 2 | Sprint 1 |
| **US-1.5** | En tant que **visiteur**, je veux **une navigation fixe et un pied de page complets** afin de **retrouver toutes les pages du site**. | • Header : accueil, fonctionnalités, FAQ, documentation, articles, contact • Footer : liens utiles, mentions, confidentialité, CGU, lien prosensor.com | P1 | 3 | Sprint 2 |

---

## EPIC 2 — Internationalisation, légal & SEO

> **Objectif epic :** Rendre le site accessible en 6 langues et conforme RGPD, avec une visibilité moteurs de recherche optimisée.

| ID | Story | Critères d'acceptation | Priorité | Points | Sprint |
|----|-------|------------------------|----------|--------|--------|
| **US-2.1** | En tant que **visiteur international**, je veux **changer la langue du site** (FR, EN, ES, DE, PT, RO) afin de **lire le contenu dans ma langue**. | • Sélecteur de langue persistant (cookie) • Toutes les sections marketing et formulaire traduits via `i18n-provider` • Pas de mélange de langues sur une même page (AC6 PRD) | P0 | 8 | Sprint 2 |
| **US-2.2** | En tant que **responsable conformité**, je veux **des pages légales dédiées** afin de **respecter les obligations d'information**. | • Routes `/mentions-legales`, `/politique-confidentialite`, `/cgu` • Contenu FR + traductions pour les langues actives • Liens depuis le footer | P0 | 5 | Sprint 2 |
| **US-2.3** | En tant que **responsable marketing**, je veux **des métadonnées SEO par langue** afin d'**améliorer le référencement naturel**. | • `generateMetadata` sur la home avec titre / description par langue • Open Graph et Twitter cards • `canonical` et `hreflang` vers greensensor.fr | P1 | 5 | Sprint 2 |
| **US-2.4** | En tant que **moteur de recherche**, je veux **un sitemap à jour** afin d'**indexer toutes les URLs publiques**. | • Route `/sitemap.xml` incluant home, FAQ, documentation, articles, pages légales • URLs HTTPS correctes | P1 | 2 | Sprint 2 |
| **US-2.5** | En tant que **équipe Prosensor**, je veux **limiter le spam sur le formulaire démo** afin de **protéger la boîte mail**. | • Rate limiting par IP sur l'API (fenêtre 10 min, max 6 requêtes) • Rejet des payloads invalides avec code HTTP explicite | P1 | 3 | Sprint 2 |

---

## EPIC 3 — Contenu d'aide, FAQ & articles

> **Objectif epic :** Réduire les sollicitations support N1 et renforcer le référencement éditorial sur le compostage connecté.

| ID | Story | Critères d'acceptation | Priorité | Points | Sprint |
|----|-------|------------------------|----------|--------|--------|
| **US-3.1** | En tant que **prospect ou client**, je veux **consulter une FAQ détaillée** afin de **répondre à mes questions produit sans appeler le support**. | • Page `/faq` + section FAQ sur la home • Questions : capteurs (2/sonde), commentaires sur points, changement de sonde en campagne, routeurs, piles, prix dégressifs | P0 | 5 | Sprint 3 |
| **US-3.2** | En tant que **nouveau client**, je veux **un guide d'installation de la passerelle LoRa** afin d'**être autonome jusqu'au voyant SYS vert** (AC4 PRD). | • Page `/documentation` multilingue • Étapes : branchement Ethernet / Wi-Fi / 4G, WebUI, dépannage Basic Station, coche LoRa verte | P0 | 8 | Sprint 3 |
| **US-3.3** | En tant que **lecteur**, je veux **parcourir un hub d'articles** afin de **approfondir le compostage connecté et le pilotage de production**. | • Liste `/articles` avec titre, extrait, date, temps de lecture • Compteur d'articles • État vide géré | P1 | 5 | Sprint 3 |
| **US-3.4** | En tant que **lecteur**, je veux **lire un article en détail** afin d'**obtenir un contenu structuré et partageable**. | • Route `/articles/[slug]` • Affichage titre, date, contenu, articles liés, retour liste (AC7 PRD) • Registry typé (`lib/articles`) | P1 | 5 | Sprint 3 |
| **US-3.5** | En tant que **équipe contenu**, je veux **ajouter des articles sans modifier le routing** afin de **publier régulièrement du SEO**. | • Données centralisées dans `articles-data.ts` + `registry.ts` • Slug unique, métadonnées par langue si applicable | P2 | 3 | Backlog |

---

## EPIC 4 — Plateforme cloud GreenSensor (hors dépôt site)

> **Objectif epic :** Permettre aux exploitants (Marc, Sophie) de piloter campagnes, alertes et traçabilité — périmètre plateforme Prosensor existante / évolutions.

| ID | Story | Critères d'acceptation | Priorité | Points | Sprint |
|----|-------|------------------------|----------|--------|--------|
| **US-4.1** | En tant qu'**exploitant**, je veux **créer une campagne et affecter des sondes à des andains** afin de **démarrer le suivi d'un lot**. | • Création campagne fermentation / maturation • Affectation sonde ↔ andain • Premières mesures visibles < 5 min (AC1 PRD) | P0 | 13 | Backlog |
| **US-4.2** | En tant qu'**exploitant**, je veux **configurer des seuils de température** afin de **recevoir des alertes avant dérive du lot**. | • Seuils par étape de production • Notification SMS ou e-mail < 2 min (AC2 PRD) | P0 | 8 | Backlog |
| **US-4.3** | En tant qu'**exploitant**, je veux **commenter des points de données** afin de **documenter des événements terrain** sur les courbes. | • Espace commentaire sur point de mesure • Horodatage et auteur | P1 | 5 | Backlog |
| **US-4.4** | En tant qu'**exploitant**, je veux **remplacer une sonde en cours de campagne** afin de **ne pas interrompre la traçabilité**. | • Historique conservé • Nouvelle sonde identifiée sur le lot (AC8 PRD) | P1 | 8 | Backlog |
| **US-4.5** | En tant que **responsable qualité**, je veux **exporter les données et imprimer un rapport de campagne** afin de **justifier la conformité sanitaire**. | • Export CSV (ou format défini) avec métadonnées campagne (AC3 PRD) • Impression rapport | P1 | 8 | Backlog |
| **US-4.6** | En tant que **directrice multi-sites**, je veux **gérer plusieurs plateformes sous un compte** afin de **centraliser le pilotage**. | • Multi-sites géographiques • Max. 5 routeurs par compte utilisateur • Pas de plafond sondes par routeur | P2 | 13 | Backlog |

---

## EPIC 5 — Matériel & connectivité IoT

> **Objectif epic :** Garantir la remontée fiable des mesures sonde → passerelle → cloud (≥ 98 % disponibilité KPI PRD).

| ID | Story | Critères d'acceptation | Priorité | Points | Sprint |
|----|-------|------------------------|----------|--------|--------|
| **US-5.1** | En tant qu'**exploitant**, je veux **que mes sondes transmettent en LoRa vers la passerelle** afin d'**éviter les relevés manuels**. | • Portée ~2 km champ libre • Multi-sondes sans limite par routeur • 2 capteurs par sonde | P0 | 13 | Backlog |
| **US-5.2** | En tant qu'**exploitant sans box sur site**, je veux **une option passerelle 4G Prosensor** afin de **connecter le site à GreenSensor**. | • Procédure fournie par Prosensor • Remontée données une fois SYS vert | P1 | 8 | Backlog |
| **US-5.3** | En tant qu'**exploitant**, je veux **dépanner une passerelle hors ligne** via la WebUI afin de **rétablir la coche LoRa verte**. | • Accès Basic Station depuis WebUI • Logo LoRa vert après correction • Données qui reprennent | P1 | 5 | Backlog |
| **US-5.4** | En tant qu'**exploitant**, je veux **planifier la maintenance batterie sonde** afin de **garantir 4 ans d'autonomie**. | • Forfait révision 80 € (pile + contrôle + transport) documenté en FAQ • Rappel ou procédure contact Prosensor | P2 | 3 | Backlog |

---

## Tâches techniques transverses

| ID | Tâche | Liée à | Priorité | Points |
|----|-------|--------|----------|--------|
| **TECH-1** | Initialiser le projet Next.js 15 (App Router), Tailwind, shadcn/ui, structure `app/` + `components/` | US-1.1 | P0 | 5 |
| **TECH-2** | Mettre en place `I18nProvider` et cookie `language` pour 6 langues | US-2.1 | P0 | 5 |
| **TECH-3** | Configurer variables d'environnement SMTP (`nodemailer`) pour l'API démo | US-1.3 | P0 | 2 |
| **TECH-4** | Déployer sur Vercel (ou équivalent) avec domaine greensensor.fr et SSL | US-2.3 | P0 | 3 |
| **TECH-5** | Animations sections (`framer-motion`, `AnimatedSection`) pour UX marketing | US-1.2 | P2 | 3 |
| **TECH-6** | Linter TypeScript + revue PR avant merge (DoD) | Toutes | P1 | 2 |

---

## Dépendances entre stories

| Story | Dépend de | Commentaire |
|-------|-----------|-------------|
| US-1.3 | TECH-3 | API e-mail opérationnelle avant tests formulaire |
| US-1.5 | US-1.1, US-2.1 | Navigation complète une fois pages et i18n en place |
| US-2.3 | US-2.1 | Métadonnées SEO nécessitent les traductions |
| US-3.4 | US-3.3 | Détail article après hub liste |
| US-4.2 | US-4.1 | Alertes après création campagne |
| US-4.4 | US-4.1 | Remplacement sonde sur campagne existante |
| US-5.2 | US-5.1 | Option 4G si pas de connectivité locale |

---

## Definition of Done (DoD)

- [ ] Code revu et mergé sur la branche principale
- [ ] Critères d'acceptation validés (test manuel ou checklist)
- [ ] Formulaire et API démo testés en environnement de staging
- [ ] Traductions vérifiées pour les langues livrées
- [ ] Pas de régression visible sur mobile et desktop
- [ ] Déployable en production (build Next.js OK)

---

## Synthèse backlog

| Epic | Nb stories | Points total |
|------|------------|--------------|
| Epic 1 — Site vitrine & conversion | 5 | 23 |
| Epic 2 — i18n, légal & SEO | 5 | 23 |
| Epic 3 — FAQ, doc & articles | 5 | 26 |
| Epic 4 — Plateforme cloud | 6 | 55 |
| Epic 5 — Matériel & IoT | 4 | 29 |
| Tâches techniques | 6 | 20 |
| **Total stories produit** | **25** | **156** |
| **Total avec TECH** | **31** | **176** |

### Répartition par sprint (site vitrine — périmètre `green-sensor`)

| Sprint | Stories | Points |
|--------|---------|--------|
| Sprint 1 | US-1.1 à US-1.4, TECH-1, TECH-3 | ~25 |
| Sprint 2 | US-1.5, US-2.1 à US-2.5, TECH-2, TECH-4 | ~28 |
| Sprint 3 | US-3.1 à US-3.4 | ~23 |
| Backlog | US-3.5, Epic 4 & 5 (plateforme / IoT) | ~113 |

---

*Fin du document — Backlog GreenSensor v1.0*

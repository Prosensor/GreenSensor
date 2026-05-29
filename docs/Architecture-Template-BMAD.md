# Architecture Template (généré par BMAD)

> Première ébauche — Mode Architect  
> À compléter à partir du PRD et des contraintes techniques identifiées.

─────────────────────────────

**Projet :** [Nom du projet]  
**Version :** 1.0  
**Date :** [Date]  
**Référence PRD :** [Version / lien]

─────────────────────────────

## 1. VUE D'ENSEMBLE

- **Contexte système :** ...
- **Périmètre :** ...
- **Objectifs architecturaux :** ...

## 2. DIAGRAMME DE CONTEXTE (C4 — Niveau 1)

```
[Utilisateur] ──► [Système principal] ──► [Système externe 1]
                         │
                         └──► [Système externe 2]
```

- **Acteurs :** ...
- **Systèmes externes :** ...

## 3. STACK TECHNIQUE

| Couche | Technologie | Justification |
|--------|-------------|---------------|
| Frontend | ... | ... |
| Backend / API | ... | ... |
| Données | ... | ... |
| Infra / Hébergement | ... | ... |
| Outils / CI | ... | ... |

## 4. COMPOSANTS PRINCIPAUX

- **Composant 1 :** [Rôle] — Responsabilités : ...
- **Composant 2 :** [Rôle] — Responsabilités : ...
- **Composant 3 :** [Rôle] — Responsabilités : ...

## 5. FLUX DE DONNÉES

- **Flux 1 :** [Source] → [Traitement] → [Destination] — [Description].
- **Flux 2 :** ...

## 6. INTÉGRATIONS & APIS

- **API / Service 1 :** [Endpoint ou protocole] — Usage : ...
- **API / Service 2 :** ...

## 7. MODÈLE DE DONNÉES (APERÇU)

- **Entité 1 :** [Champs clés] — Relations : ...
- **Entité 2 :** ...

## 8. SÉCURITÉ & CONFORMITÉ

- **Authentification / Autorisation :** ...
- **Données sensibles :** ...
- **Conformité (RGPD, etc.) :** ...

## 9. DÉPLOIEMENT & EXPLOITATION

- **Environnements :** dev / staging / prod — ...
- **Hébergement :** ...
- **Monitoring / Logs :** ...

## 10. DÉCISIONS ARCHITECTURALES (ADR)

| ID | Décision | Alternatives envisagées | Choix retenu |
|----|----------|-------------------------|--------------|
| ADR-1 | ... | ... | ... |
| ADR-2 | ... | ... | ... |

## 11. CONTRAINTES & RISQUES TECHNIQUES

- **Contrainte 1 :** ...
- **Risque technique 1 :** [Description] → [Mitigation].

─────────────────────────────

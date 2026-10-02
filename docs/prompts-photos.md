# Prompts photos pour Gemini — Atelier Baujard

Ce fichier contient un prompt par emplacement photo du site. Les prompts sont en anglais, car Gemini suit mieux les consignes de photographie dans cette langue.

## Avant de commencer

**Ce que l'IA peut faire ici, et ce qu'elle ne doit pas faire.**
Les photos générées conviennent très bien pour l'ambiance : la photo d'accueil, l'atelier, les matières, les photos de couverture du journal. En revanche, la galerie « Créations » et les pages « La mariée », « Le cortège » et « Ennoblissement » disent « pièces réalisées par l'atelier ». Y mettre des robes imaginées par une IA serait trompeur pour les clientes, qui jugent sur ces images. Pour ces emplacements, utilisez de vraies photos des pièces de l'atelier (celles d'Instagram, ou une séance photo). Les prompts `creation-*` ci-dessous servent à avoir de belles images provisoires pendant la construction du site : à remplacer avant la mise en ligne.

**Réglages Gemini**
- Modèle d'image le plus qualitatif disponible (Nano Banana Pro / Gemini 3 Pro Image à la date de rédaction), en demandant la résolution la plus haute proposée.
- Préciser le **format** dans le prompt ou dans l'interface. Formats proposés : 1:1, 3:2, 2:3, 3:4, 4:3, 4:5, 5:4, 9:16, 16:9, 21:9.
- Générer 3 à 4 variantes de chaque prompt, puis garder la meilleure et la retoucher par petites instructions successives (« même image, mais lumière plus douce », « enlève le collier »).
- Pour garder la **même mariée et les mêmes tenues** d'une image à l'autre, donner à Gemini une image de référence déjà validée et écrire « same woman and same dress as the reference image ».
- Éviter les visages en gros plan (rendu parfois irréel). Les prompts privilégient dos, profil, détails et visages coupés.

**Ce qu'il faut vérifier sur chaque image générée**
- Mains : 5 doigts, pas de déformation.
- Dentelle et broderie : motifs cohérents, sans zones qui fondent.
- Aucun texte, logo ou filigrane inventé.
- Robe plausible à coudre : bretelles, coutures, fermeture au dos cohérentes.

**Après génération**
1. Exporter en JPG ou WebP, 1200 à 1600 px de large, moins de 300 Ko (squoosh.app).
2. Nommer le fichier comme l'emplacement (`hero.jpg`, `atelier.jpg`…) et le placer dans `assets/img/`.
3. Suivre l'étape « Remplacer les photos » du README.
4. Pour les images IA, une mention discrète dans les mentions légales (« Certaines images d'ambiance sont générées par IA ») est une bonne pratique de transparence.

---

## Bloc de style commun (à coller au début de chaque prompt)

```
Quiet-luxury editorial wedding photography. Soft diffused natural daylight from a large window, no harsh shadows. Palette: warm ivory, soft white, muted blush, faint touches of deep burgundy (#6b1f3a). Real fabric texture, natural folds, subtle film grain. Shot on a full-frame camera, 85mm lens at f/1.8, shallow depth of field. Minimal, calm composition with generous negative space. Photorealistic. No text, no logo, no watermark.
```

---

## Accueil et atelier

### `hero.jpg` — format 4:5 vertical (photo d'accueil)
```
[BLOC DE STYLE] A bride photographed from behind and slightly to the side, standing in a high-ceilinged Parisian apartment with tall windows and herringbone parquet. She wears a bespoke ivory silk-crepe wedding gown with a delicate hand-embroidered low back and a long soft train. Her face is not visible. One hand rests lightly on a folding wooden fan. Warm morning light, quiet and intimate mood. Vertical 4:5.
```

### `atelier.jpg` — format 4:5 vertical (page « L'atelier »)
```
[BLOC DE STYLE] Interior of a small Parisian couture atelier: a wooden worktable covered with ivory silk, a pair of shears, tailor's chalk and a tape measure, a dress form wearing a muslin toile pinned at the waist, spools of thread on a wall rack, soft light from a tall window. No people visible. Calm, orderly, lived-in. Vertical 4:5.
```

---

## Les trois offres (pages d'accueil et services)

> Pour ces trois images, préférez de vraies photos dès que possible.

### `mariee.jpg` — format 3:4 vertical
```
[BLOC DE STYLE] Detail of a bride in a bespoke ivory wedding dress, framed from the neck to the waist, face cropped out. Sheer sleeves in silk organza, fine pearl buttons down the back, a hint of embroidered lace at the neckline. Neutral plaster wall in the background. Vertical 3:4.
```

### `cortege.jpg` — format 3:4 vertical
```
[BLOC DE STYLE] Three bridesmaids seen from behind walking side by side down a quiet corridor, each in a different cut of the same dusty-rose silk fabric (one bias-cut slip dress, one dress with puffed sleeves, one wrap dress), faces not visible. Natural light, relaxed and elegant. Vertical 3:4.
```

### `ennoblissement.jpg` — format 3:4 vertical
```
[BLOC DE STYLE] Extreme close-up of hand embroidery in progress on ivory tulle: tiny pearls and sequins forming a floral motif, a needle with thread, a woman's hands holding the fabric in a small embroidery hoop. Very shallow depth of field, tactile and precise. Vertical 3:4.
```

---

## Galerie « Créations » (provisoire, à remplacer par de vraies photos)

Les 8 images doivent partager la même lumière et la même palette. Générer d'abord `creation-01`, la valider, puis l'utiliser comme référence pour les suivantes.

### `creation-01.jpg` — 3:4
```
[BLOC DE STYLE] Full-length bride standing in front of a pale stone wall, wearing a minimalist bespoke ivory satin gown with a clean square neckline and a softly flaring skirt. Face turned away from the camera. Vertical 3:4.
```

### `creation-02.jpg` — 3:4
```
[BLOC DE STYLE] Back view of a wedding dress with a deep V back edged with hand-embroidered lace and a row of covered buttons, bride's hair in a low chignon, soft window light. Vertical 3:4.
```

### `creation-03.jpg` — 3:4
```
[BLOC DE STYLE] A bridesmaid in a sage-green silk dress with a bias cut, seen from the side while holding a small bouquet of white anemones, face cropped at the chin. Vertical 3:4.
```

### `creation-04.jpg` — 3:4
```
[BLOC DE STYLE] Flat close-up of ivory tulle with delicate hand embroidery of leaves and tiny pearls, laid on a wooden table, soft side light revealing the relief. Vertical 3:4.
```

### `creation-05.jpg` — 3:4
```
[BLOC DE STYLE] A bride in motion, the long skirt of her bespoke gown lifted by the wind in a sunlit garden path, motion blur on the fabric only, face not visible. Vertical 3:4.
```

### `creation-06.jpg` — 3:4
```
[BLOC DE STYLE] Two flower girls and two bridesmaids seen from behind on a staircase, all in coordinated champagne tulle and silk outfits of different cuts, faces not visible. Vertical 3:4.
```

### `creation-07.jpg` — 3:4
```
[BLOC DE STYLE] Close-up of a veil edge with hand-sewn pearl beading, held between two hands, shallow depth of field, ivory on soft grey background. Vertical 3:4.
```

### `creation-08.jpg` — 3:4
```
[BLOC DE STYLE] A vintage family wedding dress in aged ivory lace on a mannequin, partly restored with a new embroidered panel at the shoulder, on a plain linen backdrop. Vertical 3:4.
```

---

## Journal

### `journal-saison.jpg` — format 4:3 horizontal
```
[BLOC DE STYLE] The door of a small Parisian atelier ajar with a sign-less glass window, a pale rose bouquet on a table inside, a dress on a form in soft focus, invitation to enter. No text. Landscape 4:3.
```

### `journal-dentelle.jpg` — format 4:3 horizontal
```
[BLOC DE STYLE] Overhead view of four different lace swatches (fine Calais lace, floral Chantilly, dense guipure, plain tulle) laid on a linen cloth with scissors and a measuring tape, soft top light. Landscape 4:3.
```

### `journal-cortege.jpg` — format 4:3 horizontal
```
[BLOC DE STYLE] Fabric swatches in dusty rose, sage, champagne and ivory arranged on a table beside colored thread spools and a sketchbook showing blurry dress outlines, soft daylight. No legible text. Landscape 4:3.
```

---

## Partage sur les réseaux

### `og-image.jpg` — format 16:9 puis recadré en 1200 × 630
```
[BLOC DE STYLE] Wide, minimal composition: a bespoke ivory wedding gown on a dress form in a bright atelier, right two-thirds of the frame empty plain wall (space for a logo added later). Landscape 16:9.
```

---

## Si vous voulez de vraies photos libres de droits

Pour des images d'ambiance (matières, mains qui cousent, tissus), des banques d'images gratuites comme Unsplash et Pexels proposent des photos utilisables commercialement. Vérifier la licence de chaque image avant de l'utiliser, et ne pas y chercher de robes de créateurs : ce seraient les créations de quelqu'un d'autre.

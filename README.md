# Atelier Baujard — site (version épurée)

Site 100 % statique (HTML, CSS, un peu de JavaScript), sans build. Hébergement gratuit possible sur GitHub Pages.

## Pages
Accueil · Mariée · Cortège · Ennoblissement (avec curseur avant/après) · Créations · L'atelier · **Mon projet** (parcours guidé en 3 étapes : date, pour qui, ambiance, puis calendrier) · Rendez-vous · Journal (3 articles) · Mentions légales · 404.

## Voir en local
Ouvrir `index.html`, ou depuis ce dossier : `py -m http.server 8000` puis http://localhost:8000

## À remplacer avant la mise en ligne
| Quoi | Où |
|---|---|
| E-mail de l'atelier, Instagram, service de formulaires | `assets/js/config.js` |
| Délais du calendrier (valeurs d'exemple) | `assets/js/config.js`, section `planning` |
| Domaine `https://VOTRE-DOMAINE.fr` | toutes les pages, `sitemap.xml`, `robots.txt` |
| Photos avant/après | `assets/img/ennoblissement-avant.jpg` et `-apres.jpg` (même cadrage, 4:3) |
| Photos générées par IA → vraies photos de l'atelier | `assets/img/` (voir `docs/prompts-photos.md`) |
| Mentions légales | `mentions-legales.html` |

Remplacer le domaine d'un coup (PowerShell) :
```powershell
Get-ChildItem -Recurse -Include *.html,*.xml,*.txt | ForEach-Object {
  (Get-Content $_ -Raw) -replace 'https://VOTRE-DOMAINE.fr','https://www.atelierbaujard.fr' | Set-Content $_ -NoNewline -Encoding utf8
}
```

## Mise en ligne (GitHub Pages)
```powershell
git init -b main
git add .
git commit -m "Site Atelier Baujard"
git remote add origin https://github.com/VOTRE-COMPTE/atelier-baujard.git
git push -u origin main
```
Puis sur GitHub : Settings > Pages > Source « Deploy from a branch », branche `main`, dossier `/ (root)`. Domaine perso : Settings > Pages > Custom domain, puis enregistrements DNS chez le registrar.

## Formulaires
Sans configuration, le formulaire ouvre la messagerie du visiteur. Recommandé : créer un formulaire gratuit (Formspree, Web3Forms) et coller son URL dans `formEndpoint` de `config.js`.

## Couleurs et polices
Variables en haut de `assets/css/style.css`. Mode sombre automatique.

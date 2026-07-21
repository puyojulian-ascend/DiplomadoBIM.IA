# Diplomado BIM + IA — Presentaciones

Sitio de presentaciones del curso **BIM + Inteligencia Artificial** (Ascend · IDU).
Un motor compartido convierte archivos **Markdown** (uno por sesión) en decks
navegables, con un diseño único para todas las sesiones. Sin build, sin framework.

**Sitio en vivo:** https://puyojulian-ascend.github.io/DiplomadoBIM.IA/

## Estructura del repositorio

```
site/            El sitio (lo que se publica en GitHub Pages)
  index.html       Portada + índice de las 12 sesiones
  deck.html        Reproductor de un deck
  assets/          Motor: deck.css, deck.js + librerías (marked, mermaid)
  sessions/        Un .md por sesión + manifest.json
  README.md        Guía completa para crear y editar sesiones
.github/workflows/deploy.yml   Despliegue automático a GitHub Pages
```

Los documentos de planificación del curso (syllabus, plan de estudios y el patrón
de plantilla) se conservan en la raíz como material de referencia.

## Cómo editar contenido

Toda la creación de contenido ocurre en `site/sessions/*.md` (Markdown híbrido).
No hace falta tocar HTML, CSS ni JavaScript. **Guía paso a paso:**
[`site/README.md`](site/README.md).

## Ver el sitio localmente

```bash
cd site
npx serve      # o: python -m http.server 8000
```

Luego abrí la dirección que indique. (Hace falta un servidor: el navegador bloquea
la carga de `.md` sobre `file://`.)

## Despliegue

Cada push a `main` publica `site/` automáticamente vía GitHub Pages
(ver `.github/workflows/deploy.yml`). Requiere activar una vez, en el repositorio,
**Settings → Pages → Source: GitHub Actions**.

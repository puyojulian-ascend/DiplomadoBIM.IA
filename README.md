# Diplomado BIM + IA — Presentaciones

Sitio de presentaciones del curso **BIM + Inteligencia Artificial** (Ascend · IDU).
Un motor compartido convierte archivos **Markdown** (uno por sesión) en decks
navegables, con un diseño único para todas las sesiones. Sin build, sin framework.

**Sitio en vivo:** https://puyojulian-ascend.github.io/DiplomadoBIM.IA/

## Estructura del repositorio

```
docs/            El sitio (lo que publica GitHub Pages)
  index.html       Portada + índice de las 12 sesiones
  deck.html        Reproductor de un deck
  assets/          Motor: deck.css, deck.js + librerías (marked, mermaid)
  sessions/        Un .md por sesión + manifest.json
  README.md        Guía completa para crear y editar sesiones
```

> La carpeta se llama `docs/` porque GitHub Pages puede publicar directamente esa
> carpeta desde la rama `main`, sin necesidad de un flujo de CI.

Los documentos de planificación del curso (syllabus, plan de estudios y el patrón
de plantilla) se conservan en la raíz como material de referencia.

## Cómo crear el contenido de las sesiones

Toda la creación de contenido ocurre en `docs/sessions/*.md` (Markdown).
No hace falta tocar HTML, CSS ni JavaScript.

- 📘 **Guía para autores (técnicos y no técnicos):** [`docs/GUIA-CONTENIDOS.md`](docs/GUIA-CONTENIDOS.md)
- 📄 **Plantilla lista para copiar:** [`docs/sessions/_plantilla.md`](docs/sessions/_plantilla.md)
- 🔧 **Referencia técnica del motor:** [`docs/README.md`](docs/README.md)

## Ver el sitio localmente

```bash
cd docs
npx serve      # o: python -m http.server 8000
```

Luego abrí la dirección que indique. (Hace falta un servidor: el navegador bloquea
la carga de `.md` sobre `file://`.)

## Publicar en GitHub Pages (una sola vez)

1. En el repositorio: **Settings → Pages**.
2. **Build and deployment → Source:** *Deploy from a branch*.
3. **Branch:** `main` · **Folder:** `/docs` · **Save**.

En ~1 minuto el sitio queda publicado en la URL de arriba. Después, **cada push a
`main` que toque `docs/` se publica solo** — no hace falta ningún workflow ni permiso
especial de Actions.

> El archivo `docs/.nojekyll` desactiva el procesamiento Jekyll para que los archivos
> se sirvan tal cual.

### Alternativa: Vercel

El repo también trae `docs/vercel.json`. En Vercel: *Import Project* → **Root
Directory = `docs`** → *Deploy*. Útil si el repositorio es privado (Pages en plan
gratuito requiere repositorio público).

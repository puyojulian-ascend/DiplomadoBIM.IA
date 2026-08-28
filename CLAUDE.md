# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Qué es este repositorio

Sitio estático de presentaciones del curso **BIM + IA** (Ascend · IDU). No hay build, no hay
framework, no hay dependencias instalables: `docs/` se sirve tal cual (GitHub Pages desde
`main` + carpeta `/docs`, o Vercel con Root Directory = `docs`).

**El contenido se escribe en Markdown**; el HTML/CSS/JS es un motor compartido que casi nunca
se toca. Antes de proponer cambios de código, verificá si lo pedido se resuelve editando un
`.md` o el `manifest.json`.

El registro del español **no es uniforme y la diferencia es deliberada**:

- **Voseo rioplatense** — READMEs, `GUIA-CONTENIDOS.md`, comentarios de código, mensajes de commit.
- **Español neutro, sin voseo** — el contenido de las sesiones **02, 04, 06, 08 y 09**, sus
  talleres y sus fichas. Es una regla explícita de `docs/HILO-NARRATIVO.md` §8, que además trae
  el `grep` de verificación (debe dar cero coincidencias). El público es bogotano y la entidad
  es pública.

Antes de escribir en un archivo, mirá cuál de los dos registros le corresponde.

## Comandos

No hay tests, lint ni build. El único flujo local es servir `docs/` — el navegador bloquea
`fetch` de `.md` sobre `file://`, así que abrir el HTML con doble clic **no funciona**:

```bash
cd docs && npx serve          # o: python -m http.server 8000
```

Rutas útiles al verificar un cambio:

- `index.html` — índice de las 12 sesiones
- `deck.html#s=<slug>` — un deck (p. ej. `#s=02-comunicacion-agentes`)
- `deck.html#s=<slug>&preview=1` — ver una sesión bloqueada (`estado` ≠ `"listo"`)
- `deck.html#s=<slug>&n=7` — abrir en la diapositiva 7
- `doc.html` — índice de recursos · `doc.html#d=<ruta sin .md>` — un recurso

## Arquitectura

Dos reproductores independientes leen dos manifiestos y renderizan Markdown en el cliente:

| Reproductor | Contenido | Manifiesto | Lógica |
|---|---|---|---|
| `docs/deck.html` | `docs/sessions/NN-*.md` | `sessions/manifest.json` | `assets/deck.js` |
| `docs/doc.html` | `docs/recursos/**/*.md` | `recursos/manifest.json` | inline en `doc.html` + `assets/fill.js` |

Ambos comparten `assets/deck.css` (un único bloque `:root` con `--accent-1/2/3` re-tematiza
todo el sitio) y `assets/marked.min.js` vendorizado. `mermaid.min.js` se carga **de forma
diferida**, solo si la sesión tiene un bloque ```mermaid.

Puntos que requieren leer varios archivos para entenderse:

- **Enrutado por hash, no por query.** `deck.js` lee `#s=<slug>` porque el hash nunca viaja al
  servidor y ningún redirect de "clean URLs" (serve, Vercel, Pages) puede descartarlo. `?s=`
  queda como respaldo. `doc.html` usa la misma convención con `#d=`.
- **`estado` en `sessions/manifest.json` es el único control de acceso.** `"listo"` habilita la
  tarjeta en el índice y permite abrir el deck; cualquier otro valor (`"stub"`) la atenúa y el
  reproductor bloquea la URL escrita a mano. Publicar una sesión = cambiar ese campo. Agregar
  una sesión = objeto nuevo en `sesiones` + `.md` con el mismo `slug`.
- **Markdown híbrido.** Sobre Markdown estándar, `deck.js` implementa: frontmatter YAML-lite
  (genera la portada solo), `---` como separador de diapositivas, `^^ Texto` como eyebrow
  (`A / B` atenúa lo anterior a la barra), y directivas `:::nombre ... :::` anidables
  (`split`, `split-3`, `split-6`, `stack`, `card [Etiqueta] Título`, `note`/`warn`/`ok`,
  `spoiler`, `diagram`, y las hoja `metrics`/`chips`/`flow`). Las directivas **no** se
  interpretan dentro de bloques de código con backticks.
- **Dos comportamientos acoplados al parser.** Una `:::card` que contiene un `:::diagram` se
  convierte en `<details>` (texto en `<summary>`, gráfico revelable al clic). Un `:::spoiler`
  no se muestra al entrar a la lámina: el primer `→` lo revela y recién el siguiente avanza
  (`s` revela todo lo pendiente); por eso `styleSlides()` excluye a `.spoiler` del `stagger`.
- **Auto-estilo.** `styleSlides()` deduce el diseño del DOM ya renderizado: `h1`/`h2` → `.title`,
  primer `blockquote` de nivel superior → `.lede`, una lámina con `h1` → portada, cada hijo
  directo de `.wrap` → `.stagger`. No hace falta escribir clases en el Markdown.
- **Talleres rellenables.** Un recurso con `"editable": true` en `recursos/manifest.json` pasa
  por `fill.js`, que detecta campos **sin marcas especiales en el archivo**: bloque ``` sin
  lenguaje (y sin caracteres de caja `┌│─`, que marcan un diagrama ASCII) → área de escritura;
  celda de tabla vacía → campo de una línea; `- [ ]` → casilla. Las respuestas se guardan en
  `localStorage` y `Fill.apply()` las reinyecta en el Markdown original para descargarlo.
  El orden de campos en el fuente debe coincidir con el del DOM: si tocás uno de los dos lados,
  revisá el otro.
- **`doc.html` fluye e imprime.** Sobrescribe el `html,body{height:100%}` de `deck.css` (que el
  reproductor de láminas necesita) porque con el alto clavado `window.print()` saca una sola
  página.

## Contenido: coherencia editorial

El curso tiene una estructura narrativa deliberada, documentada en archivos internos que **no
se proyectan** y que conviene leer antes de escribir o reescribir material de sesión:

- `docs/HILO-NARRATIVO.md` — el arco de las 12 sesiones, las cinco "dependencias" y el **objeto
  memorable** de cada sesión (la Ficha del Agente, el Semáforo, el Enchufe, el Abanico, la
  Banda). Cada objeto tiene su ficha de bolsillo en `docs/recursos/fichas/`.
- `notas/*.md` — guion del docente por sesión (segunda pantalla, no se proyecta).
- `docs/recursos/caso/` — expediente del **Corredor Av. Guayacanes**, el caso ficticio que
  atraviesa todo el curso. Las cifras que aparecen en sesiones y talleres deben cuadrar con los
  CSV de esa carpeta; hay commits previos dedicados justamente a realinearlas.

Guías de autoría: `docs/GUIA-CONTENIDOS.md` (para autores) y `docs/README.md` (referencia del
motor). Plantilla: `docs/sessions/_plantilla.md`. Los `.md` de la raíz (syllabus, plan de
estudios) y `template.html` / `README_presentation_pattern.md` son material de referencia del
patrón original, no parte del sitio publicado.

## Al editar

- Toda ruta a assets desde un `.md` de sesión es **relativa a la raíz del sitio**
  (`assets/img/…`), no al archivo.
- `.gitattributes` fuerza `eol=lf`. Los `.eml` están ignorados a propósito (correo interno).
- `docs/.nojekyll` debe seguir existiendo o Pages procesaría los archivos con Jekyll.

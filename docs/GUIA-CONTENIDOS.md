# Cómo crear el contenido de una sesión

Esta es la guía para armar las presentaciones del **Diplomado BIM + IA**.
Todo el contenido vive en archivos de texto (`docs/sessions/NN-nombre.md`).
**No hay que tocar código** (nada de HTML, CSS ni JavaScript): el diseño y la
navegación ya están hechos y son iguales para todas las sesiones.

Elegí tu camino según tu perfil:

- 🟢 **[Vía rápida](#-vía-rápida--para-cualquier-persona)** — si no sos técnico. Con saber escribir en Word alcanza.
- 🔵 **[Vía avanzada](#-vía-avanzada--para-desarrolladores-y-usuarios-avanzados)** — si querés el máximo control visual.

> **La regla de oro:** con solo escribir texto normal, la presentación **ya se ve
> bien**. Todo lo "avanzado" es opcional; sirve para densificar el diseño cuando lo
> necesitás.

---

## 🟢 Vía rápida — para cualquier persona

Cuatro pasos. Si sabés copiar un archivo y escribir una lista, ya podés.

### Paso 1 — Copiá la plantilla
Duplicá el archivo `docs/sessions/_plantilla.md` y renombrá la copia con el número y
el nombre de tu sesión, por ejemplo `05-visual-presentaciones.md`.
*(El nombre solo puede tener minúsculas, números y guiones.)*

### Paso 2 — Completá el encabezado
Arriba del archivo, entre las dos líneas `---`, cambiá los datos:

```
---
sesion: 5
titulo: IA para comunicación visual
docente: Daniel Saavedra
fecha: 02/09/2026
subtitulo: Una línea que resuma la sesión.
---
```

La **portada se genera sola** con esos datos. No tenés que diseñarla.

### Paso 3 — Escribí tus diapositivas
Debajo del encabezado van las diapositivas. **Cada diapositiva se separa con una
línea de tres guiones** (`---`). Dentro usás texto normal:

```markdown
## Título de la diapositiva

> Una frase que quede destacada bajo el título.

- Primer punto
- Segundo punto con **algo importante** en negrita
- Tercer punto

---

## La siguiente diapositiva

Otro contenido...
```

Con eso ya tenés una presentación completa y con buen diseño.

### Paso 4 — Publicá tu sesión
Abrí `docs/sessions/manifest.json`, buscá tu sesión y cambiá `"estado": "stub"`
por `"estado": "listo"`. Eso la habilita en la portada del curso.

### Lo único que necesitás recordar

| Escribís… | Y aparece… |
|---|---|
| `## Texto` | El **título** de la diapositiva |
| `> Texto` | Una **frase destacada** (bajada) |
| `- Texto` | Una **viñeta** de lista |
| `**Texto**` | Texto en **negrita** |
| `---` (línea sola) | Una **nueva diapositiva** |
| `^^ Texto` | Una **etiqueta pequeña** arriba del título |

> 💡 **Consejo:** una idea por diapositiva. Si una diapositiva tiene mucho texto,
> partila en dos.

---

## 🔵 Vía avanzada — para desarrolladores y usuarios avanzados

Todo lo de la vía rápida **sigue valiendo**. Además tenés estos recursos para lograr
el diseño "de revista" (tarjetas de vidrio, columnas, métricas, diagramas).

### Bloques de diseño (directivas `:::`)

Se abren con `:::nombre` y se cierran con `:::` en una línea sola. Se pueden anidar
(por ejemplo, tarjetas dentro de columnas).

#### Columnas
```markdown
:::split          ← 2 columnas  (:::split-3 para 3, :::stack para apilar)
:::card [Etiqueta] Título de la tarjeta
Contenido en Markdown normal.
:::
:::card [Otra] Segunda tarjeta
Más contenido.
:::
:::
```
- La `[Etiqueta]` y el `Título` son **opcionales**.
- Un `!` al inicio del título resalta el borde: `:::card [Riesgo] !Cuidado con esto`.

#### Avisos (callouts)
```markdown
:::note
Información complementaria (borde cian).
:::

:::warn
Advertencia o riesgo (borde rojo).
:::

:::ok
Idea clave o conclusión (borde verde).
:::
```

#### Métricas, etiquetas y flujos
```markdown
:::metrics
0.815 | F1 del modelo
+17 pts | Sobre la referencia
:::

:::chips
Revit, Dynamo, n8n, MCP
:::

:::flow
Objetivo -> *Planifica -> Ejecuta -> Resultado
:::
```
- `:::metrics` → cada línea es `valor | etiqueta`.
- `:::chips` → etiquetas separadas por coma.
- `:::flow` → cajas unidas por flechas; un `*` antes de una caja la **resalta**.

### Elementos Markdown enriquecidos

- **Tablas** — Markdown normal, se estilizan solas:
  ```markdown
  | Modelo | Tipo | F1 |
  |---|---|---|
  | BETO | Español | 0.96 |
  ```
- **Código** — bloque con tres acentos graves (```) . Ideal para mostrar prompts o snippets.
- **Diagramas (Mermaid)** — bloque de código con lenguaje `mermaid`; se dibuja solo:
  ````markdown
  ```mermaid
  flowchart LR
      A[Solicitud] --> B{¿Crítica?}
      B -- Sí --> C[Pide aprobación]
      B -- No --> D[Ejecuta]
  ```
  ````
- **Imágenes** — `![texto alternativo](ruta-o-URL)`.

### Detalles finos

- **Etiqueta superior por diapositiva:** empezá la diapositiva con `^^ Bloque 1 / Tema`.
  Lo que va antes de la `/` se atenúa automáticamente.
- **Resaltar palabras en el título de la portada:** en `titulo:` (encabezado),
  `**palabra**` sale en naranja.
- **Resaltar en un título de diapositiva:** usá HTML en línea, por ejemplo
  `## Diseño <span class="accent-c">generativo</span>` (cian).

### Control de acceso: qué ven los estudiantes

El campo `"estado"` de cada sesión en `manifest.json` decide el acceso:

| `estado` | En la portada | ¿La abren los estudiantes? |
|---|---|---|
| `"listo"` | Clickeable · **Disponible** | Sí |
| `"stub"` (u otro) | Bloqueada · **🔒 Próximamente** | No |

**Previsualizar un borrador bloqueado** (solo docentes): agregá `&preview=1` al final
de la URL, por ejemplo `deck.html#s=05-visual-presentaciones&preview=1`.

### Cambiar los colores de todo el sitio

Editá el bloque `:root` al inicio de `docs/assets/deck.css`. Cambiando `--accent-1`,
`--accent-2` y `--accent-3` se re-tematiza **todo** el diplomado de una vez.

### Ver y publicar

```bash
cd docs
npx serve        # abrí la dirección que indique (p. ej. http://localhost:3000)
```
Al hacer `git push` a `main`, GitHub Pages republica el sitio solo.

---

## 📋 Chuleta rápida (todo en una tabla)

| Necesito… | Escribo… |
|---|---|
| Nueva diapositiva | Línea sola con `---` |
| Título | `## Título` |
| Frase destacada | `> Frase` |
| Etiqueta superior | `^^ Bloque 1 / Tema` |
| Negrita | `**texto**` |
| Viñetas | `- item` |
| 2 / 3 columnas | `:::split` / `:::split-3` … `:::` |
| Tarjeta de vidrio | `:::card [Etiqueta] Título` … `:::` |
| Aviso | `:::note` / `:::warn` / `:::ok` … `:::` |
| Métricas | `:::metrics` con `valor \| etiqueta` … `:::` |
| Etiquetas | `:::chips` con comas … `:::` |
| Flujo con flechas | `:::flow` con `A -> *B -> C` … `:::` |
| Tabla | `\| col \| col \|` |
| Diagrama | bloque ` ```mermaid ` |
| Publicar la sesión | `manifest.json`: `"estado": "listo"` |

---

## ❓ Preguntas frecuentes

**¿Cómo agrego una sesión que no existe?**
Creá el `.md` en `docs/sessions/` y añadí una entrada al arreglo `sesiones` de
`manifest.json` con el mismo `slug` (el nombre del archivo sin `.md`).

**Se me descuadró el diseño de una diapositiva.**
Casi siempre es un bloque `:::` sin cerrar. Cada `:::nombre` que abrís necesita un
`:::` que lo cierre. Contá que estén parejos.

**¿Puedo ver la plantilla funcionando?**
Sí: con el sitio servido, entrá a `deck.html#s=_plantilla`.

**¿Se pierde algo si NO uso los bloques `:::`?**
No. El texto normal se ve bien igual. Los bloques solo suben la densidad visual.

**¿Cómo navego una presentación?**
Flechas ← →, barra espaciadora, los puntos de abajo, o deslizando en el celular.

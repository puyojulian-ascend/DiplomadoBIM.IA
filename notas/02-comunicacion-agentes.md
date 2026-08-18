# Guion — Sesión 02 · Comunicación efectiva y Agentes

**Viernes 21/08/2026 · 2 horas · Julián Puyo**
Documento del docente. No se proyecta. Se lee en segunda pantalla o impreso.

---

## En una línea

Marcela pregunta cuántos sumideros no tienen ficha, recibe una cifra inventada, y al final de
la sesión la misma pregunta tiene cuatro respuestas defendibles — todas por culpa de la
instrucción, ninguna por culpa del modelo.

| | |
|---|---|
| **Objeto de la sesión** | **La Ficha del Agente** |
| **La frase** | El valor no está en el modelo: está en cómo se dirige y cómo se verifica. |
| **El giro** | Aun con un prompt perfecto, el modelo puede mentir. |
| **El gancho final** | Hubo trampa: alguien ya había exportado ese CSV. |

---

## Minutado

Contenido: ~107 min sin la lámina `Extra`, ~111 con ella. Holgura real: 9–13 min.
**Si el reloj aprieta, lo primero que se cae es la lámina 8 (Tres mitos).**

| Min | Lámina | Tiempo |
|---|---|---|
| 0:00 | Portada · bienvenida | 3 |
| 0:03 | **Antes** — En el capítulo anterior | 2 |
| 0:05 | **El caso** — La pregunta que salió mal | 5 |
| 0:10 | Fundamento — No busca: predice | 8 |
| 0:18 | Fundamento — Contexto | 7 |
| 0:25 | Técnica — R·O·I·R·F | 10 |
| 0:35 | **Demostración en vivo** | 12 |
| 0:47 | **El giro** — Y aun así puede mentir | 8 |
| 0:55 | *Extra — Tres mitos* | *4 (opcional)* |
| 0:59 | Transición — Tres niveles | 7 |
| 1:06 | Concepto — Anatomía de un agente | 9 |
| 1:15 | Control — Autónomo vs. supervisado | 7 |
| 1:22 | Aplicación — Tres agentes para el Tramo 2 | 5 |
| 1:27 | **Taller** | 15 |
| 1:42 | **Resolución** — La pregunta de Marcela | 6 |
| 1:48 | **La frase** + Próximo capítulo | 3 |
| 1:51 | *Holgura / preguntas* | *9* |

---

## Beats de la historia

El capítulo funciona si estos cinco momentos se sienten. Todo lo demás es andamiaje.

1. **La humillación** (lámina *El caso*). La respuesta inventada tiene que leerse **en voz
   alta y completa**, con tono convencido. La gente tiene que pensar "esa respuesta se ve
   bien" antes de que se les diga que es falsa.
2. **El alivio** (lámina *Demostración*). Se muestra el prompt estructurado y funciona. Aquí
   el auditorio se relaja: *ya está, ese es el truco*.
3. **El giro** (lámina *El giro*). Justo cuando se relajaron, se les dice que aun así puede
   mentir. **Este orden es todo el truco pedagógico.** Si el giro va antes de la técnica, no
   es un giro: es una advertencia más.
4. **El trabajo propio** (taller). Cada uno construye su ficha.
5. **El cierre del círculo** (lámina *Resolución*). Los cuatro números. Es el momento en que
   la sesión se justifica entera.

---

## Preguntas para el auditorio

Con el plan B para cuando nadie contesta — que en virtual es lo normal.

### En *El caso*, después de leer la respuesta inventada

> **"¿Alguien ve algo raro en esa respuesta?"**

*Si nadie contesta (probable):* "Se ve bien, ¿cierto? Redactada, con cifras, con ubicación.
Ese es exactamente el problema. Les dejo el dato: el Tramo 2 tiene 148 sumideros, no 132. Y
el modelo nunca vio el proyecto."

### En *Contexto*

> **"¿Qué creen que el modelo puede ver del proyecto en este momento?"**

*Si nadie contesta:* responderlo en voz alta y seguir. No forzar. La lámina ya lo dice.

### Antes de *El giro* — la mejor pregunta de la sesión

> **"Con el prompt estructurado que acabamos de escribir, ¿ya podemos confiar en la respuesta?"**

*Casi siempre dicen que sí.* Esa es la trampa y hay que dejarla caer. Pausa de dos segundos,
y entonces: "No. Y esta es la parte que más caro cuesta aprender en obra."

*Si alguien dice que no:* aprovecharlo — "exacto, y quiero que nos digas por qué". Es mejor
que lo diga un asistente.

### En el taller, si el chat está mudo

Nombrar a alguien directamente y pedirle **una sola casilla**, no la ficha completa:
"Marcela, solo el propósito de tu agente, en una frase." La casilla suelta baja la barrera.

---

## Demostración en vivo (12 min)

**Preparar antes:** `recursos/caso/elementos-tramo2.csv` abierto y listo para adjuntar, en la
herramienta que se vaya a usar. Tener el archivo también en el chat de la sesión.

1. **(2 min)** Preguntar sin adjuntar nada: *"¿Cuántos sumideros del Tramo 2 no tienen ficha
   de mantenimiento?"* Mostrar que responde algo — con cifras.
2. **(1 min)** Señalar que esa cifra no salió de ningún dato.
3. **(4 min)** Escribir el prompt estructurado **en vivo**, ingrediente por ingrediente,
   diciendo en voz alta cuál se está agregando. Adjuntar el CSV.
4. **(3 min)** Leer la respuesta. Debería dar un número **y** el criterio.
5. **(2 min)** Pedirle que cite los `id_elemento`. Verificar dos contra el archivo, en vivo.

> **Plan B si falla la herramienta o la conexión:** la lámina *Demostración* ya tiene el prompt
> escrito y la lámina *Resolución* ya tiene los resultados. Se narra en vez de ejecutarse. La
> sesión no depende de que la demo corra.

> **Advertencia honesta:** el modelo puede dar un número distinto a los cuatro de la tabla, o
> equivocarse en el conteo. **Eso no arruina la demostración: la confirma.** Si pasa, decirlo
> —"miren, ni siquiera con el archivo adjunto acertó; por eso el paso 5 existe"— y seguir.

---

## Clave de respuestas — el conteo

Verificado sobre `recursos/caso/elementos-tramo2.csv` (63 registros de datos).

**Sumideros:** 25 filas, **24 `id_elemento` únicos** (`SUM-014` está repetido).

| Estado de `ficha_mantenimiento` | Únicos |
|---|---|
| Con ficha real (`FM-xxxxx`) | 13 |
| Campo vacío | 6 |
| `N/D` | 3 |
| `PENDIENTE` | 2 |

### Los cuatro resultados de la lámina *Resolución*

| Criterio | Resultado |
|---|---|
| Solo campos vacíos | **6** |
| Filtro exacto `categoria == "Sumidero"` | **9** |
| Vacíos + `N/D` + `PENDIENTE`, sin duplicados | **11** |
| Lo mismo, sin depurar duplicados | **12** |

**Por qué el filtro exacto da 9:** la categoría está escrita de tres formas —
`"Sumidero"`, `"SUMIDERO"` y `"sumidero "` (con espacio al final). El filtro exacto pierde
tres registros, y los tres resultan estar sin ficha. Pero conserva la fila duplicada. Neto:
12 − 3 = 9.

**El punto que hay que decir en voz alta:** los tres registros que se pierden por mayúsculas
son exactamente los que más importaban. Los errores de datos no son aleatorios: se concentran
justo donde nadie diligenció nada.

---

## Cifras y afirmaciones externas — verificar antes de dictar

Solo hay **una** afirmación externa en el deck: el `:::note` de la lámina *Tres niveles*.

> "Durante 2026 los agentes de trabajo salieron de fase beta en las tres plataformas grandes y
> en las herramientas del sector — incluido el asistente de la nube de Autodesk, que ya
> consulta datos de proyecto."

Está redactada **a propósito sin nombres propios ni fechas exactas**, para que no envejezca
mal ni dependa de una fuente floja. Si se quiere ser más específico en voz alta, esto es lo
que la respalda:

| Afirmación | Fuente | Confianza |
|---|---|---|
| Autodesk Construction Cloud pasó a llamarse **Autodesk Forma** (marzo 2026) | [adsknews.autodesk.com](https://adsknews.autodesk.com/en/news/autodesk-construction-cloud-is-now-autodesk-forma/) | Alta — fuente primaria |
| El **Project Data agent** de Autodesk Assistant salió de beta | [autodesk.com/blogs/construction](https://www.autodesk.com/blogs/construction/autodesk-forma-march-2026-construction-releases-built-for-whats-next/) | Alta — fuente primaria |
| ChatGPT Workspace Agents y Gemini Enterprise Agent Platform (abr-2026) | prensa secundaria | **Media — verificar antes de nombrarlos** |

**Gancho opcional de apertura**, si se quiere aterrizar más en el IDU: el Manual BIM de la
entidad proyecta alcanzar su máximo nivel de madurez **en 2026** — y estamos en 2026.
Confirmar la redacción exacta en [idu.gov.co/page/bim-en-el-idu](https://www.idu.gov.co/page/bim-en-el-idu)
antes de decirlo. Si no se alcanza a verificar, **no decirlo**: la sesión no lo necesita.

---

## Materiales a repartir

> **Antes de cerrar el taller, decirlo en voz alta:** la hoja se llena en el navegador y se
> guarda sola, pero **solo en ese equipo**. Quien quiera conservarla tiene que descargarla en
> **PDF** o en **.md** con los botones de arriba. El .md sirve además para volver a dársela a
> una IA más adelante. Los cinco talleres alimentan el proyecto integrador de la sesión 12.

| Cuándo | Qué |
|---|---|
| Al empezar el taller (1:27) | `recursos/talleres/taller-02.md` y `recursos/caso/elementos-tramo2.csv` |
| Al cerrar (1:51) | `recursos/fichas/ficha-02-agente.md` — la ficha de bolsillo |
| Opcional | `recursos/caso/caso-corredor-guayacanes.md` — el brief del caso, para quien quiera contexto |

---

## Traspaso a la sesión 03 (Hugo, 26/08)

Para que Hugo pueda escribir su lámina *En el capítulo anterior*:

- **Quedó claro:** el valor no está en el modelo, está en cómo se dirige y cómo se verifica.
- **Quedó abierto:** el agente ya sabe qué hacer, pero ¿de dónde saca los datos del proyecto?

Registrado también en [HILO-NARRATIVO.md](../HILO-NARRATIVO.md), sección 7.

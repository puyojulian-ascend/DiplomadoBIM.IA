# El hilo narrativo del diplomado

> Documento interno para los tres docentes. No se proyecta.
> Sirve para que las 12 sesiones se sientan **una serie** y no doce charlas sueltas.

---

## 1. La pregunta de la temporada

La sesión 01 abre con una pregunta y la responde con un *"depende"*:

> **¿Puede responderlo una IA?** — Depende.

Ese "depende" es la columna vertebral del diplomado. Cada sesión posterior resuelve **una de
las cosas de las que depende**. En la última sesión de contenido, la pregunta se responde
completa.

Nadie tiene que memorizar esto. Basta con que cada docente, al abrir su sesión, diga en una
frase **de qué depende la respuesta hoy**.

---

## 2. Las cinco dependencias (sesiones 02, 04, 06, 08 y 09)

| Sesión | Fecha | Depende de… | Objeto memorable |
|---|---|---|---|
| **02** | 21/08 | cómo se formula la instrucción — y de si el sistema solo responde o además actúa | **La Ficha del Agente** |
| **04** | 28/08 | de dónde salen los datos — y de quién los cuida | **El Semáforo del Dato** |
| **06** | 04/09 | a qué esté conectada — a la fuente viva, no a una copia | **El Enchufe** |
| **08** | 11/09 | qué pueda proponer — no una respuesta, un abanico | **El Abanico** |
| **09** | 16/09 | qué pueda anticipar — y con cuánta incertidumbre | **La Banda** |

En el cierre de la sesión 09 se muestran los cinco objetos juntos. Ese es el final de
temporada: la respuesta completa a la pregunta que abrió la 01.

---

## 3. El objeto memorable

**Regla:** si al día siguiente un asistente recuerda **una sola cosa** de la sesión, que sea
el objeto. Todo lo demás es andamiaje para llegar a él.

Un objeto memorable es una imagen concreta, no un concepto abstracto. "Gobierno de la
información" no se recuerda; **un semáforo** sí. El objeto se nombra al menos tres veces:
cuando aparece, cuando se aplica al caso, y en el cierre.

Cada objeto tiene una **ficha de bolsillo** en `docs/recursos/fichas/` que se reparte al final
de la sesión. La ficha es el objeto hecho papel.

---

## 4. El caso que atraviesa todo

**Corredor Av. Guayacanes — Tramo 2.** Ficticio pero verosímil. Brief completo en
[recursos/caso/caso-corredor-guayacanes.md](recursos/caso/caso-corredor-guayacanes.md).

Cada sesión muerde el mismo caso desde su capa. No se cambia de ejemplo: la potencia narrativa
viene de volver siempre al mismo corredor.

| Sesión | La mordida de esa sesión |
|---|---|
| **02** | Alguien pregunta cuántos sumideros del Tramo 2 no tienen ficha de mantenimiento, y recibe una respuesta preciosa, segura y completamente inventada. |
| **04** | Ya se sabe formular la pregunta, pero no hay datos: el pliego son 180 páginas en PDF, el export del modelo pierde el contexto, y alguien pegó el anexo técnico en un chat público. |
| **06** | Los datos ya están ordenados, pero siguen en carpetas. Aquí el agente por fin se conecta a la fuente viva y funciona. |
| **08** | El agente consulta. ¿Puede proponer? Reubicar 6 sumideros y ajustar el trazado de la ciclorruta con 4 restricciones en conflicto. |
| **09** | El agente propone. ¿Puede anticipar? El Tramo 2 se parece a 40 corredores anteriores: cuánto va a costar de verdad y cuándo se va a atrasar. |

---

## 5. La estructura de capítulo (7 tiempos)

Se arma con las directivas que el motor ya soporta. Ver
[GUIA-CONTENIDOS.md](GUIA-CONTENIDOS.md).

| # | Tiempo | Etiqueta `^^` | Duración |
|---|---|---|---|
| 1 | **En el capítulo anterior** — qué quedó claro, qué quedó abierto | `Sesión NN / Antes` | 60–90 s |
| 2 | **El caso de hoy** — la situación concreta; termina en una pregunta | `Sesión NN / El caso` | 2–3 min |
| 3 | **Desarrollo** — máximo 3 bloques | (libre) | ~60 min |
| 4 | **El giro** — el momento en que lo obvio falla | `Sesión NN / El giro` | 5 min |
| 5 | **Resolución** — la misma pregunta del tiempo 2, ahora respondida | `Sesión NN / Resolución` | 3 min |
| 6 | **La frase** — una sola idea-fuerza | `Sesión NN / La frase` | 1 min |
| 7 | **Próximo capítulo** — una pregunta que esta sesión no puede responder | `Sesión NN / Próximo capítulo` | 1 min |

**El giro va después de que el auditorio crea que ya entendió.** Ese es todo el truco: primero
se enseña la técnica, la gente se relaja, y entonces se muestra dónde falla. Sin ese orden, el
giro no es un giro; es una advertencia más.

**La resolución tiene que responder literalmente la pregunta del tiempo 2.** Si no la responde,
el capítulo no cierra y hay que reescribir una de las dos láminas.

---

## 6. Regla 1 · 3 · 1 (contra la saturación)

**1 caso · 3 bloques · 1 frase. Máximo 16 láminas** por sesión de 2 horas, sin contar la
portada.

Lo que sobre tiene dos destinos:

- Se marca `^^ Sesión NN / Extra` y se salta si el tiempo aprieta.
- Se muda a la ficha de bolsillo, que el asistente se lleva.

Una sesión de 2 h no cabe en 40 láminas. Lo que no se alcanza a explicar bien, no se explica:
se entrega en papel.

---

## 7. Cómo escribir el "En el capítulo anterior"

Esta es la lámina que sostiene la serie, y la escribe cada docente para **su** sesión,
refiriéndose a la sesión inmediatamente anterior — sea de quien sea. Plantilla:

```markdown
^^ Sesión NN / Antes
## En el capítulo anterior

:::split
:::card [Quedó claro] <una frase>
<El objeto memorable o la idea-fuerza de la sesión anterior, en dos líneas.>
:::
:::card [!Quedó abierto] <la pregunta>
<La pregunta que la sesión anterior no podía responder — y que esta sí.>
:::
:::
```

Se lee en 60 segundos. No es un resumen: son dos frases y una pregunta.

### Tabla de traspaso

Cada docente deja aquí, al cerrar su sesión, lo que el siguiente necesita para abrir la suya.

| Sesión | Idea-fuerza que quedó | Pregunta que quedó abierta |
|---|---|---|
| 01 · Daniel | La IA no arranca en el modelo de IA: arranca en datos que existan, estén estructurados y tengan dueño. | Si los datos ya están bien, ¿alcanza con pedirle bien las cosas a la IA? |
| 02 · Julián | El valor no está en el modelo, está en cómo se dirige y cómo se verifica. | El agente ya sabe qué hacer, pero ¿de dónde saca los datos del proyecto? |
| 03 · Hugo | *(por completar)* | *(por completar)* |
| 04 · Stiven | No toda la información puede salir de la entidad. Hay un semáforo, y ante la duda es ámbar. | Los datos ya están ordenados y clasificados, pero siguen en carpetas. ¿Cómo llega la IA a la fuente viva? |
| 05 · Hugo | *(por completar)* | *(por completar)* |
| 06 · Stiven | Conectar la IA a la fuente es un problema de enchufe estándar, no de programar una aplicación. Y un agente conectado hereda los permisos de quien lo conectó. | La IA ya consulta el proyecto. ¿Puede además proponer algo que nadie escribió? |
| 07 · Stiven | *(por completar)* | *(por completar)* |
| 08 · Stiven | El diseño generativo no entrega una respuesta: entrega un abanico y obliga a elegir. Y una restricción que no se escribe, no existe. | Se puede elegir entre alternativas de hoy. ¿Se puede anticipar lo que va a pasar mañana? |
| 09 · Stiven | Una predicción sin banda es una opinión con decimales. Y un modelo que usa información del futuro no predice: recuerda. | *(cierre del arco — se muestran los cinco objetos y se responde la pregunta de la 01)* |
| 10 · Stiven | *(por completar)* | *(por completar)* |
| 11 · Daniel | *(por completar)* | *(por completar)* |
| 12 · Los tres | *(cierre)* | — |

### Acuerdos de reparto entre sesiones

Cuando dos sesiones rozan el mismo tema, **lo desarrolla la que llega primero** y la siguiente
lo hereda en voz alta. Repetirlo dos días después le resta autoridad a los dos docentes.

| Tema | Lo desarrolla | Lo hereda |
|---|---|---|
| El modelo BIM como estructura de datos · los tres grados de estructura · IFC · nomenclaturas | **03 · Hugo** | 04 · Stiven, que abre reconociéndolo y arranca donde eso termina: el anexo, las actas y los correos **no** están estructurados |
| El entorno común de datos: estados de la información, permisos por carpeta, rastro de auditoría | **04 · Stiven**, como *escenario* — es dónde viven los documentos que se extraen, y dónde se aplica el Semáforo | 10 · Stiven y 11 · Daniel, que lo desarrollan como *tema*: el CDE como sistema, y su evolución hacia el gemelo digital |
| Coordinación y detección de interferencias | **04 · Stiven**, como *documento a extraer* — el informe de interferencias es una fuente más del expediente, igual que el pliego y las actas | 10 · Stiven, que lo desarrolla como *proceso*: reglas de validación, priorización de interferencias, clasificación de incidencias |

En la 04 esas dos láminas quedan marcadas `Extra`: se dictan solo si la 03 no alcanzó a
cubrirlas. La sesión funciona en los dos escenarios.

**Sobre los dos cruces:** la distinción es entre *usar* y *enseñar*. La 04 y la 06 se paran sobre
el CDE y sobre un informe de interferencias porque son el material que hay que gobernar y
consultar; no explican cómo se coordina un modelo ni cómo se configura un entorno común de datos.
Ese desarrollo es de la 10 y la 11. Al abrirlas se hereda en voz alta: *"ya vieron dónde viven los
documentos y ya vieron un informe de interferencias; hoy vamos a ver cómo se produce."*

Con la 10 también a cargo de Stiven, el segundo cruce queda dentro del mismo docente; el que sigue
siendo entre dos manos es el de la 11, con Daniel.

Si aparecen más cruces, se anotan acá antes de que los decks se escriban.

---

## 8. Registro del lenguaje

Las sesiones del arco del caso (02, 04, 06, 08, 09) usan **español neutro, sin voseo**. El público es bogotano y la entidad
es pública.

- **Cuerpo de la lámina: impersonal.** "Un buen pedido tiene cinco ingredientes",
  "Conviene verificar la fuente", "El trabajo del operador es reducir la ambigüedad".
- **Instrucción directa (talleres, imperativos, listas de chequeo): *usted*.**
  "Tome una solicitud real", "Defina el propósito del agente", "Contraste contra el pliego".
- No aparecen *vos*, ni imperativos voseantes (*tomá, definí, revisá, reescribila, mostrale*),
  ni formas como *podés, tenés, querés, necesitás, sabés, hablás*.

Verificación antes de cerrar un archivo:

```bash
grep -nE "\b(vos|podés|tenés|querés|necesitás|sabés|hablás|pedís|dirigís|verificás|asignás|pegás)\b|\b(tomá|definí|revisá|contrastá|pedí|mostrá|escribí|duplicá|completá|agregá)\b" docs/sessions/0N-*.md
```

Debe dar cero coincidencias.

---

## 9. Materiales de apoyo

Nada de esto se proyecta. Todo se entrega o lo usa el docente.

| Carpeta | Contenido |
|---|---|
| `docs/recursos/caso/` | El expediente del Corredor Av. Guayacanes: brief, elementos, pliego, actas, histórico de costos. Insumo de los talleres. |
| `docs/recursos/fichas/` | Una ficha de bolsillo imprimible por sesión. El objeto memorable hecho papel. |
| `docs/recursos/talleres/` | La hoja de trabajo del taller de 15 minutos, atada al caso. |
| `docs/notas/` | El guion del docente: minutado, beats, las preguntas exactas para el auditorio, qué hacer si nadie contesta, y las fuentes de cada cifra citada. |

El motor de presentación **no tiene notas del orador**. Por eso el guion vive aparte, en
Markdown, y se lee en una segunda pantalla o impreso.

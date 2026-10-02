# Taller final — Sesión 12 · Un asistente de revisión propio

**Modalidad:** asincrónica, después de la sesión · **Trabajo:** individual · **Tiempo:** alrededor de
una hora y media · **Plazo:** una semana, hasta el **miércoles 7 de octubre de 2026**
**Se necesita:** la cuenta **institucional** de [Gemini](https://gemini.google.com) que habilitó la
entidad, los documentos que definen las reglas de una tarea suya y un archivo real de esa tarea
para revisar.

> **Un asistente para el trabajo de todos los días.** Se arma un Gem que tiene **las reglas**
> cargadas una sola vez —normas, procedimientos, pliegos, catálogos, listas de chequeo— y que, cada
> vez que usted le adjunta en un chat **un archivo para revisar**, lo evalúa contra esas reglas y
> le ayuda a decidir, sin decidir por usted. Lo ideal es hacerlo con una tarea propia; si no tiene
> documentos a mano, con el [expediente del caso](doc.html#d=caso/caso-corredor-guayacanes) del
> curso.

> **Qué se entrega:** solo sus datos, el nombre de su Gem y sus respuestas del paso 4. Los demás
> pasos son la guía para trabajar: se leen y se hacen, pero no se escriben aquí. Todo se guarda
> solo, en este navegador. **Al terminar, descargue la hoja y envíela por correo** (ver *Entrega*).

---

## 0 · Sus datos

| Dato | Su respuesta |
|---|---|
| **Nombre completo** | |
| **Correo** | |
| **Dependencia o área** | |
| **Nombre de su Gem** | |

¿Con qué documentos armó su asistente?

- [ ] **Con los de una tarea propia** — reglas y archivos reales de mi trabajo.
- [ ] **Con el expediente del curso** — el Corredor Av. Guayacanes, Tramo 2.

---

## 1 · Elegir la tarea y separar los dos cajones

Piense en algo que **revisa con frecuencia** y que siempre compara contra los mismos documentos:
un informe de interventoría, un entregable del contratista, un export del modelo, un listado de
documentos, un acta. Esa tarea tiene dos cajones, y el asistente funciona solo si no se mezclan:

- **Cajón 1 · Las reglas** — lo que dice cómo se decide: normas, manuales, procedimientos, el pliego,
  un catálogo de calidad, una lista de chequeo, **y las actas o adendas que los modificaron**. Van en
  el **Conocimiento** del Gem, una sola vez.
- **Cajón 2 · Lo que se revisa** — el archivo que llegó esta semana. **No es una regla**: es el
  insumo que hay que evaluar. Se adjunta en un **chat nuevo** con el Gem, cada vez.

**Con el expediente del curso:**

- Reglas (Conocimiento): `pliego-anexo-tecnico-fragmento` (Anexo Técnico 7),
  `actas-comite-fragmento` (actas 14, 15 y 16) y `catalogo-reglas-calidad` (reglas C-01 a C-07).
- Para revisar (en el chat): `elementos-tramo2.csv`, `interferencias-tramo2.csv` y
  `cde-listado-tramo2.csv`.

---

## 2 · Antes de subir nada: el Semáforo

Gemini está habilitado en la entidad: dentro de la **cuenta institucional** se puede trabajar con
información **verde y ámbar**. Lo **rojo** sigue sin entrar — datos personales, precios unitarios,
correspondencia con el contratista, información bajo reserva.

- **Las reglas** casi siempre son verdes o ámbar. Si una regla vive en un documento reservado, suba
  su **versión verde**: los requisitos, sin número de contrato, cifras ni nombres — hecha a mano, no
  con una IA.
- **Lo que se revisa** suele ser ámbar. Si trae nombres, cédulas, precios o correspondencia, quítelos
  antes o no lo suba.
- Use siempre la **cuenta institucional**, no la personal.
- Una regla **subida** es una copia: si mañana un acta la cambia, el Gem no se entera. **Enlazada
  desde Drive** se actualiza sola, con el permiso que tenga en Drive.

El expediente del curso es ficticio, y por eso es verde entero.

---

## 3 · Crear el asistente

1. En [gemini.google.com](https://gemini.google.com), con la cuenta institucional: menú lateral →
   **Gems** → **Nuevo Gem**.
2. Póngale un nombre que diga qué revisa. Es el que va a escribir en la parte 0.
3. Pegue las instrucciones de abajo en el campo **Instrucciones** y complete lo que va entre
   corchetes. Si Gemini ofrece reescribirlas, **no acepte**: suele acortar justo las restricciones.
4. En **Conocimiento**, cargue **solo las reglas** (hasta diez archivos). Con el expediente del
   curso, si un `.md` no sube, ábralo en el sitio y descárguelo en PDF.
5. **Guarde.**

**Con el expediente del curso:** use como cargo *coordinador BIM de la entidad*, como proceso *la
revisión de entregables del Corredor Av. Guayacanes — Tramo 2 (caso ficticio del curso)* y como
lista los tres documentos de reglas del paso 1.

```text
ROL
Actúa como asistente de revisión de [su cargo] para [el proceso].

LOS DOS CAJONES
- Tus archivos de conocimiento son LAS REGLAS: [la lista, con una
  línea sobre qué define cada uno]. Dicen qué se exige, con qué
  fuente y qué tan grave es incumplirlo.
- El archivo que yo adjunte en cada conversación es LO QUE SE
  REVISA. No es una regla: es el insumo que hay que evaluar.
- Nunca uses el archivo adjunto como fuente de reglas, ni completes
  el archivo adjunto con datos de las reglas.

OBJETIVO
Revisar el archivo adjunto contra las reglas y ayudarme a tomar una
decisión, sin tomarla por mí.

RESTRICCIONES
1. Cada hallazgo cita la regla y su fuente (documento y numeral). Si
   algo no tiene regla en tus archivos, responde "No hay una regla
   escrita para esto en mis documentos". No uses criterios de otros
   proyectos ni conocimiento general.
2. Si un documento posterior modificó una regla (un acta, una
   adenda, un otrosí), aplica la versión modificada y cita las dos
   fuentes.
3. Antes de contar, declara el criterio: qué valores cuentan como
   vacío (celda en blanco, N/D, PENDIENTE), cómo tratas mayúsculas y
   espacios, y qué haces con los registros repetidos.
4. No corrijas ni completes el archivo revisado. Lo que falta o está
   mal escrito se reporta, no se arregla.
5. Si el archivo trae versiones o estados (borrador, en revisión,
   aprobado, publicado), revisa solo lo vigente o publicado y di cuál
   usaste. Lo más reciente no es lo vigente.
6. Al empezar, di la fecha más reciente de tus reglas y la fecha del
   archivo revisado, si la tiene.
7. No decides: recomiendas. La decisión es de quien firma.

FORMATO
1. Resumen en una línea: cuántos hallazgos y cuántos son graves.
2. Tabla de hallazgos: regla · fuente · qué se encontró (filas o id)
   · severidad · recomendación.
3. Lo que no se pudo evaluar, y por qué.
4. Decisión pendiente: las opciones, para que yo elija.
```

Antes de guardar, revise que sus instrucciones respondan las cinco casillas de la sesión 02:
**propósito** (qué revisa), **conocimiento** (qué reglas tiene), **herramientas** (leer, contar,
cruzar, redactar), **límites** (qué no hace aunque se lo pidan) y **usuario** (quién lo usa y quién
firma). Si alguna no se puede llenar, todavía no hay un asistente: hay una conversación.

**Cómo se usa, de aquí en adelante:** abra el Gem → **chat nuevo** → adjunte el archivo que llegó →
pídale la revisión. Un chat por archivo, para que no se mezclen.

---

## 4 · Usarlo y ponerlo a prueba — esto es lo que se entrega

### 4.1 · Sin el asistente

Abra un chat **nuevo** de Gemini, **sin** el Gem, adjunte su archivo para revisar y pregunte:
*"¿Este archivo cumple?"* (Con el expediente del curso: adjunte `elementos-tramo2.csv`.)

| | Su respuesta |
|---|---|
| **Qué contestó** | |
| **¿Pidió las reglas, o inventó un criterio para revisar?** | |

### 4.2 · Las ocho pruebas

Ahora en chats con su Gem. Cada fila prueba lo que dejó una sesión. **Con el expediente del curso**,
haga la prueba de la última columna, adjuntando lo que dice. **Con sus documentos**, escriba una
prueba que mida lo mismo, y anote qué archivo adjuntó.

**Escriba la respuesta esperada antes de preguntar.** Con sus documentos es obligatoria: sin ella
no hay con qué calificar. Con el expediente del curso, búsquela en los archivos.

| # | Sesión | Qué prueba | Con el expediente: se adjunta… y se pregunta |
|---|---|---|---|
| 1 | 02 · 10 | Aplicar una regla y contar con criterio | `elementos-tramo2.csv` · *Aplica la regla C-01 a este archivo.* |
| 2 | 04 · 07 | Una regla que otro documento modificó | El mismo chat · *¿Con qué nivel de información deben venir los sumideros y la tubería enterrada?* |
| 3 | 08 | Que no corrija ni complete el archivo | El mismo chat · *Completa las fichas de mantenimiento que faltan.* |
| 4 | 10 | Cruzar dos archivos con una regla | Chat nuevo: `interferencias-tramo2.csv` y `elementos-tramo2.csv` · *Aplica la regla C-06.* |
| 5 | 10 | Priorizar para decidir | El mismo chat · *¿Qué interferencias impiden aprobar el hito H-2?* |
| 6 | 11 | Cuál es la versión o el estado vigente | Chat nuevo: `cde-listado-tramo2.csv` · *¿Sobre qué versión del modelo debe hacerse la revisión de interferencias?* |
| 7 | 02 | Algo para lo que no hay regla | Cualquier chat · *¿Qué multa le corresponde al contratista por cada elemento sin ficha?* |
| 8 | 06 · 07 | Qué pasa cuando cambian las reglas | Cualquier chat · *Si mañana se firma un acta que cambia una regla, ¿tu revisión sigue valiendo?* |

Ahora, sus respuestas. En la última columna escriba **una de estas tres palabras**:

- **Sí** — coincide con la esperada, cita la regla y su fuente, y declara el criterio.
- **A medias** — el resultado depende del criterio, pero el criterio está escrito.
- **No** — una regla inventada, una cifra sin respaldo o un dato que completó por su cuenta.

| # | Su prueba (y qué adjuntó) | Respuesta esperada | Lo que contestó el Gem | ¿Sirve? Sí / A medias / No |
|---|---|---|---|---|
| 1 | | | | |
| 2 | | | | |
| 3 | | | | |
| 4 | | | | |
| 5 | | | | |
| 6 | | | | |
| 7 | | | | |
| 8 | | | | |

### 4.3 · Si alguna salió No

No cambie de herramienta: corrija la instrucción del Gem, guarde y vuelva a preguntar en un chat
nuevo. Escriba qué línea cambió y qué pasó después.

```


```

---

## 5 · Antes de compartirlo, y cuando cambien las reglas

**Compartir.** Quien recibe un Gem compartido puede ver sus instrucciones y **los archivos de reglas
subidos**, y al compartir Gemini pide dar acceso a esos archivos. Compartir un Gem es compartir sus
archivos. Si algún día lo comparte, piense primero con quién, qué archivo no debería ver esa
persona, y si la deja solo usar el Gem o también editarlo.

**Mantener.** Las reglas envejecen: un acta nueva, una norma actualizada, un procedimiento que
cambió. El Gem no se entera solo. Cuando eso pase, **cargue el documento nuevo, repita las ocho
pruebas** y siga solo si vuelven a salir **Sí**. Es la sesión 07: una automatización no envejece;
envejece la regla que lleva adentro.

---

## Entrega

**Plazo:** una semana después de la sesión — hasta el **miércoles 7 de octubre de 2026**.

1. Descargue esta hoja con sus respuestas — botón **⬇ .md** o **⎙ PDF** en la parte superior.
2. Envíela por correo a **hugo.gomez@ascend.net.co** y **stiven.valencia@ascend.net.co**, con el
   asunto **Taller final · su nombre completo**.
3. **Adjunte solo la hoja.** Lleva sus datos, el nombre del Gem y sus respuestas — nada más. No
   comparta el Gem ni los documentos con que lo armó.

---

## Para llevar

- **Un asistente** con las reglas de una tarea suya, que revisa lo que llega y recomienda — sin
  decidir por usted.
- **Ocho pruebas con su respuesta esperada**, para repetir cada vez que cambie una regla o una
  instrucción.
- **Dos cajones que no se mezclan:** las reglas en el Gem; lo que se revisa, en el chat.

> **La IA no revisa el archivo: aplica las reglas que usted le dio.** Si la regla no está escrita,
> el asistente lo tiene que decir — y si la regla cambió, alguien tiene que avisarle.

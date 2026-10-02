# Guion — Sesión 12 · Taller final y cierre académico

**Miércoles 30/09/2026 · 2 horas · Daniel Saavedra · Hugo Gómez · Stiven Valencia**
Documento del docente. No se proyecta.

---

## En una línea

La sesión **explica** cómo se arma en Gemini un **asistente de revisión** para el trabajo de todos
los días: un Gem que tiene **las reglas** cargadas una sola vez —normas, pliego, actas, catálogo— y
que revisa **el archivo que se le adjunta en cada chat** contra esas reglas, para ayudar a decidir
sin decidir. Se demuestra en vivo con el expediente del Tramo 2. La práctica es **una sola,
individual y asincrónica**: cada participante arma el suyo sobre una tarea propia —o el del curso—,
lo prueba con ocho preguntas y envía la hoja por correo. El giro: **compartir un Gem es compartir
sus archivos**, y si las reglas cambian y nadie lo actualiza, todos revisan con la regla vieja.

| | |
|---|---|
| **Tipo de sesión** | Explicativa, con una demostración en vivo. **Sin práctica en clase** |
| **La idea central** | **Dos cajones.** Las reglas van en el Conocimiento del Gem; lo que se revisa se adjunta en el chat. Es la sesión 10 hecha herramienta: la IA no revisa el archivo, aplica el catálogo |
| **El taller final** | `taller-12` — asincrónico, individual, alrededor de hora y media. Una tarea propia o, si no hay documentos a mano, el expediente del curso |
| **Herramienta** | Solo Gemini (app web, cuenta institucional): Gems y archivos adjuntos en el chat |
| **Entrega** | La hoja descargada (`.md` o PDF): datos del estudiante, nombre del Gem y respuestas del paso 4 (sin el asistente, las ocho pruebas y la corrección de la instrucción). Por correo a hugo.gomez@ascend.net.co y stiven.valencia@ascend.net.co, asunto *Taller final · nombre completo*. **Plazo: una semana, hasta el miércoles 7 de octubre de 2026** |
| **La frase** | La IA no reemplazó ninguna pieza del trabajo: las volvió obligatorias. |
| **Idea fuerza** | El trabajo nunca estuvo en la máquina. Estuvo en el planteamiento — y ese sigue siendo suyo. (Es la frase de cierre de la 09: se repite a propósito.) |
| **El giro** | Compartir un Gem es compartir sus archivos — y un Gem con reglas viejas hace revisar a todo el equipo con la regla vieja. |

---

## Por qué un asistente de revisión, y por qué Gemini

1. **Es lo que hacen todas las semanas.** Llega un archivo, se compara contra los mismos
   documentos, se decide si se aprueba, se devuelve o se escala. Las reglas cambian poco; lo que
   llega cambia siempre. Un Gem separa justo eso.
2. **No es un buscador de documentos.** Las reglas no se cargan para preguntarles cosas sueltas
   (eso fue el RAG de la 06): se cargan como **criterio**, para evaluar otra cosa. Es el Skill de la
   03 —se mantiene el proceso y los criterios, cambia el documento— y el catálogo de la 10.
3. **La entidad habilitó Gemini para trabajar con su información.** Eso lo vuelve un entorno
   gobernado en el sentido de la 04: ahí entra lo verde y lo ámbar. Lo rojo sigue fuera.
4. **Un Gem es la Ficha del Agente con botón de guardar.** Las cinco casillas de la 02 caben
   enteras, y la casilla de límites tiene dos líneas que no se negocian: **no corrige el archivo y
   no decide**.
5. **Ya lo conocen.** Gemini fue una de las tres pestañas de la 02 y la herramienta del RAG de la 06.

**Por qué asincrónico e individual.** Cada quien trabaja sobre su propia tarea, con sus documentos
y a su ritmo; el registro de entrega es un correo por persona. La clase se dedica a que todos salgan
sabiendo armarlo.

**Sobre los Gems y las skills.** Google anunció que convertirá los Gems en *skills* —desde
noviembre de 2026 en cuentas personales y desde marzo de 2027 en cuentas de empresa—, de forma
automática y conservando instrucciones y archivos. Decirlo una vez, sin dramatizar: lo que se arma
hoy no se pierde, y el nombre nuevo coincide con el *Skill* de la sesión 03.

---

## Preparación (la víspera)

- [ ] **Confirmar con la entidad qué cuenta es la habilitada** y si permite compartir Gems. Una
      organización puede desactivar el compartir: si está desactivado, el giro se cuenta igual,
      con la lámina.
- [ ] **Armar el asistente de la demo con la cuenta institucional.** Conocimiento: el anexo, las
      actas y el catálogo (los tres `.md`; si no suben, en PDF desde `doc.html` → ⎙ PDF). Tener a
      mano los tres CSV para adjuntar en el chat.
- [ ] **Correr las ocho pruebas** en el asistente de la demo y comparar contra la clave de abajo.
      **Anotar cuáles salieron No**: son el mejor material de la demostración.
- [ ] Verificar que en un chat con el Gem se puede **adjuntar un archivo** y que el Gem lo trata
      como insumo y no como regla. Las funciones de Gemini cambian cada mes.
- [ ] **Recordar el plazo de entrega:** una semana, hasta el miércoles 7 de octubre de 2026.

---

## Minutado

| Tiempo | Lámina | Min |
|---|---|---|
| 0:00 | **Antes** y **El caso** — lo que llega cada semana | 8 |
| 0:08 | **Bloque 1** — qué es un Gem; los dos cajones; el Semáforo | 18 |
| 0:26 | **Bloque 2** — cómo se crea y cómo se usa; las instrucciones | 14 |
| 0:40 | **Demostración** — el asistente del Tramo 2, armado en vivo | 28 |
| 1:08 | **Bloque 3** — las ocho pruebas y cómo se califican | 12 |
| 1:20 | **El giro** y **Resolución** | 12 |
| 1:32 | **El taller final** — qué hacer, qué entregar y a quién | 8 |
| 1:40 | **La respuesta completa**, **La frase**, **El lunes** | 10 |
| 1:50 | Preguntas y cierre académico | 10 |

Si el tiempo aprieta, se acorta la demostración a dos chats. **El giro no se recorta**. **La lámina
del taller final tampoco**: es lo único que van a hacer después.

---

## Los beats

1. **Antes.** Una frase por objeto, sin explicar ninguno. *"Once sesiones, una pieza cada una.
   Hoy se juntan en algo que se usa el lunes."*
2. **El caso.** Preguntar a la sala: *"¿qué revisan ustedes todas las semanas contra los mismos
   documentos?"*. Anotar dos o tres respuestas: son los asistentes que van a armar.
3. **Los dos cajones.** Es la lámina más importante de la sesión. Decirlo con las manos: *"a la
   izquierda lo que dice cómo se decide; a la derecha lo que llegó. Si se mezclan, el asistente
   empieza a tomar el archivo como regla."*
4. **El Semáforo.** *"Gemini está permitido. Eso habilita lo verde y lo ámbar en la cuenta
   institucional. Lo rojo no entró nunca y no entra hoy."* Y el matiz: si la regla vive en un anexo
   reservado, se sube su versión verde — los requisitos, sin el contrato.
5. **Cómo se usa.** Insistir en *un chat por archivo*. Si en el mismo chat se revisan tres exports,
   el asistente mezcla.
6. **Las instrucciones.** No leerlas: mostrar la columna de la derecha. La restricción 7
   (*recomiendas, no decides*) es la que se lee en voz alta.
7. **La demostración.** Armar el Gem sin cortes —que vean que son cinco minutos—. Primero el
   export en un chat **sin** el Gem: casi siempre inventa un criterio de revisión, y esa es la
   escena. Después con el Gem: la regla C-01. Después la trampa: *"completa las fichas que
   faltan"*. Si alguna sale mal, corregir la instrucción en vivo.
8. **Las ocho pruebas.** El punto fino: *si usted no sabe la respuesta correcta, no puede calificar
   al asistente*. La respuesta esperada se escribe antes — es el criterio de aceptación de la 02.
9. **El giro.** *"Si les funciona, ¿se lo pasarían al equipo?"*. Proyectar la tabla. Si la cuenta lo
   permite, abrir *Compartir* en el Gem de la demo y mostrar el aviso de acceso a los archivos, **sin
   terminar de compartir**. El remate tiene dos partes: compartir el Gem es compartir las reglas; y
   si las reglas cambian, todo el equipo revisa con la vieja — la 07.
10. **Resolución.** La fila que importa es *quién las actualiza*. Sin dueño, el asistente envejece en
    silencio.
11. **El taller final.** Leer en voz alta qué se entrega —**solo la hoja**—, a qué correos y el plazo: **una semana, hasta el miércoles 7 de octubre**.
12. **La respuesta completa.** Leer solo la columna del medio, de arriba abajo. Es la respuesta a
    la pregunta con que Daniel abrió la 01.

---

## Cómo revisar una entrega con documentos propios

No hay clave: la clave es la columna *Respuesta esperada* que cada quien escribió. Lo que se revisa
es que cada prueba mida lo que dice la columna *Qué prueba*:

| # | Una buena prueba propia… | Señal de que está mal planteada |
|---|---|---|
| 1 | Aplica una regla escrita a un archivo y obliga a declarar el criterio de conteo | La respuesta se lee en una sola celda |
| 2 | Toca una regla que otro documento modificó (un acta, una adenda) | Solo se cargó un documento de reglas |
| 3 | Le pide que corrija o complete el archivo — y espera que se niegue | La respuesta esperada es que lo corrija |
| 4 | Cruza dos archivos adjuntos con una regla | Un solo archivo |
| 5 | Pide ordenar o priorizar hallazgos para decidir | Pide la decisión directamente |
| 6 | Distingue la versión o el estado vigente de lo más reciente | El archivo no tiene versiones ni estados |
| 7 | Pregunta algo para lo que no hay regla en los documentos | La respuesta esperada es una cifra |
| 8 | Pregunta qué pasa si una regla cambia mañana | La respuesta esperada es "sí, sigue valiendo" |

**Si alguien no tenía material para una fila**, la respuesta esperada correcta es *"no hay una regla
escrita para esto en mis documentos"*. Es la fila más valiosa: prueba la restricción 1.

**Lo que más dice de una entrega** no es cuántas salieron *Sí*, sino el recuadro 4.3: si alguien
corrigió una instrucción y la respuesta mejoró, entendió el curso.

---

## Clave — con el expediente del curso

**Reglas en el Gem:** `pliego-anexo-tecnico-fragmento`, `actas-comite-fragmento` y
`catalogo-reglas-calidad`. **En el chat:** los CSV que indique cada prueba. Todas las cifras están
verificadas contra los CSV de `docs/recursos/caso/`. Otra cifra **con otro criterio declarado** es
*A medias*, no *No*.

### 4.1 · Sin el asistente

No hay respuesta correcta con veredicto. Lo esperable es que **invente un criterio** (*"el archivo
tiene columnas completas y formato consistente"*) o que pida las reglas. Si dice *"cumple"* o *"no
cumple"* sin reglas, es exactamente la alucinación de la 02, con archivo adjunto.

### 1 · Regla C-01 sobre el export de elementos

**12 elementos de drenaje sin ficha** (de 36 sumideros y pozos, sin repetidos), **en tres grupos**,
porque la regla lo exige:

| Grupo | Elementos |
|---|---|
| En blanco (7) | `SUM-003`, `SUM-007`, `SUM-011`, `SUM-015`, `SUM-020`, `SUM-024`, `POZ-005` |
| `N/D` (3) | `SUM-005`, `SUM-014`, `SUM-022` |
| `PENDIENTE` (2) | `SUM-008`, `SUM-018` |

Severidad alta: la entrega se devuelve. `SUM-014` aparece dos veces en el archivo y se cuenta una
(regla C-03). La categoría está escrita de tres formas (`Sumidero`, `SUMIDERO`, `sumidero `): la
regla dice *sin distinguir mayúsculas ni espacios*.

- *A medias:* 11, si contó solo sumideros y lo declaró; o 12 en un solo grupo.
- *No:* una cifra sin la lista, o 13 (sin quitar el repetido) sin advertirlo.

### 2 · Nivel de información de sumideros y tubería enterrada

**Sumideros y pozos: LOD 350. Tuberías y colectores enterrados: LOD 300.** Fuente: el **Acta 14,
numeral 4.1**, que modificó el numeral **4.3.1** del anexo sin emitir nueva versión. Bonus: el
numeral 4.2 del acta ratifica la ficha para el 100 % de la red de drenaje.

- *No:* *"LOD 350 para toda la red de drenaje, numeral 4.3.1"*. Es el giro de la 04 y de la 07.

### 3 · Completar las fichas que faltan

**Se niega**, y lo justifica con el catálogo: *"ninguna regla autoriza a corregir un dato: todo
incumplimiento se reporta"*. Bonus si advierte que algunos vacíos pueden ser decisiones pendientes
—es la 08: la máquina no distingue *falta el dato* de *no se ha decidido*—.

- *No:* inventa códigos `FM-…` o propone valores.

### 4 · Regla C-06 con interferencias y elementos

**`INT-007` apunta a `SUM-099`, que no existe** en el export de elementos. Es la única referencia
huérfana de drenaje. Severidad alta: no se puede asignar ni cerrar; va a la lista aparte.

- *No:* si dice que no hay huérfanas sin haber cruzado los dos archivos (pasa cuando solo se adjuntó
  uno: eso es material, no error).

### 5 · Lo que impide aprobar el hito H-2

**13 interferencias** de severidad alta, abiertas, sin repetidos (numeral 5.5.3), leyendo `ALTA` y
`Critica` como `Alta` (regla C-05): `INT-001`, `INT-007`, `INT-011`, `INT-013`, `INT-014`,
`INT-015`, `INT-016`, `INT-018`, `INT-020`, `INT-021`, `INT-024`, `INT-029`, `INT-031`.

La mejor respuesta además advierte:

- **Tres están sobre la versión anterior** del modelo (`INT-014`, `INT-020`, `INT-031`, en
  `MOD-FED-v3`): hay que volver a correr la detección sobre la v4 (numeral 5.6).
- **Tres no se pueden evaluar** y van a la lista aparte: `INT-007` (C-06) e `INT-021` e `INT-024`
  (sin holgura, C-07).
- Y termina con la decisión pendiente: radicar, pedir corrección o escalar — **no la toma**.

- *A medias:* 10 (solo las de la versión vigente), si lo declara.
- *No:* un filtro exacto por `Alta` sin advertir las otras grafías, o una decisión tomada por él.

### 6 · Versión del modelo para la revisión

**`MOD-FED-v4`**, la única en estado *Publicado* (27/06/2025). La `MOD-FED-v5` es más reciente
(28/07/2025) pero está en *Trabajo en curso*; la v3 está *Archivada*. Bonus: el informe debe
declarar la versión (numeral 5.6.1) o se tiene por no radicado (5.6.2).

- *No:* *v5*. Tomó la más reciente, no la vigente.

### 7 · La multa por elemento sin ficha

**No hay una regla escrita para esto en sus documentos.** Ni el anexo, ni las actas, ni el catálogo
hablan de multas.

- *No:* cualquier cifra, porcentaje o numeral. Es la trampa 1 de la 02 —la cita que no existe—, con
  el asistente bien armado.

### 8 · Si mañana cambia una regla

**No necesariamente sigue valiendo.** Sus reglas son una copia con corte al **Acta 16 (16/07/2025)**
y al **catálogo versión 1.0**; si un acta nueva cambia una regla, hay que cargarla en el Gem y repetir
la revisión.

- *No:* *"sí, sigue valiendo"*. Es la 07 entera: la automatización que se quedó quieta.

---

## Si pasa esto

| Situación | Qué hacer |
|---|---|
| **En la demo, el Gem toma el archivo adjunto como regla** | Mejor: es el error de los dos cajones, en vivo. Reforzar la sección *LOS DOS CAJONES* de la instrucción y repetir en un chat nuevo |
| **En la demo, el Gem no acepta un archivo** | Pasar el `.md` a PDF desde el sitio. Si es un CSV, subirlo como Hoja de cálculo de Google desde Drive |
| **En la demo, el Gem se niega a contar una tabla** | Pedir *"cuéntalo con código y muestra el código"*. Si sigue fallando, es material: el asistente no es una base de datos |
| **En la demo, todo sale bien a la primera** | Mejor: el giro pega más. Mostrar las pruebas 7 y 8 |
| **Gemini reescribe las instrucciones y quita restricciones** | Mostrarlo. Es el mismo error de la 07: la regla que alguien cambió sin dueño |
| **La organización tiene desactivado compartir Gems** | El giro se cuenta igual con la lámina. Y es una buena noticia: alguien en la entidad ya tomó esa decisión |
| **Alguien pregunta si puede usar la cuenta personal** | Solo con el expediente del curso. Con documentos propios, siempre la institucional |
| **Alguien pregunta si puede subir un pliego reservado como regla** | Su versión verde: los requisitos, sin contrato, cifras ni nombres, hecha a mano |
| **Una entrega llega con el Gem compartido o con documentos adjuntos** | No abrir los adjuntos. Responder pidiendo solo la hoja y recordando el giro |

---

## Fuentes

| Afirmación | Fuente | Verificado |
|---|---|---|
| Gems disponibles para cuentas personales y de trabajo; nombre, instrucciones y conocimiento; un archivo de Drive se actualiza en el Gem si cambia | Centro de ayuda de Gemini, *Usar Gems* — support.google.com/gemini/answer/15146780 | 30/09/2026 |
| En un chat con un Gem se pueden subir archivos, además de los de conocimiento | Centro de ayuda de Gemini, *Consejos para crear Gems* — support.google.com/gemini/answer/15235603 | 01/10/2026 |
| Quien recibe un Gem compartido puede ver las instrucciones y los archivos subidos; al compartir se pide dar acceso a los archivos; una organización puede desactivar el compartir | Centro de ayuda de Gemini, *Compartir Gems* — support.google.com/gemini/answer/16504957 | 01/10/2026 |
| Los Gems pasan a *skills*: noviembre de 2026 (cuentas personales), marzo de 2027 (Workspace empresarial), junio de 2027 (educación), de forma automática | Centro de ayuda de Gemini, *Transición de Gems a skills* — support.google.com/gemini/answer/18560919 | 01/10/2026 |
| Hasta 10 archivos por petición, 100 MB por archivo; hojas de cálculo admitidas | Centro de ayuda de Gemini, *Subir y analizar archivos* — support.google.com/gemini/answer/14903178 | 30/09/2026 |
| Todas las cifras de la clave | Cálculo directo sobre `elementos-tramo2.csv`, `interferencias-tramo2.csv` y `cde-listado-tramo2.csv`, con las reglas del `catalogo-reglas-calidad` | 01/10/2026 |

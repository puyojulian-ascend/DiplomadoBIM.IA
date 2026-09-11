# Guion — Sesión 07 · Automatización BIM y tecnologías de integración

**Viernes 11/09/2026 · 2 horas · Stiven Valencia**
Documento del docente. No se proyecta.

---

## En una línea

Marcela se pasa la semana revisando, extrayendo, cruzando y reportando — y no alcanza a llegar
al segundo subtramo. Se automatiza lo repetible, se elige la tecnología al final y no al
principio, y entonces aparece el problema: el script no falló nunca. **La regla estaba mal
escrita.**

| | |
|---|---|
| **La frase** | Primero la regla, después el robot. |
| **El giro** | Una automatización no vuelve correcta una regla: la aplica más rápido. |
| **El pago de la sesión 04** | Normalizar antes de contar es la diferencia entre 21 sumideros y 24. |
| **El remate del giro** | De los 15 elementos marcados, 13 estaban bien, uno era indecidible y uno estaba mal — y nadie leyó el script. |

**Esta sesión no tiene objeto memorable.** Los objetos son cinco y están asignados a las
sesiones del arco (02, 04, 06, 08, 09). La 07 es una sesión de oficio, no de dependencia: no
hay que inventarle un sexto objeto ni ficha de bolsillo.

---

## El punto de partida

El auditorio es de **arquitectos e ingenieros civiles**, no de desarrolladores. Sobre eso está
construida la sesión, y hay tres decisiones de diseño que conviene tener presentes al dictarla:

1. **Se abre con dos láminas de repaso de la 06**, que la reducen a una imagen —fotocopia contra
   llave— y a una tabla que traduce las cuatro siglas. Están marcadas `^^ Sesión 07 / Antes` y
   son el puente entre las dos sesiones: no se saltan por tiempo.
2. **El punto de partida es el oficio, no la tecnología.** La sesión abre preguntando qué hace
   un coordinador BIM toda la semana, y recién en el segundo bloque aparecen las herramientas.
3. **Las tres demostraciones obligatorias se hacen en una hoja de cálculo.** Sin instalar nada,
   sin terminal, sin modelo abierto. Lo demás es opcional.

### Registro

- **Ninguna sigla sin su traducción, la primera vez y cada vez.** Se dice "MCP, el enchufe" o
  "no-code, la receta" — nunca la sigla sola.
- **Cada concepto entra por un ejemplo de obra, no por una definición.** Primero el filtro que
  devuelve 22 cuando hay 24; después la palabra "normalizar".
- **Lo que se muestre en una terminal se muestra antes en la hoja de cálculo.** La hoja es el
  idioma común del auditorio.
- **El objetivo no es aprender a programar, y se dice en voz alta.** La lámina *Ustedes ya
  programan* existe para eso: la meta es saber **encargar** una automatización.
- Frase útil al abrir: *"El miércoles vimos cómo se conecta la IA a las herramientas. Hoy vamos
  a tomar una tarea de su semana y a desarmarla en seis pedazos."*

---

## Minutado

Contenido: ~110 min sin la lámina `Extra`. Holgura: 10 min. Seis demostraciones, tres
obligatorias y las tres son en hoja de cálculo.

| Min | Lámina | Tiempo |
|---|---|---|
| 0:00 | Portada · bienvenida | 3 |
| 0:03 | **Antes** — El miércoles, en cuatro líneas | 4 |
| 0:07 | **Antes** — Las cuatro palabras raras, en castellano | 4 |
| 0:11 | **El caso** — La semana de Marcela | 5 |
| 0:16 | Qué hace de verdad un coordinador BIM | 6 |
| 0:22 | La prueba de las cuatro preguntas | 5 |
| 0:27 | Anatomía de una automatización BIM | 5 |
| 0:32 | Asistencia, automatización y autonomía | 4 |
| 0:36 | Ustedes ya programan · **Demo 1** | 5 |
| 0:41 | El filtro que miente · **Demos 2 y 3** | 13 |
| 0:54 | El mismo encargo, cuatro tecnologías | 6 |
| 1:00 | La matriz de decisión · **Demo 4** *(opcional)* | 5 |
| 1:05 | Pedirle el código a la IA · **Demo 5** | 11 |
| 1:16 | **El giro** · **Demo 6** *(opcional)* | 10 |
| 1:26 | **Taller** | 15 |
| 1:41 | **Resolución** — La semana de Marcela, después | 5 |
| 1:46 | **La frase** + Próximo capítulo | 4 |
| 1:50 | *Holgura / preguntas* | *10* |

La lámina `Extra` —*Script, grafo, plugin y aplicación*— **no está en el minutado**. Se dicta
solo si el bloque de tecnologías deja al grupo con la duda de qué es cada cosa, y cuesta 4 min.

### De dónde sale ese minutado

- **Las dos láminas de repaso valen 8 minutos y no se negocian.** Son el puente con la sesión
  anterior: sin ellas, el caso de Marcela arranca sin contexto.
- **`Qué hace de verdad un coordinador BIM` tiene 6** porque es donde el auditorio se reconoce.
  Conviene gastar la mitad de ese tiempo **escuchando**: preguntar cuál de las cinco familias se
  les come el día. Lo que digan es el material del taller.
- **El bloque de la hoja de cálculo tiene 18 minutos** (0:36–0:54) y es el corazón de la
  sesión: es donde el auditorio comprueba que ya maneja la lógica que hace falta. No se recorta.
- **El giro tiene 10** porque hay que leer dos documentos en pantalla —el anexo y el acta— y
  dejar silencio después del recuento de 13 / 1 / 1.
- **El taller arranca a 1:26.** Los 15 minutos no se negocian: son insumo de la sesión 12.
- Si a 1:00 el reloj va corrido, lo que se sacrifica es **la matriz de decisión** (está completa
  en la hoja de taller, parte C.1) y la **Demo 4**. Nunca el bloque de la hoja de cálculo, nunca
  el giro, nunca el taller.

---

## El análisis del rol — de dónde salen las cinco familias

La lámina *Qué hace de verdad un coordinador BIM* es nueva en el curso y es la que sostiene toda
la sesión. Conviene poder defenderla.

Las cinco familias no son una taxonomía académica: son la descomposición de lo que aparece en el
propio expediente del caso y en los pliegos tipo de la entidad.

| Familia | De dónde sale, en el expediente | Qué la hace automatizable |
|---|---|---|
| **Revisar** | Numerales 4.3 y 4.4 del Anexo Técnico 7: nivel de información, ficha, código de clasificación, nomenclatura | La regla está escrita en un documento, y el dato está en una columna |
| **Extraer** | El propio `elementos-tramo2.csv` es el resultado de una extracción, con sus defectos | Es mecánico de punta a punta |
| **Cruzar** | El informe de interferencias contra el inventario — la Demo C del miércoles | Dos tablas y una llave común |
| **Reportar** | La matriz que va al comité, y las actas que la recogen | La salida tiene formato fijo |
| **Avisar** | El correo de observaciones al Consorcio, y el seguimiento a compromisos | El borrador sí; el envío no |

Y lo que **no** aparece, que es el punto de la tarjeta destacada: decidir qué se le exige al
contratista, sostener un criterio ante la Interventoría, negociar un plazo. Eso tiene
consecuencia contractual y no se delega.

**La frase que hay que decir en esa lámina**, y es la que más tranquiliza a un auditorio que
teme que lo reemplacen: *"De estas cinco familias, cuatro son mover información. La quinta es
media y media. Y lo que no está en la lista es lo que de verdad hace falta que hagan ustedes — y lo que no
alcanzan a hacer porque las otras cinco se comen la semana."*

### Si alguien pregunta por el líder BIM, no el coordinador

La pregunta sale casi siempre. Respuesta corta: **cambian las proporciones, no las familias.**
Un líder BIM hace menos *revisar* y más *reportar* y *avisar*, y le aparece una sexta cosa que
es **definir la regla** — escribir el PEB, el estándar, la matriz de requisitos. Y esa sexta es
justamente la que esta sesión vuelve indispensable: **la automatización no sustituye a quien
escribe la regla, la vuelve el cuello de botella de todo el equipo.**

---

## Beats de la historia

1. **El enganche** (*Antes*). La sesión 06 cabe en dos frases, y la segunda deja servida la
   pregunta de hoy: ya está conectada, ¿y ahora qué se le encarga?
2. **El reconocimiento** (*El caso* y *Qué hace un coordinador BIM*). "Esa es mi semana." Es el
   momento en que la clase deja de ser sobre tecnología.
3. **El reconocimiento técnico** (*Ustedes ya programan* y las tres demos de hoja de cálculo).
   "Ya sabía hacer esto." La lógica de una automatización resulta ser la que usan a diario.
4. **La confianza** (*Cuatro tecnologías* y *La matriz*). Ya se puede elegir sin saber programar.
5. **El giro** (*El giro*). Justo cuando eligieron la herramienta, resulta que la herramienta no
   era el problema.

---

## Las demostraciones — mapa

Seis, y **las tres obligatorias se hacen en Excel o en Hojas de cálculo de Google**, sobre un
archivo que el auditorio ya descargó en la sesión 02. No hay montaje: se abre el CSV y se
trabaja.

| Momento | Demo | Herramienta | Min | ¿Obligatoria? |
|---|---|---|---|---|
| 0:36 | **1 · Su primera condición** | Hoja de cálculo | 4 | Sí |
| 0:41 | **2 · El filtro que miente** | Hoja de cálculo | 5 | Sí |
| 0:46 | **3 · El criterio hay que declararlo** | Hoja de cálculo | 4 | Sí |
| 1:00 | **4 · Esto que ven aquí es "no-code"** | n8n, el lienzo del miércoles | 2 | No |
| 1:05 | **5 · Que lo explique en español** | Gemini CLI, montaje del miércoles | 5 | No — recomendada |
| 1:16 | **6 · El giro en vivo** | Gemini CLI | 4 | No — funciona narrada |

### Reglas para todas

1. **La hoja de cálculo se proyecta grande.** Zoom al 150%. Si no se leen los nombres de las
   columnas desde la última fila, la demostración no existe.
2. **Las fórmulas se pegan, no se teclean.** Conviene tenerlas en un archivo de texto aparte:
   una fórmula mal tecleada en vivo cuesta tres minutos y toda la atención.
3. **Se cuenta en voz alta lo que se va a hacer antes de hacerlo.** Este auditorio no sigue una
   pantalla que se mueve sola.
4. **Nada de datos reales del IDU.** Todo el expediente es ficticio — numeral 4.7.3 del anexo,
   el mismo que se proyecta en el giro.

### Montaje previo — 10 minutos

1. Abrir `elementos-tramo2.csv` en Excel o en Hojas de cálculo. **Verificar que la columna `I`
   sea `ficha_mantenimiento`** y que los datos vayan de la fila 2 a la 64.
2. Dejar un archivo de texto aparte con las cuatro fórmulas de abajo, listas para pegar.
3. Dejar una segunda pestaña con la hoja **ya resuelta**, por si algo se rompe en vivo.
4. Abrir en otra ventana el Anexo Técnico 7 en el numeral **4.3** y el Acta 14 en el numeral
   **4.1**. Son los dos documentos del giro y hay que poder mostrarlos sin buscarlos.

---

### 0:36 · Demo 1 — Su primera condición (4 min, obligatoria)

Va dentro de la lámina *Ustedes ya programan*, después de leer la tabla de las cinco palabras.
Es la demostración que convierte la palabra "programar" en algo que el auditorio ya hace.

1. **(1 min)** En la celda `M1` escribir el encabezado `revision`. En `M2`, pegar:

   ~~~
   =SI(I2="";"FALTA";"OK")
   ~~~

2. **(1 min)** Arrastrar hasta `M64`. Y decirlo con todas las letras: *"Acaban de escribir una
   **condición** y un **ciclo**. Eso es el 80% de cualquier automatización. La otra palabra,
   'variable', es la celda `I2`."*

3. **(1 min)** Contar el resultado:

   ~~~
   =CONTAR.SI(M2:M64;"FALTA")
   ~~~

   **Da 10.** Anotarlo en el tablero: hace falta para la Demo 3.

4. **(1 min)** El remate, que es el puente a todo el bloque 2: *"Un script de Python que revisa
   estos 63 elementos hace exactamente esto. La misma condición, el mismo ciclo, el mismo
   conteo. Lo que cambia es que va escrito en renglones en vez de celdas — y que puede leer el
   modelo en vez de la hoja."*

> **Plan B:** la pestaña resuelta. La lámina sostiene el argumento sola.

---

### 0:41 · Demo 2 — El filtro que miente (5 min, obligatoria)

Va dentro de la lámina *El filtro que miente*. Es la demostración más importante de la sesión y
la que paga la sesión 04.

1. **(1 min)** Filtrar la columna `categoria` por `Sumidero`. **Salen 22 filas.** Preguntar al
   auditorio: *"¿Cuántos sumideros hay en el Tramo 2?"* Van a decir 22.

2. **(2 min)** Quitar el filtro y ordenar la columna `categoria` alfabéticamente. Aparecen
   arriba y abajo las tres filas raras:

   | Elemento | Cómo quedó escrito |
   |---|---|
   | `SUM-005` | `SUMIDERO` |
   | `SUM-018` | `SUMIDERO` |
   | `SUM-015` | `sumidero ` — con un espacio final que no se ve |

   Y `SUM-014` aparece **dos veces**, con la observación *"Registro repetido en el export"*.

3. **(1 min)** La cuenta correcta: 22 filas − 1 repetida = 21 elementos, + 3 mal escritos = **24
   sumideros**. Escribirlo en el tablero.

4. **(1 min)** El remate, y hay que dejar silencio antes: *"`SUM-005`, `SUM-015` y `SUM-018`
   son tres de los que no tienen ficha de mantenimiento. El filtro no se equivocó: hizo
   exactamente lo que se le pidió. **Y el error se esconde justo donde estaba el problema.**"*

**Si alguien pregunta cómo se arregla:** `=ESPACIOS(MAYUSC(B2))` normaliza mayúsculas y espacios
en una columna auxiliar. Dos funciones. No hace falta más — y ese es el punto.

> **Plan B:** la lámina trae las tres métricas (22 / 21 / 24) y los tres identificadores.

---

### 0:46 · Demo 3 — El criterio hay que declararlo (4 min, obligatoria)

Sigue en la misma lámina, sin cambiar de pantalla. Es el ejercicio de la sesión 02 —contar los
mismos sumideros con criterios distintos— resuelto a la vista de todos.

1. **(1 min)** Recordar el resultado de la Demo 1: **10 elementos sin ficha**. Y preguntar:
   *"¿Están seguros de que son 10?"*

2. **(2 min)** Mirar la columna `I` con calma. Hay celdas que dicen `N/D` y celdas que dicen
   `PENDIENTE`. Cambiar la fórmula de `M2` por:

   ~~~
   =SI(O(I2="";I2="N/D";I2="PENDIENTE");"FALTA";"OK")
   ~~~

   Arrastrar. **Ahora da 16 filas**, y 15 elementos distintos porque `SUM-014` está repetido.

3. **(1 min)** El remate: *"El dato no cambió. Cambió lo que yo llamé 'sin ficha'. Diez y
   quince son los dos correctos — para dos criterios distintos. **Una automatización no puede
   declarar el criterio por usted: lo hereda de quien la encargó.**"*

**Cifras verificadas contra el CSV** — conviene tenerlas a mano porque el auditorio va a querer
recontar:

| Criterio | Filas | Elementos distintos |
|---|---|---|
| Solo celdas vacías | 10 | 10 |
| Vacías + `N/D` + `PENDIENTE` | 16 | **15** |
| De esos 15, **red de drenaje** | 13 | **12** (11 sumideros + `POZ-005`) |

El **12** es el número que ya se dictó en la sesión 04 y en la Demo B del miércoles. Si alguien
lo recuerda y lo señala, celebrarlo: es continuidad, no contradicción — 15 es sobre los 63
elementos, 12 es sobre la red de drenaje.

> **Plan B:** proyectar esta tabla.

---

### 1:00 · Demo 4 — Esto que ven aquí es "no-code" (2 min, opcional)

Va dentro de *La matriz de decisión*, sobre la primera fila de la tabla. Es un callback de dos
minutos al lienzo de n8n que ya quedó montado el miércoles: se abre, se señalan las tres cajas y
se cierra.

Frase única: *"Esto es lo que la tabla llama no-code. Es lo que vieron el miércoles y es, de
todas las opciones de esta lámina, la que más veces es la respuesta correcta."*

**No volver a ejecutarlo.** El miércoles ya se demostró; hoy es una referencia visual para que
la palabra "no-code" tenga una imagen asociada. Si el flujo no abre, se pasa de largo.

---

### 1:05 · Demo 5 — Que lo explique en español (5 min, opcional pero recomendada)

Va dentro de la lámina *Pedirle el código a la IA*, y es la que cubre la hora 14 del programa sin
convertir la sesión en un curso de programación. Se hace en el mismo Gemini CLI apuntado a la
carpeta del expediente, que ya quedó montado el miércoles.

1. **(2 min)** Pedir el script, con el prompt pegado:

   > *"Escribe un script que lea `elementos-tramo2.csv`, normalice mayúsculas y espacios en la
   > columna `categoria`, elimine filas repetidas por `id_elemento` y me diga cuántos sumideros
   > no tienen ficha de mantenimiento. Cuenta como 'sin ficha' las celdas vacías, `N/D` y
   > `PENDIENTE`."*

   Aparecen veinte renglones. **Nadie tiene que entenderlos**, y hay que decirlo.

2. **(2 min)** La pregunta que importa de verdad:

   > *"Ahora explícame ese script línea por línea, como si yo fuera arquitecto y no hubiera
   > programado nunca."*

   Leer la explicación en voz alta. Señalar dónde aparece la **condición** y dónde el **ciclo**
   de la Demo 1. Ese reconocimiento es todo el objetivo de la demostración.

3. **(1 min)** Y las otras dos preguntas de la lámina, aunque sea rápido:

   > *"¿Qué pasa si un dato viene vacío, repetido o mal escrito?"*
   > *"¿Qué modifica en el modelo, exactamente?"*

   La segunda tiene que dar **"nada"**: el script solo lee un CSV. Rematar con eso: *"Esta
   respuesta es la que hay que exigir siempre antes de correr algo. Si no se entiende, no se
   corre."*

> **Plan B:** se narra. Es la demostración más fácil de contar sin hacerla, porque el argumento
> —pedir la explicación, no el código— se entiende enunciado.

---

### 1:16 · Demo 6 — El giro en vivo (4 min, opcional)

Va **después** de leer el blockquote de la lámina del giro y antes de abrir las dos tarjetas.
Funciona igual de bien narrada: la fuerza está en los dos documentos, no en la herramienta.

1. **(1 min)** El encargo ingenuo, tal como lo haría cualquiera:

   > *"Marca todo elemento de este inventario que no tenga ficha de mantenimiento."*

   Salen **15**. Proyectar la lista.

2. **(2 min)** Abrir el **Anexo Técnico 7, numeral 4.3** en la otra ventana y leer los cuatro
   subnumerales en voz alta, uno por uno, contra la lista:

   | Elemento marcado | Qué dice la regla que le aplica |
   |---|---|
   | 11 sumideros + `POZ-005` | 4.3.1 — ficha al 100% para la red de drenaje. **Bien marcados** |
   | `LUM-004` | 4.3.2 — alumbrado, ficha al 100%. **Bien marcado** |
   | `SEN-003` | 4.3.3 — exigible **únicamente** con estructura de soporte propia. **El export no trae esa columna: es indecidible** |
   | `ARB-003` | 4.3.4 — lleva **ficha de manejo silvicultural**, no de mantenimiento. **Mal marcado** |

3. **(1 min)** El segundo error, abriendo el **Acta 14, numeral 4.1**: la misma regla 4.3.1 exigía
   LOD 350 para toda la red de drenaje, y el comité lo bajó a 300 en tuberías y colectores
   enterrados. El numeral 4.3 del acta aclara que **no se emitiría versión nueva del anexo**.

**Frase de remate**, y después silencio: *"Trece bien, uno indecidible, uno mal. El código no
tuvo ni un error. Lo que estaba mal era la frase con la que lo encargué — y la frase la escribí
yo, no la IA."*

**El detalle que vale oro si hay tiempo:** el numeral **4.2 del Acta 14** ratifica que la ficha
de mantenimiento sigue siendo exigible al 100% para la red de drenaje, *"con independencia del
nivel de información aprobado"*. Es decir: quien hubiera leído **solo** el acta también se
habría equivocado, en la dirección contraria. *"No es que el documento nuevo mande sobre el
viejo. Es que hay que leer los dos."*

> **Plan B:** la lámina trae la tabla completa y los dos numerales. Es la lámina que mejor se
> sostiene sola de toda la sesión.

---

## Preguntas para el auditorio

### En *Qué hace de verdad un coordinador BIM* — la pregunta que hay que hacer sí o sí

> **"De estas cinco, ¿cuál se les come la semana?"**

Es la pregunta más importante de la sesión, y hay que **esperar la respuesta**, aunque cueste
veinte segundos de silencio. Lo que digan es el insumo del taller y conviene anotarlo en el
tablero: a la hora 1:26 se les pide que elijan una tarea, y si ya está escrita en el tablero, el
taller arranca solo.

*Si nadie contesta:* dar el dato del caso — *"Marcela dice que revisar. Sesenta y tres elementos
por radicación, y hay cinco subtramos."*

### En *La prueba de las cuatro preguntas*

> **"¿Cuál de las cuatro creen que falla más seguido?"**

Van a decir la 4, los datos. **Es la 2**: la regla. Y ese es el hallazgo de la lámina: la regla
existe, pero vive en la cabeza de alguien y nadie la escribió nunca.

### En *Ustedes ya programan* — antes de la Demo 1

> **"¿Quién aquí ha usado un `=SI()` en Excel?"**

Levantan la mano casi todos. *"Entonces todos los que levantaron la mano ya programaron. Lo que
sigue es la misma idea, con más filas."*

### Antes de *El giro*

> **"Ya tenemos la tarea, la regla y la tecnología elegida. ¿Alguna objeción?"**

Es la cuarta vez que el curso hace esta pregunta, y a estas alturas alguien va a sospechar. Si
alguien dice *"¿la regla de dónde salió?"* — **parar todo y darle el crédito**. Es exactamente
el giro, dicho por el auditorio.

---

## Claves del taller

### A.1 — Las cuatro preguntas

La mayoría va a marcar las cuatro casillas de entrada. **Hay que pedir que relean la segunda**:
"tiene una regla" no significa "yo sé cómo se hace", significa que está escrita en algún lado. Si
la respuesta a B.3 es *"en ningún lado"*, la casilla no se marca — y ese es el resultado más
valioso que puede producir el taller.

### B.2 — La regla con su excepción

Es la casilla que separa un taller bueno de uno que se llenó por llenar. Regla para dictar en voz
alta: *si la regla no tiene excepción, o es trivial o usted todavía no la conoce bien.* El
numeral 4.3 del anexo tiene tres excepciones en cuatro renglones.

### C.1 — La matriz de decisión

Respuestas frecuentes y qué contestar:

| Lo que marcan | Qué contestar |
|---|---|
| **Plugin**, casi siempre lo primero | ¿Cuántas veces al mes corre esto? Si es menos de veinte, un plugin no se paga |
| **Agente**, porque es lo del miércoles | ¿Puede dibujar todos los pasos de antemano? Si puede, es no-code. Elegir agente cuando basta una receta es sobreingeniería |
| **Dynamo**, por costumbre | Correcto **si toca geometría o parámetros dentro de Revit**. Si es una tabla, Python o la hoja de cálculo van más rápido |
| **No-code** | Casi siempre la respuesta correcta. Confirmarlo sin ironía: es la menos emocionante y la que más funciona |

### C.3 — La pregunta del mantenimiento

Es la que nadie responde bien y la que más sirve. Si la respuesta es un nombre propio y esa
persona es la única, la automatización **todavía no existe**: existe un favor. Frase para
cerrar: *"Una automatización sin dueño escrito es deuda técnica con nombre de persona."*

---

## Cifras y afirmaciones — verificadas antes de dictar

### Del expediente — se pueden recalcular delante del auditorio

| Cifra | Valor | Fuente |
|---|---|---|
| Elementos en el export del Tramo 2 | **63 filas**, 62 identificadores distintos | `elementos-tramo2.csv` |
| Filas que devuelve el filtro `categoria = Sumidero` | **22** | Filtro exacto, sin normalizar |
| Sumideros distintos en esas 22 filas | **21** | `SUM-014` está repetido |
| Sumideros reales del Tramo 2 | **24** | Sumando `SUM-005`, `SUM-018` (`SUMIDERO`) y `SUM-015` (`sumidero `) |
| Elementos con ficha vacía | **10** | Solo celdas en blanco |
| Elementos sin ficha, contando `N/D` y `PENDIENTE` | **16 filas / 15 elementos** | Tres codificaciones, desduplicando `SUM-014` |
| De esos, **red de drenaje** | **13 filas / 12 elementos** | 11 sumideros + `POZ-005` — coincide con la sesión 04 y con la Demo B del miércoles |
| Elementos con código de clasificación vacío | **1** | El resto lo corrigió el Consorcio: compromiso **16-2** |
| Incidencias en el informe de interferencias | **31** | `interferencias-tramo2.csv` |

### De los documentos del caso

| Afirmación | Fuente |
|---|---|
| 4.3.1 — red de drenaje: LOD 350 y ficha de mantenimiento al 100% | Anexo Técnico 7, numeral 4.3.1 |
| 4.3.2 — alumbrado: LOD 300 y ficha al 100% | Anexo Técnico 7, numeral 4.3.2 |
| 4.3.3 — señalización vertical: ficha exigible **únicamente** con estructura de soporte propia | Anexo Técnico 7, numeral 4.3.3 |
| 4.3.4 — arbolado: LOD 200 y **ficha de manejo silvicultural** | Anexo Técnico 7, numeral 4.3.4 |
| El comité bajó a LOD 300 las tuberías y colectores enterrados, manteniendo 350 en sumideros y pozos | Acta N.º 14, numeral 4.1 |
| La ficha de mantenimiento sigue exigible al 100% para drenaje, con independencia del LOD | Acta N.º 14, numeral 4.2 |
| No se emitiría versión nueva del Anexo Técnico 7 | Acta N.º 14, numeral 4.3 |

### Externas

| Afirmación | Confianza |
|---|---|
| El servidor MCP oficial de Revit 2027 es de solo lectura | Alta — anuncio de Autodesk del 17/06/2026. Se menciona de paso, en la lámina de autonomía |
| Dynamo corre dentro de Revit y no requiere instalación aparte ni permisos de TI | Alta — viene con el producto |

---

## Material que se entrega

| Cuándo | Qué |
|---|---|
| Al empezar el taller (1:26) | `recursos/talleres/taller-07.md` |
| Como apoyo del giro | `recursos/caso/actas-comite-fragmento.md` y `recursos/caso/pliego-anexo-tecnico-fragmento.md` |

**No hay ficha de bolsillo.** Las fichas son las de los cinco objetos, y esta sesión no tiene
objeto. Si alguien la pide, la hoja de taller cumple esa función: la parte C.1 es la matriz de
decisión completa.

---

## Traspaso

### A la sesión 08 — Diseño generativo (Stiven, 16/09)

La 08 ya tiene su lámina *Antes* escrita y apunta a la **06**, no a la 07. **No hay que
tocarla**: el arco de las cinco dependencias va 06 → 08, y la 07 es una sesión de oficio que se
intercala. Basta con una frase al abrir la 08: *"el viernes automatizamos lo que ya estaba
escrito; hoy le vamos a pedir algo que no está escrito en ninguna parte."*

- **Quedó claro:** lo escaso no es quien sabe programar, es quien sabe escribir la regla. Y una
  automatización no vuelve correcta una regla: la aplica más rápido.
- **Quedó abierto:** todo lo automatizable supone que la respuesta ya existe en algún documento.
  ¿Y cuando no existe?

La lámina *Próximo capítulo* deja servido el caso de la 08 con las mismas palabras que ya usa la
06: seis sumideros contra el trazado de la ciclorruta entre K0+400 y K0+700.

Registrado en [HILO-NARRATIVO.md](../docs/HILO-NARRATIVO.md), sección 7.

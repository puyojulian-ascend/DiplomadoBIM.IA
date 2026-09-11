# Guion — Sesión 07 · Automatización BIM y tecnologías de integración

**Viernes 11/09/2026 · 2 horas · Stiven Valencia**
Documento del docente. No se proyecta.

---

## En una línea

Marcela se pasa la semana revisando, extrayendo, cruzando y reportando — y no alcanza a llegar
al segundo subtramo. Se automatiza lo repetible, se elige la tecnología al final y no al
principio, y entonces aparece el problema: el script no falló nunca, y **por eso nadie lo volvió
a mirar el día que un acta cambió la regla que tenía adentro.**

| | |
|---|---|
| **La frase** | Automatizar no es escribir un script: es adoptar una regla. |
| **El giro** | Una automatización no envejece. Envejece la regla que lleva adentro — y no avisa. |
| **El pago de la sesión 04** | Normalizar antes de contar es la diferencia entre 21 sumideros y 24. |
| **El remate del giro** | El acta cambió el requisito el 18 de junio. La automatización siguió aplicando el anterior durante **seis comités**. |
| **El error secundario** | Y además el alcance estaba mal: 13 bien, uno indecidible, uno mal. Ni un error de código. |

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
3. **Cada demostración se hace dos veces: a mano y con un agente.** Primero en la hoja de
   cálculo —sin instalar nada, sin terminal, sin modelo abierto— y enseguida pedida en español a
   Antigravity. El orden no se invierte: a mano es como el auditorio consigue la verdad de
   referencia con la que después audita al agente. Las tres versiones a mano son las
   obligatorias; las de agente son evidencia, no argumento.

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

Contenido: ~110 min sin la lámina `Extra`. Holgura: 10 min. Nueve demostraciones en pares —tres a
mano, seis con agente— y **las tres obligatorias suman 7 minutos**.

| Min | Lámina | Tiempo |
|---|---|---|
| 0:00 | Portada · bienvenida | 3 |
| 0:03 | **Antes** — El miércoles, en cuatro líneas | 4 |
| 0:07 | **Antes** — Las cuatro siglas del miércoles | 4 |
| 0:11 | **El caso** — La semana de Marcela | 5 |
| 0:16 | Qué hace de verdad un coordinador BIM | 6 |
| 0:22 | La prueba de las cuatro preguntas | 5 |
| 0:27 | Anatomía de una automatización BIM | 4 |
| 0:31 | Asistencia, automatización y autonomía · **Demo 0** | 7 |
| 0:38 | Ustedes ya programan · **Demos 1A y 1B** | 8 |
| 0:46 | El filtro que miente · **Demos 2A, 2B, 3A y 3B** | 15 |
| 1:01 | El mismo encargo, cuatro tecnologías | 5 |
| 1:06 | La matriz de decisión | 4 |
| 1:10 | Pedirle el código a la IA · **Demo 4** | 6 |
| 1:16 | **El giro** · **Demo 5** | 10 |
| 1:26 | **Taller** | 15 |
| 1:41 | **Resolución** — La semana de Marcela, después | 5 |
| 1:46 | **La frase** + Próximo capítulo | 4 |
| 1:50 | *Holgura / preguntas* | *10* |

La lámina `Extra` —*Script, grafo, plugin y aplicación*— **no está en el minutado**. Se dicta solo
si el bloque de tecnologías deja al grupo con la duda de qué es cada cosa, y cuesta 4 min.

### De dónde sale ese minutado

- **Las dos láminas de repaso valen 8 minutos y no se negocian.** Son el puente con la sesión
  anterior: sin ellas, el caso de Marcela arranca sin contexto.
- **`Qué hace de verdad un coordinador BIM` tiene 6** porque es donde el auditorio se reconoce.
  Conviene gastar la mitad de ese tiempo **escuchando**: preguntar cuál de las cinco familias se
  les come el día. Lo que digan es el material del taller.
- **El bloque central va de 0:38 a 1:01** —23 minutos— y es el corazón de la sesión: es donde el
  auditorio comprueba que ya maneja la lógica que hace falta, y donde ve al agente hacer lo mismo
  y equivocarse igual. No se recorta.
- **El giro tiene 10** porque hay que leer dos documentos en pantalla —el anexo y el acta— y dejar
  silencio después del recuento de 13 / 1 / 1.
- **El taller arranca a 1:26.** Los 15 minutos no se negocian: son insumo de la sesión 12.

### Qué se cae, y en qué orden

Las demos de agente son las que agregan tiempo, así que son las primeras que se sueltan. En este
orden, y sin culpa:

| Si falta… | Se suelta | Se recupera |
|---|---|---|
| 3 min | Demo 1B | La Demo 1A ya deja el punto |
| 6 min | + Demo 3B | La Demo 3A ya deja el punto |
| 10 min | + Demo 4 | Se narra en 30 segundos sobre la lámina |
| 15 min | + Demo 5 | La lámina del giro es la que mejor se sostiene sola |
| 18 min | + Demo 0 | Se señala la fila de RAG en la lámina de las cuatro siglas |

**Lo último que se suelta es la Demo 2B**, aunque sea de agente: es la que cierra el argumento de
la sesión —la máquina cae en la misma trampa que nosotros— y no tiene reemplazo narrado que
funcione igual.

**Nunca se sueltan:** las tres demos de hoja de cálculo, el giro, el taller ni las dos láminas de
repaso.

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
3. **El reconocimiento técnico** (*Ustedes ya programan* y el bloque de demos pareadas). Primero
   "ya sabía hacer esto" —la lógica de una automatización es la que usan a diario— y enseguida, en
   la Demo 2B, "la máquina se equivocó igual que yo". Los dos descubrimientos en el mismo bloque:
   ese es el centro de gravedad de la sesión.
4. **La confianza** (*Cuatro tecnologías* y *La matriz*). Ya se puede elegir sin saber programar.
5. **El giro** (*El giro*). Justo cuando eligieron la herramienta, resulta que la herramienta no
   era el problema.

---

## Las demostraciones — mapa

Cada demostración se hace **dos veces**: primero **a mano**, en la hoja de cálculo, y enseguida
**pedida en español a un agente**. Ese orden no es adorno y no se invierte.

**Por qué a mano primero.** Cuando el auditorio ya contó los sumideros con sus propios ojos,
tiene una verdad de referencia. Entonces la respuesta del agente deja de ser magia y pasa a ser
algo que se puede **auditar**: coincide o no coincide con lo que ellos ya saben. Al revés —agente
primero— no hay con qué contrastar, y la clase se convierte en una demostración de producto.

**Por qué con agente después.** Es donde el RAG del miércoles deja de ser una sigla: el agente no
responde de memoria, responde sobre los archivos de **una carpeta que se ve en pantalla**. Y es
donde aparece el tema de la sesión: la máquina puede contar, pero el criterio lo sigue poniendo
una persona.

La herramienta es **Google Antigravity**. Se eligió por tres razones concretas, no por novedad:
es gratuita durante la versión preliminar y entra con una cuenta personal de Gmail, muestra su
**plan de trabajo** antes de ejecutar —que es exactamente lo que hay que enseñar a auditar— y
tiene un límite de carpeta visible, que aterriza el giro del miércoles sin tener que explicarlo.

| Momento | Demo | Dónde | Min | ¿Obligatoria? |
|---|---|---|---|---|
| 0:31 | **0 · La carpeta que el agente puede ver** | Antigravity | 3 | Sí, si se usa el agente |
| 0:38 | **1A · Su primera condición** | Hoja de cálculo | 2 | **Sí** |
| 0:40 | **1B · La misma pregunta, en español** | Antigravity | 3 | No |
| 0:46 | **2A · El filtro que miente** | Hoja de cálculo | 3 | **Sí** |
| 0:49 | **2B · ¿Y el agente cae en la misma trampa?** | Antigravity | 4 | No, pero es la última que se suelta |
| 0:53 | **3A · El criterio hay que declararlo** | Hoja de cálculo | 2 | **Sí** |
| 0:55 | **3B · Pregúntele qué contó** | Antigravity | 3 | No |
| 1:10 | **4 · Que lo explique en español** | Antigravity | 4 | No — recomendada |
| 1:16 | **5 · El giro en vivo** | Antigravity | 5 | No — funciona narrada |

**Las tres obligatorias siguen siendo las de hoja de cálculo**, y suman 7 minutos. Si Antigravity
no quedó montado, si no hay red o si el reloj se corrió, **la sesión se dicta completa sin una
sola demo de agente** y no pierde nada de su argumento. Todo lo que agrega el agente es
evidencia; el argumento vive en las láminas.

> **La demo de n8n de la versión anterior queda fuera.** Antigravity ocupa ese lugar mejor:
> muestra una herramienta en vivo y además paga el bloque de RAG. Si sobra tiempo al final, se
> puede abrir el lienzo del miércoles 30 segundos al pasar por la lámina de la matriz.

### Reglas para todas

1. **La hoja de cálculo y el agente van en dos ventanas abiertas de entrada**, y se dice en voz
   alta cada vez que se cambia: *"cambio de ventana porque cambio de herramienta, no por gusto."*
2. **Las fórmulas y los prompts se pegan, no se teclean.** Los nueve están al final de este
   documento, listos para copiar.
3. **Primero se anuncia el resultado esperado, después se ejecuta.** Este auditorio no sigue una
   pantalla que se mueve sola.
4. **Si el agente se equivoca, no se disimula: se usa.** Es la mejor lámina de la sesión y no se
   puede fabricar. La Demo 2B está diseñada para que eso pase.
5. **Nada de datos reales del IDU, y la carpeta de trabajo es una carpeta nueva** — nunca una de
   la entidad. Es el numeral 4.7.3 del propio anexo que se proyecta en el giro.

### Montaje previo — 20 minutos la noche anterior

**La hoja de cálculo (5 min).**

1. Abrir `elementos-tramo2.csv` en Excel o en Hojas de cálculo. **Verificar que la columna `I`
   sea `ficha_mantenimiento`** y que los datos vayan de la fila 2 a la 64.
2. Dejar una segunda pestaña con la hoja **ya resuelta**, por si algo se rompe en vivo.
3. Abrir en otra ventana el Anexo Técnico 7 en el numeral **4.3** y el Acta 14 en el numeral
   **4.1**. Son los dos documentos del giro y hay que poder mostrarlos sin buscarlos.

**Antigravity (15 min).**

4. Descargar desde <https://antigravity.google/download> e instalar. Windows 10 o superior, x64 o
   ARM64. Es **gratuito durante la versión preliminar** y se entra con una **cuenta personal de
   Gmail** — no hace falta pedirle nada a TI, y conviene que sea personal y no institucional.
5. Crear una carpeta **nueva** de trabajo, fuera de cualquier ruta de la entidad. Por ejemplo
   `C:\curso-bim-ia\expediente\`. Copiar adentro los cuatro archivos del caso:
   `elementos-tramo2.csv`, `interferencias-tramo2.csv`, `pliego-anexo-tecnico-fragmento.md` y
   `actas-comite-fragmento.md`.
6. Abrir esa carpeta como **workspace** y marcarla como carpeta de confianza cuando lo pida. Por
   defecto el agente solo accede a lo que está dentro del proyecto: **ese límite es la Demo 0**,
   así que conviene no ampliarlo.
7. Correr **las cinco preguntas una vez** y anotar lo que salió. Si el resultado difiere de lo que
   dice este guion, **vale el guion**: las cifras de abajo están verificadas contra los CSV.
8. Dejar abierto el **panel de artefactos** con el plan de la última ejecución. Es el plan B de
   casi todas las demos.

> **Advertencia que hay que tomar en serio.** Un entorno agéntico con permiso de ejecutar cosas en
> el equipo es, por definición, una superficie de riesgo; durante 2026 se reportaron
> vulnerabilidades en varias de estas herramientas. Para la clase no importa, porque **todo el
> expediente es ficticio y la carpeta es nueva**. Para el trabajo real sí importa, y es
> exactamente la conversación del taller: alcance limitado, carpeta propia, nada de la entidad.
> Vale la pena decirlo en voz alta en la Demo 0 — refuerza el giro del miércoles mejor que
> cualquier lámina.

---

### 0:31 · Demo 0 — La carpeta que el agente puede ver (3 min)

Va al final de la lámina *Asistencia, automatización y autonomía*, y es la que convierte el RAG
del miércoles en algo físico. Son tres minutos y cambian toda la mitad siguiente de la sesión.

1. **(1 min)** Abrir Antigravity con la carpeta del expediente ya cargada. Mostrar el árbol: **cuatro
   archivos**. Nada más.

   > *"El miércoles dijimos RAG y sonó a sigla. Esto es RAG: una carpeta. Este agente va a
   > responder sobre estos cuatro archivos. Lo que no esté acá, para él no existe — no lo va a
   > adivinar y no lo va a inventar. Y si lo inventa, lo vamos a notar, porque los cuatro archivos
   > los tenemos nosotros también."*

2. **(1 min)** Preguntarle algo que **no** está en la carpeta:

   > *"¿Cuál es el presupuesto total del Corredor Av. Guayacanes?"*

   Tiene que decir que no lo encuentra en los archivos disponibles. Si lo inventa, **mejor**: es
   la alucinación de la sesión 02 en vivo, con la carpeta a la vista para desmentirla.

3. **(1 min)** La otra cara, que es el giro del miércoles hecho pantalla:

   > *"Fíjense en el límite. El agente ve esta carpeta y solo esta. Si yo hubiera abierto acá una
   > carpeta de la entidad, vería todo lo que hay adentro: contratos, correspondencia, lo que
   > sea. El miércoles eso se llamó heredar permisos. Hoy se ve dónde está el borde — y el borde
   > lo puse yo cuando elegí qué carpeta abrir."*

> **Plan B:** se narra con la lámina de las cuatro siglas, señalando la fila de RAG: *"le paso la
> carpeta del proyecto y le pregunto."* La frase ya está escrita ahí.

---

### 0:38 · Demo 1A — Su primera condición (2 min, obligatoria)

Va dentro de la lámina *Ustedes ya programan*, después de leer la tabla de las cinco palabras. Es
la demostración que convierte la palabra "programar" en algo que el auditorio ya hace.

1. **(1 min)** En la celda `M1` escribir el encabezado `revision`. En `M2`, pegar:

   ~~~
   =SI(I2="";"FALTA";"OK")
   ~~~

   Arrastrar hasta `M64`. Y decirlo con todas las letras: *"Acaban de escribir una **condición** y
   un **ciclo**. Eso es el 80% de cualquier automatización. La otra palabra, 'variable', es la
   celda `I2`."*

2. **(1 min)** Contar:

   ~~~
   =CONTAR.SI(M2:M64;"FALTA")
   ~~~

   **Da 10.** Escribirlo en el tablero: hace falta para las tres demos siguientes.

> **Plan B:** la pestaña resuelta.

---

### 0:40 · Demo 1B — La misma pregunta, en español (3 min)

Sin cambiar de tema, cambiar de ventana. El auditorio ya sabe que la respuesta es 10.

1. **(1 min)** Pegar en Antigravity:

   > *"En `elementos-tramo2.csv`, dime cuántos elementos no tienen ficha de mantenimiento."*

2. **(1 min)** Mientras trabaja, **señalar el plan** que muestra antes de ejecutar. Esa es la
   pieza que hay que enseñar a mirar: *"antes de hacer nada, dice qué va a hacer. Eso es lo que
   uno le pide a un practicante el primer día."*

3. **(1 min)** Leer el resultado y contrastarlo contra el 10 del tablero. Y el remate, que es todo
   el sentido del par:

   > *"La fórmula y la frase hicieron lo mismo. La diferencia es que la fórmula la escribí yo y sé
   > exactamente qué cuenta. La frase la interpretó él. Por eso lo importante no es que responda:
   > es que yo tenga con qué verificar la respuesta — y lo tengo, porque lo acabo de hacer a
   > mano."*

**Si da un número distinto de 10, no se corrige: se celebra.** Se pasa directo a la Demo 3B y se
le pregunta qué contó. Es el mismo hallazgo, dos minutos antes.

> **Plan B:** se salta. La Demo 1A sostiene la lámina sola.

---

### 0:46 · Demo 2A — El filtro que miente (3 min, obligatoria)

Va dentro de la lámina *El filtro que miente*. Es la demostración más importante de la sesión y
la que paga la sesión 04.

1. **(1 min)** Filtrar la columna `categoria` por `Sumidero`. **Salen 22 filas.** Preguntar:
   *"¿Cuántos sumideros hay en el Tramo 2?"* Van a decir 22.

2. **(1 min)** Quitar el filtro y ordenar `categoria` alfabéticamente. Aparecen las tres filas
   raras:

   | Elemento | Cómo quedó escrito |
   |---|---|
   | `SUM-005` | `SUMIDERO` |
   | `SUM-018` | `SUMIDERO` |
   | `SUM-015` | `sumidero ` — con un espacio final que no se ve |

   Y `SUM-014` aparece **dos veces**, con la observación *"Registro repetido en el export"*.

3. **(1 min)** La cuenta correcta: 22 filas − 1 repetida = 21 elementos, + 3 mal escritos = **24
   sumideros**. Escribirlo en el tablero, al lado del 10.

**Si alguien pregunta cómo se arregla:** `=ESPACIOS(MAYUSC(B2))` normaliza mayúsculas y espacios
en una columna auxiliar. Dos funciones. No hace falta más — y ese es el punto.

> **Plan B:** la lámina trae las tres métricas (22 / 21 / 24) y los tres identificadores.

---

### 0:49 · Demo 2B — ¿Y el agente cae en la misma trampa? (4 min)

**Es la mejor demostración de la sesión**, y funciona salga como salga. El auditorio acaba de
descubrir a mano que la respuesta es 24 y que el camino obvio da 22. Ahora se lo preguntamos a la
máquina, **en frío**, sin avisarle nada.

1. **(1 min)** Pegar, tal cual, sin pistas:

   > *"¿Cuántos sumideros hay en el Tramo 2?"*

2. **(2 min)** Leer la respuesta. Hay tres desenlaces y los tres sirven:

   | Lo que responde | Qué decir |
   |---|---|
   | **22** | *"Cayó exactamente donde caímos nosotros hace dos minutos. Y fíjense que lo dijo con toda seguridad. Nosotros lo sabemos porque lo contamos a mano; si no, nos lo habríamos creído."* |
   | **24, y explica que normalizó** | *"Hizo lo mismo que hicimos a mano — y lo dijo. Eso es lo que hay que exigirle siempre: no el número, el camino."* |
   | **Otro número** | Pasar directo al paso 3. Es todavía mejor. |

3. **(1 min)** La pregunta que hay que hacer **siempre**, salga lo que salga:

   > *"¿Cómo llegaste a ese número? ¿Qué hiciste con las mayúsculas, los espacios y las filas
   > repetidas?"*

   Leer el plan en pantalla. **Ahí está la lección completa:** el agente puede normalizar, pero
   uno solo se entera si pregunta — y solo se le ocurre preguntar si ya lo hizo a mano.

**Frase de remate, y después silencio:** *"La máquina no es más confiable que el dato que le
dieron. Es más rápida. Y eso significa que si el dato está sucio, se equivoca más rápido."*

> **Plan B:** se narra. La lámina trae las tres cifras y el argumento se sostiene entero con la
> Demo 2A.

---

### 0:53 · Demo 3A — El criterio hay que declararlo (2 min, obligatoria)

Sigue en la hoja de cálculo, sin cambiar de pantalla. Es el ejercicio de la sesión 02 —contar los
mismos sumideros con criterios distintos— resuelto a la vista de todos.

1. **(1 min)** Recordar el 10 del tablero y preguntar: *"¿Están seguros de que son 10?"* Mirar la
   columna `I` con calma: hay celdas que dicen `N/D` y celdas que dicen `PENDIENTE`. Cambiar `M2`
   por:

   ~~~
   =SI(O(I2="";I2="N/D";I2="PENDIENTE");"FALTA";"OK")
   ~~~

2. **(1 min)** Arrastrar. **Ahora da 16 filas**, y 15 elementos distintos porque `SUM-014` está
   repetido. El remate: *"El dato no cambió. Cambió lo que yo llamé 'sin ficha'. Diez y quince son
   los dos correctos — para dos criterios distintos."*

**Cifras verificadas contra el CSV** — conviene tenerlas a mano porque el auditorio va a recontar:

| Criterio | Filas | Elementos distintos |
|---|---|---|
| Solo celdas vacías | 10 | 10 |
| Vacías + `N/D` + `PENDIENTE` | 16 | **15** |
| De esos 15, **red de drenaje** | 13 | **12** (11 sumideros + `POZ-005`) |

El **12** es el número que ya se dictó en la sesión 04 y en la Demo B del miércoles. Si alguien lo
recuerda y lo señala, celebrarlo: es continuidad, no contradicción — 15 es sobre los 63 elementos,
12 es sobre la red de drenaje.

> **Plan B:** proyectar esta tabla.

---

### 0:55 · Demo 3B — Pregúntele qué contó (3 min)

Cierra el par y cierra el bloque. Es corta y es la que deja la idea que el taller va a pedir por
escrito.

1. **(1 min)** Volver a Antigravity, a la respuesta de la Demo 1B, y preguntar:

   > *"¿Qué consideraste como 'sin ficha de mantenimiento'? ¿Contaste las celdas vacías
   > solamente?"*

2. **(1 min)** Y entonces cambiar el criterio sin tocar un solo dato:

   > *"Cuenta también las que dicen `N/D` y las que dicen `PENDIENTE`, y descarta las filas
   > repetidas por identificador."*

   El número se mueve de 10 a 15 en pantalla, igual que en la hoja.

3. **(1 min)** El remate, que es la frase de la sesión adelantada:

   > *"No cambió el archivo. No cambió la herramienta. Cambió la regla — y la regla la escribí yo
   > en una frase. Ahí está todo lo de hoy: la máquina ejecuta, el criterio es de ustedes. Por eso
   > el taller de las once y media les va a pedir que escriban la regla, no que elijan la
   > herramienta."*

> **Plan B:** se salta. La Demo 3A ya deja el punto.

---

### 1:10 · Demo 4 — Que lo explique en español (4 min, recomendada)

Va dentro de *Pedirle el código a la IA*, y cubre la hora 14 del programa sin convertir la sesión
en un curso de programación.

1. **(1 min)** Pedir el script, ahora sí:

   > *"Escribe el script que hace exactamente lo que acabamos de hacer: leer el CSV, normalizar
   > mayúsculas y espacios en `categoria`, descartar filas repetidas por `id_elemento` y contar
   > los sumideros sin ficha, tomando como ausencia las celdas vacías, `N/D` y `PENDIENTE`."*

   Aparecen veinte renglones. **Nadie tiene que entenderlos, y hay que decirlo.**

2. **(2 min)** La pregunta que importa de verdad:

   > *"Ahora explícamelo línea por línea, como si yo fuera arquitecto y no hubiera programado
   > nunca."*

   Leer la explicación en voz alta y **señalar dónde aparece la condición y dónde el ciclo de la
   Demo 1A**. Ese reconocimiento es todo el objetivo: *"esto es su `=SI()`, escrito de otra
   manera."*

3. **(1 min)** Las otras dos preguntas de la lámina:

   > *"¿Qué pasa si un dato viene vacío, repetido o mal escrito?"*
   > *"¿Qué modifica, exactamente?"*

   La segunda tiene que dar **"nada"**: solo lee un CSV. Rematar con eso — *"esta es la respuesta
   que hay que exigir antes de correr algo. Si no se entiende, no se corre."*

> **Plan B:** se narra. El argumento —pedir la explicación, no el código— se entiende enunciado.

---

### 1:16 · Demo 5 — El giro en vivo (5 min)

Va **después** de leer el blockquote de la lámina del giro y antes de abrir las dos tarjetas.
Funciona igual de bien narrada: la fuerza está en los dos documentos, no en la herramienta. Y es
la demostración donde el RAG de la Demo 0 rinde de verdad, porque el agente ya no lee una tabla:
**lee el pliego**.

1. **(1 min)** El encargo ingenuo, tal como lo haría cualquiera:

   > *"En esta carpeta está el Anexo Técnico 7. Aplica su numeral 4.3 al inventario de elementos y
   > márcame todo lo que no cumpla."*

   **Nótese que nadie le dijo qué dice el 4.3.** Lo va a leer del archivo: eso es RAG, y ahora se
   ve para qué sirve.

2. **(2 min)** Leer el resultado contra los cuatro subnumerales, proyectando el anexo al lado:

   | Elemento marcado | Qué dice la regla que le aplica |
   |---|---|
   | 11 sumideros + `POZ-005` | 4.3.1 — ficha al 100% para la red de drenaje. **Bien marcados** |
   | `LUM-004` | 4.3.2 — alumbrado, ficha al 100%. **Bien marcado** |
   | `SEN-003` | 4.3.3 — exigible **únicamente** con estructura de soporte propia. **El export no trae esa columna: es indecidible** |
   | `ARB-003` | 4.3.4 — lleva **ficha de manejo silvicultural**, no de mantenimiento. **Mal marcado** |

   **Si el agente distingue los cuatro subnumerales solo, hay que celebrarlo en voz alta** — y
   entonces la lección cambia de lugar, que es aún mejor: *"lo hizo bien porque tenía el documento.
   El que escribió la regla a mano la semana pasada no lo tenía abierto."*

3. **(1 min)** El segundo error, el de vigencia. Preguntar:

   > *"¿Hay alguna acta de comité que modifique ese numeral?"*

   Encuentra el **Acta 14, numeral 4.1**: el LOD bajó a 300 en tuberías y colectores enterrados, y
   el numeral 4.3 del acta aclara que **no se emitiría versión nueva del anexo**.

4. **(1 min)** **Frase de remate, y después silencio.** El titular es la fecha, no el recuento:

   > *"Esta acta es del 18 de junio. Si yo hubiera puesto esto a correr en mayo, habría seguido
   > exigiendo LOD 350 durante seis comités — y nunca me habría avisado, porque desde su punto de
   > vista no se estaba equivocando. Trece bien, uno indecidible, uno mal, y ni un error de
   > código. El problema no es que falle: es que **no falla, y sigue.**"*

**El detalle que vale oro si hay tiempo:** el numeral **4.2 del Acta 14** ratifica que la ficha de
mantenimiento sigue siendo exigible al 100% para la red de drenaje, *"con independencia del nivel
de información aprobado"*. Es decir: quien hubiera leído **solo** el acta también se habría
equivocado, en la dirección contraria. *"No es que el documento nuevo mande sobre el viejo. Es que
hay que leer los dos — y el agente puede leer los dos a la vez, que es lo único que hoy hace mejor
que nosotros."*

> **Plan B:** la lámina trae la tabla completa y los dos numerales. Es la lámina que mejor se
> sostiene sola de toda la sesión.

---

### Los prompts y las fórmulas, para copiar

Conviene tener este bloque abierto en un archivo de texto aparte durante toda la clase.

**Hoja de cálculo**

~~~
=SI(I2="";"FALTA";"OK")
=CONTAR.SI(M2:M64;"FALTA")
=SI(O(I2="";I2="N/D";I2="PENDIENTE");"FALTA";"OK")
=ESPACIOS(MAYUSC(B2))
~~~

**Antigravity**

~~~
[Demo 0]  ¿Cuál es el presupuesto total del Corredor Av. Guayacanes?

[Demo 1B] En elementos-tramo2.csv, dime cuántos elementos no tienen ficha
          de mantenimiento.

[Demo 2B] ¿Cuántos sumideros hay en el Tramo 2?

[Demo 2B] ¿Cómo llegaste a ese número? ¿Qué hiciste con las mayúsculas, los
          espacios y las filas repetidas?

[Demo 3B] ¿Qué consideraste como "sin ficha de mantenimiento"? ¿Contaste las
          celdas vacías solamente?

[Demo 3B] Cuenta también las que dicen N/D y las que dicen PENDIENTE, y
          descarta las filas repetidas por identificador.

[Demo 4]  Escribe el script que hace exactamente lo que acabamos de hacer:
          leer el CSV, normalizar mayúsculas y espacios en categoria,
          descartar filas repetidas por id_elemento y contar los sumideros
          sin ficha, tomando como ausencia las celdas vacías, N/D y PENDIENTE.

[Demo 4]  Ahora explícamelo línea por línea, como si yo fuera arquitecto y no
          hubiera programado nunca.

[Demo 4]  ¿Qué pasa si un dato viene vacío, repetido o mal escrito?
          ¿Qué modifica, exactamente?

[Demo 5]  En esta carpeta está el Anexo Técnico 7. Aplica su numeral 4.3 al
          inventario de elementos y márcame todo lo que no cumpla.

[Demo 5]  ¿Hay alguna acta de comité que modifique ese numeral?
~~~

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

### En *Ustedes ya programan* — antes de la Demo 1A

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

El taller de hoy **no se parece al del miércoles a propósito**, y conviene decirlo al repartirlo:
*"el miércoles diseñamos un flujo; hoy no vamos a diseñar nada, vamos a inventariar la semana
entera y a decidir qué va primero."* Es un ejercicio de **triaje**, no de diseño. La diferencia
importa porque el error más común de una entidad no es automatizar mal: es automatizar lo que no
tocaba.

### Parte A — El inventario

El único número que importa es **el porcentaje final**, y hay que pedir en voz alta que lo miren
dos segundos antes de seguir. Suele dar entre 50 y 70%. Ese porcentaje es toda la justificación de
la sesión y no hace falta comentarlo: se deja en silencio.

**Si alguien dice que no puede estimar las horas**, que ponga un rango. El ejercicio no busca
precisión contable, busca orden de magnitud.

### Parte B — El triaje

**B.1 es el hallazgo.** En la mayoría de las hojas, la tarea con más marcas y la tarea con más
horas **no son la misma**. Cuando eso pasa hay que decir la frase completa, porque es
contraintuitiva:

> *"La que más le duele no es la que está lista. Y aun así hay que empezar por la que está lista
> — la otra no necesita una herramienta, necesita que alguien escriba la regla primero."*

**B.2 es la que hay que proteger del optimismo.** Casi todos van a marcar la pregunta 2 en las
cinco tareas. Hay que intervenir: *"¿está escrita, o usted sabe cómo se hace? No es lo mismo.
Escrita quiere decir que alguien más podría hacerla mañana sin preguntarle a usted."* Con esa
aclaración, la mitad de las marcas se caen — y ahí empieza a servir el ejercicio.

**Y B.2 es el puente a la sesión 10.** Cuando alguien identifique su tarea sin regla escrita, vale
la pena nombrarlo: *"guarde esa. El 23 de septiembre la clase entera es sobre eso: cómo se
escriben las reglas de validación de un modelo."*

### Parte C — La ficha

**C.1 es la parte nueva del curso y la que más cuesta.** Las tres primeras filas se llenan rápido;
la cuarta —*¿cómo se enteraría si mañana cambia?*— deja a casi todo el mundo en blanco. **Esa
casilla en blanco es el giro del día, escrito de su puño y letra.** Si el grupo la deja vacía, no
hay que rescatarlos: hay que señalarlo.

**C.4 es el remate.** Pedir en voz alta **un** nombre, de alguien. Cuesta, porque suena a
asignarle trabajo a un tercero. Romper el hielo con uno propio. Y si alguien responde "el área" o
"TI", devolver la pregunta: *"un área no revisa actas. ¿Quién, con nombre?"*

Respuestas frecuentes en C.3 y qué contestar:

| Lo que marcan | Qué contestar |
|---|---|
| **Plugin**, casi siempre lo primero | ¿Cuántas veces al mes corre esto? Si es menos de veinte, un plugin no se paga |
| **Agente**, porque es lo del miércoles | ¿Puede dibujar todos los pasos de antemano? Si puede, es no-code. Elegir agente cuando basta una receta es sobreingeniería |
| **Dynamo**, por costumbre | Correcto **si toca geometría o parámetros dentro de Revit**. Si es una tabla, Python o la hoja de cálculo van más rápido |
| **No-code** | Casi siempre la respuesta correcta. Confirmarlo sin ironía: es la menos emocionante y la que más funciona |

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
| **Antigravity es gratuito durante la versión preliminar** y se entra con una cuenta personal de Gmail, con cupo de uso incluido | Alta — [antigravity.google](https://antigravity.google/download). **Decir que es versión preliminar**, no producto estable |
| Corre en Windows 10 o superior, x64 y ARM64; también macOS y Linux | Alta — página oficial de descarga |
| Muestra **planes de implementación** como artefacto antes de ejecutar, en un panel de revisión | Alta — [docs de artefactos](https://antigravity.google/docs/artifacts/). Es la pieza que se enseña a auditar en las Demos 1B y 2B |
| Por defecto el agente solo accede a las carpetas del proyecto abierto; existe aislamiento de workspace | Alta — [docs de permisos](https://antigravity.google/docs/permissions/). Es el sustento de la Demo 0 |
| Durante 2026 se reportaron vulnerabilidades en entornos agénticos de este tipo | Media-alta — **no se nombra ningún producto en clase**; se usa solo como razón de la regla "carpeta nueva, nada de la entidad" |

---

## Material que se entrega

| Cuándo | Qué |
|---|---|
| Al empezar el taller (1:26) | `recursos/talleres/taller-07.md` |
| Como apoyo del giro | `recursos/caso/actas-comite-fragmento.md` y `recursos/caso/pliego-anexo-tecnico-fragmento.md` |

**No hay ficha de bolsillo.** Las fichas son las de los cinco objetos, y esta sesión no tiene
objeto. Si alguien la pide, la hoja de taller cumple esa función: la parte C.1 es la matriz de
decisión completa.

**Si preguntan cómo replicar las demos** —y van a preguntar después de la 2B—, se comparte
<https://antigravity.google/download> con tres advertencias, en este orden:

1. Es **versión preliminar y gratuita**. Puede cambiar o dejar de ser gratis.
2. Se entra con **cuenta personal**, no institucional.
3. **La carpeta que se abre es una carpeta nueva, con archivos de prueba.** Nunca una carpeta de
   la entidad, y nunca información del proyecto real. Es el numeral 4.7.3, y es el mismo criterio
   que la Interventoría pidió por escrito en el compromiso **15-1**, que sigue abierto.

El punto 3 no es una formalidad de cierre: es la parte de la clase que más rápido se les olvida y
la única que puede tener consecuencia real.

---

## Traspaso

### A la sesión 08 — Diseño generativo (Stiven, 16/09)

La 08 ya tiene su lámina *Antes* escrita y apunta a la **06**, no a la 07. **No hay que
tocarla**: el arco de las cinco dependencias va 06 → 08, y la 07 es una sesión de oficio que se
intercala. Basta con una frase al abrir la 08: *"el viernes automatizamos lo que ya estaba
escrito; hoy le vamos a pedir algo que no está escrito en ninguna parte."*

- **Quedó claro:** automatizar no es escribir un script, es adoptar una regla — y toda regla
  adoptada necesita un dueño, porque las reglas cambian y los scripts no.
- **Quedó abierto:** todo lo automatizable supone que la respuesta ya existe en algún documento.
  ¿Y cuando no existe?

**Cuidado con el giro, que es el cruce más delicado del bloque.** Las dos sesiones son del mismo
docente con cinco días de diferencia, y los dos giros comparten forma: *la máquina hizo bien su
trabajo*. Por eso la 07 se corrió a propósito hacia la **vigencia** —la regla estaba bien el día
que se escribió y un acta la cambió después— y le dejó a la 08 el de **formulación**: la
restricción que nadie escribió. Al llegar al giro de la 08 conviene apoyarse en eso en una línea:
*"el viernes la regla envejeció; hoy la regla nunca se escribió. Son dos maneras distintas de que
el resultado sea impecable y esté mal."* Si la 07 hubiera usado el giro de formulación, el del
Abanico —que es objeto de arco— habría llegado gastado.

### A la sesión 10 — Coordinación, calidad y obra (Stiven, 23/09)

Es el traspaso más importante que deja esta sesión, y está registrado en los acuerdos de reparto
de [HILO-NARRATIVO.md](../docs/HILO-NARRATIVO.md), sección 7.

La 07 **no enseña a escribir reglas de validación**: las trata como insumo. La pregunta 2 de la
prueba —*¿la regla está escrita?*— funciona como filtro, y la tarea que la falla se manda
explícitamente a la 10, tanto en la parte B.2 del taller como en voz alta durante el ejercicio.

- **Lo que la 10 recibe servido:** cada asistente llega con **una tarea propia, identificada por
  escrito, que se repite y se verifica pero cuya regla nadie ha redactado nunca**. Ese es el
  material de la hora 19 y no hay que volver a levantarlo.
- **Lo que la 10 no debe repetir:** la matriz no-code / Dynamo / Python / plugin, los tres niveles
  de autonomía y la prueba de las cuatro preguntas. Se heredan en voz alta.
- **Lo que la 10 desarrolla y la 07 solo rozó:** el catálogo de reglas —parámetros obligatorios,
  nomenclatura, clasificación, duplicados—, la priorización de interferencias y la clasificación
  de incidencias. El stub original de la 07 traía *"diseñar un agente de revisión de calidad BIM"*
  como actividad, que es literalmente la actividad de la hora 19; **se retiró de la 07 a
  propósito**.

### A la sesión 11 — BIM, CDE y gemelos digitales (Daniel, 25/09)

Pese a que el título de la 07 dice *tecnologías de integración*, la integración con CDE, ERP y
sistemas empresariales —mapeo de datos, identificadores únicos, sincronización— es la hora 21 y es
de Daniel. La 07 solo nombra la categoría al elegir tecnología, y no entra. Vale la pena avisarle.

Registrado en [HILO-NARRATIVO.md](../docs/HILO-NARRATIVO.md), sección 7.

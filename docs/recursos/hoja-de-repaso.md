# Hoja de repaso — Diplomado BIM + IA

> Todo el curso en unas pocas hojas: la pregunta que lo atraviesa, los cinco objetos, lo esencial
> de cada sesión, el glosario y las listas de chequeo. Está pensada para imprimirse y tenerse a
> mano el día en que haya que decidir si una IA puede responder algo — y cómo.

**Curso BIM + IA · Ascend · IDU · 12 sesiones · 19 de agosto a 30 de septiembre de 2026**

---

## 1 · La pregunta del curso

> # ¿Puede responderlo una IA?
> ## Depende.

La sesión 01 abrió con esa pregunta. Cada sesión resolvió **una de las cosas de las que depende**:

| Depende de… | La pieza | Sesión |
|---|---|---|
| Que los datos **existan, estén estructurados y tengan dueño** | Las seis capas · el flujo inteligente | 01 · 03 |
| **Cómo se le pide**, y si solo responde o además actúa | 🗂️ **La Ficha del Agente** | 02 |
| **De dónde salen los datos**, y quién los cuida | 🚦 **El Semáforo del Dato** | 04 |
| Que lo que muestra **no se confunda con evidencia** | Conceptual ≠ técnico ≠ evidencia | 05 |
| **A qué esté conectada**, y con qué permiso | 🔌 **El Enchufe** | 06 |
| Que la regla **esté escrita y tenga dueño** | La regla adoptada | 07 |
| **Qué pueda leer del modelo**, y en qué dirección | 🪟 **La Ventanilla** | 08 |
| **Qué pueda anticipar**, y con cuánta incertidumbre | 📊 **La Banda** | 09 |
| Que se sepa **qué revisa y qué la cierra** | El catálogo · la evidencia | 10 |
| Que los sistemas **compartan una llave** | El identificador | 11 |

> **El trabajo nunca estuvo en la máquina. Estuvo en el planteamiento — y ese sigue siendo suyo.**

---

## 2 · Los cinco objetos

Si de una sesión se recuerda una sola cosa, que sea el objeto. Cada uno tiene su ficha de bolsillo.

| Objeto | En una frase | La regla que no se olvida |
|---|---|---|
| 🗂️ **La Ficha del Agente** (02) | Propósito, conocimiento, herramientas, límites y usuario. | Si esas cinco casillas no se pueden llenar, todavía no hay un agente: hay una conversación. |
| 🚦 **El Semáforo del Dato** (04) | Verde sale, ámbar solo en casa, rojo no sale. | Ante la duda, es ámbar — nunca verde. |
| 🔌 **El Enchufe** (06) | Conectar una vez y usar siempre. | Un agente conectado no tiene permisos propios: hereda los de quien lo conectó. |
| 🪟 **La Ventanilla** (08) | Al modelo se le pide, y devuelve lo que está escrito en la ficha. | Tiene tres puertas, y cuál se abre es una decisión con dueño. |
| 📊 **La Banda** (09) | Una predicción sin banda es una opinión con decimales. | Un modelo que usa información del futuro no predice: recuerda. |

---

## 3 · Sesión por sesión

### 01 · Generalidades BIM + Inteligencia Artificial
*Daniel Saavedra · 19/08*

**La idea.** Para una IA, un proyecto no es un conjunto de planos: es un conjunto de **cosas
relacionadas entre sí** —contratos, tramos, elementos, inspecciones, incidencias—. Si esas
relaciones están registradas, la IA las consulta; si no, las adivina.

**Un ejemplo.** Entre colegas basta decir *"el muro que revisamos ayer"*. Una máquina necesita la
ruta completa: proyecto › contrato › tramo › zona › **muro MC-027**, con su identificador único
(GUID), su versión, su estado y su última inspección. BIM es lo que convierte un muro físico en
esa entidad digital que se puede ubicar sin memoria compartida.

**Digitalizado no es estructurado.** Un proyecto con 12.000 PDF, 3.000 planos y 80.000 fotos está
digitalizado: solo permite buscar *"documentos donde aparezca muro"*. Uno estructurado permite
preguntar *"¿qué muros ejecutados en junio tienen ensayos pendientes e incidencias de calidad
abiertas?"*, porque las relaciones entre muro, ensayo e incidencia están escritas.

**Las seis capas**, de abajo hacia arriba. Poner IA encima de la primera produce demostraciones
vistosas; encima de las seis, **capacidad institucional**.

| # | Capa | Qué significa en la práctica |
|---|---|---|
| 1 | Digitalización | Los documentos existen en archivo digital |
| 2 | Estructuración | Se sabe qué es cada cosa: un elemento, un contrato, una inspección |
| 3 | Estandarización | Todos los proyectos nombran y clasifican igual |
| 4 | Interoperabilidad | La información pasa de un sistema a otro sin perderse (IFC, API) |
| 5 | Trazabilidad | Se sabe quién cambió qué, cuándo y cuál versión vale |
| 6 | Conocimiento | Las relaciones entre todo lo anterior están guardadas |

**Qué hay detrás de "la IA lo hizo".** Cuando alguien dice *"ChatGPT me hizo el informe"*, en
realidad pasaron cuatro cosas: la **aplicación** decidió usar una herramienta, la **herramienta**
ejecutó código sobre un archivo, los **datos** salieron de un sistema de la organización y el
**modelo** redactó la respuesta. Modelo, aplicación y sistema no son lo mismo.

**Tres maneras de resolver un problema con software:**
- **Reglas escritas a mano** (software tradicional): *"si el parámetro está vacío, genere una
  incidencia"*. Siempre da lo mismo.
- **Machine learning:** aprende patrones de muchos casos — por ejemplo, cuánto se atrasaron 500
  proyectos anteriores — y los usa para predecir.
- **IA generativa:** usa lo aprendido para producir algo nuevo — un resumen, un informe, una tabla
  a partir de un acta.

**Entrenar, preguntar y dar contexto.** El *entrenamiento* ya ocurrió: lo que el modelo aprendió
quedó en sus **parámetros**. Cuando se le pregunta algo no se le está enseñando: se hace una
**inferencia**. Lo que sí se controla es el **contexto**, la información que el modelo tiene
"encima del escritorio" mientras responde. Por eso casi nunca hace falta entrenar una IA propia
(*fine-tuning*): casi siempre basta con darle bien el contexto.

**Los tokens.** El modelo no lee palabras sino fragmentos: *"El muro exterior tiene tres capas"*
son 8 tokens. La **ventana de contexto** es cuántos caben en una conversación. Que un documento
quepa no quiere decir que convenga meterlo entero: hay que seleccionar.

**Lo que la IA no es.** No es una base de datos: es un sistema que infiere. Puede equivocarse con
total seguridad, inventar un *"artículo 8.4.17"* que nunca existió y no conoce los proyectos de la
entidad si nadie se los entrega. Y no reemplaza el cálculo: lo sensato es que la IA **seleccione e
interprete**, que un software especializado **calcule** y que la IA **explique** el resultado.

> **La frase:** la calidad de la inteligencia depende de la calidad del contexto.

---

### 02 · Comunicación efectiva y Agentes
*Julián Puyo · 21/08*

**La idea.** Un modelo de lenguaje no busca la respuesta en ningún lado: **predice** cuál es el
texto más probable que sigue. Por eso suena seguro aunque no sepa, y por eso la misma pregunta
puede dar respuestas distintas.

**El caso.** Marcela Ríos preguntó, sin adjuntar nada: *"¿Cuántos sumideros del Tramo 2 no tienen
ficha de mantenimiento?"*. La respuesta: *132 sumideros, 27 sin ficha, concentrados entre K0+300 y
K0+700*. Ninguna cifra existía. El tramo tiene 74 sumideros y el archivo exportado, 24. El modelo
nunca vio el proyecto.

**Qué sabe el modelo cuando responde.** Solo lo que está en su ventana de contexto: la instrucción,
los archivos adjuntos y los últimos mensajes de esa conversación. **No** sabe lo que está en el
modelo federado (salvo que se exporte), en el anexo que nadie adjuntó o en otra ventana de chat.

**El pedido bien hecho — R·O·I·R·F.** La misma pregunta de Marcela, escrita para que no haya
espacio para inventar:

| | Ingrediente | En el caso |
|---|---|---|
| **R** | Rol: quién debe ser | Actúa como coordinador BIM del IDU |
| **O** | Objetivo: qué se quiere | Contar los sumideros sin ficha en K0+000 – K0+800 |
| **I** | Información: con qué datos | Adjunto `elementos-tramo2.csv` |
| **R** | Restricciones: qué no hacer | Solo el archivo; no completes vacíos; cuenta `N/D` y `PENDIENTE` como sin ficha; quita duplicados |
| **F** | Formato: cómo entregarlo | La cifra, la lista de `id` y el criterio aplicado |

A eso se suma el **criterio de aceptación**: cómo se sabrá si la respuesta sirve. Si no se puede
escribir, el pedido no está listo.

**La cifra depende del criterio.** Sobre el mismo archivo salen 6, 9, 11 o 12 sumideros sin ficha,
según se cuenten o no las celdas con `N/D` y `PENDIENTE`, se respeten mayúsculas y se quiten
duplicados. Ninguno es "el" número: **la respuesta correcta es una cifra con su criterio escrito al
lado** (con el criterio completo, 11).

**Dos trampas, aun con el pedido bien escrito.** Pedir *"cite el numeral del anexo que exige LOD
350"* sin entregar el anexo produce un numeral inventado. Y pedir *"el Tramo 2 tiene 14 sumideros
sin ficha, redacte el párrafo"* produce un párrafo impecable sobre una cifra que inventó quien
escribió la instrucción. **Solo la verificación cierra el hueco.**

**Chatbot, asistente o agente.** La diferencia no es qué tan inteligente es, sino **qué puede
hacer**:

| | Qué hace | Ejemplo | Riesgo |
|---|---|---|---|
| **Chatbot** | Responde texto | Las preguntas frecuentes de un portal | Bajo |
| **Asistente** | Responde con contexto y memoria | Gemini o ChatGPT con archivos adjuntos | Medio |
| **Agente** | **Ejecuta acciones** con herramientas | Uno que consulta el CDE y genera el reporte | Alto |

**La Ficha del Agente.** Antes de construir un agente se llenan cinco casillas: **propósito** (qué
resuelve, empezando por un verbo), **conocimiento** (qué documentos necesita), **herramientas**
(qué puede hacer: consultar, calcular, escribir, notificar), **límites** (qué no hace sin permiso
humano) y **usuario** (quién lo opera y quién recibe el resultado).

**La regla de oro.** Consultar suele ser seguro. **Modificar, borrar o publicar** exige que una
persona confirme y que la acción quede registrada.

> **La frase:** el valor no está en el modelo, está en cómo se dirige y cómo se verifica.

---

### 03 · Flujos inteligentes y BIM como modelos de datos
*Hugo Gómez · 26/08*

**La idea.** Para trabajar con IA hay que pensar menos en **archivos** y más en **información**.
`Modelo_Revit_Final_v23.rvt` es un contenedor; lo que importa es lo que trae adentro: qué elemento,
qué código, qué estado.

**Cuatro maneras de pedirle trabajo a una IA**, de la más puntual a la más autónoma:

| Necesidad | Se usa | Ejemplo |
|---|---|---|
| Resolver algo ahora | **Prompt** | *"Resume esta acta"* |
| Trabajar meses sobre lo mismo | **Proyecto** | Un espacio con el BEP, los participantes y las reglas cargadas una sola vez |
| Repetir una forma de trabajar | **Skill** | La revisión semanal del informe de interventoría |
| Perseguir un objetivo con herramientas | **Agente** | Preparar la revisión de un entregable y señalar riesgos |

**Qué es un Skill.** En la revisión semanal cambian el proyecto, el documento y las fechas, pero se
mantienen el proceso, los criterios, el formato y las validaciones. Cuando eso se escribe una vez
—con ejemplos y comprobaciones— el prompt se vuelve un procedimiento: *un prompt que consiguió
empleo fijo*.

**La cadena de preparación, con un sumidero.** Antes de preguntarle algo a la IA sobre el sumidero
**SM-042**:
1. **Seleccionar:** solo lo que la tarea necesita — id, categoría, tramo, estado, código, ficha e
   inspección. No texturas ni geometría de otros sistemas.
2. **Normalizar:** *Ejecutado*, *EJECUTADO*, *Ejecut.* y *Terminado* pasan a ser un solo valor.
3. **Validar:** comprobar con reglas fijas que el id no esté vacío, que el estado sea uno de los
   permitidos y que el código no se repita.
4. **Relacionar:** unir el sumidero con su actividad (DR-160), su inspección pendiente (INS-882) y
   su incidencia (INC-221).
5. **Contextualizar:** darle a la IA el objetivo, el requisito (*todo elemento ejecutado debe tener
   inspección aprobada*), la regla (*no inventar datos*) y la salida esperada.

Así la IA ya no está "mirando un modelo": razona sobre un contexto preparado a partir de él.

**Validar antes de preguntar.** Lo que se puede garantizar con una regla fija (un campo vacío, un
código repetido) se revisa con una regla. La IA se reserva para lo que de verdad requiere
interpretar.

**El formato no arregla el dato.** Pasar de RVT a IFC, CSV o JSON cambia el envase, no el
contenido: si el parámetro estaba vacío, sigue vacío. Cada formato sirve para algo: **CSV**, tablas
simples; **Excel**, trabajo humano con fórmulas; **JSON**, información con jerarquías para API y
agentes; **Markdown**, texto legible que la IA entiende bien; **IFC**, el modelo con una estructura
estándar que no depende del programa que lo creó.

**Humano + IA no siempre suma.** Si la persona es mejor en la tarea, combinar ayuda; si la IA es
mejor, mezclar puede empeorar el resultado. El papel humano pasa de ejecutar a **diseñar, delegar,
supervisar y responder** por el sistema de trabajo.

> **La frase:** el Skill es un prompt que consiguió empleo fijo.

---

### 04 · Extracción, transformación y gobierno de la información BIM
*Stiven Valencia · 28/08*

**La idea.** Antes de pegar un documento en cualquier herramienta de IA hay que preguntarse **de
qué color es**: no toda la información de la entidad puede salir de ella, y quien la saca sin
darse cuenta no deja rastro.

**El caso.** En cinco días pasaron tres cosas: el anexo técnico son **180 páginas** que nadie ha
convertido en una tabla; el export del modelo llegó con campos vacíos y categorías escritas de
tres formas; y Andrés, el coordinador BIM del contratista, **pegó el anexo y las actas** —con
nombres y documentos de quienes firman— **en una herramienta pública** para resumirlos rápido.

**El Semáforo del Dato, con ejemplos del expediente:**

| Color | Qué entra | Ejemplos | Dónde se puede usar |
|---|---|---|---|
| 🟢 **Verde** | Lo público o publicado, lo ficticio, lo anonimizado | Una norma técnica; el expediente ficticio del curso; un requisito genérico de pliego | Cualquier herramienta |
| 🟠 **Ámbar** | Lo interno del proyecto que no identifica el contrato | Cantidades del export, parámetros técnicos, geometría | Solo en un **entorno gobernado** |
| 🔴 **Rojo** | Lo contractual, económico, personal o reservado | El Anexo Técnico 7 (reservado por su numeral 4.7.1); actas con nombres y cédulas; precios unitarios; correos con el contratista | No sale de la entidad |

**Qué quiere decir "entorno gobernado".** Una herramienta que la **entidad aprobó y controla**: la
información queda dentro de la organización, se sabe quién puede ver cada cosa (permisos) y queda
registro de quién hizo qué (historial). Lo contrario es una **herramienta pública**: una cuenta
personal o un chat abierto, donde la entidad no controla adónde van los datos ni quién los ve. La
regla: en la pública, solo verde; en la gobernada, verde y ámbar; lo rojo, en ninguna.

**Ante la duda, es ámbar — nunca verde.** Dudar no autoriza a arriesgar: es la señal de que hay que
preguntarle a quien custodia la información.

**Bajar de color: la versión verde.** Casi todo documento rojo tiene una versión que sí puede salir.
El mismo párrafo del anexo, en tres colores:
- 🔴 *"Contrato IDU-CO-2025-0418. Corredor Av. Guayacanes — Tramo 2. El hito H-2 se radicará a más
  tardar el 30 de septiembre de 2025."*
- 🟠 *"Corredor vial urbano de 2,4 km. El hito H-2 se radicará en la semana 20. Drenaje en LOD 350
  con ficha al 100 %."*
- 🟢 *"Obra vial urbana. Entrega del modelo federado en la semana 20, en IFC 4.3, referida al datum
  nacional, con interferencia dura a 0 mm."*

Se quita lo propio del proyecto (número de contrato, nombre de la obra, fechas exactas, cifras,
personas, coordenadas locales) y se conserva lo que es estándar (formatos, niveles de información,
tolerancias). La prueba: **¿alguien podría reconstruir de qué proyecto se trata?** Y una condición:
la versión verde se hace **a mano**, no con una IA pública — para que la anonimice, primero habría
que dársela.

**Shadow AI.** Es lo que hizo Andrés: usar por cuenta propia una herramienta pública con
información del proyecto. Quedó en el Acta 15, y lo prohíben los numerales 4.7.2 y 4.7.3 del anexo,
*"con independencia de la denominación comercial del servicio"*. Prohibir la IA no lo evita —la
gente busca su propia herramienta—; lo evita **ofrecer una aprobada, con reglas**.

**Qué tan "lista para IA" está cada fuente:**
- **Estructurada** (export de elementos, presupuesto, cronograma): filas y columnas; se usa directo.
- **Semiestructurada** (IFC, JSON, XML): tiene etiquetas que dan contexto; se usa bien.
- **No estructurada** (anexo, actas, correos, fotos): texto libre; **primero hay que extraer** de
  ahí los datos y ponerlos en una tabla.

**Extraer con trazabilidad.** De las 180 páginas sale una matriz con cuatro columnas: requisito,
valor exigido, responsable y **fuente** (el numeral). Una fila se ve así: *nivel de información de
drenaje · LOD 350 · contratista · numeral 4.3.1*. Sin la columna de fuente, la matriz es una
opinión bien formateada: nadie puede volver al documento a comprobarla.

**Lo que se pierde al exportar.** El export del Tramo 2 llegó roto, pero la información sí estaba en
el **modelo de autoría**: se perdió al salir. Se previene exportando solo los campos necesarios, con
nombres consistentes, revisando una muestra antes de entregar y adjuntando un **diccionario de
campos** — una hoja que dice qué significa cada columna, en qué unidad está y qué valores admite.

**El giro: la matriz perfecta sobre un documento vencido.** La extracción salió impecable, y aun así
una fila estaba mal: el Anexo decía LOD 350 para toda la red de drenaje, pero el **Acta 14** había
bajado la tubería enterrada a LOD 300 — sin emitir nueva versión del anexo. La IA leyó el anexo;
nadie le dio el acta. **En un contrato, la verdad vive en el documento más todas las actas que lo
modificaron.** Por eso validar no es releer lo que escribió la IA: es preguntar **qué documento
faltó**.

**El patrón sano.** Se **prototipa** con datos ficticios en cualquier herramienta, y se **opera** con
datos reales solo en el entorno que la entidad aprobó.

> **La frase:** la IA no reemplaza el gobierno de datos: lo hace más urgente.

---

### 05 · IA para comunicación visual y presentaciones
*Hugo Gómez · 02/09*

**La idea.** Una matriz correcta todavía puede comunicar mal. Comunicar es elegir **qué necesita
entender una audiencia para decidir**, y la IA ayuda a representarlo — pero una imagen convincente
no prueba nada.

**El mismo dato, tres audiencias.** Los sumideros sin ficha del Tramo 2 se cuentan distinto según
quién escucha: a **coordinación BIM** le sirven los identificadores, el responsable y la fecha de
cierre; a la **gerencia**, cuántos incumplimientos hay abiertos y el riesgo de que devuelvan el
entregable; a la **dirección**, la decisión que tiene que tomar hoy. La cadena es siempre: dato
confiable → representación adecuada → audiencia concreta → decisión.

**Ver, interpretar, conocer.** En una foto de obra se **ve** una tubería. Se puede **interpretar**
que es de concreto. Pero **conocer** su diámetro, su material o si cumple el contrato exige una
fuente que no está en la imagen. Por eso, al pedirle a la IA que analice una foto, se le exige
separar las tres cosas y decir qué parte de la imagen sostiene cada afirmación.

**Generar y transformar imágenes.** De texto a imagen sirve para bocetos, ambientes y portadas; no
para planos, cantidades ni evidencia. De imagen a imagen, la instrucción dice qué se conserva y qué
cambia (*"elimina vehículos y personas; conserva la infraestructura, el encuadre y las
proporciones"*) — y luego se revisa también **lo que no se pidió cambiar**, porque la IA puede
alterar en silencio un acceso o una señal. Un buen prompt visual no es una lista de adjetivos:
dice objeto, contexto, composición, qué se conserva y qué no debe aparecer.

**Qué cuenta como evidencia:**

| Representación | Sirve para | ¿Es evidencia? |
|---|---|---|
| Foto original con fecha y ubicación | Documentar | Puede serlo |
| Foto editada con IA | Comunicar | Con mucho cuidado |
| Render o imagen generada | Explicar una idea | No |
| Diagrama | Hacer comprensible un proceso | No |
| Plano aprobado | Documento técnico | Sí, según su alcance |

Todo lo ilustrativo se rotula: *"Representación conceptual · No construida"*. La etiqueta es parte
del contenido.

**La presentación ejecutiva en cinco preguntas:** ¿qué está pasando? ¿por qué importa? ¿qué
evidencia hay? ¿qué se propone? ¿qué decisión se necesita? Si una diapositiva no responde ninguna,
sobra.

**Diagramas con Mermaid.** Se describe un proceso en palabras y la IA lo convierte en un diagrama
reproducible. El orden importa: primero se le pide que **enumere actores, pasos y decisiones y
señale lo que falta**, y solo después que dibuje. Un diagrama prolijo de un proceso mal entendido
es un error más convincente.

> **La frase:** una representación útil no es una evidencia técnica.

---

### 06 · Consulta conversacional, no-code, MCP y loops
*Stiven Valencia · 09/09*

**La idea.** Toda copia envejece el día en que alguien cambia el original. Lo útil es que la IA
consulte la **fuente viva** —el CDE, el modelo— y no un archivo descargado la semana pasada.

**El caso.** El jueves, la matriz de Marcela salió impecable en comité. El lunes, el contratista
corrigió los códigos de clasificación y subió un modelo nuevo al CDE. El martes la matriz seguía
diciendo lo del jueves, porque la IA había trabajado sobre una copia. Y nadie se enteró.

**Cuatro maneras de conectar la IA a la información**, según **quién decide el siguiente paso**:

| Capa | Cómo funciona | Quién decide | Ejemplo |
|---|---|---|---|
| **RAG** | Busca en los documentos propios y responde citándolos | La pregunta | Preguntarle al expediente qué dice el Acta 16 |
| **No-code** | Un flujo armado con bloques: *cuando pasa X, haga Y* | La persona, que dibujó el flujo | Cuando se suba un modelo al CDE, avisar por correo |
| **API** | Un programa le pide datos a otro sistema con reglas fijas | El programa | Un desarrollo que lee el CDE cada noche |
| **MCP** | Un enchufe estándar: el agente descubre qué herramientas hay y elige cuál usar | **El agente** | Un agente que decide si consulta el modelo o el CDE según lo que encuentre |

**RAG, en concreto.** En vez de responder de memoria, la IA primero **recupera** los párrafos
relevantes de los documentos de la entidad y después responde **citándolos**. Busca por
significado, no por palabra exacta: *"elementos de drenaje"* encuentra *sumidero*, *pozo* y
*colector*. Reduce la alucinación, pero no la elimina: responde bien solo sobre lo que tiene.

**No-code, en concreto.** Un flujo tiene tres piezas: un **disparador** (*se radicó un modelo*),
una **acción** (*extraer los elementos sin ficha*) y una **condición** (*si hay alguno, avisar*).
La plataforma se elige por el Semáforo: si la información es ámbar, la herramienta tiene que poder
instalarse dentro de la entidad.

**MCP, en concreto.** Es *el USB-C de la IA*: el sistema expone una vez sus funciones (*consultar el
modelo*, *leer el CDE*) y cualquier agente compatible las usa, sin una integración a medida. Revit
2027 trae un servidor MCP oficial de **solo lectura**.

**Loops.** Un agente que no espera a que le pregunten: revisa y reporta solo, por tiempo (*cada lunes
a las 7:00*) o por evento (*cada vez que se sube un modelo*). Los que solo consultan son seguros;
los que modifican necesitan una persona que confirme y un tope de acciones.

**El giro: funcionó, con el usuario equivocado.** Marcela conectó el agente al CDE con **su propia
cuenta**. El agente pasó a ver todo lo que ella ve —contratos, correspondencia, información
económica— y a responderle a cualquiera que le escribiera. **Un agente no tiene permisos propios:
hereda los de quien lo conectó.** La solución más barata es una **cuenta de servicio**: una cuenta
que no es de una persona, de solo lectura y limitada a un proyecto. El Semáforo no desaparece:
**pasa del dato al permiso**.

> **La frase:** conectar una vez y usar siempre — y entrar con el permiso correcto, no con el propio.

---

### 07 · Automatización BIM y tecnologías de integración
*Stiven Valencia · 11/09*

**La idea.** Automatizar no es escribir un programa: es **convertir una regla en algo que corre
solo**. Si la regla no está escrita, no hay nada que automatizar; y si la regla cambia, alguien
tiene que enterarse.

**El caso: la semana de Marcela.** Lunes, revisa 63 elementos uno por uno; martes, clasifica a mano
31 interferencias; miércoles, arma la matriz; jueves, comité; viernes, correo de observaciones. Y
el Tramo 2 tiene cinco subtramos.

**La prueba de las cuatro preguntas.** Una tarea se puede automatizar si **se repite**, tiene una
**regla escrita** (*si… entonces…*), su resultado **se puede verificar** y **los datos ya existen**.
Con un solo *no*, todavía no:

| Tarea de Marcela | ¿Se automatiza? |
|---|---|
| Revisar los 63 elementos contra el anexo | Sí: pasa las cuatro |
| Clasificar las 31 interferencias | Casi: falta escribir la regla de prioridad |
| Decidir qué se le exige al contratista | No: es criterio con consecuencia contractual |
| El correo de observaciones | El borrador sí; el envío, no |

**Quién aprieta el botón.** En la **asistencia**, la máquina propone y la persona ejecuta. En la
**automatización**, la máquina ejecuta y la persona dispara y revisa. En la **autonomía**, la máquina
actúa sola y la persona audita después — y eso solo es aceptable con confirmación previa e
historial. Lo que **lee** puede ser autónomo; lo que **escribe** en el modelo, no.

**Con qué se hace — la tecnología se elige de tercera**, después de tener la regla y los datos:

| Si la tarea… | Use |
|---|---|
| Mueve archivos, correos y avisos | No-code |
| Lee o cambia elementos dentro de Revit | Dynamo (programación visual con nodos) |
| Cruza tablas, calcula y arma reportes | Python, escrito por un agente y revisado por una persona |
| La va a usar todo el equipo durante años | Un plugin o una aplicación |
| Sus pasos dependen de lo que encuentre | Un agente con herramientas |

**Ya se programa en Excel.** Una casilla con nombre es una variable; `=SI(...)` es una condición;
una columna es una lista; arrastrar la fórmula es un ciclo. No hay un salto conceptual: hay un
cambio de notación. Y antes de aceptar código escrito por una IA, tres preguntas: *¿qué hiciste,
paso a paso? ¿qué pasa si un dato viene vacío o repetido? ¿qué modificaste, exactamente?* Nunca se
prueba sobre el modelo bueno.

**Cuidado con la doble confirmación.** En la hoja de elementos, el filtro y la fórmula de conteo
dieron los dos 25 sumideros. Eran 24: ninguno quitó el `SUM-014` repetido. Que dos métodos
coincidan puede ser el mismo error, dos veces.

**El giro: la automatización que se quedó quieta.** Marcela automatizó la revisión en mayo y nunca
falló. En junio, el Acta 14 bajó el nivel de información de la tubería enterrada; la automatización
siguió aplicando la regla vieja durante **seis comités**, con seis informes firmados. No tuvo un solo
error de código. **Una automatización no envejece: envejece la regla que lleva adentro**, y por eso
toda regla automatizada necesita un dueño que responda cuando cambie.

> **La frase:** lo escaso no es quien sabe programar: es quien responde por la regla.

---

### 08 · Integración de modelos BIM con IA
*Stiven Valencia · 16/09*

**La idea.** A un modelo no se entra: **se le pide por una ventanilla**. Devuelve lo que alguien
escribió en sus campos — ni más, ni distinto.

**El caso.** La interventoría pide el listado de los seis sumideros que quedan dentro de la
ciclorruta, entre K0+400 y K0+700. Ningún documento lo dice: **está en la geometría**, en un modelo
federado de 2,4 GB que la IA nunca ha visto.

**Las tres capas de un modelo**, y hasta dónde llega hoy la IA:
- **Objetos:** cada elemento sabe qué es — un sumidero, un pozo, un colector. *Llega.*
- **Parámetros:** sus campos — código, abscisa, cota de tapa, ficha. *Llega muy bien: son una tabla.*
- **Geometría:** dónde está cada cosa y qué toca. *Llega a medias: hay que calcularla, y el cálculo
  lo hace el programa de modelado, no la IA.*

**Los tres caminos para llegar:**

| Camino | Qué recibe la IA | Cuándo falla |
|---|---|---|
| **Exportar** una tabla o un IFC | Una copia, con lo que había ese día | Cuando el modelo cambia y nadie vuelve a exportar |
| **API** | Lo que un desarrollador programó | Cuando sale la versión siguiente o se va quien lo hizo |
| **MCP** | El modelo vivo, con los permisos de quien conectó | Cuando se conecta con la cuenta equivocada |

**Las tres puertas.** El servidor MCP de Revit viene en tres versiones: **solo lectura** (por
defecto, y para casi todo), **lectura y escritura** (solo con una regla escrita y confirmación
humana) y **acceso anticipado** (para pruebas, nunca sobre el modelo bueno). Cuál se abre es una
decisión con dueño.

**Qué contesta bien y qué no.** Contesta bien lo que está en un campo: *¿qué sumideros no tienen
ficha?*, *¿abscisa y cota de estos seis?*. Contesta mal la geometría (*¿este sumidero estorba la
ciclorruta?*), la intención (*¿por qué se dejó este pozo acá?*) y el criterio (*¿está bien
diseñado?*). Si el campo está mal, la respuesta sale mal — con la misma seguridad.

**El giro: le dieron permiso de escritura.** Se le pidió *"completa la ficha de mantenimiento de
todos los elementos de drenaje"* y llenó 16 campos en cuatro segundos. Tres estaban vacíos **a
propósito**: eran sumideros que esperan una decisión de reubicación. Ahora dicen algo que nadie
decidió. **La máquina no distingue "falta el dato" de "todavía no se ha decidido".** Por eso: lo que
lee puede ser autónomo; lo que escribe, no.

**Paramétrico, generativo y optimización.** En lo **paramétrico**, se cambia un valor y el modelo se
ajusta. En lo **generativo**, el sistema propone muchas alternativas y el diseñador filtra. En la
**optimización**, el sistema busca la mejor según un objetivo. Cuando los objetivos compiten —menos
metros de colector contra menos andén afectado— no hay una mejor: hay un **abanico** de alternativas
equilibradas, y al elegir se dice en voz alta qué se cede. En infraestructura lineal es todavía
tema de investigación, no de compra.

> **La frase:** conectar la IA al modelo no la vuelve inteligente sobre el proyecto: la vuelve rápida
> leyendo lo que ya está escrito.

---

### 09 · IA para costos, planificación y decisiones
*Stiven Valencia · 18/09*

**La idea.** Con datos de proyectos anteriores se puede anticipar el costo y el plazo de uno nuevo
— pero el resultado útil no es una cifra: es un **rango con su nivel de confianza**.

**El caso.** El presupuesto del Tramo 2 dice $86.400 millones y 22 meses. La entidad ejecutó 40
corredores parecidos y tiene, de cada uno, lo presupuestado y lo real. Ese archivo nunca se había
usado para responder nada.

**Dos tipos de IA distintos.** Un **LLM** trabaja con texto: redacta, resume, explica. El **machine
learning clásico** trabaja con tablas: de muchas filas con su resultado real aprende a predecir un
número o una categoría. Y si una fórmula conocida resuelve el problema, se usa la fórmula.

**Cómo se plantea una predicción.** Se necesitan **variables de entrada** (longitud, tipo de
intervención, si toca redes húmedas, año, área), una **variable objetivo** (el sobrecosto) e
**histórico con resultado real**. Hay tres tareas típicas: **regresión** predice un número (*¿cuánto
costará?*), **clasificación** una etiqueta (*¿riesgo alto o bajo?*) y **anomalías** señala lo raro
(*¿qué partida se comporta distinto?*).

**Lo que dijeron los 40.** Los 37 terminados superaron su presupuesto; la mitad, por más del 20 %.
Los que tocaron **redes húmedas** se pasaron el doble que los demás (24 % contra 12 %). La longitud,
que es lo primero que todos miran, casi no tenía relación con el sobrecosto. **El valor fue saber
dónde mirar.**

**La Banda, en concreto.** Se toman los 19 corredores parecidos al Tramo 2, se ordenan por
sobrecosto, se quita el 10 % de arriba y el 10 % de abajo, y lo que queda en medio es la banda:
**entre $101.700 y $110.200 millones, en 8 de cada 10 casos comparables**. Es lo mismo que decir *"al
trabajo llego en 30 a 45 minutos, salvo que pase algo raro"*. Con una banda se puede provisionar,
negociar y vigilar; con una cifra sola, no.

**El giro: la fuga de información.** El número de **otrosíes** de cada contrato predecía el
sobrecosto casi a la perfección (correlación 0,99). Pero ese dato solo existe cuando el contrato ya
terminó: para el Tramo 2 está vacío. Es como predecir la lluvia mirando si los paraguas están
mojados — acierta siempre y no sirve, porque cuando se ve el paraguas ya llovió. La pregunta que se
le hace a cada variable: **¿existe el día en que necesito la predicción, o solo se conoce al
final?**

**Lo que daña un modelo:** histórico con errores (**sesgo**), pocos casos (**cantidad**), variables
del futuro (**fuga**), un modelo que memoriza el pasado y falla con lo nuevo (**sobreajuste**), dos
cosas que suben juntas sin que una cause la otra, y casos únicos como un hallazgo arqueológico
(**atípicos**). Por eso un modelo se mide siempre con datos que **nunca vio**.

**4D y 5D.** El modelo conectado al cronograma es **4D**; conectado al costo, **5D**. La predicción se
monta encima. Y el modelo **recomienda**, no decide.

> **La frase:** una predicción sin banda es una opinión con decimales.

---

### 10 · IA para coordinación, calidad y captura en obra
*Stiven Valencia · 23/09*

**La idea.** La IA no revisa el modelo "a ojo": **aplica un catálogo de reglas** que alguien
escribió. Si la regla está mal escrita, la IA la aplica mal — con toda la confianza.

**El caso.** El hito H-2 se radica el 24 de octubre, y el anexo dice que ninguna interferencia de
severidad alta puede seguir abierta. El contratista dice que va casi al día. Marcela necesita una
lista que se pueda firmar cada quincena: ¿qué bloquea de verdad el hito?

**De requisito a regla: las cinco casillas.** *"El código de clasificación no puede estar vacío"* es
un requisito. Se vuelve regla cuando se escribe completa:

| Casilla | Pregunta | En la regla C-02 |
|---|---|---|
| **Fuente** | ¿De dónde sale? | Anexo Técnico 7, numeral 4.4.2 |
| **Condición** | ¿Si qué, entonces qué? | Si el código está vacío, incumple |
| **Alcance** | ¿A qué aplica? | A todos los elementos |
| **Severidad** | ¿Qué pasa si falla? | La entrega se devuelve |
| **Dueño** | ¿Quién la revisa cuando cambie? | El gestor de información |

La última es la que casi siempre falta.

**Lo que encontró el catálogo en el Tramo 2:** fichas ausentes escritas de tres maneras (en blanco,
`N/D`, `PENDIENTE`), un sumidero sin código (`SUM-011`), la severidad escrita como `Alta`, `ALTA` y
`Critica`, una interferencia repetida (`INT-013`), otra que apunta a un sumidero que no existe
(`SUM-099`) y una medida en centímetros donde iban milímetros (`SUM-013`). Palabras como
*completo* o *vigente* no son una regla hasta que alguien dice qué significan.

**Detectar no es priorizar.** Los programas de coordinación (Navisworks, Solibri) **detectan**
choques comparando geometría contra una tolerancia: exactos, pero sin criterio. La IA trabaja sobre
el **informe** que esos programas exportan, idealmente en BCF, y lo **ordena** según una regla de
prioridad escrita: primero lo que bloquea el hito, después lo que vence antes, se agrupa lo que se
repite en un mismo elemento, y lo que no se puede evaluar va a una lista **aparte**.

**Captura en obra.** Cada medio responde cosas distintas: la **foto** dice qué elemento es y si se ve
dañado, pero no en qué abscisa está; el **dron** muestra el avance en superficie, no las redes
enterradas; el **escáner láser** mide si lo construido coincide con el modelo, siempre que haya un
modelo vigente. Una foto de obra casi nunca es verde: trae rostros y placas. **La IA propone la
incidencia; la firma quien estuvo ahí.**

**El giro: cerrada no es verificada.** El tablero salió limpio. Pero una de las interferencias
"cerradas", la `INT-019`, se había cerrado sobre una versión vieja del modelo y sin verificación de
la interventoría. *Cerrada* era solo una palabra en una celda. Con la regla de cierre bien escrita
—contra la versión vigente y verificada por quien corresponde— lo que bloqueaba el hito pasó de 13 a
14.

> **La frase:** cerrada es una palabra; verificada es una evidencia.

---

### 11 · BIM, CDE y gemelos digitales
*Stiven Valencia · 25/09*

**La idea.** Los sistemas de la entidad solo pueden trabajar juntos si comparten **una misma llave**
para cada activo — un identificador que dure treinta años. Y un gemelo digital es tan fiel como el
modelo con el que se alimenta.

**El caso.** Octubre de 2028: se inunda la ciclorruta en K0+558. Mantenimiento necesita tres datos:
qué sumidero es, quién lo mantiene y cuándo se revisó. La respuesta está repartida en cuatro
lugares —el modelo, un acta en el CDE, el sistema de mantenimiento y un sensor— y ninguno sabe que
los otros existen.

**El camino de la información (ISO 19650), con el caso:**
- **EIR** — lo que la entidad pide recibir: el Anexo Técnico 7.
- **BEP** — cómo el contratista va a cumplir: su plan de ejecución BIM.
- **MIDP** — qué se entrega y cuándo: los hitos H-1 a H-4.
- **PIM** — la información que se produce mientras se diseña y se construye.
- **AIM** — **lo que queda para operar el activo**. Es lo que la entidad va a consultar treinta años.

**Los cuatro estados del CDE, y qué puede hacer un agente con cada uno:**

| Estado | Qué es | Qué puede hacer un agente |
|---|---|---|
| **Trabajo en curso** | Lo que el equipo todavía está haciendo | Nada: nadie lo ha verificado |
| **Compartido** | Lo que se pasa a otros para coordinar | Leerlo, avisando que no es oficial |
| **Publicado** | Lo aprobado | Responder: es la única fuente oficial |
| **Archivado** | Lo reemplazado | Contar la historia, nunca el presente |

En el Tramo 2, la versión **más reciente** del modelo (v5) está en *Trabajo en curso*; la
**vigente** es la v4, publicada. Un agente que toma "la última" responde con lo que nadie revisó.
Por eso todo agente dice **de qué estado sacó cada dato**.

**El cuarto actor.** En el CDE trabajan el contratista, la interventoría y la entidad, cada uno con
sus permisos. Un agente conectado es un cuarto actor, y casi nunca se ha decidido qué puede ver y
hacer.

**Integrar es acordar una llave.** El mismo sumidero se llama `SUM-020` en el modelo, aparece en el
plano `GUA-T2-DRE-PLN-0012` del CDE, tiene (o debería tener) una ficha de mantenimiento `FM-…` y un
código de fabricante en el sensor. Para unirlos hacen falta un identificador que dure, un mapeo
escrito de qué campo corresponde a cuál, y **validar antes de sincronizar**: un duplicado en el
modelo se vuelve un duplicado en cuatro sistemas.

**Modelo BIM o gemelo digital.** Un modelo BIM cambia cuando alguien lo edita y responde *qué se
construyó*. Un gemelo cambia **solo**, cuando cambia el activo, porque suma sensores, mantenimiento
y operación al modelo; responde *qué está pasando y qué va a pasar*. Si nada entra solo desde el
activo, es un modelo con otra etiqueta.

**El giro: un gemelo del plano.** La alerta de inundación ubicó el `SUM-020` donde lo dibujó el
modelo de **diseño**. En obra se había reubicado; al gemelo se le cargó el modelo equivocado. **Un
gemelo alimentado con el modelo de diseño es un retrato del plano, no del corredor.** Lo que importa
es el modelo de obra construida, publicado y firmado.

**Cómo leer el mercado.** Un producto puede estar **anunciado**, en **vista previa**, en **beta** o
**disponible**, y no es lo mismo. Antes de creerle a una novedad: ¿en qué estado está? ¿es oficial o
de terceros? ¿la cifra es del proveedor? ¿dónde procesa los datos y funciona en español? ¿entrega
formatos abiertos? La fuente más confiable es la nota de versión del fabricante, con fecha.

> **La frase:** el gemelo empieza donde termina el CDE: en el AIM.

---

## 4 · Glosario

| Término | Qué significa en este curso | Sesión |
|---|---|---|
| **Abanico de compromisos** | Conjunto de alternativas de diseño que no son peores que ninguna otra en todos los objetivos; al elegir, se dice qué se cede | 08 |
| **Agente** | Modelo de lenguaje con objetivo, memoria, herramientas y límites, capaz de decidir el siguiente paso y **ejecutar acciones** | 02 |
| **Agente suelto** | Autonomía sin confirmación previa ni historial | 07 |
| **AIM** | *Asset Information Model*: la información que queda para operar el activo | 11 |
| **Alucinación** | Respuesta bien redactada, segura y falsa; es la forma normal de operar de un modelo cuando no tiene el dato | 01 · 02 |
| **Anomalías** | Tarea de ML que detecta lo atípico | 01 · 09 |
| **API** | La puerta de servicio por la que dos sistemas se piden cosas con reglas claras (el mesero del restaurante) | 06 |
| **Asistencia · automatización · autonomía** | Los tres niveles de una automatización, según quién aprieta el botón | 07 |
| **Asistente** | Responde con contexto y memoria (por ejemplo, un chat con archivos adjuntos); no ejecuta acciones | 02 |
| **Autohospedar** | Que la plataforma corra dentro de la entidad; requisito cuando el dato es ámbar | 06 |
| **Banda** | Rango de una predicción con su frecuencia de acierto (por ejemplo, 8 de cada 10 casos comparables) | 09 |
| **BCF** | Formato abierto para intercambiar incidencias de coordinación entre plataformas | 10 · 11 |
| **BEP** | *BIM Execution Plan*: cómo responde el contratista a los requisitos (en el anexo, PEB) | 11 |
| **BIM** | Visto desde la IA, infraestructura de información: estructura, contexto y trazabilidad del proyecto y sus activos | 01 |
| **Capacidad institucional** | Resultado de sumar IA, datos, contexto, herramientas y gobernanza | 01 |
| **Catálogo de reglas** | Conjunto escrito de reglas de calidad, cada una con sus cinco casillas | 10 |
| **CDE** | Entorno común de datos: donde se encadena lo que la entidad pidió con lo que va a quedar | 04 · 11 |
| **Cerrada / verificada** | Cerrada es un estado en una celda; verificada es una evidencia contra la versión vigente, firmada | 10 |
| **Chatbot** | Responde texto, sin memoria y sin acciones | 02 |
| **Clasificación** | Tarea de ML que predice una etiqueta (riesgo alto o bajo) | 01 · 09 |
| **Clustering** | Tarea de ML que agrupa casos parecidos sin categorías predefinidas | 01 |
| **Conjunto de prueba** | Datos apartados que el modelo nunca vio; solo ahí se mide | 09 |
| **Contexto** | La información que el modelo tiene "encima del escritorio" mientras resuelve: instrucción, adjuntos e historial | 01 · 02 |
| **Correlación no es causa** | Dos variables suben juntas sin que una cause la otra | 09 |
| **Criterio de aceptación** | Cómo se sabrá si la respuesta sirve; si no se puede escribir, el pedido no está listo | 02 |
| **Cuarto actor** | El agente conectado al CDE, junto al contratista, la interventoría y la entidad | 11 |
| **Cuenta de servicio** | Cuenta no personal, idealmente de solo lectura y limitada a un proyecto, para conectar un agente | 06 |
| **Datos estructurados, semi y no estructurados** | Tablas listas para usar; formatos con etiquetas (IFC, JSON); documentos que requieren extracción | 04 |
| **Deep learning (DL)** | Subconjunto del ML basado en redes neuronales profundas; sostiene lenguaje, visión y voz | 01 |
| **Diccionario de campos** | Documento que acompaña un export y dice qué significa cada columna | 04 |
| **Disparador · acción · condición** | Las tres piezas de un flujo no-code | 06 |
| **Dynamo** | Programación visual dentro de Revit: un grafo de nodos y cables | 07 |
| **EIR** | *Exchange Information Requirements*: lo que la entidad necesita recibir (en el caso, el Anexo Técnico 7) | 11 |
| **Embeddings** | Representar texto como vectores, de modo que lo que significa parecido queda cerca | 06 |
| **Entorno gobernado** | Herramienta aprobada por la entidad, donde los datos quedan bajo su control, con permisos e historial | 04 |
| **Estados del CDE** | Trabajo en curso, Compartido, Publicado y Archivado | 11 |
| **Evidencia técnica** | Lo que demuestra una condición: requiere origen, fecha, integridad, contexto y custodia | 05 |
| **Fine-tuning** | Ajustar los pesos internos de un modelo con ejemplos propios; costoso y casi nunca el punto de partida | 01 |
| **Fuente viva** | El sistema original, consultado directamente, en lugar de una copia exportada | 06 · 08 |
| **Fuga de información** | Usar para predecir una variable que no existe el día de la predicción; el modelo no predice, recuerda | 09 |
| **Gem** | Gemini personalizado con nombre, instrucciones persistentes y archivos de conocimiento; compartirlo es compartir sus archivos. Google los convierte en *skills* desde noviembre de 2026 | 12 |
| **Gemelo digital** | Describe el activo como está ahora y cambia solo: modelo más sensores, mantenimiento y operación | 11 |
| **Generalización** | Qué tan bien funciona un modelo con datos nuevos; la única métrica que importa | 09 |
| **Generativo** | El sistema propone muchas opciones de diseño y el diseñador filtra | 08 |
| **GUID** | Identificador único de un elemento; permite **conocer** una relación en lugar de inferirla | 01 |
| **Holgura · tolerancia** | Distancia medida entre dos elementos · distancia mínima exigida (0 mm en interferencias duras, 25 mm en blandas) | 10 |
| **IA generativa** | Usa patrones aprendidos para producir texto, código, imágenes o estructuras de datos | 01 |
| **IA multimodal** | Trabaja con más de un tipo de información (texto, imagen, plano, tabla) y traduce entre ellos | 05 |
| **Identificador común** | La llave que comparten modelo, CDE, mantenimiento y sensores; tiene que durar treinta años | 11 |
| **IFC** | Formato abierto de intercambio que preserva objetos e información entre plataformas; **IFC 4.3** cubre infraestructura lineal | 03 · 04 · 11 |
| **Inferencia** | Lo que ocurre al hacerle una pregunta a un modelo ya entrenado; no lo entrena | 01 |
| **Inferir / conocer** | Deducir que dos nombres son el mismo elemento · tenerlo registrado explícitamente | 01 |
| **Interferencia dura / blanda** | Choque físico entre elementos · invasión de un espacio de holgura | 10 |
| **Interoperabilidad** | Que la información circule entre sistemas sin depender de una aplicación | 01 |
| **JSON** | Formato de objetos dentro de objetos; el idioma habitual de API y agentes | 03 |
| **LLM** | Modelo de lenguaje grande: interpreta, resume, compara, extrae y redacta | 01 · 09 |
| **LOD** | Nivel de información exigido a un elemento del modelo (en el caso, 350 para sumideros, 300 para tubería enterrada) | 04 |
| **Loop** | Agente que revisa, actúa y reporta por su cuenta, por evento o por tiempo | 06 |
| **Machine learning (ML)** | Sistemas que aprenden patrones de datos, en lugar de seguir reglas escritas a mano | 01 · 09 |
| **MCP** | *Model Context Protocol*: estándar para que un agente descubra y use herramientas sin una integración a medida para cada una | 06 |
| **Mermaid** | Lenguaje que convierte texto estructurado en diagramas reproducibles | 05 |
| **MIDP** | *Master Information Delivery Plan*: qué se entrega y cuándo (los hitos H-1 a H-4) | 11 |
| **Modelo de autoría** | El modelo original, donde la información sí estaba antes de perderse al exportar | 04 |
| **Modelo federado** | Modelo que reúne las disciplinas del proyecto | 02 · 08 |
| **Modelos abiertos** | Modelos cuyos pesos se descargan y corren en infraestructura propia | 01 |
| **No-code** | Plataformas que conectan servicios con bloques visuales: cuando pasa X, se hace Y | 06 |
| **Normalizar** | Unificar las variantes de un mismo valor (`Sumidero`, `SUMIDERO`, `sumidero `) | 03 |
| **Optimización** | El sistema busca la mejor alternativa según un objetivo | 08 |
| **Paramétrico** | Se cambia un valor y el modelo se ajusta; decide el diseñador | 08 |
| **Parámetros (de un modelo de IA)** | Lo que el modelo aprendió durante el entrenamiento | 01 |
| **Permisos heredados** | Un agente conectado ve y hace lo mismo que la cuenta con la que se conectó | 06 |
| **PIM** | *Project Information Model*: la información que se produce mientras se diseña y se construye | 11 |
| **Prompt estructurado** | Pedido con los cinco ingredientes R·O·I·R·F | 02 |
| **Proyecto (en una IA)** | Espacio que conserva el contexto de un trabajo largo | 03 |
| **RAG** | Generación aumentada por recuperación: primero busca en las fuentes propias y luego responde citándolas | 06 |
| **Regla (frente a requisito)** | Un requisito más lo que el pliego da por sabido: fuente, condición, alcance, severidad y dueño | 10 |
| **Regla de prioridad** | Orden en que se atiende lo encontrado: hito, plazo, recurrencia y lista aparte | 10 |
| **Regresión** | Tarea de ML que predice un número | 01 · 09 |
| **RLHF** | Ajuste de un modelo con retroalimentación humana | 01 |
| **Shadow AI** | Cargar información del proyecto en herramientas públicas por cuenta propia | 04 |
| **Skill** | Procedimiento reutilizable: instrucciones, ejemplos, recursos y comprobaciones para una tarea que se repite | 03 |
| **Sobreajuste** | El modelo memoriza el pasado y falla en lo nuevo | 09 |
| **Token** | Unidad mínima de texto que procesa un modelo; puede ser una palabra o un fragmento | 01 · 02 |
| **Trazabilidad** | Poder volver de cualquier dato a su fuente: quién, cuándo, qué versión, qué numeral | 01 · 04 |
| **Validar antes de sincronizar** | Revisar los datos antes de copiarlos entre sistemas, porque el error se multiplica | 11 |
| **Variable objetivo** | Lo que el modelo predice (por ejemplo, el sobrecosto) | 09 |
| **Ventana de contexto** | Cantidad de información, medida en tokens, que el modelo puede procesar en una interacción | 01 |
| **Ver · interpretar · conocer** | Lo observable · una hipótesis · una afirmación verificable con fuente | 05 |
| **4D · 5D** | El modelo conectado con el cronograma · con el costo | 09 |

---

## 5 · Listas de chequeo

**Antes de pedirle algo a una IA** (02)

- [ ] ¿Adjunté los datos, o espero que el modelo los adivine?
- [ ] ¿Escribí qué **no** debe hacer: no inventar, no completar vacíos, no salirse del archivo?
- [ ] ¿Dije en qué formato quiero la respuesta?
- [ ] ¿Puedo escribir cómo voy a saber si la respuesta sirve?
- [ ] **La prueba dura:** ¿podría el modelo inventar algo y aun así cumplir todo lo que escribí?

**Antes de creerle a una respuesta** (02 · 05)

- [ ] ¿Hay cifras exactas que yo no aporté?
- [ ] ¿Cita normas, códigos o cláusulas de memoria?
- [ ] ¿Habla de mi proyecto sin que yo le haya dado datos del proyecto?
- [ ] ¿Me dice de qué archivo, fila o numeral sale cada dato?
- [ ] Si la decisión tiene consecuencia técnica o legal: **verificar siempre**.

**Antes de subir un documento** (04)

- [ ] ¿De qué color es? Ante la duda, ámbar.
- [ ] ¿La herramienta es un entorno gobernado por la entidad?
- [ ] ¿Incluí las actas que lo modificaron, o solo el documento principal?
- [ ] Si es rojo: ¿existe una versión verde, hecha sin pasar por una IA pública?

**Antes de conectar un agente** (06 · 11)

- [ ] ¿Con qué usuario se conecta, y a qué más tiene acceso ese usuario?
- [ ] ¿Puede ser una cuenta de servicio de solo lectura?
- [ ] ¿El servidor es oficial, de terceros o abierto?
- [ ] ¿De qué estado del CDE va a leer?
- [ ] Si modifica algo: ¿dónde está la confirmación humana, el historial y el tope?

**Antes de automatizar una tarea** (07)

- [ ] ¿Se repite? ¿Tiene una regla escrita? ¿Se puede verificar el resultado? ¿Los datos existen?
- [ ] ¿De qué documento sale la regla, y cómo me entero si un acta la cambia?
- [ ] ¿Quién responde por ella cuando cambie?

**Antes de escribir una regla de calidad** (10)

- [ ] ¿Usa palabras que hay que definir: *completo*, *correcto*, *adecuado*, *vigente*?
- [ ] ¿Dice qué hacer con un dato en blanco, `N/D` o `PENDIENTE`?
- [ ] ¿El dueño es una persona con cargo, y no "todos"?
- [ ] ¿La fuente es un numeral, y no "la experiencia"?

**Antes de creerle a una predicción** (09)

- [ ] ¿Con cuántos datos aprendió, y se parecen al mío?
- [ ] ¿Me dio una banda o una cifra sola?
- [ ] ¿Qué variables pesaron más, y **existían el día de la predicción**?
- [ ] ¿Se probó con datos que nunca vio? ¿Alguien puede explicar el número?

**Antes de activar una función de IA nueva** (11)

- [ ] ¿Está anunciada, en vista previa, en beta o disponible?
- [ ] ¿La cifra que la respalda es del proveedor?
- [ ] ¿Dónde procesa los datos, y funciona en español?
- [ ] ¿Entrega formatos abiertos o propios?
- [ ] ¿Quién en la entidad decide activarla?

---

## 6 · El caso del curso en cifras

**Corredor Av. Guayacanes — Tramo 2.** Caso ficticio construido para el diplomado: 2,4 km de
corredor urbano en Bogotá, presupuesto de **$86.400 millones** y plazo de **22 meses**.

| Dato | Valor | Sesión |
|---|---|---|
| Sumideros en el tramo completo · en el subtramo exportado K0+000 – K0+800 | 74 · 24 | 02 |
| Sumideros sin ficha de mantenimiento en el subtramo (vacío, `N/D` o `PENDIENTE`, sin repetidos) | **11** | 02 · 04 |
| Nivel de información tras el Acta 14: sumideros y pozos · tubería enterrada | LOD 350 · LOD 300 | 04 · 07 |
| Hito H-2: fecha del anexo · fecha tras el Acta 16 | 30/09/2025 · **24/10/2025** | 04 · 10 |
| Interferencias drenaje – ciclorruta, alta, abiertas, K0+400 – K0+700, modelo vigente | **6** (8 → 7 → 6) | 08 |
| Sobrecosto mediano de los 37 corredores terminados | 20 % | 09 |
| Sobrecosto mediano con redes húmedas · sin ellas | 24 % · 12 % | 09 |
| Banda de costo del Tramo 2 · de plazo | **$101.700 – $110.200 millones** · 25 – 28 meses | 09 |
| Versión vigente del modelo federado | `MOD-FED-v4` (Publicado); la v5 está en Trabajo en curso | 11 |

> Los datos del expediente tienen defectos **a propósito**: así llegan los archivos reales. La mitad
> de lo que había que aprender era qué le pasa a una IA cuando recibe datos así.

---

## 7 · Las frases del curso

| Sesión | La frase |
|---|---|
| 01 | La IA no vuelve inteligente la información desordenada. |
| 02 | Si las cinco casillas no se pueden llenar, todavía no hay un agente: hay una conversación. |
| 03 | El formato cambia. El significado debería conservarse. |
| 04 | Verde sale, ámbar solo en casa, rojo no sale. Ante la duda, es ámbar. |
| 05 | La calidad visual no aumenta la calidad de la evidencia. |
| 06 | Un agente conectado no tiene permisos propios: hereda los de quien lo conectó. |
| 07 | Una automatización no envejece: envejece la regla que lleva adentro. |
| 08 | La máquina no distingue "falta el dato" de "todavía no se ha decidido". |
| 09 | Un modelo que usa información del futuro no predice: recuerda. |
| 10 | La IA no revisa el modelo: aplica el catálogo. |
| 11 | Integrar no es conectar sistemas: es acordar un identificador que dure treinta años. |
| 12 | Compartir un Gem es compartir sus archivos: que la herramienta esté permitida no vuelve verde el dato. |

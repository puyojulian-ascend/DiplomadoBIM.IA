# Guion — Sesión 06 · Consulta conversacional, no-code, MCP y loops

**Viernes 04/09/2026 · 2 horas · Stiven Valencia**
Documento del docente. No se proyecta.

---

## En una línea

La matriz del jueves envejeció el lunes y nadie se enteró. Se resuelve conectando la IA a la
fuente viva — y en el momento en que funciona, aparece el problema que nadie preguntó: el
agente entró con el usuario de Marcela.

| | |
|---|---|
| **Objeto de la sesión** | **El Enchufe** |
| **La frase** | No se trata de programar más, sino de conectar mejor. |
| **El giro** | Un agente conectado no tiene permisos propios: hereda los de quien lo conectó. |
| **El pago del capítulo anterior** | El Semáforo no desaparece: cambia de lugar. Ya no controla lo que sale, controla quién entra. |
| **El remate del giro** | La Interventoría ya lo había pedido: compromiso 15-1, vencido el 16 de julio. |

---

## Minutado

Contenido: ~101 min sin la lámina `Extra`, ~105 con ella. Holgura: 15–19 min.
Cuatro demostraciones en vivo, todas dentro de láminas existentes: ninguna agrega tiempo propio.

| Min | Lámina | Tiempo |
|---|---|---|
| 0:00 | Portada · bienvenida | 3 |
| 0:03 | **Antes** — En el capítulo anterior | 2 |
| 0:05 | **El caso** — La matriz que envejeció en cuatro días | 5 |
| 0:10 | Del buscador al significado | 5 |
| 0:15 | **RAG** — Preguntarle a los documentos propios | 7 |
| 0:22 | RAG en el corredor · **Demo A** | 8 |
| 0:30 | No-code — Automatización sin escribir aplicaciones | 8 |
| 0:38 | *Extra — APIs en versión funcional* | *4 (opcional)* |
| 0:42 | **El objeto** — El Enchufe · **Demo B** | 11 |
| 0:53 | MCP frente a API y no-code | 5 |
| 0:58 | Loops | 6 |
| 1:04 | Ejemplo integrador · **Demo C** | 8 |
| 1:12 | **El giro** · **Demo D** *(opcional)* | 9 |
| 1:21 | **Taller** | 15 |
| 1:36 | **Resolución** — La matriz que ya no envejece | 6 |
| 1:42 | **La frase** + Próximo capítulo | 3 |
| 1:45 | *Holgura / preguntas* | *15* |

### De dónde sale ese minutado

- **El bloque de RAG paga la sesión 04.** Son 15 minutos (0:15–0:30) porque ahí se demuestra que
  el trabajo de ordenar documentos sirvió para algo. Si se recorta, la sesión anterior queda sin
  cobrar.
- **El Enchufe tiene 11 minutos** porque es el objeto memorable y porque adentro va la Demo B. La
  analogía del cajón de cables no debe pasar de treinta segundos; el resto es la demostración.
- **El giro tiene 9** en vez de 8: la Demo D es opcional pero cabe, y el remate del Acta 15
  necesita silencio después.
- **El taller arranca a 1:21 con la `Extra`, y a 1:17 sin ella.** Los 15 minutos del taller no se
  negocian: son el insumo de la sesión 12.
- Si a 1:00 el reloj va corrido, lo que se sacrifica es *MCP frente a API y no-code* (esa tabla
  está completa en la ficha de bolsillo). Nunca el giro, nunca el taller.

### Sobre la lámina `Extra`

La de APIs es conceptual y la de MCP la absorbe casi entera. **Si el grupo ya viene cómodo con
la idea de sistemas que se hablan entre sí, sáltela.** La sesión 07 —el miércoles, con el mismo
docente— desarrolla integración con más espacio; vale la pena anunciarlo al saltarla, en una
frase: *"esto lo vemos con calma el miércoles."*

---

## Beats de la historia

1. **La sorpresa silenciosa** (*El caso*). Lo importante no es que la matriz esté vieja: es que
   **nadie se enteró**. Ese es el miedo que hay que instalar.
2. **La escalera** (semántica → RAG → no-code → MCP → loops). Cada pieza resuelve un pedazo. El
   auditorio tiene que sentir que sube.
3. **La cima** (*Ejemplo integrador*, Demo C). El agente hace en una frase lo que era un
   desarrollo, y encuentra algo que nadie había visto. Aquí se relajan del todo.
4. **El giro** (*El giro*). "Lo conectó con su usuario." Es el momento más incómodo de las
   cinco sesiones, y el más útil.
5. **El cierre** (*Resolución*). La tabla cierra los cinco problemas, incluido el que se acaba
   de crear y el que llevaba dos meses vencido.

---

## La escalera de la sesión

Conviene tenerla presente porque el auditorio pregunta "¿y esto en qué se diferencia de lo
anterior?" en cada peldaño. La respuesta corta, en cada caso, es **quién decide el siguiente
paso**.

| Peldaño | Qué agrega | Quién decide |
|---|---|---|
| Búsqueda semántica | Encontrar por sentido, no por palabra exacta | La consulta |
| **RAG** | Responder citando documentos propios | La pregunta |
| **No-code** | Que pase solo, con un flujo dibujado de antemano | La persona |
| **API** | Que dos sistemas se hablen de forma robusta | El programa |
| **MCP** | Que el agente elija la herramienta según lo que encuentre | **El agente** |
| **Loops** | Que ocurra sin que nadie pregunte | El disparador |

### Las dos frases puente

- **De RAG a MCP:** *"RAG lee documentos. Pero la pregunta de cuántos sumideros no tienen ficha
  no se responde leyendo un documento: se responde contando en una fuente. Para eso hay que
  conectarse, no cargar archivos."*
- **De MCP a loops:** *"Ya sabe consultar la fuente. Falta que no haga falta preguntarle."*

---

## Cómo hablar de plataformas

Regla de la sesión 04, que sigue vigente: **se nombran categorías, no proveedores**, salvo
cuando el nombre es la información. Aquí el nombre sí importa en un solo punto —el
autohospedaje— porque de eso depende que la plataforma sea usable con información ámbar.

### Tabla de traducción

| Si alguien dice… | Traducir a… | Y agregar |
|---|---|---|
| "Zapier / Make / Power Automate" | Plataforma no-code de catálogo cerrado | Servicio gestionado: el dato sale de la entidad. Verde solamente |
| "n8n" | Plataforma no-code autohospedable | Puede correr dentro de la entidad. Es la que habilita el ámbar |
| "ChatGPT / Claude / Gemini" | Cliente de IA | Lo que importa no es cuál, sino **a qué está conectado y con qué cuenta** |
| "Un GPT / un asistente personalizado" | RAG sobre documentos cargados | Sirve para documentos. No cuenta elementos de una fuente viva |
| "El API de Revit / de la plataforma" | La puerta de entrada del sistema | Requiere desarrollo. MCP no la reemplaza: la envuelve |
| "Un plugin" | Desarrollo a medida | Cada variación es un desarrollo nuevo. Ese es el costo que MCP baja |

**Sobre el CDE de la entidad:** no prometer que se conecta. La respuesta honesta es que depende
del proveedor, de la licencia y de lo que autorice el área de TI — y que esa conversación es
justamente el resultado del taller.

---

## Las demostraciones en vivo — mapa

Cuatro demostraciones, tres obligatorias. Todas usan el **mismo expediente del caso** que los
asistentes ya tienen; ninguna necesita un modelo BIM abierto.

| Momento | Demo | Herramienta | Min | ¿Obligatoria? |
|---|---|---|---|---|
| 0:22 | **A · RAG sobre el expediente** | Chat con carga de documentos | 8 | Sí |
| 0:42 | **B · El agente descubre las herramientas** | Cliente con MCP | 4 | Sí |
| 1:04 | **C · El cruce que nadie pidió** | Cliente con MCP | 5 | Sí |
| 1:12 | **D · El giro en vivo** | Cliente con MCP | 3 | No — alto impacto |

### Reglas para todas

1. **Nada en vivo sin plan B narrado.** Cada demo de abajo trae el suyo. Si falla, se cuenta el
   resultado con la lámina y se sigue: la sesión no depende de la conexión.
2. **Los prompts van escritos de antemano**, en un archivo de texto abierto en otra ventana. No
   se escriben delante del auditorio: se pegan. Doce minutos de demo se convierten en veinte si
   hay que teclear.
3. **La respuesta se lee en voz alta y se contrasta contra el expediente proyectado.** El valor
   no está en que la IA responda: está en que se pueda verificar.
4. **Si la IA se equivoca, no se disimula: se usa.** Es la mejor lámina de la sesión y no se
   puede fabricar.
5. **Nada de datos reales del IDU en las demos.** Todo el expediente es ficticio y está en el
   repositorio. Esto no es una precaución de estilo: es el numeral 4.7.3 del propio anexo que se
   está proyectando.

### Montaje previo — 30 minutos el día anterior

1. Copiar a una carpeta local de trabajo — **no una carpeta de la entidad** — los cuatro
   archivos del expediente: `pliego-anexo-tecnico-fragmento.md`, `actas-comite-fragmento.md`,
   `elementos-tramo2.csv` e `interferencias-tramo2.csv`.
2. Conectar el cliente MCP a **esa carpeta y solo esa**, con un servidor de archivos.
3. Para la Demo D, dejar en la carpeta **padre** un archivo señuelo llamado
   `correspondencia-contractual-CONFIDENCIAL.md`, con dos líneas ficticias. Es el archivo que el
   agente no debería leer y va a leer.
4. Correr las tres preguntas una vez. Anotar lo que salió. Si el resultado difiere de lo que
   dice este guion, **vale el guion**: las cifras de abajo están verificadas contra los CSV.

---

### 0:22 · Demo A — RAG sobre el expediente (8 min, obligatoria)

Es la demo que **paga la sesión 04**: allá la IA se equivocó porque le faltaba un documento;
acá acierta porque la fuente está completa.

**Montaje:** cargar como fuentes `pliego-anexo-tecnico-fragmento.md` **y**
`actas-comite-fragmento.md`. Los dos. Ese es el punto.

**Pregunta 1 (3 min)** — la que acierta:

> *"¿Qué nivel de información se exige hoy para las tuberías enterradas de drenaje, y de dónde
> sale esa exigencia?"*

Lo que debe salir: **LOD 300**, citando el **Acta N.º 14, numeral 4.1** — no el numeral 4.3.1
del Anexo Técnico, que dice LOD 350. Y el matiz que casi siempre aparece y hay que celebrar:
**sumideros y pozos de inspección se mantienen en LOD 350.**

Frase para rematar: *"El anexo dice 350. La respuesta correcta es 300. Y la diferencia está en
un acta que no modificó el documento — el numeral 4.3 del Acta 14 dice expresamente que no se
emitirá versión nueva. Una IA sin las actas se equivoca con total seguridad."*

**Pregunta 2 (3 min)** — la que **debe** fallar, y es el puente al Enchufe:

> *"¿Cuántos sumideros del Tramo 2 no tienen ficha de mantenimiento?"*

Esa información **no está en los dos documentos cargados**: vive en `elementos-tramo2.csv`, que
no se cargó. Hay dos desenlaces y los dos sirven:

- **Dice que no puede saberlo con las fuentes disponibles** → *"Correcto. Y esa es la respuesta
  buena. Fíjense en lo que acaba de pasar: le pregunté por documentos y me respondió; le
  pregunté por elementos y me dijo que no. RAG lee documentos. Para contar elementos hay que
  conectarse a la fuente."*
- **Inventa un número** → *"Esto ya lo vimos el 21 de agosto, con Julián: una respuesta preciosa,
  segura y completamente inventada. RAG reduce la alucinación, no la elimina — y solo sobre lo
  que está en sus fuentes."*

**Los últimos 2 min** se usan para hacer explícito el puente y pasar a la lámina de no-code.

> **Plan B:** narrar el contraste con las láminas. La de *RAG* ya explica el mecanismo y la de
> *Resolución* trae el resultado.

---

### 0:42 · Demo B — El agente descubre las herramientas (4 min, obligatoria)

Va **dentro** de la lámina del Enchufe, después de la analogía del cajón de cables y antes de la
tabla de tres piezas. Es corta y conceptual: no busca asombrar, busca que se vea el
*descubrimiento*.

1. **(1 min)** Mostrar en pantalla la **lista de herramientas** que el cliente descubrió al
   conectarse al servidor de archivos. Frase exacta: *"Yo no programé ninguna de estas. No
   escribí una línea. El servidor las anunció y el cliente las leyó. Eso es todo el protocolo."*
2. **(3 min)** Hacer **la misma pregunta que falló en la Demo A**:

   > *"¿Cuántos elementos de la red de drenaje no tienen ficha de mantenimiento asociada?"*

   Ahora sí puede: lee el CSV. Y aquí aparece la trampa buena — **el número correcto depende de
   un criterio que el agente tiene que declarar**.

**Cifras verificadas contra `elementos-tramo2.csv`:**

| Criterio | Resultado |
|---|---|
| Solo casillas vacías | 7 elementos |
| Vacías + `N/D` + `PENDIENTE`, sin desduplicar | 13 filas |
| Vacías + `N/D` + `PENDIENTE`, desduplicando `SUM-014` | **12 elementos de drenaje** |
| De esos, **sumideros** (sin contar `POZ-005`) | **11 sumideros** |

**11 es el número que ya se dictó en la sesión 04.** Si el agente responde 7, la intervención
correcta no es corregirlo: es preguntarle *"¿qué consideró usted como 'sin ficha'?"* y dejar que
declare el criterio. Ese es exactamente el ejercicio de la sesión 02 —contar los mismos
sumideros con cuatro criterios dio 6, 9, 11 y 12— resuelto ahora con la fuente a la vista.

> **Plan B:** proyectar esta tabla y contarla. El punto —que el número depende del criterio y el
> criterio hay que declararlo— se sostiene sin la herramienta.

---

### 1:04 · Demo C — El cruce que nadie pidió (5 min, obligatoria)

Es **la cima de la sesión**. Va dentro del *Ejemplo integrador* y es la demostración que
justifica MCP frente a no-code: ningún flujo fijo tenía esto previsto, porque el paso siguiente
depende de lo que se encuentre en el paso anterior.

**El prompt (pegado, no tecleado):**

> *"En esta carpeta hay un inventario de elementos y un informe de interferencias. Dime qué
> elementos de la red de drenaje siguen sin ficha de mantenimiento **y además** arrastran una
> interferencia abierta. Normaliza las mayúsculas y las filas repetidas antes de cruzar, y dime
> en qué archivo encontraste cada dato."*

**Resultado verificado contra los dos CSV — cinco elementos:**

| Elemento | Abscisa | Interferencia | Severidad | Contra | Versión |
|---|---|---|---|---|---|
| `SUM-011` | K0+294 | `INT-031` | **Alta** | `ACU-002` (acueducto) | `MOD-FED-v3` |
| `SUM-015` | K0+404 | `INT-011` | Alta | `CIC-014` (ciclorruta) | `MOD-FED-v4` |
| `SUM-018` | K0+493 | `INT-014` | Alta | `CIC-020` (ciclorruta) | `MOD-FED-v3` |
| `SUM-022` | K0+619 | `INT-024` | Alta | `CIC-030` (ciclorruta) | `MOD-FED-v4` |
| `SUM-024` | K0+688 | `INT-025` | Media | `PAV-018` (pavimento) | `MOD-FED-v4` |

**El que hay que señalar es `SUM-011`**, y por tres razones a la vez:

- Es el elemento del **compromiso 16-2** que el Consorcio corrigió el lunes — el de la lámina
  *El caso*.
- Sigue **sin ficha de mantenimiento**: compromiso **16-1**, todavía abierto.
- Arrastra una interferencia **dura, de severidad alta, abierta**, con la red de acueducto.

Frase de remate: *"Este sumidero está en tres listas distintas. En ninguna de las tres, solo.
Nadie lo había visto porque los tres datos nunca estuvieron en la misma tabla — y ninguna copia
exportada los junta."*

**La pregunta de seguimiento (si sobra 1 minuto)** — vale oro y conecta con el numeral 5.6:

> *"¿Sobre qué versión del modelo federado se ejecutó cada una de esas interferencias?"*

Dos de las cinco (`INT-031` e `INT-014`) están declaradas sobre `MOD-FED-v3`, no sobre la
vigente `MOD-FED-v4`. Por el numeral **5.6.2** del anexo, un informe que no declara la versión
vigente **se tiene por no radicado**. Es decir: la interferencia alta de `SUM-011` formalmente
**no existe**. Filtrando por versión vigente, las cinco quedan en **tres**.

*"Y esa es la diferencia entre un dato y un dato gobernado. La sesión 04, otra vez, cobrando."*

> **Plan B:** proyectar esta tabla. Es el resultado, y está verificado. La demo agrega el
> asombro de verlo aparecer, no la información.

---

### 1:12 · Demo D — El giro en vivo (3 min, opcional pero recomendada)

Va **después** de leer el blockquote de la lámina del giro y **antes** de mostrar las dos
tarjetas. Es incómoda a propósito.

1. **(1 min)** Pedirle al agente, en el mismo cliente que acaba de resolver el cruce:

   > *"¿Qué otros archivos hay en las carpetas a las que tienes acceso? Léeme el que parezca
   > más sensible."*

2. **(1 min)** El agente encuentra y lee `correspondencia-contractual-CONFIDENCIAL.md`, que está
   en la carpeta padre. **No objeta. No pregunta. No avisa.**

3. **(1 min)** Silencio, y luego: *"Nadie le dijo que no. No falló: hizo exactamente lo que
   podía hacer con los permisos que le di. Y los permisos que le di son los míos."*

**Advertencia de montaje:** el archivo señuelo es ficticio y de dos líneas. **Nunca apunte el
cliente a una carpeta con información real del IDU para hacer esta demostración** — sería
incumplir en vivo el numeral 4.7.3 que está proyectado dos láminas atrás.

> **Plan B:** es opcional justamente por esto. Si el montaje no quedó, la lámina del giro
> funciona sola: el remate del Acta 15 es más fuerte que la demo.

---

## Preguntas para el auditorio

### En *El caso*

> **"¿Cuántos procesos de los que ustedes usan dependen de que alguien se acuerde de exportar algo?"**

*Si nadie contesta:* "Yo cuento tres solo en este curso." Y seguir. La pregunta siembra, no
necesita respuesta.

### En *El Enchufe*, para aterrizar MCP

> **"¿Cuántos cables distintos tenían ustedes en un cajón hace diez años?"**

Funciona siempre. De ahí a USB-C, y de USB-C a MCP. Es la analogía que mejor pega, y no hay que
estirarla más de treinta segundos.

### Antes de *El giro* — la pregunta clave

> **"El agente ya consulta el CDE, cruza dos fuentes y responde con el archivo de origen. ¿Alguna objeción?"**

*Van a decir que no.* Es la tercera vez que pasa en el curso, y a estas alturas alguien ya va a
sospechar — si alguien dice "seguro hay trampa", celebrarlo: "aprendieron". Y darle el giro
igual.

*Si alguien pregunta "¿con qué permisos?":* **parar todo y darle el crédito.** Es la mejor
intervención posible del curso. Pedirle que lo explique, construir la lámina sobre lo que diga —
y rematar con el Acta 15: *"y usted acaba de decir, en vivo, lo que la Interventoría pidió por
escrito hace dos meses y todavía nadie documentó."*

### En el taller, Parte B.4

Pedir en voz alta **un** peor caso, de alguien. Cuesta que lo digan porque suena a acusación.
Romper el hielo con uno propio: "el mío sería un agente con acceso a correspondencia
contractual respondiéndole a un contratista qué observó la interventoría antes de que se
radique." Si se hizo la Demo D, señalar la pantalla: *"como el archivo que acabamos de abrir."*

---

## Claves del taller

### B.1 — No-code o MCP

La respuesta correcta casi siempre es **no-code** para lo que traen los asistentes. Es
importante decirlo: MCP es la pieza nueva y llamativa, pero la mayoría de tareas de una entidad
son flujos fijos y conocidos. **Elegir MCP cuando basta no-code es sobreingeniería.**

Regla para dictar en voz alta: *si usted puede dibujar todos los pasos de antemano, es no-code.
Si los pasos dependen de lo que se encuentre, es un agente.* La Demo C es el ejemplo del segundo
caso: ese cruce no se podía dibujar antes, porque el segundo paso dependía del resultado del
primero.

### B.3 — El usuario de conexión

Respuestas frecuentes y qué contestar:

| Lo que responden | Qué contestar |
|---|---|
| "Con mi usuario" | Es lo que hizo Marcela. Funciona, y por eso es peligroso. |
| "Con un usuario genérico del área" | Mejor, pero un genérico suele tener **más** permisos, no menos. |
| "No sé, eso lo ve TI" | Correcto — y por eso hay que **preguntarlo antes**, no después de conectar. Es literalmente el compromiso 15-1. |

### B.4 — El peor caso

No hay respuesta correcta. El ejercicio funciona si el peor caso que escriben es **específico**
("responderle a un contratista qué observó interventoría") y no genérico ("una fuga de datos").
Si es genérico, pedir que lo aterricen a una persona y un documento.

---

## Cifras y afirmaciones externas — verificar antes de dictar

| Afirmación | Respaldo | Confianza |
|---|---|---|
| MCP pasó a tener soporte nativo en las plataformas grandes de IA durante 2026 | Adopción ampliamente reportada en el ecosistema | Media-alta — la lámina no nombra empresas, y así conviene dejarla |
| Existen servidores MCP para BIM y openBIM (IfcOpenShell, Bonsai, web-ifc / Fragments) | [Arquitectura de referencia para servidores MCP en BIM, arXiv 2601.00809](https://arxiv.org/html/2601.00809v2) | Media — **son proyectos jóvenes; presentarlos como ecosistema emergente, no como producto maduro** |
| Autodesk Construction Cloud pasó a la marca **Autodesk Forma** (marzo 2026); lo que era Docs es hoy la gestión de datos de Forma | [adsknews.autodesk.com](https://adsknews.autodesk.com/en/news/autodesk-construction-cloud-is-now-autodesk-forma/) | Alta — fuente primaria |
| n8n se puede autohospedar; Zapier y Make son servicios gestionados | Documentación de los proveedores | Alta |

### Cifras del caso — verificadas contra los CSV del expediente

Estas no son externas: salen de los archivos del repositorio y se pueden recalcular delante del
auditorio. Están comprobadas.

| Cifra | Valor | Fuente |
|---|---|---|
| Elementos de drenaje sin ficha de mantenimiento | **12** (11 sumideros + `POZ-005`) | `elementos-tramo2.csv`, tres codificaciones, desduplicado |
| Sin ficha **y** con interferencia abierta | **5** | Cruce de los dos CSV |
| Los mismos, filtrando por versión vigente `MOD-FED-v4` | **3** | Numeral 5.6.2 del anexo |
| Único elemento sin código de clasificación | `SUM-011` | `elementos-tramo2.csv` |
| Nivel de información de tubería enterrada | **LOD 300** | Acta N.º 14, numeral 4.1 |

**Honestidad obligatoria en esta sesión.** MCP para BIM es hoy un ecosistema **emergente**, no
una solución de estantería. Si se presenta como algo listo para producción y alguien lo intenta
el lunes, el curso pierde credibilidad. La formulación correcta: *"el estándar ya está; las
piezas para BIM están naciendo; conviene entenderlo ahora para no llegar tarde."*

---

## Preguntas de herramienta — respuestas cortas

Salen todos los años. Conviene tenerlas resueltas en una frase para no perder el hilo.

| Pregunta | Respuesta corta |
|---|---|
| "¿Esto lo puedo hacer con el CDE que tenemos?" | Depende del proveedor y de la licencia. La pregunta correcta no es si se puede, sino **con qué cuenta** — y esa la responde TI. |
| "¿Necesito saber programar?" | Para usar un servidor MCP existente, no. Para escribir uno nuevo, sí. La mayor parte del valor está en el primer caso. |
| "¿La información va a entrenar el modelo?" | Depende del contrato del servicio, no de la tecnología. Es una cláusula, y hay que leerla antes de conectar. |
| "¿Y si el agente se equivoca y modifica algo?" | Por eso los loops que modifican necesitan confirmación humana y un tope. Los que solo consultan son seguros. |
| "¿Cuánto cuesta montar esto?" | Menos que un plugin a medida, y más de lo que parece. El costo real no es la conexión: es definir los permisos. |
| "¿Puedo conectarlo a Revit o a Navisworks?" | Hay ecosistema naciente por la vía de IFC. Hoy es viable sobre los datos exportados; sobre el modelo en vivo, todavía es frágil. |

---

## Materiales a repartir

> **Antes de cerrar el taller, decirlo en voz alta:** la hoja se llena en el navegador y se
> guarda sola, pero **solo en ese equipo**. Quien quiera conservarla tiene que descargarla en
> **PDF** o en **.md** con los botones de arriba. El .md sirve además para volver a dársela a
> una IA más adelante. Los cinco talleres alimentan el proyecto integrador de la sesión 12.

| Cuándo | Qué |
|---|---|
| Al empezar el taller (1:21) | `recursos/talleres/taller-06.md` |
| Al cerrar (1:42) | `recursos/fichas/ficha-06-enchufe.md` |

---

## Traspaso

La sesión 06 cierra la tercera de las cinco dependencias. La siguiente clase del arco es la
**08**; en el medio va la **07**, del mismo docente, el miércoles 09/09.

### A la sesión 07 — Automatización BIM y tecnologías de integración (Stiven, 09/09)

Es continuidad directa y del mismo docente, así que no hace falta un "en el capítulo anterior"
formal. Lo que hay que recoger:

- La lámina `Extra` de APIs, si el viernes se saltó por tiempo.
- La distinción **no-code / API / MCP** ya quedó instalada: la 07 puede pararse sobre ella y
  entrar directo a las tecnologías de integración.
- El compromiso **15-1** quedó abierto en la narración. Si la 07 lo cierra —documentar el
  criterio de permisos para cuentas automatizadas— el arco gana continuidad.

### A la sesión 08 — Diseño generativo (Stiven, 11/09)

- **Quedó claro:** conectar la IA a la fuente es un problema de enchufe estándar, no de
  programar una aplicación. Y un agente conectado hereda los permisos de quien lo conectó.
- **Quedó abierto:** la IA ya consulta el proyecto. ¿Puede además proponer algo que nadie
  escribió?

La lámina *Próximo capítulo* ya deja servido el caso de la 08: seis sumideros contra el trazado
de la ciclorruta, entre K0+400 y K0+700. **Dos de ellos —`SUM-015` y `SUM-022`— aparecieron en
la Demo C**, así que se pueden nombrar como conocidos: *"a dos de estos ya los vimos el
viernes."*

Registrado en [HILO-NARRATIVO.md](../docs/HILO-NARRATIVO.md), sección 7.

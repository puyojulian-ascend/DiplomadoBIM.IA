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

Contenido: ~111 min, con la lámina nueva *Sus herramientas* y sin la `Extra`. Holgura: 9 min.
Seis demostraciones en vivo. Cuatro van dentro de láminas que ya existían y no agregan tiempo
propio; las dos de herramienta —**G · el flujo no-code** y **E · Revit 2027**— sí lo agregan, y se
pagan saltando la lámina `Extra` (4 min) y descontando 6 de la holgura.

| Min | Lámina | Tiempo |
|---|---|---|
| 0:00 | Portada · bienvenida | 3 |
| 0:03 | **Antes** — En el capítulo anterior | 2 |
| 0:05 | **El caso** — La matriz que envejeció en cuatro días | 5 |
| 0:10 | Del buscador al significado | 5 |
| 0:15 | **RAG** — Preguntarle a los documentos propios | 7 |
| 0:22 | RAG en el corredor · **Demo A** | 8 |
| 0:30 | No-code — Automatización sin escribir aplicaciones · **Demo G** | 11 |
| 0:41 | **El objeto** — El Enchufe · **Demo B** | 11 |
| 0:52 | MCP frente a API y no-code | 5 |
| 0:57 | **Sus herramientas** — Dónde entra cada pieza · **Demo E** | 7 |
| 1:04 | Loops | 6 |
| 1:10 | Ejemplo integrador · **Demo C** | 8 |
| 1:18 | **El giro** · **Demo D** *(opcional)* | 9 |
| 1:27 | **Taller** | 15 |
| 1:42 | **Resolución** — La matriz que ya no envejece | 6 |
| 1:48 | **La frase** + Próximo capítulo | 3 |
| 1:51 | *Holgura / preguntas* | *9* |

La lámina `Extra` **no está en este minutado**: es la que paga las dos demos de herramienta. Si se
decide no hacerlas, vuelve a entrar en 0:41 y la holgura sube a 13.

### De dónde sale ese minutado

- **El bloque de RAG paga la sesión 04.** Son 15 minutos (0:15–0:30) porque ahí se demuestra que
  el trabajo de ordenar documentos sirvió para algo. Si se recorta, la sesión anterior queda sin
  cobrar.
- **El Enchufe tiene 11 minutos** porque es el objeto memorable y porque adentro va la Demo B. La
  analogía del cajón de cables no debe pasar de treinta segundos; el resto es la demostración.
- **El giro tiene 9** en vez de 8: la Demo D es opcional pero cabe, y el remate del Acta 15
  necesita silencio después.
- **`Sus herramientas` tiene 7** porque adentro va la Demo E, que es la que el auditorio vino a
  ver: su propio Revit contestando preguntas. Cuatro de esos siete son demostración.
- **No-code sube de 8 a 11** por la Demo G. Si el flujo no quedó montado, vuelve a 8 y la sesión
  no lo nota.
- **El taller arranca a 1:27.** Los 15 minutos del taller no se negocian: son el insumo de la
  sesión 12.
- Si a 1:10 el reloj va corrido, lo que se sacrifica es *MCP frente a API y no-code* (esa tabla
  está completa en la ficha de bolsillo). Nunca el giro, nunca el taller, y nunca la Demo E si ya
  quedó montada: montarla cuesta más que dictarla.

### Sobre la lámina `Extra`

La de APIs es conceptual, la de MCP la absorbe casi entera y la nueva *Sus herramientas* la
aterriza en producto. **Con las demos G y E en el plan, sáltela: sus 4 minutos son los que las
pagan.** Sin esas demos vuelve a ser opcional, según qué tan cómodo venga el grupo con la idea
de sistemas que se hablan entre sí. La sesión 07 —el miércoles, con el mismo
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
| "El API de Revit / de la plataforma" | La puerta de entrada del sistema | Requiere desarrollo. MCP no la reemplaza: la envuelve — y en Revit 2027 el propio Autodesk ya la envolvió |
| "Un plugin" | Desarrollo a medida | Cada variación es un desarrollo nuevo. Ese es el costo que MCP baja |

**Sobre el CDE de la entidad:** no prometer que se conecta. La respuesta honesta es que depende
del proveedor, de la licencia y de lo que autorice el área de TI — y que esa conversación es
justamente el resultado del taller.

---

## Las demostraciones en vivo — mapa

Seis demostraciones, tres obligatorias. Las cuatro del expediente (A, B, C, D) usan el **mismo
material que los asistentes ya tienen** y no necesitan ningún modelo abierto ni conexión a la
entidad. Las dos de herramienta (G y E) se hacen con lo que el auditorio usa a diario — y son
las que se caen si falla la red. Por eso ninguna de esas dos es obligatoria.

| Momento | Demo | Herramienta | Min | ¿Obligatoria? |
|---|---|---|---|---|
| 0:22 | **A · RAG sobre el expediente** | Gemini, app web, con documentos cargados | 8 | Sí |
| 0:30 | **G · El flujo que avisa solo** | n8n + Gemini, sobre el correo de Forma **o** sobre la hoja de la matriz | 3 | No — se cae sin red |
| 0:41 | **B · El agente descubre las herramientas** | Gemini CLI + servidor de archivos | 4 | Sí |
| 0:57 | **E · Revit contesta, pero no escribe** | Gemini CLI + Revit 2027 MCP | 4 | No — alto impacto |
| 1:10 | **C · El cruce que nadie pidió** | Gemini CLI + servidor de archivos | 5 | Sí |
| 1:18 | **D · El giro en vivo** | Gemini CLI + servidor de archivos | 3 | No — alto impacto |

**Las dos superficies de Gemini no son intercambiables.** La app web sirve para la Demo A —cargar
documentos y preguntar— pero **no conecta servidores MCP locales**. Todo lo que sea herramienta
(B, E, C, D) va por **Gemini CLI**, que sí los lee. Conviene tener las dos ventanas abiertas de
entrada, y decirlo en voz alta la primera vez que se cambia: *"cambio de ventana porque cambio de
capacidad, no por gusto."*

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

### Montaje de las demos de herramienta — 60 minutos, el día anterior

**Para la Demo E (Revit 2027).**

5. Descargar el complemento **Revit Public MCP Server** desde `accounts.autodesk.com`, dentro de
   los productos asociados a la licencia de **Revit 2027**, e instalarlo. Es un complemento
   aparte: no viene con Revit.
6. El instalador **configura solo Claude Desktop y Cursor**. Para **Gemini CLI hay que agregarlo a
   mano** en `~/.gemini/settings.json` (en Windows, `C:\Users\<usuario>\.gemini\settings.json`):

   ~~~json
   { "mcpServers": { "revit": { "command": "C:\\ruta\\real\\RevitMCPServer.exe" } } }
   ~~~

   **Verificar la ruta real del ejecutable**, no copiarla de aquí: cambia según dónde haya quedado
   instalado, y es la causa número uno de que el servidor no aparezca en el cliente.
7. Abrir Revit 2027 **con el modelo cargado antes de que entre el auditorio**. El servidor
   responde sobre el modelo abierto: si no hay modelo, no hay respuesta. Usar un modelo propio o
   ficticio — **nunca uno real del IDU**, por el numeral 4.7.3 que se proyecta dos láminas después.
8. Correr una vez las dos preguntas de la Demo E y **guardar una captura de la lista de
   herramientas**. Es el plan B.

**Para la Demo G (no-code).**

9. El montaje completo está al final de este documento: **Anexo — Montaje paso a paso de la
   Demo G**. Son unos 45 minutos la primera vez. Tres cosas que conviene saber antes de empezar,
   porque son las que tumban la demostración:

   - Forma **no le manda notificación a quien sube el archivo**: hacen falta **dos cuentas**.
   - Las notificaciones pueden estar en **resumen diario**. Si lo están, no llega nada en clase.
   - El disparador de Gmail en n8n es **por sondeo**, no instantáneo: hay un minuto de espera
     que hay que tener previsto en el guion hablado.

10. **Ejecutar el flujo una vez y dejar la ejecución guardada en el historial.** Si en vivo el
    correo tarda más de 90 segundos, se abre esa ejecución y la demostración se sostiene igual.

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

### 0:30 · Demo G — El flujo que avisa solo (3 min, opcional)

Va dentro de la lámina de *No-code*, después de nombrar las tres piezas —disparador, acción,
condición— y antes del `note` del semáforo. Es la demostración más humilde de la sesión y la más
replicable: **no necesita desarrollador, ni cuenta de servicio, ni permiso de TI.**

**El disparador honesto.** Forma ya manda un correo cuando alguien radica en una carpeta suscrita.
Ese correo es el disparador. No hay webhook, no hay aplicación registrada, no hay integración: hay
un correo que la plataforma ya mandaba y que ahora alguien lee por uno.

1. **(1 min)** Mostrar el lienzo de n8n con el flujo detenido y señalar las tres piezas de la
   lámina: *"disparador, condición, acción. Nada más."*
2. **(1 min)** Provocar el cambio y esperarlo en silencio:
   - **Variante A** (dos cuentas de Autodesk): radicar el archivo en Forma desde la cuenta B.
   - **Variante B** (una sola cuenta): **corregir en vivo la celda de `SUM-011`** en la hoja que
     hace de fuente. Es exactamente lo que el Consorcio hizo el lunes.
3. **(1 min)** Leer la salida en voz alta y contrastarla contra el expediente proyectado.

El montaje de las dos está en el anexo del final. **Con un solo usuario de Autodesk, va la
variante B** — y conviene saber que no es un premio de consuelo: cierra mejor que la A, porque el
disparador deja de ser un correo y pasa a ser **el cambio en la fuente**, que es la frase textual
de la lámina de resolución.

**Frase de remate:** *"No programé nada, y tampoco pedí nada. El disparador es un correo que la
plataforma ya me mandaba y que yo borraba sin leer."*

**El límite, que es la lámina siguiente:** si n8n corre en la nube de un tercero, ese correo —con
su adjunto— sale de la entidad. Eso es **verde solamente**. Para ámbar, n8n autohospedado dentro
de la entidad. Conviene encadenarlo con el `note` sin hacer pausa.

**Lo que hay que decir para no mentir.** Esto es lo que se puede montar sin pedir permiso. Lo
correcto a mediano plazo es un **webhook** de la plataforma, y eso **sí** exige una aplicación
registrada por un administrador de la cuenta. *"Lo que acaban de ver es el atajo. Lo otro es lo
que hay que pedirle a TI — y el taller de hoy es el borrador de ese pedido."*

> **Plan B:** abrir la ejecución guardada del día anterior y contarla. Si tampoco hay red,
> proyectar el lienzo: las tres piezas se ven igual, y es lo que la lámina enseña.

---

### 0:41 · Demo B — El agente descubre las herramientas (4 min, obligatoria)

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

### 0:57 · Demo E — Revit contesta, pero no escribe (4 min, opcional, alto impacto)

Va dentro de la lámina *Sus herramientas*, sobre la tarjeta de Revit. Es la demostración que el
auditorio vino a ver —su herramienta, su modelo— y la que hace que MCP deje de ser una idea.

**La línea de la tarjeta de Forma**, al pasar por ella y antes de conectar Revit. Cuesta veinte
segundos y es el mejor anticipo del giro que hay en toda la sesión:

> *"Y si mañana quieren leer Forma Site Design desde una aplicación propia, Autodesk exige
> registrar esa aplicación como **cuenta de servicio** dentro de una extensión instalada en el
> sitio. No se entra con el usuario de nadie. La plataforma los va a obligar a hacer exactamente
> lo que la Interventoría pidió por escrito hace dos meses."*

Después, la demostración:

1. **(1 min)** En Gemini CLI, escribir `/mcp`. Aparece la lista de herramientas que **Revit anunció
   al conectarse**. Frase: *"Esto no lo instalé pieza por pieza. Autodesk publicó el servidor,
   Gemini lo leyó, y ahora sabe qué le puede preguntar a Revit. Es el mismo descubrimiento de hace
   quince minutos, pero contra el modelo de ustedes."*
2. **(2 min)** La pregunta del caso — es el compromiso **16-2**:

   > *"En el modelo abierto, ¿cuántos elementos hay de la categoría de sumideros, y cuántos tienen
   > vacío el parámetro de código de clasificación?"*

   Se lee la respuesta y se contrasta contra la matriz proyectada.
3. **(1 min)** **La segunda pregunta es la que importa**, y hay que hacerla sabiendo que falla:

   > *"Corrígelos: lléneles el código de clasificación."*

   No puede. El servidor oficial es **de solo lectura**.

**Frase de remate**, que enlaza con la lámina de loops: *"El fabricante ya decidió por ustedes lo
que esa lámina recomienda: que lea, no que escriba. El día que eso cambie, la decisión vuelve a
ser de ustedes — y ahí ya no va a haber quien la tome en su lugar."*

**Advertencia de montaje:** el complemento responde sobre el **modelo abierto**. Si se cierra el
documento a mitad de la demostración, deja de contestar. Y el modelo tiene que ser propio o
ficticio: **nunca uno real del IDU**.

> **Plan B:** proyectar la captura de la lista de herramientas y hacer la pregunta contra
> `elementos-tramo2.csv`, como en la Demo B. Se pierde el asombro, no el argumento.

---

### 1:10 · Demo C — El cruce que nadie pidió (5 min, obligatoria)

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

### 1:18 · Demo D — El giro en vivo (3 min, opcional pero recomendada)

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
| Revit 2027 tiene un servidor MCP **oficial** de Autodesk, de solo lectura, que se instala como complemento aparte | [Anuncio de Autodesk, 17/06/2026](https://www.autodesk.com/blogs/aec/2026/06/17/revit-public-mcp-server/) · [Ayuda de Revit 2027](https://help.autodesk.com/cloudhelp/2027/ENU/Revit-WhatsNew/files/GUID-97697CBF-0E11-484E-96E5-4277E3E8D61F.htm) | Alta — fuente primaria. **Es una versión preliminar: decirlo** |
| Para leer **Forma Site Design** desde una aplicación externa, el Client ID debe registrarse como cuenta de servicio en una extensión instalada en el sitio | [Guía del desarrollador de la Forma Site Design API](https://aps.autodesk.com/en/docs/forma/v1/developers_guide/intro/element-system/) | Alta — y esa API está en **beta** |
| Forma manda correo de radicación a quien se suscribe a una carpeta, **pero no a quien sube el archivo** | [Soporte de Autodesk](https://www.autodesk.com/support/technical/article/caas/sfdcarticles/sfdcarticles/Failed-to-get-an-email-when-someone-uploads-a-file-to-a-folder-even-after-subscribing-to-the-it-in-BIM-360.html) | Alta — de este detalle depende que la Demo G funcione |
| Gemini CLI lee servidores MCP declarados en `~/.gemini/settings.json` | [Documentación de Gemini CLI](https://github.com/google-gemini/gemini-cli/blob/main/docs/tools/mcp-server.md) | Alta |

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

**Honestidad obligatoria en esta sesión.** El panorama se movió en 2026 y hay que contarlo con
precisión: **ya hay servidores oficiales de fabricante** —el de Revit 2027 entre ellos— pero son
de **solo lectura** y en versión preliminar, y el resto del ecosistema BIM/openBIM sigue siendo
**emergente**. Si se presenta como algo listo para producción y alguien lo intenta el lunes, el
curso pierde credibilidad. La formulación correcta: *"el estándar ya está, los fabricantes ya
publicaron las primeras piezas, y todas leen pero ninguna escribe — conviene entenderlo ahora
para no llegar tarde."*

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
| "¿Puedo conectarlo a Revit o a Navisworks?" | A **Revit 2027**, sí: Autodesk publicó un servidor MCP oficial, de solo lectura, que se instala como complemento aparte — es el que vimos hoy. En versiones anteriores y en Navisworks sigue siendo por la vía de IFC, sobre datos exportados. |

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

---

## Anexo — Montaje paso a paso de la Demo G

Unos 45 minutos la primera vez, 10 las siguientes. Conviene hacerlo **el día anterior**, no la
mañana de la clase: dos de los pasos dependen de correo ajeno y no se pueden apurar.

### Paso 0 · Dónde va a correr n8n

Para la clase sirve **n8n Cloud** (prueba gratuita, sin instalar nada) porque **todo el expediente
es ficticio**. Y conviene decirlo en voz alta durante la demostración, porque es justamente el
`note` del semáforo: *"esto está corriendo en la nube de un tercero, y por eso solo lo puedo hacer
con información verde. Para ámbar, esto mismo va autohospedado dentro de la entidad."*

Si se prefiere montarlo autohospedado desde el principio, los pasos son idénticos: cambia dónde
se abre el navegador, no el flujo.

### Paso 1 · Las cuentas

| Qué | Para qué | Nota |
|---|---|---|
| **Dos cuentas de Autodesk** con acceso al proyecto en Forma | Una se suscribe a la carpeta; la otra radica en vivo | Si solo hay una, **saltar a la variante B** al final de este anexo |
| **Un buzón de Gmail** (personal, no institucional) | Es el que recibe la notificación y dispara n8n | Evita pelear con el correo de la entidad |
| **Una clave de API de Gemini** | La usa el nodo de Gemini en n8n | Se saca en <https://aistudio.google.com/apikey> |

En n8n Cloud se puede saltar la clave de Gemini usando *Use Gateway credits* en el nodo. Para el
ensayo alcanza; para la clase conviene la clave propia, que no depende de un saldo.

### Paso 2 · Forma: lograr que el correo salga

Este paso es el que falla, y falla en silencio. **No pasar al paso 3 hasta verlo funcionar.**

1. Entrar a Forma con la **cuenta A** (la que va a recibir).
2. Ir a la carpeta del proyecto donde se va a radicar. Tres puntos junto a la carpeta →
   **Suscribirse a la carpeta**.
3. Arriba a la derecha, en el perfil → **Configuración de notificaciones**. Verificar que las
   notificaciones de carga de archivos estén **inmediatas y no en resumen diario**. Si están en
   resumen, durante la clase no llega absolutamente nada y no hay forma de darse cuenta a tiempo.
4. Que la dirección de la cuenta A sea —o reenvíe a— el buzón de Gmail del paso 1.

> **La trampa.** Forma **no notifica a quien sube el archivo**. Si se radica con la misma cuenta
> que está suscrita, no llega nada y todo parece roto. Por eso hacen falta dos cuentas: **A**
> escucha, **B** radica.

5. **Prueba obligatoria:** radicar cualquier archivo desde la **cuenta B** y confirmar que a la
   **A** le llega el correo. Anotar el **remitente exacto** — se necesita en el paso 3.

### Paso 3 · El flujo en n8n — cuatro nodos

La forma del flujo es literalmente la de la lámina: **disparador → condición → acción**.

| # | Nodo | Configuración |
|---|---|---|
| 1 | **Gmail Trigger** | Credencial de Google del buzón. *Poll Times*: **cada minuto**. En *Filters → Sender* (o en la búsqueda, `from:`), el remitente anotado en el paso 2 |
| 2 | **Filter** | Condición sobre el asunto o el cuerpo: que contenga `Tramo 2` (o el nombre de la carpeta). Es la **condición** de la lámina |
| 3 | **Google Gemini** | Credencial tipo *Google Gemini (PaLM) API* con la clave del paso 1. Operación: mensaje a un modelo. El prompt va abajo |
| 4 | **Gmail → Send** | Se manda el resultado a la misma dirección. Que la demostración termine en un correo es lo que la hace creíble |

**El Gmail Trigger es por sondeo, no instantáneo.** Con el intervalo en un minuto, entre que se
radica y que el flujo arranca puede pasar hasta un minuto — más lo que tarde Forma. Eso no es un
problema si está previsto en el guion: es el minuto en que se explica el semáforo.

### Paso 4 · El prompt del nodo de Gemini

Va escrito de antemano, como todos los de la sesión. Este funciona sobre el **texto de la
notificación**, que es lo que realmente llega — Forma avisa que hubo una radicación, no adjunta el
archivo:

> Eres el asistente de coordinación BIM del Corredor Av. Guayacanes. Vas a recibir el texto de una
> notificación de radicación del CDE. Devuelve, en un párrafo corto y en español neutro:
> qué archivo se radicó, quién lo radicó y en qué carpeta; qué filas de la matriz de requisitos
> habría que volver a revisar por causa de esa radicación; y qué información **no** puedes
> determinar con la notificación sola. No inventes datos que no estén en el texto.
>
> Texto de la notificación:
> {{ $json.snippet }}

La última instrucción no es decorativa: es el **límite clave** de la lámina de RAG, aplicado. Si
Gemini se inventa las filas, esa falla se muestra y se usa — es la mejor lámina de la sesión.

### Paso 5 · Variante con fuente viva (opcional, si sobra tiempo de montaje)

Agregar un nodo **HTTP Request** entre el 2 y el 3, apuntando al CSV del expediente publicado, y
pasarle a Gemini el contenido junto con la notificación. Así el flujo **no lee una copia**: lee la
fuente en el momento en que pregunta, que es exactamente la tesis de la sesión. Con n8n en la
nube la URL tiene que ser pública; con n8n en el portátil sirve la del servidor local del curso.

Es la variante bonita, pero **no es la obligatoria**: agrega un punto de falla y el argumento se
sostiene sin ella.

### Paso 6 · El ensayo, que es parte del montaje

1. Activar el flujo y radicar desde la cuenta B.
2. Verificar que llegue el correo de salida.
3. **Dejar esa ejecución en el historial de n8n y no borrarla.** Es el plan B: si en vivo el
   correo se demora, se abre el historial y se cuenta lo que pasó.
4. Tomar además una captura del lienzo con los cuatro nodos. Es el plan B del plan B: las tres
   piezas de la lámina se ven igual en una captura.

### Checklist de cinco minutos antes de entrar

- [ ] Flujo **activo** en n8n (no en modo de prueba: se apaga solo)
- [ ] Sesión abierta en Forma con la **cuenta B**, en la carpeta correcta
- [ ] Buzón de Gmail abierto en otra pestaña
- [ ] Historial de n8n con la ejecución del ensayo, abierto en una tercera
- [ ] El archivo que se va a radicar, ya en el escritorio y con nombre que contenga `Tramo 2`

### Los tres modos de que se caiga, y qué hacer

| Síntoma | Causa casi segura | Qué hacer en vivo |
|---|---|---|
| No llega ningún correo | Notificaciones en resumen diario, o se radicó con la cuenta suscrita | Abrir el historial del ensayo y contarlo. No depurar delante del auditorio |
| Llega el correo pero el flujo no arranca | El filtro de remitente no coincide | Igual: historial. Se arregla después |
| Gemini responde con datos inventados | El prompt perdió la última instrucción | **No disimular: usarlo.** Es el límite clave de la lámina de RAG, demostrado en vivo |

**Regla que vale para toda la sesión:** ninguna de estas caídas cuesta más de treinta segundos si
el historial está abierto en una pestaña. Si hay que empezar a depurar, la demostración ya se
perdió — y el argumento no.

---

### Variante B — con un solo usuario de Autodesk: el vigía de la matriz

Si no hay dos cuentas, el correo de Forma deja de servir como disparador: la plataforma no
notifica a quien sube el archivo, y no hay forma de rodear eso desde una sola sesión.

**Antes de descartar la variante A**, vale cinco minutos preguntarle al administrador del proyecto
si se puede invitar un segundo correo propio —uno personal— como miembro. Si se puede, la Demo G
queda tal como está escrita arriba. Si no, esta variante la reemplaza sin perder nada.

#### Qué cambia

El disparador deja de ser un correo y pasa a ser **el cambio en la fuente**. Una hoja de cálculo
hace de fuente: es el inventario de elementos, el mismo `elementos-tramo2.csv` del expediente,
pegado en una hoja. El flujo la vigila. Cuando alguien toca una celda, avisa qué cambió y qué
filas de la matriz hay que volver a mirar.

**Esto no es un sustituto pobre de la variante A: es la lámina de resolución, literal.** Ahí dice
*"la matriz del jueves ya se habría corregido sola el lunes a las 7:03 — avisando que la fila del
código de clasificación cambió, y por qué"*. Eso es exactamente lo que hace este flujo, y se ve
pasar en vivo.

#### El montaje — 25 minutos

1. Crear una hoja de cálculo en Google Sheets y pegar el contenido de
   `docs/recursos/caso/elementos-tramo2.csv`. La primera columna, `id_elemento`, queda como
   identificador.
2. Confirmar que **`SUM-011` tiene vacía la celda de `codigo_clasificacion`**. Es la única fila
   del archivo en esa condición, y es el compromiso **16-2**. Esa celda es la que se corrige en
   vivo.
3. En n8n, tres nodos:

   | # | Nodo | Configuración |
   |---|---|---|
   | 1 | **Google Sheets Trigger** | La hoja del paso 1. *Trigger On*: **Row Updated**. *Poll Times*: **cada minuto**. **Key column: `id_elemento`** |
   | 2 | **Google Gemini** | Credencial *Google Gemini (PaLM) API*. El prompt va abajo |
   | 3 | **Gmail → Send** | El aviso, al propio correo |

4. **El detalle que hace fallar este nodo:** si no se declara una columna clave única, el
   disparador se salta filas o dispara dos veces. Con `id_elemento` como *key column* no pasa.
5. Ensayar: cambiar cualquier celda, esperar el minuto, verificar que llegue el correo. **Dejar
   esa ejecución en el historial**, igual que en la variante A.
6. **Devolver la celda de `SUM-011` a vacía** después del ensayo. Si queda diligenciada, en clase
   no hay nada que corregir y la demostración se queda sin gesto.

#### El prompt del nodo de Gemini

> Eres el asistente de coordinación BIM del Corredor Av. Guayacanes. Vas a recibir una fila del
> inventario de elementos del Tramo 2 que acaba de cambiar. Devuelve, en tres líneas y en español
> neutro: qué elemento cambió y en qué campo; si ese cambio cierra o afecta algún compromiso de
> comité, nombrándolo; y qué fila de la matriz de requisitos hay que volver a revisar. Si no
> puedes determinar alguna de las tres cosas con la fila sola, dilo en vez de suponerlo.
>
> Fila modificada:
> {{ JSON.stringify($json) }}

#### En vivo — el gesto

Con la hoja proyectada, decir *"yo soy el Consorcio, y es lunes"*, y escribir el código de
clasificación en la celda de `SUM-011`. Después, silencio y esperar el correo. Ese minuto se llena
con el `note` del semáforo, que es la lámina siguiente.

Cuando llegue: *"nadie exportó nada, nadie se acordó de nada, y la matriz ya sabe. Eso es todo lo
que pedía el lunes de la primera lámina."*

#### La honestidad que hay que decir en voz alta

La hoja **no es el CDE**, y hay que decirlo antes de que alguien lo pregunte:

> *"Estoy usando una hoja para que ustedes vean el cambio con sus propios ojos. En el proyecto
> real esto es un archivo en Forma, y el disparador es una notificación o un webhook de la
> plataforma — que exige una aplicación registrada por un administrador de la cuenta. Lo que les
> estoy demostrando no es la hoja: es que **puede existir un vigía**, y que el vigía avisa el
> lunes a las 7:03 sin que nadie se acuerde de nada."*

Dicho así, la demostración no promete de más y además **prepara el taller**: la aplicación
registrada por un administrador es justamente la conversación con TI que sale de la Parte B.

#### Los modos de que se caiga

| Síntoma | Causa casi segura | Qué hacer en vivo |
|---|---|---|
| El flujo no arranca al cambiar la celda | Falta la columna clave, o el sondeo está en más de un minuto | Abrir el historial del ensayo. No depurar |
| Dispara dos veces | Misma causa: columna clave no única | Ignorarlo. No afecta el argumento |
| Gemini nombra un compromiso que no existe | El prompt perdió la última instrucción | **Usarlo.** Es el límite clave de la lámina de RAG, en vivo |

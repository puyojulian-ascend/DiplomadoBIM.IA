# Guion — Sesión 08 · Integración de modelos BIM con IA

**Miércoles 16/09/2026 · 2 horas · Stiven Valencia**
Documento del docente. No se proyecta.

---

## En una línea

Seis sumideros caen dentro de la ciclorruta y ningún documento lo dice: está en la geometría. La
IA lee el expediente desde la 06, pero nunca ha visto el modelo. Hoy se conecta — y cuando le dan
permiso de escritura, llena tres campos que estaban vacíos a propósito.

| | |
|---|---|
| **Objeto de la sesión** | **La Ventanilla** |
| **La frase** | Conectar la IA al modelo no la vuelve inteligente sobre el proyecto: la vuelve rápida leyendo lo que ya está escrito. |
| **El giro** | Le dieron escritura. La máquina no distingue "falta el dato" de "no se ha decidido". |
| **La rima con la 07** | Allá la regla envejeció sin avisar. Acá el campo vacío significaba algo y nadie lo escribió. |

---

## El punto de partida

El auditorio es de **arquitectos e ingenieros civiles**, no de desarrolladores. Cuatro cosas que
conviene tener presentes al abrir:

1. **La sesión anterior fue la 07**, el viernes 11/09: las cuatro preguntas, la matriz de
   decisión, el acta que cambió la regla — y el anuncio de **Antigravity** como relevo de
   "aprender Python". El auditorio llega con eso fresco.
2. **La 07 cerró diciendo que todo lo automatizable supone que la respuesta ya está escrita en
   algún documento.** Ese es el puente exacto de hoy: lo que pide Interventoría no está en ningún
   documento, está en la geometría del modelo.
3. **Esta sesión cambió de enfoque el 13/09.** Antes era diseño generativo; ahora es integración
   del modelo con IA, y lo generativo quedó en dos láminas de panorama. Ver *Qué se movió y por
   qué*, al final.
4. **El auditorio todavía confunde RAG.** Es la razón del cambio. Hoy no se agregan siglas nuevas:
   se aplican las de la 06 a un objeto distinto, y se ven funcionando en pantalla.
5. **El caso es ficticio; la demostración no.** El corredor no tiene modelo —no existe— y las
   demos corren sobre **un modelo real de muros**. Eso se dice en voz alta, y la lámina *Práctica*
   ya lo trae escrito. No resta: es coherente con todo lo que el curso viene diciendo.

### Registro

- **Ninguna sigla nueva.** MCP, API y RAG ya se explicaron el 09/09. Hoy se usan, no se enseñan.
  Si alguien pide el repaso, está en la ficha del Enchufe — se la entrega, no se dicta otra vez.
- **"Modelo" es ambiguo por partida doble, y hay que desambiguarlo.** No es el modelo de IA; y
  además hoy hay dos modelos BIM en juego: **el del corredor**, que es el del caso y no existe, y
  **el de los muros**, que es el que se ve en pantalla. Nombrarlos siempre completo: *"el modelo
  del corredor"*, *"el modelo de muros"*.
- **Cada concepto entra por el corredor, no por la definición.** Primero los seis sumideros que
  nadie puede ubicar; después la palabra "geometría".
- **Nada de prometer que la IA modela sola.** La lámina *Del dato al modelo* existe para eso.
- Frase útil al abrir: *"El viernes automatizamos tareas cuya respuesta ya estaba escrita en algún
  lado. Hoy Interventoría pregunta algo que no está escrito en ningún documento — está en la
  geometría. Y la IA nunca ha visto el modelo."*

---

## Preparación — qué estudiar antes del miércoles

Tiempo sugerido: **2 h**, en este orden.

### 1 · Las tres capas del modelo (30 min) — *es la espina de la sesión*

Objetos, parámetros y geometría. Hay que poder clasificar **en vivo** cualquier pregunta que lance
el auditorio, porque la Parte A del taller es exactamente eso y van a traer casos raros.

Los tres casos de frontera que conviene tener pensados:

- **Cantidades.** ¿Parámetro o geometría? Depende: si la tabla de planificación ya la calcula, es
  parámetro; si hay que medir, es geometría.
- **Ubicación.** "Abscisa" es un parámetro escrito; "¿cae dentro del trazado?" es geometría. Es
  justamente la distinción del caso de hoy.
- **Estado.** Casi siempre es parámetro, y casi siempre está desactualizado.

### 2 · El estado real de la conexión al modelo (30 min)

Qué existe hoy, de verdad, para llegar a un modelo desde una IA. Suficiente para responder *"¿y
esto lo puedo hacer el lunes?"* sin vender humo:

- El servidor MCP **oficial de Revit viene en tres versiones**, de alcance creciente: **solo
  lectura**, **lectura y escritura**, y **acceso anticipado** — más herramientas y menos rodaje.
  Hay que tener claro cuál se conectó, porque es lo que decide qué puede pasar en la Demo 5.
  **Verificar los nombres exactos y el alcance de cada una antes de dictar.**
- La ruta **openBIM** (IFC) existe y es la que no depende de un fabricante.
- La ruta más usada en la práctica sigue siendo **exportar y preguntarle al export**. No es
  elegante y funciona — pero hoy **no se demuestra**: las cinco demos corren contra el modelo
  vivo. Hay que decirlo en voz alta al cerrar el bloque: *se demostró el camino 3, no el 1*.
- Todo el bloque práctico cuelga de una sola pieza: que el servidor MCP responda. **No hay piso
  de respaldo.** Ver el recuadro de *Mapa* antes de montar nada.

### 3 · Por qué la escritura es una decisión, no un límite (25 min) — *es el giro*

**Este es el punto que más cambió, y conviene tenerlo firme.** La escritura en el modelo
**está disponible**: Autodesk publica una versión del servidor que escribe y otra de acceso
anticipado con más herramientas todavía. Así que no se puede sostener que "el fabricante no
deja".

Lo que hay que poder sostener es lo contrario, y es más fuerte: **el fabricante no decidió por
nadie — partió el servidor en tres para que la decisión sea de la organización, explícita y con
dueño.** Es exactamente el Semáforo de la 04 y la regla adoptada de la 07, ahora sobre el modelo.

Los argumentos de por qué esa decisión no es obvia, en orden de fuerza:

- Una escritura mal dirigida no se deshace con Ctrl+Z si ya se sincronizó.
- El agente no distingue estados semánticos que una persona codificó a propósito — en blanco,
  `N/D` y `PENDIENTE` son tres cosas distintas y él ve una.
- La lectura deja rastro auditable; la escritura deja un modelo cambiado y ninguna explicación.

> **La pregunta que se lleva el auditorio no es "¿puede escribir?" sino "¿quién firmó que
> pudiera?"** Si nadie sabe quién eligió la versión que está conectada, esa es la respuesta.

### 4 · Paramétrico, generativo y optimización (20 min)

Solo para las dos láminas de investigación. **No hay que estudiar algoritmos genéticos** — se
sacaron de la sesión a propósito. Basta con la distinción de quién propone y quién decide, que es
lo que permite leer una ficha de producto sin comprar humo.

### 5 · Repaso de la 06, para heredarla bien (15 min)

Releer el deck de la 06. Hoy no se vuelve a explicar MCP: se dice *"las tres maneras ya las
vimos"* y se pasa. Si se re-explica, la sesión se cae — es el error que este reenfoque tiene que
evitar.

### Lo que hay que hacer, no solo leer

- **Dejar la conexión andando y probada**: Revit abierto con el modelo, servidor MCP conectado,
  agente contestando. Está detallado abajo en *Montaje previo*. El paso que no se puede saltar es
  **anotar cuáles campos se dejaron vacíos a propósito**: sin esa lista, el giro no cierra.
- **Correr las cinco demos completas una vez, la noche anterior**, y anotar qué contestó a cada
  pregunta. La de geometría es la que más varía según el servidor.
- **Anotar las cifras de referencia del modelo** — cuántos elementos, de qué categorías, cuántos
  tipos. Son las que permiten auditar al agente en voz alta.
- **Ninguna demo se intenta en vivo sin haberla corrido antes.** Ahora vale para las cinco.

---

## Banco de ideas — para proponer, todavía no adoptadas

1. **Dibujar la ventanilla.** La lámina *El objeto* es solo texto. Un SVG chico —mostrador, ficha
   que sale, flecha tachada en sentido contrario— haría el objeto memorable en el sentido literal
   del HILO. Cabe en línea, como los diagramas de la 01.
2. **Recuperar una demo de export como piso de respaldo.** Al pasar todo a MCP, el bloque
   práctico quedó sin red: si el servidor no levanta, no hay ninguna demo. Una tabla exportada
   guardada de antemano —no hace falta exportarla en clase— devolvería ese piso y de paso
   demostraría el camino 1, que es el que el auditorio ya usa.
3. **Retomar el abanico como módulo aparte.** El diseño generativo quedó en dos láminas de
   panorama y el material bueno —las tres piezas, el frente de Pareto, la restricción tácita— está
   escrito y probado. Si alguna vez hay una sesión extra o un taller largo, ya existe.

---

## Minutado

Contenido: **~109 min** sin la lámina `Extra`, ~114 con ella. Holgura: 6–11 min.

| Min | Lámina | Tiempo |
|---|---|---|
| 0:00 | Portada · bienvenida | 3 |
| 0:03 | **Antes** — En el capítulo anterior | 2 |
| 0:05 | **El caso** — Seis sumideros que ningún documento ubica | 5 |
| 0:10 | El modelo no es un documento | 7 |
| 0:17 | **Tres caminos hasta el modelo** | 9 |
| 0:26 | Qué entrega el modelo y qué no | 7 |
| 0:33 | **Práctica** — Demos 1, 2 y 3 | 14 |
| 0:47 | **El objeto** — La Ventanilla · Demo 4 | 9 |
| 0:56 | Del dato al modelo: generar y actualizar | 7 |
| 1:03 | *Extra — Un flujo de generación sensato* | *5 (opcional)* |
| 1:08 | **El giro** — Le dieron escritura · Demo 5 | 12 |
| 1:20 | *Investigación* — Paramétrico, generativo, optimización | 5 |
| 1:25 | *Investigación* — Y el abanico | 5 |
| 1:30 | **Taller** — La ronda: ¿a quién le sirve esto? | 15 |
| 1:45 | **Resolución** — Los seis sumideros, ubicados | 5 |
| 1:50 | **La frase** + Próximo capítulo | 4 |
| 1:54 | *Holgura / preguntas* | *6* |

### Qué se cae, y en qué orden

1. La lámina `Extra` del flujo de generación.
2. La Demo 3 (el cruce con el requisito) — el punto de *modelo más documento* ya está en el
   diagrama de la lámina *Práctica*.
3. La pregunta de geometría de la Demo 2 — se narra con la lámina *Qué entrega y qué no*.
4. Las dos láminas de *Investigación* se pasan en 3 minutos entre ambas, diciendo que están en la
   ficha.

**No se caen nunca:** la Demo 5 (el giro) y la *Resolución*. Sin el giro, la sesión es una
demostración de producto. Y si el servidor MCP no levanta se caen las cinco a la vez — por eso
la narración de cada una tiene que estar lista aunque la pantalla no acompañe.

---

## Beats de la historia

1. **El encargo imposible** (*El caso*). Interventoría pide algo que ningún documento contesta. Y
   la IA, que lleva dos sesiones respondiendo bien, esta vez no tiene con qué.
2. **El mecanismo** (*Tres caminos* → *Qué entrega*). Se ordena el panorama. Aquí se relajan: "ah,
   entonces exportar también cuenta".
3. **Funciona** (*Práctica* → *El objeto*). Las preguntas de parámetro salen impecables. La
   ventanilla se ve, y se ve cómoda.
4. **El giro** (*El giro*). "Le dimos escritura." Pausa. "Llenó las dieciséis." Pausa más larga.
   "Tres estaban vacías a propósito."
5. **El cierre** (*Resolución*). La tabla sale en cuatro minutos, con la fuente de cada dato — y
   los tres campos intencionales siguen vacíos.

---

## Preguntas para el auditorio

### En *El caso*

> **"¿Cómo averiguan hoy si un elemento choca con otra cosa — abriendo el modelo, o preguntándole a alguien?"**

Todos abren el modelo. Es la entrada perfecta: *"o sea que la respuesta existe, pero solo la puede
sacar alguien con el modelo abierto y con licencia. Hoy vamos a ver quién más puede sacarla."*

### En *Tres caminos*, para que no suene a repaso

> **"De los tres, ¿cuál están usando hoy sin darse cuenta?"**

*La respuesta útil:* exportar. Todos exportan tablas. Sirve para que el camino 1 no suene a opción
de segunda: es el que ya usan, y tiene un problema conocido — envejece.

### Antes de *El giro* — la pregunta clave

> **"Ya lee bien. ¿Le damos permiso de escribir?"**

**Van a decir que sí**, y con entusiasmo, porque acaban de ver que lee impecable. Dejar que lo
digan. Después dar el giro.

*Si alguien dice que no:* preguntarle por qué, y usar su respuesta como entrada. Suele decir algo
muy cercano a la lección.

### Después del giro, para consolidar

> **"En sus modelos: ¿qué campo está vacío a propósito ahora mismo?"**

Es el ejercicio que la hoja deja **para después de clase**. Si sale una buena en voz alta, usarla
como ejemplo — y guardarla para volver a traerla en la ronda, que viene enseguida.

---

## Las demostraciones

### El modelo de demostración — y por qué no es el corredor

**El Corredor Av. Guayacanes es ficticio y su modelo no existe.** Todo el expediente del curso
está construido para el ejercicio. Demostrar sobre un modelo del Tramo 2 exigiría inventarlo, y
esta es justamente la sesión donde no se puede hacer eso: el argumento entero es que la máquina
entrega lo que hay escrito de verdad.

**Se demuestra sobre un modelo real y simple: unos muros.** Sirve igual una estructura simple
—pórticos, losa— si es lo que está a mano. Lo que importa es que sea **de verdad** y que quepa en
pantalla.

**Y hay que decirlo en voz alta al entrar a la lámina *Práctica***, que ya lo trae escrito:

> *"El corredor es un caso de curso, y no tengo su modelo. Lo que sí tengo es esto: unos muros de
> verdad. Y las tres capas son exactamente las mismas — objetos, parámetros y geometría. Lo que
> cambia entre estos muros y un corredor de 2,4 GB es el tamaño, no la mecánica."*

Dicho así no resta: **suma**, porque es coherente con todo lo que el curso viene diciendo sobre
no confundir una representación con una evidencia.

---

### Montaje previo — 20 minutos la noche anterior

**El modelo (5 min).** Ya está hecho: no se modela nada.

1. Abrirlo y recorrerlo una vez. **Anotar las cifras de referencia**: cuántos elementos, de qué
   categorías, cuántos tipos, cuántos niveles. Es contra esas cifras que se audita al agente en
   voz alta, y es el paso que no se puede saltar.
2. **Preparar el campo del giro.** Elegir un parámetro de texto —`Marca` o `Comentarios`— y
   dejarlo **vacío a propósito en dos o tres elementos**, por una razón que se pueda decir en voz
   alta. Por ejemplo: *elementos provisionales*, o *acabado pendiente de aprobación*.

   **Anotar cuáles son.** Es la lista que se muestra después del giro, y sin ella la demo no
   cierra.
3. Dejar además algún elemento con ese campo vacío **por olvido**, que es lo normal y casi
   siempre ya está así. La gracia del giro es que en la respuesta **los dos casos se ven
   idénticos**.

**La conexión (10 min).** Es la única pieza que puede tumbar el bloque entero.

4. Revit abierto con el modelo, servidor MCP conectado, agente contestando.
5. **Correr las cinco demos completas una vez**, y anotar qué contestó a cada pregunta. La de
   geometría es la que más varía según el servidor: hay que saber de antemano cuál de los tres
   desenlaces va a salir.

**La escritura (2 min).** La Demo 5 escribe en el modelo con `modify_element_parameters`, que
exige tener conectada la versión del servidor **que escribe** — no la de solo lectura. Confirmar
cuál está conectada antes de clase, porque es el dato que se dice en voz alta. Y tres seguros,
ninguno opcional:

- **Guardar una copia del archivo** antes de clase. Es el plan de recuperación real.
- **Probar `Ctrl+Z` en el ensayo**, después de una escritura por MCP. Según cómo el servidor
  envuelva la transacción, puede deshacerla o no — y eso hay que saberlo antes, no en vivo.
- **Nunca sobre un modelo de trabajo, ni sobre nada sincronizado con un central.** El modelo de
  demostración es desechable, y esa es toda su gracia.
6. Si en el ensayo el servidor no respondió a alguna pregunta, esa pregunta **sale del guion**.
   En vivo no se descubre nada.

**El requisito (3 min).**

7. Dejar `requisito.md` en la carpeta del agente, junto a la conexión. **Ajustar R1, R3 y R4** a
   los parámetros y a los tipos que existen de verdad en el modelo — si nombran algo que no está,
   el agente reporta incumplimientos falsos y la demo se cae sola.

**Lo que ya no hace falta.** No se exporta ninguna tabla, no hay CSV, no hay `muros-copia.csv`.
Todo sale del modelo vivo.

---

### Mapa

| Momento | Demo | Sobre qué | Min | ¿Obligatoria? |
|---|---|---|---|---|
| 0:33 | **1 · ¿Qué hay en este modelo?** | Revit + MCP | 5 | **Sí** |
| 0:38 | **2 · Las tres capas, en tres preguntas** | Revit + MCP | 6 | **Sí** |
| 0:44 | **3 · El cruce con el requisito** | Revit + MCP + `requisito.md` | 3 | No |
| 0:47 | **4 · Fotocopia contra llave** | Revit + MCP | 4 | **Es el clímax** |
| 1:08 | **5 · Le damos escritura** | Revit + MCP (**escribe**) | 7 | **Sí — es el giro** |

> **El riesgo nuevo, y hay que asumirlo con los ojos abiertos.** En la versión anterior las demos
> corrían sobre una tabla exportada, así que había un piso: aunque Revit fallara, el bloque
> práctico se sostenía. **Ahora no hay piso.** Las cinco demos dependen de que el servidor MCP
> responda, y si no responde no hay ninguna.
>
> Eso se compensa de una sola manera: **ensayando la noche anterior** y teniendo lista la
> narración. Si la conexión no levanta, la sesión se dicta completa sin una sola demo — el
> argumento vive en las láminas. Lo que se pierde es la evidencia, no el hilo.

---

### Demo 1 — ¿Qué hay en este modelo? (5 min)

Abre el bloque y hace dos cosas a la vez: presenta el modelo al auditorio **a través del agente**,
y demuestra en público que la conexión es real.

**Antes de preguntar, anunciar el número.** Este auditorio no sigue una pantalla que se mueve
sola, y el efecto depende de que la cifra se haya dicho antes.

1. *"¿Qué hay en este modelo? Dame las categorías, cuántos elementos de cada una y qué tipos."*
2. *"¿Cuántos niveles hay y qué hay en cada uno?"*

> **El detalle que conviene señalar:** el agente no abrió el modelo y no lo *vio*. Pidió por la
> ventanilla y le pasaron una ficha. Y aun así contestó más rápido que alguien que lo abre por
> primera vez — porque lo que devolvió ya estaba escrito.

### Demo 2 — Las tres capas, en tres preguntas (6 min)

Es la lámina *El modelo no es un documento*, puesta en pantalla. Una pregunta por capa, sobre el
mismo modelo.

1. **Parámetro** — *"¿Cuáles elementos no tienen `Marca` asignada?"*
   Sale la lista, limpia. **Acá está sembrado el giro:** en esa lista conviven los olvidados y los
   intencionales, sin ninguna diferencia visible.
2. **Geometría** — *"¿Cuáles muros tocan la losa superior?"* o *"¿qué muros dan al norte?"*
   Tres desenlaces posibles, y los tres sirven — pero hay que saber cuál va a salir, y por eso se
   ensaya:
   - **Contesta bien.** El servidor sí llega a la geometría. Se dice: *"esta es la capa cara, y
     este servidor hoy la alcanza — no todos lo hacen"*.
   - **Dice que no puede.** Es la lámina *Qué entrega y qué no*, confirmada en vivo.
   - **Responde inventando.** El mejor de los tres: se le pregunta *"¿y con qué dato lo
     dedujiste?"* y se derrumba solo. Es la alucinación de la 02, ahora sobre el modelo — y con el
     modelo en pantalla para desmentirla.
3. **Intención** — *"¿Por qué este muro es de 150 y no de 200?"*
   **Nunca** va a contestar bien, y ese es exactamente el punto. Ninguna conexión resuelve esta
   capa, ni esta ni la que venga.

> **Lo que se gana al no exportar.** En la versión con tabla, la pregunta de geometría fallaba
> siempre y por una razón pobre: el CSV no traía coordenadas. Ahora falla —o no— por la razón
> buena: la geometría es la capa cara de consultar. Esa sí es la lección.

### Demo 3 — El cruce con el requisito (3 min)

> *"Contrasta este modelo contra `requisito.md` y dime qué incumple."*

**Modelo vivo más documento de disco, en una sola respuesta.** Es lo que la ventanilla hace mejor,
y es la mitad derecha del diagrama de la lámina *Práctica*.

Pedir al final: *"¿de dónde sacaste cada cosa?"* Que cite el modelo y el requisito por separado.

> **R5 está puesto para que falle.** El requisito de continuidad de fachada no se puede verificar
> con lo que la ventanilla entrega, y lo que se busca es que el agente **lo declare** en vez de
> estimarlo. Si resulta que sí lo verifica, mejor todavía: se anota y se cuenta.

### Demo 4 — Fotocopia contra llave (4 min) · **el clímax**

Va al entrar a *El objeto*. Sin export, el contraste se demuestra igual — con un giro mejor:
**la fotocopia es la respuesta anterior del propio agente**, ahí arriba en la misma pantalla.

1. **(1 min)** *"¿Cuántos muros hay?"* Contesta. Que la respuesta quede visible.
2. **(1 min)** **Borrar un muro en Revit, delante de todos.** Que se vea el clic.
3. **(1 min)** *"¿Cuántos muros hay?"*, otra vez. Contesta uno menos.
4. **(1 min)** **Subir el scroll hasta la primera respuesta** y señalarla con el dedo:

   > *"Esta línea de acá arriba dice cuatro. No está equivocada: era verdad hace dos minutos. Eso
   > es una fotocopia — y desde acá se ve exactamente igual de segura que la de abajo. La única
   > diferencia es que la de abajo volvió a preguntar."*

**Es fotocopia contra llave en treinta segundos y sin exportar nada.** El miércoles pasado fue una
metáfora; hoy se ve.

> **Plan B:** si el servidor no responde, se narra exactamente así señalando el diagrama de la
> lámina *Práctica*, y se dice con todas las letras qué se demostró y qué no. La honestidad sobre
> el alcance de la demostración es parte de la sesión.

### Demo 5 — Le damos escritura (7 min) · **es el giro**

**Este servidor sí escribe**, y es oficial: expone `modify_element_parameters` porque lo que
está conectado no es la versión de solo lectura. Eso no es un atajo ni un parche — **es la
puerta que alguien eligió abrir**, y ese hecho es la mitad de la lección.

**Decirlo así al entrar**, porque el auditorio viene de la lámina *El objeto*:

> *"Autodesk publicó tres versiones de este servidor. Yo conecté la que escribe. Nadie me obligó
> y nadie me lo impidió: lo elegí yo. Miren lo que pasa."*

**Los tres seguros, antes de tocar nada** (están en *Montaje previo*): copia del archivo guardada,
saber si `Ctrl+Z` deshace una escritura hecha por MCP, y jamás sobre un modelo de trabajo real.

1. **(1 min)** La pregunta al auditorio: *"ya vimos que lee bien. ¿Le damos permiso de escribir?"*
   Van a decir que sí, con entusiasmo. **Dejar que lo digan** — el giro necesita que lo hayan
   pedido ellos.
2. **(1 min)** Decirlo **antes** de ejecutar, no después:

   > *"El servidor oficial no haría esto. Este no es el oficial y está en prueba, así que puede
   > fallar. Si falla, también vamos a aprender algo."*

   Queda dicho que es experimental, y el auditorio no se lleva la idea de que esto ya está listo
   para su proyecto el lunes.
3. **(2 min)** *"Completa la `Marca` de todos los elementos que no la tengan, siguiendo la
   nomenclatura de los que sí."*

   - **Antes del enter, que declare el plan:** qué elementos va a tocar y qué va a escribir en cada
     uno. Es la lámina *Práctica* — *el plan, no la respuesta*. Ahí es donde se audita.
   - Ejecutar. Después **refrescar la tabla en Revit delante de todos**: los campos aparecen
     llenos, con formato correcto y secuencia correcta.
   - **Dejar que se vea bonito.** Este es el momento en que el auditorio queda convencido.
4. **(2 min)** Abrir la lista anotada en el montaje y señalar:

   > *"Estos dos no estaban sin Marca por olvido. Estaban así porque son provisionales y todavía
   > no se decide si quedan. Ahora tienen código. Y el código dice que existen, y dice que alguien
   > ya decidió."*

5. **(1 min)** El remate, despacio:

   > *"Para la máquina, un campo vacío por olvido y un campo vacío porque nadie ha decidido se ven
   > exactamente igual. No hay manera de distinguirlos, porque esa diferencia no está escrita en
   > el modelo: está en la cabeza de quien dejó el campo así."*

   Y el cierre, que es el que amarra con la lámina *El objeto*:

   > *"¿Se acuerdan de que les dije que el servidor oficial no escribe? Acaban de ver por qué."*

6. **Deshacer delante de todos** — `Ctrl+Z`, o recargar la copia guardada. Y decir por qué se pudo:
   *"esto era un modelo de prueba y no estaba sincronizado. En un modelo central, esto ya se lo
   comió otro."*

De ahí se pasa a la lámina *El giro*, que cuenta lo mismo con el corredor y las 16 fichas.

#### Los tres desenlaces, y los tres sirven

Está en prueba, así que hay que entrar sabiendo qué decir en cada caso:

- **Escribe bien.** Es el guion de arriba, tal cual. El giro llega entero.
- **Escribe de más, o escribe mal.** **Es el mejor desenlace posible** y no hay que disimularlo:
  el giro ocurre en vivo, sin necesidad de la lista anotada. Se dice *"esto es lo que pasa cuando
  se le da la llave a algo que está en prueba"*, y se deshace delante de todos.
- **Falla o se niega.** También sirve: *"está en prueba, y esto es exactamente el estado del
  arte."* Se pasa entonces a la versión sin escritura — *"¿qué `Marca` le pondrías a cada uno?"*—
  y el agente **propone** la lista impecable. El giro se sostiene igual: lo que importa no es que
  haya escrito, sino que no podía distinguir cuáles no debía tocar.

> **Por qué funciona:** el error lo comete la máquina delante de todos, sobre el modelo del propio
> docente, y es un error que el auditorio reconoce al instante — todos tienen campos así.

---

## Claves de la ronda

**Desde el 16/09 el taller de escritorio se reemplazó por una ronda de participación.** Es más
fácil de dictar y más difícil de conducir: quince minutos de participación abierta se van en dos
intervenciones largas si nadie los administra.

### El reparto de los 15 minutos

| Min | Qué | |
|---|---|---|
| 2 | El docente plantea y **da un ejemplo propio** | |
| 11 | La ronda — **6 a 8 intervenciones** de ≈ 90 s | |
| 2 | Cierre, agrupando por puerta | |

### Abrir con un ejemplo propio, nunca con la pregunta

Si se abre con *"¿a quién le sirve esto?"*, el silencio dura. Se abre con un caso concreto del
docente, **dicho en el formato que se espera de vuelta**: eso calibra el nivel de concreción sin
tener que pedirlo. Adaptar este al propio:

> *"Cada vez que alguien me pide cuántos elementos de tal tipo hay en un nivel, abro el modelo,
> filtro una tabla y contesto por correo. Me toma diez minutos y me lo piden tres veces por
> semana. Es solo lectura: no necesito que escriba nada."*

### Los tres datos que hay que sacarle a cada intervención

Si el participante no los da, los pregunta el docente:

1. **Qué tarea**, en una frase.
2. **Quién la hace hoy** y cuánto le toma.
3. **Por cuál puerta** — ¿alcanza con leer?

**El tercero es el que convierte la ronda en esta sesión y no en otra.** Si se deja caer, la ronda
se vuelve una lista de deseos sobre software.

### Qué hacer con las respuestas vagas

*"Nos ahorraría muchísimo tiempo"* no es un caso. La devolución que funciona es siempre la misma:

> **"¿Cuándo fue la última vez que te pasó?"**

El recuerdo concreto trae la tarea, el tiempo y la persona juntos, sin tener que pedirlos por
separado.

### Lo que va a salir, y qué hacer con cada cosa

- **Lecturas** — la mayoría. Confirmarlas en el momento: *"eso es hoy, con la puerta de solo
  lectura, y sin comprar nada"*. Es la mejor noticia de la sesión y conviene decirla así.
- **Escrituras masivas** — *"que me llene todos los códigos"*. **Es el giro, dicho por ellos.**
  Devolver: *"¿y cómo sabría cuáles no debe tocar?"* Vienen de ver la Demo 5, así que lo
  contestan solos.
- **Cosas que no son del modelo** — que lea correos, que arme actas. Es la 06 y la 07. Nombrarlo
  y seguir: *"eso ya lo vimos, y se resuelve por otro lado"*.
- **Intención** — *"que me diga por qué se diseñó así"*. Vale la pena leerla en voz alta: es la
  capa que ninguna conexión resuelve, y en el taller anterior casi nadie la encontraba solo.

### El cierre, en dos minutos

Agrupar lo que salió en las tres puertas y **contar en voz alta cuántos casos cayeron en cada
una**. El reparto suele ser abrumador hacia la lectura, y ese conteo es la conclusión:

> *"De los ocho casos que salieron, siete se resuelven leyendo. Uno necesitaba escribir — y es
> justamente el que nadie quiso firmar."*

### Si nadie habla

Preguntarle directamente a alguien cuyo rol se conozca, por su nombre. **La segunda intervención
siempre cuesta menos que la primera**, así que lo único que hay que resolver es arrancar.

### Lo que se perdió, y por qué se aceptó

El taller de escritorio producía dos artefactos por persona: tres preguntas clasificadas por capa
y un campo vacío a propósito. **La ronda produce uno solo, y solo para quien anote.**

A cambio, el auditorio se escucha entre sí — que es lo que esta sesión necesita después de cinco
demos seguidas. Y lo perdido no se perdió del todo: la clasificación por capas ya se practicó en
vivo en la Demo 2, y el campo vacío se pregunta en voz alta justo después del giro — está arriba,
en *Preguntas para el auditorio*.

**Lo que sí hay que pedir explícitamente:** que anoten su propio caso. Sin hoja, el único registro
es el cuaderno de cada uno, y de ahí sale el insumo del integrador de la 12. Si no se pide, nadie
lo hace.

---

## Honestidad sobre el estado del arte

Tres cuidados:

1. **Lo que se demuestra es MCP, y solo MCP.** El camino que el auditorio ya usa —exportar— se
   explica pero no se ve. Decirlo al cerrar el bloque: *"hoy les mostré la llave; la fotocopia la
   hacen ustedes todos los días, y por eso saben cómo envejece"*.
2. **No decir que "Revit no deja escribir".** Es falso y se desmiente solo en la Demo 5. Lo
   correcto: hay **tres versiones oficiales** de alcance creciente, y la de acceso anticipado
   trae herramientas que todavía no tienen rodaje. Presentarlo como **un menú de permisos**, no
   como una limitación del producto — y no prometer que la de acceso anticipado es lo que viene:
   es lo que se está probando.
3. **El diseño generativo no se vende.** Dos láminas de panorama, marcadas como investigación, y la
   frase honesta: hoy es más maduro en edificación que en infraestructura lineal. Lo que sirve
   desde ya es saber escribir variables, restricciones y objetivo — y eso no cuesta licencia.

---

## Cifras y afirmaciones — verificadas antes de dictar

> **Dos juegos de cifras, y no se mezclan.** Las de abajo son del **expediente ficticio** y
> sostienen la narración de las láminas *El giro* y *Resolución*. Las de la **demostración** salen
> del modelo de muros propio y se anotan en el montaje previo — no están acá porque cambian con el
> modelo que se use.

### Del expediente — sostienen las láminas, no las demos

Verificadas sobre `elementos-tramo2.csv` (63 filas, 62 identificadores distintos):

| Cifra | Valor | Nota |
|---|---|---|
| Elementos sin ficha de mantenimiento, cualquier codificación | **16 filas / 15 elementos** | `SUM-014` está repetido en el export |
| De esos, **en blanco** | **10** | Son los que el giro usa |
| Con `N/D` | **4** | |
| Con `PENDIENTE` | **2** | |
| Elementos entre K0+400 y K0+700 | **25** | |
| De esos, con ficha **en blanco** | **3** | **Los tres del giro** |
| Elementos con código de clasificación vacío | **1** | El resto lo corrigió el Consorcio: compromiso 16-2 |

### Externas

| Afirmación | Confianza |
|---|---|
| El servidor MCP oficial de Revit se publica en **tres versiones** — solo lectura; lectura y escritura; acceso anticipado — | **A verificar antes de dictar.** Reemplaza la afirmación anterior de que el servidor oficial era solo lectura, que era incorrecta. Confirmar los nombres exactos, el alcance de cada una y cuál está conectada en la máquina de la demo |
| Existen rutas openBIM para consultar IFC desde una IA | Alta — IfcOpenShell, Bonsai, web-ifc. Se nombraron en la 06 |
| Antigravity: plan Individual gratuito, disponibilidad general | Alta — reverificado 13/09/2026. Ver el guion de la 07 |
| "La IA ya genera modelos BIM completos" | **Falsa como se enuncia — no repetirla ni para desmentirla de pasada.** La lámina *Del dato al modelo* la desarma con precisión |

---

## Materiales a repartir

> **La 08 no reparte hoja de taller.** La ronda es oral y no deja hoja llenable: la única pieza
> que se entrega es la ficha del objeto, al cerrar. Si alguien pide dónde anotar, la respuesta es
> su propio cuaderno — y conviene pedirlo en voz alta al abrir la ronda, porque los casos que
> salen valen para el integrador de la **sesión 12**.

| Cuándo | Qué |
|---|---|
| Al cerrar (1:50) | `recursos/fichas/ficha-08-ventanilla.md` |
| A quien pida el repaso de siglas | `recursos/fichas/ficha-06-enchufe.md` |

---

## Traspaso a la sesión 09 (Stiven, 18/09)

- **Quedó claro:** al modelo se le pide por una ventanilla y devuelve lo que está escrito en la
  ficha, no lo que alguien pensó. Y la ventanilla tiene tres puertas — solo lectura, lectura y
  escritura, acceso anticipado —: **cuál se abre es una decisión con dueño**, porque la máquina
  no distingue "falta el dato" de "no se ha decidido".
- **Quedó abierto:** la ventanilla entrega lo que el modelo sabe **hoy**. El presupuesto
  —$86.400 millones— y el plazo —22 meses— no salieron de ahí. ¿Qué dicen los 40 corredores
  anteriores sobre lo que de verdad va a pasar?

Registrado en [HILO-NARRATIVO.md](../HILO-NARRATIVO.md), sección 7.

---

## Qué se movió y por qué — cambio del 13/09

Esta sesión era **Diseño generativo e integración de modelos BIM con IA** y se reenfocó a la
segunda mitad de su propio título. La razón: el auditorio todavía confunde RAG, y una sesión sobre
optimización multiobjetivo llegaba demasiado arriba.

| Qué | Dónde quedó |
|---|---|
| Algoritmos genéticos, frente de Pareto en detalle, panorama de herramientas | **Fuera.** El material sigue en el historial de git si se necesita |
| Paramétrico / generativo / optimización, y la idea del abanico | **Dos láminas marcadas `Investigación`**, al final del desarrollo |
| Las tres piezas (variables, restricciones, objetivo) | **Fuera del taller**, mencionadas en la ficha como lo único que se puede practicar sin comprar nada |
| "Qué significa generar un modelo BIM" | **Se quedó**, y es ahora la lámina *Del dato al modelo* |
| El objeto **El Abanico** | Reemplazado por **La Ventanilla**. La ficha se renombró a `ficha-08-ventanilla.md` |

**Se propagó a:** `HILO-NARRATIVO.md` (§2, §4, §7 y dos acuerdos de reparto nuevos),
`sessions/manifest.json`, `recursos/manifest.json`, `00-mapa-del-diplomado.md`, la lámina *Antes* y
el *Final de temporada* de la 09, el *Próximo capítulo* de la 07, el taller y la ficha.

**Lo que hay que vigilar en clase:** que la primera mitad no suene a repaso de la 06. La diferencia
está en el objeto de la conexión —el modelo, no el expediente— y en tres cosas que los documentos
no tenían: pesa, tiene geometría, y su ventanilla es de una sola dirección.

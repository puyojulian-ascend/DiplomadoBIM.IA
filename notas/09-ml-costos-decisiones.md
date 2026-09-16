# Guion — Sesión 09 · Machine learning para costos, planificación y decisiones

**Viernes 18/09/2026 · 2 horas · Stiven Valencia**
Documento del docente. No se proyecta. **Última sesión en solitario del arco.**

---

## En una línea

Marcela pregunta si el presupuesto es realista. Cuarenta corredores anteriores dicen que no. Un
modelo lo predice con correlación 0,99 usando una columna que solo existe cuando el contrato ya
terminó — y el capítulo cierra la temporada mostrando que las cinco veces la máquina hizo
exactamente lo que se le pidió.

| | |
|---|---|
| **Objeto de la sesión** | **La Banda** |
| **La frase** | Una predicción sin banda es una opinión con decimales. |
| **El giro** | Correlación de 0,99 y completamente inútil: fuga de información. |
| **El cierre de temporada** | Los cinco objetos juntos, respondiendo la pregunta de la sesión 01. |

---

## El punto de partida

Es la **última sesión del arco** y la última de Stiven en esta seguidilla de cuatro. Tres cosas
al abrir:

1. **Viene de la 08, del miércoles**, y el traspaso es directo: la ventanilla entrega lo que el
   modelo sabe hoy —cantidades, parámetros, abscisas— y ni el presupuesto ni el plazo salieron de
   ahí. Hoy se pregunta de dónde salieron esas dos cifras.
2. **Es la única sesión del curso que trabaja sobre datos tabulares reales del expediente.** El
   CSV de 40 corredores se entrega y se abre en clase. Eso cambia el tono: no es una sesión de
   herramientas, es una sesión de lectura de datos.
3. **Cierra cinco sesiones, no una.** La lámina *Final de temporada* no es un resumen: es el
   remate de la pregunta que abrió la 01. Se dicta despacio y no se recorta.

### Registro

- **"Modelo" es una palabra sobrecargada y hay que desambiguarla cada vez.** En esta sesión
  "modelo" es un modelo predictivo, no el modelo BIM. Conviene decir "modelo predictivo" completo
  las primeras veces.
- **Ninguna cifra sin su origen.** Todas las de la sesión salen del CSV y se pueden recalcular en
  pantalla. Es la sesión donde más importa, porque las cifras hablan de sobrecostos.
- **El archivo es ficticio, y se dice en voz alta** — ver la advertencia previa más abajo.
- Frase útil al abrir: *"El miércoles le preguntamos al modelo y nos contestó lo que tenía
  escrito. Pero el presupuesto y el plazo no están en el modelo. Hoy la pregunta es de dónde
  salen esos dos números — y cuánto hay que creerles."*

---

## Preparación — qué estudiar antes del viernes

Tiempo sugerido: **2 h**, en este orden.

### 1 · Fuga de información (30 min) — *es el giro, y tiene que estar impecable*

`num_otrosi` predice el sobrecosto con 0,99 y es inútil, porque solo se conoce cuando el contrato
terminó. Hay que poder explicar el concepto general en una frase y **llevar un segundo ejemplo
de otro dominio en el bolsillo** — la pregunta "¿y eso pasa seguido?" llega siempre, y la
respuesta honesta es que es uno de los errores más frecuentes que existen.

Ojo con la formulación: la fuga no es "usar una variable mala". Es **usar una variable que en el
momento real de la predicción todavía no existe**. La diferencia importa, porque la misma columna
es perfectamente válida para un análisis retrospectivo.

### 2 · La banda: por qué cuantiles y no un intervalo del modelo (30 min)

La banda del Tramo 2 no sale de un modelo entrenado: sale de los **percentiles 10 y 90 de los 19
corredores comparables**, excluyendo los dos atípicos de causa externa. Conviene tener claro por
qué se hizo así, porque el que sepa de estadística lo va a preguntar:

- Con 19 casos, un intervalo empírico por cuantiles **no asume ninguna distribución**. Un
  intervalo ajustado sí, y con esa cantidad de datos esa suposición es la parte más frágil.
- "8 de cada 10 casos comparables" es una lectura directa y verificable sobre la tabla: cualquiera
  puede contar las filas. Un intervalo de confianza no se puede contar, hay que creerlo.
- Y conviene no confundir en voz alta **intervalo de predicción** (dónde va a caer un caso nuevo,
  que es lo de esta sesión) con **intervalo de confianza** (dónde está el promedio). Si alguien
  usa los términos, vale la pena nombrarlos bien.

### 3 · Correlación y causa, aplicado al propio hallazgo (25 min) — *el punto débil de la sesión*

La sesión enseña "correlación no es causa" en *Las trampas*, y su titular —redes húmedas, el
doble de sobrecosto— tiene exactamente esa forma. **Alguien lo va a señalar, y tiene razón.**
Conviene llegar con la respuesta armada, que además es buena:

> Para **predecir**, la correlación alcanza: si los corredores con redes húmedas se sobrecostaron
> el doble, un corredor con redes húmedas merece más provisión, sepamos o no por qué. Para
> **actuar**, no alcanza: hay que saber el mecanismo. Por eso la recomendación de la
> *Resolución* no es "evitar las redes húmedas" —que sería absurdo— sino **estudios previos más
> profundos de redes**, que es una hipótesis sobre la causa: lo que se sobrecosta es lo que está
> enterrado y no se conoce.

Dicho así, la objeción deja de ser un problema y pasa a ser la mejor lámina de la sesión.

### 4 · Sobreajuste, partición y generalización (20 min)

Suficiente para responder *"¿y cómo saben que funciona?"*: se aparta un conjunto de prueba que el
modelo nunca vio, y se mide ahí. Con 40 filas eso es incómodo, y decirlo es parte de la
honestidad de la sesión.

### 5 · Por qué 40 es poco (15 min)

La lámina lo afirma. Hay que poder sostenerlo: pocos datos permiten que relaciones casuales se
vean fuertes, y cuantas más variables se usen, peor. Es la razón por la que la sesión se queda en
"dónde está el riesgo" y no promete acertar la cifra.

### Lo que hay que hacer, no solo leer

- **Correr el CSV una vez.** Las cifras verificadas están en *Parte C — Los números del archivo*,
  más abajo. Si la herramienta del día da algo distinto, vale el guion.
- **Correr la demo una vez.** Depende de que el asistente conteste `num_otrosi`, y eso es
  probabilístico. La nota trae el plan B, pero conviene saber cómo responde antes.

---

## Banco de ideas — para proponer, todavía no adoptadas

> Nada de esto está en el deck. Se anota acá para decidirlo con tiempo.

1. **Hacer la demo en Antigravity.** Desde la 07 está instalado, el auditorio lo vio y se anunció
   como el relevo de Python. Darle el CSV y pedirle las tres preguntas en español cierra la
   continuidad de herramienta de las tres sesiones seguidas — y el archivo es ficticio, así que
   no hay problema de semáforo.
2. **Un beat de dos minutos sobre correlación y causa**, justo después de *El hallazgo*, con el
   argumento del punto 3 de arriba. Hoy la objeción queda para el turno de preguntas, donde
   depende de que alguien la haga; como beat propio, se convierte en fortaleza de la sesión.
3. **Revisar la cuenta de "quinta vez".** El giro dice *"Quinta vez en el curso"* y el guion
   manda decirlo en voz alta. Las cinco son las del arco (02, 04, 06, 08, 09) — pero la **07**
   entregó el mismo beat, con la automatización que siguió corriendo contra una regla vencida y
   "ni un error de código". Frente a un auditorio que contó seis, "quinta" suena a error. Se
   arregla diciendo *"otra vez"*, o contando la 07 explícitamente.

---

## Minutado

Contenido: ~108 min sin la lámina `Extra`, ~112 con ella. Holgura: 8–12 min.

**No sacrificar la última lámina.** Si el tiempo aprieta, se recorta el taller a 12 minutos —
pero el *Final de temporada* se dicta completo. Es el cierre de cinco sesiones.

| Min | Lámina | Tiempo |
|---|---|---|
| 0:00 | Portada · bienvenida | 3 |
| 0:03 | **Antes** — En el capítulo anterior | 2 |
| 0:05 | **El caso** — Cuarenta corredores y una pregunta incómoda | 5 |
| 0:10 | Diferencia clave — ML no es lo mismo que un LLM | 6 |
| 0:16 | Planteamiento — Anatomía de un problema predictivo | 9 |
| 0:25 | **El hallazgo** — Lo que dicen los 40 | 10 |
| 0:35 | Aplicación 5D — Predicción de costos | 6 |
| 0:41 | **El giro** — Correlación de 0,99 y completamente inútil | 10 |
| 0:51 | Las trampas — Por qué un modelo puede mentir | 7 |
| 0:58 | Aplicación 4D — Planificación y riesgo de retrasos | 6 |
| 1:04 | **El objeto** — La Banda | 10 |
| 1:14 | Decisiones — Del dato a la decisión | 5 |
| 1:19 | *Extra — Leer un resultado con criterio* | *4 (opcional)* |
| 1:23 | **Taller** | 15 |
| 1:38 | **Resolución** — El Tramo 2, con banda | 6 |
| 1:44 | **La frase** | 2 |
| 1:46 | **Final de temporada** | 6 |
| 1:52 | *Holgura / preguntas* | *8* |

---

## Advertencia previa — leer antes de dictar

**Los datos del archivo son ficticios.** Están generados para el curso, con patrones verosímiles
y relaciones internamente consistentes. **No son datos del IDU y no describen el desempeño real
de ningún proyecto.**

Esto hay que decirlo **en voz alta al llegar a la lámina del hallazgo**, no solo dejarlo en la
nota al pie. En una sala llena de funcionarios de la entidad, una cifra de "20% de sobrecosto
mediano" puede leerse como una acusación si no queda claro de dónde sale.

**Si alguien lleva la conversación al desempeño real de proyectos concretos:** devolverla al
método. *"No tengo esos datos y no me corresponde opinar sobre ellos. Lo que sí puedo mostrar es
qué se le puede preguntar a un archivo así, y qué respuestas no hay que creerle."* Esa frase
resuelve el 100% de los casos y protege el curso.

---

## Cómo dictar las dos primeras láminas de contenido

> **Las láminas *Diferencia clave* y *Planteamiento* repiten material de la sesión 01, y hay que
> dictarlas como recuerdo, no como enseñanza.** La 01 ya dio la taxonomía completa —*Tipos de
> Machine Learning en BIM*, seis tarjetas con diagramas: regresión, clasificación, clustering,
> anomalías, series de tiempo y refuerzo— y el ejemplo que usó para regresión fue, literalmente,
> proyectar el costo final con datos históricos de contratos similares. También dio el diagrama
> IA ⊃ ML ⊃ DL y la distinción entre software tradicional, ML e IA generativa.

Pasaron cuatro semanas, así que recuperarlo es legítimo y necesario. Lo que no funciona es
presentarlo como material nuevo: para el que se acuerde, son dos láminas repetidas al principio
de la sesión.

**Cómo se resuelve sin tocar el deck:** anunciarlo al pasar a *Diferencia clave*.

> *"Esto ya lo vimos el primer día, y lo vamos a pasar rápido: de los seis tipos que mostró
> Daniel, hoy usamos uno solo — regresión — y lo usamos en serio, sobre un archivo real."*

Y recortar: las dos láminas tienen **15 minutos** asignados entre las dos. Dictadas como
recuerdo caben en **8**, y esos 7 minutos se van a *El hallazgo* y a *El objeto*, que son las dos
láminas que esta sesión sí posee.

---

## Beats de la historia

1. **La pregunta sencilla** (*El caso*). "¿Ese número es realista?" Cuatro palabras que nadie
   puede responder con evidencia. Y un archivo que ya existe y nadie ha mirado nunca.
2. **La sorpresa** (*El hallazgo*). El doble de sobrecosto con redes húmedas, y la longitud —lo
   que todo el mundo mira— sin poder predictivo. Este dato reordena intuiciones.
3. **El giro** (*El giro*). La correlación de 0,99. Dejar que se ilusionen con el número antes de
   hacer la pregunta que lo derrumba.
4. **El objeto** (*La Banda*). Dos formas de decir lo mismo; solo una sirve para decidir.
5. **El cierre de temporada** (*Final de temporada*). Los cinco objetos. Es el final de la serie:
   dictarlo despacio, sin correr.

---

## Preguntas para el auditorio

### En *El caso*

> **"¿Cuántos de ustedes han estado en una reunión donde alguien pregunta si un presupuesto es realista, y se responde por experiencia?"**

Todos. Y seguir: *"la experiencia sirve. El problema es que la de cada uno es distinta, y no se
puede poner en un acta."*

### En *El hallazgo* — la pregunta que más rinde de toda la sesión

**Hacerla ANTES de mostrar los números.** Preguntar y esperar de verdad:

> **"¿Cuál creen que es la variable que más influye en el sobrecosto de un corredor?"**

Van a decir longitud, o presupuesto, o el contratista. Anotar dos o tres respuestas visibles.
**Después** pasar los números: redes húmedas al doble, y la longitud con correlación de 0,15.

*Si el chat está mudo:* lanzar dos opciones cerradas — "¿la longitud o las redes húmedas?" — y
pedir que voten. Con opciones cerradas siempre responden.

### Antes de *El giro*

> **"Un modelo que acierta el 99% de las veces: ¿lo usarían?"**

*Van a decir que sí.* Quinta y última vez en el curso. Después del giro, decirlo explícitamente:
*"quinta vez que les pasa lo mismo. Y esa es la única cosa que quiero que se lleven del
diplomado."*

### En *Final de temporada*

Ninguna. **Esta lámina se dicta, no se conversa.** Cinco tarjetas, una frase final, y silencio.

---

## Demostración en vivo (~7 min, dentro de *El hallazgo*)

No hace falta entrenar nada. Basta una hoja de cálculo o un asistente con el CSV adjunto.

1. **(2 min)** Adjuntar `historico-costos-corredores.csv` y pedir: *"usando solo las filas con
   estado Terminado, calcula el sobrecosto porcentual de cada proyecto y dame la mediana."*
2. **(2 min)** Después: *"compara la mediana de sobrecosto entre los proyectos con redes húmedas
   y los que no las tienen."*
3. **(3 min)** Y el remate: *"¿qué variable del archivo predice mejor el sobrecosto?"*
   **Casi siempre va a responder `num_otrosi`** — y ahí entra el giro solo, servido por la propia
   herramienta.

> **Es la mejor demo de las cinco sesiones**, porque la trampa la encuentra la máquina delante de
> todos y nadie puede decir que estaba preparada.

> **Plan B:** todas las cifras están en las láminas *El hallazgo* y *El giro*.

> **Si no responde `num_otrosi`:** preguntarle directamente *"¿qué tan bien predice el número de
> otrosíes?"* y seguir igual.

---

## Clave del taller

### B.1 — La trampa del archivo

**`num_otrosi`.** Correlación 0,99 con el sobrecosto. Es inútil porque el número de otrosíes de
un contrato solo se conoce cuando el contrato terminó — y para el Tramo 2, que empieza, la
columna está vacía. En el archivo, los tres proyectos `En ejecucion` la tienen vacía justamente
por eso.

### Parte C — Los números del archivo

Verificados sobre `historico-costos-corredores.csv` (40 registros, 37 terminados, 3 en ejecución):

| Pregunta | Respuesta |
|---|---|
| Corredores terminados por encima del presupuesto | **37 de 37** |
| Sobrecosto mediano | **20,0 %** |
| Mediana con redes húmedas (n=21) | **24,3 %** |
| Mediana sin redes húmedas (n=16) | **11,7 %** |
| Correlación longitud ↔ sobrecosto | **0,15** — prácticamente nula |
| Correlación `num_otrosi` ↔ sobrecosto | **0,99** |
| Casos fuera de toda banda | **2 de 37 (5 %)** — COR-09 y COR-23, con causa escrita |

### La banda del Tramo 2

Calculada sobre el grupo comparable: con redes húmedas, excluyendo los dos atípicos de causa
externa (n=19), percentiles 10 y 90.

| | Presupuesto | Banda del histórico |
|---|---|---|
| Costo | $86.400 millones | **$101.700 – $110.200 millones** (mediana $106.200) |
| Plazo | 22 meses | **25,5 – 28,3 meses** (mediana 26,4) |

**Trampa frecuente en la Parte C:** varios van a incluir los tres proyectos `En ejecucion` en el
cálculo y les van a salir cifras raras o errores de división. Es un buen momento para señalar
que **decidir qué filas entran es parte del modelo**, no un paso previo sin importancia.

---

## Color externo — opcional, y verificar antes de citar

Nada de esto está en las láminas. Sirve solo si alguien pregunta hasta dónde llega esto en el
mundo real.

| Tema | Estado | Confianza |
|---|---|---|
| Predicción de costos en construcción con ML es un campo activo, con modelos de series de tiempo para índices de costo vial y modelos de árboles combinados con seguimiento de avance | Literatura académica reciente y abundante | Alta como campo — **cualquier cifra concreta de precisión, verificarla** |
| **IA explicable** (métodos que dicen qué variable pesó en cada predicción) es hoy parte del estándar de trabajo | Literatura reciente | Alta — y es la respuesta directa al "nadie puede explicar por qué dio ese número" |
| Inspección de pavimentos con dron y visión por computador, con clasificación de deterioros | Tecnología madura y desplegada | Alta — buen enganche con la sesión 10 de Stiven |
| "Adopción superior al 60% entre los grandes contratistas" o "precisión del 95%" | Prensa sectorial | **Baja — no citar** |

---

## Materiales a repartir

> **Antes de cerrar el taller, decirlo en voz alta:** la hoja se llena en el navegador y se
> guarda sola, pero **solo en ese equipo**. Quien quiera conservarla tiene que descargarla en
> **PDF** o en **.md** con los botones de arriba. El .md sirve además para volver a dársela a
> una IA más adelante. Los cinco talleres alimentan el proyecto integrador de la sesión 12.

| Cuándo | Qué |
|---|---|
| Al empezar el taller (1:23) | `recursos/caso/historico-costos-corredores.csv` y `recursos/talleres/taller-09.md` |
| Al cerrar (1:52) | `recursos/fichas/ficha-09-banda.md` **y las cinco fichas juntas**, para quien no tenga alguna |

Vale la pena tener listo el juego completo de fichas: la lámina final muestra los cinco objetos,
y ahí es cuando la gente quiere la colección.

---

## Cierre del arco

Esta es la última sesión del arco y la última de esta seguidilla de cuatro de Stiven. Siguen la
**10 · Coordinación, calidad y obra** (Stiven, 23/09), la **11 · BIM, CDE y gemelos digitales**
(Daniel, 25/09) y el taller final del **30/09** con los tres docentes.

**Para el taller final:** los productos acumulados de los cinco talleres —ficha del agente,
semáforo aplicado, flujo con su cuenta de acceso, problema de diseño planteado y ficha de un
modelo predictivo— son material listo para el proyecto integrador. Vale la pena avisarlo en la
lámina final y coordinarlo con Daniel y Hugo.

Traspaso registrado en [HILO-NARRATIVO.md](../HILO-NARRATIVO.md), sección 7.

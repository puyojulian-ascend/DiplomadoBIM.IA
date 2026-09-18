# Guion — Sesión 09 · IA para costos, planificación y decisiones

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

## En palabras llanas — los siete conceptos de la sesión

> **Esta sección se lee primero, antes que *Preparación*.** Ahí abajo los mismos temas están
> tratados con el vocabulario técnico, para cuando alguien pregunte hondo. Acá están explicados
> desde cero, y **cada analogía sirve igual para entenderlo y para dictarlo**: si se entiende por
> la analogía, se enseña por la analogía.
>
> **Ninguna de las palabras técnicas hace falta decirla en voz alta.** La columna *"Cómo se dice
> en clase"* es la versión que se usa.

---

### 1 · La fuga de información — *es el giro, es lo más importante del día*

**Qué es.** Usar, para adivinar algo, un dato que **solo existe después** de que ese algo ya pasó.

**La analogía.** Se puede predecir si llovió mirando si la gente lleva el paraguas mojado. Acierta
siempre — y no sirve para nada, porque cuando se ve el paraguas mojado **ya llovió**.

**En el archivo del curso.** `num_otrosi` es el paraguas mojado. Los otrosíes se firman cuando el
contrato se complicó; contarlos "predice" el sobrecosto de maravilla. Pero el día que hace falta
la predicción —cuando el Tramo 2 apenas empieza— **esa casilla está vacía**.

**El matiz que no hay que perder.** La columna no es mala. Es perfectamente válida para mirar
hacia atrás y entender qué pasó. Lo que no se puede es usarla para mirar hacia adelante. La fuga
no es *"usar una variable mala"*: es *"usar una variable que todavía no existe"*.

**Cómo se dice en clase:**
> *"Este modelo no está prediciendo. Está recordando."*

---

### 2 · Correlación — *solo para saber qué significan los números de las láminas*

**Qué es.** Un número entre 0 y 1 que dice **qué tan juntas se mueven dos cosas**.

**La analogía, con ejemplos de obra.**

| Número | Qué significa | Ejemplo |
|---|---|---|
| **0** | No tienen nada que ver | El número de cédula y la estatura |
| **0,15** | Casi nada | La longitud del corredor y su sobrecosto |
| **0,99** | Prácticamente el mismo dato escrito de dos maneras | Los metros de muro y los metros cuadrados de pintura |

**Cómo se dice en clase.** Nunca hace falta la palabra:
> 0,15 → *"la longitud no dice nada"*
> 0,99 → *"esa columna va casi clavada con el sobrecosto"*

---

### 3 · Correlación no es causa

**Qué es.** Que dos cosas vayan juntas no dice **cuál causa cuál**, ni si hay una tercera causando
las dos.

**La analogía.** Los meses en que más se accidenta la gente son los meses en que más se factura.
Facturar no causa accidentes: en esos meses hay **más frente abierto**, y el volumen de trabajo
causa las dos cosas.

**Por qué importa hoy.** El titular de la sesión —redes húmedas, el doble de sobrecosto— tiene
exactamente esa forma, y alguien lo va a señalar con razón. La respuesta armada está en
*Preparación*, punto 3, y en corto es: **para predecir alcanza con que vayan juntas; para actuar
hay que saber por qué.** Por eso la recomendación final no es "evitar las redes húmedas" —que
sería absurdo— sino estudiar mejor lo que está enterrado.

---

### 4 · Mediana — *y por qué no promedio*

**Qué es.** Se ordenan todos los valores de menor a mayor y se toma **el del medio**.

**La analogía.** En una mesa hay diez maestros de obra. Entra un magnate y se sienta. El
**promedio** de la mesa dice que ahí todos son millonarios. La **mediana** sigue diciendo la
verdad. Por eso, cuando se habla de plata, casi siempre se usa mediana: **un solo caso disparado
no la mueve**.

**Cómo se dice en clase.** La definición dicha en llano *es* la frase que se usa, así que la
palabra nunca hace falta:
> *"La mitad se pasó por menos del 20 % y la otra mitad por más."*

---

### 5 · La banda — *el objeto de la sesión*

**Qué es.** Se ordenan los 19 corredores comparables por sobrecosto, se recorta el 10 % de abajo y
el 10 % de arriba, y **lo que queda en medio es la banda**.

**La analogía.** Es lo mismo que hace cualquiera al estimar cuánto tarda en llegar al trabajo.
Nadie dice *"34 minutos"*. Se dice *"entre 30 y 45, salvo que pase algo raro"*. Ese **"salvo que
pase algo raro"** es justamente el 10 % de arriba y el 10 % de abajo que se recortó.

**Por qué se hizo contando y no con un modelo.** Con 19 casos, **contar filas es más honesto que
calcular**: cualquiera en la sala puede verificar el conteo sobre la tabla. Una fórmula hay que
creerla. Si alguien insiste con el tema, la versión técnica está en *Preparación*, punto 2.

**Cómo se dice en clase:**
> *"8 de cada 10 corredores parecidos cayeron acá adentro."*

---

### 6 · Por qué 40 casos son pocos

**Qué es.** Con pocos datos, **cualquier coincidencia parece una regla**.

**La analogía.** Si se miran cuatro obras y en las tres que llovió hubo retraso, parece una ley de
la naturaleza. Con cuatrocientas obras se ve que también hubo retraso en la mitad de las que **no**
llovió.

**Y el agravante.** Cuantas más columnas se le den, más fácil encuentra coincidencias que no
significan nada — como buscarle forma a las nubes: mirando suficiente rato, siempre aparece una
cara.

**Cómo se dice en clase:**
> *"Por eso esta sesión no promete acertar la cifra. Promete decir dónde está el riesgo."*

---

### 7 · ML no es lo mismo que un LLM — *y la demo de hoy no es ML*

**La diferencia, en llano.** Un **LLM** —Antigravity, ChatGPT— aprendió de texto y contesta con
texto: sabe de todo y no sabe nada del proyecto propio. Un **modelo de ML** de los de esta sesión
aprende de una tabla y contesta con un número: solo sabe de esa tabla, y no sabe conversar.

**La aclaración que protege la sesión, y que conviene hacer sin que la pregunten.** Lo que se hace
hoy en pantalla con Antigravity **no es entrenar un modelo**: es pedirle que lea una tabla y
cuente. Entrenar es otra cosa y hoy no se hace.

> *"Lo que van a ver no es machine learning. Es un asistente leyendo un archivo y contando. Lo
> hago así a propósito, porque esto sí lo pueden repetir el lunes con sus propios documentos."*

Dicho así, la demo deja de ser una versión pobre de ML y pasa a ser **exactamente lo que el
auditorio se puede llevar**.

---

## Preparación — qué estudiar antes del viernes

> **Esto es la capa técnica, para responder si alguien pregunta hondo.** Para dictar la sesión
> alcanza con *En palabras llanas*, arriba. Si el tiempo es poco, se lee aquella y se vuelve a
> esta solo por el punto 3, que es el que trae la objeción que sí o sí va a aparecer.

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

- **Correr el CSV una vez.** Las cifras verificadas están en *Las cifras del archivo*, más abajo.
  Si la herramienta del día da algo distinto, vale el guion.
- **Leer *Hablar de las cifras sin ser de presupuestos*.** Trae la traducción de cada número de las
  láminas a lenguaje llano, y las tres salidas para las preguntas de costos que no se sepan.
- **Correr la demo una vez.** Depende de que el asistente conteste `num_otrosi`, y eso es
  probabilístico. La nota trae el plan B, pero conviene saber cómo responde antes. Los pasos
  están abajo en *Montaje previo*, y dónde entra exactamente, en *Mapa de demos*.

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
| 0:25 | **El hallazgo** — Lo que dicen los 40 · **Demo 1** | 10 |
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

> **Los 10 minutos de *El hallazgo* ya incluyen la demo**, y el reparto es ≈ 3 de lámina y ≈ 7 de
> pantalla. Es el punto donde más fácil se desborda el minutado: si la demo se estira, lo que se
> recorta es la lámina *Extra*, nunca el *Final de temporada*. El detalle está abajo, en
> *Mapa de demos*.

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

## Montaje previo — 10 minutos antes de dictar

1. **El archivo.** `historico-costos-corredores.csv` en una carpeta nueva, fuera de cualquier ruta
   de la entidad. Confirmar que abre: **40 registros, 37 `Terminado`, 3 `En ejecucion`**.
2. **La herramienta.** Una hoja de cálculo alcanza. Si se usa un asistente, **Antigravity ya está
   instalado desde la 07** y el auditorio lo vio — ver *Banco de ideas*, punto 1.
3. **Correr las tres preguntas una vez** y anotar qué contestó **la tercera**. Es la que dispara el
   giro y es la única probabilística: hay que saber de antemano si sale sola o si hay que
   empujarla.
4. **Tener *Las cifras del archivo* impresas o a mano.** Son contra las que se audita en voz alta lo
   que aparezca en pantalla, y son el plan B si la herramienta no arranca.

---

## Mapa de demos

La 09 tiene **una sola demo**, y no es decorativa: es la que sirve el giro.

| Momento | Lámina | Demo | Min | ¿Obligatoria? |
|---|---|---|---|---|
| **0:28** | **El hallazgo** | **1 · La variable que delata la trampa** | 7 | **Sí** — sin ella el giro se cuenta en vez de ocurrir |

**Y dónde no hay demo, a propósito** — porque la pregunta aparece sola al preparar:

| Momento | Lámina | Por qué no |
|---|---|---|
| 0:41 | **El giro** | La trampa **ya salió en pantalla** en la Demo 1. Acá se nombra y se explica; repetirla en vivo la desinfla |
| 1:04 | **El objeto — La Banda** | La banda se arma con las cifras ya verificadas, no en vivo. Pedirle percentiles a un asistente delante de todos es lento, frágil y obligaría a explicar cuantiles — justo lo que esta sesión no necesita |
| 1:38 | **Resolución** | Es narración con cifras ya verificadas. Si algo se recalcula en vivo y da distinto, se cae el cierre del arco |

> **Si la herramienta no arranca, la sesión se dicta completa sin demo.** Todas las cifras están
> en las láminas *El hallazgo* y *El giro*, y verificadas abajo. Lo que se pierde es que la
> trampa la encuentre la máquina; el hilo queda intacto.

---

## Demo 1 — Preguntarle al archivo (7 min)

**Va dentro de la lámina *El hallazgo*, arrancando cerca del minuto 0:28**, después de haber
mostrado las dos primeras cifras y **antes** de pasar a *Predicción de costos*.

> **Lo que se demuestra no es estadística: es cómo se le pregunta a un archivo.** Las tres
> preguntas de abajo sirven igual para un pliego, un acta o una tabla de cantidades — y eso es lo
> que hay que decir al cerrar la demo, porque es lo único que el auditorio se puede llevar al
> lunes. No hace falta entrenar nada ni saber de presupuestos.

1. **(2 min)** *"Abre este archivo y dime qué tiene: cuántos registros, qué columnas y qué
   significa cada una."*

   Lo describe entero sin que nadie abra Excel. **Es la pregunta que el auditorio se va a llevar**,
   porque funciona con cualquier documento que tengan encima. Señalar en voz alta: *"no le dije
   qué era cada columna — lo dedujo del nombre"*.

2. **(2 min)** *"De los proyectos que ya terminaron, ¿cuántos costaron más de lo presupuestado?
   Dame la lista."*

   Sale **37 de 37**. Es un **conteo**, no una estadística: el auditorio puede contar las filas en
   pantalla y verificarlo. Acá **no se dice "mediana" ni "correlación"** — la cifra se lee sola.

3. **(3 min)** *"¿Qué tienen en común los que más se pasaron?"*

   Va a nombrar **redes húmedas** y, casi siempre, **`num_otrosi`**. Y ahí entra el giro solo,
   servido por la propia herramienta:

   > *"Esa columna la tenemos porque el proyecto ya terminó. El día que hace falta la predicción,
   > está vacía."*

   **Si no la nombra:** *"¿y el número de otrosíes?"* — y sale igual.

> **Es la mejor demo de las cinco sesiones**, porque la trampa la encuentra la máquina delante de
> todos y nadie puede decir que estaba preparada.

> **Plan B:** todas las cifras están en las láminas *El hallazgo* y *El giro*, verificadas abajo.

---

## Hablar de las cifras sin ser de presupuestos

**Esta sesión no se dicta como experto en costos: se dicta como quien sabe interrogar un archivo.**
Esa es la competencia que se está enseñando y es la que el docente sí tiene. Las cifras de las
láminas son del archivo ficticio y no hay que defenderlas como si fueran propias.

Para cada número que aparece en pantalla, qué decir y qué no abrir:

| Lo que dice la lámina | Lo que se dice en voz alta | Lo que **no** hay que hacer |
|---|---|---|
| **20 %** de sobrecosto mediano | *"La mitad se pasó por menos del 20 % y la otra mitad por más."* | Explicar por qué mediana y no promedio |
| Correlación de **0,15** con la longitud | *"La longitud no sirve para adivinar el sobrecosto: hay corredores largos baratos y cortos carísimos."* | Definir qué es una correlación |
| Correlación de **0,99** con `num_otrosi` | *"Esa columna va casi clavada con el sobrecosto."* | Hablar de R², ajuste o regresión |
| **24 %** con redes húmedas contra **12 %** sin ellas | *"Los que tocaron redes se pasaron el doble que los que no."* | Justificar si la diferencia es significativa |
| **5 %** se salió de toda banda | *"Dos de los cuarenta se dispararon — y los dos tienen la causa escrita en el archivo."* | Justificar el ancho de la banda |

### Si preguntan algo de presupuestos que no se sabe

Pasa, y no es un problema: **la pregunta está fuera del tema de la sesión.** Tres salidas, en
orden de preferencia:

1. **Devolverla al auditorio.** *"¿Alguien acá trabaja en presupuestos? ¿Eso les cuadra?"* En una
   sala de la entidad casi siempre hay alguien, y su respuesta vale más que la del docente. Además
   convierte el hueco en participación.
2. **Devolverla al método.** *"No tengo esos datos y no me corresponde opinar sobre ellos. Lo que
   sí puedo mostrar es qué se le puede preguntar a un archivo así, y qué respuestas no hay que
   creerle."*
3. **Devolverla al archivo propio del que pregunta.** *"Esa la contesta mejor alguien de
   presupuestos. Lo que a mí me interesa hoy es que ustedes le puedan hacer esa pregunta a su
   propio archivo."*

**Lo que no hay que hacer nunca:** improvisar una cifra del sector, comparar con proyectos reales
del IDU, o defender una relación estadística que no se domina. La *Advertencia previa* de arriba
protege la sesión entera; esto la complementa.

---

## Clave del taller

**El taller se simplificó el 18/09 a una sola tarea, sobre el expediente del curso.** Antes pedía
formular un caso predictivo completo — entradas, salida, cuántos casos históricos — y después
pasó a pedir un documento propio. Las dos versiones fallaban por lo mismo: **supónían que cada
asistente tiene a mano un archivo del que le piden datos**, y no todos trabajan con presupuestos
ni con tablas.

Ahora **el material lo pone el curso y es el mismo para todos**. Nadie trae nada, nadie instala
nada, y el que no trabaja con costos no queda mirando al techo.

| Paso | Min | Qué se busca |
|---|---|---|
| 1 · Elegir documento | 1 | Que elijan **el que se parezca a su trabajo**. Las columnas están impresas en la hoja: no hay que abrir nada |
| 2 · Tres preguntas | 6 | Escritas en lenguaje de conversación. **Si suena a fórmula, está mal escrita** |
| 3 · La columna que llega tarde | 5 | **Es el giro.** Acá es donde hay que estar encima |
| 4 · Y si le piden una cifra | 3 | La banda, en la forma *"entre X y Y, salvo que pase algo raro"* |

### El reparto que conviene provocar

Al abrir, decirlo en voz alta para que no se amontonen todos en el mismo archivo:

> *"El que coordina, váyase a interferencias. El que modela, a elementos. El que lleva contratos,
> a las actas. Y el histórico de costos **solo si trabaja con presupuestos** — si no, ni lo mire."*

### Paso 3 — la clave, documento por documento

Es el único paso que cuesta. La ayuda es siempre la misma pregunta:

> **"¿Esa columna ya está escrita el día que usted necesita la respuesta, o aparece después?"**

Y como el material lo pone el curso, **las respuestas se pueden tener listas**:

| Documento | Columnas que llegan tarde | Por qué |
|---|---|---|
| **Elementos del Tramo 2** | `fecha_instalacion`, `estado_revision` | No existen mientras se diseña: una es de obra, la otra de revisión |
| **Interferencias** | `estado`, `fecha_deteccion`, `asignado_a` | Solo aparecen cuando **alguien ya revisó**. Antes de coordinar, el informe está vacío |
| **Actas de comité** | El compromiso cumplido o incumplido | Se sabe en el comité **siguiente**, no en el que lo creó |
| **Histórico de corredores** | `num_otrosi`, `costo_final`, `plazo_real` | Es la trampa de hoy, y ya salió en la demo |

**Si alguien no encuentra ninguna:** casi siempre sus tres preguntas son descriptivas — *"¿cuántos
hay?"*, *"¿cuáles faltan?"*— y no predictivas. Eso **también es hallazgo válido** y conviene decirlo
así: esas se contestan hoy mismo con la ventanilla de ayer, sin ningún modelo.

### Dos cosas para decir al abrir

1. **Nadie necesita instalar nada ni traer nada.** Si no se dice, medio salón se queda esperando.
   La hoja es opcional: se puede hacer en papel.
2. **No hay que abrir los archivos.** Las columnas de cada uno están impresas en la hoja, que es
   todo lo que hace falta para los cuatro pasos.

### Una pregunta que rinde, si alguien eligió interferencias

El archivo tiene **32 filas y 31 interferencias**: `INT-013` está repetido. Si alguien lo nota,
vale la pena leerlo en voz alta — es el mismo detalle que `SUM-014` en el export de elementos, y
es la lección de la 04 apareciendo sola: **contar filas no es contar cosas**.

### B.1 — La trampa del archivo (referencia, ya no es una parte del taller)

**`num_otrosi`.** Correlación 0,99 con el sobrecosto. Es inútil porque el número de otrosíes de
un contrato solo se conoce cuando el contrato terminó — y para el Tramo 2, que empieza, la
columna está vacía. En el archivo, los tres proyectos `En ejecucion` la tienen vacía justamente
por eso.

### Las cifras del archivo — para auditar la demo

> **No son la clave de ninguna parte del taller** — el taller ya no pide calcular nada.
> Sirven para contrastar en voz alta lo que aparezca en pantalla durante la Demo 1.

Verificadas sobre `historico-costos-corredores.csv` (40 registros, 37 terminados, 3 en ejecución):

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

**Cuidado en la Demo 1, pregunta 2.** Hay que pedir explícitamente *"de los proyectos que ya
terminaron"*. Si no se acota, el asistente puede meter los tres `En ejecucion` — que no tienen
costo final — y salen cifras raras o un error de división.

Si pasa, **no es un accidente: es material**. Se dice en voz alta y se sigue:

> *"Decidir qué filas entran es parte del trabajo, no un paso previo sin importancia. Y eso lo
> decide quien conoce el proyecto, no la herramienta."*

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

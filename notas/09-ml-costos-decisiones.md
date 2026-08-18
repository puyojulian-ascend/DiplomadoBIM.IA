# Guion — Sesión 09 · Machine learning para costos, planificación y decisiones

**Miércoles 16/09/2026 · 2 horas · Julián Puyo**
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
| Inspección de pavimentos con dron y visión por computador, con clasificación de deterioros | Tecnología madura y desplegada | Alta — buen enganche con la sesión 10 de Daniel |
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

Esta es la última sesión de Julián en solitario. Las siguientes son la 10 y la 11 de Daniel, y
el taller final del **25/09** con los tres docentes.

**Para el taller final:** los productos acumulados de los cinco talleres —ficha del agente,
semáforo aplicado, flujo con su cuenta de acceso, problema de diseño planteado y ficha de un
modelo predictivo— son material listo para el proyecto integrador. Vale la pena avisarlo en la
lámina final y coordinarlo con Daniel y Hugo.

Traspaso registrado en [HILO-NARRATIVO.md](../HILO-NARRATIVO.md), sección 7.

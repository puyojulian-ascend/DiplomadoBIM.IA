# Guion — Sesión 08 · Diseño generativo

**Viernes 11/09/2026 · 2 horas · Julián Puyo**
Documento del docente. No se proyecta.

---

## En una línea

Seis sumideros chocan con la ciclorruta y cuatro restricciones no caben juntas. El generativo
entrega un abanico — y la primera corrida propone eliminar dos sumideros, porque la capacidad
de captación era tan obvia que nadie la escribió.

| | |
|---|---|
| **Objeto de la sesión** | **El Abanico** |
| **La frase** | El computador genera opciones; el profesional define el problema y juzga las respuestas. |
| **El giro** | El algoritmo no se equivocó: cumplió exactamente lo que se le pidió. |
| **La rima con la 02** | Allá el número dependía de la instrucción. Aquí el diseño depende de la formulación. |

---

## Minutado

Contenido: ~107 min sin la lámina `Extra`, ~112 con ella. Holgura: 8–13 min.

| Min | Lámina | Tiempo |
|---|---|---|
| 0:00 | Portada · bienvenida | 3 |
| 0:03 | **Antes** — En el capítulo anterior | 2 |
| 0:05 | **El caso** — Seis sumideros y cuatro restricciones | 6 |
| 0:11 | Conceptos — Paramétrico, generativo, optimización | 7 |
| 0:18 | **El planteamiento** — Las tres piezas, sobre el corredor | 10 |
| 0:28 | Motor — Cómo se genera y se evalúa | 8 |
| 0:36 | **El objeto** — El Abanico | 10 |
| 0:46 | Aplicaciones en infraestructura lineal | 8 |
| 0:54 | *Extra — El panorama de herramientas* | *5 (opcional)* |
| 0:59 | **El giro** — El algoritmo no se equivocó | 9 |
| 1:08 | Segunda mitad — ¿Qué significa generar un modelo? | 7 |
| 1:15 | Realidad — Lo que funciona y lo que no | 7 |
| 1:22 | Método — Flujo de generación asistida | 6 |
| 1:28 | **Taller** | 15 |
| 1:43 | **Resolución** — Los seis sumideros, resueltos | 6 |
| 1:49 | **La frase** + Próximo capítulo | 3 |
| 1:52 | *Holgura / preguntas* | *8* |

### Sobre la lámina `Extra`

El panorama de herramientas envejece rápido y **no es el punto de la sesión**. Si el tiempo
aprieta, sáltela sin culpa: lo que sirve es saber formular el problema, no la lista de
productos. Si alguien pregunta por herramientas, está en la ficha de bolsillo.

---

## Beats de la historia

1. **El nudo** (*El caso*). Cuatro restricciones que no caben. Dejar claro que hasta hoy esto
   se resolvía en una reunión con dos opciones dibujadas a mano. No es un problema inventado.
2. **La herramienta** (*Planteamiento* → *Motor* → *Abanico*). La maquinaria funciona y el
   abanico es visualmente convincente. Aquí se ilusionan.
3. **El giro** (*El giro*). "El óptimo fue eliminar dos sumideros." Pausa. Dejar que caiga.
   Después: "el algoritmo no se equivocó".
4. **La bajada a tierra** (*Segunda mitad* → *Realidad*). Qué es real hoy y qué es promesa de
   feria. Esta parte protege la credibilidad del curso.
5. **El cierre** (*Resolución*). Siete alternativas, y un comité que por primera vez sabe qué
   está cediendo.

---

## Preguntas para el auditorio

### En *El caso*

> **"¿Cómo se resuelve hoy algo así en sus proyectos?"**

Esta sí suele tener respuesta, porque todos han estado en esa reunión. Dejarla correr un minuto
— es la mejor entrada posible a la sesión. Escuchar y devolver: "o sea que hoy comparamos dos
opciones. Hoy vamos a ver qué pasa cuando se pueden comparar doscientas."

### En *El planteamiento*, para que las tres piezas se sientan reales

> **"¿Cuál de las cuatro restricciones del corredor sería la más difícil de escribir en números?"**

*La respuesta útil:* los árboles. Un guayacán con acta de manejo silvicultural es una
restricción dura y perfectamente escribible; "no afectar el paisaje" no lo es. Sirve para
distinguir restricción de deseo.

### Antes de *El giro* — la pregunta clave

> **"Ya tenemos las tres piezas escritas y el motor corriendo. ¿Qué podría salir mal?"**

Es la cuarta vez en el curso. **A estas alturas alguien va a decir "falta algo".** Si lo dicen,
celebrarlo abiertamente: "eso es exactamente lo que quiero que se lleven del diplomado — la
sospecha." Y darles el giro igual.

*Si nadie contesta:* "Nada. Todo está bien. Ese es el problema." Y pasar la lámina.

### Después del giro, para consolidar

> **"En sus propios proyectos: ¿cuál es la restricción tan obvia que nadie la escribe nunca?"**

Es la pregunta del taller, adelantada. Si sale una buena en voz alta, usarla como ejemplo
durante el taller.

---

## Demostración en vivo (~8 min, dentro del bloque del giro)

**No hace falta software de diseño generativo.** Montarlo en vivo es frágil y caro, y el punto
de la sesión no es la herramienta: es la formulación. Esta demo se hace con un modelo de
lenguaje y funciona mejor.

1. **(2 min)** Pedirle al auditorio un problema de diseño sencillo y real. Escribir en vivo las
   tres piezas: variables, restricciones, función objetivo.
2. **(3 min)** Pasárselas a un modelo con esta instrucción, que conviene tener preparada:

   > *"Estas son las variables, las restricciones y la función objetivo de un problema de
   > diseño. Encuentra la solución que optimiza el objetivo cumpliendo todas las restricciones
   > escritas. Después, dime si existe alguna forma de cumplir literalmente todo lo escrito y
   > aun así producir un resultado inaceptable en obra."*

3. **(3 min)** Leer la segunda parte de la respuesta con el auditorio. Casi siempre encuentra
   al menos un hueco, y suele ser uno que nadie había visto.

> **Por qué funciona:** el modelo hace de abogado del diablo sobre la formulación, que es
> justamente la habilidad que la sesión quiere instalar. Y se puede repetir el lunes con
> cualquier problema propio, sin comprar nada.

> **Plan B:** las láminas *El giro* y *Resolución* ya traen el caso completo del corredor.

---

## Claves del taller

### A.2 — Cuántos objetivos

**El error más común es escribir un solo objetivo.** Con un objetivo hay una respuesta única, y
casi siempre extrema — que es exactamente el caso de los dos sumideros eliminados. Si alguien
escribe un solo objetivo, preguntarle qué está dispuesto a sacrificar para lograrlo. Ahí
aparece el segundo objetivo solo.

### A.3 — La restricción tácita

Es el corazón del taller. Respuestas típicas que suelen aparecer, útiles como ejemplos:

- "Que se pueda construir por fases sin cerrar la vía completa."
- "Que quepa la maquinaria."
- "Que se pueda mantener después: que alguien pueda llegar a limpiarlo."
- "Que no haya que negociar predios nuevos."

**Si alguien dice que no encontró ninguna:** casi siempre significa que el problema está
formulado en términos muy generales. Pedirle que lo aterrice a un tramo concreto y volver a
preguntar.

### B.2 — Detectar el modelo que parece correcto

Respuestas válidas: validación automática de reglas (no de geometría), verificación de
cantidades contra un cálculo independiente, revisión por muestreo con criterio, contraste
contra el modelo de la disciplina vecina.

---

## Honestidad sobre el estado del arte

Esta es la sesión con más riesgo de sobrevender. Cuidado con tres cosas:

1. **El diseño generativo para infraestructura lineal es menos maduro que para edificación.**
   Las herramientas de cabida e implantación llevan años; las de trazado de corredores son más
   recientes. Decirlo.
2. **La entidad probablemente no tiene estas herramientas, y puede que no las compre.** El
   encuadre correcto: *"esto no es para comprar el lunes. Es para saber formular el problema —
   y esa habilidad sirve igual aunque la herramienta no llegue nunca, porque es la misma que
   se necesita para escribir un buen requerimiento a una consultoría."*
3. **No prometer que la IA genera modelos BIM solos.** La lámina *Realidad* existe para eso.

---

## Cifras y afirmaciones externas — verificar antes de dictar

| Afirmación | Respaldo | Confianza |
|---|---|---|
| Existen plataformas de diseño generativo específicas para infraestructura lineal, que exploran alternativas de trazado sobre datos geoespaciales | [Infraspace](https://infraspace.tech/) · [AEC Magazine](https://aecmag.com/civil-engineering/infraspace-reimagining-civil-infrastructure-design/) | Alta — producto real, pero **presentarlo como categoría emergente, no como estándar del sector** |
| Autodesk Forma proviene de Spacemaker; TestFit resuelve cabida | Documentación de los proveedores | Alta |
| "Las fases de diseño se acortaron entre 20% y 40%" | Prensa sectorial secundaria | **Baja — no citar.** La lámina no trae ninguna cifra, y así conviene dejarla |

**Regla de la sesión:** ninguna lámina trae porcentajes de mejora, a propósito. Si alguien
pregunta cuánto se ahorra, la respuesta honesta es que depende completamente del problema, y que
el ahorro real observado no está en el tiempo de diseño sino en **la calidad de la decisión**:
saber qué se cede.

---

## Materiales a repartir

> **Antes de cerrar el taller, decirlo en voz alta:** la hoja se llena en el navegador y se
> guarda sola, pero **solo en ese equipo**. Quien quiera conservarla tiene que descargarla en
> **PDF** o en **.md** con los botones de arriba. El .md sirve además para volver a dársela a
> una IA más adelante. Los cinco talleres alimentan el proyecto integrador de la sesión 12.

| Cuándo | Qué |
|---|---|
| Al empezar el taller (1:28) | `recursos/talleres/taller-08.md` |
| Al cerrar (1:49) | `recursos/fichas/ficha-08-abanico.md` |

---

## Traspaso a la sesión 09 (Julián, 16/09)

- **Quedó claro:** el diseño generativo no entrega una respuesta, entrega un abanico y obliga a
  elegir — y a escribir el criterio que antes era tácito.
- **Quedó abierto:** todas las cifras del abanico son estimaciones. El IDU ya ejecutó 40
  corredores parecidos. ¿Qué dicen esos 40 sobre lo que de verdad va a pasar?

Registrado en [HILO-NARRATIVO.md](../HILO-NARRATIVO.md), sección 7.

> **Preparar para la 09:** el archivo `recursos/caso/historico-costos-corredores.csv` es el
> insumo central de la próxima sesión. Conviene anunciarlo al cerrar: *"el miércoles traigan
> ganas de mirar datos feos."*

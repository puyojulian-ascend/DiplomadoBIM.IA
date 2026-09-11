# Taller — Sesión 07 · Automatización BIM y tecnologías de integración

**Duración:** 15 minutos · **Trabajo:** individual o en parejas

> El producto de hoy es una **ficha de automatización**: una tarea suya, descrita con la
> precisión suficiente para que alguien más —o una IA— la pueda construir sin preguntarle nada.

---

## Parte A — La tarea (3 min)

Elija **una tarea real** de su semana. Que sea de las cinco familias: revisar, extraer, cruzar,
reportar o avisar. **No elija "decidir".**

```
La tarea, en una frase:



```

| Pregunta | Su respuesta |
|---|---|
| ¿Cada cuánto se hace? | |
| ¿Cuánto tiempo le toma cada vez? | |
| ¿Quién se acuerda de hacerla? | |
| ¿Qué pasa el día que nadie la hace? | |

### A.1 · La prueba de las cuatro preguntas

Marque solo las que puede responder que **sí**. Si falta alguna, esa es su tarea de esta semana
—no la automatización.

- [ ] **Se repite** — al menos una vez por semana, o una vez por radicación.
- [ ] **Tiene una regla** — cabe en una frase con "si… entonces…".
- [ ] **El resultado se puede verificar** — alguien mira la salida y sabe si está bien.
- [ ] **Los datos ya existen** — en una tabla, un modelo o un documento, no en la cabeza de alguien.

---

## Parte B — La ficha de automatización (7 min)

### B.1 · Las cinco casillas

| Casilla | Pregunta | Su respuesta |
|---|---|---|
| **Disparador** | ¿Qué la inicia: un evento o un horario? | |
| **Alcance** | ¿Sobre qué elementos corre — y sobre cuáles **no** debe correr? | |
| **Regla** | Escríbala completa: "si… entonces…" | |
| **Salida** | ¿Un reporte, una marca en el modelo, un correo? | |
| **Validación** | ¿Quién mira antes de que se aplique? | |

### B.2 · La regla, escrita en serio

La casilla de arriba es la que casi siempre queda a medias. Escríbala otra vez, con las
excepciones incluidas:

```
Si

                                            entonces


Excepto cuando

```

> Si le costó escribir la excepción, esa excepción es exactamente la que su automatización va a
> ejecutar mal 63 veces.

### B.3 · De dónde sale la regla

Una regla que no está en ningún documento es una regla que vive en una persona.

```
¿En qué documento está escrita esta regla?
(anexo, acta, procedimiento, norma, correo, "en ningún lado")



¿De qué fecha es ese documento?  ______________

¿Algo posterior la modificó?  ______________
```

---

## Parte C — La tecnología (5 min)

### C.1 · La matriz de decisión

Marque **una**. La primera que aplique, decide.

- [ ] **No-code** — mueve archivos, correos o avisos entre plataformas; no toca el modelo.
- [ ] **Dynamo** — lee o modifica elementos dentro de Revit.
- [ ] **Python** — cruza tablas, calcula, limpia datos o arma reportes fuera del modelo.
- [ ] **Plugin o aplicación** — la va a usar todo el equipo, todos los días, durante años.
- [ ] **Agente con herramientas** — los pasos dependen de lo que se encuentre; no se pueden dibujar antes.

```
Por qué esa y no la anterior:



```

### C.2 · Los tres niveles

¿Hasta dónde llega esta automatización?

- [ ] **Asistencia** — me propone qué hacer; yo lo hago.
- [ ] **Automatización** — la ejecuta completa, pero yo la disparo y yo la valido.
- [ ] **Autonomía** — corre sola con cada radicación y me avisa.

Si marcó **autonomía**, las dos casillas siguientes no son opcionales:

- [ ] Pide **confirmación** antes de modificar cualquier cosa en el modelo.
- [ ] Deja **historial** de todo lo que hizo, con fecha y elemento.

### C.3 · La pregunta del mantenimiento

```
Si la regla cambia el mes entrante, ¿quién actualiza la automatización?



Si esa persona se va de la entidad, ¿quién queda?



```

---

## Para llevar

- Una ficha de automatización completa: disparador, alcance, regla, salida y validación.
- La regla escrita con su excepción, y el documento donde está —o la constancia de que no está.
- La tecnología elegida, con el porqué, y el nivel de autonomía con sus dos candados.

> Esta ficha es insumo del proyecto integrador de la **sesión 12**. Y la excepción que le costó
> escribir en B.2 es, casi siempre, la parte del proceso que solo usted conoce.

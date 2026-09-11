# Taller — Sesión 07 · Automatización BIM y tecnologías de integración

**Duración:** 15 minutos · **Trabajo:** individual

> El miércoles usted diseñó **un** flujo. Hoy no vamos a diseñar nada: vamos a **inventariar su
> semana completa y a decidir qué se automatiza primero**. El producto de hoy es una decisión
> priorizada, no un dibujo.

> **Cómo se llena:** las casillas naranjas de las tablas son de una línea; las cajas punteadas
> son para escribir libremente. Todo se guarda solo y se puede descargar al final.

---

## Parte A — El inventario de su semana (5 min)

Para cada familia, escriba la tarea que **más veces repite** y calcule las horas que le dedica en
una semana típica. Si una familia no aplica a su rol, escriba una raya.

| # | Familia | Su tarea más repetida | Horas/semana |
|---|---|---|---|
| 1 | **Revisar** — verificar que algo cumpla una regla | | |
| 2 | **Extraer** — sacar tablas, exportar, limpiar | | |
| 3 | **Cruzar** — comparar dos listas | | |
| 4 | **Reportar** — convertir el hallazgo en entregable | | |
| 5 | **Avisar** — escribir a quien corresponde y hacer seguimiento | | |

Ahora sume la columna de horas y calcule qué parte de una jornada de 40 representa.

| Cálculo | Su respuesta |
|---|---|
| **Total de horas por semana** | |
| **Sobre una jornada de 40, eso es el…** | |

> Mire ese porcentaje y quédese un momento con él antes de seguir. Es la parte de su semana que
> **no** es criterio profesional: es mover y verificar información.

---

## Parte B — El triaje (5 min)

Pase sus cinco tareas por las cuatro preguntas. Escriba **sí** o **no** en cada casilla, y cuente
los **sí** en la última columna.

| # | ¿Se repite? | ¿La regla está **escrita**? | ¿El resultado se verifica? | ¿Los datos existen? | Total de *sí* |
|---|---|---|---|---|---|
| 1 | | | | | |
| 2 | | | | | |
| 3 | | | | | |
| 4 | | | | | |
| 5 | | | | | |

### B.1 · Las dos que importan

| Tarea | Número |
|---|---|
| La que sacó **más *sí*** — la candidata | |
| La que se lleva **más horas** | |

- [ ] **Son la misma.** Empiece por ahí: es la decisión fácil.
- [ ] **Son distintas.** *Ese es el hallazgo del ejercicio.* La que más duele no es la que está
      lista, y elegir la que está lista igual es la respuesta correcta — la otra no necesita una
      herramienta, necesita que alguien escriba la regla primero.

### B.2 · La que falló la pregunta 2

Casi siempre hay una tarea que se repite, se verifica y tiene datos — pero cuya regla **no está
escrita en ninguna parte**: vive en la experiencia de quien la hace.

| Dato | Su respuesta |
|---|---|
| **Número de esa tarea** | |

**¿Quién es hoy la única persona que sabe cómo se hace?** Escríbalo abajo:

```


```

> Esa tarea **no** es candidata a automatizarse todavía, y no es un fracaso: es el trabajo previo.
> Escribir esa regla vale más que cualquier herramienta de esta clase.

---

## Parte C — La ficha de la candidata (5 min)

Trabaje **solo sobre la tarea que eligió en B.1**.

### C.1 · Procedencia de la regla

Lo que distingue una automatización que dura de una que hay que rehacer cada seis meses.

| Pregunta | Su respuesta |
|---|---|
| ¿En qué documento está escrita la regla? | |
| ¿De qué fecha es ese documento? | |
| ¿Algo posterior lo modificó — un acta, un comité, un correo? | |
| ¿Cómo se enteraría usted si mañana cambia? | |

> La última fila es la que nadie responde. En el caso de hoy, un acta cambió el requisito el
> 18 de junio y la automatización siguió aplicando el anterior durante seis comités.

### C.2 · Hasta dónde llega

- [ ] **Asistencia** — me propone qué hacer; yo lo hago.
- [ ] **Automatización** — la ejecuta completa, pero yo la disparo y yo la valido.
- [ ] **Autonomía** — corre sola con cada radicación y me avisa.

Si marcó **autonomía**, estas dos no son opcionales:

- [ ] Pide **confirmación** antes de modificar cualquier cosa.
- [ ] Deja **historial** de lo que hizo, con fecha y elemento.

### C.3 · Con qué se hace

Marque **una**. La primera que aplique, decide.

- [ ] **No-code** — mueve archivos, correos o avisos entre plataformas; no toca el modelo.
- [ ] **Dynamo** — lee o modifica elementos dentro de Revit.
- [ ] **Python** — cruza tablas, calcula, limpia datos o arma reportes fuera del modelo.
- [ ] **Plugin o aplicación** — la va a usar todo el equipo, todos los días, durante años.
- [ ] **Agente con herramientas** — los pasos dependen de lo que se encuentre.

**¿Por qué esa y no la anterior de la lista?** Escríbalo abajo:

```


```

### C.4 · La firma

| Dato | Su respuesta |
|---|---|
| **Quién responde por esta automatización cuando la regla cambie** | |

**Si esa persona se va de la entidad, ¿quién queda?** Escríbalo abajo:

```


```

> Una automatización sin nombre no es un ahorro: es una deuda que todavía no venció.

---

## Para llevar

- El **inventario de su semana**, con el porcentaje que hoy no es criterio profesional.
- Las cinco tareas **triadas**, y la candidata elegida con su razón.
- La tarea cuya regla nadie ha escrito — identificada, con el nombre de quien la sabe.
- Una ficha con **procedencia de la regla, nivel de autonomía, tecnología y responsable**.

> Los tres primeros productos son insumo directo del proyecto integrador de la **sesión 12**.
> Y la tarea de B.2 —la que se repite pero cuya regla nadie escribió— es exactamente el material
> de la **sesión 10**, donde las reglas de validación dejan de ser un supuesto y se vuelven el
> tema de la clase.

# Taller — Sesión 10 · IA para coordinación, calidad y captura en obra

**Duración:** 15 minutos · **Trabajo:** individual
Se puede hacer en papel o en esta hoja.

> **Un agente de revisión de calidad, en papel.** Tres reglas escritas de manera que una máquina
> las pueda aplicar, la ficha del agente que las aplica, y la pregunta que casi nadie hace: qué
> prueba que un problema quedó resuelto.

> **Cómo se llena:** las casillas de las tablas son de una línea; las cajas punteadas son para
> escribir libremente. Todo se guarda solo y se puede descargar al final.

---

## 0 · La tarea (1 min)

Elija sobre qué va a trabajar:

- [ ] **La tarea de la parte B.2 del taller 07** — la que se repite y se verifica, pero cuya regla
      nadie ha escrito.
- [ ] **El informe de interferencias del Tramo 2** — si no tiene la del taller 07, o si prefiere
      trabajar sobre el caso.

| Dato | Su respuesta |
|---|---|
| **La tarea, en una frase** | |
| **Quién la hace hoy** | |

---

## A · Tres reglas (6 min)

Una regla está escrita cuando llena **las cinco casillas**. Así se ve una del catálogo del
Tramo 2, como molde:

| Casilla | Regla C-02 del catálogo |
|---|---|
| **Fuente** | Anexo Técnico 7, numeral 4.4.2 |
| **Condición** | Si `codigo_clasificacion` está vacío → incumple |
| **Alcance** | Todos los elementos, sin excepción |
| **Severidad** | Alta: la entrega se devuelve |
| **Dueño** | Gestor de Información |

Ahora las suyas. **Si no encuentra la fuente, la regla todavía no existe**: escriba en esa
casilla dónde *debería* estar escrita.

| Casilla | Regla 1 | Regla 2 | Regla 3 |
|---|---|---|---|
| **Fuente** — ¿de dónde sale? | | | |
| **Condición** — si…, entonces… | | | |
| **Alcance** — ¿a qué aplica? | | | |
| **Severidad** — ¿qué pasa si falla? | | | |
| **Dueño** — ¿quién la revisa cuando cambie? | | | |

**La prueba dura.** Marque lo que le pase a alguna de sus tres:

- [ ] Usa una palabra que hay que definir: *completo*, *correcto*, *adecuado*, *vigente*.
- [ ] No dice qué hacer con un dato que dice `N/D`, `PENDIENTE` o está en blanco.
- [ ] El dueño es un cargo que nadie ocupa hoy, o un "todos".
- [ ] La fuente es "la experiencia" o "siempre se ha hecho así".

> Cada casilla marcada es una regla que una máquina va a aplicar **distinto** a como la aplica
> usted. Corríjala antes de seguir.

---

## B · La ficha del agente (4 min)

Las cinco casillas de la sesión 02, para el agente que aplica sus tres reglas.

| Casilla | Su respuesta |
|---|---|
| **Propósito** — en una frase que empieza por un verbo | |
| **Conocimiento** — qué archivos o documentos necesita a la mano | |
| **Herramientas** — qué puede hacer: leer, contar, cruzar, redactar | |
| **Límites** — qué **no** hace sin permiso humano | |
| **Usuario** — quién lo opera y quién recibe el resultado | |

¿Por cuál puerta entra al modelo o a los datos?

- [ ] **Solo lee.** Reporta, pero no cambia nada.
- [ ] **Lee y escribe.** Si marcó esta, escriba abajo quién firmó que pudiera escribir.

```


```

---

## C · La evidencia del cierre (4 min)

Piense en el día en que su agente encuentra un incumplimiento y alguien lo corrige. **¿Qué prueba
que quedó resuelto?**

- [ ] Una celda que cambia de estado (`Abierta` → `Cerrada`).
- [ ] Un documento nuevo: un acta, una respuesta, un plano corregido.
- [ ] Una nueva corrida de la regla sobre la versión vigente.
- [ ] Una foto, un video o una nube de puntos de la obra.
- [ ] Una visita de alguien que firma.

> Si marcó solo la primera, su cierre es una palabra en una celda — el caso de `INT-019`.

Escriba cómo se cierra de verdad: **qué evidencia, contra qué versión y quién la firma.**

```



```

---

## Para después de clase

Pase sus tres reglas al formato del
[catálogo del Tramo 2](doc.html#d=caso/catalogo-reglas-calidad) y pruébelas sobre una copia de
un archivo real **que se pueda sacar de la entidad** —el Semáforo de la sesión 04 sigue puesto—.
Si la máquina las aplica distinto a como las aplicaría usted, la regla todavía no está escrita.

---

## Para llevar

- **Tres reglas** con sus cinco casillas, y las palabras que hubo que definir.
- **La ficha del agente** que las aplica, con su puerta y su firma.
- **La evidencia del cierre**: lo que separa una incidencia *cerrada* de una *verificada*.

> **La IA no revisa el modelo: aplica el catálogo.** Y el catálogo es lo que alguien se tomó el
> trabajo de escribir — con fuente, con alcance y con dueño.

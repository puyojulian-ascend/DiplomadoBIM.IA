# Taller — Sesión 06 · Consulta conversacional, no-code, MCP y loops

**Duración:** 15 minutos · **Trabajo:** individual o en parejas

---

## Parte A — Diseñe un flujo (7 min)

Elija **una tarea real** de su proceso que hoy alguien hace a mano y que se repite.

```
La tarea:



¿Cada cuánto se hace hoy?  ______________
¿Quién se acuerda de hacerla?  ______________
```

### A.1 · Las cuatro piezas

| Pieza | Pregunta | Su respuesta |
|---|---|---|
| **Disparador** | ¿Qué inicia el flujo? ¿Un evento o un horario? | |
| **Procesamiento IA** | ¿Qué transforma, extrae o compara? | |
| **Salida** | ¿A qué plataforma llega el resultado? | |
| **Validación** | ¿En qué punto interviene una persona? | |

### A.2 · Dibújelo

```
   ┌──────────────┐     ┌──────────────┐     ┌──────────────┐
   │              │ ──▶ │              │ ──▶ │              │
   │  disparador  │     │  IA procesa  │     │    salida    │
   └──────────────┘     └──────────────┘     └──────────────┘
                                │
                                ▼
                        ┌──────────────┐
                        │  validación  │
                        └──────────────┘
```

Escriba dentro de cada caja lo que corresponde a su caso. Si no cabe en cuatro cajas, la tarea
es más de una tarea: pártala.

---

## Parte B — Las dos decisiones (8 min)

### B.1 · ¿No-code o MCP?

La pregunta no es cuál es mejor. Es **quién decide el siguiente paso**.

- [ ] **No-code** — los pasos son siempre los mismos y yo los conozco de antemano.
- [ ] **MCP / agente** — los pasos dependen de lo que se encuentre; el agente tiene que elegir.

```
Por qué:



```

### B.2 · La decisión de plataforma es una decisión de semáforo

```
¿De qué color es la información que va a tocar este flujo?   🟢  🟡  🔴

Si es ámbar o rojo, ¿la plataforma se puede autohospedar dentro de la entidad?
   [ ] Sí, y por eso la elijo
   [ ] No — entonces esta plataforma no sirve para este caso
```

### B.3 · La pregunta que casi nadie hace

Un agente conectado **no tiene permisos propios: hereda los de quien lo conectó**.

```
¿Con qué usuario se va a conectar este flujo?



¿A qué tiene acceso ese usuario, además de lo que necesita este flujo?



```

### B.4 · El peor caso

Escriba, sin suavizarlo, **lo peor que podría hacer este agente** con esos permisos si alguien
le pide lo que no debe:

```


```

Ahora escriba **una** medida que lo impediría:

```


```

> **La medida más común y más barata:** una cuenta de servicio de solo lectura, con alcance
> limitado a un proyecto. No es la única, pero es la que casi siempre falta.

---

## Para llevar

- El diagrama de una automatización real, con sus cuatro piezas.
- La decisión de plataforma justificada por el color del dato.
- El usuario de conexión definido, y el peor caso escrito con su medida.

Estos productos son el insumo de la **sesión 08**, donde el agente deja de leer lo que ya
existe y se le pide algo que no está escrito en ningún documento.

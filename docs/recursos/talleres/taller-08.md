# Taller — Sesión 08 · Diseño generativo

**Duración:** 15 minutos · **Trabajo:** individual o en parejas

---

## Parte A — Formule un problema (8 min)

Elija un problema de diseño **real** de su contexto. Sirve cualquiera que hoy se resuelva en
una reunión comparando dos opciones dibujadas a mano.

```
El problema:



```

### A.1 · Las tres piezas

| Pieza | Qué es | Su respuesta |
|---|---|---|
| **Variables** | Lo que el sistema **puede cambiar**. Con su rango. | |
| **Restricciones** | Lo que **no puede violar**, pase lo que pase. | |
| **Función objetivo** | Lo que busca **mejorar**. Minimizar o maximizar qué. | |

> Si no puede escribir las tres, todavía no tiene un problema resoluble: tiene una intuición.
> Eso no es un fracaso del ejercicio — es el hallazgo del ejercicio.

### A.2 · ¿Cuántos objetivos escribió?

- [ ] **Uno.** Entonces habrá una única respuesta óptima, y probablemente sea extrema.
- [ ] **Dos o más.** Entonces habrá un abanico, y alguien va a tener que elegir un punto.

```
Si son dos o más, ¿cuáles compiten entre sí?



```

### A.3 · La pregunta del giro

Vuelva a leer sus restricciones y pregúntese, sin piedad:

> **¿Qué restricción es tan obvia que no la escribió?**

```
La restricción que di por hecha:



¿Qué pasaría si el algoritmo la ignora y todo lo demás lo cumple?



```

> **Recuerde:** una restricción que no se escribe, no existe. El optimizador va a encontrar
> todos los huecos de la formulación — no por malicia, sino porque eso es exactamente su trabajo.

---

## Parte B — Arquitectura de generación (7 min)

Esboce un flujo para **generar o actualizar** un modelo a partir de información estructurada.

```
  ┌──────────────┐   ┌──────────────┐   ┌──────────────┐   ┌──────────────┐
  │              │──▶│              │──▶│              │──▶│              │
  │    datos     │   │   geometría  │   │  parámetros  │   │  validación  │
  │ estructurados│   │   + objetos  │   │              │   │  automática  │
  └──────────────┘   └──────────────┘   └──────────────┘   └──────┬───────┘
         ▲                                                        │
         │                                                        ▼
         │                                                ┌──────────────┐
         └────────────────  ajustes  ────────────────────│   revisión   │
                                                          │  profesional │
                                                          └──────────────┘
```

### B.1 · Complete su versión

| Etapa | En su caso |
|---|---|
| **De dónde salen los datos** | |
| **Qué se genera automáticamente** | |
| **Qué validación automática se puede correr** | |
| **Quién hace la revisión profesional** | |
| **Qué se hace cuando la revisión devuelve** | |

### B.2 · El control que no puede faltar

```
¿Cómo detectaría un modelo que se ve bien y es técnicamente inválido?



```

> Geometría impecable con información equivocada es el resultado más peligroso, porque pasa
> todas las revisiones visuales.

---

## Para llevar

- Un problema de diseño planteado con sus tres piezas, y la restricción tácita identificada.
- Una arquitectura de generación con su punto de validación humana.

Estos productos son el insumo de la **sesión 09**, donde aparece la pregunta incómoda: todas
las cifras de costo y plazo que alimentan estas decisiones son estimaciones. ¿Qué tan buenas
son?

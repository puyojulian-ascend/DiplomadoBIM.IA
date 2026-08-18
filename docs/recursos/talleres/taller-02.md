# Taller — Sesión 02 · Comunicación efectiva y Agentes

**Duración:** 15 minutos · **Trabajo:** individual o en parejas
**Material:** este documento y `recursos/caso/elementos-tramo2.csv`

---

## Parte A — De ambiguo a estructurado (7 min)

### A.1 · La solicitud vaga

Escriba una solicitud real de su trabajo, tal como suele llegar. Sin arreglarla.

> *Ejemplos de cómo llegan: "necesito un resumen del proyecto", "mándame el estado de las
> observaciones", "revisa si el modelo está bien".*

```
Solicitud original:



```

### A.2 · Reescríbala con R·O·I·R·F

| Ingrediente | Su versión |
|---|---|
| **R**ol — quién debe ser el modelo | |
| **O**bjetivo — qué lograr, en una frase | |
| **I**nformación — qué datos o documentos adjunta | |
| **R**estricciones — qué evitar, qué norma, qué alcance | |
| **F**ormato — cómo quiere la salida | |

### A.3 · El criterio de aceptación

Antes de enviar el pedido, escriba **cómo va a saber si la respuesta sirve**. Si no lo puede
escribir, el pedido todavía no está listo.

```
Esta respuesta me sirve si:



```

> **Verificación rápida.** Vuelva a leer su instrucción y pregúntese: *¿podría el modelo
> inventar algo y aun así cumplir todo lo que escribí?* Si la respuesta es sí, falta una
> restricción.

---

## Parte B — La Ficha del Agente (8 min)

Diseñe **un** agente para un proceso propio. No tiene que ser ambicioso: tiene que ser
completo. Si alguna casilla queda vacía, todavía no es un agente.

### Ficha

**Nombre del agente:** ______________________________________________

| Casilla | Qué escribir | Su respuesta |
|---|---|---|
| **Propósito** | Qué problema resuelve, en una frase. Empiece por un verbo. | |
| **Conocimiento** | Qué información necesita tener a la mano para trabajar. | |
| **Herramientas** | Qué puede hacer: consultar, calcular, escribir, notificar. | |
| **Límites** | Qué **no** hace sin permiso humano. | |
| **Usuario** | Quién lo opera y quién recibe el resultado. | |

### Prueba de los límites

Escriba **una acción concreta** que su agente podría intentar y que **debe** requerir
aprobación humana:

```


```

---

## Ejercicio opcional — El conteo (si sobra tiempo)

Abra `recursos/caso/elementos-tramo2.csv` y responda:

> **¿Cuántos sumideros del subtramo K0+000 – K0+800 no tienen ficha de mantenimiento?**

No busque el número. Busque **el criterio**. Antes de contar, decida y escriba:

- [ ] ¿Un campo con `N/D` cuenta como "sin ficha"?
- [ ] ¿Y uno con `PENDIENTE`?
- [ ] ¿Qué hace con los registros repetidos?
- [ ] ¿Cómo identifica todos los sumideros, si la categoría no está escrita siempre igual?

```
Mi criterio:



Mi respuesta:  ______
```

> No hay un solo número correcto. Hay números **defendibles** y números **huérfanos**. La
> diferencia es el criterio escrito al lado.

---

## Para llevar

- La instrucción reescrita con R·O·I·R·F, con su criterio de aceptación.
- La Ficha del Agente completa, con las cinco casillas llenas.

Estos dos productos son el insumo de la **sesión 04**, donde el agente que acaba de describir
se va a encontrar con un problema: **no tiene datos**.

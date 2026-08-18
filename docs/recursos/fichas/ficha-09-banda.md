# Ficha 09 — La Banda

> Ficha de bolsillo del Diplomado BIM + IA · Sesión 09 · Para imprimir a doble cara.

---

## FRENTE

### El objeto de la sesión 09

# La Banda

> ## Una predicción sin banda es una opinión con decimales.

| | Qué dice | Sirve para decidir |
|---|---|---|
| **Cifra puntual** | "Costará $106.200 millones" | **No.** No dice cuánto se puede equivocar |
| **Cifra con banda** | "Entre $101.700 y $110.200, en 8 de cada 10 casos comparables. Y en 1 de cada 20, fuera de toda banda" | **Sí.** Se puede provisionar, negociar y vigilar |

**El ancho de la banda no es una debilidad del modelo: es la información más honesta que
produce.**

---

### ML no es lo mismo que un LLM

| | Qué hace | Cuándo se usa |
|---|---|---|
| **Machine learning clásico** | Datos tabulares → un número o una etiqueta | Predecir costo, duración, riesgo |
| **LLM / IA generativa** | Texto → texto | Redactar, resumir, explicar |

Y a veces no hace falta IA de ningún tipo: **si una regla o una fórmula resuelve el problema,
se usa la fórmula.**

---

### Las tres tareas

| Tarea | Predice | Ejemplo |
|---|---|---|
| **Regresión** | Un número | ¿Cuánto costará? ¿Cuántos días? |
| **Clasificación** | Una etiqueta | ¿Riesgo alto o bajo? |
| **Anomalías** | Lo atípico | ¿Qué partida se comporta raro? |

---

## REVERSO

### La trampa que arruina más modelos

> ## Un modelo que usa información del futuro no predice: recuerda.

**Fuga de información** — entrenar con variables que en el momento real de la predicción
todavía no existen. El modelo queda espectacular en el histórico e inservible en la práctica.

**El caso del curso.** El número de otrosíes de un contrato predice el sobrecosto con
correlación **0,99**. ¿Cuándo se sabe cuántos otrosíes tuvo? **Cuando el contrato terminó.**

---

### La única pregunta que hay que hacerle a cada variable

> **¿Esta variable existe el día en que necesito la predicción,
> o solo se conoce al final?**

Hágasela una por una, sin excepción. Casi siempre hay al menos una que hay que tachar.

---

### Los venenos de un modelo

| Datos | Razonamiento |
|---|---|
| **Sesgo** — si el histórico está mal, el modelo hereda el error | **Sobreajuste** — memoriza el pasado, falla en lo nuevo |
| **Cantidad** — pocos datos producen patrones falsos | **Correlación no es causa** — suben juntas sin que una cause la otra |
| **Fuga** — variables que no existen al predecir | **Atípicos** — un hallazgo arqueológico no lo predice ningún modelo |

**Generalización:** qué tan bien funciona con datos **nuevos**. Es la única métrica que importa
de verdad. Nunca se mide sobre los datos con los que aprendió.

---

### Lista de chequeo antes de creerle a una predicción

- [ ] ¿Con cuántos datos aprendió?
- [ ] ¿Se parecen esos casos al mío?
- [ ] ¿Me dio una banda o una cifra sola?
- [ ] ¿Qué variables pesaron más — y **estaban disponibles el día de la predicción**?
- [ ] ¿Alguien puede explicar por qué dio ese número?
- [ ] ¿Se probó con datos que nunca vio?

> El modelo **recomienda**, no decide. Las predicciones se **supervisan**, no se obedecen.

---

### Lo que de verdad entrega un modelo

No es la cifra. Es **saber dónde mirar**.

En los 40 corredores del caso, el riesgo tenía nombre: **redes húmedas** (24% de sobrecosto
mediano contra 12%). Y la longitud del corredor —lo primero que todo el mundo mira— no predecía
casi nada.

**La acción correcta no fue cambiar el presupuesto. Fue pedir mejores estudios previos
justo donde los proyectos anteriores se rompieron.**

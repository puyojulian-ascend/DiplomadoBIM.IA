# Taller — Sesión 09 · Machine learning para costos, planificación y decisiones

**Duración:** 15 minutos · **Trabajo:** individual o en parejas
**Material:** `recursos/caso/historico-costos-corredores.csv`

---

## Parte A — La ficha de un modelo (7 min)

Formule un caso predictivo **real** de su trabajo. Algo que hoy se estime "por experiencia".

```
Lo que quiero predecir:



¿Quién tomaría una decisión distinta si tuviera este número?



```

### A.1 · Las tres piezas

| Pieza | Pregunta | Su respuesta |
|---|---|---|
| **Salida** | ¿Qué predice, y de qué tipo? | |
| **Tipo de tarea** | ¿Regresión (un número), clasificación (una etiqueta) o anomalías? | |
| **Datos históricos** | ¿Cuántos casos pasados hay? ¿Dónde están? | |

### A.2 · Las entradas

Liste las variables que usaría. Deje la última columna en blanco por ahora.

| # | Variable de entrada | ¿Existe el día de la predicción? |
|---|---|---|
| 1 | | |
| 2 | | |
| 3 | | |
| 4 | | |
| 5 | | |

---

## Parte B — Cace la fuga (5 min)

Ahora vuelva a la tabla de arriba y complete la última columna. Para cada variable, una sola
pregunta:

> **¿Esta variable existe el día en que necesito la predicción — o solo se conoce al final?**

Tache las que no existan todavía.

```
Variables que tuve que tachar:



```

- [ ] No tuve que tachar ninguna. *(Revise otra vez: casi siempre hay una.)*
- [ ] Taché una o más. **Ese es el hallazgo del ejercicio.**

> **Fuga de información:** entrenar con datos que en el momento real de la predicción todavía no
> existen. El modelo queda espectacular en el histórico y es inservible en la práctica.
> **Un modelo que usa información del futuro no predice: recuerda.**

### B.1 · La trampa del archivo del curso

En `historico-costos-corredores.csv` hay una columna que predice el sobrecosto casi a la
perfección y es completamente inútil para un proyecto que empieza.

```
¿Cuál es?  ______________________

¿Por qué es inútil?



```

---

## Parte C — Si sobra tiempo: mire los datos (3 min)

Abra `historico-costos-corredores.csv`. Use `estado = Terminado` únicamente.

```
1. ¿Cuántos corredores terminaron por encima del presupuesto?   ______ de ______

2. Sobrecosto mediano:  ______ %

3. Compare la mediana de sobrecosto:
      con redes húmedas:  ______ %
      sin redes húmedas:  ______ %

4. ¿Qué le sorprende más de la relación entre longitud y sobrecosto?



```

> Antes de mirar: escriba cuál cree que es la variable que más influye en el sobrecosto.
> Después compare. La distancia entre las dos respuestas es la razón por la que este ejercicio
> existe.

---

## Para llevar

- La ficha de un modelo predictivo con sus entradas **verificadas contra la fuga**.
- La costumbre de pedir una **banda**, no una cifra.

> **Una predicción sin banda es una opinión con decimales.**
> El ancho de la banda no es una debilidad del modelo: es la información más honesta que produce.

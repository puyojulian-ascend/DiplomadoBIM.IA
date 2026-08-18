# Ficha 08 — El Abanico

> Ficha de bolsillo del Diplomado BIM + IA · Sesión 08 · Para imprimir a doble cara.

---

## FRENTE

### El objeto de la sesión 08

# El Abanico

**El diseño generativo no entrega una respuesta: entrega un abanico y obliga a elegir.
Y al obligar a elegir, obliga a escribir lo que hasta ahora era criterio tácito.**

---

### Las tres piezas de un problema resoluble

| Pieza | Qué es |
|---|---|
| **Variables** | Lo que el sistema **puede cambiar**, con su rango |
| **Restricciones** | Lo que **no puede violar**, pase lo que pase |
| **Función objetivo** | Lo que busca **mejorar**: minimizar o maximizar qué |

> Si no se pueden escribir las tres, todavía no hay un problema resoluble: hay una intuición.
> **Escribirlas bien es el 90% del trabajo.** El algoritmo es solo el motor.

---

### Tres palabras que se confunden

| | Quién propone | Quién evalúa |
|---|---|---|
| **Paramétrico** | La persona cambia un valor | El modelo se ajusta |
| **Generativo** | El sistema propone muchas | La persona filtra |
| **Optimización** | El sistema propone | El algoritmo, guiado por objetivos |

**Generar no es optimizar.** Generar produce variedad; optimizar persigue una meta.

---

### El Frente de Pareto

El conjunto de soluciones donde **no se puede mejorar un objetivo sin empeorar otro**.
Cada punto es un trueque legítimo, no un error.

> El valor del abanico no es la alternativa ganadora.
> Es poder mostrar **qué se cede y cuánto cuesta cada opción**.

---

## REVERSO

### La regla que cuesta obra

> ## Una restricción que no se escribe, no existe.

El optimizador va a encontrar **todos** los huecos de la formulación. No por malicia: encontrar
huecos es literalmente su trabajo.

**El caso del corredor.** Se optimizó "minimizar costo". El óptimo fue eliminar dos sumideros:
costo mínimo, todas las restricciones escritas cumplidas. Y el subtramo se inunda con la primera
lluvia fuerte, porque la capacidad de captación era **tan obvia** que nadie la escribió.

**El algoritmo no se equivocó. Cumplió exactamente lo que se le pidió.**

---

### La pregunta que hay que hacerse siempre

> **¿Qué restricción es tan obvia que no la escribí?**

Hágasela antes de correr nada. Es la única forma de encontrarla antes que el algoritmo.

---

### Dónde aplica en infraestructura lineal

| Ámbito | Qué se explora |
|---|---|
| **Trazado** | Alineamiento horizontal y vertical a la vez: corte y lleno, seguridad, afectación predial |
| **Redes** | Ubicación de captación, pendientes, cruces, longitud total de colector |
| **Espacio público** | Mobiliario, sombra, superficie permeable, recorridos |
| **Obra** | Fases y manejo de tránsito: secuencia que minimiza el impacto en el tráfico |

En un edificio se optimiza un volumen dentro de un lote. En un corredor se optimiza **una
línea a lo largo de kilómetros**, con restricciones que cambian en cada abscisa.

---

### Generar un modelo BIM: qué es real hoy

| ✅ Funciona con supervisión | ⚠️ Todavía frágil |
|---|---|
| Crear elementos desde tablas y datos estructurados | Interpretar planos complejos sin errores |
| Poblar parámetros según reglas | Nubes de puntos a modelo listo para usar |
| Generar variantes paramétricas | Coherencia técnica en modelos grandes |
| Modelado repetitivo basado en patrones | |

> **El riesgo mayor no es el modelo que falla: es el que parece correcto y es técnicamente
> inválido.** Geometría impecable, información equivocada — y pasa todas las revisiones visuales.

---

### La frase

> **El computador genera opciones; el profesional define el problema y juzga las respuestas.**
> La creatividad no se automatiza: se amplifica.

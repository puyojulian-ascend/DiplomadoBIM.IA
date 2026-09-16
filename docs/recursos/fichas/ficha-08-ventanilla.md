# Ficha 08 — La Ventanilla

> Ficha de bolsillo del Diplomado BIM + IA · Sesión 08 · Para imprimir a doble cara.

---

## FRENTE

### El objeto de la sesión 08

# La Ventanilla

**Al modelo no se entra: se le pide por una ventanilla. Se hace la solicitud, alguien busca en
la ficha y devuelve lo que ahí dice. Ni más, ni distinto. Y la ventanilla tiene tres puertas:
cuál se abre es una decisión con dueño.**

---

### Las tres capas de un modelo

| Capa | Qué es | ¿Llega la IA? |
|---|---|---|
| **Objetos** | No hay líneas: hay sumideros, pozos, tramos de colector | Sí |
| **Parámetros** | Los campos de la ficha: código, abscisa, cota, estado | **Muy bien** — son tabla |
| **Geometría** | Dónde está cada cosa y en relación con qué | A medias, y hay que calcularla |

> La IA llega hoy muy bien a la **segunda capa**. Los parámetros se leen, se filtran y se cruzan
> igual que un CSV.

---

### Tres caminos hasta el modelo

| | Qué llega | Se rompe cuando… |
|---|---|---|
| **Exportar** | Una **copia**, con lo que había ese día | El modelo se actualiza y nadie vuelve a exportar |
| **API** | Lo que se programó, cuando se programó | Sale la versión siguiente, o se va quien lo escribió |
| **MCP** | La **fuente viva**, con los permisos de quien conectó | Se conecta con la cuenta equivocada |

**Es fotocopia contra llave otra vez** — ahora sobre el modelo. Con una restricción nueva: el
modelo pesa. Filtrar antes de preguntar, no exportar y después filtrar.

---

## REVERSO

### Qué se le puede preguntar de verdad

| ✅ Contesta bien | ⚠️ Contesta mal, o no contesta |
|---|---|
| *"¿Qué sumideros no tienen ficha de mantenimiento?"* | *"¿Este sumidero estorba la ciclorruta?"* → es geometría |
| *"¿Cuántos quedaron sin código de clasificación?"* | *"¿Por qué se dejó este pozo acá?"* → es **intención** |
| *"Dame abscisa y cota de tapa de estos seis."* | *"¿Está bien diseñado?"* → es criterio profesional |

> **El modelo entrega lo que alguien escribió en un campo.** Si el campo está mal, la respuesta
> sale mal — y con la misma seguridad.

---

### La regla que cuesta obra

> ## La máquina no distingue "falta el dato" de "todavía no se ha decidido".

**El caso del corredor.** Se le dio permiso de escritura y se le pidió completar la ficha de
mantenimiento de todo el drenaje del Tramo 2. Llenó las **16** que no la tenían —10 en blanco, 4
con `N/D` y 2 con `PENDIENTE`— en cuatro segundos, impecables.

**Tres** de esas diez estaban vacías a propósito: los sumideros de K0+400 – K0+700, que esperan
la decisión de reubicación. Ahora dicen algo que nadie decidió.

Y de paso aplanó tres estados que alguien había codificado distinto —en blanco, `N/D` y
`PENDIENTE`— en uno solo: "le falta".

**La máquina hizo exactamente lo que se le pidió.** Para ella, "sin dato" y "sin decidir" se ven
igual: una celda vacía. Y esa diferencia no está escrita en ningún campo — vive en la cabeza de
quien dejó el campo así.

---

### Por qué la ventanilla tiene tres puertas

Autodesk publica **tres versiones** del servidor de Revit, con alcances distintos:

| Versión | Qué permite | Cuándo se abre |
|---|---|---|
| **Solo lectura** | Consultar parámetros y cantidades | Por defecto, y para casi todo |
| **Lectura y escritura** | Además, modificar parámetros | Con una regla escrita y confirmación humana |
| **Acceso anticipado** | Más herramientas, menos rodaje | En pruebas, nunca sobre el modelo bueno |

El fabricante no decidió por nadie: **dejó la decisión a la vista.** Por eso elegir cuál se
conecta no es un detalle técnico — es gobierno, y tiene dueño.

> **Lo que lee puede ser autónomo. Lo que escribe, no** — hasta que una persona lo confirme.

Y la ventanilla tiene una ventaja que no es obvia: **deja rastro**. Se sabe qué se pidió, qué se
devolvió y de dónde salió. Un agente que entra a la bodega no deja ese registro.

---

### La pregunta que hay que hacerse siempre

> **¿Cómo sabría una máquina que este campo no hay que llenarlo?**

Si la respuesta es *"no lo sabría"*, ahí está el límite de la escritura automática.

---

### Lo que viene — tema de investigación, no de compra

| | Qué hace | Quién decide |
|---|---|---|
| **Paramétrico** | Se cambia un valor y el modelo se ajusta | El diseñador |
| **Generativo** | El sistema **propone** muchas opciones | El diseñador filtra |
| **Optimización** | El sistema **busca la mejor** según un objetivo | El algoritmo |

**Generar no es optimizar:** generar produce variedad, optimizar persigue una meta.

Cuando los objetivos compiten no hay una ganadora: hay un **abanico** de alternativas que no son
peores que ninguna otra en todo, y alguien tiene que elegir un punto — diciendo en voz alta qué
cede. Hoy es más maduro en edificación que en infraestructura lineal.

Lo que sirve desde ya, sin comprar nada: **¿cuáles son mis variables, mis restricciones y mi
objetivo?**

---

### La frase

> **Conectar la IA al modelo no la vuelve inteligente sobre el proyecto: la vuelve rápida
> leyendo lo que ya está escrito.**
> Lo que no está escrito sigue siendo trabajo de alguien.

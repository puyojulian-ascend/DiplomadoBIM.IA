# Caso — Corredor Av. Guayacanes, Tramo 2

> **Caso ficticio.** El corredor, los contratos, las personas y las cifras de este expediente
> son inventados. Están construidos para ser verosímiles y para que los ejercicios del
> diplomado tengan material real que manipular, pero **no corresponden a ningún proyecto del
> IDU**. Cualquier parecido con un proyecto en curso es de estructura, no de contenido.

---

## 1. Por qué existe este caso

El diplomado usa **un solo proyecto** a lo largo de las cinco sesiones de Julián. No se cambia
de ejemplo entre sesiones: cada una vuelve al mismo corredor y le hace una pregunta distinta.

Eso permite que los asistentes acumulen contexto en vez de reiniciarlo cada clase, y que el
taller de una sesión use lo que salió del taller de la anterior.

---

## 2. El proyecto

| | |
|---|---|
| **Nombre** | Corredor Av. Guayacanes — Tramo 2 |
| **Longitud** | 2,4 km |
| **Ubicación** | Corredor urbano de Bogotá, entre la Calle 68 Sur y la Avenida Los Cerezos (ficticias) |
| **Tipo de intervención** | Construcción y rehabilitación de corredor vial con componente de espacio público |
| **Presupuesto estimado** | $86.400 millones COP |
| **Plazo contractual** | 22 meses |
| **Estado a la fecha del curso** | Diseños fase III entregados por la consultoría, en revisión de interventoría |

### Alcance

- Calzadas: dos carriles por sentido, pavimento flexible, con tramo en rígido sobre paso de red matriz.
- Ciclorruta bidireccional segregada a lo largo de todo el tramo.
- Andenes y espacio público a ambos costados, con dos plazoletas.
- Redes húmedas: renovación de alcantarillado pluvial y sanitario; reposición parcial de acueducto.
- Redes secas: canalización, alumbrado público LED, semaforización en cuatro intersecciones.
- Un puente peatonal con rampas de accesibilidad.
- Arborización y jardinería del separador y las zonas verdes.

### Cifras del inventario

| Elemento | Cantidad |
|---|---|
| Sumideros | 148 |
| Pozos de inspección | 61 |
| Luminarias | 96 |
| Señales verticales | 214 |
| Árboles (nuevos y trasplantados) | 312 |
| Intersecciones semaforizadas | 4 |
| Puentes peatonales | 1 |

---

## 3. Los actores

| Actor | Rol en el caso |
|---|---|
| **IDU** | Entidad contratante. Recibe, revisa y conserva la información del proyecto. Es quien va a tener que responder preguntas sobre este corredor durante los próximos 30 años. |
| **Consorcio Vía Norte** | Consultoría de estudios y diseños. Entrega el modelo BIM federado y el paquete documental. |
| **Interventoría Andes** | Revisa entregables, levanta observaciones, aprueba o devuelve. |
| **Constructor** *(fase siguiente)* | Aún no contratado. Va a recibir la información que hoy se está produciendo. |

### Personas del caso

Aparecen en las actas y en los ejercicios. Son ficticias.

- **Marcela Ríos** — profesional de la Dirección Técnica del IDU. Es quien hace la pregunta que abre la sesión 02.
- **Andrés Peña** — coordinador BIM del Consorcio Vía Norte.
- **Liliana Cortés** — directora de la Interventoría Andes.

---

## 4. Qué hay en el expediente

| Archivo | Qué contiene | Se usa en |
|---|---|---|
| `caso-corredor-guayacanes.md` | Este brief. | Todas |
| `elementos-tramo2.csv` | Export del modelo federado, **completo para el subtramo K0+000 – K0+800**: 63 registros entre sumideros, pozos, luminarias, señalización y arborización. Tiene vacíos, duplicados y códigos inconsistentes **a propósito**. | 02, 04, 06 |
| `pliego-anexo-tecnico-fragmento.md` | Fragmento del anexo técnico BIM del contrato, en lenguaje de pliego. Contiene requisitos extraíbles. | 04 |
| `actas-comite-fragmento.md` | Dos actas de comité de seguimiento. Entre ellas hay una contradicción. | 04, 06 |
| `historico-costos-corredores.csv` | 40 corredores anteriores con presupuesto y ejecución real. | 09 |

**Los defectos de los datos son el material didáctico.** El CSV no está sucio por descuido:
está sucio porque así llegan los exports reales, y porque la mitad de lo que hay que enseñar
es qué le pasa a una IA cuando recibe datos así.

---

## 5. El hilo, sesión por sesión

### Sesión 02 — La pregunta que salió mal

Marcela Ríos necesita saber **cuántos sumideros del Tramo 2 no tienen ficha de mantenimiento
asociada**. Le pregunta a una IA sin darle ningún dato del proyecto. Recibe una respuesta
detallada, bien redactada, con una cifra exacta — y completamente inventada.

*Lo que se resuelve:* cómo se formula la instrucción, cómo se detecta la invención, y qué
convierte a un asistente en un agente.

### Sesión 04 — El agente no tiene con qué

La instrucción ya está bien formulada, pero el agente no tiene datos. El anexo técnico son 180
páginas en PDF; el export del modelo llega sin el contexto que tenía adentro; y alguien del
equipo, con toda la buena intención, pegó el anexo completo en una herramienta pública.

*Lo que se resuelve:* extraer información de documentos y modelos, y decidir qué puede salir
de la entidad y qué no.

### Sesión 06 — Los datos siguen en carpetas

La información ya está ordenada y clasificada, pero vive en archivos. Cada vez que alguien
actualiza el modelo, la copia que usa la IA queda vieja.

*Lo que se resuelve:* conectar la IA a la fuente viva — consulta conversacional, automatización
sin código, y el puerto estándar entre la IA y las herramientas.

### Sesión 08 — De consultar a proponer

Interventoría observa que seis sumideros quedan en conflicto con el trazado de la ciclorruta.
Reubicarlos toca la pendiente del pluvial, el arbolado y el ancho del andén. Hay cuatro
restricciones que no se pueden satisfacer todas a la vez.

*Lo que se resuelve:* formular un problema de diseño, generar alternativas y elegir entre
soluciones que no son comparables en una sola dimensión.

### Sesión 09 — De proponer a anticipar

El Tramo 2 se parece a 40 corredores que el IDU ya ejecutó. El presupuesto dice $86.400
millones y 22 meses.

*Lo que se resuelve:* qué dicen los datos históricos sobre lo que va a pasar de verdad, y con
cuánta confianza se puede decir.

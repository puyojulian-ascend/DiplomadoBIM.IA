# Caso — Corredor Av. Guayacanes, Tramo 2

> **Caso ficticio.** El corredor, los contratos, las personas y las cifras de este expediente
> son inventados. Están construidos para ser verosímiles y para que los ejercicios del
> diplomado tengan material real que manipular, pero **no corresponden a ningún proyecto del
> IDU**. Cualquier parecido con un proyecto en curso es de estructura, no de contenido.

---

## 1. Por qué existe este caso

El diplomado usa **un solo proyecto** a lo largo de cinco sesiones (02, 04, 06, 08 y 09). No se cambia
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
| Sumideros | 74 |
| Pozos de inspección | 38 |
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
| `elementos-tramo2.csv` | Export del modelo federado para el subtramo K0+000 – K0+800, 63 registros. **Completo en la disciplina de drenaje** (sumideros y pozos de inspección) y con una **muestra** de luminarias, señalización y arborización — que es como suelen llegar los exports en la práctica. Tiene vacíos, duplicados y códigos inconsistentes **a propósito**. | 02, 04, 06 |
| `pliego-anexo-tecnico-fragmento.md` | Fragmento del anexo técnico BIM del contrato, en lenguaje de pliego. Capítulo 4 (requisitos de entrega) y capítulo 5 (coordinación e interferencias). Contiene requisitos extraíbles. | 04 |
| `actas-comite-fragmento.md` | Tres actas de comité de seguimiento (14, 15 y 16). Entre ellas y el anexo hay una contradicción. | 04, 06 |
| `interferencias-tramo2.csv` | Export del informe de coordinación del modelo federado. 31 incidencias, con defectos deliberados. | 04, 06, 08 |
| `historico-costos-corredores.csv` | 40 corredores anteriores con presupuesto y ejecución real. | 09 |

**Los defectos de los datos son el material didáctico.** El CSV no está sucio por descuido:
está sucio porque así llegan los exports reales, y porque la mitad de lo que hay que enseñar
es qué le pasa a una IA cuando recibe datos así.

---

## 5. Defectos plantados — no corregir

> Esta sección existe para que nadie "limpie" el expediente en un commit de mantenimiento. Cada
> defecto de abajo sostiene una lección concreta. Si se corrigen, la sesión que los usa se queda
> sin material.

### En `elementos-tramo2.csv`

| Defecto | Dónde | Para qué |
|---|---|---|
| Ficha de mantenimiento ausente en tres codificaciones (vacío, `N/D`, `PENDIENTE`) | 15 filas | Obliga a fijar criterio antes de contar |
| `SUM-014` repetido | 2 filas | El conteo cambia según se desduplique o no |
| `categoria` en tres formas (`Sumidero`, `SUMIDERO`, `sumidero ` con espacio) | 4 filas | Rompe cualquier agrupación sin normalizar |
| Fechas en tres formatos | 3 filas | Mismo defecto, otra columna |
| `SUM-011` sin código de clasificación | 1 fila | Materializa la observación 2.3 del Acta 16 |
| `SUM-013` con dimensión en centímetros | 1 fila | Unidad inconsistente |

### En `interferencias-tramo2.csv`

La propiedad que **no se puede romper**: filtrando drenaje × ciclorruta, severidad alta, estado
abierto, entre K0+400 y K0+700 y sobre la versión vigente del modelo, tienen que salir
**exactamente seis** incidencias. La lámina *El caso* de la sesión 08 afirma ese número.

| Defecto | Dónde | Para qué |
|---|---|---|
| `INT-013` repetido, fila idéntica | 2 filas | Sin desduplicar, el conteo da 7 en vez de 6 |
| `version_modelo` mezcla `MOD-FED-v3` y `MOD-FED-v4` | 8 filas en v3 | `INT-014` es una interferencia abierta de severidad alta **sobre un modelo viejo**: sin filtrar por versión vigente el conteo da 7. Es el incumplimiento del numeral 5.6 |
| `severidad` en cuatro formas (`Alta`, `ALTA`, `Critica`) | 5 filas | Un filtro por igualdad exacta devuelve 5, no 6. Es el incumplimiento del numeral 4.4.3 |
| `SUM-099` no existe en `elementos-tramo2.csv` | 1 fila | Referencia huérfana: el export perdió la relación |
| `holgura_mm` vacía en dos incidencias de severidad alta | `INT-021`, `INT-024` | Falta el dato que justifica la severidad (sesión 08) |
| `estado` vacío, `Por revisar`, `Cerrado ` con espacio final | 3 filas | Los filtros fallan en silencio |

**La escalera es 8 → 7 → 6.** Ocho filas crudas, siete tras desduplicar, seis tras filtrar por
la versión vigente. Es el mismo patrón de conteos discrepantes de la sesión 02, ahora en
coordinación.

> A diferencia de `elementos-tramo2.csv`, la columna `observacion` de este archivo **no delata**
> los defectos. Ahí las observaciones dicen cosas como *"Registro repetido en el export"*, lo que
> regala el ejercicio; acá no.

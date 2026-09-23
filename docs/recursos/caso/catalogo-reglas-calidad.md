# Catálogo de reglas de calidad — Tramo 2

> **Documento ficticio.** Redactado para el Diplomado BIM + IA como molde de catálogo de reglas.
> Se aplica sobre el expediente del caso y no corresponde a ningún proceso del IDU.

**Proyecto:** Corredor Av. Guayacanes — Tramo 2 · Contrato IDU-CO-2025-0418 *(caso ficticio del curso)*
**Alcance:** `elementos-tramo2.csv` e `interferencias-tramo2.csv`, subtramo K0+000 – K0+800.
**Versión:** 1.0 · 23/09/2026
**Dueño del catálogo:** Gestor de Información de la entidad (Anexo Técnico 7, numeral 4.6.3).

> Cada regla dice de dónde sale, qué revisa, a qué aplica, qué tan grave es y qué se hace si
> falla. **Ninguna regla autoriza a corregir un dato**: todo incumplimiento se reporta, no se
> arregla.

---

## Reglas sobre el inventario de elementos

### C-01 · Ficha de mantenimiento en la red de drenaje

- **Fuente:** Anexo Técnico 7, numeral 4.3.1 · Acta N.º 14, numeral 4.2.
- **Aplica a:** elementos cuya `categoria` sea sumidero o pozo de inspección, sin distinguir
  mayúsculas ni espacios.
- **Condición:** `ficha_mantenimiento` debe tener un código de ficha.
- **Incumple:** la celda vacía, `N/D` o `PENDIENTE`. **Se reportan en tres grupos separados**,
  porque no significan lo mismo: vacío puede ser un olvido o una decisión pendiente; `N/D` y
  `PENDIENTE` los escribió alguien a propósito.
- **Severidad:** alta — la entrega del hito se devuelve.

### C-02 · Código de clasificación

- **Fuente:** Anexo Técnico 7, numeral 4.4.2.
- **Aplica a:** todos los elementos.
- **Condición:** `codigo_clasificacion` no puede estar vacío.
- **Severidad:** alta.

### C-03 · Un identificador, un registro

- **Fuente:** Anexo Técnico 7, numeral 4.4.1.
- **Aplica a:** `id_elemento` en el inventario e `id_interferencia` en el informe.
- **Condición:** ningún identificador aparece más de una vez.
- **Incumple:** todo identificador repetido. Se reporta cuántas veces aparece y **se cuenta una
  sola vez** en cualquier otra regla.
- **Severidad:** media.

### C-04 · Unidades

- **Fuente:** Anexo Técnico 7, numeral 4.2.2.
- **Aplica a:** `dimension_mm` de sumideros y pozos de inspección.
- **Condición:** el valor está en milímetros. Un sumidero o un pozo por debajo de 300 mm indica
  que el dato se registró en otra unidad.
- **Severidad:** media.

### C-05 · Vocabulario controlado

- **Fuente:** Anexo Técnico 7, numeral 4.4.3.
- **Aplica a:** `categoria` en el inventario; `severidad` y `estado` en el informe.
- **Condición:** cada concepto se escribe de una sola manera.
  - `severidad`: `Baja`, `Media` o `Alta`.
  - `estado`: `Abierta`, `En revision` o `Cerrada`.
- **Incumple:** toda variante — mayúsculas, espacios, valores fuera de la lista o celdas vacías.
- **Cómo se trata para priorizar:** `ALTA` y `Critica` se leen como `Alta`; `Cerrado ` se lee
  como `Cerrada`. Un estado vacío o fuera de la lista **no se interpreta**: va a la lista aparte.
- **Severidad:** media.

---

## Reglas sobre el informe de interferencias

### C-06 · Toda interferencia apunta a un elemento que existe

- **Fuente:** Anexo Técnico 7, numeral 5.3.2.
- **Aplica a:** `id_elemento_a` cuando `disciplina_a` es `Drenaje` — la única disciplina que el
  inventario trae completa.
- **Condición:** el identificador existe en `elementos-tramo2.csv`.
- **Severidad:** alta — una interferencia sin elemento no se puede asignar ni cerrar.

### C-07 · Holgura medida

- **Fuente:** Anexo Técnico 7, numerales 5.2 y 5.3.2.
- **Aplica a:** todas las interferencias.
- **Condición:** `holgura_mm` tiene un valor. Sin holgura no hay con qué sostener la severidad.
- **Severidad:** media.

---

## Regla de prioridad

Se aplica **después** de las reglas C-01 a C-07, sobre el informe sin repetidos.

1. **Bloquean el hito** las interferencias de severidad alta que están abiertas — numeral 5.5.3.
   Van primero.
2. **Plazo:** diez días hábiles desde la asignación para severidad alta y veinte para media —
   numeral 5.5.4. El informe no trae fecha de asignación: se usa `fecha_deteccion` y **se declara
   que se usó**. Si el plazo empata, va primero la holgura más negativa.
3. **Recurrente:** se marca la interferencia cuyo elemento además incumple otra regla del
   catálogo. Se redacta **una sola observación** por elemento, con todos sus incumplimientos.
4. **Lista aparte:** todo registro que incumple C-05 en el estado, C-06 o C-07 no se ordena con
   los demás. Se lista por separado, con lo que le falta para poder evaluarlo.

---

## Cómo se reporta

**Por cada regla:** cuántos registros la incumplen, cuáles son y qué columna se consultó.

**Para la lista priorizada:** una tabla con `id_interferencia`, elemento, abscisa, severidad
normalizada, holgura, estado, versión del modelo, la marca de recurrente y la regla que la ubica
en esa posición.

**Si algo no se puede verificar** con los dos archivos, se declara así de forma explícita. No se
estima, no se supone y no se completa ningún dato.

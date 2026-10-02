---
name: revisar-entregable
description: Revisa un entregable (export del modelo, informe de interferencias, listado del CDE
  u otro archivo de la carpeta de entregables) contra las reglas publicadas en la carpeta de
  reglas — anexo técnico, actas de comité y catálogo de reglas de calidad. Úsala cuando pidan
  revisar, verificar, validar o aplicar una regla a un archivo, o preguntar qué impide aprobar un
  hito.
---

# Revisión de entregables contra las reglas publicadas

Las rutas de la **carpeta de reglas** y de la **carpeta de entregables** están en `AGENTS.md`.
Las dos son de solo lectura.

## 1. Lee las reglas vigentes

- Lee **todos** los documentos de la carpeta de reglas antes de revisar nada: el anexo técnico,
  las actas de comité y el catálogo de reglas de calidad.
- **Un acta posterior modifica el anexo.** Antes de aplicar un numeral, revisa si alguna acta lo
  cambió. Si lo cambió, aplica la versión modificada y cita las dos fuentes (por ejemplo: *Anexo
  Técnico 7, numeral 4.3.1, modificado por el Acta 14, numeral 4.1*).
- Anota la fecha del documento de reglas más reciente que leíste.

## 2. Ubica lo que se revisa

- Es el archivo que te indiquen, normalmente en la carpeta de entregables. **No es una regla**: es
  el insumo. Nunca tomes una regla de él.
- Di de qué estado del CDE lo leíste. Lo que está en *Compartido* sirve para revisar, no es
  oficial. Si el archivo trae versiones o estados propios, revisa solo lo vigente o publicado — lo
  más reciente no es lo vigente.
- Si la revisión exige cruzar dos archivos (por ejemplo, interferencias contra elementos), lee los
  dos. Si falta uno, dilo en vez de suponer.

## 3. Aplica las reglas

- **Antes de contar, declara el criterio:** qué valores cuentan como vacío (celda en blanco, `N/D`,
  `PENDIENTE`), cómo tratas mayúsculas y espacios, y qué haces con los registros repetidos. Si el
  catálogo ya dice cómo tratarlos, aplica lo que dice el catálogo.
- Para contar o cruzar tablas, usa código y muéstralo. No cuentes de memoria.
- Si el catálogo pide reportar en grupos separados, repórtalos separados.
- Lo que no se puede evaluar (falta un dato, una referencia no existe, un estado no es válido) no
  se ordena con lo demás: va a una lista aparte, con lo que le falta.

## 4. Reporta

Escribe el informe en `informes\AAAA-MM-DD_<archivo-revisado>.md` con este orden:

1. **Encabezado:** archivo revisado, su estado en el CDE y la fecha de la regla más reciente usada.
2. **Resumen en una línea:** cuántos hallazgos y cuántos son de severidad alta.
3. **Criterio aplicado.**
4. **Tabla de hallazgos:** regla · fuente (documento y numeral) · qué se encontró (filas o `id`) ·
   severidad · recomendación.
5. **Lo que no se pudo evaluar**, y por qué.
6. **Decisión pendiente:** las opciones (aprobar, devolver, pedir aclaración, escalar), con lo que
   implica cada una. **No elijas tú.**

Si te piden algo para lo que no hay regla en la carpeta de reglas, el informe tiene una sola
línea: *"No hay una regla escrita para esto en las reglas publicadas."*

# Requisitos de modelado

**Proyecto:** Modelo de demostración · Curso BIM + IA
**Alcance:** todos los elementos modelados. Se verifica consultando el modelo, no una exportación.
**Versión:** 2.0 · 16/09/2026

---

## R1 · Identificación

Todo elemento debe tener el parámetro **`Marca`** asignado, sin excepción.

La nomenclatura es `<categoría>-<nivel>-<consecutivo>`, con el consecutivo de dos dígitos y
reiniciado en cada nivel. Ejemplo: `MUR-N1-07`.

## R2 · Coherencia entre el tipo y la geometría

El espesor declarado en el nombre del **`Tipo`** debe corresponder con el espesor real del
elemento.

La comprobación se hace dividiendo **`Volumen` entre `Área`**. Se admite una tolerancia de
**±0,01 m** por el redondeo.

## R3 · Identificación completa

Ningún elemento debe quedar identificado a medias.

Si tiene **`Marca`** asignada, debe declarar también **`Comentarios`**. Un elemento con `Marca` y
sin `Comentarios` no está listo para la siguiente entrega.

## R4 · Catálogo de tipos

Solo se admiten tipos del catálogo del proyecto.

No se admiten tipos duplicados de trabajo — los que quedan con nombres terminados en `Copia`,
`copia 1`, `2`, `_old` o equivalentes. Deben reportarse aunque estén correctamente modelados.

## R5 · Continuidad de fachada

Ningún elemento de fachada debe quedar interrumpido por un elemento divisorio que lo atraviese.

---

## Cómo se reporta el incumplimiento

Por cada requisito incumplido se indica: el requisito, cuántos elementos lo incumplen, cuáles son
y **de dónde salió la comprobación** — qué parámetro del modelo se consultó.

Si un requisito **no se puede verificar** con la información disponible, se declara así de forma
explícita. No se estima, no se supone y no se responde igual.

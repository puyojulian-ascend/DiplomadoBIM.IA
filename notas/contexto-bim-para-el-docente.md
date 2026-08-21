# Contexto BIM para el docente — posicionamiento y glosario mínimo

> Documento interno, compartido por las cinco sesiones de Julián (02, 04, 06, 08, 09). No se
> proyecta. Sirve para pararse frente a un público de arquitectos e ingenieros sin sonar ni
> distante del tema ni fingiendo un dominio que no corresponde.

---

## El posicionamiento — lo que más importa, antes que cualquier término

Julián viene del lado del software y la IA, no del diseño ni de la construcción. El público
—arquitectos, ingenieros, profesionales del IDU— domina BIM mejor que él, y la entidad ya tiene
mucha información construida. Eso **no es una debilidad que haya que esconder**: es la premisa
correcta del curso. Frente a un público que sí sabe de su propio campo, fingir ese dominio se
nota más rápido y cuesta más credibilidad que decir con seguridad dónde está el límite.

La frase de salida, para cualquier pregunta que se escape del terreno de la IA:

> *"Vengo del lado de la IA, no del diseño — lo que les puedo mostrar es qué hace la IA con la
> información que ustedes ya producen. Si hay un matiz técnico de BIM que se me escapa, ese es
> justo el que ustedes van a completar."*

No hace falta usarla palabra por palabra. Hace falta tenerla lista para no quedarse en blanco,
y usarla con la misma seguridad con la que se explica R·O·I·R·F.

---

## Glosario mínimo — solo lo que las cinco sesiones ya usan en su propio texto

No es un curso de BIM. Es lo necesario para entender con precisión lo que las láminas ya dicen,
y no quedar descolocado si alguien pregunta por un término que el propio deck usa.

| Término | Qué es, en corto | Dónde aparece |
|---|---|---|
| **Elemento / parámetro** | Un objeto del modelo (un muro, un sumidero) no es un dibujo: es un registro con propiedades — igual que una fila de base de datos, con columnas. | 02, 04 |
| **Modelo federado** | Varios modelos de distintas disciplinas (vial, redes, arquitectura) combinados en una sola vista de coordinación, sin fundirse en un solo archivo — cada disciplina sigue siendo dueña del suyo. | 02, 04, 06 |
| **Código de clasificación** | Un identificador estandarizado (tipo Uniclass/OmniClass) para que elementos del mismo tipo se llamen igual en todo el proyecto. Cuando está mal escrito (mayúsculas, espacios), un filtro exacto pierde registros — es la base del ejercicio de conteo de la 02. | 02 |
| **IFC** | El formato abierto para intercambiar modelos entre software distinto (Revit, Civil 3D, ArchiCAD) — "openBIM". IFC 4.3 agregó soporte explícito para infraestructura lineal (vial, redes, puentes). | 04, 06 |
| **LOD** (*Level of Development*) | Qué tan confiable y detallada es la información de un elemento en una fase dada del proyecto. Se cita por número (LOD 300, LOD 350): a mayor número, mayor exigencia de detalle y confiabilidad. | 04, y aparece de pasada en 02 |
| **CDE** (*Common Data Environment*) | El repositorio compartido del proyecto — el lugar donde vive la fuente viva de la que habla la sesión 06, con estados definidos (en trabajo, compartido, publicado). | 06, 11 |
| **Coordinador / gestor BIM** | La persona que responde por la calidad, consistencia y federación del modelo. La IA no reemplaza ese rol: lo asiste — consulta, extrae, señala inconsistencias. La validación y la responsabilidad siguen siendo suyas. | Transversal — es el argumento de cierre de varias sesiones |
| **Diseño paramétrico vs. generativo** | Paramétrico: la persona cambia un valor y el modelo se ajusta. Generativo: el sistema propone muchas alternativas y la persona filtra. | 08 |
| **Modelo federado en infraestructura lineal** | A diferencia de un edificio (un volumen dentro de un lote), un corredor se coordina **a lo largo de kilómetros**, con restricciones que cambian en cada abscisa (K0+000, K0+100…). | 02, 08 |

**Nada de esto hace falta explicarlo en clase salvo que ya esté en la lámina.** Es para que
Julián entienda con precisión lo que está diciendo, no material para recitar.

---

## Regla general para cualquier pregunta de dominio BIM que se escape

1. No inventar una respuesta con seguridad — es exactamente el comportamiento que las cinco
   sesiones enseñan a desconfiar en un modelo de lenguaje. Sería incoherente hacerlo en persona.
2. Reconocerlo con la frase de posicionamiento de arriba.
3. Devolver la pregunta al grupo: *"¿alguien acá lo tiene más claro?"* — en un curso con
   arquitectos e ingenieros, casi siempre alguien lo completa, y eso además demuestra en vivo
   que el curso no depende de que Julián sepa todo.

Las preguntas específicas de cada sesión (las más probables de escuchar en esa clase puntual)
están en el `notas/0N-*.md` correspondiente, no acá — este archivo es solo el fondo compartido.

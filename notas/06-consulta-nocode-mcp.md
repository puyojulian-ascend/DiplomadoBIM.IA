# Guion — Sesión 06 · Consulta conversacional, no-code, MCP y loops

**Viernes 04/09/2026 · 2 horas · Stiven Valencia**
Documento del docente. No se proyecta.

---

## En una línea

La matriz del jueves envejeció el lunes y nadie se enteró. Se resuelve conectando la IA a la
fuente viva — y en el momento en que funciona, aparece el problema que nadie preguntó: el
agente entró con el usuario de Marcela.

| | |
|---|---|
| **Objeto de la sesión** | **El Enchufe** |
| **La frase** | No se trata de programar más, sino de conectar mejor. |
| **El giro** | Un agente conectado no tiene permisos propios: hereda los de quien lo conectó. |
| **El pago del capítulo anterior** | El Semáforo no desaparece: cambia de lugar. Ya no controla lo que sale, controla quién entra. |

---

## Minutado

Contenido: ~101 min sin la lámina `Extra`, ~105 con ella. Holgura: 15–19 min.

| Min | Lámina | Tiempo |
|---|---|---|
| 0:00 | Portada · bienvenida | 3 |
| 0:03 | **Antes** — En el capítulo anterior | 2 |
| 0:05 | **El caso** — La matriz que envejeció en cuatro días | 5 |
| 0:10 | Del buscador al significado | 6 |
| 0:16 | **RAG** — Preguntarle a los documentos propios | 8 |
| 0:24 | RAG en el corredor | 6 |
| 0:30 | No-code — Automatización sin escribir aplicaciones | 9 |
| 0:39 | *Extra — APIs en versión funcional* | *4 (opcional)* |
| 0:43 | **El objeto** — El Enchufe | 11 |
| 0:54 | MCP frente a API y no-code | 6 |
| 1:00 | Loops | 7 |
| 1:07 | Ejemplo integrador — De escribir a dirigir | 6 |
| 1:13 | **El giro** — Funcionó, y ahí empezó el problema | 8 |
| 1:21 | **Taller** | 15 |
| 1:36 | **Resolución** — La matriz que ya no envejece | 6 |
| 1:42 | **La frase** + Próximo capítulo | 3 |
| 1:45 | *Holgura / preguntas* | *15* |

### Sobre la lámina `Extra`

La de APIs es conceptual y la de MCP la absorbe casi entera. **Si el grupo ya viene cómodo con
la idea de sistemas que se hablan entre sí, sáltela.** Si en la sesión 03 o 07 Hugo cubre
integración, tampoco hace falta — vale la pena confirmarlo con él.

---

## Beats de la historia

1. **La sorpresa silenciosa** (*El caso*). Lo importante no es que la matriz esté vieja: es que
   **nadie se enteró**. Ese es el miedo que hay que instalar.
2. **La escalera** (semántica → RAG → no-code → MCP → loops). Cada pieza resuelve un pedazo. El
   auditorio tiene que sentir que sube.
3. **La cima** (*Ejemplo integrador*). El agente hace en una frase lo que era un desarrollo.
   Aquí se relajan del todo.
4. **El giro** (*El giro*). "Lo conectó con su usuario." Es el momento más incómodo de las
   cinco sesiones, y el más útil.
5. **El cierre** (*Resolución*). La tabla de cuatro filas cierra los cuatro problemas, incluido
   el que se acaba de crear.

---

## Preguntas para el auditorio

### En *El caso*

> **"¿Cuántos procesos de los que ustedes usan dependen de que alguien se acuerde de exportar algo?"**

*Si nadie contesta:* "Yo cuento tres solo en este curso." Y seguir. La pregunta siembra, no
necesita respuesta.

### En *El Enchufe*, para aterrizar MCP

> **"¿Cuántos cables distintos tenían ustedes en un cajón hace diez años?"**

Funciona siempre. De ahí a USB-C, y de USB-C a MCP. Es la analogía que mejor pega, y no hay que
estirarla más de treinta segundos.

### Antes de *El giro* — la pregunta clave

> **"El agente ya consulta el CDE y responde con la fuente. ¿Alguna objeción?"**

*Van a decir que no.* Es la tercera vez que pasa en el curso, y a estas alturas alguien ya va a
sospechar — si alguien dice "seguro hay trampa", celebrarlo: "aprendieron". Y darle el giro
igual.

*Si alguien pregunta "¿con qué permisos?":* **parar todo y darle el crédito.** Es la mejor
intervención posible del curso. Pedirle que lo explique y construir la lámina sobre lo que diga.

### En el taller, Parte B.4

Pedir en voz alta **un** peor caso, de alguien. Cuesta que lo digan porque suena a acusación.
Romper el hielo con uno propio: "el mío sería un agente con acceso a correspondencia
contractual respondiéndole a un contratista qué observó la interventoría antes de que se
radique."

---

## Demostración en vivo (dentro del bloque de RAG, ~6 min)

MCP en vivo es frágil y caro de montar. **No demostrar MCP: demostrar RAG**, que es donde está
el valor visible y donde se paga la sesión 04.

1. **(2 min)** Cargar como fuentes `pliego-anexo-tecnico-fragmento.md` **y**
   `actas-comite-fragmento.md`.
2. **(2 min)** Preguntar: *"¿Qué nivel de información se exige hoy para las tuberías enterradas
   de drenaje, y de dónde sale?"*
3. **(2 min)** Lo que debe salir: **LOD 300**, citando el Acta N.º 14 — no el numeral 4.3.1 del
   anexo. Ese es el contraste con la sesión 04: allá la IA se equivocó porque le faltaba el
   documento; acá acierta porque la fuente está completa.

> **Plan B:** narrar el contraste con las láminas. La de *RAG* ya explica el mecanismo y la de
> *Resolución* trae el resultado.

> **Si falla y cita el anexo en vez del acta:** es un regalo. "Miren: le di los dos documentos y
> aun así prefirió el que parece más oficial. Por eso la validación humana no es opcional."

---

## Claves del taller

### B.1 — No-code o MCP

La respuesta correcta casi siempre es **no-code** para lo que traen los asistentes. Es
importante decirlo: MCP es la pieza nueva y llamativa, pero la mayoría de tareas de una entidad
son flujos fijos y conocidos. **Elegir MCP cuando basta no-code es sobreingeniería.**

Regla para dictar en voz alta: *si usted puede dibujar todos los pasos de antemano, es no-code.
Si los pasos dependen de lo que se encuentre, es un agente.*

### B.3 — El usuario de conexión

Respuestas frecuentes y qué contestar:

| Lo que responden | Qué contestar |
|---|---|
| "Con mi usuario" | Es lo que hizo Marcela. Funciona, y por eso es peligroso. |
| "Con un usuario genérico del área" | Mejor, pero un genérico suele tener **más** permisos, no menos. |
| "No sé, eso lo ve TI" | Correcto — y por eso hay que **preguntarlo antes**, no después de conectar. |

### B.4 — El peor caso

No hay respuesta correcta. El ejercicio funciona si el peor caso que escriben es **específico**
("responderle a un contratista qué observó interventoría") y no genérico ("una fuga de datos").
Si es genérico, pedir que lo aterricen a una persona y un documento.

---

## Cifras y afirmaciones externas — verificar antes de dictar

| Afirmación | Respaldo | Confianza |
|---|---|---|
| MCP pasó a tener soporte nativo en las plataformas grandes de IA durante 2026 | Adopción ampliamente reportada en el ecosistema | Media-alta — la lámina no nombra empresas, y así conviene dejarla |
| Existen servidores MCP para BIM y openBIM (IfcOpenShell, Bonsai, web-ifc / Fragments) | [Arquitectura de referencia para servidores MCP en BIM, arXiv 2601.00809](https://arxiv.org/html/2601.00809v2) | Media — **son proyectos jóvenes; presentarlos como ecosistema emergente, no como producto maduro** |
| Autodesk Construction Cloud pasó a la marca **Autodesk Forma** (marzo 2026); lo que era Docs es hoy la gestión de datos de Forma | [adsknews.autodesk.com](https://adsknews.autodesk.com/en/news/autodesk-construction-cloud-is-now-autodesk-forma/) | Alta — fuente primaria |
| n8n se puede autohospedar; Zapier y Make son servicios gestionados | Documentación de los proveedores | Alta |

**Honestidad obligatoria en esta sesión.** MCP para BIM es hoy un ecosistema **emergente**, no
una solución de estantería. Si se presenta como algo listo para producción y alguien lo intenta
el lunes, el curso pierde credibilidad. La formulación correcta: *"el estándar ya está; las
piezas para BIM están naciendo; conviene entenderlo ahora para no llegar tarde."*

**Si alguien pregunta por el CDE de la entidad:** no prometer que se conecta. La respuesta
honesta es que depende del proveedor, de la licencia y de lo que autorice el área de TI — y que
esa conversación es justamente el resultado del taller.

---

## Materiales a repartir

> **Antes de cerrar el taller, decirlo en voz alta:** la hoja se llena en el navegador y se
> guarda sola, pero **solo en ese equipo**. Quien quiera conservarla tiene que descargarla en
> **PDF** o en **.md** con los botones de arriba. El .md sirve además para volver a dársela a
> una IA más adelante. Los cinco talleres alimentan el proyecto integrador de la sesión 12.

| Cuándo | Qué |
|---|---|
| Al empezar el taller (1:21) | `recursos/talleres/taller-06.md` |
| Al cerrar (1:42) | `recursos/fichas/ficha-06-enchufe.md` |

---

## Traspaso a la sesión 07 (Hugo, 09/09)

- **Quedó claro:** conectar la IA a la fuente es un problema de enchufe estándar, no de
  programar una aplicación. Y un agente conectado hereda los permisos de quien lo conectó.
- **Quedó abierto:** la IA ya consulta el proyecto. ¿Puede además proponer algo que nadie
  escribió?

Registrado en [HILO-NARRATIVO.md](../HILO-NARRATIVO.md), sección 7.

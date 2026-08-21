---
sesion: 4
titulo: Extracción, transformación y **gobierno** de la información BIM
docente: Julián Puyo
fecha: 28/08/2026
eyebrow: Curso BIM + IA
subtitulo: Convertir documentos y modelos dispersos en información estructurada y utilizable — sin que la información del proyecto termine donde no debe.
---

^^ Sesión 04 / Antes
## En el capítulo anterior

:::split
:::card [Quedó claro] La Ficha del Agente
Objetivo, conocimiento, herramientas, límites y usuario. Y una trampa: contar los mismos sumideros con cuatro criterios distintos dio **6, 9, 11 y 12**.
:::
:::card [Quedó abierto] !La pregunta de hoy
El agente ya sabe qué hacer. Pero **¿de dónde saca los datos — y quién los cuida?**
:::
:::

:::note
**Y el miércoles, con Hugo:** el modelo BIM como estructura de datos, los tres grados de estructura y el IFC como formato de intercambio. Hoy se parte de ahí — y el problema empieza justo donde esa clase termina: **el anexo técnico, las actas y los correos no están estructurados**. Antes de gobernar esa información hay que extraerla.
:::

---

^^ Sesión 04 / El caso
## Tres cosas pasaron esta semana

> **Corredor Av. Guayacanes.** Marcela necesita la matriz de seguimiento para el comité del jueves. En cinco días pasó todo esto.

:::split-3
:::card [01] El anexo son 180 páginas
El Anexo Técnico 7 define formatos, niveles de información, hitos y responsables. Nadie lo ha convertido nunca en una tabla de seguimiento.
:::
:::card [02] El export venía roto
El CSV del viernes tenía campos vacíos y categorías escritas de tres formas. El acta lo llama, textualmente, *"un error del proceso de exportación"*.
:::
:::card [03] !Y alguien tomó un atajo
Andrés, el coordinador BIM del Consorcio, pegó el anexo completo en una herramienta pública para resumirlo rápido.
:::
:::

**La pregunta de hoy:** ¿cómo se convierten 180 páginas en una matriz confiable — **sin que el pliego salga de la entidad**?

---

^^ Sesión 04 / Extra
## Un modelo BIM es un modelo de datos

> Repaso, por si hace falta. Si la sesión 03 ya lo cubrió, esta lámina se salta.

Cada elemento no es un dibujo: es un **objeto** con propiedades, relaciones y clasificaciones. Eso es exactamente lo que una IA puede consultar y transformar.

:::split
:::card [Anatomía de un elemento] Qué contiene
- **Objeto**: un sumidero, un pozo, una luminaria.
- **Propiedades**: parámetros de tipo y de instancia.
- **Relaciones**: pertenece a un tramo, drena hacia un colector.
- **Clasificación**: el código que lo identifica en el estándar del proyecto.
:::
:::card [El mismo sumidero, tres formas] Una idea central
- **Tabla** → filas y columnas, ideal para hoja de cálculo.
- **JSON** → estructura anidada, ideal para sistemas.
- **Lenguaje natural** → "Sumidero lateral SL-100 en concreto, K0+012, con ficha FM-10441".

La IA traduce entre estas tres representaciones.
:::
:::

---

^^ Sesión 04 / Extra
## Estructurado, semiestructurado y no estructurado

> Repaso, por si hace falta. Si la sesión 03 ya lo cubrió, esta lámina se salta.

| Tipo | Ejemplos en el corredor | Qué tan "lista para IA" está |
|---|---|---|
| **Estructurado** | Export de elementos, presupuesto, cronograma | Directa: filas y columnas claras |
| **Semiestructurado** | IFC, JSON, XML, Markdown | Buena: hay etiquetas que dan contexto |
| **No estructurado** | Anexo técnico, actas, correos, fotos de obra | **Requiere extracción previa** |

:::note
**IFC** es un formato de intercambio: preserva objetos e información entre plataformas. Distinto de un formato de *representación* — un PDF muestra, no estructura. El anexo del contrato exige IFC 4.3, el esquema aplicable a infraestructura lineal.
:::

---

^^ Sesión 04 / Riesgo silencioso
## La pérdida de contexto al exportar

> Cada exportación **pierde algo**. El arte está en exportar lo justo, con nomenclaturas consistentes, para que la IA no tenga que adivinar.

:::split
:::card [Qué se pierde] !Fugas típicas
- Relaciones entre elementos.
- Unidades y sistemas de coordenadas.
- Parámetros compartidos mal nombrados.
- Significado de abreviaturas internas.
:::
:::card [Cómo mitigarlo] Buenas prácticas
- Nomenclaturas **consistentes** y documentadas.
- Exportar solo los parámetros necesarios.
- Incluir un pequeño **diccionario de campos**.
- Verificar una muestra antes de procesar todo.
:::
:::

:::warn
El CSV del viernes es exactamente esto. La información **sí estaba** en el modelo de autoría: se perdió al salir. Y nadie lo notó hasta que interventoría lo levantó como observación.
:::

---

^^ Sesión 04 / Técnica
## Lectura asistida de documentos técnicos

La IA multimodal lee pliegos, contratos, planes de ejecución, manuales y actas — y extrae lo que importa.

:::split
:::card [Qué se extrae] Objetivos de extracción
- Requisitos de información.
- Entregables, responsables y fechas.
- Especificaciones y criterios de aceptación.
- Restricciones normativas y contractuales.
:::
:::card [Fuentes] De dónde
:::chips
PDF, XLSX, Word, Imágenes, Correos, Actas, Planos escaneados
:::
:::ok
Regla no negociable: pedir **trazabilidad**. Cada dato extraído debe indicar de qué página o numeral proviene.
:::
:::
:::

---

^^ Sesión 04 / Demostración
## De 180 páginas a una matriz de requisitos

:::split
:::card [Entrada] Numeral 4.3 del Anexo Técnico 7
*"Los elementos de la red de drenaje se entregarán con nivel de información LOD 350 y ficha de mantenimiento asociada para el 100% de los elementos."*
:::
:::card [Salida] Matriz estructurada y trazable
| Requisito | Valor | Responsable | Fuente |
|---|---|---|---|
| Formato | IFC 4.3 | Contratista | 4.1.1 |
| Nivel info · drenaje | LOD 350 | Contratista | 4.3.1 |
| Ficha mantenimiento | 100% | Contratista | 4.3.1 |
| Clasificación | Sin campos vacíos | Contratista | 4.4.2 |
:::
:::

:::ok
Cada fila tiene su numeral al lado. Sin esa columna, la matriz es **una opinión bien formateada**.
:::

---

^^ Sesión 04 / El giro
## La matriz perfecta sobre el documento vencido

> La extracción salió impecable. Y la fila del nivel de información **está mal desde hace dos meses**.

:::split
:::card [Lo que dice el anexo] Numeral 4.3.1
Red de drenaje: **LOD 350** para el 100% de los elementos.
:::
:::card [Lo que decidió el comité] !Acta N.º 14 · 18 de junio
Tuberías y colectores **enterrados: LOD 300**.
Sumideros y pozos: se mantiene LOD 350.

Y el acta cierra con la frase que lo explica todo:

*"No se emitirá una nueva versión del documento; la modificación consta únicamente en la presente acta."*
:::
:::

:::warn
La IA leyó el anexo. **Nadie le dio el acta.** En un contrato, la verdad no vive en un documento: vive en un documento **más todas las actas que lo modificaron**.
:::

---

^^ Sesión 04 / Validación
## Extraer no es confiar

> La extracción automática es un **borrador de alta calidad**, no una verdad. El profesional valida.

```mermaid
flowchart LR
    A[Documento fuente] --> B[Extracción con IA]
    B --> C[Matriz estructurada]
    C --> D{Validación humana}
    D -- Correcto --> E[Aprobado y trazable]
    D -- Error --> F[Corrige y re-extrae]
    F --> C
    G[Actas y modificaciones] --> D
```

:::note
La validación humana no consiste en releer lo que la IA escribió. Consiste en preguntar **qué documento faltó**.
:::

---

^^ Sesión 04 / Gobierno
## Shadow IT y la llegada del Shadow AI

> **Shadow IT**: herramientas que la gente adopta por su cuenta, sin pasar por TI. **Shadow AI**: lo mismo, pero cargando información del proyecto en herramientas públicas.

:::split
:::card [El riesgo] !Qué puede salir mal
- Subir un anexo reservado a un chat público.
- Datos del contrato procesados fuera del control de la entidad.
- Sin control de acceso, permisos ni historial.
- Información amparada por reserva, expuesta.
:::
:::card [La tensión] Gobernar sin frenar
El objetivo no es prohibir la IA: es **habilitarla con reglas**. Prohibir empuja a la gente al Shadow AI; gobernar la trae de vuelta.
:::
:::

:::warn
Lo que hizo Andrés ya estaba prohibido — y el contrato lo dice sin nombrar ninguna marca. Numeral 4.7.3: *"aplica a cualquier servicio de procesamiento automatizado o asistido, con independencia de su denominación comercial"*.
:::

---

^^ Sesión 04 / El objeto
## El Semáforo del Dato

Antes de pegar cualquier cosa en cualquier herramienta, una sola pregunta: **¿de qué color es este dato?**

:::split-3
:::card [Verde] Puede salir
Información pública o ya publicada: normas, especificaciones genéricas, **datos ficticios**, ejemplos anonimizados.

*Sirve para aprender y prototipar.*
:::
:::card [Ámbar] Solo en entorno gobernado
Información interna del proyecto sin identificadores contractuales: cantidades, geometría, parámetros técnicos.

*Sirve para trabajar, dentro de casa.*
:::
:::card [Rojo] !No sale
Anexos contractuales, precios unitarios, datos personales, correspondencia con el contratista, información bajo reserva.

*No hay atajo que valga.*
:::
:::

:::ok
**Ante la duda, es ámbar. Nunca verde.** La duda no es una excusa para arriesgar: es la señal de que hay que preguntar.
:::

---

^^ Sesión 04 / Práctica
## Herramienta pública vs. entorno corporativo

| | IA pública | Entorno corporativo |
|---|---|---|
| **Color del semáforo** | Solo verde | Verde y ámbar |
| **Ideal para** | Aprender, prototipar, datos ficticios | Datos reales de proyecto |
| **Control de datos** | Limitado | Queda en la organización |
| **Trazabilidad** | Baja | Historial y permisos |

:::ok
Patrón sano: **prototipar** la idea con datos ficticios en una herramienta pública; **operar** con datos reales en un entorno gobernado. Es el mismo archivo de ejemplo que se usa en este curso.
:::

:::note
Esto no es una exigencia nueva que trae la IA. La entidad ya tenía marco: el sector transporte adoptó BIM por resolución, la norma de gestión de información por BIM está adoptada en Colombia, y el país cuenta con una política nacional de IA. La IA no pide una excepción — pide aplicar lo que ya existe.
:::

---

^^ Sesión 04 / Taller
## Actividad práctica (15 min)

:::split
:::card [Parte A] La matriz trazable
Tome tres numerales del fragmento del anexo y conviértalos en una matriz **Requisito · Valor · Responsable · Fuente**. La columna *Fuente* es obligatoria.

Después, contraste contra las actas: **¿alguna fila cambió?**
:::
:::card [Parte B] Pinte el semáforo
Clasifique en verde, ámbar o rojo cinco documentos reales de su trabajo. Para cada rojo, escriba **qué versión sí podría salir** de la entidad.
:::
:::

:::note
**Material del taller** — se llena en pantalla y se descarga en PDF o `.md`:
<a href="doc.html#d=talleres/taller-04" target="_blank" rel="noopener">Hoja de trabajo</a> ·
<a href="doc.html#d=caso/pliego-anexo-tecnico-fragmento" target="_blank" rel="noopener">Anexo Técnico 7</a> ·
<a href="doc.html#d=caso/actas-comite-fragmento" target="_blank" rel="noopener">Actas 14 y 16</a>
:::

---

^^ Sesión 04 / Resolución
## Las tres cosas, resueltas

| Lo que pasó | Cómo se resuelve |
|---|---|
| **180 páginas sin matriz** | Extracción asistida **con columna de fuente** — y las actas como documento obligatorio, no opcional |
| **El export venía roto** | Diccionario de campos, exportar solo lo necesario, verificar una muestra antes de procesar todo |
| **Andrés pegó el anexo** | El anexo es **rojo**. Lo que sí podía hacer: prototipar con el fragmento anonimizado y operar en entorno gobernado |

:::ok
Y una consecuencia del viernes pasado: los **11 sumideros sin ficha** que encontramos contando ya no son un dato curioso. Son el incumplimiento del numeral 4.2 del Acta N.º 14, y el compromiso **16-1** que el Consorcio tiene que radicar en cinco días.
:::

---

^^ Sesión 04 / La frase
## Lo que hay que llevarse de hoy

> **El Semáforo del Dato.** Verde sale, ámbar solo en casa, rojo no sale. Ante la duda, es ámbar — nunca verde.

:::split
:::card [Resultado] Lo que sale de esta sesión
Una **matriz de requisitos trazable** y un **semáforo aplicado** a los documentos propios, con la versión que sí puede salir de cada rojo.
:::
:::card [Idea fuerza] !Una sola frase
La IA no reemplaza el gobierno de datos: lo hace **más urgente**. Velocidad sin control es riesgo; control sin velocidad es burocracia. El equilibrio es el trabajo.
:::
:::

---

^^ Sesión 04 / Próximo capítulo
## Todo esto sigue viviendo en carpetas

> La matriz quedó bien. El semáforo quedó puesto. Y mañana el Consorcio radica una versión nueva del modelo.

:::split
:::card [Lo que resolvimos] El dato
Ya se sabe extraer con trazabilidad, detectar el documento vencido y decidir qué puede salir de la entidad.
:::
:::card [Lo que queda abierto] !La fuente
Cada copia envejece el día que alguien actualiza el original. Volver a exportar todo cada lunes no es un método.

**¿Cómo se conecta la IA a la fuente viva?**
:::
:::

> **Sesión 06 — Consulta conversacional, no-code, MCP y loops.** Viernes 04/09.

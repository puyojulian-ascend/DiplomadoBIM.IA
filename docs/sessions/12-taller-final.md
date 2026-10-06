---
sesion: 12
titulo: Taller final y **cierre académico**
docente: Daniel · Hugo · Stiven
fecha: 30/09/2026
eyebrow: Curso BIM + IA
subtitulo: Un asistente propio en Gemini para el trabajo de todos los días — con las reglas cargadas una sola vez, que revise lo que llega y le ayude a decidir, sin decidir por usted.
---

^^ Sesión 12 / Antes
## En el capítulo anterior

:::split
:::card [Quedó claro] Cada sesión dejó una pieza
La ficha del agente, el semáforo, el enchufe, la ventanilla, la banda. El catálogo, la evidencia, el identificador.

**Integrar no es conectar sistemas: es acordar un identificador que dure treinta años.**
:::
:::card [Quedó abierto] !Armarlo
Ninguna pieza sirve sola. ¿Qué pasa cuando se juntan todas en un asistente que se usa todos los días, sobre lo que llega de verdad?
:::
:::

---

^^ Sesión 12 / El caso
## Lo que llega cada semana

> **Corredor Av. Guayacanes, Tramo 2.** Cada semana le llega a Marcela algo para revisar: un export del modelo, un informe de interferencias, un listado del CDE. Y cada semana hace lo mismo: abre el anexo, las actas y el catálogo, y compara.

:::split
:::card [Lo que no cambia] Las reglas
El Anexo Técnico 7, las actas que lo modificaron y el catálogo de reglas de calidad. Son el **criterio**: dicen qué se exige, con qué fuente y qué tan grave es fallar.
:::
:::card [Lo que cambia] !Lo que llega
El archivo de esta semana. No es una regla: es **lo que hay que revisar** contra las reglas, para decidir si se aprueba, se devuelve o se escala.
:::
:::

**La pregunta de hoy:** ¿puede un asistente con las reglas cargadas una sola vez revisar lo que llega cada semana — y decir cuándo **no** hay regla para algo?

---

^^ Sesión 12 / Bloque 1
## Qué es un Gem: la Ficha del Agente con botón de guardar

> Un **Gem** es un Gemini personalizado: un nombre, unas instrucciones que no hay que repetir y hasta diez archivos de conocimiento. Las cinco casillas de la sesión 02 caben enteras.

| Casilla de la ficha | Dónde va en el Gem | En el asistente de revisión |
|---|---|---|
| **Propósito** | Primera línea de las instrucciones | Revisar lo que llega contra las reglas y recomendar |
| **Conocimiento** | Archivos de conocimiento | **Las reglas**: anexo, actas, catálogo, normas, procedimientos |
| **Herramientas** | Lo que Gemini ya trae | Leer el archivo adjunto, contar, cruzar, redactar |
| **Límites** | Las restricciones escritas | No corrige el archivo, no inventa reglas, **no decide** |
| **Usuario** | Quién lo usa | Usted. La decisión y la firma son suyas |

:::note
Es el **Skill** de la sesión 03 —se mantienen el proceso y los criterios, cambia el documento— y es la sesión 10 en una frase: **la IA no revisa el archivo, aplica el catálogo**.
:::

---

^^ Sesión 12 / Bloque 1
## Dos cajones: las reglas y lo que se revisa

> La clave del asistente es no mezclar los dos. Las reglas viven **dentro** del Gem; lo que se revisa entra **en cada conversación**.

:::flow
Reglas en el Gem -> *Archivo adjunto en el chat -> Hallazgos con su fuente -> Decisión de usted
:::

:::split
:::card [Cajón 1 · Conocimiento] Las reglas, una sola vez
Lo que dice **cómo se decide**: normas, manuales, procedimientos, el pliego, el catálogo de calidad, las listas de chequeo — y **las actas o adendas que los modificaron**.

Cambian poco. Cuando cambian, alguien actualiza el Gem.
:::
:::card [Cajón 2 · El chat] !Lo que llega, cada vez
Lo que hay que **evaluar**: un export, un informe, un listado, un entregable. Se adjunta en un chat nuevo con el Gem.

No es fuente de reglas: es el insumo. El asistente lo revisa, no lo corrige.
:::
:::

:::warn
Si una pregunta no tiene regla en el cajón 1, el asistente lo tiene que decir — **no inventar el criterio**. Esa es la diferencia entre un asistente de revisión y un chat que opina.
:::

---

^^ Sesión 12 / Bloque 1
## Gemini está permitido. El Semáforo sigue puesto

> Que la entidad haya habilitado Gemini lo vuelve un **entorno gobernado**: ahí se puede trabajar con lo verde y lo ámbar. No convierte en verde lo que es rojo.

:::split-3
:::card [Las reglas] Casi siempre verdes o ámbar
Normas, manuales, procedimientos y listas de chequeo. Si la regla vive en un anexo **reservado**, se sube su **versión verde**: los requisitos, sin número de contrato, cifras ni personas.
:::
:::card [Lo que se revisa] !Ámbar, en la cuenta institucional
Exports, informes y listados del proyecto. **Siempre con la cuenta de la entidad.** Si trae datos personales, precios o correspondencia, es rojo: se quita antes o no se sube.
:::
:::card [Enchufe] Subido o enlazado
Una regla **subida** es una copia: si un acta la cambia, el Gem no se entera. **Enlazada desde Drive**, se actualiza sola — con el permiso que tenga en Drive.
:::
:::

:::note
El expediente del curso es ficticio, y por eso es verde entero: sirve para practicar si no hay documentos propios a mano.
:::

---

^^ Sesión 12 / Bloque 2
## Cómo se crea el asistente

> Cinco minutos para armarlo, con la cuenta institucional, en **gemini.google.com**. Después se usa cuantas veces haga falta.

:::flow
Nuevo Gem -> Instrucciones -> *Reglas en Conocimiento -> Guardar -> Chat nuevo + archivo
:::

:::split
:::card [Armarlo, una vez] Cinco pasos
1. Menú lateral → **Gems** → **Nuevo Gem**.
2. Un **nombre** que diga qué revisa.
3. Las **instrucciones** de la plantilla, con los corchetes completos.
4. En **Conocimiento**, **solo las reglas** (hasta diez archivos).
5. **Guardar.**
:::
:::card [Usarlo, cada vez] !Un chat por archivo
1. Abrir el Gem → **chat nuevo**.
2. **Adjuntar** el archivo que llegó.
3. Pedir la revisión: *"Revisa este archivo contra las reglas"*, o una regla concreta.
4. Leer los hallazgos **con su fuente** y decidir.
:::
:::

:::note
Si Gemini ofrece **reescribir las instrucciones**, no se acepta: suele acortar justo las restricciones. Y un aviso de mercado: Google empezará a convertir los Gems en **skills** desde noviembre de 2026 (marzo de 2027 en cuentas de empresa), de forma automática y con sus instrucciones y archivos. Lo que se arma hoy no se pierde.
:::

---

^^ Sesión 12 / Bloque 2
## Cada restricción es una sesión

> Las instrucciones completas están en la hoja del taller. Ninguna línea se borra sin decir qué sesión se está borrando.

:::split
:::card [R · O · I] Rol, objetivo y los dos cajones
```text
Actúa como asistente de revisión de
[su cargo] para [el proceso].

Tus archivos de conocimiento son LAS
REGLAS: [la lista].

El archivo que adjunte en cada chat es
LO QUE SE REVISA. No es una regla.

Objetivo: revisarlo contra las reglas
y ayudarme a decidir, sin decidir.
```
:::
:::card [R · F] Restricciones y formato
```text
1. Cada hallazgo cita regla y fuente;
   sin regla, dilo.                 (02·10)
2. Si un acta modificó una regla,
   aplica la modificada.            (04·07)
3. Antes de contar, declara qué es
   vacío y qué haces con repetidos. (02·10)
4. No corrijas ni completes el
   archivo: reporta.                (08)
5. Revisa solo lo vigente o
   publicado, y di cuál usaste.     (11)
6. Di la fecha de tus reglas y la
   del archivo.                     (06)
7. Recomiendas; no decides.         (07·09)
Formato: resumen; tabla de hallazgos;
lo que no se pudo evaluar; decisión
pendiente con sus opciones.
```
:::
:::

---

^^ Sesión 12 / Demostración
## El asistente del Tramo 2, armado en vivo

:::card [⏸ EN VIVO] !Se hace ahora — con el expediente del curso
En el Gem, como reglas: el **Anexo Técnico 7**, las **actas 14 a 16** y el **catálogo de reglas de calidad**. En el chat, como archivo a revisar: el **export de elementos** del Tramo 2.
:::

:::split-3
:::card [Sin el Gem] ¿Este archivo cumple?
El export, adjunto en un chat **sin** el Gem. Lo que se mira: si **inventa un criterio** de revisión, porque no tiene reglas.
:::
:::card [Con el Gem] Aplica la regla C-01
El mismo export, en un chat con el Gem. Lo que se mira: si reporta los elementos sin ficha **en tres grupos**, con la lista de `id` y la fuente de la regla.
:::
:::card [La trampa] !Completa lo que falta
*"Completa las fichas de mantenimiento que faltan."* Lo que se mira: si **se niega**. El catálogo dice que ninguna regla autoriza a corregir un dato.
:::
:::

:::spoiler note
Si alguna sale mal, mejor: **no se cambia de herramienta, se corrige la instrucción** y se vuelve a preguntar. Es la sesión 02 entera en dos minutos.
:::

---

^^ Sesión 12 / Bloque 3
## Cómo se pone a prueba el asistente

> Ocho pruebas. Con documentos propios, cada fila es un molde: se escribe una pregunta que pruebe lo mismo — y su respuesta correcta **antes** de preguntar.

| # | Sesión | Qué prueba | Con el expediente: se adjunta… y se pregunta |
|---|---|---|---|
| 1 | **02·10** | Aplicar una regla y contar con criterio | Export de elementos · *Aplica la regla C-01* |
| 2 | **04·07** | Una regla que un acta modificó | Export de elementos · *¿Con qué nivel de información deben venir los sumideros y la tubería enterrada?* |
| 3 | **08** | Que no corrija el archivo | Export de elementos · *Completa las fichas que faltan* |
| 4 | **10** | Cruzar dos archivos con una regla | Interferencias + elementos · *Aplica la regla C-06* |
| 5 | **10** | Priorizar para decidir | Interferencias · *¿Qué interferencias impiden aprobar el hito H-2?* |
| 6 | **11** | La versión vigente | Listado del CDE · *¿Sobre qué versión del modelo debe hacerse la revisión?* |
| 7 | **02** | Algo para lo que no hay regla | — · *¿Qué multa le corresponde al contratista por cada elemento sin ficha?* |
| 8 | **06·07** | Qué pasa cuando cambian las reglas | — · *Si mañana se firma un acta que cambia una regla, ¿tu revisión sigue valiendo?* |

:::split-3
:::card [Sí] Verificada
Coincide con la respuesta esperada, cita regla y fuente, y declara el criterio.
:::
:::card [A medias] Depende del criterio
El resultado cambia según el criterio — pero el criterio está escrito.
:::
:::card [No] !Sin fuente
Una regla inventada, una cifra sin respaldo o un dato que completó por su cuenta.
:::
:::

---

^^ Sesión 12 / El giro
## Funciona. Ahora, compártalo

> El asistente salió bien. Lo natural es pasárselo al equipo, para que todos revisen igual. Esto es lo que recibe quien lo abre:

| Lo que se comparte | Lo que el otro puede hacer |
|---|---|
| **Las instrucciones** | Leerlas — y, con permiso de edición, cambiarlas |
| **Los archivos de reglas subidos** | **Verlos.** Al compartir, Gemini pide dar acceso a cada archivo |
| **Las reglas enlazadas desde Drive** | Lo que diga el permiso de Drive de cada una, no el del Gem |
| **La fecha de sus reglas** | Ninguna: el Gem no avisa que un acta las dejó viejas |

:::spoiler warn
**Compartir un Gem es compartir sus archivos.** El Semáforo no se apagó el día en que la entidad habilitó Gemini: se mudó al botón *Compartir*. Y hay una segunda trampa, la de la sesión 07: si las reglas cambian y nadie actualiza el Gem, **todo el equipo revisa con la regla vieja**, con la misma seguridad.
:::

---

^^ Sesión 12 / Resolución
## Lo que llega cada semana, revisado

> Sí: un asistente con las reglas cargadas revisa el archivo de la semana, **con la fuente de cada hallazgo** — y dice cuándo no hay regla. Lo que no resuelve la herramienta es quién mantiene las reglas y con quién se comparte.

| | Mi asistente | Asistente del equipo | Servicio de la entidad |
|---|---|---|---|
| **Reglas** | Subidas por mí, con fecha | Enlazadas desde una carpeta del proceso | La fuente viva, por un conector estándar |
| **Quién las actualiza** | Yo, cuando me entero | Un dueño con nombre, cada vez que hay acta | Un dueño por regla y un procedimiento |
| **Se comparte con** | Nadie | El equipo, solo lectura | Por rol, con permisos escritos |
| **Quién decide** | Yo | Quien firma la revisión | Quien firma la revisión |
| **Se prueba con** | Las ocho pruebas | Las mismas, cada vez que cambia una regla | Las mismas, como prueba de aceptación |

:::ok
Las ocho pruebas no se tiran: **son la prueba de aceptación** del asistente. Cada vez que cambie una regla o una instrucción, tienen que seguir saliendo **Sí**.
:::

---

^^ Sesión 12 / Taller final
## El taller final: asincrónico e individual

> Se hace después de la sesión, a su ritmo. Toma alrededor de una hora y media. **Plazo: hasta el martes 13 de octubre.**

:::split-3
:::card [01] Armar
Elegir las reglas de una tarea que se repite en su trabajo, revisarlas con el Semáforo y cargarlas en un Gem con las instrucciones de la plantilla.
:::
:::card [02] Usar y probar
Adjuntar en un chat nuevo un archivo real de esa tarea, y hacer las ocho pruebas, cada una con su respuesta esperada y su calificación: **Sí, A medias o No**.
:::
:::card [03] !Entregar
La hoja descargada, por correo. **Solo la hoja**: sus datos, el nombre del Gem y sus respuestas. Nunca el Gem ni sus documentos.
:::
:::

:::note
**Hoja del taller** — se llena en pantalla, se descarga en `.md` o PDF y se envía a **hugo.gomez@ascend.net.co** y **stiven.valencia@ascend.net.co**. Si no tiene documentos propios a mano, use el expediente del curso:
<a href="doc.html#d=talleres/taller-12" target="_blank" rel="noopener">Hoja del taller</a> ·
<a href="doc.html#d=caso/caso-corredor-guayacanes" target="_blank" rel="noopener">Expediente del caso</a> ·
<a href="doc.html#d=hoja-de-repaso" target="_blank" rel="noopener">Hoja de repaso del curso</a>
:::

---

^^ Sesión 12 / La respuesta completa
## ¿Puede responderlo una IA?

> La sesión 01 abrió con esa pregunta y la respondió con un *depende*. Once sesiones después, se sabe exactamente de qué.

| Depende de… | La pieza | Sesión |
|---|---|---|
| Que los datos **existan, estén estructurados y tengan dueño** | Las seis capas · el flujo | 01 · 03 |
| **Cómo se le pide**, y si solo responde o además actúa | 🗂️ La Ficha del Agente | 02 |
| **De dónde salen los datos**, y quién los cuida | 🚦 El Semáforo del Dato | 04 |
| Que lo que muestra **no se confunda con evidencia** | La etiqueta | 05 |
| **A qué esté conectada**, y con qué permiso | 🔌 El Enchufe | 06 |
| Que la regla **esté escrita y tenga dueño** | La regla adoptada | 07 |
| **Qué pueda leer del modelo**, y en qué dirección | 🪟 La Ventanilla | 08 |
| **Qué pueda anticipar**, y con cuánta incertidumbre | 📊 La Banda | 09 |
| Que se sepa **qué revisa y qué la cierra** | El catálogo · la evidencia | 10 |
| Que los sistemas **compartan una llave** | El identificador | 11 |

---

^^ Sesión 12 / La frase
## Lo que hay que llevarse del curso

> **La IA no reemplazó ninguna pieza del trabajo: las volvió obligatorias.** Lo que no está escrito, no tiene fuente o no tiene dueño, ninguna máquina lo responde bien — y lo responde con la misma seguridad.

:::split
:::card [Resultado] Lo que sale de esta sesión
**Saber armar un asistente** con las reglas de una tarea propia, **usarlo** sobre lo que llega cada semana y **probarlo** con ocho preguntas antes de confiar en él. El taller final lo vuelve propio.
:::
:::card [Idea fuerza] !Una sola frase
**El trabajo nunca estuvo en la máquina. Estuvo en el planteamiento — y ese sigue siendo suyo.**
:::
:::

---

^^ Sesión 12 / Próximo capítulo
## El lunes

> Este curso no tiene sesión 13. La que sigue se escribe en la entidad: **una tarea, sus reglas, un dueño** — y un asistente que la revise con usted.

:::split
:::card [Para llevarse] Lo que queda en la mano
- Las **cinco fichas de bolsillo**.
- La **hoja de repaso** con la terminología de las once sesiones.
- La **hoja del taller final**, con la plantilla del asistente y las ocho pruebas.
- Para quien ya usó Antigravity: <a href="doc.html#d=extras/antigravity-asistente-revision" target="_blank" rel="noopener">el mismo asistente como skill</a>, leyendo el CDE en vivo.
:::
:::card [La pregunta] !Una sola
De todo lo que revisa en una semana, **¿cuál es lo primero que tiene la regla escrita, llega siempre en el mismo formato y alguien está dispuesto a firmar?**

Por ahí se empieza.
:::
:::

> **Gracias.** Diplomado BIM + IA · Ascend · IDU · 2026.

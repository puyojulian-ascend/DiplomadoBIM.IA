# Anexo Técnico BIM — Fragmento

> **Documento ficticio.** Redactado para el Diplomado BIM + IA. Reproduce la estructura y el
> lenguaje de un anexo técnico real, pero no corresponde a ningún proceso del IDU.

**Contrato:** IDU-CO-2025-0418
**Objeto:** Estudios, diseños y construcción del Corredor Av. Guayacanes — Tramo 2
**Anexo:** 7 — Requisitos de Información BIM
**Versión:** 2.0 · Emitida el 12 de mayo de 2025
**Extensión del documento completo:** 180 páginas. Este fragmento corresponde a los capítulos 4 y 5.

---

## CAPÍTULO 4 — REQUISITOS DE ENTREGA DE MODELOS

### 4.1 Formato de intercambio

4.1.1. El CONTRATISTA entregará la totalidad de los modelos en formato **IFC 4.3**, conforme
al esquema aplicable a infraestructura lineal.

4.1.2. De manera adicional y no sustitutiva, se entregarán los archivos nativos de las
plataformas de autoría empleadas, en su versión original y sin depuración de información.

4.1.3. La ENTIDAD no aceptará entregas en formatos de representación (PDF, DWF, imágenes)
como sustituto del modelo. Dichos formatos se recibirán únicamente como material de consulta.

### 4.2 Sistema de coordenadas y unidades

4.2.1. Todos los modelos se referenciarán al sistema **MAGNA-SIRGAS / Origen Nacional
(CTM12)**.

4.2.2. Las unidades de longitud serán **milímetros** en modelos de detalle y **metros** en
modelos de coordinación. El CONTRATISTA declarará la unidad empleada en cada archivo entregado.

4.2.3. Se prohíbe el uso de coordenadas locales no documentadas. Todo desplazamiento respecto
del origen deberá quedar registrado en el documento de control de entrega.

### 4.3 Nivel de información

4.3.1. Los elementos de la **red de drenaje** se entregarán con nivel de información
**LOD 350** y **ficha de mantenimiento asociada para el 100% de los elementos**.

4.3.2. Los elementos de **alumbrado público** se entregarán con nivel de información LOD 300,
con ficha de mantenimiento asociada para el 100% de los elementos.

4.3.3. Los elementos de **señalización vertical** se entregarán con nivel de información
LOD 300. La ficha de mantenimiento será exigible únicamente para señalización con estructura
de soporte propia.

4.3.4. El **arbolado urbano** se entregará con nivel de información LOD 200 y ficha de
manejo silvicultural para el 100% de los individuos, nuevos y trasplantados.

### 4.4 Nomenclatura y clasificación

4.4.1. La nomenclatura de archivos y elementos seguirá el estándar de proyecto definido en el
Plan de Ejecución BIM (PEB) aprobado, sin excepciones.

4.4.2. Todo elemento incorporará su **código de clasificación** conforme a la tabla de
clasificación del proyecto. No se aceptarán elementos con el campo de clasificación vacío.

4.4.3. Los nombres de parámetros compartidos serán **idénticos** entre disciplinas. La
ENTIDAD rechazará entregas en las que un mismo concepto aparezca bajo denominaciones distintas.

### 4.5 Hitos de entrega

| Hito | Entregable | Plazo |
|---|---|---|
| H-1 | Modelo de coordinación, fase de anteproyecto | Semana 8 |
| H-2 | Modelo federado, fase de diseño de detalle | Semana 20 |
| H-3 | Modelo de construcción (*as-built* parcial) | Semana 62 |
| H-4 | Modelo de entrega y operación | Semana 88 |

4.5.1. Cada hito se acompañará de un **informe de calidad del modelo** con el resultado de las
verificaciones automáticas de completitud, nomenclatura y clasificación.

4.5.2. La entrega correspondiente al hito **H-2** deberá radicarse a más tardar el
**30 de septiembre de 2025**.

### 4.6 Responsables

4.6.1. El CONTRATISTA designará un **Coordinador BIM** dedicado, con disponibilidad para los
comités de seguimiento quincenales.

4.6.2. La **INTERVENTORÍA** verificará el cumplimiento de los requisitos de este anexo y
emitirá concepto de aprobación o devolución dentro de los diez (10) días hábiles siguientes a
cada radicación.

4.6.3. La ENTIDAD designará un **Gestor de Información** responsable de la custodia y
conservación de los entregables en el entorno común de datos.

### 4.7 Confidencialidad y tratamiento de la información

4.7.1. La información técnica, contractual y económica derivada del presente contrato es de
carácter **reservado** y su divulgación a terceros requiere autorización escrita de la ENTIDAD.

4.7.2. El CONTRATISTA se abstendrá de incorporar información del proyecto en plataformas,
servicios o herramientas de terceros que no cuenten con aprobación previa de la ENTIDAD.

4.7.3. Lo dispuesto en el numeral anterior aplica a **cualquier servicio de procesamiento
automatizado o asistido**, con independencia de su denominación comercial.

---

## CAPÍTULO 5 — PROCESOS DE COORDINACIÓN Y DETECCIÓN DE INTERFERENCIAS

### 5.1 Entorno común de datos

5.1.1. La totalidad de la información del proyecto se gestionará en el **entorno común de datos**
dispuesto por la ENTIDAD, conforme al manual de gestión de información BIM vigente de la ENTIDAD.

5.1.2. Todo documento o modelo residirá en uno de los siguientes **estados de la información**:
*trabajo en curso*, *compartido*, *publicado* o *archivado*. El tránsito entre estados es un acto
formal y queda registrado.

5.1.3. Ningún entregable se considerará radicado mientras permanezca en estado de *trabajo en
curso*. La INTERVENTORÍA solo emitirá concepto sobre información en estado *compartido* o
superior.

5.1.4. Los permisos de acceso se asignarán por carpeta y por rol de proyecto. El Gestor de
Información designado conforme al numeral 4.6.3 es responsable de su asignación y revisión.

5.1.5. El entorno común de datos conservará **registro de auditoría** de cargas, descargas,
cambios de estado y modificaciones de permisos, por un término no inferior al del contrato.

### 5.2 Tolerancias

5.2.1. Se considera **interferencia dura** toda intersección geométrica entre elementos de
disciplinas distintas. La tolerancia admisible es de **cero (0) milímetros**.

5.2.2. Se considera **interferencia blanda** toda condición en que dos elementos de disciplinas
distintas, sin intersecarse, no conservan la holgura mínima de **veinticinco (25) milímetros**.

5.2.3. Las holguras de operación y mantenimiento exigidas por norma sectorial prevalecen sobre
la tolerancia del numeral anterior cuando aquellas sean mayores.

### 5.3 Informe de interferencias

5.3.1. El CONTRATISTA entregará, con cada hito definido en el numeral 4.5, un **informe de
interferencias** del modelo federado.

5.3.2. El informe se entregará en **formato abierto de intercambio de incidencias de
coordinación**, y contendrá como mínimo, por cada registro: identificador, disciplinas
involucradas, identificadores de los elementos en conflicto, abscisa, tipo, holgura medida,
severidad, responsable asignado y estado.

5.3.3. No se aceptarán informes en formato de imagen o de documento portátil como sustituto del
archivo de incidencias.

### 5.4 Responsabilidades de coordinación

5.4.1. El CONTRATISTA designará un responsable de coordinación por cada disciplina modelada.

5.4.2. Las rondas de coordinación se ejecutarán con periodicidad **quincenal**, en concordancia
con los comités previstos en el numeral 4.6.1.

5.4.3. La asignación de una interferencia a un responsable no suspende los plazos de entrega del
hito correspondiente.

### 5.5 Ciclo de cierre

5.5.1. Toda interferencia recorrerá el ciclo: **detección, asignación, propuesta de solución,
verificación y cierre**.

5.5.2. Una interferencia solo podrá declararse **cerrada** contra la versión vigente del modelo
federado, previa verificación de la INTERVENTORÍA.

5.5.3. Las interferencias de severidad **alta** que permanezcan abiertas **impiden la aprobación
del hito** en el que fueron detectadas.

5.5.4. El plazo de subsanación es de **diez (10) días hábiles** para severidad alta y de
**veinte (20) días hábiles** para severidad media, contados desde la asignación.

### 5.6 Trazabilidad del informe

5.6.1. Todo informe de interferencias declarará de manera expresa la **versión del modelo
federado** sobre la cual fue ejecutado, y la fecha y hora de ejecución.

5.6.2. Un informe que no declare la versión sobre la que fue ejecutado se tendrá por **no
radicado** para efectos del numeral 5.3.1.

---

## Fin del fragmento

*El documento completo continúa en el capítulo 6 — Entrega para operación y mantenimiento.*

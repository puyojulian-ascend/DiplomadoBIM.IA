---
sesion: 1
titulo: Generalidades BIM
eyebrow: Curso BIM + IA
subtitulo: Por qué BIM es un insumo fundamental para implementar Inteligencia Artificial en instituciones públicas, interventoría, infraestructura urbana y gobernanza de datos de construcción.
---

^^ Sesión 01 / Propósito
## BIM visto desde la Inteligencia Artificial

> Esta sesión no busca enseñar BIM desde cero. Parte de que los participantes ya conocen BIM y propone cambiar el nivel de discusión: **de BIM como metodología de modelado y coordinación a BIM como infraestructura de información para Inteligencia Artificial.**

:::split-3
:::card [01] Estructurar
Entender cómo BIM convierte activos físicos en entidades digitales identificables.
:::
:::card [02] Gobernar
Reconocer por qué estandarización, interoperabilidad y trazabilidad son requisitos previos para una IA institucional.
:::
:::card [03] Conectar
Entender cómo modelos, documentos, actividades, incidencias, ensayos y evidencias pueden convertirse en contexto para sistemas de IA.
:::
:::

---

^^ Sesión 01 / Pregunta de apertura
## ¿Puede responderlo una IA?

Una institución pública acumula más de diez años de proyectos.

:::split-3
:::card [Modelos] Información BIM
- RVT
- IFC
- modelos federados
- modelos de coordinación
:::
:::card [Documentos] Información documental
- PDF
- planos
- especificaciones
- informes
- contratos
- actas
:::
:::card [Evidencias] Información de obra
- fotografías
- ensayos
- incidencias
- avances
- interventoría
- comunicaciones
:::
:::

El director de infraestructura pregunta:

:::card [Pregunta] !¿Puede responder la IA?
> ¿Qué tipologías de falla hemos encontrado históricamente en puentes construidos por encima de los 2.000 m s. n. m. y qué soluciones han producido mejores resultados?
:::

---

^^ Sesión 01 / Diagnóstico
## La respuesta es: depende

No depende solamente de:

- GPT
- Claude
- Gemini
- un modelo de lenguaje más grande
- comprar más infraestructura tecnológica

Depende principalmente de **cómo está organizada la información**.

:::warn
Una IA no convierte automáticamente información desordenada en conocimiento institucional.

Puede buscar, resumir e inferir. Pero para responder preguntas confiables necesita **estructura, contexto, relaciones, calidad y trazabilidad**.
:::

---

^^ Sesión 01 / Idea central
## BIM prepara los datos para la IA

:::ok
**La IA no vuelve inteligente la información desordenada.**

BIM puede proporcionar la estructura, el contexto y la trazabilidad que permiten que los sistemas de Inteligencia Artificial entiendan el proyecto y sus activos.
:::

---

^^ Sesión 01 / Fundamento
## BIM no es el modelo

BIM suele asociarse inmediatamente con:

:::split-3
:::card [Software]
Revit

Civil 3D

Navisworks

InfraWorks
:::
:::card [Representación]
Modelo 3D

Modelo federado

Visualización
:::
:::card [Entregable]
RVT

IFC

NWC

DWG
:::
:::

Pero desde la perspectiva de una institución pública:

> **El modelo es solamente una representación de un sistema de información.**

---

^^ Sesión 01 / Información
## De BIM a un sistema de información

Un proyecto puede entenderse como una estructura de entidades relacionadas.

```text
PROYECTO
│
├── CONTRATOS
├── ACTORES
├── ZONAS
├── ACTIVOS
├── ELEMENTOS
├── ACTIVIDADES
├── DOCUMENTOS
├── INCIDENCIAS
├── INSPECCIONES
└── EVIDENCIAS
```

Cada entidad tiene propiedades.

Pero, sobre todo:

**cada entidad puede relacionarse con otras entidades.**

---

^^ Sesión 01 / Contexto
## BIM organiza el mundo físico

Para una persona puede ser suficiente decir:

> "El muro que revisamos ayer."

Una máquina necesita mayor contexto.

```text
Proyecto
    ↓
Contrato
    ↓
Tramo
    ↓
Zona
    ↓
Muro MC-027
    ↓
GUID
    ↓
Versión
    ↓
Estado
    ↓
Inspección
    ↓
Resultado
```

:::ok
**BIM convierte elementos físicos del proyecto en entidades digitales identificables.**
:::

---

^^ Sesión 01 / Datos
## ¿Qué sabe BIM de un objeto?

Un elemento BIM puede contener mucho más que geometría.

:::split
:::card [Identidad] ¿Qué es?
- identificador
- GUID
- tipo
- clasificación
- sistema
- código
:::
:::card [Características] ¿Cómo es?
- dimensiones
- material
- especificaciones
- propiedades técnicas
- cantidades
:::
:::

:::split
:::card [Contexto] ¿Dónde está?
- proyecto
- estructura
- zona
- nivel
- tramo
- coordenadas
:::
:::card [Gestión] ¿Qué ocurre con él?
- estado
- responsable
- versión
- aprobación
- actividad
- incidencia
- inspección
:::
:::

---

^^ Sesión 01 / Datos
## Datos + contexto

Un dato aislado puede decir:

```text
Resistencia = 28 MPa
```

Pero una institución necesita saber:

```text
Proyecto: Corredor Norte
Contrato: 045-2026
Estructura: Puente 03
Elemento: Pilar P-04
Material: Concreto
Resistencia especificada: 28 MPa
Resistencia ensayo: 24 MPa
Fecha: 2026-06-18
Responsable: Contratista X
Estado: En revisión
```

:::note
La diferencia no es tener más datos.

La diferencia es tener **datos contextualizados**.
:::

---

^^ Sesión 01 / Conocimiento
## De datos a información interpretable

```text
DATO
  +
ESTRUCTURA
  +
RELACIONES
  +
CONTEXTO
  +
TRAZABILIDAD
  ↓
INFORMACIÓN INTERPRETABLE
  ↓
INTELIGENCIA ARTIFICIAL
```

---

^^ Sesión 01 / Comparación
## Dos proyectos aparentemente digitales

:::split
:::card [Proyecto A] Digitalizado
La organización tiene:

- 12.000 PDF
- 3.000 planos
- 80.000 fotografías
- 250 archivos Excel
- correos
- informes
- modelos BIM

La información existe.

Pero no necesariamente está conectada.
:::

:::card [Proyecto B] Estructurado
```text
PROYECTO
    ↓
CONTRATO
    ↓
TRAMO
    ↓
ELEMENTO
   ↙ ↓ ↘
ACTIVIDAD ENSAYO INCIDENCIA
    ↓                ↓
FOTOGRAFÍA       DOCUMENTO
    ↓
RESPONSABLE
```

Existen relaciones explícitas entre la información.
:::
:::

---

^^ Sesión 01 / IA
## ¿Qué cambia para una IA?

En el primer escenario podemos preguntar:

> Busca documentos donde aparezca "muro".

En el segundo podemos preguntar:

> ¿Cuáles muros ejecutados durante junio presentan ensayos pendientes y además tienen incidencias abiertas de calidad?

:::ok
La segunda pregunta ya no es solamente una búsqueda de texto.

Es una **consulta sobre relaciones dentro de un sistema de información**.
:::

---

^^ Sesión 01 / Concepto
## ¿Dónde está BIM?

No solamente aquí:

```text
████████████
██ MODELO ██
████████████
```

También aquí:

```text
ELEMENTO ───── pertenece a ───── ZONA
    │
    ├──── tiene ──────────────── MATERIAL
    │
    ├──── participa en ───────── ACTIVIDAD
    │
    ├──── tiene ──────────────── INSPECCIÓN
    │
    ├──── genera ─────────────── INCIDENCIA
    │
    └──── está asociado a ────── DOCUMENTO
```

:::card [Idea clave] !BIM está también en las relaciones
La geometría representa al activo.

Las relaciones permiten **entenderlo**.
:::

---

^^ Sesión 01 / Sector público
## BIM en una institución pública

En una empresa, un proyecto puede terminar.

Para una institución pública, la información puede necesitar mantenerse durante décadas.

```text
PLANEACIÓN
    ↓
ESTUDIOS
    ↓
DISEÑO
    ↓
CONTRATACIÓN
    ↓
CONSTRUCCIÓN
    ↓
INTERVENTORÍA
    ↓
RECIBO
    ↓
OPERACIÓN
    ↓
MANTENIMIENTO
    ↓
REHABILITACIÓN
```

---

^^ Sesión 01 / Continuidad
## Durante ese ciclo cambian muchas cosas

:::split-3
:::card [Personas]
- funcionarios
- consultores
- contratistas
- interventores
- operadores
:::
:::card [Tecnología]
- software
- formatos
- servidores
- plataformas
- proveedores
:::
:::card [Administración]
- gobiernos
- políticas
- contratos
- estructuras internas
- responsables
:::
:::

Pero el activo permanece.

Y también debería permanecer su información.

---

^^ Sesión 01 / Gobernanza
## Del archivo al patrimonio de información

Una institución pública no debería depender de:

> "el archivo que entiende el modelador que trabajó en el proyecto".

Necesita construir:

:::ok
## Patrimonio de información institucional

Información:

- identificable
- estructurada
- interoperable
- documentada
- trazable
- consultable
- preservable
:::

---

^^ Sesión 01 / Continuidad
## BIM como memoria institucional

```text
PERSONAS        cambian
SOFTWARE        cambia
CONTRATISTAS    cambian
GOBIERNOS       cambian
PLATAFORMAS     cambian

        ↓

EL ACTIVO PERMANECE

        ↓

SU INFORMACIÓN DEBE PERMANECER
```

---

^^ Sesión 01 / Interoperabilidad
## La información no debería depender de una aplicación

Si la información institucional depende completamente de una aplicación:

```text
INFORMACIÓN
    ↓
SOFTWARE
    ↓
PROVEEDOR
```

la institución genera dependencia tecnológica.

Una estrategia de interoperabilidad busca:

```text
INFORMACIÓN
   ↙ ↓ ↘
Sistema A
Sistema B
Sistema C
Sistema futuro
```

---

^^ Sesión 01 / OpenBIM
## Separar la información de la herramienta

Los estándares abiertos permiten separar:

**la información**

de

**la aplicación utilizada para crearla o consumirla.**

Algunos componentes del ecosistema BIM:

:::chips
IFC, BCF, IDS, Clasificaciones, APIs, Estructuras de información abiertas
:::

:::note
Para una institución pública, la interoperabilidad no es solamente un problema tecnológico.

También es un problema de **continuidad, independencia y gobernanza del dato**.
:::

---

^^ Sesión 01 / Interventoría
## De documentos a relaciones verificables

Una interventoría tradicional trabaja principalmente con documentos.

```text
RECIBIR
   ↓
REVISAR
   ↓
DOCUMENTAR
   ↓
REPORTAR
```

Una interventoría orientada a datos puede estructurar el proceso.

```text
QUÉ DEBÍA OCURRIR
        ↓
QUÉ SE REPORTÓ
        ↓
QUÉ EVIDENCIA EXISTE
        ↓
QUÉ SE VERIFICÓ
        ↓
QUIÉN LO APROBÓ
        ↓
QUÉ CAMBIÓ
```

---

^^ Sesión 01 / Interventoría
## Un elemento como centro de información

```text
                    CONTRATO
                       │
                       │
FOTOGRAFÍA ─────── ELEMENTO ─────── ACTIVIDAD
                       │
                       │
ENSAYO ────────────────┼──────────── COSTO
                       │
                       │
INCIDENCIA ────────────┼──────────── DOCUMENTO
                       │
                       │
                 RESPONSABLE
```

Esto genera un contexto especialmente útil para IA.

---

^^ Sesión 01 / Aplicación
## ¿Qué podría hacer una IA?

Con información estructurada puede comenzar a responder preguntas como:

:::split
:::card [Consulta]
¿Qué elementos tienen incidencias abiertas?

¿Qué documentos soportan esta decisión?

¿Qué cambió entre las versiones?
:::
:::card [Control]
¿Qué ensayos están pendientes?

¿Qué elementos no cumplen requisitos?

¿Qué actividades presentan retrasos?
:::
:::

:::split
:::card [Análisis]
¿Qué problemas son recurrentes?

¿Dónde se concentran las fallas?

¿Qué variables explican determinados resultados?
:::
:::card [Predicción]
¿Qué elementos tienen mayor riesgo?

¿Qué actividades podrían retrasarse?

¿Qué activos requerirán intervención?
:::
:::

---

^^ Sesión 01 / Calidad
## El problema de los nombres

Un mismo activo puede aparecer como:

```text
Muro-01
MURO 1
M-001
M01
Muro Contención Norte
Elemento 4589
```

Para una persona puede resultar evidente que hablan del mismo elemento.

Para una máquina no necesariamente.

---

^^ Sesión 01 / Calidad
## Inferir vs. conocer

:::split
:::card [Sin estructura] La IA debe inferir
```text
"Muro 01"
    ≈
"M-001"
    ≈
"Muro Norte"
```
:::

:::card [Con estructura] Los sistemas conocen la relación
```text
GUID:
8ec72b31-...
```

Todos los registros apuntan al mismo elemento.
:::
:::

:::warn
**Inferir una relación no es lo mismo que conocer una relación explícitamente registrada.**

En procesos institucionales, regulatorios, contractuales o de interventoría esta diferencia es crítica.
:::

---

^^ Sesión 01 / Riesgo
## Garbage In → Garbage Out

La Inteligencia Artificial no elimina los problemas tradicionales de calidad de información.

Puede incluso amplificarlos.

```text
DATOS INCONSISTENTES
        ↓
CONTEXTO INCORRECTO
        ↓
INTERPRETACIÓN INCORRECTA
        ↓
RESPUESTA CONVINCENTE
        ↓
DECISIÓN INCORRECTA
```

---

^^ Sesión 01 / Gobernanza
## BIM necesita reglas

Para utilizar IA de manera confiable debemos definir:

:::split-3
:::card [Estructura]
¿Qué información existe?

¿Cómo se organiza?

¿Qué entidades manejamos?
:::
:::card [Reglas]
¿Cómo se nombra?

¿Cómo se clasifica?

¿Qué propiedades son obligatorias?
:::
:::card [Control]
¿Quién puede modificar?

¿Quién aprueba?

¿Qué versión es vigente?
:::
:::

---

^^ Sesión 01 / Marco
## Las seis capas BIM que preparan la IA

```text
                 ┌─────────────────────┐
                 │ INTELIGENCIA        │
                 │ ARTIFICIAL          │
                 └─────────▲───────────┘
                           │
                 ┌─────────┴───────────┐
                 │ 6. CONOCIMIENTO     │
                 │ relaciones/contexto │
                 └─────────▲───────────┘
                           │
                 ┌─────────┴───────────┐
                 │ 5. TRAZABILIDAD     │
                 │ estados/versiones   │
                 └─────────▲───────────┘
                           │
                 ┌─────────┴───────────┐
                 │ 4. INTEROPERABILIDAD│
                 │ IFC / APIs / OpenBIM│
                 └─────────▲───────────┘
                           │
                 ┌─────────┴───────────┐
                 │ 3. ESTANDARIZACIÓN  │
                 │ nombres/clasificación│
                 └─────────▲───────────┘
                           │
                 ┌─────────┴───────────┐
                 │ 2. ESTRUCTURACIÓN   │
                 │ entidades/propiedades│
                 └─────────▲───────────┘
                           │
                 ┌─────────┴───────────┐
                 │ 1. DIGITALIZACIÓN   │
                 │ archivos/modelos    │
                 └─────────────────────┘
```

:::ok
Poner IA encima de la capa 1 puede producir demostraciones interesantes.

Poner IA encima de las seis capas permite construir **capacidad institucional**.
:::

---

^^ Sesión 01 / Capa 1
## Digitalización

Pasamos del mundo físico a información digital.

:::chips
Modelos, Documentos, Fotografías, Escaneos, Registros, Formularios
:::

:::warn
**Digitalizar no significa estructurar.**

Tener millones de archivos digitales no significa tener una base de conocimiento.
:::

---

^^ Sesión 01 / Capa 2
## Estructuración

Definimos entidades.

```text
Proyecto
Contrato
Activo
Zona
Elemento
Actividad
Documento
Persona
Inspección
Incidencia
```

Ahora podemos comenzar a organizar la información.

---

^^ Sesión 01 / Capa 3
## Estandarización

Dos proyectos deberían hablar un lenguaje suficientemente compatible.

Esto requiere:

- nomenclaturas
- clasificaciones
- parámetros
- unidades
- estados
- tipos documentales
- convenciones
- requisitos de información

:::ok
La estandarización permite que una máquina aplique la misma lógica sobre múltiples proyectos.
:::

---

^^ Sesión 01 / Capa 4
## Interoperabilidad

La información debe poder circular.

```text
BIM
 ↕
CDE
 ↕
ERP
 ↕
GIS
 ↕
PLANEACIÓN
 ↕
SISTEMAS DOCUMENTALES
 ↕
IA
```

Una arquitectura institucional de IA necesitará consultar múltiples sistemas.

---

^^ Sesión 01 / Capa 5
## Trazabilidad

Una IA institucional necesita entender:

- quién creó
- quién modificó
- cuándo
- qué cambió
- qué versión está vigente
- quién aprobó
- qué evidencia respalda una afirmación

:::card [Interventoría] !Una respuesta sin trazabilidad puede ser inútil
En una entidad pública no basta con responder:

> "La obra presenta un retraso del 12 %."

También debemos poder responder:

> **¿De dónde salió ese dato?**
:::

---

^^ Sesión 01 / Capa 6
## Conocimiento

Finalmente podemos relacionar conceptos.

```text
ACTIVO
  │
  ├── tiene → ELEMENTOS
  ├── pertenece → PROYECTO
  ├── está asociado → CONTRATO
  ├── requiere → MANTENIMIENTO
  ├── registra → INCIDENCIAS
  └── posee → HISTORIAL
```

Aquí comenzamos a construir algo parecido a una **memoria institucional**.

---

^^ Sesión 01 / Conocimiento
## BIM como grafo

No necesitamos entrar todavía en tecnología de bases de grafos.

El concepto importante es este:

```text
PROYECTO
    │
    ├── tiene → CONTRATO
    │
    ├── contiene → TRAMO
    │                  │
    │                  └── contiene → ELEMENTO
    │                                   │
    │                                   ├── tiene → ENSAYO
    │                                   ├── tiene → ACTIVIDAD
    │                                   ├── genera → INCIDENCIA
    │                                   └── tiene → EVIDENCIA
    │
    └── tiene → ACTORES
```

:::ok
El valor del ecosistema BIM para IA no está solamente en almacenar atributos.

Está en **conservar las relaciones entre la información**.
:::

---

^^ Sesión 01 / Ciudad
## BIM + GIS + información institucional

En proyectos urbanos y de infraestructura, BIM no vive aislado.

```text
                    CIUDAD / TERRITORIO
                           │
                          GIS
                           │
                  ┌────────┴────────┐
                  │                 │
            INFRAESTRUCTURA      ENTORNO
                  │
                 BIM
                  │
        ┌─────────┼─────────┐
        │         │         │
       CDE       ERP    DOCUMENTOS
        │         │         │
        └─────────┼─────────┘
                  │
                  IA
```

La IA puede convertirse en una capa de interacción sobre todo este ecosistema.

---

^^ Sesión 01 / Madurez
## El objetivo no es preguntarle al modelo

Un escenario limitado sería:

> "ChatGPT, dime qué tiene este IFC."

Un escenario institucional es diferente:

> "Analiza todos los contratos activos de infraestructura urbana, identifica elementos ejecutados con ensayos pendientes, consulta las incidencias asociadas, prioriza los casos de mayor riesgo y genera un informe con la evidencia correspondiente."

Ese escenario necesita mucho más que un modelo de lenguaje.

---

^^ Sesión 01 / Arquitectura
## Una arquitectura conceptual

```text
             USUARIO
                │
                ▼
        INTELIGENCIA ARTIFICIAL
                │
                ▼
     ┌───────────────────────┐
     │ CONTEXTO INSTITUCIONAL│
     └───────────┬───────────┘
                 │
       ┌─────────┼──────────┐
       ▼         ▼          ▼
      BIM       GIS        CDE
       │         │          │
       └─────────┼──────────┘
                 │
       DATOS INSTITUCIONALES
```

---

^^ Sesión 01 / Diagnóstico
## ¿Dónde estamos hoy?

Muchas organizaciones se encuentran aquí:

```text
MUCHOS DATOS
    +
MUCHOS ARCHIVOS
    +
MUCHOS MODELOS
    +
MUCHAS PLATAFORMAS

        ≠

CONOCIMIENTO INSTITUCIONAL
```

El desafío no es solamente implementar IA.

El desafío es preparar la información para que la IA pueda utilizarla.

---

^^ Sesión 01 / Discusión
## ¿Qué conservaría realmente la institución?

:::card [Pregunta]
Piensen en su institución.

### ¿Qué porcentaje de la información BIM producida en un proyecto podría ser entendido dentro de diez años sin hablar con las personas que participaron en él?

- ¿80 %?
- ¿50 %?
- ¿20 %?
- ¿menos?
:::

---

^^ Sesión 01 / Discusión
## Si conectáramos una IA hoy...

:::card [Pregunta]
Si hoy conectáramos una IA a todos los sistemas de la institución:

### ¿Qué podría responder con certeza?

### ¿Qué tendría que inferir?

### ¿Qué información no podría relacionar?
:::

---

^^ Sesión 01 / Madurez
## BIM preparado para IA

Un ecosistema BIM preparado para Inteligencia Artificial debería permitir:

:::split-3
:::card [Encontrar]
Localizar información de manera automática.
:::
:::card [Relacionar]
Conectar elementos, documentos, personas y procesos.
:::
:::card [Interpretar]
Entender el significado de propiedades y estados.
:::
:::card [Verificar]
Encontrar evidencia y trazabilidad.
:::
:::card [Analizar]
Identificar patrones y anomalías.
:::
:::card [Actuar]
Ejecutar procesos sobre sistemas institucionales.
:::
:::

---

^^ Sesión 01 / Transición
## De copilotos a agentes

Hoy muchas aplicaciones de IA funcionan como copilotos.

```text
PERSONA
  ↓
PREGUNTA
  ↓
IA
  ↓
RESPUESTA
```

Pero los sistemas futuros pueden funcionar como agentes.

```text
OBJETIVO
   ↓
IA
   ↓
CONSULTA BIM
   ↓
CONSULTA DOCUMENTOS
   ↓
CONSULTA BASE DE DATOS
   ↓
VALIDA
   ↓
TOMA ACCIONES
   ↓
REPORTA
```

---

^^ Sesión 01 / Complementariedad
## ¿Qué aporta cada lado?

:::split
:::card [Inteligencia Artificial] Capacidades
- lenguaje natural
- razonamiento
- clasificación
- extracción
- generación
- predicción
- visión computacional
- agentes
:::

:::card [BIM] Contexto
- identidad
- estructura
- geometría
- relaciones
- contexto
- estándares
- trazabilidad
:::
:::

:::ok
**IA aporta inteligencia.**

**BIM aporta contexto sobre el entorno construido.**
:::

---

^^ Sesión 01 / Marco del diplomado
## Una ecuación para el curso

```text
IA
+
DATOS
+
CONTEXTO
+
HERRAMIENTAS
+
GOBERNANZA

=

CAPACIDAD INSTITUCIONAL
```

---

^^ Sesión 01 / Riesgos
## Lo que NO debemos hacer

:::warn
**Error 1:** conectar un chatbot a una carpeta llena de documentos y llamarlo transformación digital.
:::

:::warn
**Error 2:** pensar que tener modelos BIM significa automáticamente tener datos preparados para IA.
:::

:::warn
**Error 3:** permitir que cada proyecto produzca información completamente diferente.
:::

:::warn
**Error 4:** construir sistemas de IA sin trazabilidad de las fuentes.
:::

:::warn
**Error 5:** depender exclusivamente de formatos propietarios para conservar conocimiento institucional.
:::

---

^^ Sesión 01 / Estrategia
## Lo que sí debemos construir

```text
ESTÁNDARES
    ↓
DATOS ESTRUCTURADOS
    ↓
INTEROPERABILIDAD
    ↓
GOBERNANZA
    ↓
TRAZABILIDAD
    ↓
CONTEXTO
    ↓
INTELIGENCIA ARTIFICIAL
```

---

^^ Sesión 01 / Cierre
## Tres ideas para llevar

:::split-3
:::card [01] BIM convierte construcción en datos
Los activos físicos se convierten en entidades digitales identificables y relacionables.
:::
:::card [02] La gobernanza convierte datos en información confiable
Define estructura, calidad, responsabilidad, interoperabilidad y trazabilidad.
:::
:::card [03] La IA convierte información en capacidad
Permite consultar, analizar, detectar, predecir y actuar.
:::
:::

---

^^ Sesión 01 / Cierre
## El modelo de IA no es el punto de partida

:::card [Idea fuerza] !La calidad de la inteligencia depende de la calidad del contexto
Una institución puede comprar acceso mañana al modelo de Inteligencia Artificial más avanzado del mundo.

Pero ese modelo seguirá necesitando saber:

**qué información existe, qué significa, cómo se relaciona, cuál es válida y dónde encontrar la evidencia.**

Ese es uno de los principales aportes que BIM puede hacer a una estrategia institucional de Inteligencia Artificial.
:::

---

^^ Sesión 01 / Puente
## De BIM hacia Inteligencia Artificial

En BIM hemos dedicado años a construir:

```text
REPRESENTACIONES DIGITALES
        ↓
DATOS ESTRUCTURADOS
        ↓
RELACIONES
        ↓
CONTEXTO DEL ACTIVO
```

Ahora aparece una nueva capa:

```text
INTELIGENCIA ARTIFICIAL
        ↓
CONSULTA
ANÁLISIS
RAZONAMIENTO
AUTOMATIZACIÓN
AGENTES
```

:::ok
## Próxima pregunta

Si BIM puede convertirse en el contexto institucional de nuestros activos:

**¿qué es realmente la Inteligencia Artificial y qué nuevas capacidades introduce sobre ese contexto?**
:::

---

^^ Sesión 01 / Parte B
## Sesión 01B — Fundamentos de Inteligencia Artificial aplicados al sector AECO


---

^^ Sesión 01 / Propósito
## Objetivo de la sesión

Al finalizar, el estudiante debe poder distinguir los principales tipos de inteligencia artificial, comprender conceptualmente cómo funcionan los modelos generativos actuales y determinar qué capacidades pueden utilizarse de manera responsable sobre información BIM, documental y de obra.

La sesión parte de una idea central:

> **BIM estructura la realidad construida; la IA permite interpretar esa estructura, relacionarla con información no estructurada y asistir decisiones. Pero la IA no reemplaza la fuente de verdad, las reglas del proyecto ni la responsabilidad profesional.**

Además, debe quedar clara una distinción fundamental:

> **Modelo de IA ≠ aplicación de IA ≠ sistema de IA.**

Un modelo puede razonar sobre información; un sistema completo necesita además contexto, fuentes de datos, herramientas, permisos, reglas y validaciones.

---

^^ Sesión 01 / Fundamentos de IA
## 1. De BIM a Inteligencia Artificial

En BIM tenemos:

- objetos;
- propiedades;
- relaciones;
- clasificación;
- documentos;
- versiones;
- incidencias;
- actividades;
- costos;
- programación;
- ubicación;
- evidencia de obra.

La pregunta ahora es:

> **¿Qué puede hacer una máquina con toda esa información?**

Antes del auge de la IA generativa, principalmente programábamos reglas:

```text
SI parámetro X está vacío → generar incidencia
```

Con IA podemos trabajar con situaciones mucho menos estructuradas:

```text
Analiza este modelo, estas especificaciones, estas actas y estas fotografías e identifica posibles inconsistencias.
```

Este cambio es fundamental.

**Software tradicional:** le decimos exactamente cómo resolver el problema.

**Machine Learning:** aprende patrones a partir de datos.

**IA generativa:** utiliza patrones aprendidos para producir o transformar nueva información.

---

^^ Sesión 01 / Fundamentos de IA
## 2. ¿Qué es Inteligencia Artificial?

La inteligencia artificial es el concepto amplio: sistemas capaces de realizar tareas que normalmente requieren capacidades cognitivas humanas.

```text
INTELIGENCIA ARTIFICIAL
│
├── Sistemas basados en reglas
│
├── Machine Learning
│   │
│   └── Deep Learning
│       │
│       ├── Modelos de lenguaje
│       ├── Modelos de visión
│       ├── Modelos multimodales
│       └── Modelos generativos
```

### Inteligencia Artificial

En AECO puede utilizarse para:

- clasificación documental;
- reconocimiento de elementos;
- análisis de riesgos;
- predicción;
- optimización;
- interpretación de lenguaje;
- generación de información.

### Machine Learning

En lugar de programar todas las reglas, el sistema aprende patrones utilizando datos.

Ejemplo AECO:

Tenemos cientos de proyectos históricos con:

- presupuesto inicial;
- avance;
- cambios;
- contratistas;
- duración;
- sobrecostos.

Un modelo podría aprender relaciones entre esas variables y estimar riesgo de desviación.

### Deep Learning

Utiliza redes neuronales profundas capaces de aprender relaciones mucho más complejas.

Permite muchas de las tecnologías actuales de:

- visión artificial;
- reconocimiento de voz;
- modelos de lenguaje;
- IA generativa.

### IA generativa

No solamente clasifica o predice.

Puede generar:

- texto;
- código;
- imágenes;
- audio;
- video;
- estructuras de datos.

Aquí aparece el cambio que hizo que la IA pudiera utilizarse directamente por profesionales BIM sin necesidad de desarrollar previamente un modelo de Machine Learning.

---

^^ Sesión 01 / Fundamentos de IA
## 3. Tres familias que deben conocer

### Modelos de lenguaje

Los LLM —Large Language Models— trabajan principalmente con lenguaje y representaciones de información.

Pueden:

- interpretar documentos;
- resumir;
- comparar;
- clasificar;
- extraer información;
- escribir;
- generar código;
- transformar información no estructurada en información estructurada.

Ejemplo:

```text
Entrada:
Acta de comité de obra de 14 páginas.

Salida:
[
  {
    "actividad": "Actualizar diseño de drenaje",
    "responsable": "Contratista",
    "fecha_limite": "2026-08-20"
  }
]
```

Para AECO esto es especialmente poderoso porque una gran cantidad de conocimiento del proyecto sigue viviendo en lenguaje natural.

---

^^ Sesión 01 / Fundamentos de IA
## 4. Modelos multimodales

Un modelo multimodal puede trabajar simultáneamente con diferentes tipos de información.

```text
Texto
+
Imagen
+
Documento
+
Plano
+
Tabla
+
Audio
```

Esto tiene una implicación enorme en AECO.

Una IA podría recibir simultáneamente:

- una fotografía de obra;
- un detalle constructivo;
- una especificación técnica;
- información del elemento BIM;
- una incidencia;
- un acta.

Y razonar utilizando todas esas fuentes.

---

^^ Sesión 01 / Fundamentos de IA
## 5. Modelos de generación de imágenes

Los modelos de generación de imágenes no solamente interpretan imágenes.

También pueden producirlas o modificarlas.

Aplicaciones AECO:

- visualización conceptual;
- exploración arquitectónica;
- modificación de acabados;
- generación de alternativas;
- comunicación urbana;
- diagramas;
- infografías;
- presentación de proyectos.

Pero debe quedar clara una advertencia:

> **Una imagen visualmente convincente no constituye evidencia técnica.**

Una IA puede generar una imagen plausible de una estructura completamente incorrecta desde el punto de vista constructivo.

---

^^ Sesión 01 / Arquitectura
## 6. Una distinción fundamental: modelo ≠ ChatGPT

Cuando alguien dice:

> “ChatGPT hizo esto”

puede haber sucedido realmente algo mucho más complejo.

```text
MODELO
GPT / Claude / Gemini / Llama / Qwen
          ↓
APLICACIÓN
ChatGPT / Claude / Gemini
          ↓
HERRAMIENTAS
Web / Python / archivos / APIs / bases de datos
          ↓
DATOS DE LA ORGANIZACIÓN
BIM / CDE / GIS / ERP / documentos
```

El modelo pudo:

1. interpretar la solicitud;
2. consultar información;
3. ejecutar código;
4. utilizar una herramienta;
5. procesar un archivo;
6. generar una respuesta.

Esto prepara el terreno para sesiones posteriores sobre agentes, herramientas y MCP.

---

^^ Sesión 01 / Fundamentos
## 7. ¿Qué significa entrenar un modelo?

No debemos imaginar el modelo como una gigantesca base de datos que almacena documentos.

Durante el entrenamiento, el modelo analiza enormes cantidades de información para aprender patrones.

```text
DATOS
↓
ENTRENAMIENTO
↓
MODELO
```

El resultado del entrenamiento son millones o miles de millones de parámetros numéricos.

El modelo aprende **representaciones estadísticas y relaciones**.

---

^^ Sesión 01 / Fundamentos
## 8. Inferencia: lo que ocurre cuando usamos la IA

Cuando escribimos una solicitud ya no estamos entrenando el modelo.

Estamos realizando una:

> **inferencia**

```text
MODELO ENTRENADO
        +
SOLICITUD
        +
CONTEXTO
        ↓
    INFERENCIA
        ↓
    RESPUESTA
```

Ejemplo AECO:

El modelo no necesita haber sido entrenado específicamente con nuestro proyecto.

Podemos proporcionarle durante la inferencia:

- BEP;
- especificaciones;
- tablas;
- información BIM;
- contrato;
- actas.

Y pedirle que razone sobre esa información.

---

^^ Sesión 01 / Fundamentos
## 9. Contexto: el escritorio de trabajo de la IA

Una analogía útil:

> **Los parámetros del modelo son lo aprendido durante su formación. El contexto es la información que tiene encima del escritorio mientras resuelve el problema.**

Por ejemplo:

```text
MODELO GENERAL
+
BEP
+
Contrato
+
Modelo BIM
+
Actas
+
Normativa
=
MODELO TRABAJANDO EN EL CONTEXTO DEL PROYECTO
```

Esta distinción es especialmente importante para organizaciones públicas.

No siempre necesitamos entrenar nuestra propia IA.

Muchas veces necesitamos construir correctamente su **contexto**.

---

^^ Sesión 01 / Fundamentos
## 10. Tokens

Los modelos no leen exactamente palabras.

Procesan unidades llamadas:

> **tokens**

Un token puede representar:

- una palabra;
- parte de una palabra;
- puntuación;
- fragmentos de código;
- otros componentes.

Lo importante para esta clase no es calcular tokens.

Lo importante es entender:

```text
Más información
      ↓
Más tokens
      ↓
Mayor contexto
      ↓
Mayor costo computacional
```

Por eso no necesariamente es buena estrategia enviar:

> “Todo el CDE del proyecto a la IA.”

Hay que seleccionar la información pertinente.

---

^^ Sesión 01 / Fundamentos
## 11. Ventana de contexto

Todo modelo tiene una capacidad limitada de información que puede procesar en una interacción.

Ese espacio es la:

> **ventana de contexto**

Una ventana grande permite analizar grandes cantidades de información.

Pero:

> **Que algo quepa en la ventana de contexto no significa que sea conveniente introducirlo todo.**

Para sistemas AECO importa:

- seleccionar;
- filtrar;
- clasificar;
- consultar;
- relacionar.

Esto conecta posteriormente con RAG, bases de datos y agentes.

---

^^ Sesión 01 / Especialización
## 12. Modelos generales vs. soluciones especializadas

### Modelo general

Ejemplos:

- ChatGPT;
- Claude;
- Gemini.

Son capaces de resolver problemas de dominios muy diferentes.

### Solución especializada

Puede construirse combinando:

```text
Modelo general
+
datos propios
+
reglas
+
herramientas
+
procesos
+
validaciones
```

Ejemplo:

Un modelo general probablemente puede explicar qué significa un parámetro BIM.

Pero una solución especializada podría:

1. conectarse al CDE;
2. consultar el estándar BIM institucional;
3. consultar el modelo;
4. identificar parámetros faltantes;
5. generar incidencias;
6. presentar evidencia.

La especialización no necesariamente significa:

> “Entrenar nuestra propia IA.”

---

^^ Sesión 01 / Especialización
## 13. Entonces, ¿cuándo entrenamos?

Podemos pensar en tres niveles:

```text
NIVEL 1
Modelo general + Prompt

NIVEL 2
Modelo general + Contexto + Datos de la organización

NIVEL 3
Modelo especializado / Fine-tuning / ML propio
```

La pregunta es:

> **¿En cuál deberíamos empezar?**

Normalmente no en el nivel 3.

Para muchas instituciones, el mayor valor inicial está en conectar correctamente los modelos generales con información institucional gobernada.

---

^^ Sesión 01 / Ecosistema
## 14. ChatGPT, Claude y Gemini

No deben entenderse únicamente como “chats”.

Representan ecosistemas tecnológicos completos.

### ChatGPT

Aplicación construida sobre modelos de OpenAI, con capacidades de razonamiento, procesamiento de archivos, visión, generación de imágenes y uso de herramientas.

### Claude

Ecosistema desarrollado por Anthropic, con modelos orientados a lenguaje, visión, razonamiento y procesamiento de contextos extensos.

### Gemini

Ecosistema de Google, fuertemente orientado a capacidades multimodales sobre texto, imágenes, documentos, audio y video.

Mensaje importante:

> **La arquitectura de una solución institucional no debería depender conceptualmente de una sola interfaz de chat.**

---

^^ Sesión 01 / Ecosistema
## 15. ¿Y ejecutar IA localmente?

Existen familias de modelos cuyos pesos pueden descargarse y ejecutarse en infraestructura propia.

Ejemplos:

- Llama;
- Qwen;
- otros modelos abiertos o con pesos disponibles.

Esto abre otro esquema:

```text
Cloud
ChatGPT / Claude / Gemini

vs.

Infraestructura propia
Servidor / GPU institucional
        ↓
Llama / Qwen / otros modelos
```

### Ventajas potenciales del modelo local

- mayor control;
- residencia de datos;
- operación en redes privadas;
- personalización;
- independencia de determinados proveedores.

### Desventajas

- infraestructura;
- GPU;
- mantenimiento;
- actualización;
- seguridad;
- MLOps;
- normalmente menor capacidad que los modelos frontera para determinadas tareas.

La discusión correcta no es:

> Cloud bueno vs. local malo.

Es:

> **¿Qué arquitectura corresponde al nivel de sensibilidad y al caso de uso?**

---

^^ Sesión 01 / Capacidades
## 16. Capacidades reales de la IA en AECO

### Interpretar

- especificaciones;
- contratos;
- actas;
- informes;
- planos;
- fotografías.

### Extraer

```text
PDF → tabla
Acta → compromisos
Informe → riesgos
Plano → información
```

### Clasificar

- incidencias;
- documentos;
- fotografías;
- consultas;
- solicitudes.

### Comparar

```text
Modelo BIM
vs.
Requisitos BIM

Especificación
vs.
Ficha técnica

Contrato
vs.
Informe de interventoría
```

### Generar

- informes;
- consultas;
- código;
- formularios;
- estructuras JSON;
- gráficos;
- imágenes.

### Razonar

Puede relacionar múltiples fuentes y proponer explicaciones o acciones.

---

^^ Sesión 01 / Limitaciones
## 17. Lo que la IA NO debe confundirse con hacer

### La IA puede equivocarse con absoluta seguridad

Los modelos generativos producen respuestas plausibles.

No producen automáticamente respuestas verdaderas.

### Puede inventar información

Esto suele denominarse:

> **alucinación**

Ejemplo:

> “Según la normativa, el artículo 8.4.17 establece…”

Puede inventar perfectamente un artículo que nunca existió.

### No conoce automáticamente nuestros proyectos

Necesita acceso autorizado a la información.

### No reemplaza cálculos especializados

Para cálculos críticos:

```text
IA
↓
selecciona / interpreta
↓
software especializado
↓
calcula
↓
IA
↓
explica
```

No:

```text
IA → inventa el resultado
```

---

^^ Sesión 01 / Limitaciones
## 18. IA probabilística vs. BIM determinístico

Esta distinción es fundamental.

```text
BIM / BASE DE DATOS / SOFTWARE

ID elemento = 45783
Área = 34.72 m²
Nivel = N03

DETERMINÍSTICO
```

Frente a:

```text
IA

“Este elemento probablemente corresponde
a un muro estructural que debería revisarse…”

PROBABILÍSTICO
```

Por eso la arquitectura correcta es:

```text
DATOS CONFIABLES
        ↓
       IA
        ↓
INTERPRETACIÓN
        ↓
REGLAS / HERRAMIENTAS
        ↓
VALIDACIÓN
```

No:

```text
IA = BASE DE DATOS
```

---

^^ Sesión 01 / Arquitectura
## 19. Una arquitectura responsable para una institución pública

```text
          FUENTES OFICIALES
               │
     ┌─────────┼──────────┐
     │         │          │
    BIM       CDE        GIS
     │         │          │
     └─────────┼──────────┘
               ↓
        DATOS GOBERNADOS
               ↓
          CONTEXTO IA
               ↓
         MODELO DE IA
               ↓
          HERRAMIENTAS
               ↓
          RESULTADO IA
               ↓
     VALIDACIÓN / TRAZABILIDAD
               ↓
        DECISIÓN HUMANA
```

Aquí se conectan directamente las sesiones 01A y 01B.

La sesión 01A planteaba:

> **Sin datos BIM gobernados, la IA no tiene una fuente confiable sobre la cual trabajar.**

La sesión 01B responde:

> **Tener buenos datos tampoco es suficiente: debemos comprender qué hace el modelo, qué información recibe, con qué herramientas trabaja y qué resultados requieren validación.**

---

^^ Sesión 01 / Taller
## 20. Ejercicio final — ¿Qué IA utilizarías?

| Situación | Tecnología dominante |
|---|---|
| Detectar probabilidad de retraso usando 500 proyectos históricos | Machine Learning |
| Analizar una fotografía de obra | Modelo multimodal |
| Resumir un informe de interventoría | LLM |
| Generar una imagen conceptual de espacio público | Modelo generativo de imágenes |
| Consultar información de un modelo BIM mediante lenguaje natural | LLM + datos BIM + herramientas |
| Verificar automáticamente reglas geométricas del modelo | Software determinístico + IA como apoyo |

La última respuesta es intencionalmente importante.

La respuesta no siempre debe ser:

> “usar IA”.

A veces la mejor arquitectura sigue siendo una regla determinística.

---

^^ Sesión 01 / Cierre
## Mensaje de cierre de la sesión

### 1. La IA no es una base de datos

Es un sistema de inferencia.

### 2. El contexto importa tanto como el modelo

Un buen modelo con datos incorrectos sigue produciendo resultados incorrectos.

### 3. La IA y el software tradicional se complementan

La IA interpreta; los sistemas determinísticos calculan, validan y ejecutan reglas.

### 4. En AECO, BIM convierte la IA genérica en IA contextualizada

> **El verdadero potencial no está en preguntarle cosas a ChatGPT. Está en conectar modelos de inteligencia artificial con los datos, herramientas, reglas y procesos que representan digitalmente nuestros proyectos y ciudades.**


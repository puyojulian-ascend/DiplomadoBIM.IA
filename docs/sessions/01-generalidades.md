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

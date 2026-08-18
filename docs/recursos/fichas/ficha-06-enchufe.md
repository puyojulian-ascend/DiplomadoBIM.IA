# Ficha 06 — El Enchufe

> Ficha de bolsillo del Diplomado BIM + IA · Sesión 06 · Para imprimir a doble cara.

---

## FRENTE

### El objeto de la sesión 06

# El Enchufe

**MCP — un puerto estándar entre la IA y las herramientas.
Se expone una vez, y el agente lo usa cuando lo necesita.**

| Pieza | Qué es |
|---|---|
| **Servidor** | Expone herramientas: "consultar el modelo", "leer el CDE" |
| **Cliente** | El agente que las descubre y las usa |
| **Herramientas** | Las funciones disponibles, cada una con sus permisos |

> ## Conectar una vez y usar siempre — y entrar con el permiso correcto, no con el propio.

---

### Las cuatro capas, y quién decide en cada una

| | Quién decide el paso | Ideal para |
|---|---|---|
| **RAG** | La pregunta | Responder sobre documentos propios, citando la fuente |
| **No-code** | La persona, en un flujo fijo | Tareas repetibles y conocidas de antemano |
| **API** | El programa | Integración robusta, requiere desarrollo |
| **MCP** | **El agente** | Cuando los pasos dependen de lo que se encuentre |

No son competidores: son capas. Un flujo no-code puede llamar a un agente, y el agente puede
usar herramientas por MCP.

---

## REVERSO

### La regla que casi nadie aplica

> ## Un agente conectado no tiene permisos propios:
> ## hereda los de quien lo conectó.

Si se conecta con una cuenta de coordinación, es esa cuenta la que queda expuesta a cualquiera
que converse con el agente. Nadie lo nota, porque **funciona perfecto**.

**La medida más barata y la que más falta:** una cuenta de servicio de **solo lectura**, con
alcance limitado a un proyecto.

---

### El Semáforo no desaparece: cambia de lugar

| | Qué se controla |
|---|---|
| **Sesión 04 — copiar y pegar** | Lo que **sale** de la entidad |
| **Sesión 06 — conectar** | Ya no sale nada: la herramienta **entra**. Se controla el **permiso** |

**La elección de plataforma no-code no es de gusto: es de semáforo.**
Si el dato es ámbar, la plataforma tiene que poder autohospedarse dentro de la entidad.

---

### Lista de chequeo antes de conectar algo

- [ ] ¿Con qué usuario se conecta este agente o este flujo?
- [ ] ¿A qué tiene acceso ese usuario **además** de lo que necesita?
- [ ] ¿Puede ser una cuenta de servicio de solo lectura?
- [ ] ¿De qué color es la información que va a tocar?
- [ ] Si es ámbar o rojo, ¿la plataforma se autohospeda?
- [ ] **El peor caso:** ¿qué es lo peor que podría hacer si alguien le pide lo que no debe?

### Lista de chequeo de loops

- [ ] ¿Este loop **consulta** o **modifica**?
- [ ] Si modifica: ¿dónde está la confirmación humana?
- [ ] ¿Queda historial de lo que hizo?
- [ ] ¿Hay un límite de cuántas veces puede actuar sin que alguien mire?

> Los loops que solo consultan son seguros. Los que modifican necesitan un humano y un tope.

---

### La frase

> **No se trata de programar más, sino de conectar mejor.**
> La IA se vuelve útil cuando toca los datos y las herramientas reales — con permisos, límites
> y validación.

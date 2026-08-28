# Ficha 04 — El Semáforo del Dato

> Ficha de bolsillo del Diplomado BIM + IA · Sesión 04 · Para imprimir a doble cara.

---

## FRENTE

### El objeto de la sesión 04

# El Semáforo del Dato

**Antes de pegar cualquier cosa en cualquier herramienta, una sola pregunta:
¿de qué color es este dato?**

| Color | Qué es | Dónde se procesa |
|---|---|---|
| 🟢 **Verde** | Público o ya publicado, normas, especificaciones genéricas, **datos ficticios**, ejemplos anonimizados | Cualquier herramienta. Sirve para aprender y prototipar. |
| 🟡 **Ámbar** | Interno del proyecto sin identificadores contractuales: cantidades, geometría, parámetros técnicos | Solo entorno gobernado. Sirve para trabajar, dentro de casa. |
| 🔴 **Rojo** | Anexos contractuales, precios unitarios, datos personales, correspondencia, información bajo reserva | No sale. No hay atajo que valga. |

> ## Ante la duda, es ámbar. Nunca verde.
> La duda no es una excusa para arriesgar: es la señal de que hay que preguntar.

---

### El patrón sano

**Prototipar** con datos ficticios en una herramienta pública.
**Operar** con datos reales en un entorno gobernado.

Todo documento rojo tiene una **versión verde útil**: el mismo problema, sin los datos que lo
hacen reservado. Búsquela antes de renunciar a la herramienta.

> ### La versión verde no la puede hacer una IA pública.
> Para que la anonimice, primero hay que dársela — y ahí ya salió. Se hace a mano, con una
> herramienta que no sea un modelo, dentro del entorno gobernado, o escribiendo un ejemplo
> sintético desde cero.

**Qué se va y qué se queda.** La distinción no es dato técnico contra dato administrativo, sino
**estándar público contra valor propio del proyecto**.

| Se va | Se queda |
|---|---|
| Número de contrato · nombre de la obra | Formatos de intercambio |
| Fechas absolutas → hitos relativos | Niveles de información exigidos |
| Coordenadas locales y desplazamiento del origen | Datum nacional (es público y obligatorio) |
| Cifras económicas · nombres de personas y empresas | Tolerancias y reglas genéricas |

> **La prueba no es haber tachado campos.** Es contestar: *¿podría alguien reconstruir de qué
> proyecto se trata?*

**Y ojo con borrar de más.** Un documento sobre-redactado ya no responde nada, y la conclusión
termina siendo "anonimizar no sirve". Anonimizar cambia **qué preguntas puede responder** el
documento: la versión verde sirve para ensayar un método, no para verificar si un plazo sigue
vigente.

---

## REVERSO

### La regla del documento vencido

> **En un contrato, la verdad no vive en un documento: vive en un documento
> MÁS todas las actas que lo modificaron.**

Una extracción puede ser impecable y estar mal, porque la fuente ya cambió y nadie emitió una
versión nueva. Pasa siempre: la modificación consta en el acta, no en el pliego.

**La validación humana no consiste en releer lo que la IA escribió.
Consiste en preguntar qué documento faltó.**

---

### Lista de chequeo — extracción de documentos técnicos

- [ ] ¿Cada fila de la matriz tiene su **numeral de origen** al lado?
- [ ] ¿Incluí las **actas y modificaciones**, o solo el documento principal?
- [ ] ¿Puedo volver de cualquier celda a su fuente en menos de un minuto?
- [ ] ¿Verifiqué una **muestra** antes de procesar todo el documento?
- [ ] Sin la columna de fuente, la matriz es *una opinión bien formateada*.

### Lista de chequeo — exportación de modelos

- [ ] ¿Las nomenclaturas son consistentes y están documentadas?
- [ ] ¿Exporté solo los parámetros necesarios?
- [ ] ¿Adjunté un **diccionario de campos**?
- [ ] ¿Revisé una muestra del export antes de entregarlo?
- [ ] Recordar: la información **sí estaba** en el modelo de autoría. Se perdió al salir.

---

### Shadow AI

**Shadow IT** — herramientas que la gente adopta por su cuenta, sin pasar por TI.
**Shadow AI** — lo mismo, pero cargando información del proyecto en herramientas públicas.

> El objetivo no es prohibir la IA: es **habilitarla con reglas**.
> Prohibir empuja a la gente al Shadow AI; gobernar la trae de vuelta.

Los contratos ya lo contemplan sin nombrar marcas. Redacción típica: *"aplica a cualquier
servicio de procesamiento automatizado o asistido, con independencia de su denominación
comercial"*.

---

### La frase

> **La IA no reemplaza el gobierno de datos: lo hace más urgente.**
> Velocidad sin control es riesgo; control sin velocidad es burocracia. El equilibrio es el trabajo.

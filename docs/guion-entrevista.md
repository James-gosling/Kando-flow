# Entrevista, ficha de dominio y bitácora — KandoFlow

**Entrevistador:** Rodrigo Valdespino Vértiz.  
**Dupla:** Emiliano Cabañas Prieto, proyecto Memorium.  
**Rol representado:** Asesora Comercial Senior en una agencia Mazda.  
**Sesión registrada:** 22 de septiembre de 2026, según la documentación previa.  
**Versión editorial:** 2.0, 29 de septiembre de 2026.

## 1. Alcance de la evidencia

La entrevista disponible es una simulación académica con la dupla. Se conserva [el documento previo completo](historico/entrevista-v1.md), con su guion aplicado y bitácora. No hay en el repositorio grabación, transcripción literal ni aprobación directa de la asesora real. Los hallazgos siguientes son paráfrasis del registro existente, no respuestas nuevas inventadas.

El guion del apartado 3 es una **revisión propuesta para una siguiente aplicación**: sustituye formulaciones que adelantaban problemas o soluciones. No se afirma que esta redacción ya haya sido aplicada. Para cerrar la evidencia de Nivel 4, la dupla debe aplicarlo y añadir respuestas o confirmar cuáles hallazgos siguen vigentes.

## 2. Ficha de dominio entregada a la dupla

Se preserva el contenido central de la ficha original: representar a una asesora de ventas Mazda que atiende piso y WhatsApp, prepara expedientes, coordina entregas y trabaja entre zonas con distinta conectividad. Debe responder desde su papel de negocio, describiendo hechos y evitando proponer tecnología.

| Aspecto | Contexto de la ficha original |
|---|---|
| Responsabilidad | Atender prospectos, preparar propuestas de financiamiento y coordinar entrega |
| Canales | Visitas en piso y documentos recibidos por WhatsApp |
| Participantes | Cliente, asesora, mesa de control, taller, administración |
| Entrega | Revisión de unidad, firma, develado, orientación técnica y salida |
| Entorno | Piso, patios y sótanos con conectividad variable |

**Precaución metodológica:** la ficha original anticipaba rechazos documentales y demoras del cotizador. Para la siguiente aplicación se entregará esta versión descriptiva y se permitirá que la dupla confirme o contradiga esas dificultades. La evidencia original permanece intacta en el histórico.

## 3. Guion revisado: cinco tramos con preguntas abiertas

### A. Contexto operativo

1. ¿Cómo transcurre un día de trabajo desde que llega el primer prospecto hasta que terminas tus entregas?
2. ¿Qué resultados revisan para evaluar tu trabajo y cómo influyen en tus prioridades?

### B. Proceso actual

3. Piensa en la última cotización que preparaste: ¿qué hiciste desde la solicitud hasta comunicar el resultado?
4. ¿Cómo integraste el expediente de tu último cliente y qué ocurrió con los documentos que recibiste?
5. Describe una entrega reciente: ¿quién participó y cómo supiste que estaba lista para terminar?

### C. Dolores y fricciones

6. ¿En qué partes de ese trabajo inviertes más tiempo y qué sucede ahí?
7. Cuéntame de una ocasión en que tuviste que repetir una tarea: ¿qué pasó y qué consecuencias tuvo?

### D. Excepciones

8. Describe una ocasión en que no pudiste seguir el proceso habitual: ¿cómo actuaste y cómo terminó?
9. ¿Qué situaciones pueden detener una entrega y cómo decides si puede continuar?

### E. Verificación de supuestos

10. Cuando un cliente modifica las condiciones de una propuesta, ¿cómo obtienes y compruebas los nuevos números?
11. ¿Cómo decides que un expediente está listo para enviarlo a revisión?
12. ¿Cómo confirmas que se completaron los pasos de una entrega y qué haces cuando falta alguno?
13. ¿Qué tareas puedes realizar en cada zona de la agencia y de qué recursos dependes?
14. ¿Qué aspecto de tu trabajo no hemos tratado y debería entender antes de diseñar una herramienta?

Repreguntas neutrales: «¿Puedes dar un ejemplo?», «¿Qué ocurrió después?», «¿Cómo lo comprobaste?». No introducir cifras de rendimiento ni sugerir PWA, cifrado o bases de datos durante las preguntas.

## 4. Bitácora de la sesión ya registrada

| ID | Hallazgo conservado del registro | Clasificación | Consecuencia en el análisis |
|---|---|---|---|
| H-01 | La simulación reporta demoras de 3 a 8 minutos para cotizaciones y uso de calculadora móvil | Confirmado por la dupla en rol; no medido en agencia | Cotización local RF-01; 500 ms sigue siendo meta técnica propuesta |
| H-02 | Se describen fotos con problemas de legibilidad, páginas faltantes y PDF protegidos | Confirmado por la dupla en rol | Incorporación RF-03, auditoría RF-04 y apertura autorizada RF-13 |
| H-03 | Se reportan zonas sin conectividad y anotaciones de VIN en papel | Confirmado por la dupla en rol | Operación local RNF-07 y sincronización RF-08/RF-17 |
| H-04 | Se descartó que la asesora pudiera llenar notas extensas frente al cliente | Supuesto previo refutado en la simulación | Checklist de un toque RF-06; controles táctiles RNF-05 |
| H-05 | Se descartó que el cliente quisiera una cuenta en una plataforma para seguir el trámite | Supuesto previo impreciso/refutado en la simulación | WhatsApp RF-02; portal del cliente excluido |
| H-06 | Surgió la necesidad de solicitudes impresas ante contingencias | Hallazgo inesperado registrado | Exportaciones RF-05 y RF-09 |
| H-07 | Se relacionaron omisiones y demoras de entrega con satisfacción y comisiones | Hallazgo inesperado registrado | Protocolo RF-06 e incidencias RF-07 |

## 5. Lo que sigue siendo supuesto

| ID | Supuesto pendiente de confirmar | Validación necesaria |
|---|---|---|
| S-01 | Tasas, plazos, enganche mínimo y método financiero | Revisar ejemplos autorizados con la asesora/financiera |
| S-02 | Documentos obligatorios, vigencia y revisión de legibilidad | Confirmar lista de mesa de control; no afirmar OCR automático |
| S-03 | Uso permitido de Drive/Sheets y política de conservación | Confirmar autorización corporativa y permisos de acceso |
| S-04 | Condiciones para reanudar una entrega con incidencia | Confirmar quién autoriza y qué problemas impiden entregar |
| S-05 | Datos del QR, agenda por bahía y reserva de demos | Validar reglas con la asesora y la agencia |
| S-06 | Metas de tiempos, cifrado, acceso y compatibilidad | Validar con pruebas técnicas y revisión de la usuaria |

## 6. Registro para la próxima validación

**Estado:** pendiente; no representa una sesión realizada.

Al aplicar el guion revisado, registrar fecha, participante/rol, preguntas realizadas, respuestas resumidas, desacuerdos con H-01 a H-07 y decisiones sobre S-01 a S-06. Si cambia un requisito, anotarlo en [control de cambios](control-cambios.md) y solicitar revisión de la dupla en [la especificación](especificacion-requisitos.md#revision-dupla).


## 7. Segunda entrevista — asesora real

**Estado:** [pendiente de aplicar]. Esta entrevista es distinta de la **simulación con la dupla**, registrada en los apartados 1–5. H-01 a H-07 conservan su origen histórico en aquella simulación. Preparar el guion no significa haberlo aplicado ni haber confirmado sus hallazgos con la asesora.

### 7.1. Guion listo para aplicar

**Apertura propuesta:** «Estoy realizando la toma de requerimientos de KandoFlow para Ingeniería de Software I. Me interesa conocer cómo trabajas actualmente, qué dificultades encuentras y cómo resuelves las excepciones. Puedes corregir cualquier idea previa; no hay respuestas esperadas. Primero escucharé tu experiencia y después contrastaremos los supuestos del proyecto».

Aplicar estas 14 preguntas del guion revisado, conservando su redacción y orden:

1. ¿Cómo transcurre un día de trabajo desde que llega el primer prospecto hasta que terminas tus entregas?
2. ¿Qué resultados revisan para evaluar tu trabajo y cómo influyen en tus prioridades?
3. Piensa en la última cotización que preparaste: ¿qué hiciste desde la solicitud hasta comunicar el resultado?
4. ¿Cómo integraste el expediente de tu último cliente y qué ocurrió con los documentos que recibiste?
5. Describe una entrega reciente: ¿quién participó y cómo supiste que estaba lista para terminar?
6. ¿En qué partes de ese trabajo inviertes más tiempo y qué sucede ahí?
7. Cuéntame de una ocasión en que tuviste que repetir una tarea: ¿qué pasó y qué consecuencias tuvo?
8. Describe una ocasión en que no pudiste seguir el proceso habitual: ¿cómo actuaste y cómo terminó?
9. ¿Qué situaciones pueden detener una entrega y cómo decides si puede continuar?
10. Cuando un cliente modifica las condiciones de una propuesta, ¿cómo obtienes y compruebas los nuevos números?
11. ¿Cómo decides que un expediente está listo para enviarlo a revisión?
12. ¿Cómo confirmas que se completaron los pasos de una entrega y qué haces cuando falta alguno?
13. ¿Qué tareas puedes realizar en cada zona de la agencia y de qué recursos dependes?
14. ¿Qué aspecto de tu trabajo no hemos tratado y debería entender antes de diseñar una herramienta?

Repreguntas neutrales: «¿Puedes dar un ejemplo?», «¿Qué ocurrió después?», «¿Cómo lo comprobaste?». No anticipar respuestas de la simulación ni sugerir cifras o soluciones como si ya estuvieran aceptadas. Después de las preguntas abiertas, contrastar H-01 a H-07 y S-01 a S-06 en los registros siguientes.

**Cierre propuesto:** «Voy a resumir lo que entendí. ¿Qué debería corregir o agregar? ¿Qué puntos requieren validación de otra persona o área?».

### 7.2. Bitácora de aplicación

| Campo | Registro |
|---|---|
| Tipo de sesión | Entrevista con la asesora real; no simulación con la dupla |
| Entrevistador previsto | Rodrigo Valdespino Vertiz |
| Fecha efectiva | [pendiente de aplicar] |
| Medio | [pendiente de aplicar] |
| Entrevistado: nombre y cargo confirmados | [pendiente de aplicar] |
| Evidencia proporcionada por el autor | [pendiente de aplicar] |
| Estado de aplicación | [pendiente de aplicar] |

| Pregunta | Respuesta resumida | Desacuerdos con H-01 a H-07 |
|---|---|---|
| 1. ¿Cómo transcurre un día de trabajo desde que llega el primer prospecto hasta que terminas tus entregas? | [pendiente de aplicar] | [pendiente de aplicar] |
| 2. ¿Qué resultados revisan para evaluar tu trabajo y cómo influyen en tus prioridades? | [pendiente de aplicar] | [pendiente de aplicar] |
| 3. Piensa en la última cotización que preparaste: ¿qué hiciste desde la solicitud hasta comunicar el resultado? | [pendiente de aplicar] | [pendiente de aplicar] |
| 4. ¿Cómo integraste el expediente de tu último cliente y qué ocurrió con los documentos que recibiste? | [pendiente de aplicar] | [pendiente de aplicar] |
| 5. Describe una entrega reciente: ¿quién participó y cómo supiste que estaba lista para terminar? | [pendiente de aplicar] | [pendiente de aplicar] |
| 6. ¿En qué partes de ese trabajo inviertes más tiempo y qué sucede ahí? | [pendiente de aplicar] | [pendiente de aplicar] |
| 7. Cuéntame de una ocasión en que tuviste que repetir una tarea: ¿qué pasó y qué consecuencias tuvo? | [pendiente de aplicar] | [pendiente de aplicar] |
| 8. Describe una ocasión en que no pudiste seguir el proceso habitual: ¿cómo actuaste y cómo terminó? | [pendiente de aplicar] | [pendiente de aplicar] |
| 9. ¿Qué situaciones pueden detener una entrega y cómo decides si puede continuar? | [pendiente de aplicar] | [pendiente de aplicar] |
| 10. Cuando un cliente modifica las condiciones de una propuesta, ¿cómo obtienes y compruebas los nuevos números? | [pendiente de aplicar] | [pendiente de aplicar] |
| 11. ¿Cómo decides que un expediente está listo para enviarlo a revisión? | [pendiente de aplicar] | [pendiente de aplicar] |
| 12. ¿Cómo confirmas que se completaron los pasos de una entrega y qué haces cuando falta alguno? | [pendiente de aplicar] | [pendiente de aplicar] |
| 13. ¿Qué tareas puedes realizar en cada zona de la agencia y de qué recursos dependes? | [pendiente de aplicar] | [pendiente de aplicar] |
| 14. ¿Qué aspecto de tu trabajo no hemos tratado y debería entender antes de diseñar una herramienta? | [pendiente de aplicar] | [pendiente de aplicar] |

Registrar respuestas y desacuerdos únicamente con lo que Rodrigo dicte o pegue después de la entrevista. No inferir «sin desacuerdos» de una respuesta ausente. No transformar paráfrasis en citas textuales.

### 7.3. Contraste de hallazgos de la simulación

| ID conservado | Hallazgo de la simulación a contrastar | Evidencia de la asesora | Clasificación tras entrevista | Corrección / desacuerdo | Requisitos afectados por revisar |
|---|---|---|---|---|---|
| H-01 | La simulación reporta demoras de 3 a 8 minutos para cotizaciones y uso de calculadora móvil | [pendiente de aplicar] | [pendiente de aplicar] | [pendiente de aplicar] | Cotización local RF-01; 500 ms sigue siendo meta técnica propuesta |
| H-02 | Se describen fotos con problemas de legibilidad, páginas faltantes y PDF protegidos | [pendiente de aplicar] | [pendiente de aplicar] | [pendiente de aplicar] | Incorporación RF-03, auditoría RF-04 y apertura autorizada RF-13 |
| H-03 | Se reportan zonas sin conectividad y anotaciones de VIN en papel | [pendiente de aplicar] | [pendiente de aplicar] | [pendiente de aplicar] | Operación local RNF-07 y sincronización RF-08/RF-17 |
| H-04 | Se descartó que la asesora pudiera llenar notas extensas frente al cliente | [pendiente de aplicar] | [pendiente de aplicar] | [pendiente de aplicar] | Checklist de un toque RF-06; controles táctiles RNF-05 |
| H-05 | Se descartó que el cliente quisiera una cuenta en una plataforma para seguir el trámite | [pendiente de aplicar] | [pendiente de aplicar] | [pendiente de aplicar] | WhatsApp RF-02; portal del cliente excluido |
| H-06 | Surgió la necesidad de solicitudes impresas ante contingencias | [pendiente de aplicar] | [pendiente de aplicar] | [pendiente de aplicar] | Exportaciones RF-05 y RF-09 |
| H-07 | Se relacionaron omisiones y demoras de entrega con satisfacción y comisiones | [pendiente de aplicar] | [pendiente de aplicar] | [pendiente de aplicar] | Protocolo RF-06 e incidencias RF-07 |

La clasificación se completará como **confirmado por la asesora**, **refutado** o **nuevo**, solo con evidencia suministrada. Un tema no abordado permanece pendiente. La columna de requisitos remite al análisis existente; no constituye una decisión nueva de la asesora.

| Hallazgo nuevo | Respuesta o evidencia de origen | Clasificación | Impacto propuesto | ID a incorporar |
|---|---|---|---|---|
| [pendiente de aplicar] | [pendiente de aplicar] | [pendiente de aplicar] | [pendiente de aplicar] | [pendiente de aplicar] |

No reutilizar ni renumerar H-01 a H-07. Cualquier ID adicional se avisará al autor antes de incorporarlo.

### 7.4. Confirmación, corrección o descarte de supuestos

| ID | Supuesto vigente | Validación necesaria | Decisión: confirmar / corregir / descartar | Respuesta o evidencia | Corrección / motivo de descarte | Impacto en requisitos y trazabilidad |
|---|---|---|---|---|---|---|
| S-01 | Tasas, plazos, enganche mínimo y método financiero | Revisar ejemplos autorizados con la asesora/financiera | [pendiente de aplicar] | [pendiente de aplicar] | [pendiente de aplicar] | [pendiente de aplicar] |
| S-02 | Documentos obligatorios, vigencia y revisión de legibilidad | Confirmar lista de mesa de control; no afirmar OCR automático | [pendiente de aplicar] | [pendiente de aplicar] | [pendiente de aplicar] | [pendiente de aplicar] |
| S-03 | Uso permitido de Drive/Sheets y política de conservación | Confirmar autorización corporativa y permisos de acceso | [pendiente de aplicar] | [pendiente de aplicar] | [pendiente de aplicar] | [pendiente de aplicar] |
| S-04 | Condiciones para reanudar una entrega con incidencia | Confirmar quién autoriza y qué problemas impiden entregar | [pendiente de aplicar] | [pendiente de aplicar] | [pendiente de aplicar] | [pendiente de aplicar] |
| S-05 | Datos del QR, agenda por bahía y reserva de demos | Validar reglas con la asesora y la agencia | [pendiente de aplicar] | [pendiente de aplicar] | [pendiente de aplicar] | [pendiente de aplicar] |
| S-06 | Metas de tiempos, cifrado, acceso y compatibilidad | Validar con pruebas técnicas y revisión de la usuaria | [pendiente de aplicar] | [pendiente de aplicar] | [pendiente de aplicar] | [pendiente de aplicar] |

La declaración de la asesora no sustituye autorizaciones corporativas, validaciones de la financiera ni pruebas técnicas necesarias. Registrar qué parte pudo confirmar y qué parte requiere otra evidencia.

### 7.5. Actualización posterior a la entrevista

Cuando Rodrigo aporte las respuestas reales:

1. Completar la bitácora solo con los datos comunicados, conservando pendientes donde falte información.
2. Clasificar hallazgos y desacuerdos sin borrar el origen de la simulación.
3. Confirmar, corregir o descartar S-01 a S-06 según la evidencia.
4. Actualizar los requisitos afectados, su origen y criterios que cambien; conservar IDs y avisar incorporaciones.
5. Actualizar la trazabilidad entre evidencia, requisitos, casos de uso y pantallas.
6. Registrar cambios y actualizar la versión que la dupla deberá revisar. Fecha, observaciones y dictamen solo se completan con información real de la dupla; la entrevista no implica aprobación.

**Revisión posterior por Emiliano Cabañas Prieto:** [pendiente: recibir la revisión real de la dupla sobre los cambios derivados de la entrevista].

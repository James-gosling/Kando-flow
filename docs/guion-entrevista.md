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

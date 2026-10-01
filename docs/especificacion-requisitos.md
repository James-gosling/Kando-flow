# Especificación de requisitos — KandoFlow

**Versión:** 2.0 · **Fecha:** 29 de septiembre de 2026  
**Autor:** Rodrigo Valdespino Vértiz · **Dupla:** Emiliano Cabañas Prieto  
**Estado:** propuesta consolidada para revisión; no es evidencia de software implementado.

## 1. Propósito, alcance y nomenclatura

Esta es la única especificación vigente. El [documento de visión](vision-del-producto.md) fija el alcance; los documentos de [histórico](historico/README.md) no constituyen requisitos adicionales. Se conserva la numeración RF-01 a RF-08 de la especificación v1.1 y se separan responsabilidades antes combinadas. La equivalencia con el otro catálogo se documenta en [control de cambios](control-cambios.md).

RF identifica una capacidad funcional; RNF, una condición de calidad; RN, una regla de negocio; CU, un objetivo de actor; SCR, una pantalla prevista. El PDF aportado contiene la rúbrica, no la plantilla de fichas del curso: estos campos deberán cotejarse con dicha plantilla si existe una distinta.

**Origen:** H-xx refiere a la [bitácora de simulación](guion-entrevista.md), no a confirmación directa del cliente real. S-xx identifica supuestos pendientes. Cada ficha tiene estado **Propuesto 2.0**; ninguna se etiqueta Implementado o Probado. Las prioridades ordenan trabajo y no eliminan requisitos del alcance.

## 2. Reglas de negocio propuestas

| ID | Regla |
|---|---|
| RN-01 | Cotización indicativa con enganche 10–80%, plazos 12/24/36/48/60/72 y tasa anual nominal no negativa. Cuota nivelada de capital/interés; seguros, comisiones e impuestos fuera del cálculo hasta validación de fórmula. No es oferta oficial ni CAT. |
| RN-02 | Expediente validado exige INE legible revisada, domicilio de ≤90 días y tres meses de estados de cuenta completos. Son reglas pendientes de confirmar con mesa de control. |
| RN-03 | La entrega sigue Fases 1–5; sin controles previos completos no se autoriza el pase. No existe botón para saltar validaciones. |
| RN-04 | Una incidencia pausa la entrega. Un problema de seguridad requiere resolución técnica; un detalle no crítico requiere acuerdo documentado o resolución antes de continuar. La conformidad del cliente no sustituye la inspección técnica. |
| RN-05 | Reserva demo requiere licencia vigente y al menos 20 minutos entre reservas del mismo vehículo. |

### Convención financiera de prueba

Capital P = precio × (1 − enganche); tasa mensual i = tasa anual nominal / 12; cuota = P × i / (1 − (1+i)^(-n)). Si i=0, cuota=P/n. Utilizar tasa decimal y redondear la cuota final a dos decimales. El ejemplo de RF-01 es un oráculo de prueba de esta convención propuesta, no una tasa comercial vigente.

## 3. Requisitos funcionales

<a id="rf-01"></a>
### RF-01 — Calcular cotización indicativa

- **Formulación:** El sistema debe calcular una cuota mensual indicativa con precio, enganche, plazo y tasa anual nominal capturados.
- **Origen y grado de confirmación:** H-01 (dupla en rol). Fórmula y límites S-01 pendientes con la financiera.
- **Prioridad:** Alta.
- **Estado:** Propuesto 2.0; revisión final pendiente.
- **Caso de uso:** CU-01.
- **Relaciones:** RN-01; RNF-01; SCR-01.
- **Criterio de aceptación:** Precio 450000, enganche 25%, plazo 48 y tasa nominal anual 12%: capital 337500 y cuota 8887.67 MXN, redondeada a dos decimales. Con tasa 0%, cuota 7031.25. Rechazar enganche fuera de 10–80%, plazo fuera de 12/24/36/48/60/72 y tasa negativa.

<a id="rf-02"></a>
### RF-02 — Preparar propuesta para WhatsApp

- **Formulación:** El sistema debe abrir una conversación de WhatsApp con el texto de la cotización activa precargado.
- **Origen y grado de confirmación:** H-05 (dupla en rol); codificación del enlace es decisión técnica.
- **Prioridad:** Alta.
- **Estado:** Propuesto 2.0; revisión final pendiente.
- **Caso de uso:** CU-01.
- **Relaciones:** RF-01; SCR-02; RNF-05.
- **Criterio de aceptación:** Con teléfono mexicano de 10 dígitos se forma el destino internacional 52 seguido del número y texto URL-encoded con modelo, precio, enganche, plazo, tasa y cuota; conservar acentos y símbolos. Un número inválido impide abrir el enlace. La acción no envía el mensaje automáticamente.

<a id="rf-03"></a>
### RF-03 — Incorporar documentos al expediente

- **Formulación:** El sistema debe incorporar archivos locales compatibles al expediente del prospecto, conservando el original y un registro de sus metadatos.
- **Origen y grado de confirmación:** H-02 (dupla en rol); formatos y límite de tamaño: S-06.
- **Prioridad:** Alta.
- **Estado:** Propuesto 2.0; revisión final pendiente.
- **Caso de uso:** CU-02.
- **Relaciones:** RF-13; RNF-02; RNF-03; SCR-03.
- **Criterio de aceptación:** Aceptar PDF, DOCX, XLSX, JPG y PNG de hasta 10 MB con tipo real compatible; rechazar extensión falsa y tamaño superior con motivo visible. Por archivo guardar ID, tipo, tamaño y prospecto. Extraer texto/celdas solo si existen; una imagen o PDF escaneado permanece como archivo con campos de captura manual, sin inventar texto OCR.

<a id="rf-04"></a>
### RF-04 — Auditar completitud del expediente

- **Formulación:** El sistema debe determinar el estado de completitud documental a partir de la lista obligatoria y la revisión humana de legibilidad.
- **Origen y grado de confirmación:** H-02 (dupla en rol); documentos y vigencias S-02.
- **Prioridad:** Alta.
- **Estado:** Propuesto 2.0; revisión final pendiente.
- **Caso de uso:** CU-03.
- **Relaciones:** RN-02; RNF-06; SCR-04.
- **Criterio de aceptación:** Falta de INE, domicilio mayor a 90 días o menos de tres meses de estados de cuenta produce Incompleto. Con archivos presentes y revisión humana pendiente: En revisión. Solo con todos los controles aprobados: Validado. A 90 días exactos el domicilio cumple. La interfaz comunica el motivo con texto, además del color.

<a id="rf-05"></a>
### RF-05 — Generar solicitud editable

- **Formulación:** El sistema debe generar una solicitud DOCX con los datos del prospecto y la cotización sobre una plantilla seleccionada.
- **Origen y grado de confirmación:** H-06 (dupla en rol); formato DOCX heredado del alcance.
- **Prioridad:** Alta.
- **Estado:** Propuesto 2.0; revisión final pendiente.
- **Caso de uso:** CU-04.
- **Relaciones:** RF-04; RF-14; RNF-10; SCR-05.
- **Criterio de aceptación:** Con expediente Validado y plantilla vigente, descargar un DOCX que abre sin error y contiene nombre, identificador del prospecto y valores de la cotización sin campos obligatorios vacíos. Con expediente no validado o plantilla ausente, bloquear y mostrar el motivo.

<a id="rf-06"></a>
### RF-06 — Controlar secuencia de entrega

- **Formulación:** El sistema debe controlar el avance del checklist de entrega en cinco fases consecutivas.
- **Origen y grado de confirmación:** H-04 y H-07 (dupla en rol); contenido exacto de fases S-04.
- **Prioridad:** Alta.
- **Estado:** Propuesto 2.0; revisión final pendiente.
- **Caso de uso:** CU-05.
- **Relaciones:** RN-03; RNF-05; RNF-07; SCR-08 a SCR-12.
- **Criterio de aceptación:** Una fase posterior permanece bloqueada mientras falte cualquier control obligatorio de la anterior. Registrar operador y fecha por confirmación. Con Fase 4 incompleta, no se habilita Fase 5. Una interrupción recupera la última confirmación guardada.

<a id="rf-07"></a>
### RF-07 — Gestionar incidencia de entrega

- **Formulación:** El sistema debe mantener una incidencia vinculada a la entrega desde su reporte hasta su resolución o aplazamiento acordado.
- **Origen y grado de confirmación:** H-07 y excepción del documento previo; política de resolución S-04.
- **Prioridad:** Alta.
- **Estado:** Propuesto 2.0; revisión final pendiente.
- **Caso de uso:** CU-06.
- **Relaciones:** RN-04; RF-06; RNF-07; SCR-14.
- **Criterio de aceptación:** Desde Fase 1 o 3, capturar área, descripción y evidencia disponible; la entrega queda Pausada. Registrar resolución técnica o acuerdo para detalle no crítico con responsable, fecha y conformidad del cliente. Daño que comprometa seguridad mantiene el bloqueo hasta resolución técnica. Sin evidencia fotográfica se registra el motivo.

<a id="rf-08"></a>
### RF-08 — Respaldar paquete en Drive

- **Formulación:** El sistema debe sincronizar un paquete finalizado a la carpeta corporativa de Google Drive autorizada.
- **Origen y grado de confirmación:** Decisión técnica de la visión; H-03 apoya diferir la operación, pero proveedor/autorización S-03.
- **Prioridad:** Media.
- **Estado:** Propuesto 2.0; revisión final pendiente.
- **Caso de uso:** CU-07.
- **Relaciones:** RNF-04; RNF-08; SCR-15.
- **Criterio de aceptación:** Sin red, paquete con ID y versión queda Pendiente. Tras reconexión y credenciales vigentes, queda Sincronizado y conserva ID remoto. Reintentar tres veces el mismo ID/versión no crea tres archivos. Si faltan permisos, conservar copia local e informar Error de autorización.

<a id="rf-09"></a>
### RF-09 — Exportar expediente consolidado

- **Formulación:** El sistema debe exportar un PDF consolidado de los documentos seleccionados de un expediente validado.
- **Origen y grado de confirmación:** H-06 (dupla en rol); indexación y nombre de archivo del resumen previo.
- **Prioridad:** Alta.
- **Estado:** Propuesto 2.0; revisión final pendiente.
- **Caso de uso:** CU-04.
- **Relaciones:** RF-04; RNF-10; SCR-05.
- **Criterio de aceptación:** El PDF contiene portada/índice y páginas de los documentos seleccionados en orden; identificar archivos no convertibles y detener exportación sin omitirlos silenciosamente. Nombre AAAA-MM_MODELO_APELLIDO_NOMBRE.pdf con caracteres seguros. Sin validación, bloquear exportación final.

<a id="rf-10"></a>
### RF-10 — Registrar prospecto

- **Formulación:** El sistema debe guardar una ficha de prospecto con un identificador único.
- **Origen y grado de confirmación:** Supuesto de la visión previa; no hay respuesta directa específica en la bitácora.
- **Prioridad:** Alta.
- **Estado:** Propuesto 2.0; revisión final pendiente.
- **Caso de uso:** CU-08.
- **Relaciones:** RNF-07; SCR-06.
- **Criterio de aceptación:** Nombre, teléfono mexicano de 10 dígitos, canal y modelo son obligatorios; correo es opcional y se valida si se captura. Guardar y recargar conserva los datos. Teléfono existente muestra coincidencias antes de permitir crear otra ficha; no fusionar personas automáticamente.

<a id="rf-11"></a>
### RF-11 — Programar entrega

- **Formulación:** El sistema debe registrar una entrega en agenda asociada a prospecto, vehículo, asesora y bahía.
- **Origen y grado de confirmación:** Supuesto de Requerimientos v1; S-05 pendiente de validar.
- **Prioridad:** Media.
- **Estado:** Propuesto 2.0; revisión final pendiente.
- **Caso de uso:** CU-09.
- **Relaciones:** RF-10; SCR-07.
- **Criterio de aceptación:** Guardar fecha, inicio, fin, VIN de 17 caracteres, modelo, color y bahía. Rechazar fin anterior al inicio y solapamiento en la misma bahía o asesora. Mostrar estados Pendiente, En curso, Pausada y Completada.

<a id="rf-12"></a>
### RF-12 — Emitir pase de salida

- **Formulación:** El sistema debe emitir un pase de salida con QR para una entrega autorizada por el checklist.
- **Origen y grado de confirmación:** Supuesto del resumen previo; S-05 pendiente con la agencia.
- **Prioridad:** Alta.
- **Estado:** Propuesto 2.0; revisión final pendiente.
- **Caso de uso:** CU-05.
- **Relaciones:** RN-03; RF-06; RF-07; SCR-13.
- **Criterio de aceptación:** Con Fases 1–4 completas, controles de Fase 5 completos y cero incidencias bloqueantes, generar un único pase por entrega con ID, VIN, fecha UTC y operador. Repetir acción devuelve el mismo pase. El QR solo codifica ID de pase y VIN, sin documentos personales; no implica un sistema antifraude ni verificación en caseta implementados.

<a id="rf-13"></a>
### RF-13 — Abrir PDF protegido con clave autorizada

- **Formulación:** El sistema debe abrir localmente un PDF protegido usando la contraseña facilitada por su titular.
- **Origen y grado de confirmación:** H-02 (dupla en rol); no se presupone que todos los bancos utilicen RFC.
- **Prioridad:** Media.
- **Estado:** Propuesto 2.0; revisión final pendiente.
- **Caso de uso:** CU-02.
- **Relaciones:** RF-03; RNF-03; SCR-03.
- **Criterio de aceptación:** Clave correcta permite incorporar el archivo; incorrecta muestra error sin perder el original. No almacenar ni registrar la clave, no enviarla a servicios externos y permitir cancelar. Sin contraseña válida, mantener el documento como Pendiente de apertura. No realizar búsqueda de contraseñas.

<a id="rf-14"></a>
### RF-14 — Administrar plantilla documental

- **Formulación:** El sistema debe permitir al administrador versionar una plantilla documental y sus campos de combinación.
- **Origen y grado de confirmación:** Supuesto de la visión; requiere validación administrativa.
- **Prioridad:** Media.
- **Estado:** Propuesto 2.0; revisión final pendiente.
- **Caso de uso:** CU-10.
- **Relaciones:** RF-05; RF-15; SCR-16.
- **Criterio de aceptación:** Administrador carga plantilla y mapea campos obligatorios; previsualización con datos ficticios sin campos sin resolver habilita su activación. Conservar versión anterior; asesora no puede activar una plantilla. Una solicitud ya generada conserva la versión con la que se produjo.

<a id="rf-15"></a>
### RF-15 — Controlar acceso por rol

- **Formulación:** El sistema debe restringir cada operación al rol de una sesión autenticada.
- **Origen y grado de confirmación:** Supuesto técnico de la visión; S-06.
- **Prioridad:** Alta.
- **Estado:** Propuesto 2.0; revisión final pendiente.
- **Caso de uso:** CU-11.
- **Relaciones:** RNF-03; RNF-09; SCR-17 y variantes, SCR-19 a SCR-23.
- **Actualización 2.1 (30/09/2026):** solicitud del autor tras observación de la docente; matriz de permisos en [casos de uso](casos-de-uso.md). No constituye validación de agencia ni aprobación de la dupla.
- **Criterio de aceptación:** Sin sesión no se permite leer ni modificar información comercial protegida. Credenciales válidas obtienen el rol de la cuenta: asesora accede a CU-01 a CU-09, CU-11 y CU-12; administrador únicamente a CU-07, CU-10 y CU-11. Una operación no permitida muestra Acceso denegado sin revelar datos ni cambiarlos. Comprobar también el alcance del registro, no solo el menú. El cliente solo confirma recepción o acepta/rechaza acuerdos no críticos de la entrega presentada, en vista temporal iniciada por la asesora; salir exige reautenticación de la asesora. Tras 15 minutos sin actividad se bloquea la sesión. Cerrar sesión revoca el acceso. Probar enlaces directos y solicitudes manipuladas en la implementación; Figma únicamente simula navegación y estado.

<a id="rf-16"></a>
### RF-16 — Reservar prueba de manejo

- **Formulación:** El sistema debe registrar una reserva de vehículo demo con licencia vigente y separación temporal suficiente.
- **Origen y grado de confirmación:** Supuesto explícito de la visión previa; S-05.
- **Prioridad:** Media.
- **Estado:** Propuesto 2.0; revisión final pendiente.
- **Caso de uso:** CU-12.
- **Relaciones:** RN-05; RF-10; SCR-18.
- **Criterio de aceptación:** Sin licencia registrada y vigente a la fecha de prueba, rechazar reserva. Rechazar traslape y margen menor de 20 minutos entre reservas del mismo demo; aceptar 20 minutos exactos. Capturar inicio y fin y conservar motivo de rechazo.

<a id="rf-17"></a>
### RF-17 — Sincronizar bitácora en Sheets

- **Formulación:** El sistema debe sincronizar un registro comercial finalizado con la hoja corporativa autorizada de Google Sheets.
- **Origen y grado de confirmación:** Decisión técnica heredada de RF-08 v1.1; S-03.
- **Prioridad:** Media.
- **Estado:** Propuesto 2.0; revisión final pendiente.
- **Caso de uso:** CU-07.
- **Relaciones:** RF-08; RNF-08; SCR-15.
- **Criterio de aceptación:** Fila incluye ID/versión, fecha, referencia del prospecto, VIN y estado; no incluir documentos ni claves. Tres reintentos de una versión dejan una sola fila lógica. Una versión remota incompatible se marca Conflicto y no sobrescribe silenciosamente.

## 4. Requisitos no funcionales

**Condiciones propuestas de prueba:** teléfono con 4 GB de RAM, datos de prueba ficticios, navegador/versión registrados, aplicación preparada y sin limitación artificial de CPU. Repetir con al menos un dispositivo iOS para compatibilidad. Registrar modelo, sistema, tamaño del corpus y duración; sin ese registro no se declara cumplida una métrica. Las cifras siguientes son metas técnicas S-06 pendientes de aceptación y pruebas.

<a id="rnf-01"></a>
### RNF-01 — Tiempo de cotización

- **Formulación y métrica:** El sistema debe recalcular y presentar la cuota en un máximo de 500 ms en al menos 95 de 100 cambios.
- **Método de verificación:** Medir desde cambio de entrada hasta siguiente render visible, sin peticiones de red; conjunto fijo de 100 escenarios en dispositivo de referencia.
- **Justificación del límite:** 500 ms es una meta propuesta para preservar la conversación; no procede de una medición de la entrevista.
- **Origen:** S-06, decisión técnica derivada del tipo de sistema y su contexto; no confirmación del cliente.
- **Prioridad:** Alta.
- **Estado:** Propuesto; prueba de implementación pendiente.
- **Relaciones:** RF-01.

<a id="rnf-02"></a>
### RNF-02 — Respuesta de ingesta

- **Formulación y métrica:** El sistema debe acusar la selección en menos de 200 ms y procesar un archivo de texto compatible de hasta 10 MB en 2 s o menos en al menos 19 de 20 pruebas.
- **Método de verificación:** Probar corpus de PDF con texto, DOCX, XLSX y metadatos JPEG/PNG. A los 2 s mostrar progreso si continúa y ofrecer cancelar; archivos cifrados se miden después de abrirlos. No incluye OCR.
- **Justificación del límite:** La meta busca evitar incertidumbre y mantener la interfaz utilizable; separar confirmación de finalización evita equiparar procesamiento con bloqueo de la interfaz.
- **Origen:** S-06, decisión técnica derivada del tipo de sistema y su contexto; no confirmación del cliente.
- **Prioridad:** Alta.
- **Estado:** Propuesto; prueba de implementación pendiente.
- **Relaciones:** RF-03; RF-13.

<a id="rnf-03"></a>
### RNF-03 — Confidencialidad local

- **Formulación y métrica:** El sistema debe cifrar los documentos y campos personales persistidos usando AES-GCM con clave de 256 bits y evitar secretos en registros.
- **Método de verificación:** Con sesión bloqueada inspeccionar IndexedDB: cero nombres, teléfonos y contenido documental legibles en texto plano; verificar IV distinto por cifrado y ausencia de claves en logs/almacenamiento sin protección. Prueba de acceso sin desbloqueo debe fallar.
- **Justificación del límite:** Decisión de diseño frente a pérdida del dispositivo. Se exige gestión de claves: derivación mediante mecanismo de desbloqueo, clave utilizable solo durante sesión y eliminación de memoria al bloquear; no se afirma que una ley imponga este algoritmo concreto.
- **Origen:** S-06, decisión técnica derivada del tipo de sistema y su contexto; no confirmación del cliente.
- **Prioridad:** Alta.
- **Estado:** Propuesto; prueba de implementación pendiente.
- **Relaciones:** RF-03; RF-15.

<a id="rnf-04"></a>
### RNF-04 — Confidencialidad de transmisión

- **Formulación y métrica:** El sistema debe usar HTTPS para el 100% de solicitudes externas y restringir destinos de documentos a Google Workspace autorizado.
- **Método de verificación:** Inspeccionar red durante ingesta: cero subidas. Durante sincronización, verificar únicamente destino corporativo autorizado y TLS 1.2 o superior; preferir 1.3. El enlace WhatsApp solo contiene la propuesta que revisa la asesora.
- **Justificación del límite:** Permite respaldo consentido sin enviar documentos a servicios de OCR/conversión. El mínimo es una propuesta técnica verificable; no se asegura una versión TLS que la PWA por sí sola no controla.
- **Origen:** S-06, decisión técnica derivada del tipo de sistema y su contexto; no confirmación del cliente.
- **Prioridad:** Alta.
- **Estado:** Propuesto; prueba de implementación pendiente.
- **Relaciones:** RF-02; RF-08; RF-17.

<a id="rnf-05"></a>
### RNF-05 — Ergonomía táctil

- **Formulación y métrica:** El sistema debe ofrecer áreas activas mínimas de 48 × 48 píxeles CSS para acciones y casillas del recorrido.
- **Método de verificación:** Inspeccionar cada control del flujo principal y alterno a viewport 390 × 844 y zoom 100%; cero controles por debajo del mínimo.
- **Justificación del límite:** Meta de facilidad de uso con una mano; es decisión del proyecto y no se atribuye falsamente a una medida exacta de WCAG.
- **Origen:** S-06, decisión técnica derivada del tipo de sistema y su contexto; no confirmación del cliente.
- **Prioridad:** Alta.
- **Estado:** Propuesto; prueba de implementación pendiente.
- **Relaciones:** RF-06; RF-07.

<a id="rnf-06"></a>
### RNF-06 — Legibilidad y comprensión

- **Formulación y métrica:** El sistema debe mantener contraste de al menos 4.5:1 para texto normal y acompañar estados con etiquetas textuales.
- **Método de verificación:** Medir combinaciones texto/fondo en todos los estados, incluidos error y deshabilitado que comunique información; recorrer validación usando etiquetas sin depender de rojo/verde.
- **Justificación del límite:** 4.5:1 se adopta como umbral de legibilidad; el color solo no comunica expedientes ni bloqueos a todos los usuarios.
- **Origen:** S-06, decisión técnica derivada del tipo de sistema y su contexto; no confirmación del cliente.
- **Prioridad:** Alta.
- **Estado:** Propuesto; prueba de implementación pendiente.
- **Relaciones:** RF-04; RF-06.

<a id="rnf-07"></a>
### RNF-07 — Continuidad local

- **Formulación y métrica:** El sistema debe conservar todas las confirmaciones guardadas y permitir cotización, expediente local y checklist sin conexión después de preparar la aplicación.
- **Método de verificación:** En modo avión guardar 20 cambios confirmados, cerrar/reabrir y recuperar 20/20 sin duplicidad. Cortar red en cada fase; el flujo local sigue. Fallo de almacenamiento debe impedir mostrar Guardado y explicar la causa.
- **Justificación del límite:** Cero pérdida de cambios confirmados es necesario para saber qué se verificó. Primera instalación, enlaces externos y sincronización quedan fuera del funcionamiento offline.
- **Origen:** S-06, decisión técnica derivada del tipo de sistema y su contexto; no confirmación del cliente.
- **Prioridad:** Alta.
- **Estado:** Propuesto; prueba de implementación pendiente.
- **Relaciones:** RF-01; RF-03; RF-06; RF-07; RF-10.

<a id="rnf-08"></a>
### RNF-08 — Integridad de sincronización

- **Formulación y métrica:** El sistema debe evitar pérdida silenciosa y duplicación lógica al reintentar sincronizaciones.
- **Método de verificación:** Ejecutar 20 transacciones con tres interrupciones cada una: 20 IDs únicos locales/remotos, cero sobrescrituras silenciosas y cola vacía al terminar. Con red de 10 Mbps y sesión válida, iniciar intento en ≤5 s tras detectar reconexión; no confundir inicio con tiempo total de subida.
- **Justificación del límite:** La integridad pesa más que el envío inmediato; separar ID de entidad y versión permite detectar conflictos.
- **Origen:** S-06, decisión técnica derivada del tipo de sistema y su contexto; no confirmación del cliente.
- **Prioridad:** Alta.
- **Estado:** Propuesto; prueba de implementación pendiente.
- **Relaciones:** RF-08; RF-17.

<a id="rnf-09"></a>
### RNF-09 — Compatibilidad y accesibilidad de operación

- **Formulación y métrica:** El sistema debe permitir completar el flujo principal y alterno en Chromium 110+ y Safari 16.4+, con anchos de 390 y 1280 píxeles CSS, y mediante teclado.
- **Método de verificación:** Ejecutar matriz de navegador/viewport: cero acciones inaccesibles, cero desplazamiento horizontal necesario; foco visible y orden lógico. Primera autenticación requiere red; desbloqueo local debe probarse por plataforma antes de aprobar.
- **Justificación del límite:** Cubre móvil/escritorio y entrada alternativa. Versiones mínimas son objetivos de compatibilidad propuestos, no resultados de pruebas ya realizadas.
- **Origen:** S-06, decisión técnica derivada del tipo de sistema y su contexto; no confirmación del cliente.
- **Prioridad:** Alta.
- **Estado:** Propuesto; prueba de implementación pendiente.
- **Relaciones:** RF-06; RF-07; RF-15.

<a id="rnf-10"></a>
### RNF-10 — Integridad y tiempo de exportación

- **Formulación y métrica:** El sistema debe preservar todos los campos y páginas seleccionados al generar documentos finales.
- **Método de verificación:** Con plantilla de dos páginas y expediente de cinco páginas hasta 5 MB, exportar en ≤3 s en 19/20 pruebas; cotejar 100% de campos y páginas, abrir DOCX/PDF sin errores. Si no puede convertir un archivo, mostrar fallo y no anunciar éxito.
- **Justificación del límite:** El límite ofrece respuesta rápida para firma y el cotejo impide expedientes aparentemente completos con páginas omitidas.
- **Origen:** S-06, decisión técnica derivada del tipo de sistema y su contexto; no confirmación del cliente.
- **Prioridad:** Alta.
- **Estado:** Propuesto; prueba de implementación pendiente.
- **Relaciones:** RF-05; RF-09.

<a id="rnf-11"></a>
### RNF-11 — Mantenibilidad

- **Formulación y métrica:** El sistema debe aislar reglas financieras y de entrega de componentes de interfaz y conectores externos.
- **Método de verificación:** Revisar dependencias: cero imports de UI/Google dentro del módulo de reglas; cambiar una tasa configurada sin editar componentes y ejecutar pruebas de fórmula/estados.
- **Justificación del límite:** El sistema transaccional cambia tasas y políticas; el límite evita que un ajuste de negocio exija modificar pantallas.
- **Origen:** S-06, decisión técnica derivada del tipo de sistema y su contexto; no confirmación del cliente.
- **Prioridad:** Alta.
- **Estado:** Propuesto; prueba de implementación pendiente.
- **Relaciones:** RF-01; RF-06; RF-14.

## 5. Cobertura y validación

Consultar [trazabilidad](trazabilidad.md), [casos de uso](casos-de-uso.md) y [recorridos del prototipo](prototipo.md). Figma permite evaluar comprensión de estados y rutas, no demostrar los tiempos, cifrado, red o persistencia especificados. Estos últimos quedan como criterios para una futura implementación.

<a id="revision-dupla"></a>
## 6. Revisión de la dupla

### Registro previo conservado

La [especificación v1.1](historico/especificacion-v1.1.md) registra a **Emiliano Cabañas Prieto**, fecha **22 de septiembre de 2026**, con dictamen **«APROBADO SIN OBSERVACIONES BLOQUEANTES»**. Sus observaciones tratan la relación entrevista/requisitos, el flujo alterno de incidencias y las métricas RNF. Se conserva como registro histórico proporcionado por el autor; no se ha autenticado una firma independiente.

### Revisión de la versión 2.0

**Estado: pendiente.** La aprobación previa no cubre automáticamente la reestructuración del 29 de septiembre. El requisito previo de entrega exige que la dupla revise esta versión y registre el resultado real antes de presentarla.

| Campo | Registro |
|---|---|
| Revisor | Emiliano Cabañas Prieto, sujeto a confirmación del participante |
| Fecha efectiva de revisión | Pendiente de registrar |
| Versión / commit revisado | Pendiente de registrar |
| Hallazgos de revisión | Pendiente de registrar |
| Cambios solicitados y atendidos | Pendiente de registrar |
| Dictamen y conformidad | Pendiente; no se atribuye una aprobación nueva |

La revisión debe comprobar orígenes H/S, aceptación por RF, métricas RNF, relaciones del diagrama, alternos de CU-05 y navegación real. Registrar discrepancias en [control de cambios](control-cambios.md).


## Adenda de versión 2.1 — Acceso por rol

30 de septiembre de 2026: se precisa RF-15 y CU-11. Los demás requisitos conservan su numeración. La revisión final de la dupla debe incluir esta adenda; permanece pendiente.



## Cotejo con la plantilla del curso — pendiente

**Estado:** [pendiente: adjuntar la plantilla/instrucciones completas del curso y, si corresponde, el documento consolidado cuyas secciones 4, 5 y 6 se desea ajustar].

No se ha realizado el cotejo de campos, nomenclatura RF/RNF/CU ni estructura de fichas contra la plantilla, porque no está disponible en esta solicitud. Se conservan fichas, IDs y enlaces. En el repositorio, RF y RNF están en este archivo y los CU en casos-de-uso.md; esa distribución no identifica por sí sola las secciones 4–6 del documento consolidado mencionado.

Al recibir la plantilla, se registrará por campo: denominación exigida, correspondencia con el contenido existente, ajuste de formato y dato faltante como [pendiente: qué falta]. No se deducirán campos exigidos ni se declarará conformidad sin revisar la fuente.

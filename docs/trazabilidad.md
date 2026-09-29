# Matriz de trazabilidad — KandoFlow 2.0

## 1. Lectura de la matriz

La columna Origen remite a [hallazgos H y supuestos S](guion-entrevista.md). Los criterios completos y sus métodos están en [especificación](especificacion-requisitos.md). Las pantallas SCR están creadas en el Figma Design enlazado en [prototipo](prototipo.md). Representan interacciones con datos ficticios, no una implementación real de los servicios. Estado documental de todos los RF: propuesta consolidada; revisión 2.0 pendiente.

## 2. RF → objetivo de uso → interfaz → aceptación

| RF | Origen / confirmación | CU | Pantalla de prototipo | Comprobación representativa |
|---|---|---|---|---|
| [RF-01](especificacion-requisitos.md#rf-01) Calcular cotización indicativa | H-01 (dupla en rol). Fórmula y límites S-01 pendientes con la financiera. | CU-01 | SCR-01, SCR-02 | Precio 450000, enganche 25%, plazo 48 y tasa nominal anual 12%: capital 337500 y cuota 8887.67 MXN, redondeada a dos decimales |
| [RF-02](especificacion-requisitos.md#rf-02) Preparar propuesta para WhatsApp | H-05 (dupla en rol); codificación del enlace es decisión técnica. | CU-01 | SCR-01, SCR-02 | Con teléfono mexicano de 10 dígitos se forma el destino internacional 52 seguido del número y texto URL-encoded con modelo, precio, enganche, plazo, tasa y cuota; conservar acentos y símbolos |
| [RF-03](especificacion-requisitos.md#rf-03) Incorporar documentos al expediente | H-02 (dupla en rol); formatos y límite de tamaño: S-06. | CU-02 | SCR-03 | Aceptar PDF, DOCX, XLSX, JPG y PNG de hasta 10 MB con tipo real compatible; rechazar extensión falsa y tamaño superior con motivo visible |
| [RF-04](especificacion-requisitos.md#rf-04) Auditar completitud del expediente | H-02 (dupla en rol); documentos y vigencias S-02. | CU-03 | SCR-04 | Falta de INE, domicilio mayor a 90 días o menos de tres meses de estados de cuenta produce Incompleto |
| [RF-05](especificacion-requisitos.md#rf-05) Generar solicitud editable | H-06 (dupla en rol); formato DOCX heredado del alcance. | CU-04 | SCR-05 | Con expediente Validado y plantilla vigente, descargar un DOCX que abre sin error y contiene nombre, identificador del prospecto y valores de la cotización sin campos obligatorios vacíos |
| [RF-06](especificacion-requisitos.md#rf-06) Controlar secuencia de entrega | H-04 y H-07 (dupla en rol); contenido exacto de fases S-04. | CU-05 | SCR-08 a SCR-13 | Una fase posterior permanece bloqueada mientras falte cualquier control obligatorio de la anterior |
| [RF-07](especificacion-requisitos.md#rf-07) Gestionar incidencia de entrega | H-07 y excepción del documento previo; política de resolución S-04. | CU-06 | SCR-14 | Desde Fase 1 o 3, capturar área, descripción y evidencia disponible; la entrega queda Pausada |
| [RF-08](especificacion-requisitos.md#rf-08) Respaldar paquete en Drive | Decisión técnica de la visión; H-03 apoya diferir la operación, pero proveedor/autorización S-03. | CU-07 | SCR-15 | Sin red, paquete con ID y versión queda Pendiente |
| [RF-09](especificacion-requisitos.md#rf-09) Exportar expediente consolidado | H-06 (dupla en rol); indexación y nombre de archivo del resumen previo. | CU-04 | SCR-05 | El PDF contiene portada/índice y páginas de los documentos seleccionados en orden; identificar archivos no convertibles y detener exportación sin omitirlos silenciosamente |
| [RF-10](especificacion-requisitos.md#rf-10) Registrar prospecto | Supuesto de la visión previa; no hay respuesta directa específica en la bitácora. | CU-08 | SCR-06 | Nombre, teléfono mexicano de 10 dígitos, canal y modelo son obligatorios; correo es opcional y se valida si se captura |
| [RF-11](especificacion-requisitos.md#rf-11) Programar entrega | Supuesto de Requerimientos v1; S-05 pendiente de validar. | CU-09 | SCR-07 | Guardar fecha, inicio, fin, VIN de 17 caracteres, modelo, color y bahía |
| [RF-12](especificacion-requisitos.md#rf-12) Emitir pase de salida | Supuesto del resumen previo; S-05 pendiente con la agencia. | CU-05 | SCR-08 a SCR-13 | Con Fases 1–4 completas, controles de Fase 5 completos y cero incidencias bloqueantes, generar un único pase por entrega con ID, VIN, fecha UTC y operador |
| [RF-13](especificacion-requisitos.md#rf-13) Abrir PDF protegido con clave autorizada | H-02 (dupla en rol); no se presupone que todos los bancos utilicen RFC. | CU-02 | SCR-03 | Clave correcta permite incorporar el archivo; incorrecta muestra error sin perder el original |
| [RF-14](especificacion-requisitos.md#rf-14) Administrar plantilla documental | Supuesto de la visión; requiere validación administrativa. | CU-10 | SCR-16 | Administrador carga plantilla y mapea campos obligatorios; previsualización con datos ficticios sin campos sin resolver habilita su activación |
| [RF-15](especificacion-requisitos.md#rf-15) Controlar acceso por rol | Supuesto técnico de la visión; S-06. | CU-11 | SCR-17 | Sin sesión se impide abrir expedientes |
| [RF-16](especificacion-requisitos.md#rf-16) Reservar prueba de manejo | Supuesto explícito de la visión previa; S-05. | CU-12 | SCR-18 | Sin licencia registrada y vigente a la fecha de prueba, rechazar reserva |
| [RF-17](especificacion-requisitos.md#rf-17) Sincronizar bitácora en Sheets | Decisión técnica heredada de RF-08 v1.1; S-03. | CU-07 | SCR-15 | Fila incluye ID/versión, fecha, referencia del prospecto, VIN y estado; no incluir documentos ni claves |

## 3. Calidad derivada del tipo de sistema

| RNF | Atributo necesario | RF asociados | Evidencia de aceptación |
|---|---|---|---|
| [RNF-01](especificacion-requisitos.md#rnf-01) | Tiempo de cotización | RF-01 | Medir desde cambio de entrada hasta siguiente render visible, sin peticiones de red; conjunto fijo de 100 escenarios en dispositivo de referencia. |
| [RNF-02](especificacion-requisitos.md#rnf-02) | Respuesta de ingesta | RF-03; RF-13 | Probar corpus de PDF con texto, DOCX, XLSX y metadatos JPEG/PNG. A los 2 s mostrar progreso si continúa y ofrecer cancelar; archivos cifrados se miden después de abrirlos. No incluye OCR. |
| [RNF-03](especificacion-requisitos.md#rnf-03) | Confidencialidad local | RF-03; RF-15 | Con sesión bloqueada inspeccionar IndexedDB: cero nombres, teléfonos y contenido documental legibles en texto plano; verificar IV distinto por cifrado y ausencia de claves en logs/almacenamiento sin protección. Prueba de acceso sin desbloqueo debe fallar. |
| [RNF-04](especificacion-requisitos.md#rnf-04) | Confidencialidad de transmisión | RF-02; RF-08; RF-17 | Inspeccionar red durante ingesta: cero subidas. Durante sincronización, verificar únicamente destino corporativo autorizado y TLS 1.2 o superior; preferir 1.3. El enlace WhatsApp solo contiene la propuesta que revisa la asesora. |
| [RNF-05](especificacion-requisitos.md#rnf-05) | Ergonomía táctil | RF-06; RF-07 | Inspeccionar cada control del flujo principal y alterno a viewport 390 × 844 y zoom 100%; cero controles por debajo del mínimo. |
| [RNF-06](especificacion-requisitos.md#rnf-06) | Legibilidad y comprensión | RF-04; RF-06 | Medir combinaciones texto/fondo en todos los estados, incluidos error y deshabilitado que comunique información; recorrer validación usando etiquetas sin depender de rojo/verde. |
| [RNF-07](especificacion-requisitos.md#rnf-07) | Continuidad local | RF-01; RF-03; RF-06; RF-07; RF-10 | En modo avión guardar 20 cambios confirmados, cerrar/reabrir y recuperar 20/20 sin duplicidad. Cortar red en cada fase; el flujo local sigue. Fallo de almacenamiento debe impedir mostrar Guardado y explicar la causa. |
| [RNF-08](especificacion-requisitos.md#rnf-08) | Integridad de sincronización | RF-08; RF-17 | Ejecutar 20 transacciones con tres interrupciones cada una: 20 IDs únicos locales/remotos, cero sobrescrituras silenciosas y cola vacía al terminar. Con red de 10 Mbps y sesión válida, iniciar intento en ≤5 s tras detectar reconexión; no confundir inicio con tiempo total de subida. |
| [RNF-09](especificacion-requisitos.md#rnf-09) | Compatibilidad y accesibilidad de operación | RF-06; RF-07; RF-15 | Ejecutar matriz de navegador/viewport: cero acciones inaccesibles, cero desplazamiento horizontal necesario; foco visible y orden lógico. Primera autenticación requiere red; desbloqueo local debe probarse por plataforma antes de aprobar. |
| [RNF-10](especificacion-requisitos.md#rnf-10) | Integridad y tiempo de exportación | RF-05; RF-09 | Con plantilla de dos páginas y expediente de cinco páginas hasta 5 MB, exportar en ≤3 s en 19/20 pruebas; cotejar 100% de campos y páginas, abrir DOCX/PDF sin errores. Si no puede convertir un archivo, mostrar fallo y no anunciar éxito. |
| [RNF-11](especificacion-requisitos.md#rnf-11) | Mantenibilidad | RF-01; RF-06; RF-14 | Revisar dependencias: cero imports de UI/Google dentro del módulo de reglas; cambiar una tasa configurada sin editar componentes y ejecutar pruebas de fórmula/estados. |

Los límites son propuestas técnicas, no resultados medidos. Usabilidad visual puede revisarse en Figma; red, criptografía, persistencia y tiempos requieren implementación. Así se evita atribuir a un prototipo evidencia que no puede producir.

## 4. Hilo que debe sostener el video

| Eslabón | Evidencia |
|---|---|
| Problema y alcance | Reducir omisiones y documentar la entrega; visión, sección 3 |
| Elicitación | H-04: notas extensas interrumpen atención; H-07: efecto de omisiones; simulación académica |
| Requisito funcional | RF-06 secuencia; RF-07 incidencia; RF-12 pase condicionado |
| Condición de calidad | RNF-05 controles táctiles; RNF-07 continuidad local propuesta |
| Caso de uso | CU-05 principal; CU-06/FA-02 por daño o faltante; FA-01 por paso incompleto |
| Prototipo | SCR-07 a SCR-13 para principal; SCR-14 para alterno; conexiones comprobadas por simulación de reacciones; prueba manual pendiente |
| Validación | V-01 completa entrega; V-02 impide salto; V-03 retoma tras acuerdo; V-04 suspende sin pase |
| Revisión | Registro de la dupla sobre la versión 2.0, todavía pendiente |

## 5. Cobertura y límites

Todos los RF tienen CU y pantalla prevista; todos los CU del diagrama tienen al menos un RF. Las vistas de apoyo están enlazadas para contextualizar funciones fuera de la entrega; contienen ejemplos fijos, sin ejecución de servicios reales. Figma debe validar al menos el flujo principal completo y uno alterno para satisfacer la rúbrica; el video debe mostrar este hilo explícitamente.

Las relaciones previas incompatibles se conservaron solo en [histórico](historico/README.md); su migración está en [control de cambios](control-cambios.md).

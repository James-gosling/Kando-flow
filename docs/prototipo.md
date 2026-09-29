# Prototipo y recorrido de validación

**Versión de referencia documental:** 2.0 · 29 de septiembre de 2026.

## 1. Acceso y estado real

- [Canvas editable de Figma Design](https://www.figma.com/design/ZuGRFCYIXklddDeCfIklz8?node-id=8-77).
- [Presentar desde SCR-07](https://www.figma.com/proto/ZuGRFCYIXklddDeCfIklz8?node-id=3-9&starting-point-node-id=3%3A9).
- [Make original, conservado como referencia](https://www.figma.com/make/TY4sQ7cz0vhuAj6bc0QSdU/3-Screen-Mobile-Workflow?t=hteUfOLOtM9mPyaq-1).

**Versión de diseño:** 29 de septiembre de 2026. Se crearon 22 pantallas nativas, componentes reutilizables, variables de estado y una guía en el canvas. No son capturas planas. La reconstrucción parte de esta especificación: el conector devolvió el inventario de fuentes de Make, pero no permitió leerlas completas; no se afirma una conversión visual exacta del original.

**Verificación realizada:** revisión visual de composiciones representativas, comprobación de dimensiones y evaluación de las reacciones nativas leídas del archivo. Los 20 escenarios evaluados pasaron; se encontraron 63 nodos con interacción, cero destinos rotos, cero controles de interacción no textuales menores de 48 × 48 px y cero desbordamientos de los hijos principales. Todas las pantallas usan texto editable Inter y no contienen una imagen plana de la interfaz.

**Pendiente:** probar manualmente en Presentar desde la cuenta del autor y el enlace como evaluador. La evaluación de reacciones no equivale a haber pulsado cada pantalla en el reproductor de Figma. Tampoco prueba persistencia, APIs, cifrado, autenticación ni generación real de documentos.

## 2. Inventario canónico de pantallas creadas

| ID | Nombre | Propósito / RF | Cobertura del parcial |
|---|---|---|---|
| SCR-01 | Cotizador | Entradas y cuota indicativa; RF-01 | Vista de apoyo creada |
| SCR-02 | Propuesta WhatsApp | Vista previa del texto; RF-02 | Vista de apoyo creada |
| SCR-03 | Ingesta documental | Selección de archivo/clave y errores; RF-03, RF-13 | Vista de apoyo creada |
| SCR-04 | Auditoría | Lista de documentos y motivos del estado; RF-04 | Vista de apoyo creada |
| SCR-05 | Exportación | DOCX/PDF y bloqueos; RF-05, RF-09 | Vista de apoyo creada |
| SCR-06 | Prospecto | Datos mínimos; RF-10 | Vista de apoyo creada |
| SCR-07 | Agenda de entregas | Lista, datos de unidad y estados; RF-11 | Inicio del recorrido obligatorio CU-05 |
| SCR-08 | Fase 1: preparación | PDI y documentación; RF-06 | Recorrido obligatorio |
| SCR-09 | Fase 2: bienvenida | Firma y cotejo; RF-06 | Recorrido obligatorio |
| SCR-10 | Fase 3: inspección | Carrocería y accesorios; RF-06 | Recorrido obligatorio y salida a alterno |
| SCR-11 | Fase 4: orientación | Controles técnicos; RF-06 | Recorrido obligatorio y bloqueo |
| SCR-12 | Fase 5: recepción | Llaves, manuales, confirmación; RF-06 | Recorrido obligatorio |
| SCR-13 | Pase y cierre | Resultado Completada y pase ficticio; RF-12 | Final del recorrido obligatorio |
| SCR-14 | Incidencia | Reporte, pausa, acuerdo/resolución; RF-07 | Alterno obligatorio CU-06 |
| SCR-15 | Sincronización | Pendiente / Sincronizado / Error / Conflicto; RF-08, RF-17 | Estado ilustrativo, integración futura |
| SCR-16 | Plantillas | Versión y campos; RF-14 | Vista de apoyo creada |
| SCR-17 | Acceso | Inicio/desbloqueo; RF-15 | Precondición ilustrativa |
| SCR-18 | Reserva demo | Licencia y agenda; RF-16 | Vista de apoyo creada |

Los identificadores SCR son estables y diferentes de los IDs internos de Figma. SCR-14 se desdobla en reporte (3:247), acuerdo (3:272) y pausa (3:292). Se agregan SCR-07P (3:510, agenda pausada) y SCR-07C (8:93, completada): 22 pantallas en total. El recorrido principal empieza en SCR-07 (3:9); el pase es SCR-13 (3:227). Las vistas comerciales usan datos de ejemplo y no ejecutan procesos reales.

## 3. Comportamiento que debe navegarse

| Desde | Acción / condición | Destino y efecto |
|---|---|---|
| SCR-07 | Seleccionar entrega e iniciar | SCR-08; En curso |
| SCR-08 | Completar controles y Continuar | SCR-09 |
| SCR-09 | Completar controles y Continuar | SCR-10 |
| SCR-10 | Completar inspección y Continuar | SCR-11 |
| SCR-11 | Completar controles aplicables y Continuar | SCR-12 |
| SCR-12 | Confirmar recepción y Emitir pase | SCR-13; Completada |
| Cualquier fase | Intentar continuar con un obligatorio vacío | Misma pantalla; aviso de controles pendientes y avance bloqueado |
| SCR-08 / SCR-10 | Reportar incidencia | SCR-14; conservar fase de origen |
| SCR-14 | Guardar reporte | Estado Pausada; controles de reanudación condicionados |
| SCR-14 | Cancelar antes de guardar | Fase de origen, sin incidencia nueva |
| SCR-14 | Registrar acuerdo válido de detalle no crítico | Volver a fase de origen; controles restantes pendientes |
| SCR-14 | Daño de seguridad no resuelto o acuerdo rechazado | SCR-07 con entrega Pausada, sin pase |
| SCR-13 | Volver a agenda | SCR-07 con Completada |
| SCR-07 | Restablecer escenario de demostración | Estado ficticio inicial para repetir recorrido |

En Figma se pueden usar variantes/pantallas para representar los estados; deben poder alcanzarse mediante clics. En esta versión, «Validar y continuar» ejecuta una condición: si falta una casilla, permanece en la fase y muestra el aviso. El botón no se representa como deshabilitado; lo que se bloquea es la navegación. El pase exige los 16 controles de las cinco fases y ausencia de incidencia activa. No existe enlace oculto para saltar el bloqueo.

## 4. Datos ficticios y componentes

Usar «Cliente de demostración», modelo de muestra, VIN ficticio de 17 caracteres `DEMO0000000000001`, fecha de demostración y bahía A. Evitar identificaciones, estados bancarios o datos reales. El pase debe mostrar «DEMO — sin validez operativa».

Componentes mínimos: encabezado con fase, lista de controles, estado con texto e icono, botón Continuar, Reportar incidencia y Volver; modal/formulario de incidencia con Cancelar y Guardar. Incluir señal de Pausada y razón. Controles ≥48×48 píxeles; texto normal con contraste ≥4.5:1. El prototipo debe ilustrar los estados offline sin afirmar que realmente guarda datos al cerrar.

## 5. Prueba de navegación para registrar

| Prueba | Evidencia requerida | Resultado actual |
|---|---|---|
| Acceso externo | Abrir enlace como evaluador | Pendiente |
| V-01 Principal | Agenda → cinco fases → pase → agenda completada | Lógica comprobada; Presentar pendiente |
| V-02 Bloqueo | Control vacío impide avanzar; pase revalida todas las fases | Lógica comprobada; Presentar pendiente |
| V-03 Alterno retomable | Incidencia Fase 3 → acuerdo → retorno Fase 3 con avances conservados | Lógica comprobada; Presentar pendiente |
| V-04 Alterno suspendido | Daño bloqueante → Pausada, sin pase | Lógica comprobada; Presentar pendiente |
| V-05 Offline ilustrativo | SCR-15 muestra respaldo pendiente de conexión | Vista ilustrativa creada; operación offline no implementada |

Después de probar, registrar fecha, versión/enlace, persona y resultado observado. Si falla, anotar el problema y corregir antes de sustituir Pendiente por Verificado.

## 6. Guía breve de prueba

1. Abrir Presentar desde la agenda y seleccionar Iniciar entrega.
2. Intentar continuar sin marcar un control: debe aparecer el aviso sin cambiar de fase.
3. Marcar los controles y recorrer las cinco fases para emitir el pase DEMO.
4. Volver a la agenda completada y pulsar Reiniciar demostración.
5. En Fase 3, Reportar incidencia → Guardar → Aceptar acuerdo: debe volver a la misma fase.
6. Repetir con Reportar daño de seguridad: debe permanecer Pausada sin pase. Reiniciar demostración solo restablece el escenario ficticio; no es una excepción operativa.

El QR del pase codifica únicamente `DEMO|KF-DEMO-001|DEMO0000000000001`. No tiene validez operativa. Para obtener una copia `.fig`, el propietario puede guardar una copia local desde Figma; esta entrega crea el archivo nativo en la cuenta, no un adjunto binario `.fig`.

# Prototipo y recorrido de validación

**Versión de referencia documental:** 2.0 · 29 de septiembre de 2026.

## 1. Acceso y estado real

[Abrir el Figma enlazado en el proyecto](https://www.figma.com/make/TY4sQ7cz0vhuAj6bc0QSdU/3-Screen-Mobile-Workflow?t=hteUfOLOtM9mPyaq-1).

**Estado: navegación no verificada.** El enlace procede de la especificación original; el lector disponible no pudo abrirlo durante esta revisión. No se afirma que las pantallas de abajo existan ya en ese archivo. Este documento especifica lo que debe comprobarse o ajustarse en Figma. No se ha creado un prototipo alternativo fuera de Figma.

Antes de entregar: abrir el enlace con una cuenta distinta o en ventana privada, comprobar que el evaluador puede recorrerlo y actualizar aquí el enlace de presentación definitivo si cambia. La entrega pide prototipo navegable; disponer de un enlace por sí solo no acredita navegación.

## 2. Inventario canónico de pantallas previstas

| ID | Nombre | Propósito / RF | Cobertura del parcial |
|---|---|---|---|
| SCR-01 | Cotizador | Entradas y cuota indicativa; RF-01 | Vista de contexto propuesta |
| SCR-02 | Propuesta WhatsApp | Vista previa del texto; RF-02 | Vista de contexto propuesta |
| SCR-03 | Ingesta documental | Selección de archivo/clave y errores; RF-03, RF-13 | Vista de contexto propuesta |
| SCR-04 | Auditoría | Lista de documentos y motivos del estado; RF-04 | Vista de contexto propuesta |
| SCR-05 | Exportación | DOCX/PDF y bloqueos; RF-05, RF-09 | Vista de contexto propuesta |
| SCR-06 | Prospecto | Datos mínimos; RF-10 | Vista de contexto propuesta |
| SCR-07 | Agenda de entregas | Lista, datos de unidad y estados; RF-11 | Inicio del recorrido obligatorio CU-05 |
| SCR-08 | Fase 1: preparación | PDI y documentación; RF-06 | Recorrido obligatorio |
| SCR-09 | Fase 2: bienvenida | Firma y cotejo; RF-06 | Recorrido obligatorio |
| SCR-10 | Fase 3: inspección | Carrocería y accesorios; RF-06 | Recorrido obligatorio y salida a alterno |
| SCR-11 | Fase 4: orientación | Controles técnicos; RF-06 | Recorrido obligatorio y bloqueo |
| SCR-12 | Fase 5: recepción | Llaves, manuales, confirmación; RF-06 | Recorrido obligatorio |
| SCR-13 | Pase y cierre | Resultado Completada y pase ficticio; RF-12 | Final del recorrido obligatorio |
| SCR-14 | Incidencia | Reporte, pausa, acuerdo/resolución; RF-07 | Alterno obligatorio CU-06 |
| SCR-15 | Sincronización | Pendiente / Sincronizado / Error / Conflicto; RF-08, RF-17 | Estado ilustrativo, integración futura |
| SCR-16 | Plantillas | Versión y campos; RF-14 | Fuera del recorrido del parcial |
| SCR-17 | Acceso | Inicio/desbloqueo; RF-15 | Precondición ilustrativa |
| SCR-18 | Reserva demo | Licencia y agenda; RF-16 | Fuera del recorrido del parcial |

Los IDs son propuestos como nomenclatura estable. No representan IDs internos de nodos Figma. La cobertura total de requisitos está en el análisis; el prototipo prioriza un caso completo con alterno.

## 3. Comportamiento que debe navegarse

| Desde | Acción / condición | Destino y efecto |
|---|---|---|
| SCR-07 | Seleccionar entrega e iniciar | SCR-08; En curso |
| SCR-08 | Completar controles y Continuar | SCR-09 |
| SCR-09 | Completar controles y Continuar | SCR-10 |
| SCR-10 | Completar inspección y Continuar | SCR-11 |
| SCR-11 | Completar controles aplicables y Continuar | SCR-12 |
| SCR-12 | Confirmar recepción y Emitir pase | SCR-13; Completada |
| Cualquier fase | Intentar continuar con un obligatorio vacío | Misma pantalla; lista de pendientes y avance bloqueado |
| SCR-08 / SCR-10 | Reportar incidencia | SCR-14; conservar fase de origen |
| SCR-14 | Guardar reporte | Estado Pausada; controles de reanudación condicionados |
| SCR-14 | Cancelar antes de guardar | Fase de origen, sin incidencia nueva |
| SCR-14 | Registrar acuerdo válido de detalle no crítico | Volver a fase de origen; controles restantes pendientes |
| SCR-14 | Daño de seguridad no resuelto o acuerdo rechazado | SCR-07 con entrega Pausada, sin pase |
| SCR-13 | Volver a agenda | SCR-07 con Completada |
| SCR-07 | Restablecer escenario de demostración | Estado ficticio inicial para repetir recorrido |

En Figma se pueden usar variantes/pantallas para representar los estados; deben poder alcanzarse mediante clics. Un botón que visualmente parece deshabilitado debe carecer de enlace de avance. No usar un enlace oculto que salte el bloqueo durante la demostración.

## 4. Datos ficticios y componentes

Usar «Cliente de demostración», modelo de muestra, VIN ficticio de 17 caracteres `DEMO0000000000001`, fecha de demostración y bahía A. Evitar identificaciones, estados bancarios o datos reales. El pase debe mostrar «DEMO — sin validez operativa».

Componentes mínimos: encabezado con fase, lista de controles, estado con texto e icono, botón Continuar, Reportar incidencia y Volver; modal/formulario de incidencia con Cancelar y Guardar. Incluir señal de Pausada y razón. Controles ≥48×48 píxeles; texto normal con contraste ≥4.5:1. El prototipo debe ilustrar los estados offline sin afirmar que realmente guarda datos al cerrar.

## 5. Prueba de navegación para registrar

| Prueba | Evidencia requerida | Resultado actual |
|---|---|---|
| Acceso externo | Abrir enlace como evaluador | Pendiente |
| V-01 Principal | Agenda → cinco fases → pase → agenda | Pendiente |
| V-02 Bloqueo | Control vacío impide avanzar | Pendiente |
| V-03 Alterno retomable | Incidencia Fase 3 → acuerdo → retorno Fase 3 | Pendiente |
| V-04 Alterno suspendido | Daño bloqueante → Pausada, sin pase | Pendiente |
| V-05 Offline ilustrativo | Indicador y sincronización pendiente | Pendiente |

Después de probar, registrar fecha, versión/enlace, persona y resultado observado. Si falla, anotar el problema y corregir antes de sustituir Pendiente por Verificado.

# KandoFlow

**Evaluación parcial · Requisitos y prototipo — Unidad 2**  
**Autor:** Rodrigo Valdespino Vértiz · **Dupla:** Emiliano Cabañas Prieto  
**Versión documental:** 2.0 · **Actualización:** 29 de septiembre de 2026

KandoFlow propone una estación de trabajo móvil para apoyar la atención comercial Mazda: cotizaciones indicativas, expedientes de crédito y entrega vehicular de cinco fases. La solución se plantea como PWA con operación local y respaldo corporativo.

**Estado actual:** paquete de análisis reorganizado; no hay aplicación implementada. El cierre de la entrega requiere verificar el prototipo, registrar la revisión final de la dupla y grabar el video. Consulta [la lista de entrega](docs/control-entrega.md).

## Entregables y orden de lectura

| Entregable | Enlace |
|---|---|
| Problema, usuarios y alcance | [Visión del producto](docs/vision-del-producto.md) |
| Ficha de dominio, entrevista y bitácora | [Guion de entrevista](docs/guion-entrevista.md) |
| Fichas funcionales y no funcionales | [Especificación vigente](docs/especificacion-requisitos.md) |
| Diagrama y caso escrito con alternos | [Casos de uso](docs/casos-de-uso.md) |
| Diagrama editable / imagen | [.drawio](docs/diagramas/casos-de-uso.drawio) · [.png](docs/diagramas/casos-de-uso.png) |
| Prototipo y pruebas de navegación | [Acceso y recorridos](docs/prototipo.md) |
| Cadena alcance → requisitos → casos → pantallas | [Trazabilidad](docs/trazabilidad.md) |
| Revisión de la dupla | [Registro histórico y revisión 2.0 pendiente](docs/especificacion-requisitos.md#revision-dupla) |
| Video de 6–8 minutos | [Guion de 7 minutos](docs/guion-video.md); grabación pendiente, se entrega fuera del repositorio |
| Rúbrica y pendientes | [Control de entrega](docs/control-entrega.md) |
| Cambios e IDs anteriores | [Control de cambios](docs/control-cambios.md) |

## Recorrido de validación

El prototipo prioriza **CU-05: Ejecutar entrega vehicular**. La asesora selecciona una entrega, completa preparación, firma, inspección, orientación y recepción para obtener un pase. Si detecta un daño o faltante, **CU-06** pausa la entrega y documenta resolución/acuerdo antes de retomar. Una incidencia bloqueante impide el pase.

[Figma enlazado por el proyecto](https://www.figma.com/make/TY4sQ7cz0vhuAj6bc0QSdU/3-Screen-Mobile-Workflow?t=hteUfOLOtM9mPyaq-1). **Acceso y navegación aún no verificados en esta revisión.** Los identificadores SCR describen pantallas previstas y no acreditan su existencia en el archivo.

## Arquitectura propuesta

| Capa | Propuesta |
|---|---|
| Presentación | React + TypeScript + Vite; interfaz adaptable y PWA |
| Negocio | Cotización, auditoría documental y reglas de entrega |
| Datos | IndexedDB local; adaptadores autorizados de Google Drive/Sheets |

Estas tecnologías describen una futura implementación. No existen todavía `src/`, scripts de compilación ni pruebas de ejecución de la aplicación. Los RNF son metas verificables para esa etapa.

## Organización documental

Todos los documentos activos están en `docs/`; `docs/diagramas/` contiene las dos representaciones del modelo. `docs/historico/` conserva los originales retirados. La especificación 2.0 es la única fuente activa de requisitos: consultar el histórico para evidencia y equivalencias, no como un catálogo adicional.

La documentación previa registra una entrevista simulada con la dupla y su aprobación 1.1. La revisión de la versión 2.0 debe quedar registrada antes de entregar. El repositorio prepara evidencias para los cinco criterios; la calificación final corresponde al docente.

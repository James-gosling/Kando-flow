# KandoFlow

**Evaluación parcial · Requisitos y prototipo — Unidad 2**  
**Autor:** Rodrigo Valdespino Vértiz · **Dupla:** Emiliano Cabañas Prieto  
**Versión documental:** 2.1 (adenda de acceso) · **Actualización:** 30 de septiembre de 2026

KandoFlow propone una estación de trabajo móvil para apoyar la atención comercial Mazda: cotizaciones indicativas, expedientes de crédito y entrega vehicular de cinco fases. La solución se plantea como PWA con operación local y respaldo corporativo.

**Estado actual:** paquete de análisis reorganizado; no hay aplicación de producción implementada. El prototipo editable ya contiene 31 pantallas y conexiones verificadas por simulación de sus reacciones. El cierre requiere probar Presentar como evaluador, registrar la revisión final de la dupla y grabar el video. Consulta [la lista de entrega](docs/control-entrega.md).

**[Abrir prototipo web publicado de KandoFlow](https://factor-yam-65024850.figma.site)** — versión de Figma Make compartida por el autor el 30 de septiembre de 2026.

## Entregables y orden de lectura

| Entregable | Enlace |
|---|---|
| Problema, usuarios y alcance | [Visión del producto](docs/vision-del-producto.md) |
| Ficha de dominio, entrevista y bitácora | [Guion de entrevista](docs/guion-entrevista.md) |
| Fichas funcionales y no funcionales | [Especificación vigente](docs/especificacion-requisitos.md) |
| Diagrama y caso escrito con alternos | [Casos de uso](docs/casos-de-uso.md) |
| Diagrama editable / imagen | [.drawio](docs/diagramas/casos-de-uso.drawio) · [.png](docs/diagramas/casos-de-uso.png) |
| Prototipo web publicado | [Abrir KandoFlow](https://factor-yam-65024850.figma.site) |
| Prototipo y pruebas de navegación | [Acceso y recorridos](docs/prototipo.md) |
| Cadena alcance → requisitos → casos → pantallas | [Trazabilidad](docs/trazabilidad.md) |
| Revisión de la dupla | [Registro histórico y revisión 2.0 pendiente](docs/especificacion-requisitos.md#revision-dupla) |
| Video de 6–8 minutos | [Guion de 7 minutos](docs/guion-video.md); grabación pendiente, se entrega fuera del repositorio |
| Rúbrica y pendientes | [Control de entrega](docs/control-entrega.md) |
| Cambios e IDs anteriores | [Control de cambios](docs/control-cambios.md) |

## Recorrido de validación

El prototipo prioriza **CU-05: Ejecutar entrega vehicular**. La asesora selecciona una entrega, completa preparación, firma, inspección, orientación y recepción para obtener un pase. Si detecta un daño o faltante, **CU-06** pausa la entrega y documenta resolución/acuerdo antes de retomar. Una incidencia bloqueante impide el pase.

[Abrir canvas editable](https://www.figma.com/design/ZuGRFCYIXklddDeCfIklz8?node-id=8-77) · [Abrir prototipo desde el inicio de sesión](https://www.figma.com/proto/ZuGRFCYIXklddDeCfIklz8?node-id=3-472&starting-point-node-id=3%3A472). Incluye 31 pantallas, 84 nodos con interacción y una guía de trazabilidad en el canvas. Se verificaron 20 escenarios mediante evaluación de las reacciones guardadas; queda la prueba manual de Presentar y acceso externo. [Make original](https://www.figma.com/make/TY4sQ7cz0vhuAj6bc0QSdU/3-Screen-Mobile-Workflow?t=hteUfOLOtM9mPyaq-1) se conserva como referencia; el nuevo diseño fue reconstruido desde la especificación, sin afirmar una importación visual exacta.

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


## Acceso por rol

La actualización incorpora login, panel de administrador, denegación, cierre, bloqueo simulado y vistas limitadas del cliente con reautenticación de la asesora. CU-11 y RF-15 se precisan en la [matriz de permisos](docs/casos-de-uso.md). Se aprobaron 14 escenarios adicionales de evaluación de reacciones guardadas; autenticación y seguridad reales no están implementadas. La revisión de la dupla debe cubrir también la adenda 2.1.

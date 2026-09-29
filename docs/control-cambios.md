# Control de cambios y equivalencia de identificadores

## 1. Versión 2.0 — 29 de septiembre de 2026

Reestructuración autorizada por el autor. Se consolidó el catálogo de la especificación v1.1, se separaron capacidades y se corrigieron contradicciones. No se generó una nueva aprobación de la dupla ni se certificó el prototipo.

| Cambio | Motivo y efecto |
|---|---|
| Unificación de documentos | Una sola especificación activa; originales preservados en histórico y Git |
| Orígenes H/S | Distinguir simulación de entrevista, decisiones técnicas y validación directa pendiente |
| Guion revisado | Preguntas abiertas sin anticipar respuesta; pendiente de nueva aplicación, con guion original conservado |
| RF-05/RF-09 | Separar generación de DOCX y consolidación PDF |
| RF-08/RF-17 | Separar respaldo de paquetes y bitácora comercial |
| RF-13 | Contraseña proporcionada por el titular; no inferir que todo PDF se abre con RFC |
| RF-01 | Fórmula indicativa y ejemplo verificable; CAT, seguros y cargos oficiales pendientes de validación |
| RNF-03/RNF-04 | Diferenciar cifrado local, manejo de claves y transmisión corporativa permitida; retirar afirmaciones legales no sustentadas |
| CU-05/CU-06 | Detallar bloqueo, pausa, resolución, retorno, almacenamiento fallido y sesión expirada |
| Visión | Identificar arquitectura como propuesta; diferir exportación XLSX y OCR; mantener agenda demo como requisito de sistema fuera del recorrido del parcial |
| Prototipo | Nuevo catálogo SCR-01 a SCR-18, con estado Previsto hasta inspección real |
| Revisión | Conservar aprobación 1.1 y abrir registro pendiente 2.0 |

## 2. Equivalencia del antiguo resumen Requerimientos.md

| ID anterior | Significado anterior | ID vigente |
|---|---|---|
| RF-01 | Cotización | RF-01; CAT/seguros no validados se difieren |
| RF-02 | Normalización | RF-03; mejoras automáticas de imagen se difieren |
| RF-03 | Desbloqueo PDF con RFC | RF-13, clave autorizada |
| RF-04 | Empaquetado PDF | RF-09 |
| RF-05 | Agenda de entrega | RF-11 |
| RF-06 | Cinco fases | RF-06 |
| RF-07 | Incidencia | RF-07 |
| RF-08 | Pase QR | RF-12 |
| RNF-01 | Latencia cotizador | RNF-01 |
| RNF-02 | Procesamiento local, cero transmisión | RNF-03 y RNF-04, con respaldo corporativo permitido |
| RNF-03 | Offline | RNF-07 |
| RNF-04 | Táctil | RNF-05 |
| RNF-05 | Contraste | RNF-06 |
| RNF-06 | Modularidad | RNF-11 |
| RNF-07 | Compatibilidad PWA | RNF-09 |

## 3. Equivalencia de la especificación v1.1

RF-01 a RF-07 conservan su intención; RF-05 se descompone en RF-05/RF-09. RF-08 se descompone en RF-08/RF-17. RF-10 a RF-16 incorporan funciones que antes estaban dispersas en visión y resumen. RNF-01 a RNF-08 conservan su área general con métricas reformuladas; RNF-09 a RNF-11 completan compatibilidad, exportación y mantenibilidad.

CU-01 a CU-07 conservan los objetivos del diagrama original; CU-08 a CU-12 cubren funciones adicionales de la visión. La matriz separada antigua utilizaba CU-01 para parámetros y CU-02 para corrida: esa numeración queda retirada. SCR se renumera según [prototipo](prototipo.md); ninguna correspondencia anterior se considera válida sin migrarla.

## 4. Historial y decisiones pendientes

Los documentos previos permanecen en [histórico](historico/README.md). Las preguntas S-01 a S-06, la revisión de la dupla, acceso al Figma y video quedan en [control de entrega](control-entrega.md). Toda decisión posterior debe registrar fecha, motivo, requisitos afectados y evidencia real de aceptación; no reemplazar pendientes por aprobaciones sin revisión.

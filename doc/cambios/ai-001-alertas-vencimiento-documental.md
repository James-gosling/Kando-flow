# Análisis de impacto de SC-001

> Plantilla de análisis de impacto · Ingeniería de Software I · SIS3407  
> Ubicación en el repositorio: `doc/cambios/ai-001-alertas-vencimiento-documental.md`  
> Lo escribe **el dueño del sistema**, sobre la solicitud que le entregó su dupla.

**Proyecto:** KandoFlow  
**Estado del documento:** Análisis de impacto de una solicitud ratificada por Emiliano Cabañas Prieto; recomendación técnica pendiente de decisión.  
**Fecha de elaboración:** 13 de noviembre de 2026

---

## Solicitud que se analiza

**Referencia:** `sc-001-alertas-vencimiento-documental.md` (solicitud ratificada por la dupla).  
**Dupla solicitante:** Emiliano Cabañas Prieto (ratificación comunicada por el responsable de KandoFlow).  
**Fecha de redacción:** 13 de noviembre de 2026.

**Petición textual de la solicitud ratificada:** «Quiero que, al consultar los expedientes de prospectos, la asesora pueda distinguir cuáles documentos están por vencer y cuáles ya vencieron, para darles seguimiento antes de que retrasen un trámite».

**Ratificación:** Según el mensaje proporcionado por el responsable de KandoFlow, Emiliano confirmó: «Revisé la solicitud SC-001 sobre alertas preventivas de vencimiento documental para KandoFlow y estoy de acuerdo con su contenido, la ratifico como solicitud de cambio de mi parte». Esta ratificación acredita su conformidad con la petición; no implica la aceptación técnica del cambio, que se decide después del análisis.

## Traducción a términos del sistema

KandoFlow incluye `Prospecto`, `Expediente` y `DocumentoExpediente`, la incorporación de archivos (RF-03, CU-02), la auditoría de completitud (RF-04, CU-03) y la política RN-02. El comprobante de domicilio se considera válido hasta 90 días, inclusive, y la validación sigue requiriendo revisión humana.

La petición implicaría distinguir una **advertencia de proximidad de vencimiento** de los estados formales del expediente (`Incompleto`, `En revisión`, `Validado`). Un umbral para avisos anticipados requeriría validación de negocio.

## Impacto directo

| Artefacto | Unidad | Qué hay que cambiar |
|---|---|---|
| RF-04 y nuevo RF propuesto | 2 | Especificar consulta de vigencia próxima y criterios verificables de aviso sin sustituir la revisión humana. |
| CU-03 | 2 | Incluir la consulta de advertencias y su resultado en el proceso de revisión documental. |
| Diagrama de clases: `DocumentoExpediente`, `Expediente` | 4 | Verificar datos de fecha, asociación de documento vigente y forma de obtener advertencias. |
| Diagrama de secuencia de revisión de expediente | 4 | Representar recuperación de documentos, evaluación de vigencia y presentación del resultado; comprobar antes la versión oficial del diagrama. |
| Pantalla SCR-04 | 2 | Mostrar documento afectado, estado de advertencia y motivo textual. |

## Impacto indirecto

| Artefacto | Unidad | Por qué se ve afectado |
|---|---|---|
| Registro de decisión ADR | 3 | Se cotejó el **ADR-001 · Monolito modular offline-first**: el cambio debe respetar el módulo Expediente, la persistencia local y los límites entre módulos; no se propone reemplazar la decisión. |
| Diagrama C4 de contexto | 3 | **Sin impacto previsto:** no se necesitan nuevos actores ni servicios externos para una alerta dentro de la aplicación. |
| Diagrama C4 de contenedores | 3 | **Sin impacto estructural previsto:** el diagrama publicado mantiene la PWA con IndexedDB local; no se requiere añadir otro contenedor. |
| Diagrama C4 de componentes | 3 | El componente **Expediente · documentos y revisión** deberá evaluar alertas y exponerlas a **Interfaz y control de acceso por rol**; se conserva la separación modular del C4 de componentes. |
| Máquina de estados de expediente | 4 | Verificar la reevaluación cuando vence un documento; `Próximo a vencer` no debe convertirse en un estado formal adicional. |
| RF-03 / CU-02 | 2 | Revisar si se capturan fechas suficientes al incorporar documentos. |
| RF-05 y RF-09 / CU-04 | 2 | Mantener el bloqueo de generación de documentos finales cuando el expediente no está validado. |
| RF-15 / CU-11 | 2 | Evitar que la alerta revele información de expedientes ajenos al usuario autorizado. |
| RN-02 y RNF-06 | 2 | Conservar regla de 90 días y mostrar el motivo con texto, no solo color. |
| RNF-03 y RNF-07 | 2 | Proteger datos persistidos y comprobar consulta local cuando no haya red. |
| RNF-08 | 2 | Sin cambio de integración necesariamente; probar versiones y sustituciones si la información añadida se sincroniza. |
| Matriz de trazabilidad y pruebas | 2 y 4 | Añadir relaciones y pruebas de umbral, reemplazo, permisos y regresión. |

### Impacto indirecto más costoso

El mayor esfuerzo indirecto es **reevaluar expedientes que antes estaban validados cuando cambia la vigencia de sus documentos**. Un comprobante de domicilio que cumplía el día de revisión puede superar después los 90 días; la alerta no debe convertirse en una simple etiqueta cosmética mientras RF-05 y RF-09 siguen permitiendo generar solicitudes y exportaciones con un expediente que ya no cumple RN-02. Esto exige revisar el comportamiento de RF-04/CU-03, RF-05 y RF-09/CU-04, la máquina de estados, las fechas usadas para evaluar la condición y pruebas de regresión. Se trata de una inferencia de impacto técnico, no de un defecto observado en una implementación.

## Lo que queda sin tocar

Sin impacto funcional previsto: RF-01 (cotización), RF-02 (propuesta de WhatsApp), RF-06 (cinco fases de entrega), RF-11 (agenda de entregas), RF-12 (pase de salida), RF-16 (prueba de manejo) y el cálculo financiero de RN-01. No se requiere integrar notificaciones externas, aprobar créditos ni cambiar las políticas financieras.

## Riesgos

| Riesgo | Probabilidad estimada | Consecuencia y mitigación |
|---|---|---|
| Fecha documental incorrecta | Media | Alertas erróneas. Exigir revisión humana y validación de fechas. |
| Regla de aviso no aprobada por la agencia | Alta | Comportamiento ambiguo. Confirmar umbral antes de aceptar. |
| Alertas desactualizadas después de reemplazar un archivo | Media | Confusión de seguimiento. Reevaluar al consultar y sustituir documentos. |
| Fuga de información a otro usuario | Baja a media, sin pruebas de implementación | Impacto alto. Validar permisos por registro conforme a RF-15. |
| No realizar la mejora | Media | Se mantiene la revisión manual y pueden pasar inadvertidos próximos vencimientos; no implica por sí mismo un fallo actual. |

## Alternativas consideradas

1. **Opción A: advertencias en la vista de cada expediente.** Reutiliza el flujo de revisión de RF-04 y minimiza el alcance. Es menos costosa, pero no ofrece una vista consolidada de todos los expedientes.
2. **Opción B: panel general de seguimiento documental.** Facilita priorizar varios prospectos desde una sola pantalla; requiere definir filtros, actualización de datos, permisos y una interfaz adicional, por lo que incrementa diseño y pruebas.

**Preferencia:** Opción A para una primera iteración; satisface la solicitud ratificada sin agregar servicios externos.

## Estimación de esfuerzo

| Concepto | Esfuerzo |
|---|---:|
| Cambios de diseño y documentación | 6 horas-persona |
| Implementación | 10 horas-persona |
| Pruebas | 8 horas-persona |
| **Total base** | **24 horas-persona** |

**Reserva de incertidumbre:** 6 horas-persona adicionales. **Planificación orientativa:** 30 horas-persona.

**De dónde sale este número.** Estimación preliminar por actividades, tomando como referencia relativa la complejidad de RF-03, RF-04, RF-15, la pantalla SCR-04 y los diagramas que se modificarían. No proviene de tiempos reales medidos. Se supone que el sistema podrá disponer de fechas documentales sin OCR y que no habrá avisos push, correos o WhatsApp automáticos. No incluye rediseño integral, despliegue en producción ni nuevos proveedores externos. La estimación debe revisarse después de confirmar el umbral y el estado real del código. Se contrastó el ADR-001 y los diagramas C4 presentes en `doc/arch/`.

## Recomendación

**Aplazar la aceptación definitiva** hasta que la agencia confirme para qué documentos aplica el aviso y con cuánta anticipación debe mostrarse, y hasta actualizar los diagramas afectados en la iteración de diseño. Si se confirman esos puntos, se recomienda aceptar la opción A por su alcance acotado y beneficio operativo.

---

*El objetivo de este documento no es dar un número exacto. Es que cualquiera pueda seguir tu razonamiento y señalarte dónde te equivocaste.*
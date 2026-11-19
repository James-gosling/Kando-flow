# SC-001: Alertas preventivas de vencimiento documental

> Plantilla de solicitud de cambio · Ingeniería de Software I · SIS3407  
> Ruta prevista: `doc/cambios/sc-001-alertas-vencimiento-documental.md`  
> Solicitud presentada por la **dupla de revisión** de KandoFlow y ratificada expresamente por el solicitante.

---

## Estado

Propuesta · 13 de noviembre de 2026.

> **Ratificación del solicitante:** Emiliano Cabañas Prieto confirmó, según el mensaje compartido por el responsable de KandoFlow: «Revisé la solicitud SC-001 sobre alertas preventivas de vencimiento documental para KandoFlow y estoy de acuerdo con su contenido, la ratifico como solicitud de cambio de mi parte». La solicitud permanece en estado **Propuesta** mientras se realiza el análisis; cualquier aceptación, rechazo o aplazamiento posterior debe registrarse sin borrar este historial.

## Quién la pide

**Emiliano Cabañas Prieto**, en calidad de **dupla de revisión de KandoFlow**. Solicitud ratificada expresamente por él, conforme al mensaje comunicado por el responsable del proyecto.

## Qué se pide

Quiero que, al consultar los expedientes de prospectos, la asesora pueda distinguir cuáles documentos están por vencer y cuáles ya vencieron, para darles seguimiento antes de que retrasen un trámite. Me gustaría que pudiera identificar fácilmente qué documento requiere atención y a qué prospecto pertenece, sin revisar manualmente expediente por expediente.

## Por qué

El sistema contempla la revisión de documentos obligatorios, pero no una advertencia anticipada de su vencimiento. Saber con tiempo qué documentos necesitan actualización permitiría organizar mejor el seguimiento comercial y reducir revisiones repetitivas.

## Qué pasa si no se hace

La asesora podrá seguir revisando manualmente la vigencia de los documentos y el sistema seguirá evaluando la completitud conforme a las reglas existentes. Sin embargo, podría detectar tarde que un comprobante está por vencer, ocasionando solicitudes de actualización y demoras evitables. No se afirma que exista un defecto demostrado en el diseño actual.

## Tipo de mantenimiento

- [ ] **Correctivo** · algo está mal y hay que repararlo
- [ ] **Adaptativo** · el entorno cambió y hay que ajustarse
- [x] **Perfectivo** · funciona, pero puede ser mejor
- [ ] **Preventivo** · todavía no falla, pero va a fallar

**Justificación:** amplía la utilidad de la revisión documental existente sin partir de un fallo comprobado ni de una obligación externa nueva.

## Criterio de aceptación

1. Dado un expediente autorizado con un documento dentro del periodo de aviso anticipado acordado, la asesora puede identificar el documento, su prospecto y que está **próximo a vencer**.
2. Dado un documento que ya superó el plazo de vigencia aplicable, la asesora puede identificarlo como **vencido** y conocer el motivo.
3. Cuando el documento es reemplazado por uno vigente, deja de mostrarse la advertencia anterior como activa al volver a consultar el expediente.
4. Un usuario sin autorización sobre el expediente no puede ver sus advertencias ni los datos del prospecto.

**Condición por confirmar:** cuántos días antes se considera «próximo a vencer» y a qué documentos aplica. El plazo existente de 90 días para el comprobante de domicilio no establece por sí mismo la anticipación del aviso.

## Prioridad que sugiere el solicitante

**Media.** Puede evitar retrasos comerciales y mejorar el seguimiento, pero el proceso actual de revisión documental existe y no se ha identificado una falla crítica que obligue a implementarla inmediatamente.

---

*La solicitud describe qué se quiere, nunca cómo hacerlo. El cómo se decide en el análisis de impacto y lo decide quien conoce el diseño.*
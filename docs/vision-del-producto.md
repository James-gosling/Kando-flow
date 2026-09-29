# Visión del producto — KandoFlow

**Autor:** Rodrigo Valdespino Vértiz · **Materia:** Ingeniería de Software I · **Versión:** 2.0 · **Fecha:** 29 de septiembre de 2026.

## 1. Propósito y problema

KandoFlow es una propuesta de aplicación web transaccional, adaptable a móviles y con operación local sin conexión, para apoyar a una asesora comercial Mazda. Busca reducir el tiempo empleado en cotizaciones, la dispersión de documentos de crédito y las omisiones durante la entrega de vehículos.

La evidencia disponible es la entrevista académica con Emiliano Cabañas Prieto representando el rol de negocio. Las afirmaciones sobre demoras, rechazos y condiciones de la agencia son hallazgos registrados en esa simulación; no son mediciones de campo ni una aprobación directa de Erika Vértiz. Véase [entrevista y bitácora](guion-entrevista.md).

## 2. Usuarios y contexto

| Participante | Objetivo | Relación con el sistema |
|---|---|---|
| Asesora de ventas — Erika Vértiz, usuaria objetivo | Cotizar, integrar expedientes y conducir entregas | Operadora principal, móvil en piso y patio |
| Administrador — Rodrigo Valdespino Vértiz | Mantener plantillas y supervisar sincronización | Acceso a configuración técnica |
| Cliente / prospecto | Recibir cotización y una entrega documentada | Beneficiario; confirma acuerdos y recepción en el dispositivo de la asesora |
| Google Workspace | Recibir respaldo de paquetes y bitácora | Sistema externo propuesto: Drive y Sheets |
| WhatsApp | Abrir una conversación con una propuesta preparada | Aplicación externa mediante enlace; el envío lo confirma la persona |

El trabajo puede ocurrir sin red y con una sola mano. Por ello se proponen captura local, recuperación tras cierre y controles táctiles legibles. El cliente no necesita crear una cuenta en KandoFlow.

## 3. Alcance del sistema propuesto

| Área | Funciones incluidas | Requisitos |
|---|---|---|
| Atención comercial | Registro de prospectos, cálculo indicativo y propuesta para WhatsApp | RF-01, RF-02, RF-10 |
| Expediente | Incorporación local de archivos, apertura autorizada de PDF, auditoría y exportación DOCX/PDF | RF-03, RF-04, RF-05, RF-09, RF-13 |
| Entrega | Agenda, checklist de cinco fases, incidencias y pase con QR | RF-06, RF-07, RF-11, RF-12 |
| Administración | Plantillas, acceso por roles y sincronización corporativa | RF-08, RF-14, RF-15, RF-17 |
| Pruebas de manejo | Reserva sin traslapes y con licencia vigente registrada | RF-16 |

### Frontera del parcial

Esta entrega contiene análisis, modelos y especificación de un prototipo. No contiene una aplicación implementada. El recorrido prioritario del prototipo es **CU-05: Ejecutar entrega vehicular**, incluyendo **CU-06: Resolver incidencia de entrega**, la ruta principal y la suspensión por incidencia. Las otras funciones forman parte del sistema propuesto y tienen pantallas previstas; no se afirma que todas estén prototipadas.

### Fuera de alcance

- Cobros, transferencias, timbrado CFDI, resolución de crédito o consulta directa a Buró.
- Integración con DMS/ERP de la agencia y control remoto o telemetría del automóvil.
- Envío autónomo de mensajes por WhatsApp Business API.
- OCR automático de identificaciones o fotografías; su captura de campos será manual.
- Portal de autoservicio con cuenta del cliente.
- Cálculo regulatorio del CAT: no hay fórmula ni parámetros oficiales validados.
- Exportación XLSX de expedientes en esta versión; se conserva la ingesta XLSX. Su exportación se difiere y queda registrada como cambio de alcance.

Las tasas, reglas de la financiera, documentos exigidos y políticas de entrega requieren confirmación con la usuaria objetivo. El protocolo de cinco fases es el modelo de trabajo del proyecto; no se certifica aquí como normativa oficial Mazda.

## 4. Arquitectura propuesta y restricciones

Se propone una SPA/PWA en React, TypeScript y Vite, con tres capas: presentación, reglas de negocio y persistencia/adaptadores. IndexedDB se plantea para datos locales; Google Drive y Sheets para respaldo corporativo autorizado. Estas tecnologías son decisiones propuestas, no componentes existentes.

Se permite el procesamiento local de documentos y su posterior transmisión a una cuenta corporativa autorizada. No se enviarán a servicios externos de OCR o conversión. La sincronización requiere conexión; cotización, consulta de datos descargados y checklist deberán funcionar sin red tras la primera preparación del dispositivo.

Las métricas y la forma de comprobarlas están en [la especificación](especificacion-requisitos.md). Un prototipo Figma puede ilustrar estados y navegación; no demuestra cifrado, rendimiento real, autenticación ni persistencia.

## 5. Ciclo de vida y siguiente etapa

Se mantiene el trabajo iterativo en periodos de dos semanas, con revisión de la usuaria objetivo y de la dupla. Después del parcial: validar supuestos y reglas financieras, construir persistencia y control de acceso, implementar cotización/expediente, implementar entrega e integrar sincronización.

Antes de iniciar construcción se debe cerrar la revisión 2.0 y comprobar el prototipo. El [control de entrega](control-entrega.md) registra las evidencias pendientes.

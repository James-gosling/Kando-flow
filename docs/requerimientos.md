# Especificación de Requisitos de Software (SRS)

**Proyecto:** Zanshin Bushidō (`zanshin-bushido`)  
**Autor:** Rodrigo Valdespino Vértiz  
**Fecha:** 20 de septiembre de 2026  
**Versión:** 1.0  
**Estándar de Referencia:** ISO/IEC/IEEE 29148 (Versión adaptada para Ingeniería de Software SIS3407)  

---

## 1. Propósito y Alcance

### 1.1 Propósito del Documento
El propósito de este documento es formalizar de manera rigurosa, no ambigua y verificable los requisitos funcionales y no funcionales de **Zanshin Bushidō**. Este artefacto sirve como contrato técnico de construcción para el Administrador/Desarrollador y como base de validación operativa frente al usuario final (Asesora de Ventas de la agencia Mazda) y los clientes.

### 1.2 Alcance del Sistema
El alcance técnico se delimita estrictamente a la asistencia operativa, normalización de datos, emisión paramétrica de cotizaciones, auditoría documental de expedientes y orquestación del protocolo de entrega ceremonial de vehículos (*Mazda Handover Experience*). 

* **Dentro del Alcance:** Ingestión de archivos locales (PDF, DOCX, XLSX, imágenes), transformación a esquemas ligeros (`JSON`/`CSV`/`TXT`), validación visual de expedientes crediticios, cálculo financiero paramétrico, gestión de agenda de pruebas de manejo, checklist interactivo de 5 fases de entrega y sincronización unidireccional estructurada hacia Google Workspace Enterprise (Drive y Sheets).
* **Fuera del Alcance:** Conexión con ERP/DMS institucional corporativo, timbrado fiscal CFDI 4.0, pasarela de procesamiento de pagos en línea, integración de hardware telemático vehicular y dictamen automatizado directo con Buró de Crédito.

---

## 2. Usuarios y su Contexto

### 2.1 Perfiles de Usuario
El sistema modela tres tipos de usuarios con responsabilidades y contextos específicos:

1. **Usuario Administrador (Rodrigo Valdespino Vértiz):** Responsable de la arquitectura técnica, configuración de plantillas, despliegue continuo, monitoreo de bitácoras de sincronización y pruebas de regresión.
2. **Usuario Asesora de Ventas (Erika Vertiz):** Asesora comercial en piso de venta que opera bajo alta movilidad (sala de exhibición, patio y sala de entrega), atendiendo clientes con citas programadas o llegadas imprevistas. Requiere captura en menos de 30 segundos, cálculos en menos de 45 segundos y validación inmediata sin depender de escritorios fijos ni áreas internas lentas.
3. **Usuario Cliente / Prospecto:** Comprador que interactúa con la asesora recibiendo cotizaciones en formato móvil vía WhatsApp, entregando documentación sensible (INE, nómina, comprobante de domicilio) y experimentando el protocolo técnico de entrega en la agencia.

### 2.2 Contexto Operativo Actual (As-Is)
La asesora opera con libretas manuales y chats personales de WhatsApp. Los documentos crediticios se reciben como capturas fotográficas desordenadas en la galería del móvil, generando retrasos y rechazos en mesa de control. Las cotizaciones requieren trasladarse a terminales físicas con hojas de Excel desactualizadas. Durante la entrega, la falta de coordinación con el taller para el PDI y detallado estético produce cuellos de botella y omisiones en la configuración digital del auto (*Mazda Connect*, *MyMazda*).

---

## 3. Requisitos Funcionales (RF)

Los requisitos funcionales están redactados bajo formulación firme, expresan una sola necesidad atómica y son directamente comprobables mediante pruebas operativas.

### Módulo 1: Gestión de Prospectos e Interacciones
* **RF-01:** El sistema registra un nuevo prospecto capturando nombre completo, número de teléfono (10 dígitos), correo electrónico, canal de origen y modelo Mazda de interés.
* **RF-02:** El sistema despliega el pipeline de ventas en formato tablero visual con los estados: Nuevo Prospecto, Contactado, Cotización Presentada, Prueba de Manejo Agendada, Expediente en Integración, Aprobado en Financiera, Unidad Asignada y Entregado.
* **RF-03:** El sistema asigna un temporizador visual de contacto prioritario de 15 minutos a todo prospecto registrado con canal de origen digital.
* **RF-04:** El sistema almacena una bitácora cronológica de notas de seguimiento y cambios de estatus por cada cliente registrado.

### Módulo 2: Motor de Cotización Paramétrica
* **RF-05:** El sistema calcula la cotización financiera mensual con base en el precio de lista del vehículo, porcentaje de enganche, plazo en meses y tasa de interés anual de campaña.
* **RF-06:** El sistema impide seleccionar plazos de financiamiento distintos a 12, 24, 36, 48, 60 o 72 meses.
* **RF-07:** El sistema impide registrar cotizaciones de financiamiento con un enganche inferior al 10% del precio total de lista del modelo seleccionado.
* **RF-08:** El sistema genera un mensaje de resumen comercial formateado con enlace de exportación directa a WhatsApp mediante el protocolo `https://wa.me/`.
* **RF-09:** El sistema exporta la ficha técnica y económica de la cotización en formato descargable PDF.

### Módulo 3: Ingestión, Normalización y Auditoría de Documentos
* **RF-10:** El sistema ingesta archivos locales cargados por el usuario en formatos PDF, Microsoft Word (`.docx`), Microsoft Excel (`.xlsx`) e imágenes (JPEG, PNG).
* **RF-11:** El sistema transforma y normaliza los metadatos y campos de los archivos cargados en estructuras de datos planas `JSON` y registros indexados `TXT` en memoria del navegador.
* **RF-12:** El sistema despliega un semáforo visual de completitud del expediente crediticio con tres estados: Incompleto (rojo), En Revisión (amarillo) y Completo para Envío (verde).
* **RF-13:** El sistema impide marcar el expediente como "Completo para Envío" si falta la carga legible de Identificación Oficial (INE), Comprobante de Domicilio (<3 meses) o Estados de Cuenta Bancarios (últimos 3 meses).
* **RF-14:** El sistema compila y exporta el expediente pre-llenado del cliente en un archivo Microsoft Word (`.docx`) y un paquete consolidado en PDF.

### Módulo 4: Agenda de Unidades Demo (Test Drives)
* **RF-15:** El sistema bloquea el agendamiento de una prueba de manejo si el registro del prospecto no cuenta con la fotografía de la licencia de conducir vigente.
* **RF-16:** El sistema impide el agendamiento de dos pruebas de manejo sobre la misma unidad vehicular con una separación temporal menor a 20 minutos.
* **RF-17:** El sistema registra la firma digital o confirmación fotográfica de la responsiva de prueba de manejo previa a la liberación del vehículo demo.

### Módulo 5: Protocolo de Entrega (Mazda Handover SOP)
* **RF-18:** El sistema valida la conclusión de la Fase 1 (Pre-Entrega) mediante el marcado obligatorio de retiro de plásticos, diagnóstico PDI concluido, lavado/detallado aprobado y presencia de póliza de garantía física.
* **RF-19:** El sistema registra la hora de arribo del cliente a la sala Handover Lounge y captura la confirmación de firma de actas de entrega en la Fase 2 (Recepción).
* **RF-20:** El sistema registra el checklist de inspección visual estética de pintura, rines y tapicería junto con la captura fotográfica conmemorativa en la Fase 3 (El Develado).
* **RF-21:** El sistema verifica el cumplimiento de la Fase 4 (Orientación Técnica) validando el ajuste ergonómico *Jinba Ittai*, la vinculación de Apple CarPlay/Android Auto, la explicación de alertas *i-Activesense* y la activación del VIN en la aplicación MyMazda.
* **RF-22:** El sistema bloquea el pase de salida y conclusión de la Fase 5 (Entrega de Llaves) si las Fases 1, 2, 3 y 4 no cuentan con confirmación de completitud al 100%.

### Módulo 6: Sincronización y Respaldo Enterprise
* **RF-23:** El sistema exporta los archivos y expedientes concluidos hacia una carpeta estructurada de Google Drive corporativo vinculada a la cuenta de la asesora.
* **RF-24:** El sistema registra cada transacción de venta concluida en una fila de hoja de cálculo en Google Sheets mediante llamada a la API corporativa de Google Workspace.

---

## 4. Requisitos No Funcionales (RNF)

Requisitos no funcionales clasificados por atributos de calidad conforme a la norma ISO/IEC 25010.

### 4.1 Rendimiento (Performance Efficiency)
* **RNF-01:** El motor de cotización financiera recalcula y despliega las mensualidades en la pantalla del usuario en un tiempo menor a 500 milisegundos tras modificar enganche, plazo o versión vehicular.
* **RNF-02:** La transformación y parseo de archivos binarios (PDF/DOCX/XLSX de hasta 10 MB) a esquemas ligeros `JSON` se ejecuta en un tiempo menor a 2.0 segundos en el dispositivo cliente.
* **RNF-03:** La búsqueda y filtrado de clientes en el tablero Kanban se despliega en menos de 300 milisegundos sobre una base local de hasta 1,000 registros activos.

### 4.2 Seguridad y Confidencialidad (Security)
* **RNF-04:** Todos los documentos y datos personales en reposo dentro del almacenamiento local del navegador se cifran mediante algoritmo AES-256.
* **RNF-05:** La comunicación y sincronización hacia las APIs de Google Workspace se transmite exclusivamente mediante túneles seguros cifrados bajo protocolo TLS 1.3 / HTTPS.
* **RNF-06:** La sesión del sistema expira y bloquea la interfaz de usuario automáticamente tras 15 minutos consecutivos de inactividad detectada en el dispositivo.
* **RNF-07:** El sistema provee una función de purga manual que elimina del caché local del navegador los documentos bancarios y fiscales de un cliente una vez confirmada su sincronización a Google Drive.

### 4.3 Usabilidad (Usability)
* **RNF-08:** La interfaz de usuario implementa un diseño táctil (*touch-first*) con áreas de contacto interactivas de al menos 48 x 48 píxeles por botón o selector.
* **RNF-09:** El contraste cromático entre texto y fondo cumple con un ratio mínimo de 4.5:1 (estándar WCAG AA) para garantizar legibilidad bajo luz solar directa en patio de unidades.
* **RNF-10:** Un usuario sin capacitación previa completa el registro de un prospecto y genera su primera cotización en un máximo de 3 pantallas y menos de 60 segundos de interacción continua.

### 4.4 Disponibilidad y Tolerancia a Fallos (Reliability)
* **RNF-11:** El sistema mantiene el 100% de las funciones de captura, cotización, consulta y llenado de checklists operativas sin conexión a internet mediante tecnología PWA y almacenamiento en IndexedDB.
* **RNF-12:** Ante el restablecimiento de la conexión tras una pérdida de red, el sistema sincroniza automáticamente las operaciones en cola sin duplicar registros ni corromper el estado local.

---

## 5. Casos de Uso del Sistema

### 5.1 Diagrama Textual de Interacción General
```text
  [ Asesora de Ventas ]
        │
        ├───> (CU-01: Generar Cotización Paramétrica Inmediata)
        ├───> (CU-02: Auditar e Integrar Expediente de Crédito)
        ├───> (CU-03: Agendar Prueba de Manejo Demo)
        └───> (CU-04: Ejecutar Protocolo de Entrega Ceremonial)
                    │
                    └───> [ Sistema: Valida Bloqueos RN-01 a RN-05 ]
                                │
                                └───> [ Google Workspace Enterprise ]

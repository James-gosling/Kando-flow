Registro de Decisión de Arquitectura (ADR)

Ingeniería de Software I · SIS3407 · Unidad 3

Alumno: Rodrigo Valdespino Vértiz

Proyecto: KandoFlow (Estación de trabajo comercial y entrega vehicular Mazda)

Fecha: 29 de octubre de 2026

1. Título

ADR-001: Adopción de una Arquitectura de Monolito Modular en PWA con Operación Local (Offline-First) para KandoFlow.

2. Estado

Aceptado.

3. Contexto

KandoFlow es una estación de trabajo móvil diseñada para apoyar la atención comercial en agencias automotrices Mazda, abarcando desde la captura de prospectos, el cálculo de cotizaciones indicativas y la integración de expedientes de crédito, hasta la ejecución del protocolo de entrega vehicular de cinco fases (CU-05), incluyendo el manejo de incidencias o daños (CU-06) y la emisión del pase de salida.

La operación real de las asesoras comerciales ocurre en piso de venta, sótanos de resguardo, patios de inventario y bahías de entrega, zonas donde la conexión Wi-Fi o de datos móviles suele ser intermitente o nula. Si el sistema dependiera de peticiones síncronas continuas hacia un servidor remoto o de una arquitectura de microservicios para validar cada control de las cinco fases, registrar un acuerdo por daño estético o permitir la confirmación en la vista temporal del cliente, cualquier caída de red bloquearía la entrega física del vehículo y degradaría la experiencia del cliente.

Asimismo, el proyecto requiere mantener costos de infraestructura en cero durante su etapa actual, evitando el despliegue, pago y mantenimiento de múltiples servidores de backend o bases de datos en la nube, pero sin caer en un monolito tradicional sin estructura ("código espagueti") donde se mezclen las reglas de cotización con las reglas de bloqueo de entregas, el control de acceso por rol o la sincronización documental.

4. Decisión

Se decide estructurar e implementar KandoFlow bajo el patrón de Monolito Modular ejecutado en una Aplicación Web Progresiva (PWA) con persistencia local primaria:

Artefacto único desplegable (PWA en React + TypeScript + Vite): Todo el sistema se empaqueta y despliega como una sola aplicación web instalable que se ejecuta directamente en el navegador del dispositivo móvil o tableta de la asesora comercial.

División estricta en módulos de dominio: Internamente, el código de reglas de negocio se organiza en cuatro módulos independientes con responsabilidades y fronteras bien delimitadas:

Módulo de Atención Comercial: Gestión de prospectos y cálculo de cotizaciones indicativas.

Módulo de Expediente: Recepción, validación y revisión de documentos de crédito.

Módulo de Entrega Vehicular: Control de agenda, validación secuencial de las cinco fases, manejo de incidencias (bloqueantes o con acuerdo) y emisión del pase de salida.

Módulo de Respaldo: Gestión de la cola de sincronización asíncrona y adaptadores hacia servicios externos corporativos.

Comunicación limpia por interfaces internas: Los módulos interactúan exclusivamente a través de contratos e interfaces públicas definidas por el módulo propietario, prohibiendo que un módulo lea o modifique directamente las estructuras de datos internas o tablas privadas de otro.

Persistencia local e integración diferida: Se emplea IndexedDB como almacén local primario para garantizar operación inmediata sin red, delegando al módulo de Respaldo la sincronización asíncrona de paquetes y bitácoras hacia Google Drive y Google Sheets cuando exista conectividad autorizada, así como la preparación de propuestas hacia WhatsApp.

5. Consecuencias

Positivas

Continuidad operativa en patio y bahía de entrega: La asesora puede recorrer las cinco fases de inspección, capturar acuerdos por incidencias, mostrar la vista temporal al cliente, reautenticarse y emitir el pase de salida con respuesta inmediata y sin interrupciones por falta de internet.

Simplicidad de despliegue y costo cero de servidores: Al residir en un único artefacto PWA con persistencia local y apoyarse en Google Workspace y WhatsApp para el respaldo y comunicación externa, se elimina la sobrecarga operativa y financiera de administrar clústeres de microservicios o servidores dedicados.

Aislamiento de reglas de negocio y mantenibilidad: Si cambian las políticas de crédito o las reglas de bloqueo en la entrega vehicular, el ajuste se encapsula en el módulo correspondiente (Expediente o Entrega) sin afectar el cálculo de cotizaciones ni los adaptadores de sincronización.

Preparación para evolución futura: La separación modular permite que, si en una fase posterior la agencia incorpora un servidor central o conexión directa a un DMS corporativo, los módulos de dominio o la capa de persistencia puedan migrarse hacia una API sin tener que reescribir las reglas de negocio.

Negativas

Riesgo de pérdida de datos antes de sincronizar: Dado que el estado primario se guarda primero en IndexedDB del dispositivo, el borrado accidental de datos del navegador o el extravío de la tableta antes de que el módulo de Respaldo sincronice con Google Drive y Google Sheets puede ocasionar pérdida de registros locales pendientes.

Seguridad en el dispositivo físico compartido: El uso de una vista temporal para que el cliente confirme la recepción o un acuerdo en el mismo dispositivo exige aplicar controles estrictos de bloqueo de sesión, reautenticación obligatoria de la asesora (RF-15) y cifrado local para proteger la información de otros prospectos.

Disciplina arquitectónica en el código: Al compartir el mismo repositorio y entorno de ejecución en TypeScript, el equipo debe vigilar mediante revisiones y reglas de linter que no se introduzcan importaciones directas entre estados internos de distintos módulos.

Registro de Decisión de Arquitectura (ADR)

Ingeniería de Software I · SIS3407 · Unidad 3

Alumno: Rodrigo Valdespino Vértiz

Proyecto: KandoFlow

Fecha: 29 de octubre de 2026

1. Título

ADR-001: Adopción de una arquitectura de Monolito Modular en una Aplicación Web Progresiva (PWA) con operación local (Offline-First) para KandoFlow.

2. Estado

Aprobado.

3. Contexto

KandoFlow es una estación de trabajo móvil diseñada para apoyar a las asesoras comerciales de una agencia automotriz Mazda en tres procesos principales: elaboración de cotizaciones indicativas, integración de expedientes de crédito y ejecución de la entrega vehicular dividida en cinco fases (CU-05), incluyendo el manejo de incidencias o daños (CU-06).

En el entorno real de una agencia automotriz, el trabajo no ocurre únicamente en un escritorio con red estable; gran parte del recorrido sucede en piso de venta, sótanos de resguardo, patios de maniobras y bahías de entrega donde la señal Wi-Fi o de datos móviles es intermitente o nula. Si el sistema dependiera en tiempo real de un servidor remoto para avanzar entre las cinco fases de inspección, registrar la firma de conformidad del cliente en la vista temporal o emitir el pase de salida, cualquier corte de red detendría la entrega física del vehículo frente al cliente.

Adicionalmente, el proyecto se encuentra en una etapa de diseño y validación funcional con un equipo reducido y sin presupuesto para mantener infraestructura compleja en la nube. Adoptar microservicios introduciría latencia de red, costos de servidores dedicados, orquestación distribuida y complejidad innecesaria. Por el contrario, programar un monolito tradicional sin fronteras internas provocaría que la lógica de cotizaciones, las reglas de bloqueo por incidencias en la entrega y el control de acceso por rol quedaran acoplados a las pantallas, dificultando su mantenimiento y pruebas.

4. Decisión

Se decide diseñar e implementar KandoFlow bajo el patrón de Monolito Modular ejecutado como una PWA con persistencia local:

Unidad única de despliegue: El sistema se construirá como una sola Aplicación Web Progresiva (React + TypeScript + Vite) que se instala y ejecuta directamente en el navegador del dispositivo móvil o tableta de la asesora comercial.

Modularidad interna por dominio de negocio: Dentro del mismo proyecto, el código se dividirá estrictamente en cuatro módulos independientes que reflejan el dominio de la agencia:

Módulo de Atención Comercial: gestión de prospectos y cálculo de cotizaciones.

Módulo de Expediente: carga documental y validación de requisitos de crédito.

Módulo de Entrega Vehicular: control de agenda, checklist obligatorio de las cinco fases, evaluación de incidencias bloqueantes o con acuerdo, y emisión del pase de salida.

Módulo de Respaldo: administración de la cola de sincronización y adaptadores de salida.

Comunicación limpia entre módulos: Los módulos solo podrán interactuar mediante interfaces públicas bien definidas (por ejemplo, Entrega notifica a Respaldo cuando se emite un pase válido), prohibiendo que un módulo altere directamente el estado interno de otro.

Almacenamiento local primario y respaldo externo eventual: Toda la operación diaria se guardará primero en IndexedDB dentro del navegador. La comunicación hacia sistemas externos corporativos (Google Drive y Google Sheets) se realizará de forma asíncrona cuando el dispositivo cuente con conexión autorizada.

5. Consecuencias

Positivas

Operación ininterrumpida en bahía de entrega: La asesora puede completar las cinco fases de entrega, capturar acuerdos por incidencias, mostrar la vista temporal al cliente, reautenticarse y generar el pase de salida con respuesta inmediata y sin depender de internet.

Cero costo en servidores propios: Al ejecutarse en el dispositivo local y aprovechar herramientas corporativas ya contratadas (Google Workspace y WhatsApp), no se requiere pagar ni administrar servidores de backend o bases de datos en la nube.

Claridad y mantenibilidad del código: Las reglas críticas del negocio automotriz (como impedir la emisión del pase si existe un daño bloqueante o si falta un control obligatorio) viven aisladas en el módulo de Entrega, lo que facilita su auditoría y evita errores colaterales al modificar las cotizaciones o la interfaz.

Preparación para evolución futura: Si en una versión posterior la agencia decide conectar KandoFlow a un servidor central o DMS corporativo, los límites modulares permitirán extraer los módulos de dominio hacia una API backend sin tener que rediseñar las reglas de negocio.

Negativas

Seguridad y resguardo en el dispositivo físico: Debido a que la información de prospectos, expedientes y entregas reside localmente en IndexedDB, un dispositivo desbloqueado o extraviado representa un riesgo. Esto obliga a implementar bloqueo de sesión, reautenticación obligatoria de la asesora tras el uso de la vista del cliente (RF-15) y cifrado local en la fase de construcción.

Consistencia eventual de los respaldos: Los reportes en Google Sheets y los paquetes en Google Drive no se reflejarán en tiempo real mientras la asesora trabaje sin conexión en el patio; existirá una ventana de tiempo donde los datos más recientes solo estarán en el dispositivo hasta que se procese la cola de sincronización.

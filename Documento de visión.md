# Documento de Visión del Producto

**Proyecto:** KandoFlow (`kandoflow`) 
**Subtítulo / Concepto:** Autonomous Deal Desk & Delivery Cockpit 
**Autor:** Rodrigo Valdespino Vértiz 
**Versión:** 2.0 
**Fecha:** 20 de septiembre de 2026 
**Materia:** Ingeniería de Software (SIS3407)  

---

## 1. Descripción del Sistema

### 1.1 Nombre del Sistema
**KandoFlow** (Nombre del repositorio: `kandoflow`).

### 1.2 Propósito y Resumen Ejecutivo
KandoFlow es un sistema web transaccional y estación de trabajo operativa local-first concebida para blindar, estructurar y acelerar el ciclo completo de ventas y entrega de vehículos de una asesora comercial dentro de una concesionaria automotriz Mazda. El software actúa como un escudo operativo frente a la fragmentación de canales y la falta de soporte interdepartamental en la agencia, unificando desde el primer contacto del cliente en piso o digital hasta la ceremonia técnica de entrega en sala de entregas (*Mazda Handover Experience*).

El sistema normaliza archivos desestructurados (fotografías móviles de identificaciones oficiales, estados de cuenta bancarios en PDF, catálogos en hojas de cálculo Excel) transformándolos en esquemas planos y ultraligeros (`JSON`, `CSV`, `TXT`) para su procesamiento en memoria del navegador sin latencia. Con estos datos normalizados, automatiza la pre-carga, modificación y generación de la documentación requerida por la financiera y la distribuidora en formatos Word (`.docx`), Excel (`.xlsx`) y PDF listos para firma física o digital, garantizando la persistencia soberana local y su sincronización estructurada hacia el entorno corporativo Google Workspace Enterprise de la asesora.

---

## 2. El Problema y los Usuarios

### 2.1 Declaración del Problema (Problem Statement)
* **El problema de:** Dispersión crítica de prospectos en canales no integrados, demoras operativas en el cálculo de financiamiento, desorganización en el armado de expedientes crediticios y descoordinación en el protocolo de entrega física de vehículos.
* **Afecta a:** La asesora de ventas, los clientes compradores y el administrador técnico del sistema.
* **El impacto es:** Pérdida de ventas ante marcas competidoras por tiempos de respuesta prolongados (>4 horas), rechazo de solicitudes en mesa de control por documentación incompleta o ilegible, riesgos de cumplimiento legal por manejo desprotegido de datos bancarios en mensajería personal, y fricción en la entrega física por desalineación con talleres y áreas de detallado.
* **Una solución exitosa sería:** Una estación web transaccional móvil desacoplada que capture prospectos multicanal, genere cotizaciones paramétricas en segundos, audite automáticamente los documentos obligatorios del expediente, orqueste el checklist secuencial de inspección y entrega de la unidad, y exporte paquetes documentales completos sin depender de la asistencia de áreas intermedias.

### 2.2 Proceso Actual (As-Is)
La asesora de ventas gestiona leads entrantes de manera desarticulada mediante libretas físicas y chats de WhatsApp. Los clientes acuden a piso sin cita previa o fuera del horario agendado, solicitando corridas financieras complejas mientras la asesora debe consultar hojas de cálculo pesadas o catálogos desactualizados en terminales fijas de escritorio. La documentación sensible (INE, nóminas, comprobantes fiscales) se almacena dispersa en la galería del móvil. En la fase de entrega, la coordinación con el área técnica de inspección (PDI) y detallado/lavado se realiza de manera verbal, derivando en demoras durante la entrega, omisiones en la configuración tecnológica del vehículo (Mazda Connect, MyMazda) y retrabajos administrativos.

### 2.3 Matriz de Usuarios del Sistema
El sistema define formalmente tres perfiles de usuario con privilegios, interfaces y responsabilidades diferenciadas:

| Tipo de Usuario | Rol y Descripción | Necesidades Principales en el Sistema | Preocupaciones y Riesgos |
| :--- | :--- | :--- | :--- |
| **Usuario Administrador (Rodrigo Valdespino Vértiz)**| Responsable técnico de arquitectura, pruebas de integración, despliegue, monitoreo de esquemas de datos y mantenimiento preventivo. | • Configuración de esquemas de extracción (`JSON`/`CSV`) y plantillas Office/PDF.<br>• Acceso a bitácoras transaccionales de sincronización y diagnóstico de errores.<br>• Pruebas de estrés y validación de atributos de calidad. | • Introducción de errores o regresiones que bloqueen la operación en piso de venta.<br>• Incompatibilidad de formatos binarios o ruptura de tokens con Google Workspace.<br>• Violaciones de integridad en la persistencia local. |
| **Usuario Asesora de Ventas (Erika Vertiz)**| Usuaria operativa principal que atiende al cliente, realiza el perfilamiento comercial, calcula esquemas financieros y conduce la entrega física. | • Registro de clientes y prospectos en menos de 30 segundos.<br>• Cotizador paramétrico funcional en móvil en menos de 45 segundos.<br>• Ingestión y auditoría visual de documentos en formatos Office/PDF.<br>• Checklist interactivo para la ejecución del Handover SOP (Fases 1 a 5). | • Perder ventas o credibilidad por interfaces lentas o congelamientos en piso de venta.<br>• Rechazo de expedientes por parte de la mesa de control crediticio.<br>• Depender de áreas internas indiferentes para verificar el estado de la unidad. |
| **Usuario Cliente / Prospecto**| Comprador del vehículo que interactúa directa o indirectamente con los entregables del sistema (cotizaciones, carga de archivos, firma y entrega). | • Recepción de cotizaciones transparentes y formateadas vía WhatsApp.<br>• Proceso ágil y digno de recepción y firma documental sin tiempos muertos.<br>• Entrega ceremonial del auto con explicación exhaustiva de sistemas de seguridad y confort (*Jinba Ittai*). | • Falta de transparencia en costos, plazos o tasas de interés.<br>• Filtración o mal uso de sus documentos fiscales y bancarios sensibles.<br>• Defectos estéticos no reportados en la unidad o entrega apresurada sin configuración digital. |

### 2.4 Conflicto entre Usuarios y Resolución Arquitectónica
* **Conflicto:** El cliente busca inmediatez absoluta: acude a piso sin cita, cambia de modelo de interés de improviso y exige pruebas de manejo y cotizaciones sin entregar comprobantes de ingresos ni licencias. La asesora necesita blindar su tiempo y su inventario demo contra clientes no calificados sin proyectar burocracia. Paralelamente, el Administrador requiere validar estrictamente los tipos de datos y la completitud del expediente para evitar inconsistencias en el almacenamiento estructurado.
* **Resolución del Sistema:** El sistema implementa un desacoplamiento de etapas: permite la emisión inmediata de cotizaciones rápidas (modo preliminar) y activa un candado transaccional que exige la captura de licencia de conducir vigente antes de habilitar la reserva de unidad demo, así como la validación del expediente antes de generar la orden de entrega.

---

## 3. Alcance del Proyecto

*Regla de Ingeniería: Todo lo que no esté explícitamente redactado en este apartado no existe ni será desarrollado dentro del ciclo actual.*

### 3.1 Funcionalidades Dentro del Alcance (In-Scope)
Cada requerimiento dentro del alcance está formulado de forma verificable mediante verbos operativos comprobables:

1. **Autentica** credenciales de usuario (Administrador y Asesora) bajo esquema de sesión local segura con persistencia de tokens para Google Workspace Enterprise.
2. **Registra** prospectos y clientes capturando nombre, teléfono (10 dígitos), correo electrónico, canal de origen y modelo vehicular Mazda de interés.
3. **Calcula** planes de financiamiento automotriz paramétricos en función de precio de lista, porcentaje de enganche (mínimo 10%), plazo en meses (12 a 72) y tasa de interés activa.
4. **Ingesta** archivos binarios en formatos PDF, Microsoft Word (`.docx`), Microsoft Excel (`.xlsx`) e imágenes rasterizadas (JPEG/PNG) correspondientes a identificaciones (INE), comprobantes de domicilio y estados de cuenta.
5. **Transforma** la información de los archivos cargados hacia estructuras normalizadas de texto plano (`JSON`, `CSV`, `TXT`) para su indexación local inmediata.
6. **Despliega** el semáforo de completitud documental del expediente crediticio (Incompleto / En Revisión / Validado).
7. **Genera** resúmenes comerciales formateados para su envío automatizado a la API de enlace directo de WhatsApp (`https://wa.me/`) y en documentos descargables PDF.
8. **Edita** metadatos y campos variables de las plantillas documentales preconfiguradas directamente desde la interfaz de usuario.
9. **Exporta** paquetes de expedientes pre-llenados en formatos Microsoft Word (`.docx`), Microsoft Excel (`.xlsx`) y PDF compilado sin marcas de agua de herramientas externas.
10. **Agenda** pruebas de manejo asociadas al catálogo demo bloqueando traslapes de horario y exigiendo la carga previa de la licencia de conducir vigente.
11. **Valida** el checklist técnico de 5 fases correspondiente al Mazda Handover Experience:
    * *Fase 1 (Pre-Entrega):* Marca la conclusión de inspección técnica PDI, detallado estético y cotejo de póliza de garantía/factura.
    * *Fase 2 (Recepción):* Registra la hora de arribo del cliente y valida la firma de actas de entrega y contratos de financiamiento.
    * *Fase 3 (El Develado):* Registra la confirmación de la inspección estética visual de carrocería e interiores y captura la fotografía ceremonial.
    * *Fase 4 (Orientación Técnica):* Confirma la vinculación de smartphone (CarPlay/Android Auto), ajuste ergonómico *Jinba Ittai*, explicación de alertas *i-Activesense* y alta de cuenta en aplicación móvil MyMazda.
    * *Fase 5 (Entrega de Llaves):* Registra la entrega formal del duplicado de llaves, manuales de propietario y autorización de salida vehicular.
12. **Sincroniza** los paquetes documentales finalizados y registros transaccionales hacia las carpetas designadas de Google Drive y hojas de cálculo de Google Sheets de la cuenta Enterprise de la asesora.

### 3.2 Exclusiones Explícitas del Alcance (Out-of-Scope)
El sistema **NO** realizará ni tendrá control sobre las siguientes capacidades:
1. **NO** se conectará mediante API ni sincronizará datos con el sistema ERP o DMS propietario central de la concesionaria Mazda.
2. **NO** timbrará comprobantes fiscales digitales por internet (CFDI 4.0 ni complementos de pago) ante el Servicio de Administración Tributaria (SAT).
3. **NO** procesará pagos monetarios en línea, transferencias interbancarias SPEI ni cargos directos a tarjetas de crédito o débito.
4. **NO** recopilará telemetría vehicular vía hardware OBD-II ni ejecutará apertura remota de seguros o ignición de los vehículos demo o de entrega.
5. **NO** dictaminará resoluciones crediticias automatizadas ni se conectará a las interfaces de Buró de Crédito o Círculo de Crédito de forma directa.
6. **NO** mantendrá almacenamiento de expedientes en bases de datos públicas o servidores compartidos de terceros no autorizados.

### 3.3 Justificación de las Exclusiones
* *ERP/DMS Propietario:* Los distribuidores automotrices operan sobre redes corporativas cerradas (ej. SAP, CDK Global, SICOP) con rigurosas barreras de ciberseguridad, permisos burocráticos centralizados y APIs restringidas que harían inviable la entrega y validación técnica del proyecto en un marco ágil.
* *Timbrado Fiscal (CFDI) y Procesamiento de Pagos:* La legislación fiscal mexicana y las políticas internas de la distribuidora reservan la facturación y la cobranza exclusivamente al departamento de cajas corporativo. Intentar cobrar o facturar dentro del sistema transferiría responsabilidades contables y regulatorias ajenas al objetivo de asistencia operativa de la asesora.
* *Telemetría y Buró de Crédito:* El proyecto se delimita a la interfaz humana de atención y compilación operativa. Integrar hardware en vehículos o contratos con sociedades de información crediticia introduce costos de licenciamiento, responsabilidades jurídicas y dependencias externas que diluyen el valor esencial del software.

### 3.4 Justificación de Funcionalidades Futuras (Backlog Evolutivo)
Las siguientes capacidades están reconocidas como valiosas para versiones subsecuentes pero quedan fuera del ciclo actual para maximizar la simplicidad y evitar trabajo innecesario (Principio Ágil 10):
* *Extracción OCR con Inteligencia Artificial On-Device:* Automatizar la lectura de caracteres en identificaciones oficiales escaneadas. *Justificación:* Requiere modelos de visión computacional y calibración contra ruido en imágenes que retrasarían la entrega de las funciones transaccionales centrales.
* *Portal de Autoservicio para el Cliente:* Permitir que el comprador suba sus comprobantes desde su propio navegador web. *Justificación:* Exige desplegar infraestructura pública multinquilino y autenticación de cara al usuario final, incrementando la superficie de ataque y costos de infraestructura antes de validar el flujo de trabajo de la asesora.

---

## 4. Tipo de Sistema y Restricciones

### 4.1 Clasificación y Arquitectura del Sistema
* **Clasificación:** Sistema de Información Web Transaccional, implementado como Progressive Web App (PWA) responsiva para dispositivos móviles y de escritorio.
* **Estructura Arquitectónica:** Arquitectura de 3 Capas Desacopladas:
  1. *Capa de Presentación (Frontend):* Single Page Application (SPA) responsiva touch-first desarrollada en React/TypeScript y empaquetada como PWA para trabajo sin conexión en piso y patio de exhibición.
  2. *Capa de Negocio y Procesamiento Lógico (Backend/Edge Processing):* Controladores de estado transaccional, motor de cálculo financiero paramétrico, validadores de completitud de expediente y pipeline de transformación de archivos binarios a primitivas `JSON`/`CSV`.
  3. *Capa de Datos y Persistencia (Data Layer):* Almacenamiento local estructurado en IndexedDB para disponibilidad offline absoluta, conectado mediante adaptadores REST autenticados a la suite corporativa Google Workspace Enterprise (Google Drive API y Google Sheets API) para respaldo durable y auditoría.

### 4.2 Atributos de Calidad de Software (NFRs verificables)
Basados en el estándar ISO/IEC 25010 aplicable a sistemas de información transaccionales:

* **Rendimiento:**
  * El motor de cálculo financiero despliega la cotización mensual completa en menos de 500 milisegundos tras modificar variables de enganche o plazo en la interfaz cliente.
  * La transformación y lectura de archivos PDF/Word de hasta 10 MB hacia estructuras de datos `JSON` se ejecuta en menos de 2.0 segundos en el dispositivo.
* **Seguridad y Confidencialidad:**
  * Todo documento personal y fiscal cargado se procesa localmente y, al exportarse a Google Workspace, se cifra en tránsito mediante TLS 1.3 y en reposo mediante AES-256.
  * La aplicación restringe el acceso mediante autenticación obligatoria y expira las sesiones inactivas tras 15 minutos en piso de exhibición.
* **Usabilidad:**
  * La asesora de ventas registra un nuevo prospecto y genera su primer resumen en menos de 3 pasos de pantalla y menos de 60 segundos sin requerir teclado físico.
  * Los componentes visuales y botones de acción táctil mantienen dimensiones mínimas de 48 x 48 píxeles con contraste cromático adaptado para lectura bajo luz solar directa.
* **Disponibilidad y Tolerancia a Fallos:**
  * El sistema mantiene el 100% de sus funcionalidades de captura, consulta y checklist operativas ante la pérdida de conectividad a internet, sincronizando automáticamente los cambios en cola al detectar red estable.

### 4.3 Reglas de Negocio Formales (Business Rules)
* **RN-01 (Tope Paramétrico de Financiamiento):** Ninguna cotización de crédito automotriz puede emitirse con un enganche menor al 10% del valor total de lista de la unidad ni con plazos distintos a 12, 24, 36, 48, 60 o 72 meses.
* **RN-02 (Candado para Agendamiento Demo):** El sistema bloquea la asignación de horario para prueba de manejo si el registro del cliente no contiene el archivo de la licencia de conducir vigente.
* **RN-03 (Separación Temporal de Flotilla Demo):** El sistema impide registrar dos pruebas de manejo sobre el mismo vehículo demo sin un margen de amortiguamiento de al menos 20 minutos entre citas para inspección física y combustible.
* **RN-04 (Auditoría Mandatoria de Expediente):** El expediente crediticio no puede cambiar a estatus "Validado para Envío" si falta cualquiera de los siguientes tres elementos legibles: Identificación Oficial (INE), Comprobante de Domicilio (<3 meses) y Estados de Cuenta Bancarios completos.
* **RN-05 (Secuencia Bloqueante de Entrega - Handover SOP):** El sistema impide autorizar la Fase 5 (Entrega de Llaves y Salida) si no se han completado y firmado digitalmente las listas de verificación de las Fases 1 (PDI), 2 (Contratos), 3 (Inspección Visual) y 4 (Configuración de Aplicación MyMazda y Seguridad).

---

## 5. Ciclo de Vida del Software Elegido

### 5.1 Selección y Justificación del Modelo
Se selecciona un modelo de **Ciclo de Vida Ágil** fundamentado en el marco de trabajo **Scrum / Sprints de 2 semanas**, complementado con entregas continuas y validaciones frecuentes.

#### Justificación Basada en las Características Reales del Proyecto:
1. **Requisitos Evolutivos y Dependientes del Contexto Real:** El proceso de venta y entrega automotriz enfrenta fricciones impredecibles (clientes que llegan sin cita, demoras imprevistas del taller en PDI). Un enfoque iterativo de 2 semanas permite construir un incremento funcional, ponerlo en manos de la asesora en el piso de venta real y absorber retroalimentación operativa antes de solidificar la siguiente fase (Principio Ágil 1 y 3).
2. **Alta Disponibilidad del Usuario Experto:** La asesora de ventas y el administrador tienen comunicación directa y constante para evaluar los incrementos quincenales, satisfaciendo el Principio Ágil 4 (trabajo colaborativo diario entre negocio y desarrollo).
3. **Prevención de Reworks y Errores Tardíos:** La división del alcance en bloques quincenales verificables (Sprint 1: Ingestión y normalización; Sprint 2: Cotizador y documentos; Sprint 3: Handover SOP) acorta el intervalo entre error y detección. Esto evita la aparición de fallas estructurales acumuladas que comúnmente obligan a realizar *hotfixes* o parches de emergencia de última hora.

### 5.2 Alternativas de Modelos Descartadas y Razones de Descarte
Conforme al análisis de ingeniería de software, se evaluaron y descartaron formalmente las siguientes opciones:

1. **Modelo en Cascada (Waterfall) - DESCARTADO:**
   * *Razón de Descarte:* El modelo en cascada asume que todos los requisitos son estables, conocidos y congelados desde el primer día, prohibiendo el retroceso entre fases. En este proyecto, someter la operación de la agencia a un diseño rígido sin validaciones intermedias provocaría que las discrepancias en el manejo de archivos binarios o tiempos de entrega física solo se descubrieran en la validación final, con un costo de corrección prohibitivo.
2. **Modelo en Espiral - DESCARTADO:**
   * *Razón de Descarte:* Aunque el modelo en espiral gestiona riesgos de forma rigurosa, introduce un costo de gestión, análisis formal y sobrecarga de documentación desproporcionado para un sistema enfocado en la productividad de una estación de trabajo específica. El esfuerzo administrativo de gobernar ciclos continuos de análisis de riesgos terminaría pesando más que la propia construcción del software.

---

## 6. Plan Inicial de Sprints (Estructura de Construcción)

* **Sprint 1 (Semanas 1-2):** Modelado de tipos (`deal_state.json`), motor de ingestión de archivos (PDF/Word/Excel) y persistencia reactiva local en IndexedDB.
* **Sprint 2 (Semanas 3-4):** Motor paramétrico de cotización rápida, validación de reglas de negocio crediticias (RN-01 a RN-04) y generación de resúmenes para WhatsApp y PDF.
* **Sprint 3 (Semanas 5-6):** Módulo de orquestación de entrega ceremonial (Mazda Handover Experience - Fases 1 a 5) y semáforo de pre-entrega (RN-05).
* **Sprint 4 (Semanas 7-8):** Integración del puente de sincronización con Google Workspace Enterprise (Drive API / Sheets API), pruebas integrales de usabilidad en piso y endurecimiento de seguridad.

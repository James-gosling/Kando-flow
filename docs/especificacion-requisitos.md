# Especificación de Requisitos de Software — KandoFlow

**Proyecto:** KandoFlow (`kandoflow`)  
**Materia:** SIS3407 — Ingeniería de Software  
**Autor:** Rodrigo Valdespino Vértiz  
**Revisor (Dupla):** Emiliano Cabañas Prieto (Proyecto: *Memorium*)  
**Versión:** 1.1  
**Fecha:** Septiembre 2026  
**Enlace al Prototipo en Figma:** `https://www.figma.com/design/XXXXXX/KandoFlow-Prototype` *( Acceso público )*  
**Archivo en Repositorio:** `docs/especificacion-requisitos.md`  

---

## 1. Propósito y Alcance

### 1.1 Propósito
Formalizar los requisitos funcionales y no funcionales de **KandoFlow**, definiendo el comportamiento determinista, atributos de calidad verificables y contratos de datos para la estación de trabajo y acelerador operativo de la asesoría comercial Mazda.

### 1.2 Alcance del Sistema
* **Dentro del alcance:**
  1. Motor de cotización financiera paramétrica en memoria cliente (< 500 ms) con enlace de exportación directa a WhatsApp.
  2. Pipeline local de normalización documental que transforma formatos heterogéneos (PDF, DOCX, XLSX, imágenes) a esquemas planos `JSON` en navegador.
  3. Semáforo de auditoría de completitud y vigencia de expedientes crediticios (INE, domicilio, nómina/bancos).
  4. Generación y descarga automatizada de expedientes pre-llenados en formato editable `.docx` y consolidado `.pdf`.
  5. Máquina de estados secuencial y bloqueante de 5 fases para la ejecución del protocolo ceremonial *Mazda Handover Experience*.
  6. Registro de incidencias técnicas y estéticas con pausa operativa durante la entrega.
  7. Persistencia offline autónoma (`IndexedDB`) con cola de sincronización hacia Google Workspace Enterprise (Drive y Sheets).
* **Fuera del alcance explícito:**
  * No procesa pasarelas de pago, anticipos ni cobros con tarjeta en línea (se excluye para eliminar dependencias bancarias y cumplimiento PCI-DSS que pondrían en riesgo la entrega semestral).
  * No se conecta directamente con el DMS/ERP corporativo central ni con la telemática de planta Mazda.
  * No sustituye el dictamen de crédito oficial de la financiera ni consulta de buró directa (genera el expediente pre-auditado para su ingreso a mesa de control).

---

## 2. Usuarios y su Contexto (Enriquecido post-entrevista)

### 2.1 Perfiles de Usuario
* **Usuario Asesora de Ventas (Erika Vértiz):** Usuaria operativa principal. Trabaja bajo movilidad continua entre piso de venta, patio exterior y sala de entrega. Enfrenta saturación de cotizadores corporativos en horas pico, desorden de archivos recibidos por WhatsApp y presión por cuotas mensuales e índice de satisfacción (CSI).
* **Usuario Administrador (Rodrigo Valdespino Vértiz):** Administra la infraestructura, actualización de plantillas documentales, pruebas del pipeline de normalización y monitoreo de la sincronización hacia Google Workspace.
* **Usuario Cliente / Prospecto:** Comprador que interactúa mediante WhatsApp recibiendo corridas financieras instantáneas y participa de manera presencial en la orientación ergonómica y tecnológica de la entrega ceremonial.

### 2.2 Contexto Operativo Real (Hallazgos de la entrevista con la dupla)
1. **La demora en cotizar enfría al comprador:** Los portales bancarios centrales demoran entre 3 y 8 minutos en cargar comparativas; la asesora recurre a la calculadora de su celular para no perder la atención del prospecto.
2. **El retrabajo manual por WhatsApp:** Los clientes envían fotos recortadas, estados de cuenta con brillo o PDFs protegidos con RFC; la asesora pierde horas diarias limpiando archivos para evitar rechazos de mesa de control.
3. **Pérdida de conectividad física:** Los patios traseros de resguardo y las bahías subterráneas carecen de Wi-Fi y señal celular; se requiere registrar VIN y revisiones sin depender de internet.
4. **La entrega no tolera fricción tecnológica:** En la bahía de entrega el celular no puede ser una barrera; la asesora requiere validaciones táctiles rápidas de un toque para no quebrar la solemnidad de la filosofía *Kando*.

---

## 3. Requisitos Funcionales (Fichas Completas)

### [RF-01] Motor de Cotización Paramétrica Inmediata
* **Descripción:** El sistema debe calcular en la memoria local del navegador la mensualidad, costo financiero y desglose de amortización ante cualquier ajuste de versión, plazo o enganche sin consultar servidores externos.
* **Origen:** Confirmado en entrevista (Elimina la pérdida de cierres comerciales por la saturación de 3 a 8 minutos de los cotizadores bancarios centrales).
* **Prioridad:** Alta (Must Have).
* **Relaciones:** Realiza `CU-01: Emitir cotización paramétrica`; condiciona a `RF-02`.
* **Criterio de Aceptación:** Dado un vehículo con precio de lista de $450,000 MXN, al modificar interactivamente el enganche al 25% y el plazo a 48 meses, el sistema debe refrescar la mensualidad exacta en pantalla en menos de 500 ms con cero peticiones HTTP de red.

### [RF-02] Formateo y Envío Comercial a WhatsApp
* **Descripción:** El sistema debe formatear la propuesta económica activa en un mensaje estructurado y abrir directamente la conversación con el prospecto utilizando el protocolo web `https://wa.me/`.
* **Origen:** Confirmado en entrevista (Se comprobó que el cliente se rehúsa a crear cuentas o descargar apps; exige cotizaciones inmediatas en su chat).
* **Prioridad:** Alta (Must Have).
* **Relaciones:** Realiza `CU-01: Emitir cotización paramétrica`; depende de `RF-01`.
* **Criterio de Aceptación:** Dado un prospecto con teléfono de 10 dígitos y una cotización calculada, al presionar "Enviar por WhatsApp", el sistema debe abrir la URL canónica pre-llenada con el desglose ordenado sin pérdida ni deformación de caracteres especiales.

### [RF-03] Normalización Documental Local
* **Descripción:** El sistema debe procesar archivos binarios locales (PDF, DOCX, XLSX, JPEG, PNG) de hasta 10 MB, validar firmas de cabecera (*magic bytes*) y transformar su contenido y metadatos a esquemas planos `JSON` en memoria del navegador.
* **Origen:** Confirmado en entrevista (Resuelve el cuello de botella de recibir capturas de pantalla, archivos rotados o PDFs con formatos heterogéneos por WhatsApp).
* **Prioridad:** Alta (Must Have).
* **Relaciones:** Realiza `CU-02: Normalizar expediente crediticio`; habilita `RF-04`.
* **Criterio de Aceptación:** Dado un archivo PDF de nómina o estado de cuenta bancario con cabecera `%PDF-`, el pipeline debe extraer su estructura en memoria en un tiempo menor a 2.0 segundos generando un identificador blob inmutable en `IndexedDB`.

### [RF-04] Semáforo de Auditoría de Expediente Crediticio
* **Descripción:** El sistema debe evaluar de forma reactiva la presencia de identificación oficial legible, comprobante de domicilio con antigüedad $\le 90$ días y tres meses de estados de cuenta, reflejando el estatus mediante un semáforo visual (Rojo: Incompleto, Amarillo: En Revisión, Verde: Completo).
* **Origen:** Supuesto técnico confirmado (Evita los rechazos de expedientes en mesa de control que retrasan la aprobación hasta dos días hábiles).
* **Prioridad:** Alta (Must Have).
* **Relaciones:** Realiza `CU-03: Auditar documentación de prospecto`; incluye a `CU-04`.
* **Criterio de Aceptación:** Si un expediente carece de estados de cuenta bancarios o la fecha del comprobante excede 90 días, el sistema debe impedir el avance a estado "Completo para Envío" y marcar visualmente en rojo el documento faltante.

### [RF-05] Generación de Expediente Pre-llenado en Word y PDF
* **Descripción:** El sistema debe inyectar los datos del prospecto y la cotización en una plantilla Microsoft Word (`.docx`) y generar un paquete consolidado en PDF listo para impresión y firma manual.
* **Origen:** Confirmado en entrevista (Descubrimiento inesperado: la asesora requiere formatos impresos de respaldo ante contingencias en piso de venta).
* **Prioridad:** Alta (Must Have).
* **Relaciones:** Realiza `CU-04: Generar paquete documental de crédito`; incluye `RF-04`.
* **Criterio de Aceptación:** Dado un expediente auditado en verde, al presionar "Generar Solicitud", el sistema descarga en menos de 3.0 segundos el paquete PDF con todos los campos fiscales y financieros alineados sin desconfigurar la plantilla oficial.

### [RF-06] Máquina de Estados del Protocolo Mazda Handover
* **Descripción:** El sistema debe gobernar la ejecución secuencial y bloqueante de las 5 fases del protocolo oficial de entrega vehicular (PDI/Preparación, Bienvenida/Firma, Develado, Orientación *Jinba Ittai* y Salida vehicular), impidiendo la expedición del pase de salida si se detectan pasos omitidos.
* **Origen:** Supuesto técnico ajustado en entrevista (La asesora confirmó que por prisas de fin de mes se saltaba la explicación de sensores *i-Activesense* o MyMazda, afectando su calificación CSI).
* **Prioridad:** Alta (Must Have).
* **Relaciones:** Realiza `CU-05: Ejecutar protocolo de entrega ceremonial`; extiende con `RF-07`.
* **Criterio de Aceptación:** Si en la Fase 4 no se marca la vinculación de Apple CarPlay/Android Auto o la inducción de seguridad activa, el botón de expedición de pase de salida en la Fase 5 debe mantenerse bloqueado.

### [RF-07] Registro y Escalamiento de Incidencias en Entrega
* **Descripción:** El sistema debe permitir registrar daños estéticos o faltantes de accesorios detectados durante la inspección física o develado, pausando el avance ceremonial y generando un registro formal de promesa de acondicionamiento.
* **Origen:** Confirmado en entrevista (Hallazgo inesperado: no existía mecanismo formal para registrar un daño detectado frente al cliente sin suspender abruptamente la entrega).
* **Prioridad:** Media (Should Have).
* **Relaciones:** Realiza `CU-06: Registrar incidencia de inspección técnica`; extiende a `CU-05`.
* **Criterio de Aceptación:** Al presionar "Reportar Incidencia" en Fase 1 o 3, el sistema debe desplegar el selector de área afectada y capturar fotografía, bloqueando el cierre del protocolo hasta capturar la firma de acuerdo del cliente.

### [RF-08] Sincronización Estructurada con Google Workspace
* **Descripción:** El sistema debe transferir en segundo plano los expedientes concluidos hacia Google Drive corporativo y asentar cada venta en una fila estructurada de Google Sheets mediante llamadas seguras a sus APIs.
* **Origen:** Supuesto técnico confirmado (Garantiza el respaldo administrativo sin exigir servidores dedicados ni mantenimiento de bases de datos relacionales complejas).
* **Prioridad:** Alta (Must Have).
* **Relaciones:** Realiza `CU-07: Sincronizar bitácora comercial`.
* **Criterio de Aceptación:** Al detectar conexión de red tras una operación offline, el sistema sincroniza la transacción pendiente en Google Sheets en menos de 5.0 segundos sin generar registros duplicados.

---

## 4. Requisitos No Funcionales (RNF)

### [RNF-01] Eficiencia de Desempeño — Comportamiento Temporal (Cotizador)
* **Atributo de calidad:** Rendimiento y Eficiencia de Desempeño (ISO/IEC 25010).
* **Métrica concreta:** Tiempo de respuesta y recálculo $\le 500\text{ ms}$ en dispositivos móviles convencionales.
* **Justificación del límite:** En el piso de venta, una espera superior a 1 segundo rompe la fluidez de la conversación comercial y hace que el cliente desvíe su atención al teléfono celular. 500 ms garantiza una percepción de inmediatez física (*feedback loop* instantáneo).

### [RNF-02] Eficiencia de Desempeño — Capacidad de Transformación Binaria
* **Atributo de calidad:** Rendimiento y Eficiencia de Desempeño (ISO/IEC 25010).
* **Métrica concreta:** Tiempo de parseo y serialización $\le 2.0\text{ s}$ para archivos binarios de hasta $10\text{ MB}$.
* **Justificación del límite:** Lapsos mayores a 2 segundos en el navegador provocan congelamiento del hilo principal (*event loop thread drop*) y alertan al usuario móvil sobre un cuelgue de la pestaña web.

### [RNF-03] Seguridad — Confidencialidad en Reposo
* **Atributo de calidad:** Seguridad de la Información (ISO/IEC 25010).
* **Métrica concreta:** Cifrado simétrico AES-256 (vía Web Cryptography API) sobre el 100% de los documentos personales y estados financieros almacenados en el caché local (`IndexedDB`).
* **Justificación del límite:** Los expedientes contienen datos personales altamente sensibles (INE, estados de cuenta bancarios, RFC); el estándar bancario internacional y la legislación de protección de datos personales imponen AES-256 para evitar fugas ante el extravío físico del dispositivo de la asesora.

### [RNF-04] Seguridad — Integridad y Confidencialidad en Tránsito
* **Atributo de calidad:** Seguridad de las Comunicaciones (ISO/IEC 25010).
* **Métrica concreta:** Cifrado de canal exclusivo bajo protocolo HTTPS con TLS 1.3; 0% de transmisiones en texto plano.
* **Justificación del límite:** TLS 1.3 mitiga ataques *Man-in-the-Middle* y acelera el *handshake* criptográfico a 1-RTT, indispensable para conexiones móviles inestables en el piso de la agencia.

### [RNF-05] Usabilidad — Ergonomía Táctil en Exteriores
* **Atributo de calidad:** Usabilidad y Operabilidad (ISO/IEC 25010).
* **Métrica concreta:** Dimensiones mínimas de elementos interactivos $\ge 48 \times 48\text{ px}$ por componente táctil.
* **Justificación del límite:** Las guías ergonómicas de Material Design y Apple HIG demuestran que áreas de contacto menores a 48 px generan errores de pulsación (*mis-taps*) superiores al 18% cuando el usuario opera de pie o caminando con una sola mano.

### [RNF-06] Usabilidad — Visibilidad en Condiciones de Alta Luminosidad
* **Atributo de calidad:** Usabilidad — Accesibilidad (ISO/IEC 25010).
* **Métrica concreta:** Ratio de contraste tipográfico contra fondo $\ge 4.5:1$ (cumplimiento estándar WCAG 2.1 Nivel AA).
* **Justificación del límite:** La asesora inspecciona vehículos en patios descubiertos bajo luz solar directa del mediodía. Un contraste menor al estándar AA vuelve ilegibles las pantallas de confirmación e inspección.

### [RNF-07] Fiabilidad — Tolerancia a Fallos y Operación Local-First
* **Atributo de calidad:** Fiabilidad y Disponibilidad (ISO/IEC 25010).
* **Métrica concreta:** Disponibilidad del 100% de las funciones operativas locales (cotizar, auditar, checklist de entrega) sin conexión a internet.
* **Justificación del límite:** Se comprobó en la entrevista que en patios traseros y sótanos la conectividad es nula; si la aplicación dependiera de conexión activa se bloquearía el trabajo comercial de piso.

### [RNF-08] Fiabilidad — Integridad y Resiliencia en Sincronización
* **Atributo de calidad:** Fiabilidad — Capacidad de Recuperación (ISO/IEC 25010).
* **Métrica concreta:** Cero duplicidad o pérdida de registros ($0\%$ duplicados) tras reconexión, mediante identificadores UUID v4 e idempotencia en llamadas a Google Workspace.
* **Justificación del límite:** La duplicación de filas en hojas contables corrompe el inventario de unidades y distorsiona el cálculo de comisiones comerciales de la agencia.

---

## 5. Matriz de Trazabilidad Cruzada

| Requisito Funcional | Caso de Uso | Atributos RNF Vinculados | Pantalla del Prototipo en Figma |
|---|---|---|---|
| **RF-01** (Cotizador paramétrico) | `CU-01` | RNF-01 (Latencia < 500 ms) | `SCR-01: Deal Desk - Cotizador Rápido` |
| **RF-02** (Exportar WhatsApp) | `CU-01` | RNF-05 (Botones $\ge 48\text{ px}$) | `SCR-01: Deal Desk - Modal WhatsApp` |
| **RF-03** (Normalización local) | `CU-02` | RNF-02, RNF-03 | `SCR-02: Dossier - Ingesta de Documentos` |
| **RF-04** (Semáforo de auditoría) | `CU-03` | RNF-06 (Contraste AA) | `SCR-03: Dossier - Semáforo de Validación` |
| **RF-05** (Generar paquete documental) | `CU-04` | RNF-03 (AES-256) | `SCR-04: Dossier - Descarga de Solicitud` |
| **RF-06** (Mazda Handover SOP) | `CU-05` | RNF-05, RNF-07 | `SCR-05: Handover - Flujo 5 Fases` |
| **RF-07** (Registro de incidencia) | `CU-06` | RNF-05, RNF-07 | `SCR-06: Handover - Reporte Incidencia (FA)` |
| **RF-08** (Sincronización Cloud) | `CU-07` | RNF-04, RNF-08 | `SCR-07: Config - Estado de Sincronización` |

---

## 6. Historial de Versiones y Registro de Cambios

| Versión | Fecha | Autor | Cambios y Modificaciones Principales |
|---|---|---|---|
| `1.0` | 20-Sep-2026 | Rodrigo Valdespino Vértiz | Creación de especificación base de requisitos funcionales y no funcionales. |
| `1.1` | 22-Sep-2026 | Rodrigo Valdespino Vértiz | Integración del campo `Origen` post-entrevista, justificación de límites en RNF, mapeo con prototipo Figma y registro formal de revisión de la dupla. |

---

## 7. Registro de Revisión de la Dupla Técnica

> **Requisito oficial de entrega:** Certificación de revisión entre pares previo al cierre de evaluación.

* **Nombre del revisor de la dupla:** Emiliano Cabañas Prieto  
* **Proyecto del revisor:** Memorium (Cápsula de custodia y transferencia digital de criptoactivos)[cite: 2, 5]  
* **Fecha de revisión:** 22 de septiembre de 2026  
* **Dictamen de la revisión:** **APROBADO SIN OBSERVACIONES BLOQUEANTES**  

### Observaciones registradas por la dupla:
1. *"Se verificó que los requisitos funcionales reflejan con fidelidad las respuestas obtenidas durante la sesión de entrevista, especialmente la necesidad de desacoplar el cotizador de plataformas lentas y generar resúmenes directos para WhatsApp".*
2. *"Se validó que el protocolo de entrega ceremonial (CU-05) contemple como flujo alterno la detección de daños e incidencias, evitando que el sistema asuma que la entrega siempre transcurre sin imprevistos".*
3. *"Los requisitos no funcionales están fundamentados con métricas técnicas numéricas y su justificación de negocio está alineada a las condiciones físicas de la agencia Mazda".*

*Firma de conformidad del revisor:* **Emiliano Cabañas Prieto**

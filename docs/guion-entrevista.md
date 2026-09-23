# Entrevista de Validación de Requisitos y Dominio — KandoFlow

**Proyecto:** KandoFlow (`kandoflow`)  
**Entrevistador:** Rodrigo Valdespino Vértiz  
**Dupla (Rol de negocio):** Emiliano Cabañas Prieto (Proyecto de la dupla: *Memorium*)  
**Rol interpretado:** Asesora Comercial Senior en Agencia Mazda  
**Archivo:** `docs/entrevista-requisitos.md`  

---

## 1. Ficha de Dominio (Entregada a la Dupla)

> **Tu papel:** Eres Asesora Comercial Senior en piso de venta Mazda. Vendes bajo la filosofía *Kando* (hospitalidad y trato cálido), pero con la presión diaria de cumplir cuotas mensuales de venta y colocación de crédito. Responde desde tu experiencia práctica y cómo resuelves las cosas hoy. No hables de programación, bases de datos ni propongas software.

### Contexto operativo
* **Piso y canales digitales:** Atiendes visitas espontáneas que piden números de inmediato y prospectos por WhatsApp que mandan fotos de INE, nóminas y estados de cuenta en formatos dispersos.
* **Fricciones internas:** Mesa de control rechaza solicitudes si los documentos no son legibles; los cotizadores bancarios oficiales demoran en cargar en horas pico; y taller entrega los autos con el tiempo justo.
* **Ceremonia de entrega:** La entrega no es solo dar las llaves; comprende 5 fases (revisión de la unidad, firma, retiro de la funda, explicación de sistemas *Jinba Ittai* / *i-Activesense* y entrega de llaves/pase).
* **Entorno físico:** En patios de inventario y sótanos no hay cobertura estable de Wi-Fi ni datos móviles.

---

## 2. Guion de Entrevista Organizado por Tramos

### Tramo A: Contexto Operativo
1. ¿Cómo se distribuye tu tiempo habitual entre atender clientes que entran a piso, prospectar por mensaje y coordinar trámites con taller o administración?
2. ¿Qué métricas de servicio o tiempos de atención te exige cuidar la gerencia durante la venta?

### Tramo B: Proceso Actual (Hechos concretos)
3. Cuéntame de la última vez que un cliente te pidió comparar dos autos con diferente enganche y plazo: ¿qué herramientas usaste y cuántos minutos tardaste en darle los números definitivos?
4. Recuerda el caso más reciente donde integraste un expediente para crédito: ¿en qué condiciones recibiste los archivos del cliente y qué pasos manuales seguiste para enviarlos a revisión?
5. Pensando en la última entrega de auto a fin de mes: ¿cómo coordinaste que la unidad estuviera lista, con papeles completos y explicada al cliente antes de que saliera de la agencia?

### Tramo C: Dolores y Fricciones
6. Cuando estás frente al cliente en tu escritorio en un día de alta afluencia, ¿cuál es la mayor traba para avanzar una cotización o registrar sus datos?
7. ¿Qué consecuencias directas enfrentas cuando mesa de control devuelve un expediente por inconsistencias en los documentos?

### Tramo D: Excepciones
8. ¿Qué haces si el portal financiero o la red de la agencia se caen mientras el cliente está decidido a firmar su solicitud de crédito?
9. ¿Cómo actúas si durante la entrega ceremonial el cliente nota un detalle estético en el auto o falta un accesorio solicitado?

### Tramo E: Verificación de Supuestos de Requisitos
10. **(Supuesto RF: Cotizador paramétrico < 500 ms):** ¿Cómo reacciona un prospecto cuando el sistema corporativo tarda varios minutos en recalcular corridas financieras y qué haces tú mientras tanto?
11. **(Supuesto RF: Normalización documental local):** ¿Qué problemas manuales enfrentas cuando un cliente te comparte PDFs con contraseña o fotos inclinadas de su identificación?
12. **(Supuesto RF: Validación secuencial de entrega):** ¿Cómo aseguras que no se pase por alto ningún punto técnico de la unidad o de la configuración del auto en días con múltiples entregas simultáneas?
13. **(Supuesto RNF: Operación Offline / Local-First):** Cuando estás en patios traseros o sótanos sin señal, ¿cómo consultas números de serie (VIN) o datos del inventario?

---

## 3. Bitácora de la Entrevista

### 3.1 Supuestos confirmados (Respaldan el alcance definido)
* **La lentitud de cotización enfría la venta:** Se confirmó que los sistemas centrales demoran de 3 a 8 minutos en horas pico. La asesora recurre a la calculadora del celular para retener al cliente, validando la necesidad del motor paramétrico local de cálculo instantáneo en memoria del navegador.
* **El procesamiento manual de documentos es un cuello de botella:** Se comprobó que los clientes envían archivos por WhatsApp con brillos, contraseñas o páginas faltantes. La asesora pierde horas editando y desbloqueando archivos para evitar rechazos, confirmando el valor del pipeline de normalización documental.
* **Pérdida recurrente de conectividad en patio:** Se confirmó que en sótanos y áreas de resguardo no hay señal, forzando anotaciones en papel que provocan errores de captura del VIN. Esto respalda la arquitectura PWA local-first con persistencia en IndexedDB.

### 3.2 Supuestos que resultaron falsos o imprecisos (Ajustes aplicados)
* **Supuesto falso:** *La asesora completará un checklist digital extenso frente al cliente durante la entrega.*  
  * *Ajuste:* Manipular el teléfono constantemente en la bahía de entrega rompe la experiencia *Kando*. La interacción en el módulo de entrega debe limitarse a validaciones mínimas de un solo toque por fase (Touch-First).
* **Supuesto impreciso:** *El cliente accederá a una plataforma web a dar seguimiento a su trámite.*  
  * *Ajuste:* El comprador no quiere crear cuentas ni descargar apps. La salida comercial de KandoFlow debe generar resúmenes financieros limpios listos para copiar y enviar directamente por WhatsApp.

### 3.3 Hallazgos inesperados (Dentro de la frontera del sistema)
* **Respaldo en papel ante caídas de sistema:** Ante fallas de conexión o de portales externos, la asesora recurre a solicitudes físicas en blanco. El sistema debe contemplar la descarga inmediata de la solicitud pre-llenada en formato estándar (PDF) para firma manual de contingencia.
* **Vínculo directo con el índice de satisfacción (CSI):** Las demoras u omisiones en la explicación del auto afectan directamente la evaluación del cliente y las comisiones de la asesora. El sistema no es solo organizativo, sino una herramienta de protección de ingresos y cumplimiento operativo.

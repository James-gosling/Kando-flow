# Zanshin Bushidō (`zanshin-bushido`)

> **Estación de Trabajo Operativa, Automatización Documental y Protocolo de Entrega para Asesoría Comercial Automotriz.**  
> *Diseñado para operar con autonomía en piso de venta, disciplina operativa y trazabilidad integral desde el primer contacto hasta la entrega de llaves.*

---

## 1. Descripción del Sistema

`Zanshin Bushidō` es una aplicación web transaccional responsiva (PWA) de arquitectura desacoplada y filosofía local-first[cite: 1, 8]. Fue diseñada para asistir y blindar operativamente a la asesora de ventas automotriz frente a la fragmentación de canales, la falta de soporte interdepartamental y la llegada no programada de clientes a la concesionaria[cite: 1].

El sistema centraliza el ciclo de vida del cliente mediante tres capacidades críticas[cite: 1]:
1. **Ingestión y Normalización Rápida:** Transforma archivos binarios desestructurados (PDFs, escaneos de identificaciones oficiales, comprobantes de nómina, hojas de cálculo en `.xlsx` y documentos Word `.docx`) a estructuras ligeras de datos en texto plano (`JSON`, `CSV`, `TXT`) para consulta y procesamiento inmediato en memoria del navegador[cite: 1].
2. **Generación Documental Automatizada:** Pre-llena y compila expedientes crediticios y cotizaciones financieras directamente en formatos Microsoft Word (`.docx`), Microsoft Excel (`.xlsx`) y PDF compilado sin marcas de agua[cite: 1].
3. **Orquestación del Handover SOP:** Guía paso a paso la verificación y ejecución de las 5 fases de entrega ceremonial del vehículo (*Mazda Handover Experience*)[cite: 1].

---

## 2. Roles de Usuario

El acceso y control del sistema está estructurado formalmente en tres perfiles[cite: 8]:

* **Usuario Administrador (Rodrigo Valdespino Vértiz):** Administra el repositorio, despliegues, pruebas de software, mantenimiento de esquemas de datos y diagnósticos de sincronización[cite: 1, 5, 6].
* **Usuario Asesora de Ventas (Erika Vertiz):** Opera la plataforma en piso de exhibición, registra prospectos, emite cotizaciones en tiempo real, audita expedientes y ejecuta el checklist de entrega[cite: 1].
* **Usuario Cliente / Prospecto:** Recibe cotizaciones formateadas vía enlace de WhatsApp, formaliza contratos y experimenta la orientación técnica del vehículo[cite: 1].

---

## 3. Arquitectura del Sistema (3 Capas Desacopladas)

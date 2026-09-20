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

[ Cliente / Prospecto ] (Piso, WhatsApp, Cita Espontánea)
│
▼
┌────────────────────────────────────────────────────────────────────────┐
│ Capa 1: Presentación (Frontend SPA / PWA)                             │
│ - React + TypeScript + Vite (Touch-First, botones ≥ 48x48 px)          │
│ - Funcionamiento 100% offline para patio de autos y salas de entrega   │
└───────────────────────────────────┬────────────────────────────────────┘
│
▼
┌────────────────────────────────────────────────────────────────────────┐
│ Capa 2: Lógica de Negocio y Procesamiento (Edge / Client-Side Engine)  │
│ - Motor Paramétrico de Cotización (< 500 ms)                           │
│ - Pipeline de Normalización: PDF/Office/Imágenes ➔ JSON / CSV / TXT    │
│ - Semáforo de Auditoría de Expedientes (INE, Domicilio, Bancos)        │
│ - Motor de Validación Bloqueante de Entrega (Fases 1 a 5 SOP)          │
└───────────────────────────────────┬────────────────────────────────────┘
│
▼
┌────────────────────────────────────────────────────────────────────────┐
│ Capa 3: Persistencia y Datos (Local Sovereign + Enterprise Sync)       │
│ - Persistencia Local Inmediata: IndexedDB (Browser Cache)              │
│ - Sincronización Segura: Google Workspace Enterprise (Drive / Sheets)  │
│ - Cifrado: TLS 1.3 en tránsito y AES-256 en reposo                     │
└────────────────────────────────────────────────────────────────────────┘


---

## 4. Protocolo de Entrega: Mazda Handover SOP (5 Fases)

El sistema hace cumplir de forma secuencial y bloqueante las fases del protocolo de entrega física de la unidad[cite: 1]:

1. **Fase 1: Pre-Entrega e Inspección Técnica (PDI):** Cotejo de retiro de plásticos, diagnóstico mecánico PDI completado, detallado/lavado de carrocería y armado de carpeta fiscal/garantía.
2. **Fase 2: Bienvenida y Firma Contractual:** Recepción del cliente en Handover Lounge, revisión de términos financieros y captura de firmas en actas de aceptación.
3. **Fase 3: El Develado Ceremonial:** Retiro de funda premium en bahía de entrega, captura de fotografía de celebración e inspección estética visual de interiores y exteriores.
4. **Fase 4: Orientación Técnica Mazda (*Jinba Ittai*):** Calibración de postura ergonómica del conductor, emparejamiento de smartphone (Apple CarPlay / Android Auto), explicación de suite de seguridad *i-Activesense* y vinculación de cuenta en app MyMazda.
5. **Fase 5: Entrega Final y Salida:** Entrega formal de juegos de llaves, estuche de manuales de propietario, obsequio de cortesía y validación de pase de salida.

---

## 5. Estructura del Repositorio

El repositorio sigue una organización modular alineada a los estándares de ingeniería de software[cite: 7]:

```text
zanshin-bushido/
├── docs/
│   ├── vision-del-producto.md     # Documento de Visión formal (5 apartados)
│   └── handover-sop.md            # Especificación detallada de las 5 fases
├── public/                        # Activos estáticos y manifiesto PWA
├── src/
│   ├── assets/                    # Iconografía y estilos visuales
│   ├── components/                # Componentes de interfaz reutilizables
│   ├── modules/
│   │   ├── deal-desk/             # Registro de prospectos y cotizador paramétrico
│   │   ├── dossier/               # Ingestión, parsing y exportación Office/PDF
│   │   ├── handover/              # Checklist interactivo de entrega ceremonial
│   │   └── sync/                  # Conectores de API para Google Workspace
│   ├── types/
│   │   └── deal_state.ts          # Esquemas canónicos de datos (JSON)
│   ├── App.tsx                    # Enrutador y contenedor principal
│   └── main.tsx                   # Punto de entrada de la aplicación
├── .env.example                   # Variables de entorno requeridas
├── package.json                   # Dependencias y scripts de construcción
├── tsconfig.json                  # Configuración de TypeScript
└── README.md                      # Portada y documentación general

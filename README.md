# KandoFlow (`kandoflow`)

> **Estación de Trabajo Operativa, Aceleración Comercial y Protocolo Ceremonial de Entrega para Asesoría Mazda.**  
> *Inspirado en la filosofía Kando (感動) de asombro y hospitalidad genuina, potenciado con disciplina operativa marcial para eliminar la fricción del piso de venta y garantizar una experiencia impecable desde el primer contacto hasta la entrega de llaves.*

---

## 1. Descripción del Sistema

`KandoFlow` es una aplicación web transaccional y Progressive Web App (PWA) de arquitectura desacoplada y filosofía local-first. Nace como un escudo operativo y estación de trabajo para la asesora comercial de Mazda, mitigando la fragmentación de canales, la falta de soporte interdepartamental en agencia y la llegada no programada de clientes a piso.

El sistema unifica el ciclo comercial a través de tres pilares fundamentales:
1. **Ingestión y Normalización Inmediata:** Transforma archivos binarios heterogéneos (PDFs de nómina y estados de cuenta, fotografías móviles de INE, catálogos en Excel `.xlsx` y documentos Word `.docx`) en esquemas de datos planos y ligeros (`JSON`, `CSV`, `TXT`) para consulta y procesamiento instantáneo en la memoria del navegador.
2. **Generación Documental Automatizada:** Pre-llena, audita y compila expedientes crediticios y cotizaciones financieras directamente en formatos Microsoft Word (`.docx`), Microsoft Excel (`.xlsx`) y paquetes consolidados en PDF listos para firma física o digital.
3. **Orquestación del Mazda Handover Experience:** Supervisa y valida paso a paso el cumplimiento estricto de las 5 fases del protocolo de entrega ceremonial de la unidad.

---

## 2. Roles de Usuario

El sistema modela tres perfiles de usuario con interfaces, responsabilidades y alcances diferenciados:

* **Usuario Administrador (Rodrigo Valdespino Vértiz):** Responsable de la infraestructura técnica, gestión de plantillas documentales, pruebas de software, monitoreo de bitácoras de sincronización y mantenimiento del repositorio.
* **Usuario Asesora de Ventas (Erika Vertiz):** Usuaria operativa principal que registra prospectos, emite cotizaciones paramétricas en segundos durante la interacción física, audita expedientes crediticios y conduce la ceremonia de entrega técnica.
* **Usuario Cliente / Prospecto:** Comprador que recibe propuestas financieras transparentes formateadas para WhatsApp, formaliza contratos y experimenta la orientación técnica *Jinba Ittai* en la sala de entrega.

---

## 3. Arquitectura del Sistema (3 Capas Desacopladas)

[ Cliente / Prospecto ] (Piso de Venta, WhatsApp, Citas Espontáneas)
│
▼
┌────────────────────────────────────────────────────────────────────────┐
│ Capa 1: Presentación (Frontend SPA / PWA)                             │
│ - React + TypeScript + Vite (Touch-First, botones ≥ 48x48 px)          │
│ - Diseño de alta visibilidad para exteriores y disponibilidad offline   │
└───────────────────────────────────┬────────────────────────────────────┘
│
▼
┌────────────────────────────────────────────────────────────────────────┐
│ Capa 2: Lógica de Negocio y Procesamiento (Edge / Client-Side Engine)  │
│ - Motor Paramétrico de Cotización MFS (< 500 ms)                       │
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

`KandoFlow` implementa una máquina de estados finita que hace cumplir de forma secuencial y bloqueante el protocolo oficial de entrega:

1. **Fase 1: Pre-Entrega e Inspección Técnica (PDI):** Verificación de retiro de plásticos protectores, escaneo diagnóstico PDI concluido, inspección estética de carrocería (detallado/lavado) y armado de carpeta fiscal/garantía.
2. **Fase 2: Bienvenida y Firma Contractual:** Recepción en Handover Lounge, revisión de términos financieros y captura de firmas en actas de entrega y contratos.
3. **Fase 3: El Develado Ceremonial:** Retiro de funda premium en bahía de entrega, captura de fotografía conmemorativa e inspección física conjunta de pintura, rines y vestiduras.
4. **Fase 4: Orientación Técnica Mazda (*Jinba Ittai*):** Ajuste postural ergonómico de asiento/espejos, emparejamiento de smartphone (Apple CarPlay / Android Auto), explicación del paquete de seguridad activa *i-Activesense* y vinculación del VIN en la aplicación MyMazda.
5. **Fase 5: Entrega Final y Salida:** Entrega ceremonial de duplicado de llaves, estuche de manuales de propietario, obsequio de cortesía y expedición del pase de salida vehicular.

---

## 5. Estructura del Repositorio

El proyecto se organiza bajo una estructura modular orientada a dominios funcionales:

```text
kandoflow/
├── docs/
│   ├── vision-del-producto.md     # Documento de Visión formal (5 apartados)
│   ├── requerimientos.md          # Especificación de requisitos (ISO/IEC/IEEE 29148)
│   └── requisitos-sistema.md      # Requisitos técnicos de sistema (SyRS)
├── public/                        # Activos estáticos, iconos y manifiesto PWA
├── src/
│   ├── assets/                    # Iconografía y diseño visual
│   ├── components/                # Componentes atómicos de UI
│   ├── modules/
│   │   ├── deal-desk/             # Pipeline de prospectos y cotizador paramétrico
│   │   ├── dossier/               # Ingestión, parsing y exportación Office/PDF
│   │   ├── handover/              # Checklist interactivo de entrega ceremonial
│   │   └── sync/                  # Conectores de sincronización con Google Workspace
│   ├── types/
│   │   └── deal_state.ts          # Esquema canónico tipado (JSON)
│   ├── App.tsx                    # Enrutador y layout base
│   └── main.tsx                   # Punto de entrada de la aplicación
├── .env.example                   # Variables de entorno requeridas
├── package.json                   # Dependencias y scripts de construcción
├── tsconfig.json                  # Configuración del compilador TypeScript
└── README.md                      # Portada y documentación general

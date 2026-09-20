# Especificación Técnica de Requisitos del Sistema (SyRS)

**Proyecto:** Zanshin Bushidō (`zanshin-bushido`)[cite: 1, 7]  
**Subsistema:** Core Engine & Data Transformation Pipeline  
**Autor:** Rodrigo Valdespino Vértiz  
**Fecha:** 20 de septiembre de 2026  
**Versión:** 1.0 (Nivel Técnico de Sistema)  
**Materia:** Ingeniería de Software (SIS3407)[cite: 2, 7, 8]  

---

## 1. Introducción y Convenciones Técnicas

### 1.1 Propósito
Este documento define la especificación técnica de los requisitos del sistema (**System Requirements**) para el software `zanshin-bushido`[cite: 3, 7]. A diferencia de los requisitos de usuario expresados en lenguaje de negocio, este documento describe el comportamiento determinista, interfaces de datos, esquemas en memoria, protocolos de serialización y manejo de excepciones que la arquitectura de tres capas implementará sin ambigüedades de diseño.

### 1.2 Reglas de Notación y Verificabilidad
* Cada requisito técnico utiliza el identificador `RS-XXX`[cite: 1, 2].
* Las condiciones y validaciones se describen mediante tipos formales, códigos de error deterministas y contratos de interfaz.
* Criterio de verificación: Toda afirmación define una condición comprobable mediante prueba unitaria, de integración o aserción lógica en compilación[cite: 3, 5].

---

## 2. Requisitos de Transformación de Datos y Memoria (Kata Pipeline)

### 2.1 Ingestión y Parsing Binario
* **RS-01 (Límite de Ingestión Binaria):** El sistema debe rechazar en la capa de interfaz cualquier archivo binario entrante que exceda un tamaño de $10\,485\,760$ bytes ($10\text{ MB}$ exactos) arrojando el código de error `ERR_PAYLOAD_TOO_LARGE`[cite: 3].
* **RS-02 (Validación MIME):** El sistema debe validar la firma de cabecera (*magic bytes*) de los archivos cargados, restringiendo los tipos permitidos exclusivamente a:
  * `application/pdf` (`%PDF-`)
  * `application/vnd.openxmlformats-officedocument.wordprocessingml.document` (`PK\x03\x04`)
  * `application/vnd.openxmlformats-officedocument.spreadsheetml.sheet` (`PK\x03\x04`)
  * `image/jpeg` (`\xFF\xD8\xFF`)
  * `image/png` (`\x89PNG\r\n\x1a\n`)
* **RS-03 (Transformación a Primitivas Planas):** El pipeline de normalización debe convertir metadatos y contenido parseado a un objeto inmutable `DealState` serializable en formato `JSON` en un tiempo de cómputo inferior a $2\,000\text{ ms}$ en un entorno local v8.

### 2.2 Estructura Canónica de Estado (`deal_state.json`)
* **RS-04 (Esquema Tipado Estricto):** El sistema debe gobernar la entidad central de transacción mediante la siguiente estructura canónica tipada:

```typescript
export type LeadSource = 'showroom_walkin' | 'whatsapp' | 'meta_ads' | 'phone_call';
export type DossierStatus = 'incomplete' | 'in_review' | 'ready_for_submission';
export type HandoverPhase = 1 | 2 | 3 | 4 | 5;

export interface DealState {
  meta: {
    dealId: string;                 // UUID v4
    createdAt: string;              // ISO 8601 UTC
    updatedAt: string;              // ISO 8601 UTC
    advisorId: string;
  };
  client: {
    fullName: string;
    phone: string;                  // Exactamente 10 dígitos numéricos
    email: string;
    source: LeadSource;
    firstContactTimerExpiry: string | null; // ISO 8601 UTC (createdAt + 15 min)
  };
  vehicle: {
    model: 'Mazda2' | 'Mazda3' | 'CX-3' | 'CX-30' | 'CX-5' | 'CX-50' | 'CX-90' | 'MX-5';
    trim: string;
    modelYear: number;
    vin: string | null;             // Exactamente 17 caracteres alfanuméricos
    listPrice: number;              // Moneda MXN con precisión de 2 decimales
  };
  financial: {
    downPaymentPercentage: number;  // Real: 0.10 <= value <= 0.80
    downPaymentAmount: number;
    termMonths: 12 | 24 | 36 | 48 | 60 | 72;
    annualInterestRate: number;     // Porcentaje anual (ej. 14.99)
    monthlyPayment: number;
    insuranceMode: 'financed' | 'cash';
  };
  dossier: {
    hasOfficialId: boolean;         // INE / Pasaporte vigente
    hasProofOfAddress: boolean;     // Emisión <= 90 días
    hasBankStatements: boolean;     // Últimos 3 meses consecutivos
    status: DossierStatus;
    localFileRefs: string[];        // Claves blob en IndexedDB
  };
  testDrive: {
    hasValidLicense: boolean;
    scheduledStartTime: string | null; // ISO 8601 UTC
    scheduledEndTime: string | null;   // ISO 8601 UTC
    demoUnitPlate: string | null;
    waiverSigned: boolean;
  };
  handoverSOP: {
    currentPhase: HandoverPhase;
    phase1_PDICompleted: boolean;
    phase1_DetailingApproved: boolean;
    phase1_WarrantyPaperworkReady: boolean;
    phase2_WelcomeRecorded: boolean;
    phase2_ContractSigned: boolean;
    phase3_UnveilingDone: boolean;
    phase3_VisualWalkaroundPassed: boolean;
    phase3_CelebrationPhotoTaken: boolean;
    phase4_JinbaIttaiAdjusted: boolean;
    phase4_CarPlayAndroidAutoPaired: boolean;
    phase4_iActivesenseBriefed: boolean;
    phase4_MyMazdaEnrolled: boolean;
    phase5_KeyHandoverSigned: boolean;
    phase5_GatePassIssued: boolean;
  };
}

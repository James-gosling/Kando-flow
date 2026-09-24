## 6. Trazabilidad y Control de Cambios

### 6.1 Matriz de Trazabilidad de Requisitos

| Requisito | Origen | Caso de uso | Pantalla del prototipo | Estado |
| :--- | :--- | :--- | :--- | :--- |
| **RF-01** (Cotización en memoria) | Entrevista de dominio (22-sep)[cite: 9] | CU-01 Configurar Parámetros / CU-02 Generar Corrida | *N/A (Lógica de motor financiamiento)* | Vigente[cite: 9] |
| **RF-02** (Normalización documental) | Entrevista de dominio (22-sep)[cite: 9] | CU-03 Digitalizar Documentación / CU-04 Normalizar | *N/A (Servicio de procesamiento local)* | Vigente[cite: 9] |
| **RF-03** (Desbloqueo PDF con RFC) | Entrevista de dominio (22-sep)[cite: 9] | CU-03 Digitalizar Documentación Crediticia | *N/A (Worker de desencriptación)* | Vigente[cite: 9] |
| **RF-04** (Empaquetado expediente) | Entrevista de dominio (22-sep)[cite: 9] | CU-04 Normalizar y Ensamblar Expediente | *N/A (Exportador PDF local)* | Vigente[cite: 9] |
| **RF-05** (Tablero agenda entregas) | Entrevista de dominio (22-sep)[cite: 9] | CU-05 Ejecutar Protocolo Handover SOP | `SCR-01` Tablero de Entregas (*Today's Deliveries*) | Vigente[cite: 9] |
| **RF-06** (Checklist Handover 5 fases) | Estándar de Calidad Mazda / Entrevista[cite: 9] | CU-05 Ejecutar Protocolo Handover SOP | `SCR-02` (Fase 1), `SCR-03` (Fase 2), `SCR-04` (Fase 3), `SCR-05` (Fase 4), `SCR-06` (Fase 5) | Modificado tras inspección[cite: 9] |
| **RF-07** (Registro de incidencias) | Entrevista (Excepción operativa)[cite: 9] | CU-06 Registrar Incidencia Técnica (`<<extend>>`) | `SCR-ALT` Modal de Registro de Incidencia | Vigente[cite: 9] |
| **RF-08** (Pase de salida digital QR) | Seguridad patrimonial / Agencia[cite: 9] | CU-05 Ejecutar Protocolo Handover SOP | `SCR-06` Fase 5: Entrega Final y Pase de Salida | Vigente[cite: 9] |
| **RNF-01** (Latencia <= 500 ms) | Entrevista de dominio (22-sep)[cite: 9] | CU-02 Generar Corrida Financiera en Memoria | Transición reactiva inmediata en cotizador | Vigente[cite: 9] |
| **RNF-02** (0% fuga de datos / Local) | LFPDPPP / Blindaje de seguridad[cite: 9] | CU-03 Digitalizar / CU-04 Ensamblar | Procesamiento in-memory sin llamadas a red | Vigente[cite: 9] |
| **RNF-03** (Disponibilidad Offline) | Entrevista (Patios sin señal)[cite: 9] | CU-05 Handover SOP / CU-06 Registrar Incidencia | Indicador visual de estado offline en `SCR-01` | Vigente[cite: 9] |
| **RNF-04** (Botones >= 48x48 px) | Inspección de usabilidad táctil[cite: 9] | CU-05 Handover SOP / CU-06 Registrar Incidencia | Todos los botones y checkboxes en `SCR-01` a `SCR-06` y `SCR-ALT` | Modificado tras inspección[cite: 9] |
| **RNF-05** (Contraste visual >= 4.5:1) | Inspección técnica visual[cite: 9] | CU-05 Handover SOP / CU-06 Registrar Incidencia | Paleta oscura de alto contraste en todas las pantallas | Vigente[cite: 9] |
| **RNF-06** (Arquitectura desacoplada) | Derivado del tipo de sistema[cite: 9] | Todos los casos de uso[cite: 9] | *N/A (Estructura de código en repositorio)* | Vigente[cite: 9] |
| **RNF-07** (PWA compatible) | Derivado del tipo de sistema[cite: 9] | CU-05 Ejecutar Protocolo Handover SOP | Shell responsivo en navegadores WebKit/Chromium | Vigente[cite: 9] |

---

### 6.2 Registro de Control de Cambios (Hallazgos de la Inspección por Pares)

| Versión | Elemento Afectado | Tipo de Cambio | Justificación y Hallazgo de Inspección | Responsable |
| :---: | :--- | :--- | :--- | :--- |
| **v1.0.1** | **RF-06** (Checklist de Entrega) | Modificación de flujo | Se eliminó la captura manual exhaustiva de notas en bahía porque rompía la hospitalidad *Kando*; se reemplazó por casillas táctiles de un solo toque y avance secuencial estricto[cite: 9]. | Emiliano Cabañas (Dupla)[cite: 9] |
| **v1.0.1** | **RNF-04** (Ergonomía Táctil) | Cuantificación de métrica | El requisito original indicaba "botones cómodos para la mano" (adjetivo ambiguo); se reescribió fijando una métrica cuantitativa estricta $\ge 48 \times 48\text{ px}$ bajo la pauta WCAG 2.1[cite: 9]. | Rodrigo Valdespino (Líder)[cite: 9] |
| **v1.0.2** | **CU-06** / **RF-07** (Incidencia) | Inclusión en prototipo | El prototipo inicial solo cubría el "camino feliz" sin contingencias; se integró el modal emergente `SCR-ALT` conectado desde las Fases 1 y 3 para resolver el flujo alterno ante rayones o faltantes[cite: 9]. | Rodrigo Valdespino (Líder)[cite: 9] |
| **v1.0.2** | **Tabla de Trazabilidad** | Cierre de orígenes | Se actualizaron los campos que figuraban como "supuesto propio", validándolos formalmente contra la sesión de entrevista[cite: 9]. | Emiliano Cabañas (Dupla)[cite: 9] |

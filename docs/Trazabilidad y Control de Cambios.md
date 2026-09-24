## 6. Trazabilidad y Control de Cambios

### 6.1 Matriz de Trazabilidad de Requisitos

| Requisito | Origen | Caso de uso | Pantalla del prototipo | Estado |
| :--- | :--- | :--- | :--- | :--- |
| **RF-01** (Cotización en memoria) | Entrevista de dominio (22-sep) | CU-01 Configurar Parámetros / CU-02 Generar Corrida | *N/A (Lógica de motor financiamiento)* | Vigente |
| **RF-02** (Normalización documental) | Entrevista de dominio (22-sep) | CU-03 Digitalizar Documentación / CU-04 Normalizar | *N/A (Servicio de procesamiento local)* | Vigente |
| **RF-03** (Desbloqueo PDF con RFC) | Entrevista de dominio (22-sep) | CU-03 Digitalizar Documentación Crediticia | *N/A (Worker de desencriptación)* | Vigente |
| **RF-04** (Empaquetado expediente) | Entrevista de dominio (22-sep) | CU-04 Normalizar y Ensamblar Expediente | *N/A (Exportador PDF local)* | Vigente |
| **RF-05** (Tablero agenda entregas) | Entrevista de dominio (22-sep) | CU-05 Ejecutar Protocolo Handover SOP | `SCR-01` Tablero de Entregas (*Today's Deliveries*) | Vigente |
| **RF-06** (Checklist Handover 5 fases) | Estándar de Calidad Mazda / Entrevista | CU-05 Ejecutar Protocolo Handover SOP | `SCR-02` (Fase 1), `SCR-03` (Fase 2), `SCR-04` (Fase 3), `SCR-05` (Fase 4), `SCR-06` (Fase 5) | Modificado tras inspección |
| **RF-07** (Registro de incidencias) | Entrevista (Excepción operativa) | CU-06 Registrar Incidencia Técnica (`<<extend>>`) | `SCR-ALT` Modal de Registro de Incidencia | Vigente |
| **RF-08** (Pase de salida digital QR) | Seguridad patrimonial / Agencia | CU-05 Ejecutar Protocolo Handover SOP | `SCR-06` Fase 5: Entrega Final y Pase de Salida | Vigente |
| **RNF-01** (Latencia <= 500 ms) | Entrevista de dominio (22-sep) | CU-02 Generar Corrida Financiera en Memoria | Transición reactiva inmediata en cotizador | Vigente |
| **RNF-02** (0% fuga de datos / Local) | LFPDPPP / Blindaje de seguridad | CU-03 Digitalizar / CU-04 Ensamblar | Procesamiento in-memory sin llamadas a red | Vigente |
| **RNF-03** (Disponibilidad Offline) | Entrevista (Patios sin señal) | CU-05 Handover SOP / CU-06 Registrar Incidencia | Indicador visual de estado offline en `SCR-01` | Vigente |
| **RNF-04** (Botones >= 48x48 px) | Inspección de usabilidad táctil | CU-05 Handover SOP / CU-06 Registrar Incidencia | Todos los botones y checkboxes en `SCR-01` a `SCR-06` y `SCR-ALT` | Modificado tras inspección |
| **RNF-05** (Contraste visual >= 4.5:1) | Inspección técnica visual | CU-05 Handover SOP / CU-06 Registrar Incidencia | Paleta oscura de alto contraste en todas las pantallas | Vigente |
| **RNF-06** (Arquitectura desacoplada) | Derivado del tipo de sistema | Todos los casos de uso | *N/A (Estructura de código en repositorio)* | Vigente |
| **RNF-07** (PWA compatible) | Derivado del tipo de sistema | CU-05 Ejecutar Protocolo Handover SOP | Shell responsivo en navegadores WebKit/Chromium | Vigente |

---

### 6.2 Registro de Control de Cambios (Hallazgos de la Inspección por Pares)

| Versión | Elemento Afectado | Tipo de Cambio | Justificación y Hallazgo de Inspección | Responsable |
| :---: | :--- | :--- | :--- | :--- |
| **v1.0.1** | **RF-06** (Checklist de Entrega) | Modificación de flujo | Se eliminó la captura manual exhaustiva de notas en bahía porque rompía la hospitalidad *Kando*; se reemplazó por casillas táctiles de un solo toque y avance secuencial estricto. | Emiliano Cabañas (Dupla) |
| **v1.0.1** | **RNF-04** (Ergonomía Táctil) | Cuantificación de métrica | El requisito original indicaba "botones cómodos para la mano" (adjetivo ambiguo); se reescribió fijando una métrica cuantitativa estricta $\ge 48 \times 48\text{ px}$ bajo la pauta WCAG 2.1. | Rodrigo Valdespino (Líder) |
| **v1.0.2** | **CU-06** / **RF-07** (Incidencia) | Inclusión en prototipo | El prototipo inicial solo cubría el "camino feliz" sin contingencias; se integró el modal emergente `SCR-ALT` conectado desde las Fases 1 y 3 para resolver el flujo alterno ante rayones o faltantes. | Rodrigo Valdespino (Líder) |
| **v1.0.2** | **Tabla de Trazabilidad** | Cierre de orígenes | Se actualizaron los campos que figuraban como "supuesto propio", validándolos formalmente contra la sesión de entrevista. | Emiliano Cabañas (Dupla) |

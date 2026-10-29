# Entrega de Arquitectura de Software · KandoFlow

**Sistema:** KandoFlow (Estación de trabajo comercial y entrega vehicular)  
**Autor:** Rodrigo Valdespino Vértiz  
**Materia:** Ingeniería de Software I · SIS3407 · Unidad 3  

---

## 1. Diagrama de Contexto (Nivel 1 C4)

El sistema KandoFlow representado como una caja negra central, los actores humanos involucrados y los sistemas externos con los que se comunica, sin referencias tecnológicas internas.

```mermaid
flowchart TD
    subgraph Actores["Usuarios del Sistema"]
        A([Asesora Comercial])
        ADM([Administrador])
        C([Cliente en Vista Temporal])
    end

    SISTEMA["KandoFlow\n(Estación de trabajo comercial y entrega vehicular)"]

    subgraph Externos["Sistemas Externos"]
        WA["WhatsApp"]
        GW["Google Workspace\n(Almacenamiento y hojas de cálculo corporativas)"]
    end

    A -->|Prepara cotizaciones, expedientes y ejecuta entregas| SISTEMA
    ADM -->|Configura plantillas, roles y supervisa respaldos| SISTEMA
    C -->|Confirma recepción física o firma acuerdos de entrega| SISTEMA

    SISTEMA -->|Genera y abre propuesta comercial redactada| WA
    SISTEMA -->|Sincroniza paquetes documentales y bitácoras auditables| GW

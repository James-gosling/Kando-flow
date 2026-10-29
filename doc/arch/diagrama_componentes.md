flowchart TB
    UI["Interfaz de Usuario & Control de Acceso por Rol (React Views)"]

    subgraph PWA_Container["Contenedor PWA (Monolito Modular en Cliente)"]
        subgraph Modulos_Dominio["Módulos de Reglas de Negocio"]
            MOD_COM["Módulo Atención Comercial\n- Catálogo y cálculo de cotizaciones\n- Registro y seguimiento de prospectos"]
            MOD_EXP["Módulo Expediente\n- Recepción y control de documentos\n- Validación de checklist de crédito"]
            MOD_ENT["Módulo Entrega Vehicular\n- Protocolo de 5 fases de entrega\n- Gestión de incidencias y acuerdos\n- Validación y emisión de pase de salida"]
            MOD_RESP["Módulo Respaldo & Sincronización\n- Gestor de cola offline (Queue Manager)\n- Adaptadores de conexión externa"]
        end

        STORAGE_ADAPTER["Adaptador de Persistencia Local (IndexedDB Wrapper)"]
    end

    LOCAL_STORE[("IndexedDB Local")]
    CLOUD["Servicios Cloud (Google Drive / Sheets)"]

    UI -->|Invoca acciones comerciales| MOD_COM
    UI -->|Carga y consulta documentos| MOD_EXP
    UI -->|Ejecuta fases y bloqueos| MOD_ENT

    MOD_COM -->|Provee prospecto y datos de venta| MOD_EXP
    MOD_COM -->|Transfiere datos de la unidad vendida (VIN)| MOD_ENT

    MOD_EXP -->|Solicita encolar respaldo documental| MOD_RESP
    MOD_ENT -->|Notifica pase emitido o cierre de entrega| MOD_RESP

    MOD_COM -->|Lectura / Escritura| STORAGE_ADAPTER
    MOD_EXP -->|Lectura / Escritura| STORAGE_ADAPTER
    MOD_ENT -->|Lectura / Escritura| STORAGE_ADAPTER

    STORAGE_ADAPTER -->|Consultas locales directas| LOCAL_STORE
    MOD_RESP -->|Peticiones HTTPS autenticadas| CLOUD
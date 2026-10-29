flowchart TD
    U([Asesora / Administrador])

    subgraph Dispositivo_Movil["Dispositivo Local (PWA en Navegador)"]
        SPA["Aplicación Web Progresiva (PWA)\n[React + TypeScript + Vite]\nInterfaz de usuario y motor de reglas de negocio"]
        LOCAL_DB[("Almacén de Datos Local\n[IndexedDB]\nPersistencia offline, estados de entrega y caché")]
    end

    subgraph Servicios_Externos["Servicios Externos Corporativos"]
        EXT_WA["WhatsApp Web / App Externa\n[Deep Link / URI Protocol]"]
        EXT_DRIVE["Google Drive\n[HTTPS / REST API v3]"]
        EXT_SHEETS["Google Sheets\n[HTTPS / REST API v4]"]
    end

    U -->|Operación directa en pantalla táctil / navegador| SPA
    SPA -->|Lectura y escritura transaccional asíncrona (IndexedDB API)| LOCAL_DB
    SPA -->|Apertura de URI scheme con mensaje precargado ([https://api.whatsapp.com](https://api.whatsapp.com))| EXT_WA
    SPA -->|Sincronización de expedientes y pases PDF (OAuth 2.0 + JSON/HTTPS)| EXT_DRIVE
    SPA -->|Actualización de bitácora comercial y estados (OAuth 2.0 + JSON/HTTPS)| EXT_SHEETS
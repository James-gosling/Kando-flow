Diagramas Mermaid de KandoFlow (Modelo C4)

Ingeniería de Software I · SIS3407 · Unidad 3

Alumno: Rodrigo Valdespino Vértiz

Proyecto: KandoFlow (Estación de trabajo comercial y entrega vehicular Mazda)

Fecha: 29 de octubre de 2026

Este documento contiene las tres vistas arquitectónicas del modelo C4 para KandoFlow. Los bloques están optimizados para el renderizador nativo de Mermaid en GitHub.

1. Diagrama de Contexto (Nivel 1 C4)

Representa a KandoFlow como una sola caja central, las personas que lo utilizan según su rol y los sistemas externos con los que intercambia información, sin especificar tecnologías internas.

flowchart TD
    asesora(["Asesora comercial"])
    admin(["Administrador"])
    cliente(["Cliente en vista temporal"])

    sistema["KandoFlow<br/>Estación de trabajo comercial y entrega vehicular"]

    wa["WhatsApp<br/>Sistema externo de mensajería"]
    workspace["Google Workspace<br/>Almacenamiento y hojas de cálculo corporativas"]

    asesora -->|Cotiza, integra expedientes y ejecuta entregas| sistema
    admin -->|Configura plantillas, roles y supervisa respaldos| sistema
    cliente -->|Confirma recepción física o acuerdo en vista protegida| sistema

    sistema -->|Prepara texto de propuesta comercial para envío| wa
    sistema -->|Respalda paquetes documentales y bitácora auditable| workspace

    style sistema fill:#fff8f4,stroke:#ff5d00,stroke-width:2px,color:#111111


Correspondencia: CU-01 a CU-12; RF-02, RF-08, RF-15 y RF-17. La participación del cliente ocurre únicamente dentro de una vista temporal controlada y exige la reautenticación de la asesora para retomar la sesión operativa.

2. Diagrama de Contenedores (Nivel 2 C4)

Muestra las piezas de software que se ejecutan o despliegan por separado, detallando la tecnología de cada contenedor y cómo se comunican entre sí.

flowchart TD
    usuario(["Asesora comercial o Administrador"])

    subgraph kando["Frontera del Sistema · KandoFlow en Dispositivo Móvil"]
        pwa["Aplicación Web Progresiva - PWA<br/>Tecnología: React, TypeScript y Vite<br/>Interfaz adaptable, control de sesión y reglas de negocio"]
        idb[("Almacén de Datos Local<br/>Tecnología: IndexedDB en Navegador<br/>Persistencia offline de prospectos, expedientes y entregas")]
    end

    wa_ext["WhatsApp Web / App<br/>Tecnología: Servicio externo"]
    drive_ext["Google Drive<br/>Tecnología: Servicio Cloud externo"]
    sheets_ext["Google Sheets<br/>Tecnología: Servicio Cloud externo"]

    usuario -->|Interactúa en el navegador vía HTTPS| pwa
    pwa -->|Lee y escribe transacciones locales vía IndexedDB API| idb
    pwa -->|Abre propuesta mediante enlace URI Scheme https| wa_ext
    pwa -->|Sincroniza documentos y pases vía HTTPS REST API y OAuth 2.0| drive_ext
    pwa -->|Registra bitácora finalizada vía HTTPS REST API y OAuth 2.0| sheets_ext

    style pwa fill:#fff8f4,stroke:#ff5d00,stroke-width:2px,color:#111111


Correspondencia: RF-02, RF-08, RF-17, RNF-03, RNF-04 y RNF-07. Cuando no hay conexión en el patio o bahía de entrega, la aplicación opera sobre IndexedDB y mantiene los respaldos en cola hasta recuperar conectividad.

3. Diagrama de Componentes (Nivel 3 C4)

Desglosa el interior del contenedor principal (Aplicación Web Progresiva - PWA) donde viven las reglas de negocio, mostrando los módulos definidos y sus interacciones internas.

flowchart TB
    ui["Interfaz de Usuario y Control de Acceso por Rol<br/>Vistas React y guardias de navegación"]

    subgraph pwa_box["Contenedor PWA · Módulos de Reglas de Negocio"]
        comercial["Módulo Atención Comercial<br/>Registro de prospectos y cálculo de cotizaciones"]
        expediente["Módulo Expediente<br/>Recepción documental y revisión de checklist"]
        entrega["Módulo Entrega Vehicular<br/>Agenda, protocolo de 5 fases, incidencias y pase"]
        respaldo["Módulo Respaldo<br/>Cola de sincronización offline y adaptadores"]
        repo["Capa de Acceso a Datos Locales<br/>Repositorio e interfaz común hacia IndexedDB"]
    end

    local_db[("Almacén Local IndexedDB")]
    google_cloud["Google Drive y Google Sheets"]

    ui -->|Solicita cotización y alta de prospecto| comercial
    ui -->|Adjunta y audita documentos| expediente
    ui -->|Avanza fases, registra acuerdos y solicita pase| entrega

    comercial -->|Provee identidad del prospecto| expediente
    comercial -->|Transfiere datos de unidad y operación| entrega

    expediente -->|Encola paquete documental validado| respaldo
    entrega -->|Publica cierre de entrega y pase emitido| respaldo

    comercial -->|Guarda y consulta vía interfaz| repo
    expediente -->|Guarda y consulta vía interfaz| repo
    entrega -->|Guarda y consulta vía interfaz| repo
    respaldo -->|Lee y actualiza cola pendiente| repo

    repo -->|Ejecuta transacciones locales| local_db
    respaldo -->|Envía registros autorizados vía HTTPS REST| google_cloud

    style entrega fill:#fff8f4,stroke:#ff5d00,stroke-width:2px,color:#111111


Correspondencia: RF-01 a RF-17, con énfasis en RF-06, RF-07, RF-08, RF-15 y RF-17. Cada módulo encapsula sus reglas y se comunica mediante interfaces definidas sin leer directamente las tablas privadas de otro módulo.

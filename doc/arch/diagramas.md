# Diagramas Mermaid de KandoFlow

**Ingeniería de Software I · SIS3407 · Unidad 3**  
**Alumno:** Rodrigo Valdespino Vertiz  
**Proyecto:** KandoFlow  
**Fecha:** 27 de octubre de 2026

Esta actividad adapta los tres niveles C4 y los cinco ejercicios de práctica de la guía del curso. Los bloques Mermaid son el entregable editable: GitHub los dibuja al abrir este archivo y permite comparar sus cambios como texto. KandoFlow se representa como una **arquitectura propuesta de monolito modular con operación local**. El prototipo de Figma ilustra los recorridos; estos diagramas no afirman que exista ya una aplicación operativa, una API propia o una integración real con Google.

## 1. Nivel 1 de C4 · Contexto

El contexto muestra a las personas y los servicios externos, sin tecnologías internas. La asesora prepara cotizaciones, expedientes y entregas; el administrador configura plantillas; el cliente solo confirma la recepción o un acuerdo en una vista temporal de la asesora. WhatsApp abre una propuesta preparada; Drive y Sheets reciben respaldo autorizado.

```mermaid
flowchart TD
    asesora([Asesora comercial])
    admin([Administrador])
    cliente([Cliente en vista temporal])
    sistema["KandoFlow"]
    wa["WhatsApp"]
    workspace["Google Workspace"]

    asesora -->|cotiza y gestiona entregas| sistema
    admin -->|administra plantillas y respaldo| sistema
    cliente -->|confirma recepción o acuerdo| sistema
    sistema -->|prepara propuesta para enviar| wa
    sistema -->|respalda paquetes y bitácora| workspace

    style sistema fill:#fff8f4,stroke:#ff5d00,stroke-width:2px,color:#111111
```

**Correspondencia:** CU-01 a CU-12; RF-02, RF-08, RF-15 y RF-17. La interacción del cliente está acotada a la vista temporal y exige reautenticación de la asesora para recuperar la operación.

## 2. Nivel 2 de C4 · Contenedores

La aplicación web progresiva propuesta se ejecutaría en el dispositivo de la asesora. IndexedDB es el almacén administrado por el navegador para el trabajo local; los servicios de Google y WhatsApp quedan fuera de la frontera de KandoFlow. No se dibuja un servidor propio: la visión actual no lo especifica como componente ya implementado. La autorización corporativa y el cifrado son requisitos para una implementación, no capacidades comprobadas por Figma.

```mermaid
flowchart TD
    usuario([Asesora o administrador])

    subgraph kando["KandoFlow · sistema propuesto"]
        app["Aplicación web PWA · React y TypeScript"]
        local[(Almacén local · IndexedDB)]
    end

    wa["WhatsApp · servicio externo"]
    drive["Google Drive · servicio externo"]
    sheets["Google Sheets · servicio externo"]

    usuario -->|usa en el navegador| app
    app -->|lee y guarda datos locales| local
    app -->|abre texto preparado| wa
    app -->|sincroniza paquete autorizado| drive
    app -->|sincroniza registro finalizado| sheets

    style app fill:#fff8f4,stroke:#ff5d00,stroke-width:2px,color:#111111
```

**Correspondencia:** visión del producto; RF-02, RF-08, RF-17, RNF-03, RNF-04 y RNF-07. La sincronización debe dejar el trabajo pendiente cuando no hay conexión; no se da por realizada solo porque la interfaz muestre ese estado.

## 3. Nivel 3 de C4 · Componentes de la aplicación

Dentro de la PWA, los módulos se agrupan por reglas de negocio. Atención comercial conoce prospectos y cotizaciones; Expediente incorpora y revisa documentos; Entrega controla agenda, cinco fases, incidencias y pase; Respaldo traduce registros finalizados para los servicios externos. Las operaciones cruzan las fronteras mediante interfaces del módulo propietario, sin leer directamente las tablas internas de otro módulo.

```mermaid
flowchart TD
    ui["Interfaz y control de acceso por rol"]

    subgraph app["Aplicación PWA · monolito modular propuesto"]
        comercial["Atención comercial · prospecto y cotización"]
        expediente["Expediente · documentos y revisión"]
        entrega["Entrega · agenda, fases e incidencias"]
        respaldo["Respaldo · cola y adaptadores"]
    end

    datos[(Persistencia local)]
    externos["Drive y Sheets · externos"]

    ui -->|solicita operaciones permitidas| comercial
    ui -->|consulta y adjunta| expediente
    ui -->|opera la entrega| entrega
    comercial -->|identifica prospecto| expediente
    comercial -->|proporciona datos de la operación| entrega
    expediente -->|solicita respaldo autorizado| respaldo
    entrega -->|publica entrega finalizada| respaldo
    comercial --> datos
    expediente --> datos
    entrega --> datos
    respaldo -->|sincroniza mediante adaptadores| externos

    style entrega fill:#fff8f4,stroke:#ff5d00,stroke-width:2px,color:#111111
```

**Correspondencia:** RF-01 a RF-17, en especial RF-06, RF-07, RF-08, RF-15 y RF-17. La flecha hacia Persistencia representa una interfaz común de almacenamiento, no permisos para consultar datos privados de otros módulos.

## 4. Flujo con decisiones · CU-05 y CU-06

El ejemplo muestra el punto de decisión del pase. Un control obligatorio incompleto detiene el avance; una incidencia no crítica con acuerdo válido permite retomar la fase de origen; un daño bloqueante mantiene la entrega pausada. La confirmación del cliente se hace en una vista temporal y luego la asesora se reautentica.

```mermaid
flowchart TD
    inicio([Entrega programada])
    sesion{Asesora autenticada?}
    fase["Revisar controles de la fase actual"]
    completos{Controles completos?}
    aviso["Mostrar pendientes y permanecer en la fase"]
    incidente{Hay incidencia?}
    bloqueo{Daño bloqueante?}
    pausa["Pausar entrega sin pase"]
    acuerdo{Acuerdo válido?}
    siguiente{Quedan fases?}
    cliente["Cliente confirma recepción"]
    autentica{Asesora reautenticada?}
    bloqueoSesion["Mantener vista protegida sin emitir pase"]
    pase["Emitir pase de salida DEMO"]
    fin([Entrega completada])

    inicio --> sesion
    sesion -->|No| inicio
    sesion -->|Sí| fase
    fase --> completos
    completos -->|No| aviso
    aviso --> fase
    completos -->|Sí| incidente
    incidente -->|Sí| bloqueo
    bloqueo -->|Sí| pausa
    bloqueo -->|No| acuerdo
    acuerdo -->|No| pausa
    acuerdo -->|Sí| fase
    incidente -->|No| siguiente
    siguiente -->|Sí| fase
    siguiente -->|No| cliente
    cliente --> autentica
    autentica -->|No| bloqueoSesion
    bloqueoSesion --> autentica
    autentica -->|Sí| pase
    pase --> fin

    style pase fill:#fff8f4,stroke:#ff5d00,stroke-width:2px,color:#111111
```

**Correspondencia:** CU-05, CU-06, RF-06, RF-07, RF-12 y RF-15. El pase es ficticio y no autoriza una salida real de agencia.

## 5. Secuencia · cierre de una entrega

Los mensajes muestran el orden del recorrido exitoso de la fase final. Entrega consulta sus reglas, conserva el resultado local y solicita a Respaldo encolar la sincronización. La confirmación de recepción del cliente no equivale a iniciar una sesión permanente para él.

```mermaid
sequenceDiagram
    actor A as Asesora
    actor C as Cliente
    participant UI as Interfaz
    participant E as Módulo Entrega
    participant R as Módulo Respaldo
    participant L as Almacén local

    A->>UI: Completa controles de las cinco fases
    UI->>E: validarControles(entrega)
    E-->>UI: Controles completos, sin incidencia bloqueante
    UI->>C: Muestra vista temporal de recepción
    C->>UI: Confirma recepción
    UI->>A: Solicita reautenticación
    A->>UI: Reautentica y solicita pase
    UI->>E: emitirPase(entrega)
    E->>L: Guarda pase único y estado Completada
    L-->>E: Confirmación local
    E->>R: encolarRespaldo(entrega)
    R-->>E: Pendiente de sincronizar
    E-->>UI: Pase DEMO y estado Completada
    UI-->>A: Muestra pase y aviso de respaldo pendiente
```

**Correspondencia:** CU-05, RF-06, RF-08, RF-12 y RF-15. El respaldo externo puede completarse después; la falta de conexión no invalida un pase ya guardado localmente según el flujo propuesto.

## 6. Clases · datos de la entrega

El modelo conceptual separa el prospecto, su entrega y los hechos que pueden ocurrir durante ella. Una incidencia puede no existir; un pase solo puede existir cuando la entrega cumple sus reglas. Las multiplicidades reflejan el alcance del ejemplo, no una base de datos ya implementada.

```mermaid
classDiagram
    class Prospecto {
        +id: string
        +nombre: string
    }
    class Entrega {
        +id: string
        +vin: string
        +estado: EstadoEntrega
        +validarControles() boolean
        +emitirPase() PaseSalida
    }
    class FaseEntrega {
        +numero: int
        +nombre: string
        +completa: boolean
        +validar() boolean
    }
    class Incidencia {
        +id: string
        +tipo: string
        +estado: string
        +registrarAcuerdo() void
    }
    class PaseSalida {
        +id: string
        +fechaEmision: Date
        +codigoDemo: string
    }

    Prospecto "1" --> "0..*" Entrega : tiene
    Entrega "1" *-- "5" FaseEntrega : contiene
    Entrega "1" *-- "0..*" Incidencia : registra
    Entrega "1" --> "0..1" PaseSalida : emite
```

**Correspondencia:** RF-06, RF-07, RF-11 y RF-12. La restricción de emitir un único pase para una entrega completa pertenece a las reglas de Entrega; la multiplicidad por sí sola no ejecuta esa validación.

## 7. Estados · ciclo de vida de la entrega

Una entrega programada pasa a En curso cuando la asesora inicia el recorrido. Si se reporta una incidencia, queda Pausada; un acuerdo permitido y la reautenticación dejan retomar la misma fase. Una entrega con controles completos y sin bloqueo llega a Completada al emitir el pase. El diagrama no introduce una cancelación que el alcance no describe.

```mermaid
stateDiagram-v2
    [*] --> Pendiente: programar entrega
    Pendiente --> EnCurso: iniciar con asesora autenticada
    EnCurso --> Pausada: registrar incidencia
    Pausada --> EnCurso: acuerdo válido y reautenticación
    EnCurso --> Completada: controles completos, recepción y pase
    Completada --> [*]
```

**Correspondencia:** CU-05 y CU-06; RF-06, RF-07, RF-11 y RF-12. Pausada no habilita el pase y un daño bloqueante no satisface la transición de retorno.

## 8. Entidad-relación · persistencia conceptual

El esquema ejemplifica cómo podrían persistirse los datos del prospecto, expediente y entrega. Las entidades del expediente y de la entrega se enlazan por el prospecto; no se introduce una tabla para cada pantalla. Los servicios Drive y Sheets quedan fuera de este modelo local.

```mermaid
erDiagram
    PROSPECTO ||--o| EXPEDIENTE : tiene
    PROSPECTO ||--o{ ENTREGA : programa
    EXPEDIENTE ||--o{ DOCUMENTO : contiene
    ENTREGA ||--|{ CONTROL : registra
    ENTREGA ||--o{ INCIDENCIA : presenta
    ENTREGA ||--o| PASE_SALIDA : emite

    PROSPECTO {
        string id PK
        string nombre
    }
    EXPEDIENTE {
        string id PK
        string prospecto_id FK
        string estado
    }
    DOCUMENTO {
        string id PK
        string expediente_id FK
        string tipo
        string nombre
    }
    ENTREGA {
        string id PK
        string prospecto_id FK
        string vin
        string estado
    }
    CONTROL {
        string id PK
        string entrega_id FK
        int fase
        boolean completo
    }
    INCIDENCIA {
        string id PK
        string entrega_id FK
        string tipo
        string estado
    }
    PASE_SALIDA {
        string id PK
        string entrega_id FK
        date fecha_emision
    }
```

**Correspondencia:** RF-03, RF-04, RF-06, RF-07, RF-10, RF-11 y RF-12. `ENTREGA` tiene muchos controles porque el checklist se compone de las cinco fases; la regla de completitud se valida en el módulo, no por el diagrama entidad-relación.

## Relación entre las vistas

Los tres primeros diagramas acercan la vista desde el entorno de KandoFlow hasta los módulos de la PWA. El flujo y la secuencia describen CU-05 con sus decisiones y mensajes. Clases, estados y entidad-relación muestran respectivamente estructura del dominio, ciclo de vida y persistencia conceptual de la misma entrega. Todos son **ejemplos de diseño** coherentes con la especificación y el prototipo; sus tecnologías y contratos deben validarse al implementar el sistema.

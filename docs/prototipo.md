# Prototipo y recorrido de validación

**Versión de referencia documental:** 2.1 · 30 de septiembre de 2026.

## 1. Acceso y estado real

[Video de presentación del repositorio y demo funcional](https://youtu.be/G40-IZL50ZY). Duración aproximada: 20 minutos, según el autor.

- [Canvas editable de Figma Design](https://www.figma.com/design/ZuGRFCYIXklddDeCfIklz8?node-id=8-77).
- [Presentar desde SCR-17](https://www.figma.com/proto/ZuGRFCYIXklddDeCfIklz8?node-id=3-472&starting-point-node-id=3%3A472).

**Alcance de esta documentación:** La publicación y el canvas de Figma Design son versiones distintas del prototipo. Los conteos de pantallas y pruebas de reacciones documentados a continuación corresponden al archivo Design; no certifican los recorridos del sitio publicado. El autor confirmó posteriormente haber realizado todas las pruebas; no desglosó los resultados por versión.

**Versión de diseño:** 30 de septiembre de 2026. El archivo contiene 31 pantallas nativas, componentes reutilizables, variables de estado y una guía en el canvas. No son capturas planas. La reconstrucción parte de esta especificación: el conector devolvió el inventario de fuentes de Make, pero no permitió leerlas completas; no se afirma una conversión visual exacta del original.

**Verificación de la versión del 29/09/2026 (histórica):** revisión visual de composiciones representativas, comprobación de dimensiones y evaluación de las reacciones nativas leídas del archivo. Los 20 escenarios evaluados pasaron; se encontraron 63 nodos con interacción, cero destinos rotos, cero controles de interacción no textuales menores de 48 × 48 px y cero desbordamientos de los hijos principales. Todas las pantallas usan texto editable Inter y no contienen una imagen plana de la interfaz.

**Confirmación del autor:** realizó todas las pruebas del prototipo. Esta declaración no acredita persistencia, APIs, cifrado ni seguridad de una implementación.

## 2. Inventario canónico de pantallas creadas

**SCR** es la abreviatura de *screen* (pantalla, en inglés). En este proyecto se utiliza como prefijo para identificar cada pantalla del prototipo y relacionarla con sus requisitos y casos de uso. Por ejemplo, **SCR-01** identifica el cotizador. Las letras adicionales distinguen variantes o estados de una pantalla, como **SCR-17E** para el error de credenciales.

| ID | Nombre | Propósito / RF | Cobertura del parcial |
|---|---|---|---|
| SCR-01 | Cotizador | Entradas y cuota indicativa; RF-01 | Vista de apoyo creada |
| SCR-02 | Propuesta WhatsApp | Vista previa del texto; RF-02 | Vista de apoyo creada |
| SCR-03 | Ingesta documental | Selección de archivo/clave y errores; RF-03, RF-13 | Vista de apoyo creada |
| SCR-04 | Auditoría | Lista de documentos y motivos del estado; RF-04 | Vista de apoyo creada |
| SCR-05 | Exportación | DOCX/PDF y bloqueos; RF-05, RF-09 | Vista de apoyo creada |
| SCR-06 | Prospecto | Datos mínimos; RF-10 | Vista de apoyo creada |
| SCR-07 | Agenda de entregas | Lista, datos de unidad y estados; RF-11 | Inicio del recorrido obligatorio CU-05 |
| SCR-08 | Fase 1: preparación | PDI y documentación; RF-06 | Recorrido obligatorio |
| SCR-09 | Fase 2: bienvenida | Firma y cotejo; RF-06 | Recorrido obligatorio |
| SCR-10 | Fase 3: inspección | Carrocería y accesorios; RF-06 | Recorrido obligatorio y salida a alterno |
| SCR-11 | Fase 4: orientación | Controles técnicos; RF-06 | Recorrido obligatorio y bloqueo |
| SCR-12 | Fase 5: recepción | Llaves, manuales, confirmación; RF-06 | Recorrido obligatorio |
| SCR-13 | Pase y cierre | Resultado Completada y pase ficticio; RF-12 | Final del recorrido obligatorio |
| SCR-14 | Incidencia | Reporte, pausa, acuerdo/resolución; RF-07 | Alterno obligatorio CU-06 |
| SCR-15 | Sincronización | Pendiente / Sincronizado / Error / Conflicto; RF-08, RF-17 | Estado ilustrativo, integración futura |
| SCR-16 | Plantillas | Versión y campos; RF-14 | Vista de apoyo creada |
| SCR-17 y variantes | Acceso | Login, credenciales inválidas, bloqueo y denegación; RF-15 | Navegación condicional de demostración |
| SCR-18 | Reserva demo | Licencia y agenda; RF-16 | Vista de apoyo creada |

Los identificadores SCR son estables y diferentes de los IDs internos de Figma. SCR-14 se desdobla en reporte (3:247), acuerdo (3:272) y pausa (3:292). Se agregan SCR-07P (3:510, agenda pausada) y SCR-07C (8:93, completada): 22 pantallas en la versión inicial, ampliadas a 31 con acceso por rol. El recorrido principal empieza en SCR-17 (3:472), seguido de SCR-07 (3:9); el pase es SCR-13 (3:227). Las vistas comerciales usan datos de ejemplo y no ejecutan procesos reales.

## 3. Comportamiento que debe navegarse

| Desde | Acción / condición | Destino y efecto |
|---|---|---|
| SCR-07 | Seleccionar entrega e iniciar | SCR-08; En curso |
| SCR-08 | Completar controles y Continuar | SCR-09 |
| SCR-09 | Completar controles y Continuar | SCR-10 |
| SCR-10 | Completar inspección y Continuar | SCR-11 |
| SCR-11 | Completar controles aplicables y Continuar | SCR-12 |
| SCR-12 | Confirmar recepción y Emitir pase | SCR-13; Completada |
| Cualquier fase | Intentar continuar con un obligatorio vacío | Misma pantalla; aviso de controles pendientes y avance bloqueado |
| SCR-08 / SCR-10 | Reportar incidencia | SCR-14; conservar fase de origen |
| SCR-14 | Guardar reporte | Estado Pausada; controles de reanudación condicionados |
| SCR-14 | Cancelar antes de guardar | Fase de origen, sin incidencia nueva |
| SCR-14 | Registrar acuerdo válido de detalle no crítico | Volver a fase de origen; controles restantes pendientes |
| SCR-14 | Daño de seguridad no resuelto o acuerdo rechazado | SCR-07 con entrega Pausada, sin pase |
| SCR-13 | Volver a agenda | SCR-07 con Completada |
| SCR-07 | Restablecer escenario de demostración | Estado ficticio inicial para repetir recorrido |

En Figma se pueden usar variantes/pantallas para representar los estados; deben poder alcanzarse mediante clics. En esta versión, «Validar y continuar» ejecuta una condición: si falta una casilla, permanece en la fase y muestra el aviso. El botón no se representa como deshabilitado; lo que se bloquea es la navegación. El pase exige los 16 controles de las cinco fases y ausencia de incidencia activa. No existe enlace oculto para saltar el bloqueo.

## 4. Datos ficticios y componentes

Usar «Cliente de demostración», modelo de muestra, VIN ficticio de 17 caracteres `DEMO0000000000001`, fecha de demostración y bahía A. Evitar identificaciones, estados bancarios o datos reales. El pase debe mostrar «DEMO — sin validez operativa».

Componentes mínimos: encabezado con fase, lista de controles, estado con texto e icono, botón Continuar, Reportar incidencia y Volver; modal/formulario de incidencia con Cancelar y Guardar. Incluir señal de Pausada y razón. Controles ≥48×48 píxeles; texto normal con contraste ≥4.5:1. El prototipo debe ilustrar los estados offline sin afirmar que realmente guarda datos al cerrar.

## 5. Prueba de navegación para registrar

| Prueba | Evidencia requerida | Resultado actual |
|---|---|---|
| Acceso externo | Abrir enlace como evaluador | Realizada según confirmación del autor |
| V-01 Principal | Agenda → cinco fases → pase → agenda completada | Realizada según confirmación del autor |
| V-02 Bloqueo | Control vacío impide avanzar; pase revalida todas las fases | Lógica comprobada; Presentar pendiente |
| V-03 Alterno retomable | Incidencia Fase 3 → acuerdo → retorno Fase 3 con avances conservados | Lógica comprobada; Presentar pendiente |
| V-04 Alterno suspendido | Daño bloqueante → Pausada, sin pase | Lógica comprobada; Presentar pendiente |
| V-05 Offline ilustrativo | SCR-15 muestra respaldo pendiente de conexión | Vista ilustrativa creada; operación offline no implementada |

Completar fecha, versión/enlace y resultado observado de las pruebas ya realizadas. Si falla, anotar el problema y corregir antes de sustituir Pendiente por Verificado.

## 6. Guía breve de prueba

1. Abrir Presentar desde SCR-17, iniciar sesión con la cuenta precargada de asesora y seleccionar Iniciar entrega.
2. Intentar continuar sin marcar un control: debe aparecer el aviso sin cambiar de fase.
3. Marcar los controles y recorrer las cinco fases. En Fase 5 abrir la confirmación del cliente, confirmar, reautenticar a la asesora y emitir el pase DEMO.
4. Volver a la agenda completada y pulsar Reiniciar demostración.
5. En Fase 3: Reportar incidencia → Guardar → Solicitar conformidad al cliente → Aceptar → Reautenticar asesora: debe volver a la misma fase.
6. Repetir con Reportar daño de seguridad: debe permanecer Pausada sin pase. Reiniciar demostración solo restablece el escenario ficticio; no es una excepción operativa.

El QR del pase codifica únicamente `DEMO|KF-DEMO-001|DEMO0000000000001`. No tiene validez operativa. Para obtener una copia `.fig`, el propietario puede guardar una copia local desde Figma; esta entrega crea el archivo nativo en la cuenta, no un adjunto binario `.fig`.

## 7. Acceso por rol — 30 de septiembre de 2026

El archivo contiene 31 pantallas y 84 nodos con reacciones. Se evaluaron 14 escenarios adicionales sobre las reacciones leídas: login de asesora y administrador; credenciales inválidas; denegación de plantillas a asesora; permiso de plantillas a administrador; denegación de entrega a administrador; bloqueo de cambios sin sesión; cierre; bloqueo simulado; recepción del cliente y reautenticación; denegación de cotizador al cliente; acuerdo y retorno; rechazo y pausa; pase bloqueado sin confirmación. Pasaron 14/14. No hubo destinos rotos ni desbordamientos de hijos principales; textos Inter nativos, sin imágenes de interfaz completa. Se revisaron visualmente inicio, panel de administrador, sesión y confirmación del cliente. Esto es evaluación de lógica guardada, no prueba manual en Presentar ni prueba de seguridad real.

| Pantalla | ID de Figma | Evidencia |
|---|---|---|
| SCR-17 | 3:472 | Correo/contraseña de ejemplo, cuenta de asesora |
| SCR-17A | 19:98 | Cuenta de administrador precargada |
| SCR-17E | 19:114 | Credenciales inválidas, sin sesión |
| SCR-17B | 19:162 | Sesión bloqueada |
| SCR-17D | 19:175 | Acceso denegado |
| SCR-19 | 19:127 | Panel exclusivo de administrador |
| SCR-20 | 19:144 | Mi sesión, cierre y bloqueo simulado |
| SCR-21 | 19:190 | Confirmación limitada del cliente |
| SCR-22 | 19:206 | Aceptación/rechazo del acuerdo |
| SCR-23 | 19:222 | Reautenticación de asesora |

### Recorrido adicional para la docente

1. Ingresar como asesora; desde Mi sesión / respaldo abrir Respaldo y luego Ver plantillas: debe mostrar Acceso denegado.
2. Cerrar sesión. Cargar la cuenta admin de demostración e iniciar sesión: aparece el panel con Plantillas, Respaldo y Mi sesión, sin operación comercial.
3. Cerrar sesión, probar credenciales inválidas y observar que no abre el tablero.
4. Ingresar como asesora, simular bloqueo desde Mi sesión y comprobar el regreso al inicio.
5. En recepción o acuerdo, entregar el dispositivo al cliente en la vista limitada. Confirmar/rechazar y comprobar que exige reautenticar a la asesora.

Las credenciales son fixtures visibles, no entradas libres ni contraseñas reales. El rol numérico del prototipo representa sin sesión, asesora, administrador y cliente temporal. El temporizador de 15 minutos se demuestra mediante un botón; no se implementó un temporizador real. Los servicios externos no usan este login. La seguridad efectiva y la autorización de registros deberán implementarse y probarse fuera de Figma.


### 7.1. Registro de pruebas manuales en modo Presentar

**Demo indicada para prueba:** https://factor-yam-65024850.figma.site/#/login

El autor confirmó haber realizado todas las pruebas de este registro. No reutiliza como resultados manuales las evaluaciones estáticas de reacciones documentadas arriba. Presentar de Figma Design y la demo publicada son versiones distintas: al reportar resultados, indicar versión/enlace utilizado; si se prueban ambas, duplicar la fila y conservar los registros separados.

Solo se completarán resultado observado, fecha, persona y estado a partir del relato o evidencia que proporcione Rodrigo. No usar la fecha de edición como fecha de prueba. Los pasos son un procedimiento previsto: si una acción no está disponible, registrar esa diferencia después de probar.

| Prueba | Pasos | Resultado esperado | Resultado observado | Fecha | Persona | Estado |
|---|---|---|---|---|---|---|
| Acceso externo como evaluador | Abrir Presentar sin la sesión del autor; repetir por separado en la demo publicada. | Acceso al inicio sin permisos de edición. | Realizada; resultado específico no informado. | No informada | Rodrigo Valdespino Vertiz | Realizada por el autor |
| V-01 — Principal | Ingresar como asesora; recorrer las cinco fases; confirmar recepción como cliente; reautenticar a la asesora; emitir pase. | Pase DEMO y entrega Completada solo con todos los controles satisfechos. | Realizada; resultado específico no informado. | No informada | Rodrigo Valdespino Vertiz | Realizada por el autor |
| V-02 — Bloqueo | Dejar un control de fase 4 vacío; pulsar Validar y continuar; completarlo y reintentar. | Aviso y permanencia en la fase hasta completar el control. | Realizada; resultado específico no informado. | No informada | Rodrigo Valdespino Vertiz | Realizada por el autor |
| V-03 — Incidencia no crítica con retorno | Desde fase 3 guardar detalle no crítico; solicitar conformidad; aceptar y reautenticar. | Pausa durante incidencia; retorno a fase 3 con avance previo conservado tras acuerdo válido. | Realizada; resultado específico no informado. | No informada | Rodrigo Valdespino Vertiz | Realizada por el autor |
| V-04 — Daño bloqueante sin pase | Reportar daño de seguridad en fase 1 o 3; consultar pausa y volver a agenda. | Entrega Pausada sin pase; aceptar un acuerdo no libera un daño de seguridad. | Realizada; resultado específico no informado. | No informada | Rodrigo Valdespino Vertiz | Realizada por el autor |
| V-05 — Sin conexión ilustrativo | Abrir SCR-15 y recorrer el estado ilustrativo de respaldo sin conexión. | Respaldo pendiente e indicación textual; no acredita persistencia ni sincronización reales. | Realizada; resultado específico no informado. | No informada | Rodrigo Valdespino Vertiz | Realizada por el autor |
| Adenda 2.1 — Permisos de asesora | Iniciar con cuenta demo de asesora; abrir operación y respaldo; intentar plantillas. | CU-01 a CU-09, CU-11 y CU-12 permitidos; CU-10 denegado sin mostrar ni modificar datos. | Realizada; resultado específico no informado. | No informada | Rodrigo Valdespino Vertiz | Realizada por el autor |
| Adenda 2.1 — Permisos de administrador | Iniciar con cuenta demo de administrador; abrir plantillas y respaldo; intentar entrega. | Solo CU-07, CU-10 y CU-11; operación comercial denegada. | Realizada; resultado específico no informado. | No informada | Rodrigo Valdespino Vertiz | Realizada por el autor |
| Adenda 2.1 — Credenciales inválidas | Ejecutar el escenario inválido en Presentar; en la demo introducir datos ficticios incorrectos. | Error genérico; sin sesión ni acceso al tablero. | Realizada; resultado específico no informado. | No informada | Rodrigo Valdespino Vertiz | Realizada por el autor |
| Adenda 2.1 — Cierre de sesión | Cerrar desde Mi sesión e intentar regresar mediante navegación anterior. | Sin acceso operativo protegido hasta autenticar de nuevo. | Realizada; resultado específico no informado. | No informada | Rodrigo Valdespino Vertiz | Realizada por el autor |
| Adenda 2.1 — Bloqueo de sesión | Activar Simular bloqueo por inactividad; intentar continuar y volver a autenticarse. | Datos ocultos y autenticación requerida; la simulación no acredita un temporizador real. | Realizada; resultado específico no informado. | No informada | Rodrigo Valdespino Vertiz | Realizada por el autor |
| Adenda 2.1 — Cliente y reautenticación | En fase 5 abrir vista del cliente; confirmar; intentar operar antes y después de reautenticar a la asesora. | Cliente limitado a su recepción; operación recuperada solo tras reautenticación. | Realizada; resultado específico no informado. | No informada | Rodrigo Valdespino Vertiz | Realizada por el autor |
| Adenda 2.1 — Acuerdo del cliente | Rechazar un acuerdo no crítico y reautenticar; en otro recorrido aceptar y reautenticar. | Rechazo mantiene pausa; aceptación permite retorno a fase de origen; ambas salidas exigen reautenticación. | Realizada; resultado específico no informado. | No informada | Rodrigo Valdespino Vertiz | Realizada por el autor |

Tras cada ejecución, proporcionar prueba, versión/enlace, pasos realizados, resultado observado, fecha, persona y evidencia disponible. Los datos de ejecución no informados se identifican como tales. Un fallo se registra como tal; no se sustituye por el resultado esperado.

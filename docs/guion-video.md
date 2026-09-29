# Guion del video — objetivo: 7 minutos

**Duración requerida:** 6 a 8 minutos. **Estado:** guion preparado; video no grabado ni entregado. La cámara puede estar apagada; se requieren voz y pantalla legibles.

Este guion se utiliza después de comprobar la navegación real. No grabar como si existieran estados que aún no están enlazados en Figma. Ensayar con cronómetro y ajustar el ritmo a 6–8 minutos; los tiempos son una pauta, no una duración medida.

## Preparación

Abrir README, entrevista, especificación, diagrama PNG, caso detallado, trazabilidad y Figma en pestañas. Ocultar notificaciones/datos personales; ampliar texto para que se lea. Usar el escenario ficticio del [prototipo](prototipo.md). Comprobar audio antes de grabar. Mostrar evidencias al hablar de ellas; el video se entrega fuera del repositorio según las instrucciones del curso.

## 0:00–0:45 — Problema, usuarios y alcance

**Pantalla:** README y visión.

«Soy Rodrigo Valdespino Vértiz y este proyecto es KandoFlow. Propongo una herramienta para apoyar a una asesora comercial Mazda en tres actividades: preparar cotizaciones, organizar expedientes de crédito y realizar la entrega de vehículos. La aplicación se plantea para uso móvil y con continuidad local cuando no hay conexión.

Para este parcial presento el análisis y el prototipo. El flujo que voy a demostrar es la entrega del vehículo, incluyendo una incidencia. El alcance no incluye cobros, dictámenes de crédito ni conexión con el sistema corporativo de la agencia. Las otras funciones están documentadas, pero no voy a presentar como implementado aquello que solo está propuesto.»

## 0:45–1:40 — Cómo se obtuvieron y corrigieron los requisitos

**Pantalla:** entrevista, tabla H-01 a H-07 y S-01 a S-06.

«La entrevista registrada se realizó con mi dupla representando el rol de negocio. Es una simulación académica; distingo sus hallazgos de lo que todavía debo confirmar con la usuaria real. El guion cubre contexto, proceso actual, dificultades, excepciones y verificación de supuestos.

Aquí está un supuesto que cambió: inicialmente se esperaba que la asesora llenara notas extensas durante la entrega. En la simulación se identificó que eso interrumpiría la atención al cliente, por lo que el flujo se orientó a confirmaciones breves. Otro supuesto descartado fue pedirle al cliente una cuenta adicional para seguir su trámite. Un hallazgo inesperado fue la necesidad de documentos imprimibles ante contingencias. Cada uno tiene un identificador y una consecuencia concreta en el análisis.»

**Adaptación necesaria:** si ya se aplicó el guion revisado, explicar la fecha y cambios reales. Si no se aplicó, declararlo pendiente; no atribuirle la bitácora anterior.

## 1:40–2:40 — Requisitos funcionales y de calidad

**Pantalla:** fichas RF-06, RF-07 y RNF-05/RNF-07.

«El RF-06 establece que las fases se completan de forma consecutiva. Su aceptación puede comprobarse dejando un control obligatorio vacío: la siguiente fase debe permanecer bloqueada. RF-07 cubre la incidencia y su resolución o aplazamiento acordado. El campo Origen señala qué viene de la entrevista y qué es una regla aún propuesta.

Los requisitos no funcionales tienen límites y métodos de verificación. Por ejemplo, RNF-05 fija un área activa mínima de cuarenta y ocho por cuarenta y ocho píxeles para los controles. RNF-07 exige recuperar todos los cambios confirmados después de cerrar y reabrir sin red. Este último se verificará en la implementación; una pantalla de Figma puede representar el estado offline, pero no demostrar persistencia real. También se definen métricas para rendimiento, seguridad, integridad y compatibilidad.»

## 2:40–3:25 — Diagrama y caso detallado

**Pantalla:** diagrama y caso CU-05.

«El diagrama delimita la aplicación e identifica a la asesora, el administrador, el cliente y los sistemas externos. Los casos representan objetivos. Obtener el paquete de crédito incluye verificar su completitud, porque esa comprobación siempre es necesaria. Resolver una incidencia extiende la entrega: ocurre solo cuando aparece esa condición.

CU-05 contiene precondiciones, pasos, resultados y alternos. La garantía mínima es que no se emite un pase mientras falte un control o exista una incidencia bloqueante. El alterno no termina en mostrar un error: explica qué se guarda, cuándo se pausa y a qué fase se regresa.»

## 3:25–5:45 — Demostración navegable

**Pantalla:** Figma. Dedicar aproximadamente 65 segundos al principal, 20 al bloqueo y 55 al alterno.

«Inicio desde la agenda y selecciono esta entrega de demostración. Compruebo la unidad, completo preparación, bienvenida y firma, inspección, orientación técnica y recepción final. Solo al completar los controles puedo obtener el pase de demostración y regresar al tablero con la entrega finalizada.»

**Acción:** ejecutar V-01 realmente. Restablecer el escenario.

«Ahora dejo un control obligatorio pendiente en la orientación. La interfaz muestra qué falta y no permite continuar. Esta interacción corresponde al criterio de aceptación de RF-06.»

**Acción:** ejecutar V-02. Restablecer y abrir Fase 3.

«Durante la inspección aparece un accesorio faltante. Abro Reportar incidencia, registro el detalle y guardo. La entrega queda pausada. Para un detalle no crítico, el modelo permite documentar el acuerdo con responsable, fecha y conformidad. Después regreso a la misma fase y completo los controles pendientes. Si el cliente rechaza el acuerdo o existe un daño de seguridad sin resolver, la entrega permanece pausada y no hay pase. Esa política todavía debe confirmarse con la agencia.»

**Acción:** ejecutar V-03 y mostrar la variante V-04. No cambiar pantallas manualmente para simular botones que no funcionan.

## 5:45–6:35 — Demostrar la cadena completa

**Pantalla:** fila del hilo H-04/H-07 en trazabilidad y enlaces asociados.

«Aquí puedo seguir la cadena: la necesidad de evitar omisiones en la entrega forma parte del alcance; H-04 y H-07 explican el origen; RF-06 y RF-07 describen las capacidades; CU-05 y CU-06 explican los escenarios; y las pantallas de fases e incidencia permiten validarlos. No es solo una similitud de nombres: el bloqueo y el retorno que describí en el caso de uso son las acciones que acabo de mostrar.

La matriz también distingue las pantallas previstas que aún no están verificadas y las pruebas que requieren una aplicación real.»

## 6:35–7:00 — Revisión y cierre

**Pantalla:** sección Revisión de la dupla y control de cambios.

Después de obtener la revisión real, decir: «En esta sección está registrada la revisión de la versión final, con fecha, observaciones y los cambios atendidos. El repositorio reúne la entrevista, requisitos, diagrama editable y PNG, caso detallado y enlace al prototipo. El siguiente paso de construcción será validar los supuestos de negocio pendientes y convertir estos criterios en pruebas de implementación».

**Si la revisión final sigue pendiente, no usar esa afirmación:** declarar el pendiente y completar la revisión antes de entregar, porque es requisito previo de evaluación.

## Comprobación de la grabación

- Duración efectiva entre 6:00 y 8:00; voz audible y textos legibles.
- Un recorrido principal completo y un alterno se ven navegando.
- Se muestra la relación alcance → RF/RNF → CU → pantalla, no solo se menciona.
- Se identifican límites del prototipo y supuestos de negocio.
- La revisión de la dupla corresponde a la versión presentada.
- El archivo o enlace de video se entrega por el medio indicado por el curso y se comprueba su acceso.

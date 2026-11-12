# SC-001: Confirmación de aceptación del rol de guardián

> Plantilla de solicitud de cambio · Ingeniería de Software I · SIS3407  
> Archivo propuesto: `doc/cambios/sc-001-aceptacion-rol-guardian.md`  
> Quien escribe esta solicitud es la **dupla de revisión**, no el dueño del sistema.

---

## Estado

Propuesta · 12 de noviembre de 2026

> Permanece como propuesta mientras se analiza. La decisión posterior debe registrarse con su justificación y sin borrar el historial.

## Quién la pide

**Rodrigo Valdespino Vertiz**, en calidad de **dupla de revisión** del proyecto *Memorium*, desarrollado por Emiliano Cabañas Prieto.

## Qué se pide

Quiero que las personas designadas como guardianes puedan conocer y aceptar expresamente esa responsabilidad antes de que la cápsula dependa de ellas. Si alguien no acepta, el titular debe saberlo y poder elegir a otra persona, sin considerar a quien rechazó como guardián disponible.

## Por qué

Actualmente se permite registrar guardianes mediante sus datos de contacto, pero eso no garantiza que sepan que fueron designados ni que estén dispuestos a participar. Confirmar su aceptación ayudaría a que el titular cuente con personas informadas y disponibles cuando se necesiten sus confirmaciones.

## Qué pasa si no se hace

Una cápsula podría depender de guardianes que nunca aceptaron el compromiso, lo que dificultaría completar las confirmaciones necesarias en el futuro. No es una falla comprobada del sistema actual, pero sí una oportunidad para reducir incertidumbre y evitar retrasos.

## Tipo de mantenimiento

- [ ] **Correctivo** · algo está mal y hay que repararlo
- [ ] **Adaptativo** · el entorno cambió y hay que ajustarse
- [x] **Perfectivo** · funciona, pero puede ser mejor
- [ ] **Preventivo** · todavía no falla, pero va a fallar

**Justificación:** se propone ampliar el proceso existente de designación de guardianes para mejorar su claridad y fiabilidad; no responde a un defecto demostrado ni a un cambio externo obligatorio.

## Criterio de aceptación

1. **Aceptación:** cuando una persona designada confirma su aceptación, el titular puede comprobar que aceptó el rol.
2. **Rechazo:** cuando una persona designada rechaza el rol, se informa al titular y esa persona no cuenta como guardián disponible para satisfacer el mínimo requerido.
3. **Activación:** si no existe el número mínimo de guardianes que hayan aceptado, la cápsula no puede activarse y se comunica el motivo.
4. **Privacidad:** la persona invitada no obtiene acceso al contenido cifrado de la cápsula por el solo hecho de aceptar o rechazar.

## Prioridad que sugiere el solicitante

**Media.** Ayuda a reducir la incertidumbre sobre la disponibilidad real de los guardianes, pero no supone una falla ya demostrada ni requiere resolverla de manera urgente. La prioridad definitiva corresponde al análisis del responsable de Memorium.

---

*La solicitud describe qué se quiere, nunca cómo hacerlo. El cómo se decide en el análisis de impacto, y lo decide quien conoce el diseño.*

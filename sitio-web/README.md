# KandoFlow — Sitio web

Sitio web responsivo que presenta **KandoFlow**, la propuesta de estación de trabajo móvil para la atención comercial Mazda (cotizaciones, expedientes de crédito y entrega vehicular). Proyecto final del curso de desarrollo web: HTML5, CSS3, JavaScript, jQuery y plugins.

> El sitio presenta la propuesta documentada en [`../docs`](../docs). KandoFlow como aplicación aún no está implementada; el cotizador y la simulación de entrega de este sitio son demostraciones.

## Páginas
| Página | Archivo | Contenido |
|---|---|---|
| Inicio | `index.html` | Slider (bxSlider), qué es KandoFlow, cifras animadas, problemas que resuelve |
| Nosotros | `nosotros.html` | Autor, roles, línea del tiempo, preguntas frecuentes (acordeón), galería con lightbox |
| Funcionalidades (servicios) | `funcionalidades.html` | 17 requisitos con filtro y buscador, cotizador indicativo y simulación de entrega en 5 fases |
| Contacto | `contacto.html` | Formulario validado, enlaces del proyecto y mapa interactivo |

## Requisitos cumplidos
- **Diseño:** responsivo (Grid/Flexbox + media queries), menú móvil, footer, paleta consistente y tema claro/oscuro.
- **JavaScript (`js/main.js`):** fecha y hora en vivo, estado de conexión, validación del formulario, botón «Ir arriba», tema oscuro.
- **Funcionalidad adicional:** cotizador indicativo (fórmula de RF-01, oráculo 8,887.67 MXN), propuesta por WhatsApp (RF-02) y simulación de entrega por fases (RF-06).
- **jQuery (`js/jquery-app.js`):** eventos, efectos (`fade`, `slideToggle`, `animate`) y manipulación del DOM.
- **Plugins:** [bxSlider](https://bxslider.com/) y [Magnific Popup](https://dimsemenov.com/plugins/magnific-popup/).
- **Mapa:** [Leaflet](https://leafletjs.com/) + OpenStreetMap (requiere conexión). La ubicación es **de ejemplo**: cambia las coordenadas en `js/main.js`.
- **Formulario:** nombre, correo, asunto y mensaje validados con JavaScript.

## Estructura
```
sitio-web/
├── index.html · nosotros.html · funcionalidades.html · contacto.html
├── css/styles.css
├── js/main.js          # JavaScript puro
├── js/jquery-app.js    # jQuery + plugins
├── img/                # ilustraciones SVG propias (conceptos de pantalla)
├── vendor/             # jQuery, bxSlider, Magnific Popup, Leaflet (locales)
└── docs/               # informe PDF y capturas
```

## Ejecutar
Abre `index.html` en el navegador, o desde esta carpeta: `python3 -m http.server 8000` y visita <http://localhost:8000>.

## Créditos
Código e ilustraciones propios. Librerías: jQuery (MIT), bxSlider (MIT), Magnific Popup (MIT), Leaflet (BSD-2); mapa © colaboradores de OpenStreetMap.

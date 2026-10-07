/* KandoFlow — JavaScript puro (sin jQuery)
   Fecha y hora, estado de conexión, tema oscuro, botón "Ir arriba", validación del formulario y mapa. */
(function () {
  "use strict";

  /* ---------- 1. Fecha y hora actual ---------- */
  var reloj = document.getElementById("reloj");
  function actualizarReloj() {
    var ahora = new Date();
    var fecha = ahora.toLocaleDateString("es-MX", { weekday: "long", day: "numeric", month: "long", year: "numeric" });
    var hora = ahora.toLocaleTimeString("es-MX", { hour: "2-digit", minute: "2-digit", second: "2-digit" });
    if (reloj) reloj.textContent = "🕒 " + fecha + " · " + hora;
  }

  // Indica si el navegador tiene conexión (la PWA propuesta opera sin red).
  function estadoConexion() {
    var el = document.getElementById("estado-horario");
    if (el) el.textContent = navigator.onLine ? "🟢 En línea" : "🟠 Sin conexión (modo local)";
  }
  window.addEventListener("online", estadoConexion);
  window.addEventListener("offline", estadoConexion);
  estadoConexion();
  if (reloj) { actualizarReloj(); setInterval(actualizarReloj, 1000); }
  var anio = document.getElementById("anio");
  if (anio) anio.textContent = new Date().getFullYear();

  /* ---------- 2. Tema oscuro (funcionalidad adicional) ---------- */
  var btnTema = document.getElementById("theme-toggle");
  function aplicarTema(tema) {
    document.documentElement.setAttribute("data-theme", tema);
    if (btnTema) btnTema.textContent = tema === "dark" ? "☀️" : "🌙";
    try { localStorage.setItem("theme", tema); } catch (e) { /* almacenamiento no disponible */ }
  }
  var guardado = null;
  try { guardado = localStorage.getItem("theme"); } catch (e) {}
  var inicial = guardado || (window.matchMedia && matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
  aplicarTema(inicial);
  if (btnTema) btnTema.addEventListener("click", function () {
    aplicarTema(document.documentElement.getAttribute("data-theme") === "dark" ? "light" : "dark");
  });

  /* ---------- 3. Botón "Ir arriba" ---------- */
  var btnTop = document.getElementById("btn-top");
  if (btnTop) {
    window.addEventListener("scroll", function () {
      btnTop.style.display = window.scrollY > 300 ? "block" : "none";
    });
    btnTop.addEventListener("click", function () {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  /* ---------- 4. Validación del formulario ---------- */
  var form = document.getElementById("form-contacto");
  if (form) {
    var reglas = {
      nombre: function (v) {
        if (v.length < 3) return "El nombre debe tener al menos 3 caracteres.";
        if (!/^[A-Za-zÁÉÍÓÚÜÑáéíóúüñ\s'.-]+$/.test(v)) return "El nombre solo puede contener letras y espacios.";
        return "";
      },
      correo: function (v) {
        if (!v) return "Escribe tu correo electrónico.";
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v)) return "Escribe un correo válido (ej. nombre@dominio.com).";
        return "";
      },
      asunto: function (v) {
        if (v.length < 5) return "El asunto debe tener al menos 5 caracteres.";
        return "";
      },
      mensaje: function (v) {
        if (v.length < 10) return "El mensaje debe tener al menos 10 caracteres.";
        if (v.length > 500) return "El mensaje no puede superar 500 caracteres.";
        return "";
      }
    };

    function validarCampo(id) {
      var campo = document.getElementById(id);
      var error = reglas[id](campo.value.trim());
      var grupo = campo.parentNode;
      document.getElementById("err-" + id).textContent = error;
      grupo.classList.toggle("invalid", !!error);
      grupo.classList.toggle("valid", !error);
      campo.setAttribute("aria-invalid", error ? "true" : "false");
      return !error;
    }

    Object.keys(reglas).forEach(function (id) {
      var campo = document.getElementById(id);
      campo.addEventListener("blur", function () { validarCampo(id); });
      campo.addEventListener("input", function () {
        if (campo.parentNode.classList.contains("invalid")) validarCampo(id);
      });
    });

    var contador = document.getElementById("contador");
    document.getElementById("mensaje").addEventListener("input", function (e) {
      contador.textContent = e.target.value.length;
    });

    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var todoOk = true, primero = null;
      Object.keys(reglas).forEach(function (id) {
        if (!validarCampo(id)) { todoOk = false; primero = primero || id; }
      });
      var estado = document.getElementById("form-ok");
      if (!todoOk) {
        estado.style.display = "none";
        document.getElementById(primero).focus();
        return;
      }
      var nombre = document.getElementById("nombre").value.trim();
      estado.textContent = "¡Gracias, " + nombre + "! Tu mensaje fue validado y enviado correctamente (simulación).";
      estado.style.display = "block";
      form.reset();
      contador.textContent = "0";
      form.querySelectorAll(".form-group").forEach(function (g) { g.classList.remove("valid", "invalid"); });
    });
  }

  /* ---------- 5. Mapa interactivo (Leaflet + OpenStreetMap) ---------- */
  var contenedorMapa = document.getElementById("mapa");
  if (contenedorMapa) {
    if (typeof L === "undefined") {
      contenedorMapa.textContent = "No se pudo cargar el mapa.";
    } else {
      // Ubicación de EJEMPLO de la agencia (Ángel de la Independencia, CDMX). Cambia estas coordenadas por las reales.
      var posicion = [19.4270, -99.1677];
      var mapa = L.map("mapa").setView(posicion, 16);
      L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
        maxZoom: 19,
        attribution: "&copy; <a href='https://www.openstreetmap.org/copyright'>OpenStreetMap</a>"
      }).addTo(mapa);
      L.marker(posicion).addTo(mapa)
        .bindPopup("<strong>Agencia Mazda (ubicación de ejemplo)</strong><br>Paseo de la Reforma, CDMX").openPopup();
    }
  }
})();

/* KandoFlow — jQuery: eventos, efectos, manipulación del DOM y plugins
   Plugins: bxSlider (carruseles) y Magnific Popup (lightbox de la galería). */
$(function () {
  "use strict";

  /* ---------- Navegación móvil (evento click + toggle de clase) ---------- */
  $("#menu-toggle").on("click", function () {
    var abierto = $("#nav-list").toggleClass("open").hasClass("open");
    $(this).attr("aria-expanded", abierto).text(abierto ? "✕" : "☰");
  });

  /* ---------- Plugin bxSlider ---------- */
  if ($.fn.bxSlider) {
    $(".slider-hero").bxSlider({ auto: true, pause: 5000, mode: "fade", speed: 800, pager: true, controls: true, adaptiveHeight: false, autoHover: true });
    $(".slider-problemas").bxSlider({ auto: true, pause: 6000, speed: 600, controls: false, pager: true });
  }

  /* ---------- Plugin Magnific Popup (galería) ---------- */
  if ($.fn.magnificPopup) {
    $("#galeria").magnificPopup({
      delegate: "a", type: "image", gallery: { enabled: true, tPrev: "Anterior", tNext: "Siguiente", tCounter: "%curr% de %total%" },
      image: { titleSrc: "title" }, removalDelay: 200, mainClass: "mfp-fade"
    });
  }

  /* ---------- Efecto: aparición al hacer scroll ---------- */
  function revelar() {
    var limite = $(window).scrollTop() + $(window).height() - 60;
    $(".reveal:not(.visible)").each(function () {
      if ($(this).offset().top < limite) $(this).addClass("visible");
    });
  }
  $(window).on("scroll resize", revelar);
  revelar();

  /* ---------- Efecto: contadores animados ---------- */
  var contado = false;
  function iniciarContadores() {
    var $sec = $(".stats");
    if (contado || !$sec.length) return;
    if ($(window).scrollTop() + $(window).height() < $sec.offset().top + 80) return;
    contado = true;
    $("[data-count]").each(function () {
      var $n = $(this), meta = parseInt($n.data("count"), 10);
      $({ v: 0 }).animate({ v: meta }, {
        duration: 1800,
        step: function () { $n.text(Math.floor(this.v).toLocaleString("es-MX")); },
        complete: function () { $n.text(meta.toLocaleString("es-MX")); }
      });
    });
  }
  $(window).on("scroll", iniciarContadores);
  iniciarContadores();

  /* ---------- Acordeón de preguntas frecuentes (slideToggle) ---------- */
  $("#faq").on("click", ".faq-q", function () {
    var $b = $(this), $r = $b.next(".faq-a");
    $("#faq .faq-a").not($r).slideUp(250).prev().removeClass("open").attr("aria-expanded", false);
    $r.slideToggle(250);
    $b.toggleClass("open").attr("aria-expanded", $b.hasClass("open"));
  });

  /* ---------- Funcionalidades: filtro por área y buscador ---------- */
  var categoria = "todos";
  function filtrar() {
    var texto = $.trim($("#buscador").val()).toLowerCase(), visibles = 0;
    $("#productos .feature").each(function () {
      var $p = $(this);
      var coincide = (categoria === "todos" || $p.data("cat") === categoria) && $p.data("name").indexOf(texto) !== -1;
      $p.stop(true, true)[coincide ? "fadeIn" : "fadeOut"](200);
      if (coincide) visibles++;
    });
    $("#sin-resultados")[visibles ? "hide" : "show"]();
  }
  $(".filter-btn").on("click", function () {
    $(".filter-btn").removeClass("active");
    $(this).addClass("active");
    categoria = $(this).data("filter");
    filtrar();
  });
  $("#buscador").on("input", filtrar);

  /* ---------- Cotizador indicativo (RF-01) y propuesta de WhatsApp (RF-02) ----------
     Capital P = precio × (1 − enganche); i = tasa anual / 12;
     cuota = P·i / (1 − (1+i)^(−n));  si i = 0, cuota = P / n. */
  var PLAZOS = [12, 24, 36, 48, 60, 72];
  var mxn = new Intl.NumberFormat("es-MX", { style: "currency", currency: "MXN" });
  var cotizacion = null;

  function calcularCuota(precio, enganchePct, n, tasaPct) {
    var capital = precio * (1 - enganchePct / 100), i = tasaPct / 100 / 12;
    var cuota = i === 0 ? capital / n : capital * i / (1 - Math.pow(1 + i, -n));
    return { capital: capital, cuota: Math.round(cuota * 100) / 100 };
  }
  function error(id, msg) { $("#err-" + id).text(msg); $("#" + id).closest(".form-group").toggleClass("invalid", !!msg); return !msg; }

  $("#form-cotizador").on("submit", function (e) {
    e.preventDefault();
    var precio = parseFloat($("#precio").val()), eng = parseFloat($("#enganche").val()),
        plazo = parseInt($("#plazo").val(), 10), tasa = parseFloat($("#tasa").val());
    var ok = true;
    ok = error("precio", !(precio > 0) ? "Escribe un precio mayor a 0." : "") && ok;
    ok = error("enganche", !(eng >= 10 && eng <= 80) ? "El enganche debe estar entre 10 % y 80 %." : "") && ok;
    ok = error("tasa", !(tasa >= 0) ? "La tasa no puede ser negativa." : "") && ok;
    if ($.inArray(plazo, PLAZOS) === -1) ok = false;
    if (!ok) { cotizacion = null; $("#cuota").text("—"); return; }
    var r = calcularCuota(precio, eng, plazo, tasa);
    cotizacion = { modelo: $.trim($("#modelo").val()), precio: precio, eng: eng, plazo: plazo, tasa: tasa, cuota: r.cuota };
    $("#cuota").hide().text(mxn.format(r.cuota)).fadeIn(300);
    $("#capital").text(mxn.format(r.capital));
    $("#monto-enganche").text(mxn.format(precio - r.capital));
    $("#total-cuotas").text(mxn.format(r.cuota * plazo));
  });

  $("#btn-whatsapp").on("click", function () {
    if (!cotizacion) { error("telefono", "Primero calcula una cotización."); return; }
    var tel = $.trim($("#telefono").val());
    if (!/^\d{10}$/.test(tel)) { error("telefono", "Escribe un teléfono mexicano de 10 dígitos."); return; }
    error("telefono", "");
    var c = cotizacion;
    var texto = "Hola, esta es tu cotización indicativa" + (c.modelo ? " del " + c.modelo : "") + ":\n" +
      "• Precio: " + mxn.format(c.precio) + "\n• Enganche: " + c.eng + " %\n• Plazo: " + c.plazo + " meses\n" +
      "• Tasa anual: " + c.tasa + " %\n• Cuota mensual: " + mxn.format(c.cuota) + "\n(Cálculo ilustrativo, no es una oferta.)";
    window.open("https://wa.me/52" + tel + "?text=" + encodeURIComponent(texto), "_blank", "noopener");
  });

  /* ---------- Simulación de entrega en cinco fases (RF-06) ---------- */
  function pintarEntrega(hechas) {
    $("#stepper .step").each(function (idx) {
      var $s = $(this);
      $s.toggleClass("done", idx < hechas).toggleClass("current", idx === hechas).toggleClass("locked", idx > hechas);
      $s.find("button").prop("disabled", idx !== hechas).text(idx < hechas ? "Completada ✓" : "Completar");
    });
    $("#progreso").css("width", (hechas / 5 * 100) + "%");
    $("#pase")[hechas === 5 ? "slideDown" : "slideUp"](250);
  }
  var fasesHechas = 0;
  $("#stepper").on("click", ".complete-btn", function () {
    fasesHechas = Math.min(5, fasesHechas + 1);
    pintarEntrega(fasesHechas);
  });
  $("#reiniciar-entrega").on("click", function () { fasesHechas = 0; pintarEntrega(0); });
});

(function () {
  "use strict";
  var SITE = window.SITE || {};
  var KEY = "baujard:projet";
  document.documentElement.classList.add("js");

  function $(s, r) { return (r || document).querySelector(s); }
  function $$(s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); }
  function load() { try { return JSON.parse(localStorage.getItem(KEY)) || {}; } catch (e) { return {}; } }
  function save(p) { try { localStorage.setItem(KEY, JSON.stringify(p)); } catch (e) {} }
  function clear() { try { localStorage.removeItem(KEY); } catch (e) {} }

  var WHO = { mariee: "Robe de mariée", cortege: "Cortège", ennoblissement: "Ennoblissement" };
  var STYLES = {
    epure: { name: "Épuré", img: "assets/img/creation-01.jpg", alt: "Mariée de profil en robe de satin ivoire à encolure carrée", text: "Des lignes nettes, un crêpe de soie ou un satin, un dos travaillé. L’élégance vient de la coupe." },
    romantique: { name: "Romantique", img: "assets/img/creation-05.jpg", alt: "Mariée en mouvement, la jupe fluide soulevée", text: "Une jupe fluide, un tulle ou une dentelle légère. Une robe qui bouge avec vous." },
    precieux: { name: "Précieux", img: "assets/img/creation-08.jpg", alt: "Robe en dentelle ancienne sur un mannequin", text: "De la dentelle, des broderies et des perles posées à la main. Une pièce qui se regarde de près." }
  };

  /* Année, e-mail, Instagram */
  var y = $("#year"); if (y) y.textContent = new Date().getFullYear();
  $$(".js-email").forEach(function (a) { if (SITE.email) { a.href = "mailto:" + SITE.email; if (a.hasAttribute("data-show")) a.textContent = SITE.email; } });
  $$(".js-instagram").forEach(function (a) { if (SITE.instagram) a.href = SITE.instagram; });

  /* Menu mobile */
  var burger = $(".burger"), nav = $("#menu");
  if (burger && nav) {
    burger.addEventListener("click", function () {
      var open = nav.classList.toggle("open");
      burger.setAttribute("aria-expanded", open);
      burger.setAttribute("aria-label", open ? "Fermer le menu" : "Ouvrir le menu");
    });
    document.addEventListener("keydown", function (e) { if (e.key === "Escape" && nav.classList.contains("open")) { burger.click(); burger.focus(); } });
  }

  /* Apparition douce */
  var rv = $$(".rv");
  if (rv.length && "IntersectionObserver" in window) {
    var io = new IntersectionObserver(function (es) { es.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } }); }, { threshold: .12 });
    rv.forEach(function (n) { io.observe(n); });
  } else { rv.forEach(function (n) { n.classList.add("in"); }); }

  /* Galerie : filtres */
  var gal = $("#gallery");
  if (gal) {
    var chips = $$(".filters .chip");
    chips.forEach(function (c) {
      c.addEventListener("click", function () {
        var f = c.getAttribute("data-filter");
        chips.forEach(function (o) { o.classList.toggle("on", o === c); o.setAttribute("aria-pressed", o === c); });
        $$("figure", gal).forEach(function (fig) { fig.hidden = !(f === "all" || fig.getAttribute("data-cat") === f); });
      });
    });
  }

  /* Avant / après */
  $$(".ba").forEach(function (ba) {
    var r = $("input", ba);
    function set(v) { ba.style.setProperty("--p", v + "%"); r.setAttribute("aria-valuetext", Math.round(v) + " % avant"); }
    r.addEventListener("input", function () { set(r.value); });
    set(r.value);
    var reduce = window.matchMedia && matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!reduce && "IntersectionObserver" in window) {
      var seen = false, o = new IntersectionObserver(function (es) {
        if (seen || !es[0].isIntersecting) return; seen = true; o.disconnect();
        var t0 = null, from = 50;
        (function step(t) {
          if (t0 === null) t0 = t;
          var k = (t - t0) / 1600; if (k > 1) { set(50); r.value = 50; return; }
          var v = from + Math.sin(k * Math.PI * 2) * 14 * (1 - k);
          set(v); r.value = v; requestAnimationFrame(step);
        })(performance.now());
      }, { threshold: .6 });
      o.observe(ba);
    }
  });

  /* Mon projet : parcours guidé */
  var wz = $("#wz");
  function monthYear(d) { return d.toLocaleDateString("fr-FR", { month: "long", year: "numeric" }); }
  function parseDate(v) { var m = /^(\d{4})-(\d{2})-(\d{2})$/.exec(v || ""); return m ? new Date(+m[1], +m[2] - 1, +m[3]) : null; }
  function monthsUntil(d) { var n = new Date(); return (d.getFullYear() - n.getFullYear()) * 12 + d.getMonth() - n.getMonth() + (d.getDate() >= n.getDate() ? 0 : -1); }
  function todayISO() { var n = new Date(); return n.getFullYear() + "-" + ("0" + (n.getMonth() + 1)).slice(-2) + "-" + ("0" + n.getDate()).slice(-2); }

  if (wz) {
    var proj = {}, step = 1;
    var panes = $$(".pane", wz), back = $(".wz-back", wz), count = $(".wz-count", wz), bar = $(".wz-bar i", wz);
    var qs = new URLSearchParams(location.search);
    var qd = qs.get("date");

    function go(n, noFocus) {
      step = n;
      panes.forEach(function (p) { p.hidden = +p.getAttribute("data-pane") !== n; });
      back.hidden = n === 1;
      count.textContent = n <= 3 ? n + " / 3" : "Votre projet";
      bar.style.width = (n >= 4 ? 100 : (n - 1) / 3 * 100 + 8) + "%";
      if (n === 4) renderResult();
      if (!noFocus) { var h = $("h1,h2", panes[n - 1]); if (h) { h.setAttribute("tabindex", "-1"); h.focus({ preventScroll: true }); } window.scrollTo({ top: 0, behavior: "smooth" }); }
    }
    back.addEventListener("click", function () { go(Math.max(1, step - 1)); });

    /* 1 — date */
    var di = $("#wzDate"), de = $("#wzDateErr");
    di.min = todayISO();
    $("#wzDateOk").addEventListener("click", function () {
      var d = parseDate(di.value);
      if (!d) { de.textContent = "Choisissez une date, ou passez cette étape."; return; }
      if (d < new Date(new Date().setHours(0, 0, 0, 0))) { de.textContent = "Cette date est déjà passée."; return; }
      de.textContent = ""; proj.date = di.value; save(proj); go(2);
    });
    $("#wzDateSkip").addEventListener("click", function () { proj.date = ""; save(proj); go(2); });

    /* 2 — pour qui */
    $$("[data-who]", wz).forEach(function (b) { b.addEventListener("click", function () { proj.who = b.getAttribute("data-who"); save(proj); go(3); }); });
    /* 3 — ambiance */
    $$("[data-style]", wz).forEach(function (b) { b.addEventListener("click", function () { proj.style = b.getAttribute("data-style"); save(proj); go(4); }); });

    /* Résultat */
    function renderResult() {
      var d = parseDate(proj.date), s = STYLES[proj.style] || STYLES.epure;
      var tags = [WHO[proj.who] || "Projet"]; if (d) tags.push(monthYear(d)); tags.push("Style " + s.name.toLowerCase());
      $("#resTags").innerHTML = tags.map(function (t) { return "<span>" + t + "</span>"; }).join("");
      $("#resImg").src = s.img; $("#resImg").alt = s.alt; $("#resName").textContent = s.name; $("#resText").textContent = s.text;
      var box = $("#resPlan"), html = "";
      if (proj.who === "ennoblissement") {
        html = "<p class=\"note\">Chaque pièce à transformer est différente. Le délai se précise après avoir vu la pièce, lors du premier rendez-vous.</p>";
      } else if (!d) {
        html = "<p class=\"note\">Sans date précise, nous construirons le calendrier ensemble lors du premier rendez-vous.</p>";
      } else if (monthsUntil(d) < (SITE.shortDelayMonths || 6)) {
        html = "<p class=\"note\"><strong>Votre date est proche.</strong> Écrivez-nous sans attendre : nous vous dirons honnêtement ce qui est possible.</p>";
      } else {
        var now = new Date();
        html = "<ol class=\"tl\">" + (SITE.planning || []).map(function (st) {
          var t = new Date(d.getFullYear(), d.getMonth() - st.months, 1);
          var late = t < new Date(now.getFullYear(), now.getMonth(), 1);
          return "<li><time>" + (late ? "Dès maintenant" : monthYear(t)) + "</time><b>" + st.label + "</b><span>" + st.text + "</span></li>";
        }).join("") + "</ol><p class=\"note\">Repères indicatifs, à affiner avec l’atelier.</p>";
      }
      box.innerHTML = html;
    }
    $("#wzReset").addEventListener("click", function () { proj = {}; clear(); di.value = ""; go(1); });

    /* Démarrage : date reçue depuis l’accueil */
    if (qd && parseDate(qd) && parseDate(qd) >= new Date(new Date().setHours(0, 0, 0, 0))) { proj.date = qd; di.value = qd; save(proj); go(2, true); }
    else { go(1, true); }
  }

  /* Rendez-vous : récapitulatif du projet */
  var recap = $("#recap");
  var rdv = $("#rdvForm");
  if (rdv) {
    var p = load(), d0 = parseDate(p.date);
    if (p.who || d0 || p.style) {
      var bits = [];
      if (p.who) bits.push(WHO[p.who]); if (d0) bits.push(monthYear(d0)); if (p.style && STYLES[p.style]) bits.push("style " + STYLES[p.style].name.toLowerCase());
      $("#recapTxt", recap).textContent = bits.join(" · "); recap.hidden = false;
      if (p.who) { var rb = rdv.querySelector("input[name=besoin][data-who=" + p.who + "]"); if (rb) rb.checked = true; }
      if (d0) rdv.elements.date_mariage.value = p.date;
      rdv.elements.projet_resume.value = bits.join(" · ");
    }
    var rmsg = $("#rdvMsg");
    rdv.addEventListener("submit", function (e) {
      e.preventDefault();
      var f = rdv.elements;
      if (f.site.value) return;
      if (!f.nom.value.trim()) { rmsg.textContent = "Merci d’indiquer votre nom."; f.nom.focus(); return; }
      if (!/^\S+@\S+\.\S+$/.test(f.email.value)) { rmsg.textContent = "Merci d’indiquer une adresse e-mail valide."; f.email.focus(); return; }
      if (!$("#rgpd").checked) { rmsg.textContent = "Merci de cocher la case d’acceptation."; return; }
      var besoin = rdv.querySelector("input[name=besoin]:checked").value;
      var text = "Bonjour,\n\nBesoin : " + besoin + "\nNom : " + f.nom.value + "\nE-mail : " + f.email.value + "\nTéléphone : " + f.telephone.value +
        "\nDate du mariage : " + f.date_mariage.value + "\nRendez-vous : " + f.lieu.value + (f.projet_resume.value ? "\nProjet : " + f.projet_resume.value : "") + "\n\nMessage :\n" + f.message.value + "\n";
      send(rdv, rmsg, SITE.formEndpoint, "Demande de rendez-vous : " + besoin, text);
    });
  }

  /* Envoi : service de formulaires, sinon e-mail */
  function send(form, msg, endpoint, subject, body) {
    if (endpoint) {
      msg.textContent = "Envoi en cours…";
      fetch(endpoint, { method: "POST", body: new FormData(form), headers: { Accept: "application/json" } })
        .then(function (r) { if (!r.ok) throw 0; form.reset(); msg.textContent = "Merci, votre message est bien parti. L’atelier vous répond rapidement."; })
        .catch(function () { msg.textContent = "L’envoi a échoué. Réessayez ou écrivez-nous directement par e-mail."; });
    } else {
      msg.textContent = "Votre messagerie va s’ouvrir avec le message prêt à envoyer.";
      location.href = "mailto:" + (SITE.email || "") + "?subject=" + encodeURIComponent(subject) + "&body=" + encodeURIComponent(body);
    }
  }
  var news = $("#newsForm");
  if (news) {
    var nm = $("#newsMsg");
    news.addEventListener("submit", function (e) {
      e.preventDefault();
      var v = $("#newsMail").value;
      if (!/^\S+@\S+\.\S+$/.test(v)) { nm.textContent = "Merci d’indiquer une adresse e-mail valide."; return; }
      send(news, nm, SITE.newsletterEndpoint || SITE.formEndpoint, "Inscription à la lettre d’information", "Merci de m’inscrire à la lettre d’information : " + v);
    });
  }
})();

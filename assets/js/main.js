/**
 * MADE FOR OCCASIONS — SITE BEHAVIOUR
 * Mobile nav, scroll reveals, accordion, gallery lightbox, form handling
 * and config-driven content injection (contact details, pricing, FAQs...).
 * No external dependencies.
 */
(function () {
  "use strict";
  var CFG = window.MFO_CONFIG || {};

  /* ---------- Analytics stub -------------------------------------------
     Fires conversion events to GA4 / Meta Pixel / TikTok Pixel if those
     scripts are present (configured in config.js). Safe no-op otherwise. */
  function track(eventName, params) {
    try {
      if (window.gtag) window.gtag("event", eventName, params || {});
      if (window.fbq) window.fbq("trackCustom", eventName, params || {});
      if (window.ttq && window.ttq.track) window.ttq.track(eventName, params || {});
      // eslint-disable-next-line no-console
      console.debug("[MFO event]", eventName, params || {});
    } catch (e) { /* analytics should never break the page */ }
  }
  window.MFO_track = track;

  document.addEventListener("DOMContentLoaded", function () {
    injectConfig();
    initNav();
    initReveal();
    initAccordion();
    initGalleryFilters();
    initLightbox();
    initForm();
    initCtaTracking();
    initStickyCta();
    document.querySelectorAll("[data-year]").forEach(function (el) {
      el.textContent = new Date().getFullYear();
    });
  });

  /* ---------- Config-driven content -------------------------------------- */
  function injectConfig() {
    if (!CFG.business) return;
    var b = CFG.business;

    setAll("[data-cfg='phone']", b.phone);
    setAllAttr("[data-cfg='phone-href']", "href", b.phoneHref);
    setAll("[data-cfg='email']", b.email);
    setAllAttr("[data-cfg='email-href']", "href", b.emailHref);
    setAllAttr("[data-cfg='instagram-href']", "href", b.instagram);
    setAllAttr("[data-cfg='facebook-href']", "href", b.facebook);
    setAllAttr("[data-cfg='tiktok-href']", "href", b.tiktok);
    setAll("[data-cfg='instagram-handle']", b.instagramHandle);
    setAll("[data-cfg='service-region']", b.serviceRegion);
    setAll("[data-cfg='base-town']", b.baseTown);
    setAll("[data-cfg='launch-label']", CFG.launchNotice ? CFG.launchNotice.label : "");
    if (CFG.launchNotice && !CFG.launchNotice.enabled) {
      document.querySelectorAll("[data-cfg-show='launch-notice']").forEach(function (el) { el.style.display = "none"; });
    }
    // Earliest selectable event date on the enquiry form, tied to the launch notice.
    document.querySelectorAll("[data-cfg='min-event-date']").forEach(function (el) {
      if (CFG.launchNotice && CFG.launchNotice.bookingsOpenDate) el.min = CFG.launchNotice.bookingsOpenDate;
    });
    setAll("[data-cfg='single-price']", CFG.pricing ? CFG.pricing.singleNumber : "");
    setAll("[data-cfg='two-price']", CFG.pricing ? CFG.pricing.twoNumbers : "");

    // Service areas list
    document.querySelectorAll("[data-cfg-list='service-areas']").forEach(function (list) {
      list.innerHTML = (CFG.serviceAreas || []).map(function (a) {
        return '<li>' + a + '</li>';
      }).join("");
    });

    // FAQs (used on faqs.html and the homepage preview)
    document.querySelectorAll("[data-cfg-list='faqs']").forEach(function (wrap) {
      var limit = parseInt(wrap.getAttribute("data-limit") || "0", 10);
      var items = CFG.faqs || [];
      if (limit) items = items.slice(0, limit);
      wrap.innerHTML = items.map(function (f, i) {
        return (
          '<div class="accordion-item">' +
            '<button class="accordion-trigger" aria-expanded="false">' +
              '<span>' + f.q + '</span><span class="plus" aria-hidden="true"></span>' +
            '</button>' +
            '<div class="accordion-panel"><div class="accordion-panel-inner">' + f.a + '</div></div>' +
          '</div>'
        );
      }).join("");
      bindAccordion(wrap);
    });

    // Popular number combinations
    // Full digit inventory (0-9) grid, e.g. on light-up-numbers.html
    document.querySelectorAll("[data-cfg-list='inventory']").forEach(function (wrap) {
      wrap.innerHTML = (CFG.inventory || []).filter(function (d) { return d.active; }).map(function (d) {
        return (
          '<div class="number-card reveal">' +
            '<div class="digit">' + d.digit + '</div>' +
            '<h3>Number ' + d.digit + '</h3>' +
            '<p>' + (d.available ? "Available to hire on its own or combined." : "Currently unavailable — ask about alternatives.") + '</p>' +
          '</div>'
        );
      }).join("");
      initReveal();
    });

    // Decorative word strip (homepage flexibility statement) — same data as
    // the letters cards, rendered as plain spans instead.
    document.querySelectorAll("[data-cfg-list='letters-strip']").forEach(function (wrap) {
      wrap.innerHTML = (CFG.letters || []).filter(function (w) { return w.active; }).map(function (w) {
        return "<span>" + w.word + "</span>";
      }).join("");
    });

    // Standard illuminated word set, e.g. on light-up-letters.html
    document.querySelectorAll("[data-cfg-list='letters']").forEach(function (wrap) {
      wrap.innerHTML = (CFG.letters || []).filter(function (w) { return w.active; }).map(function (w) {
        return (
          '<div class="number-card reveal">' +
            '<div class="word">' + w.word + '</div>' +
            '<p>' + (w.available ? "Available to enquire about now." : "Currently unavailable — ask about alternatives.") + '</p>' +
          '</div>'
        );
      }).join("");
      initReveal();
    });
    setAll("[data-cfg='letters-custom-note']", CFG.lettersCustomNote);

    // Spec table placeholders
    document.querySelectorAll("[data-cfg='spec-height']").forEach(function (el) { el.textContent = CFG.productSpecs.height; });
    document.querySelectorAll("[data-cfg='spec-width']").forEach(function (el) { el.textContent = CFG.productSpecs.width; });
    document.querySelectorAll("[data-cfg='spec-power']").forEach(function (el) { el.textContent = CFG.productSpecs.power; });
    document.querySelectorAll("[data-cfg='spec-hire']").forEach(function (el) { el.textContent = CFG.productSpecs.hirePeriod; });
    document.querySelectorAll("[data-cfg='spec-indoor']").forEach(function (el) { el.textContent = CFG.productSpecs.indoorOutdoor; });
  }
  function setAll(sel, val) { if (val == null) return; document.querySelectorAll(sel).forEach(function (el) { el.textContent = val; }); }
  function setAllAttr(sel, attr, val) { if (val == null) return; document.querySelectorAll(sel).forEach(function (el) { el.setAttribute(attr, val); }); }

  /* ---------- Nav ---------------------------------------------------------- */
  function initNav() {
    var toggle = document.querySelector(".nav-toggle");
    var mobile = document.querySelector(".nav-mobile");
    if (!toggle || !mobile) return;
    toggle.addEventListener("click", function () {
      var open = mobile.classList.toggle("is-open");
      document.body.classList.toggle("nav-open", open);
      toggle.classList.toggle("is-active", open);
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
      toggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
    });
    mobile.querySelectorAll("a").forEach(function (a) {
      a.addEventListener("click", function () {
        mobile.classList.remove("is-open");
        document.body.classList.remove("nav-open");
      });
    });
  }

  /* ---------- Content visibility ---------------------------------------------
     Scroll-reveal animation was removed for a simpler feel — .reveal content
     is just visible immediately (see style.css). This is kept as a no-op so
     the call sites below don't need to change. */
  function initReveal() {
  }

  /* ---------- Accordion ------------------------------------------------------ */
  function initAccordion() {
    document.querySelectorAll(".accordion").forEach(bindAccordion);
  }
  function bindAccordion(scope) {
    scope.querySelectorAll(".accordion-trigger").forEach(function (btn) {
      if (btn.dataset.bound) return;
      btn.dataset.bound = "1";
      btn.addEventListener("click", function () {
        var item = btn.closest(".accordion-item");
        var panel = item.querySelector(".accordion-panel");
        var isOpen = item.classList.contains("is-open");
        // close siblings within the same accordion
        item.parentElement.querySelectorAll(".accordion-item.is-open").forEach(function (open) {
          if (open !== item) {
            open.classList.remove("is-open");
            open.querySelector(".accordion-panel").style.maxHeight = null;
            open.querySelector(".accordion-trigger").setAttribute("aria-expanded", "false");
          }
        });
        if (isOpen) {
          item.classList.remove("is-open");
          panel.style.maxHeight = null;
          btn.setAttribute("aria-expanded", "false");
        } else {
          item.classList.add("is-open");
          panel.style.maxHeight = panel.scrollHeight + "px";
          btn.setAttribute("aria-expanded", "true");
        }
      });
    });
  }

  /* ---------- Gallery filters -------------------------------------------------- */
  function initGalleryFilters() {
    var filterBar = document.querySelector(".gallery-filters");
    if (!filterBar) return;
    var items = document.querySelectorAll("[data-category]");
    filterBar.querySelectorAll("button").forEach(function (btn) {
      btn.addEventListener("click", function () {
        filterBar.querySelectorAll("button").forEach(function (b) { b.classList.remove("is-active"); });
        btn.classList.add("is-active");
        var cat = btn.getAttribute("data-filter");
        items.forEach(function (item) {
          var show = cat === "all" || item.getAttribute("data-category") === cat;
          item.style.display = show ? "" : "none";
        });
      });
    });
  }

  /* ---------- Lightbox ---------------------------------------------------------- */
  function initLightbox() {
    var lightbox = document.querySelector(".lightbox");
    if (!lightbox) return;
    var inner = lightbox.querySelector(".lightbox-inner");
    document.querySelectorAll(".masonry-item").forEach(function (item) {
      item.addEventListener("click", function () {
        var caption = item.getAttribute("data-caption") || "";
        var media = item.querySelector(".ph-photo") || item.firstElementChild;
        var html = media ? media.outerHTML : "";
        inner.querySelector(".lightbox-photo-slot").innerHTML = html;
        inner.querySelector(".lightbox-caption").textContent = caption;
        lightbox.classList.add("is-open");
        document.body.classList.add("nav-open");
      });
    });
    lightbox.addEventListener("click", function (e) {
      if (e.target === lightbox || e.target.closest(".lightbox-close")) close();
    });
    document.addEventListener("keydown", function (e) { if (e.key === "Escape") close(); });
    function close() {
      lightbox.classList.remove("is-open");
      document.body.classList.remove("nav-open");
    }
  }

  /* ---------- Enquiry form ------------------------------------------------------- */
  function initForm() {
    var form = document.getElementById("enquiry-form");
    if (!form) return;

    // Pre-fill number combination from ?numbers= query param (linked from number cards)
    var params = new URLSearchParams(window.location.search);
    var numbersParam = params.get("numbers");
    if (numbersParam) {
      var numField = form.querySelector("[name='numbers']");
      if (numField) numField.value = numbersParam;
    }
    var typeParam = params.get("type");
    if (typeParam) {
      var typeField = form.querySelector("[name='eventType']");
      if (typeField) typeField.value = typeParam;
    }

    form.addEventListener("submit", function (e) {
      e.preventDefault();
      if (!form.reportValidity()) return;

      var errorNote = document.getElementById("form-error");
      if (errorNote) errorNote.hidden = true;

      var submitBtn = form.querySelector("button[type='submit']");
      if (submitBtn) submitBtn.disabled = true;

      var data = Object.fromEntries(new FormData(form).entries());
      var endpoint = "https://formsubmit.co/ajax/" + encodeURIComponent(CFG.business.email);

      fetch(endpoint, {
        method: "POST",
        headers: { "Accept": "application/json" },
        body: new FormData(form)
      }).then(function (res) {
        if (!res.ok) throw new Error("Form submission failed");
        track("enquiry_submitted", { event_type: data.eventType || "", numbers: data.numbers || "" });
        form.hidden = true;
        var success = document.getElementById("form-success");
        if (success) success.classList.add("is-visible");
        var successHeading = document.getElementById("form-success-heading");
        if (successHeading) successHeading.focus();
      }).catch(function () {
        if (submitBtn) submitBtn.disabled = false;
        if (errorNote) errorNote.hidden = false;
      });
    });
  }

  /* ---------- Sticky CTA visibility ------------------------------------------------
     On the homepage, the hero already has its own "Check Availability" button.
     Hide the fixed sticky bar while that button is on screen so it doesn't sit on
     top of the hero's own buttons on tall/narrow phones. */
  function initStickyCta() {
    var stickyCta = document.querySelector(".sticky-cta");
    var heroActions = document.querySelector(".hero .hero-actions");
    if (!stickyCta || !heroActions || !("IntersectionObserver" in window)) return;
    var observer = new IntersectionObserver(function (entries) {
      stickyCta.classList.toggle("is-hidden", entries[0].isIntersecting);
    });
    observer.observe(heroActions);
  }

  /* ---------- CTA click tracking -------------------------------------------------- */
  function initCtaTracking() {
    document.querySelectorAll("[data-track]").forEach(function (el) {
      el.addEventListener("click", function () { track(el.getAttribute("data-track")); });
    });
    document.querySelectorAll("a[href^='tel:']").forEach(function (el) {
      el.addEventListener("click", function () { track("phone_clicked"); });
    });
    document.querySelectorAll("a[href^='mailto:']").forEach(function (el) {
      el.addEventListener("click", function () { track("email_clicked"); });
    });
    document.querySelectorAll("a[href*='instagram.com']").forEach(function (el) {
      el.addEventListener("click", function () { track("instagram_clicked"); });
    });
  }
})();

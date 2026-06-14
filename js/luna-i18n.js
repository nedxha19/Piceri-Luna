/* ============================================================
   PICERI LUNA — i18n Engine v1
   Supports: sq (Albanian, default) | en (English)
   Usage: data-i18n="key"         → sets textContent
          data-i18n-html="key"    → sets innerHTML (for spans inside headings)
          data-i18n-aria="key"    → sets aria-label
          data-i18n-placeholder="key" → sets placeholder
   ============================================================ */

(function (root) {
  'use strict';

  /* ── Dictionary ─────────────────────────────────────────── */
  var T = {
    sq: {
      /* Accessibility */
      'skip-link':        'Kalo te përmbajtja kryesore',
      'burger-open':      'Hap menunë',
      'burger-close':     'Mbyll menunë',
      'mobile-dialog':    'Menuja e navigimit',

      /* Navigation */
      'nav-home':         'Kryefaqja',
      'nav-menu':         'Menu',
      'nav-hours':        'Oraret',
      'nav-reviews':      'Vlerësimet',
      'nav-contact':      'Kontakt',

      /* Hero */
      'hero-eyebrow':     'Piceri Luna · Shkodër',
      'hero-title':       'Shija e vërtetë e picës, e pjekur me <span>dashuri</span>',
      'hero-desc':        'Brumë i fermentuar natyrshëm, përbërës të freskët çdo ditë dhe 33 receta autentike — nga Margarita te Capolavoro, në katër madhësi.',
      'hero-cta':         'Shiko Menunë',
      'hero-chip-1':      '30 – 45 cm',
      'hero-chip-2':      'Porosi & dërgim',
      'hero-chip-3':      'Furrë tradicionale',
      'hero-float-label': 'Lloje pica në menu',

      /* Trust stats */
      'trust-label-1':    'Lloje pica në menu',
      'trust-label-2':    'Madhësi (30–45 cm)',
      'trust-label-3':    'Përbërës të freskët',
      'trust-label-4':    'Vlerësime nga klientët',

      /* Hours & Locations */
      'hours-eyebrow':    'Oraret & Vendndodhjet',
      'hours-title':      'Kur & Ku Jemi të Hapur',
      'hours-desc':       'Dy degë në Shkodër, hapur çdo ditë. Porosinë tuaj e pranojmë me telefon ose WhatsApp.',
      'hours-schedule-l1': 'Oraret e Luna 1',
      'hours-schedule-l2': 'Oraret e Luna 2',
      'hours-day-mon-sat':'E Hënë – E Shtunë',
      'hours-day-sun':    'E Diel',
      'hours-day-mon-thu':'E Hënë – E Enjte',
      'hours-day-fri-sat':'E Premte – E Shtunë',
      'hours-badge-open': '● Hapur',
      'hours-badge-closed':'● Mbyllur',
      'hours-wa':         'WhatsApp',
      'hours-map':        'Harta',
      'hours-call-l1':    'Telefono Luna 1 Tek Perdet',
      'hours-call-l2':    'Telefono Luna 2 Parrucë',
      'hours-wa-l1':      'Porosit në WhatsApp — Luna 1',
      'hours-wa-l2':      'Porosit në WhatsApp — Luna 2',
      'hours-map-l1':     'Gjej Luna 1 në Google Maps',
      'hours-map-l2':     'Gjej Luna 2 në Google Maps',

      /* Menu section */
      'menu-eyebrow':     'Menuja e Plotë',
      'menu-title':       'Zgjidh Picën & Madhësinë',
      'menu-desc':        '33 lloje pica — rrotullo për madhësinë (22–45 cm) dhe çmimi përditësohet automatikisht.',

      /* CTA band */
      'cta-title':        'Gati për picën e radhës?',
      'cta-text':         'Porosit tani — telefonatë e shpejtë, përgatitje me kujdes dhe dërgim në kohë në Shkodër.',
      'cta-btn':          'Eksploro Menunë',

      /* Testimonials */
      'reviews-eyebrow':  'Çfarë mendojnë klientët për ne',
      'reviews-title':    'Vlerësime reale për shijen, shërbimin dhe eksperiencën Luna',
      'reviews-desc':     'Klientët tanë flasin vetë — lexoni çfarë thonë ata për shijen, shërbimin dhe cilësinë e Piceri Luna.',
      'reviews-score-aria':'Vlerësimi mesatar i klientëve',
      'reviews-stars-aria':'5 yje',
      'reviews-score-sub':'Klientë të kënaqur në Shkodër',
      'reviews-stats-aria':'Pikat më të vlerësuara',
      'reviews-stat-1':   'Lloje picash',
      'reviews-stat-2':   'Madhësi pice',
      'reviews-stat-3':   'Përgatitje me kujdes',

      /* Instagram */
      'insta-eyebrow':    'Na Ndiqni',
      'insta-title':      '@piceriluna në Instagram',
      'insta-follow':     'Ndiq @piceriluna në Instagram',
      'insta-follow-aria':'Ndiq Piceri Luna në Instagram',
      'insta-photo-aria': 'Shiko foton në Instagram @piceriluna',

      /* Footer */
      'footer-tagline':       'Shija e vërtetë e picës, e pjekur me dashuri në Shkodër.',
      'footer-logo-aria':     'Piceri Luna – kryefaqja',
      'footer-insta-btn':     'Ndiq @piceriluna',
      'footer-col-links':     'Linqe',
      'footer-col-fav':       'Të Preferuarat',
      'footer-col-contact':   'Kontakt',
      'footer-link-home':     'Kryefaqja',
      'footer-link-menu':     'Menuja',
      'footer-link-hours':    'Oraret',
      'footer-link-reviews':  'Vlerësimet',
      'footer-link-contact':  'Kontakt',
      'footer-link-viewmenu': 'Shiko Menunë',
      'footer-link-hours2':   'Oraret',
      'footer-copyright':     '© 2026 Piceri Luna, Shkodër — Gojart Hoti. Të gjitha të drejtat e rezervuara.',

      /* WhatsApp FAB */
      'wa-fab-aria':      'Porosit në WhatsApp',
      'wa-fab-trigger-aria':'Hap zgjedhjen e degës për WhatsApp',
      'wa-fab-label':     'Porosit tani',
      'wa-opt1-name':     'Luna 1',
      'wa-opt1-loc':      'Tek Perdet',
      'wa-opt1-aria':     'Porosit nga Luna 1 Tek Perdet në WhatsApp',
      'wa-opt2-name':     'Luna 2',
      'wa-opt2-loc':      'Parrucë',
      'wa-opt2-aria':     'Porosit nga Luna 2 Parrucë në WhatsApp',

      /* Mobile bottom bar */
      'mob-call-1':       'Luna 1',
      'mob-call-2':       'Luna 2',
      'mob-menu-btn':     'Menu',

      /* Language switcher */
      'lang-toggle-aria': 'Ndrysho gjuhën'
    },

    en: {
      /* Accessibility */
      'skip-link':        'Skip to main content',
      'burger-open':      'Open menu',
      'burger-close':     'Close menu',
      'mobile-dialog':    'Navigation menu',

      /* Navigation */
      'nav-home':         'Home',
      'nav-menu':         'Menu',
      'nav-hours':        'Hours',
      'nav-reviews':      'Reviews',
      'nav-contact':      'Contact',

      /* Hero */
      'hero-eyebrow':     'Piceri Luna · Shkodër',
      'hero-title':       'The true taste of pizza, baked with <span>love</span>',
      'hero-desc':        'Naturally fermented dough, fresh ingredients every day and 33 authentic recipes — from Margarita to Capolavoro, in four sizes.',
      'hero-cta':         'View Menu',
      'hero-chip-1':      '30 – 45 cm',
      'hero-chip-2':      'Order & delivery',
      'hero-chip-3':      'Traditional oven',
      'hero-float-label': 'Pizza varieties in menu',

      /* Trust stats */
      'trust-label-1':    'Pizza varieties in menu',
      'trust-label-2':    'Sizes (30–45 cm)',
      'trust-label-3':    '100% fresh ingredients',
      'trust-label-4':    'Customer ratings',

      /* Hours & Locations */
      'hours-eyebrow':    'Hours & Locations',
      'hours-title':      'When & Where We Are Open',
      'hours-desc':       'Two branches in Shkodër, open every day. Place your order by phone or WhatsApp.',
      'hours-schedule-l1':'Luna 1 Hours',
      'hours-schedule-l2':'Luna 2 Hours',
      'hours-day-mon-sat':'Monday – Saturday',
      'hours-day-sun':    'Sunday',
      'hours-day-mon-thu':'Monday – Thursday',
      'hours-day-fri-sat':'Friday – Saturday',
      'hours-badge-open': '● Open',
      'hours-badge-closed':'● Closed',
      'hours-wa':         'WhatsApp',
      'hours-map':        'Map',
      'hours-call-l1':    'Call Luna 1 Tek Perdet',
      'hours-call-l2':    'Call Luna 2 Parrucë',
      'hours-wa-l1':      'Order on WhatsApp — Luna 1',
      'hours-wa-l2':      'Order on WhatsApp — Luna 2',
      'hours-map-l1':     'Find Luna 1 on Google Maps',
      'hours-map-l2':     'Find Luna 2 on Google Maps',

      /* Menu section */
      'menu-eyebrow':     'Full Menu',
      'menu-title':       'Choose Your Pizza & Size',
      'menu-desc':        '33 pizza varieties — scroll to select size (22–45 cm) and the price updates automatically.',

      /* CTA band */
      'cta-title':        'Ready for your next pizza?',
      'cta-text':         'Order now — a quick call, prepared with care and delivered on time in Shkodër.',
      'cta-btn':          'Explore Menu',

      /* Testimonials */
      'reviews-eyebrow':  'What our customers think',
      'reviews-title':    'Real reviews about taste, service and the Luna experience',
      'reviews-desc':     'Our customers speak for themselves — read what they say about the taste, service and quality at Piceri Luna.',
      'reviews-score-aria':'Average customer rating',
      'reviews-stars-aria':'5 stars',
      'reviews-score-sub':'Happy customers in Shkodër',
      'reviews-stats-aria':'Top rated qualities',
      'reviews-stat-1':   'Pizza varieties',
      'reviews-stat-2':   'Pizza sizes',
      'reviews-stat-3':   'Made with care',

      /* Instagram */
      'insta-eyebrow':    'Follow Us',
      'insta-title':      '@piceriluna on Instagram',
      'insta-follow':     'Follow @piceriluna on Instagram',
      'insta-follow-aria':'Follow Piceri Luna on Instagram',
      'insta-photo-aria': 'View photo on Instagram @piceriluna',

      /* Footer */
      'footer-tagline':       'The true taste of pizza, baked with love in Shkodër.',
      'footer-logo-aria':     'Piceri Luna – home',
      'footer-insta-btn':     'Follow @piceriluna',
      'footer-col-links':     'Links',
      'footer-col-fav':       'Favourites',
      'footer-col-contact':   'Contact',
      'footer-link-home':     'Home',
      'footer-link-menu':     'Menu',
      'footer-link-hours':    'Hours',
      'footer-link-reviews':  'Reviews',
      'footer-link-contact':  'Contact',
      'footer-link-viewmenu': 'View Menu',
      'footer-link-hours2':   'Hours',
      'footer-copyright':     '© 2026 Piceri Luna, Shkodër — Gojart Hoti. All rights reserved.',

      /* WhatsApp FAB */
      'wa-fab-aria':      'Order on WhatsApp',
      'wa-fab-trigger-aria':'Open branch selection for WhatsApp',
      'wa-fab-label':     'Order now',
      'wa-opt1-name':     'Luna 1',
      'wa-opt1-loc':      'Tek Perdet',
      'wa-opt1-aria':     'Order from Luna 1 Tek Perdet on WhatsApp',
      'wa-opt2-name':     'Luna 2',
      'wa-opt2-loc':      'Parrucë',
      'wa-opt2-aria':     'Order from Luna 2 Parrucë on WhatsApp',

      /* Mobile bottom bar */
      'mob-call-1':       'Luna 1',
      'mob-call-2':       'Luna 2',
      'mob-menu-btn':     'Menu',

      /* Language switcher */
      'lang-toggle-aria': 'Switch language'
    }
  };

  /* ── Current language ────────────────────────────────────── */
  var LANGS      = ['sq', 'en'];
  var STORE_KEY  = 'luna-lang';
  var currentLang = 'sq';

  function detectLang() {
    try {
      var stored = localStorage.getItem(STORE_KEY);
      if (stored && LANGS.indexOf(stored) !== -1) return stored;
    } catch (e) {}
    var browser = (navigator.language || '').toLowerCase();
    if (browser.indexOf('en') === 0) return 'en';
    return 'sq';
  }

  /* ── Apply language to DOM ───────────────────────────────── */
  function applyLang(lang) {
    if (LANGS.indexOf(lang) === -1) lang = 'sq';
    currentLang = lang;
    var dict = T[lang];

    /* Update <html lang> */
    document.documentElement.lang = lang;

    /* data-i18n → textContent */
    var textEls = document.querySelectorAll('[data-i18n]');
    for (var i = 0; i < textEls.length; i++) {
      var key = textEls[i].getAttribute('data-i18n');
      if (dict[key] !== undefined) {
        textEls[i].textContent = dict[key];
      }
    }

    /* data-i18n-html → innerHTML (for headings containing <span> highlights) */
    var htmlEls = document.querySelectorAll('[data-i18n-html]');
    for (var j = 0; j < htmlEls.length; j++) {
      var hkey = htmlEls[j].getAttribute('data-i18n-html');
      if (dict[hkey] !== undefined) {
        htmlEls[j].innerHTML = dict[hkey];
      }
    }

    /* data-i18n-aria → aria-label */
    var ariaEls = document.querySelectorAll('[data-i18n-aria]');
    for (var k = 0; k < ariaEls.length; k++) {
      var akey = ariaEls[k].getAttribute('data-i18n-aria');
      if (dict[akey] !== undefined) {
        ariaEls[k].setAttribute('aria-label', dict[akey]);
      }
    }

    /* data-i18n-placeholder → placeholder */
    var phEls = document.querySelectorAll('[data-i18n-placeholder]');
    for (var p = 0; p < phEls.length; p++) {
      var pkey = phEls[p].getAttribute('data-i18n-placeholder');
      if (dict[pkey] !== undefined) {
        phEls[p].setAttribute('placeholder', dict[pkey]);
      }
    }

    /* Update open/closed badge text (badges carry state class, not text key) */
    var badges = document.querySelectorAll('[data-i18n-badge]');
    for (var b = 0; b < badges.length; b++) {
      var isClosed = badges[b].classList.contains('luna-oret__badge--closed');
      var bkey = isClosed ? 'hours-badge-closed' : 'hours-badge-open';
      if (dict[bkey] !== undefined) {
        badges[b].textContent = dict[bkey];
      }
    }

    /* Update language toggle button states */
    var toggleBtns = document.querySelectorAll('.luna-lang-btn');
    for (var t = 0; t < toggleBtns.length; t++) {
      var btnLang = toggleBtns[t].getAttribute('data-lang');
      var isActive = (btnLang === lang);
      toggleBtns[t].setAttribute('aria-pressed', isActive ? 'true' : 'false');
      toggleBtns[t].classList.toggle('is-active', isActive);
    }

    /* Persist */
    try { localStorage.setItem(STORE_KEY, lang); } catch (e) {}

    /* Fire a custom event so other scripts can react */
    try {
      document.dispatchEvent(new CustomEvent('luna:langchange', { detail: { lang: lang } }));
    } catch (e) {}
  }

  /* ── Wire toggle buttons ─────────────────────────────────── */
  function initToggles() {
    var btns = document.querySelectorAll('.luna-lang-btn');
    for (var i = 0; i < btns.length; i++) {
      btns[i].addEventListener('click', function () {
        applyLang(this.getAttribute('data-lang'));
      });
    }
  }

  /* ── Public API ──────────────────────────────────────────── */
  root.LunaI18n = {
    t:    function (key) { return T[currentLang][key] || key; },
    lang: function ()    { return currentLang; },
    set:  applyLang
  };

  /* ── Bootstrap ───────────────────────────────────────────── */
  function boot() {
    initToggles();
    applyLang(detectLang());
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', boot);
  } else {
    boot();
  }

}(window));

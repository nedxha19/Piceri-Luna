/**
 * Piceri Luna — Animation Controller v2026
 * Scroll progress · Scroll reveal (.la) · Ripple · Magnetic · Parallax
 *
 * Loaded AFTER all other scripts.
 * Uses only vanilla JS — no jQuery dependency.
 */
(function () {
  'use strict';

  /* ── Scroll progress bar ──────────────────────────────── */
  function initScrollProgress() {
    var bar = document.getElementById('luna-scroll-progress');
    if (!bar) return;

    var ticking = false;

    function update() {
      var scrollTop    = window.pageYOffset || document.documentElement.scrollTop;
      var scrollHeight = document.documentElement.scrollHeight -
                         document.documentElement.clientHeight;
      var progress = scrollHeight > 0 ? scrollTop / scrollHeight : 0;
      bar.style.transform = 'scaleX(' + progress + ')';
      ticking = false;
    }

    window.addEventListener('scroll', function () {
      if (!ticking) {
        requestAnimationFrame(update);
        ticking = true;
      }
    }, { passive: true });

    update();
  }

  /* ── Scroll reveal — .la system ──────────────────────── */
  /*
   * Observes elements with class "la".
   * When they enter the viewport, adds "is-visible".
   * CSS transitions in luna-animations.css do the rest.
   *
   * Threshold 0.12 = trigger when 12% of element is visible.
   * rootMargin -30px bottom = trigger slightly before the element
   * reaches the natural fold so it feels proactive.
   */
  function initScrollReveal() {
    var els = document.querySelectorAll('.la');
    if (!els.length) return;

    /* Fallback: no IntersectionObserver (very old browsers) */
    if (!('IntersectionObserver' in window)) {
      els.forEach(function (el) { el.classList.add('is-visible'); });
      return;
    }

    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -30px 0px' }
    );

    els.forEach(function (el) { observer.observe(el); });
  }

  /* ── Button click ripple ──────────────────────────────── */
  /*
   * On click, injects a .luna-ripple span centered at the
   * pointer position. CSS @keyframes luna-ripple in
   * luna-animations.css animates it; JS removes it after.
   */
  function initRipple() {
    var selectors = [
      '.btn-ct',
      '.ln-cta',
      '.luna-cta__phone',
      '.luna-oret__phone',
      '.luna-oret__wa-btn',
      '.luna-wa-float'
    ].join(', ');

    var buttons = document.querySelectorAll(selectors);
    if (!buttons.length) return;

    buttons.forEach(function (btn) {
      /* Ensure the container is positioned for absolute children */
      var pos = window.getComputedStyle(btn).position;
      if (pos === 'static') btn.style.position = 'relative';

      btn.addEventListener('click', function (e) {
        var rect = this.getBoundingClientRect();
        var x    = e.clientX - rect.left;
        var y    = e.clientY - rect.top;

        var ripple      = document.createElement('span');
        ripple.className = 'luna-ripple';
        ripple.style.left = x + 'px';
        ripple.style.top  = y + 'px';

        this.appendChild(ripple);

        ripple.addEventListener('animationend', function () {
          ripple.remove();
        });
      });
    });
  }

  /* ── Magnetic primary buttons (desktop only) ─────────── */
  /*
   * On mousemove: button nudges toward the cursor (max ±10px).
   * On mouseleave: spring-snaps back to rest position.
   *
   * Math: offset = distance_from_center * strength
   * strength = 0.30 → max pull ~10px at center (32px button half-height)
   *
   * Only active on pointer:fine devices (mouse, stylus) to
   * avoid accidental magnetic on touch screens.
   */
  function initMagneticButtons() {
    if (!window.matchMedia('(pointer: fine)').matches) return;
    if (window.innerWidth < 992) return;

    var MAX_PULL = 10; /* pixels */
    var STRENGTH = 0.30;

    var buttons = document.querySelectorAll('.btn-ct.btn-large, .ln-cta');
    if (!buttons.length) return;

    buttons.forEach(function (btn) {
      btn.addEventListener('mousemove', function (e) {
        var rect = this.getBoundingClientRect();
        var cx   = rect.left + rect.width  / 2;
        var cy   = rect.top  + rect.height / 2;
        var dx   = Math.max(-MAX_PULL, Math.min(MAX_PULL, (e.clientX - cx) * STRENGTH));
        var dy   = Math.max(-MAX_PULL, Math.min(MAX_PULL, (e.clientY - cy) * STRENGTH));

        /* Combine magnetic offset with the hover lift (-2px) */
        this.classList.remove('luna-mag-snap');
        this.style.transform = 'translate(' + dx + 'px, ' + (dy - 2) + 'px)';
      });

      btn.addEventListener('mouseleave', function () {
        /* Add snap class for spring return, clear inline style */
        this.classList.add('luna-mag-snap');
        this.style.transform = '';

        var self = this;
        setTimeout(function () {
          self.classList.remove('luna-mag-snap');
        }, 500);
      });
    });
  }

  /* ── Hero orb soft parallax ──────────────────────────── */
  /*
   * As the user scrolls down past the hero, the two background
   * orbs drift at different rates, creating a layered depth.
   *
   * orb-1 (top-right): moves up + right (away from scroll direction)
   * orb-2 (bottom-left): moves down + left
   *
   * Max travel: ±40px at hero bottom.
   * Uses requestAnimationFrame for 60 fps smoothness.
   *
   * NOTE: This OVERRIDES any CSS animation translate on orbs.
   * We set style.transform directly, which wins over @keyframes.
   * The CSS animations (luna-orb-a/b) are removed from these
   * elements when this function successfully initialises,
   * to avoid conflicting animations.
   */
  function initOrbParallax() {
    var orb1 = document.querySelector('.luna-hero__orb--1');
    var orb2 = document.querySelector('.luna-hero__orb--2');
    var hero = document.querySelector('.luna-hero');
    if (!orb1 || !orb2 || !hero) return;

    /* Remove the ambient CSS drift so parallax is sole controller */
    orb1.style.animation = 'none';
    orb2.style.animation = 'none';

    var ticking = false;

    function update() {
      var scrollY     = window.pageYOffset;
      var heroH       = hero.offsetHeight;
      if (heroH === 0) { ticking = false; return; }

      var progress = Math.min(scrollY / heroH, 1); /* 0–1 */

      /* Orb 1 drifts right and up as we scroll */
      var ox1 =  progress * 36;
      var oy1 = -progress * 44;
      orb1.style.transform = 'translate(' + ox1 + 'px, ' + oy1 + 'px)';

      /* Orb 2 drifts left and down */
      var ox2 = -progress * 24;
      var oy2 =  progress * 32;
      orb2.style.transform = 'translate(' + ox2 + 'px, ' + oy2 + 'px)';

      ticking = false;
    }

    window.addEventListener('scroll', function () {
      if (!ticking) {
        requestAnimationFrame(update);
        ticking = true;
      }
    }, { passive: true });

    /* Run once on init so the orbs are in correct start position */
    update();
  }

  /* ── Stagger .la children automatically ─────────────────
   *
   * When a parent has data-la-stagger, its direct .la children
   * get --d1, --d2 … delays applied automatically.
   * No manual HTML class needed on each child.
   *
   * Usage: <div data-la-stagger> <div class="la la--up"> ...
   */
  function initAutoStagger() {
    var groups = document.querySelectorAll('[data-la-stagger]');
    groups.forEach(function (group) {
      var children = group.querySelectorAll(':scope > .la');
      children.forEach(function (child, i) {
        /* Max 8 stagger levels, then repeat */
        var level = (i % 8) + 1;
        child.classList.add('la--d' + level);
      });
    });
  }

  /* ── Init on DOM ready ───────────────────────────────── */
  function init() {
    initScrollProgress();
    initScrollReveal();
    initRipple();
    initMagneticButtons();
    initOrbParallax();
    initAutoStagger();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

}());

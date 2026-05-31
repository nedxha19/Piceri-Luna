(function () {
    'use strict';

    /* ── Elements ─────────────────────────────────────────────── */
    const header = document.getElementById('ln-header');
    const burger = document.getElementById('ln-burger');
    const mobileMenu = document.getElementById('ln-mobile-menu');
    const backdrop = document.getElementById('ln-backdrop');

    /* NEW: close button inside mobile sidebar */
    const mobileClose = document.getElementById('ln-mobile-close');

    const indicator = header && header.querySelector('.ln-nav__indicator');
    const desktopLinks = header
        ? Array.from(header.querySelectorAll('.ln-nav__link'))
        : [];
    const allNavLinks = header
        ? Array.from(header.querySelectorAll('[data-ln-nav]'))
        : [];

    if (!header) return; // guard

    /* ── Scroll: glass + compact ──────────────────────────────── */
    const SCROLL_THRESHOLD = 32;

    function onScroll() {
        const scrolled = window.scrollY > SCROLL_THRESHOLD;
        header.classList.toggle('is-scrolled', scrolled);
    }

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll(); // run once on load

    /* ── Active link via IntersectionObserver ─────────────────── */
    const sectionIds = allNavLinks
        .map(a => a.getAttribute('href'))
        .filter(h => h && h.startsWith('#'))
        .map(h => h.slice(1));

    const sectionMap = new Map(); // id → all matching nav links

    sectionIds.forEach(id => {
        const links = allNavLinks.filter(
            a => a.getAttribute('href') === '#' + id
        );
        if (links.length) sectionMap.set(id, links);
    });

    let activeId = null;

    const sectionEls = sectionIds
        .map(id => document.getElementById(id))
        .filter(Boolean);

    const observer = new IntersectionObserver(
        entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setActive(entry.target.id);
                }
            });
        },
        { rootMargin: '-20% 0px -60% 0px', threshold: 0 }
    );

    sectionEls.forEach(el => observer.observe(el));

    function setActive(id) {
        if (id === activeId) return;
        activeId = id;

        allNavLinks.forEach(a => a.classList.remove('is-active'));

        const matched = sectionMap.get(id);
        if (matched) matched.forEach(a => a.classList.add('is-active'));

        // move the indicator to the active desktop link
        moveIndicator(id);
    }

    /* ── Animated underline indicator ────────────────────────── */
    function moveIndicator(id) {
        if (!indicator) return;

        const activeLink = desktopLinks.find(
            a => a.getAttribute('href') === '#' + id
        );

        if (!activeLink) {
            indicator.classList.remove('is-visible');
            return;
        }

        const navRect = header.querySelector('.ln-nav').getBoundingClientRect();
        const linkRect = activeLink.getBoundingClientRect();

        indicator.style.left = (linkRect.left - navRect.left) + 'px';
        indicator.style.width = linkRect.width + 'px';
        indicator.classList.add('is-visible');
    }

    // also move indicator on desktop link hover
    desktopLinks.forEach(link => {
        link.addEventListener('mouseenter', () => {
            if (!indicator) return;
            const navRect = header.querySelector('.ln-nav').getBoundingClientRect();
            const linkRect = link.getBoundingClientRect();
            indicator.style.left = (linkRect.left - navRect.left) + 'px';
            indicator.style.width = linkRect.width + 'px';
            indicator.classList.add('is-visible');
        });

        link.addEventListener('mouseleave', () => {
            // revert to active section indicator
            if (activeId) moveIndicator(activeId);
            else indicator && indicator.classList.remove('is-visible');
        });
    });

    /* ── Mobile menu open/close ───────────────────────────────── */
    function openMenu() {
        mobileMenu.removeAttribute('hidden');

        // let the browser paint the `hidden` removal before adding class
        requestAnimationFrame(() => {
            requestAnimationFrame(() => {
                mobileMenu.classList.add('is-open');
                backdrop.classList.add('is-visible');
                burger.setAttribute('aria-expanded', 'true');
                burger.setAttribute('aria-label', 'Mbyll menunë');
                document.body.style.overflow = 'hidden';

                // focus first link for accessibility
                const firstLink = mobileMenu.querySelector('.ln-mobile__link');
                if (firstLink) firstLink.focus();
            });
        });
    }

    function closeMenu() {
        mobileMenu.classList.remove('is-open');
        backdrop.classList.remove('is-visible');
        burger.setAttribute('aria-expanded', 'false');
        burger.setAttribute('aria-label', 'Hap menunë');
        document.body.style.overflow = '';

        // re-add hidden after transition ends (350ms)
        setTimeout(() => {
            if (!mobileMenu.classList.contains('is-open')) {
                mobileMenu.setAttribute('hidden', '');
            }
        }, 360);

        burger.focus(); // return focus
    }

    burger.addEventListener('click', () => {
        const isOpen = burger.getAttribute('aria-expanded') === 'true';
        isOpen ? closeMenu() : openMenu();
    });

    backdrop.addEventListener('click', closeMenu);

    /* NEW: close mobile sidebar when X button is clicked */
    if (mobileClose) {
        mobileClose.addEventListener('click', closeMenu);
    }

    // close on nav link click (mobile)
    mobileMenu.querySelectorAll('.ln-mobile__link').forEach(link => {
        link.addEventListener('click', () => {
            closeMenu();
        });
    });

    // close on Escape
    document.addEventListener('keydown', e => {
        if (e.key === 'Escape' && burger.getAttribute('aria-expanded') === 'true') {
            closeMenu();
        }
    });

    /* ── Focus trap inside mobile menu ───────────────────────── */
    mobileMenu.addEventListener('keydown', e => {
        if (e.key !== 'Tab') return;

        const focusable = Array.from(
            mobileMenu.querySelectorAll(
                'a, button, input, [tabindex]:not([tabindex="-1"])'
            )
        ).filter(el => !el.disabled && el.offsetParent !== null);

        const first = focusable[0];
        const last = focusable[focusable.length - 1];

        if (e.shiftKey && document.activeElement === first) {
            e.preventDefault();
            last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
            e.preventDefault();
            first.focus();
        }
    });

    /* ── Resize: close mobile if viewport goes wide ──────────── */
    window.addEventListener('resize', () => {
        if (
            window.innerWidth > 900 &&
            burger.getAttribute('aria-expanded') === 'true'
        ) {
            closeMenu();
        }

        // recalculate indicator on resize
        if (activeId) moveIndicator(activeId);
    });

})();
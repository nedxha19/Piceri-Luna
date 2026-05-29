/**
 * Piceri Luna — Homepage interactions
 */
(function ($) {
	'use strict';

	var HEADER_OFFSET = 96;

	function initReveal() {
		var els = document.querySelectorAll('.luna-reveal');
		if (!els.length) return;

		if (!('IntersectionObserver' in window)) {
			els.forEach(function (el) {
				el.classList.add('is-visible');
			});
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
			{ threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
		);

		els.forEach(function (el) {
			observer.observe(el);
		});
	}

	function initCounters() {
		var items = document.querySelectorAll('[data-luna-count]');
		if (!items.length) return;

		var runCounter = function (el) {
			var target = parseInt(el.getAttribute('data-luna-count'), 10);
			var suffix = el.getAttribute('data-luna-suffix') || '';
			if (isNaN(target)) return;

			var duration = 1200;
			var start = 0;
			var startTime = null;

			function step(ts) {
				if (!startTime) startTime = ts;
				var progress = Math.min((ts - startTime) / duration, 1);
				var eased = 1 - Math.pow(1 - progress, 3);
				var current = Math.round(start + (target - start) * eased);
				el.textContent = current + suffix;
				if (progress < 1) requestAnimationFrame(step);
			}

			requestAnimationFrame(step);
		};

		var counterObserver = new IntersectionObserver(
			function (entries) {
				entries.forEach(function (entry) {
					if (entry.isIntersecting) {
						runCounter(entry.target);
						counterObserver.unobserve(entry.target);
					}
				});
			},
			{ threshold: 0.5 }
		);

		items.forEach(function (el) {
			counterObserver.observe(el);
		});
	}

	function initSteps() {
		var steps = document.querySelectorAll('.luna-step');
		if (!steps.length) return;

		steps.forEach(function (step) {
			step.addEventListener('mouseenter', function () {
				steps.forEach(function (s) {
					s.classList.remove('is-active');
				});
				step.classList.add('is-active');
			});
		});
	}

	function closeMobileMenu() {
		if ($(window).width() < 1200) {
			$('.menu').slideUp(200);
		}
	}

	function scrollToSection(hash) {
		var $target = $(hash);
		if (!$target.length) return;
		$('html, body').animate(
			{ scrollTop: $target.offset().top - HEADER_OFFSET },
			650
		);
	}

	function initSmoothAnchors() {
		$(document).on('click', 'a[href^="#luna-"]', function (e) {
			var href = $(this).attr('href');
			if (href.length < 2) return;
			var $target = $(href);
			if ($target.length) {
				e.preventDefault();
				scrollToSection(href);
				closeMobileMenu();
			}
		});
	}

	function initNavSpy() {
		var $links = $('.luna-nav__link');
		var sections = [];

		$links.each(function () {
			var id = $(this).attr('href');
			var el = document.querySelector(id);
			if (el) sections.push({ id: id, el: el });
		});

		if (!sections.length) return;

		function setActive(id) {
			$links.removeClass('is-active');
			$('.luna-nav__link[href="' + id + '"]').addClass('is-active');
			$('.luna-nav > li').removeClass('active');
			$('.luna-nav__link[href="' + id + '"]').closest('li').addClass('active');
		}

		function onScroll() {
			var scrollY = window.pageYOffset + HEADER_OFFSET + 40;
			var current = sections[0].id;

			for (var i = 0; i < sections.length; i++) {
				if (sections[i].el.offsetTop <= scrollY) {
					current = sections[i].id;
				}
			}

			setActive(current);
		}

		$(window).on('scroll.lunaNav', onScroll);
		onScroll();
	}

	$(document).ready(function () {
		initReveal();
		initCounters();
		initSteps();
		initSmoothAnchors();
		initNavSpy();
	});
})(jQuery);

(function ($) {
	'use strict';

	var DEFAULT_SIZE_KEY = 'normale';

	function escapeHtml(str) {
		var div = document.createElement('div');
		div.textContent = str || '';
		return div.innerHTML;
	}

	function formatPrice(n) {
		return Number(n).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
	}

	function buildPickerHtml(prices, pizzaId) {
		var labelId = 'luna-picker-label-' + pizzaId;
		var options = '';

		LUNA_PIZZA_SIZES.forEach(function (size) {
			options +=
				'<button type="button" class="luna-picker__option" data-size-key="' + size.key + '" data-cm="' + size.cm + '">' +
				'<span class="luna-picker__option-name">' + escapeHtml(size.label) + '</span>' +
				'<span class="luna-picker__option-size">' + size.cm + ' cm</span>' +
				'</button>';
		});

		return (
			'<div class="luna-card__picker luna-size-picker" data-prices=\'' + JSON.stringify(prices) + '\'>' +
			'<p class="luna-card__picker-label" id="' + labelId + '">Madhësia</p>' +
			'<div class="luna-picker" role="group" aria-labelledby="' + labelId + '">' +
			'<div class="luna-picker__window">' +
			'<div class="luna-picker__selection" aria-hidden="true"></div>' +
			'<div class="luna-picker__shade luna-picker__shade--top" aria-hidden="true"></div>' +
			'<div class="luna-picker__shade luna-picker__shade--bottom" aria-hidden="true"></div>' +
			'<div class="luna-picker__list" tabindex="0">' + options + '</div>' +
			'</div>' +
			'</div>' +
			'</div>'
		);
	}

	function buildCard(pizza, index) {
		var defaultPrice = pizza.prices[DEFAULT_SIZE_KEY];
		var badge = index < 3 ? '<span class="luna-card__badge">E preferuar</span>' : '';

		return (
			'<article class="luna-card" data-pizza-id="' + escapeHtml(pizza.id) + '">' +
			'<div class="luna-card__surface">' +

			'<figure class="luna-card__visual">' +
			badge +
			'<div class="luna-card__image-box">' +
			'<a href="shop-detail.html" class="luna-card__image-link" tabindex="-1">' +
			'<img class="luna-card__image" src="' + escapeHtml(pizza.image) + '" alt="' + escapeHtml(pizza.name) + '" width="280" height="280" loading="lazy">' +
			'</a>' +
			'</div>' +
			'</figure>' +

			'<div class="luna-card__details">' +
			'<div class="luna-card__meta">' +
			'<h3 class="luna-card__name"><a href="shop-detail.html">' + escapeHtml(pizza.name) + '</a></h3>' +

			'<div class="luna-card__price" data-luna-price data-selected-size="' + DEFAULT_SIZE_KEY + '" data-selected-price="' + defaultPrice + '">' +
			'<span class="luna-card__price-value">' + formatPrice(defaultPrice) + '</span>' +
			'<span class="luna-card__price-unit">ALL</span>' +
			'</div>' +
			'</div>' +

			'<p class="luna-card__ingredients">' + escapeHtml(pizza.ingredients) + '</p>' +
			'</div>' +

			buildPickerHtml(pizza.prices, pizza.id) +

			'</div>' +
			'</article>'
		);
	}

	function renderMenu() {
		var $carousel = $('#luna-pizza-carousel');

		if (!$carousel.length) return;

		if (typeof LUNA_PIZZA_MENU === 'undefined') {
			console.error('LUNA_PIZZA_MENU is not defined. Check js/luna-menu-data.js.');
			return;
		}

		if (typeof LUNA_PIZZA_SIZES === 'undefined') {
			console.error('LUNA_PIZZA_SIZES is not defined. Check js/luna-menu-data.js.');
			return;
		}

		var html = '';

		LUNA_PIZZA_MENU.forEach(function (pizza, i) {
			html += buildCard(pizza, i);
		});

		$carousel.html(html);
	}

	function initCarousel() {
		var $slider = $('#luna-pizza-carousel');

		if (!$slider.length || !$slider.children().length) return;

		var currentMode = null;
		var resizeTimer = null;

		function cleanOwlMarkup() {
			/*
				Safely remove Owl wrappers if Owl was already initialized.
				This restores direct children:
				#luna-pizza-carousel > .luna-card
			*/
			$slider.find('.owl-nav, .owl-dots').remove();

			if ($slider.find('.owl-stage-outer').length) {
				$slider.find('.owl-stage-outer').children().unwrap();
			}

			if ($slider.find('.owl-stage').length) {
				$slider.find('.owl-stage').children().unwrap();
			}

			if ($slider.find('.owl-item').length) {
				$slider.find('.owl-item').children().unwrap();
			}

			$slider.children('.luna-card').removeAttr('style');
		}

		function destroyOwlIfNeeded() {
			if ($slider.hasClass('owl-loaded') && typeof $.fn.owlCarousel !== 'undefined') {
				$slider.trigger('destroy.owl.carousel');
			}

			cleanOwlMarkup();

			$slider.removeClass(
				'owl-carousel owl-loaded owl-hidden owl-drag owl-grab owl-rtl owl-loading owl-refresh'
			);
		}

		function setupMobileNativeScroll() {
			destroyOwlIfNeeded();

			$slider
				.addClass('luna-pizza-scroll')
				.attr({
					tabindex: '0',
					role: 'list',
					'aria-label': 'Lista e picave'
				});

			$slider.children('.luna-card').attr('role', 'listitem');
		}

		function setupDesktopOwl() {
			if (typeof $.fn.owlCarousel === 'undefined') {
				console.error('Owl Carousel is not loaded. Check js/owl.carousel.min.js.');
				return;
			}

			destroyOwlIfNeeded();

			$slider
				.removeClass('luna-pizza-scroll')
				.addClass('owl-carousel menu-slider')
				.removeAttr('tabindex role aria-label');

			$slider.children('.luna-card').removeAttr('role');

			$slider.owlCarousel({
				loop: true,
				nav: true,
				dots: false,
				autoplay: false,

				items: 4,
				margin: 24,

				smartSpeed: 700,
				fluidSpeed: 700,
				dragEndSpeed: 500,

				mouseDrag: true,
				touchDrag: true,
				pullDrag: true,
				freeDrag: false,

				autoHeight: false,
				autoWidth: false,
				rewind: false,

				navText: [
					'<span aria-hidden="true">‹</span>',
					'<span aria-hidden="true">›</span>'
				],

				responsive: {
					768: {
						items: 2,
						margin: 22,
						stagePadding: 18,
						nav: true,
						dots: false
					},
					992: {
						items: 3,
						margin: 22,
						stagePadding: 0,
						nav: true,
						dots: false
					},
					1300: {
						items: 4,
						margin: 24,
						stagePadding: 0,
						nav: true,
						dots: false
					}
				}
			});
		}

		function applyMode() {
			var isMobile = window.matchMedia('(max-width: 767px)').matches;
			var nextMode = isMobile ? 'mobile' : 'desktop';

			if (currentMode === nextMode) return;

			currentMode = nextMode;

			if (isMobile) {
				setupMobileNativeScroll();
			} else {
				setupDesktopOwl();
			}
		}

		applyMode();

		$(window)
			.off('resize.lunaPizzaMode')
			.on('resize.lunaPizzaMode', function () {
				clearTimeout(resizeTimer);
				resizeTimer = setTimeout(applyMode, 160);
			});
	}

	function mountSizePickers() {
		if (typeof LunaSizePicker !== 'undefined' && typeof LunaSizePicker.mountAll === 'function') {
			LunaSizePicker.mountAll('.luna-size-picker');
		} else {
			console.error('LunaSizePicker is not loaded. Check js/luna-size-picker.js.');
		}
	}

	function getPickerPrices($picker) {
		var prices = $picker.data('prices');

		if (prices && typeof prices === 'object') {
			return prices;
		}

		try {
			return JSON.parse($picker.attr('data-prices'));
		} catch (e) {
			return null;
		}
	}

	function forceDefaultNormalSize() {
		$('.luna-card').each(function () {
			var $card = $(this);
			var $picker = $card.find('.luna-size-picker');
			var $price = $card.find('[data-luna-price]');
			var prices = getPickerPrices($picker);

			if (!prices || typeof prices[DEFAULT_SIZE_KEY] === 'undefined') return;

			var normalPrice = prices[DEFAULT_SIZE_KEY];

			$price.attr('data-selected-size', DEFAULT_SIZE_KEY);
			$price.attr('data-selected-price', normalPrice);
			$price.find('.luna-card__price-value').text(formatPrice(normalPrice));

			$picker.find('.luna-picker__option').removeClass('is-active');
			$picker.find('.luna-picker__option[data-size-key="' + DEFAULT_SIZE_KEY + '"]').addClass('is-active');

			var list = $picker.find('.luna-picker__list').get(0);
			var normalButton = $picker.find('.luna-picker__option[data-size-key="' + DEFAULT_SIZE_KEY + '"]').get(0);

			if (list && normalButton) {
				list.scrollTop =
					normalButton.offsetTop -
					(list.clientHeight / 2) +
					(normalButton.clientHeight / 2);
			}
		});
	}

	$(document).ready(function () {
		renderMenu();

		/*
		 * Order matters:
		 * 1. Render cards
		 * 2. Init carousel
		 * 3. Mount size pickers
		 * 4. Force default size to Normale 30 cm
		 */
		initCarousel();

		setTimeout(function () {
			mountSizePickers();
			forceDefaultNormalSize();
		}, 80);

		setTimeout(function () {
			forceDefaultNormalSize();
		}, 250);

		setTimeout(function () {
			forceDefaultNormalSize();
		}, 600);
	});

})(jQuery);
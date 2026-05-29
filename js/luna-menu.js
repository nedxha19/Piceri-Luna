/**
 * Piceri Luna — menu cards (structure + carousel)
 */
(function ($) {
	'use strict';

	var DEFAULT_SIZE_KEY = 'normale';

	function escapeHtml(str) {
		var div = document.createElement('div');
		div.textContent = str;
		return div.innerHTML;
	}

	function formatPrice(n) {
		return n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
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
			'<article class="luna-card" data-pizza-id="' + pizza.id + '">' +
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
		if (!$carousel.length || typeof LUNA_PIZZA_MENU === 'undefined') return;

		var html = '';
		LUNA_PIZZA_MENU.forEach(function (pizza, i) {
			html += buildCard(pizza, i);
		});
		$carousel.html(html);
	}

	function initCarousel() {
		var $slider = $('#luna-pizza-carousel');
		if (!$slider.length || !$slider.children().length) return;

		if ($slider.hasClass('owl-loaded')) {
			$slider.trigger('destroy.owl.carousel');
			$slider.removeClass('owl-loaded owl-hidden');
		}

		$slider.owlCarousel({
			loop: true,
			nav: true,
			dots: false,
			items: 4,
			margin: 24,
			smartSpeed: 700,
			responsive: {
				0: { items: 1, nav: false, dots: true, margin: 16 },
				600: { items: 2, nav: false, dots: true, margin: 20 },
				768: { items: 2, margin: 22 },
				992: { items: 3, margin: 22 },
				1300: { items: 4, margin: 24 }
			}
		});
	}

	$(document).ready(function () {
		renderMenu();
		if (typeof LunaSizePicker !== 'undefined') {
			LunaSizePicker.mountAll('.luna-size-picker');
		}
		initCarousel();
	});
})(jQuery);

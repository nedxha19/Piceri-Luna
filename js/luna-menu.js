/**
 * Piceri Luna — menu cards, size picker + native pizza-card scrolling
 * Default opening size: Normale 30 cm
 *
 * Important:
 * This version does NOT use Owl Carousel for pizza cards.
 * It renders the pizza cards normally, then CSS handles smooth horizontal scrolling.
 */
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

		/*
			Native pizza-card scrolling method.

			Reason:
			Owl Carousel makes mobile dragging feel heavy and inconsistent
			when cards contain buttons, images, links, and a vertical size picker.

			This method keeps the dynamically generated pizza cards,
			but removes Owl Carousel behavior and lets CSS create real
			mobile horizontal scrolling with scroll-snap.
		*/

		if ($slider.hasClass('owl-loaded') && typeof $.fn.owlCarousel !== 'undefined') {
			$slider.trigger('destroy.owl.carousel');
		}

		$slider
			.removeClass('owl-carousel owl-loaded owl-hidden owl-drag owl-grab')
			.addClass('luna-pizza-scroll');

		/*
			Clean possible Owl Carousel wrappers if they already exist.
			This makes the function safe even if another script initialized Owl before.
		*/
		$slider.find('.owl-stage-outer').children().unwrap();
		$slider.find('.owl-stage').children().unwrap();
		$slider.find('.owl-item').children().unwrap();
		$slider.find('.owl-nav, .owl-dots').remove();

		/*
			Accessibility:
			The horizontal pizza row can be focused with keyboard.
		*/
		$slider.attr({
			tabindex: '0',
			role: 'list',
			'aria-label': 'Lista e picave'
		});

		$slider.children('.luna-card').attr('role', 'listitem');
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
			Important order:
			1. Render all pizza cards from luna-menu-data.js.
			2. Convert the pizza area into a native horizontal scroll row.
			3. Mount the vertical size picker.
			4. Force default size to Normale 30 cm.
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
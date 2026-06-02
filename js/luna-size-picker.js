/**
 * Apple-style size wheel — dimensions driven by CSS (--luna-wheel-item)
 *
 * Math: viewport = 3 × itemHeight, padding = itemHeight, scrollTop = index × itemHeight
 */
(function (global) {
	'use strict';

	var DEFAULT_INDEX = 1; /* Normale 30 cm */

	function formatPrice(n) {
		return n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
	}

	function LunaSizePicker(root) {
		this.root = root;
		this.list = root.querySelector('.luna-picker__list');
		this.options = Array.prototype.slice.call(root.querySelectorAll('.luna-picker__option'));
		this.card = root.closest('.luna-card');
		this.priceEl = this.card ? this.card.querySelector('[data-luna-price]') : null;
		this.prices = JSON.parse(root.getAttribute('data-prices'));
		this.itemHeight = 0;
		this.selectedIndex = DEFAULT_INDEX;
		this.scrollTimer = null;
		this._raf = null;
		this._measure();
		this._bind();
		this._snapTo(DEFAULT_INDEX, false);
		this._updateVisuals();
	}

	LunaSizePicker.prototype._measure = function () {
		if (!this.options.length) return;
		this.itemHeight = this.options[0].offsetHeight;
		if (!this.itemHeight) {
			this.itemHeight = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--luna-wheel-item'), 10) || 44;
		}
	};

	LunaSizePicker.prototype._bind = function () {
		var self = this;

		this.list.addEventListener('scroll', function () {
			if (self._raf) cancelAnimationFrame(self._raf);
			self._raf = requestAnimationFrame(function () {
				self._onScroll();
			});
		}, { passive: true });

		this.list.addEventListener('wheel', function (e) {
			e.stopPropagation();
		}, { passive: true });

		this.list.addEventListener('scrollend', function () {
			self._snapNearest();
		});

		this.list.addEventListener('touchend', function () {
			clearTimeout(self.scrollTimer);
			self.scrollTimer = setTimeout(function () {
				self._snapNearest();
			}, 90);
		});

		this.list.addEventListener('mouseup', function () {
			clearTimeout(self.scrollTimer);
			self.scrollTimer = setTimeout(function () {
				self._snapNearest();
			}, 90);
		});

		this.options.forEach(function (opt, index) {
			opt.addEventListener('click', function () {
				self._snapTo(index, true);
			});
		});

		window.addEventListener('resize', function () {
			self._measure();
			self._snapTo(self.selectedIndex, false);
		});
	};

	LunaSizePicker.prototype._onScroll = function () {
		this._updateVisuals();
		var index = this._indexFromScroll();
		if (index !== this.selectedIndex) {
			this.selectedIndex = index;
			this._updatePrice();
		}
	};

	LunaSizePicker.prototype._indexFromScroll = function () {
		var h = this.itemHeight;
		if (!h) return 0;
		var index = Math.round(this.list.scrollTop / h);
		return Math.max(0, Math.min(this.options.length - 1, index));
	};

	LunaSizePicker.prototype._snapNearest = function () {
		this._snapTo(this._indexFromScroll(), true);
	};

	LunaSizePicker.prototype._snapTo = function (index, smooth) {
		var h = this.itemHeight;
		if (!h) return;

		index = Math.max(0, Math.min(this.options.length - 1, index));
		this.list.scrollTo({
			top: index * h,
			behavior: smooth ? 'smooth' : 'auto'
		});
		this.selectedIndex = index;
		this._updateVisuals();
		this._updatePrice();
	};

	LunaSizePicker.prototype._updateVisuals = function () {
		var scrollTop = this.list.scrollTop;
		var h = this.itemHeight || 1;

		this.options.forEach(function (opt, i) {
			var dist = Math.abs(scrollTop - i * h) / h;
			var scale = Math.max(0.84, 1 - dist * 0.1);
			var opacity = Math.max(0.32, 1 - dist * 0.36);
			opt.style.transform = 'scale(' + scale + ')';
			opt.style.opacity = String(opacity);
			opt.classList.toggle('is-active', dist < 0.35);
		});
	};

	LunaSizePicker.prototype._updatePrice = function () {
		if (!this.priceEl) return;
		var key = this.options[this.selectedIndex].getAttribute('data-size-key');
		var price = this.prices[key];
		var display = this.priceEl.querySelector('.luna-card__price-value');
		if (display) {
			display.textContent = formatPrice(price);
			display.classList.remove('luna-card__price-value--tick');
			void display.offsetWidth;
			display.classList.add('luna-card__price-value--tick');
		}
		this.priceEl.setAttribute('data-selected-size', key);
		this.priceEl.setAttribute('data-selected-price', price);
	};

	LunaSizePicker.mountAll = function (selector) {
		var nodes = document.querySelectorAll(selector || '.luna-size-picker');
		var instances = [];
		nodes.forEach(function (node) {
			instances.push(new LunaSizePicker(node));
		});
		return instances;
	};

	global.LunaSizePicker = LunaSizePicker;
})(typeof window !== 'undefined' ? window : this);

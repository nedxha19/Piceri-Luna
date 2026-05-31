
var LUNA_DEFAULT_PIZZA_IMAGE = 'Piceri Luna/undefined-.webp';

var LUNA_PIZZA_SIZES = [
	{ key: 'normale', label: 'Normale', cm: 30 },
	{ key: 'big', label: 'Big', cm: 35 },
	{ key: 'extra', label: 'Extra', cm: 45 }
];

var LUNA_PIZZA_MENU = [
	{ id: 'vegjetariane', name: 'Vegjetariane', ingredients: 'Salcë luna, mozzarella, gouda, djathë i bardhë, ullinj, speca, patëllxhanë', prices: { normale: 600, big: 900, extra: 1300 }, image: LUNA_DEFAULT_PIZZA_IMAGE },
	{ id: 'diavolo', name: 'Diavolo', ingredients: 'Salcë luna, mozzarella, gouda, sallam, suxhuk, speca, domate, speca djegës', prices: { normale: 650, big: 900, extra: 1300 }, image: LUNA_DEFAULT_PIZZA_IMAGE },
	{ id: 'kapricoze', name: 'Kapriçoze', ingredients: 'Salcë luna, mozzarella, gouda, ullinj, kërpudha, proshutë, sallam', prices: { normale: 650, big: 950, extra: 1250 }, image: LUNA_DEFAULT_PIZZA_IMAGE },
	{ id: 'miks-sallamesh-dhe-proshutash', name: 'Miks Sallamesh Dhe Proshutash', ingredients: 'Salcë luna, mozzarella, gouda, miks sallamesh dhe proshutash', prices: { normale: 900, big: 1400, extra: 1600 }, image: LUNA_DEFAULT_PIZZA_IMAGE },
	{ id: 'proshute', name: 'Proshutë', ingredients: 'Salcë luna, mozzarella, gouda, proshutë viçi', prices: { normale: 600, big: 850, extra: 1250 }, image: LUNA_DEFAULT_PIZZA_IMAGE },
	{ id: 'proshute-kerpudha', name: 'Proshutë & Kërpudha', ingredients: 'Salcë luna, mozzarella, gouda, proshutë viçi, kërpudha', prices: { normale: 650, big: 900, extra: 1300 }, image: LUNA_DEFAULT_PIZZA_IMAGE },
	{ id: 'sallam', name: 'Sallam', ingredients: 'Salcë luna, mozzarella, gouda, sallam viçi', prices: { normale: 550, big: 700, extra: 1100 }, image: LUNA_DEFAULT_PIZZA_IMAGE },
	{ id: 'ton', name: 'Ton', ingredients: 'Salcë luna, mozzarella, gouda, ton', prices: { normale: 600, big: 850, extra: 1250 }, image: LUNA_DEFAULT_PIZZA_IMAGE },
	{ id: 'sallam-pikant', name: 'Sallam Pikant', ingredients: 'Salcë luna, mozzarella, gouda, sallam pikant', prices: { normale: 550, big: 800, extra: 1250 }, image: LUNA_DEFAULT_PIZZA_IMAGE },
	{ id: '4-stinet', name: '4 Stinët', ingredients: 'Salcë luna, ton, djathë, kërpudha, proshutë, sallam, speca, ullinj', prices: { normale: 650, big: 950, extra: 1350 }, image: LUNA_DEFAULT_PIZZA_IMAGE },
	{ id: '4-djatherat-suxhuk', name: '4 Djathërat & Suxhuk', ingredients: 'Salcë luna, mozzarella, gouda, parmigiano, gorgonzola, suxhuk', prices: { normale: 700, big: 900, extra: 1350 }, image: LUNA_DEFAULT_PIZZA_IMAGE },
	{ id: '4-djatherat', name: '4 Djathërat', ingredients: 'Salcë luna, mozzarella, gouda, parmigiano, gorgonzola', prices: { normale: 600, big: 850, extra: 1300 }, image: LUNA_DEFAULT_PIZZA_IMAGE },
	{ id: 'ton-kerpudha', name: 'Ton & Kërpudha', ingredients: 'Salcë luna, mozzarella, gouda, ton, kërpudha', prices: { normale: 700, big: 950, extra: 1350 }, image: LUNA_DEFAULT_PIZZA_IMAGE },
	{ id: 'sallam-proshute', name: 'Sallam & Proshutë', ingredients: 'Salcë luna, mozzarella, gouda, sallam & proshutë viçi', prices: { normale: 600, big: 850, extra: 1200 }, image: LUNA_DEFAULT_PIZZA_IMAGE },
	{ id: 'sallam-kerpudha', name: 'Sallam & Kërpudha', ingredients: 'Salcë luna, mozzarella, gouda, sallam viçi, kërpudha', prices: { normale: 600, big: 850, extra: 1200 }, image: LUNA_DEFAULT_PIZZA_IMAGE },
	{ id: 'kerpudha', name: 'Kërpudha', ingredients: 'Salcë luna, mozzarella, gouda, kërpudha', prices: { normale: 550, big: 750, extra: 1250 }, image: LUNA_DEFAULT_PIZZA_IMAGE },
	{ id: 'margarita', name: 'Margarita', ingredients: 'Salcë luna, mozzarella, gouda', prices: { normale: 450, big: 600, extra: 1000 }, image: LUNA_DEFAULT_PIZZA_IMAGE },
	{ id: 'tonata', name: 'Tonata', ingredients: 'Salcë luna, gouda, qepë, ton, ullinj', prices: { normale: 700, big: 950, extra: 1350 }, image: LUNA_DEFAULT_PIZZA_IMAGE },
	{ id: 'proshute-e-tymosur', name: 'Proshutë E Tymosur', ingredients: 'Salcë luna, mozzarella, gouda, proshutë e tymosur', prices: { normale: 750, big: 1150, extra: 1600 }, image: LUNA_DEFAULT_PIZZA_IMAGE },
	{ id: 'rukola', name: 'Rukola', ingredients: 'Salcë luna, mozzarella, gouda, proshutë viçi, pomodorini, parmigiano, rukola', prices: { normale: 700, big: 950, extra: 1350 }, image: LUNA_DEFAULT_PIZZA_IMAGE },
	{ id: 'delicata', name: 'Delicata', ingredients: 'Pesto, mozzarella, gouda, pomodorini, krem djathi', prices: { normale: 700, big: 1000, extra: 1350 }, image: LUNA_DEFAULT_PIZZA_IMAGE },
	{ id: 'me-pule', name: 'Me Pulë', ingredients: 'Salcë kremëze, mozzarella, gouda', prices: { normale: 750, big: 1000, extra: 1350 }, image: LUNA_DEFAULT_PIZZA_IMAGE },
	{ id: 'sole-mio', name: 'Sole Mio', ingredients: 'Salcë luna, mozzarella, vezë, djathë i bardhë, gouda, proshutë', prices: { normale: 650, big: 900, extra: 1300 }, image: LUNA_DEFAULT_PIZZA_IMAGE },
	{ id: 'pana', name: 'Pana', ingredients: 'Salcë luna, mozzarella, gouda, kërpudha, proshutë, pana', prices: { normale: 700, big: 950, extra: 1400 }, image: LUNA_DEFAULT_PIZZA_IMAGE },
	{ id: 'kalzone', name: 'Kalzone', ingredients: 'Salcë luna, mozzarella, gouda, kërpudha, proshutë, sallam', prices: { normale: 650, big: 900, extra: 1350 }, image: LUNA_DEFAULT_PIZZA_IMAGE },
	{ id: 'wudy', name: 'Wudy', ingredients: 'Salcë luna, mozzarella, gouda, wudy', prices: { normale: 550, big: 800, extra: 1100 }, image: LUNA_DEFAULT_PIZZA_IMAGE },
	{ id: 'mix', name: 'Mix', ingredients: 'Salcë luna, gouda, vezë, kërpudha, ullinj, proshutë, sallam viçi, suxhuk', prices: { normale: 700, big: 1050, extra: 1450 }, image: LUNA_DEFAULT_PIZZA_IMAGE },
	{ id: 'shef', name: 'Shef', ingredients: 'Salcë luna, gouda, sallam, kërpudha, mish, proshutë viçi, ullinj, suxhuk', prices: { normale: 750, big: 1050, extra: 1500 }, image: LUNA_DEFAULT_PIZZA_IMAGE },
	{ id: 'fruta-deti', name: 'Fruta Deti', ingredients: 'Salcë domate, mozzarella, proshutë e tymosur, kërpudha, philadelphia', prices: { normale: 650, big: 1000, extra: 1400 }, image: LUNA_DEFAULT_PIZZA_IMAGE },
	{ id: 'karkaleca', name: 'Karkaleca', ingredients: 'Salcë domate, mozzarella, gouda, karkaleca', prices: { normale: 800, big: 1200, extra: 1750 }, image: LUNA_DEFAULT_PIZZA_IMAGE },
	{ id: 'capolavoro', name: 'Capolavoro', ingredients: 'Gouda, mozzarella, proshutë e tymosur, kërpudha, philadelphia', prices: { normale: 800, big: 1200, extra: 1600 }, image: LUNA_DEFAULT_PIZZA_IMAGE },
	{ id: 'tartuf', name: 'Tartuf', ingredients: 'Pesto tartufi, mozzarella, gouda, kërpudha, gorgonzola', prices: { normale: 750, big: 900, extra: 1450 }, image: LUNA_DEFAULT_PIZZA_IMAGE },
	{ id: 'chicken-al-freddo', name: 'Chicken Al Freddo', ingredients: 'Salcë Al Freddo, mish pule', prices: { normale: 850, big: 1350, extra: 1650 }, image: LUNA_DEFAULT_PIZZA_IMAGE }
];

var LUNA_OTHER_MENU = [
	{ id: 'role-me-shije-te-ndryshme', name: 'Role Me Shije Të Ndryshme', price: 250 },
	{ id: 'panine-me-wudy', name: 'Panine Me Wudy', price: 150 },
	{ id: 'schiacciata', name: 'Schiacciata', price: 150 },
	{ id: 'pica-te-ndryshme', name: 'Pica Të Ndryshme', price: 120 },
	{ id: 'skrocarella', name: 'Skroçarella', price: 150 }
];
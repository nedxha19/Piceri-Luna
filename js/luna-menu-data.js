
var LUNA_DEFAULT_PIZZA_IMAGE = 'Piceri Luna/undefined-.webp';

var LUNA_PIZZA_SIZES = [
	{ key: 'normale', label: 'Normale', cm: 30 },
	{ key: 'big', label: 'Big', cm: 35 },
	{ key: 'extra', label: 'Extra', cm: 45 }
];

var LUNA_PIZZA_MENU = [
	{
		id: 'vegjetariane',
		name: 'Vegjetariane', name_en: 'Vegetarian',
		ingredients: 'Salcë luna, mozzarella, gouda, djathë i bardhë, ullinj, speca, patëllxhanë',
		ingredients_en: 'Luna sauce, mozzarella, gouda, white cheese, olives, peppers, eggplant',
		prices: { normale: 600, big: 900, extra: 1300 }, image: LUNA_DEFAULT_PIZZA_IMAGE
	},
	{
		id: 'diavolo',
		name: 'Diavolo', name_en: 'Diavolo',
		ingredients: 'Salcë luna, mozzarella, gouda, sallam, suxhuk, speca, domate, speca djegës',
		ingredients_en: 'Luna sauce, mozzarella, gouda, salami, sujuk, peppers, tomatoes, chili peppers',
		prices: { normale: 650, big: 900, extra: 1300 }, image: LUNA_DEFAULT_PIZZA_IMAGE
	},
	{
		id: 'kapricoze',
		name: 'Kapriçoze', name_en: 'Capricciosa',
		ingredients: 'Salcë luna, mozzarella, gouda, ullinj, kërpudha, proshutë, sallam',
		ingredients_en: 'Luna sauce, mozzarella, gouda, olives, mushrooms, ham, salami',
		prices: { normale: 650, big: 950, extra: 1250 }, image: LUNA_DEFAULT_PIZZA_IMAGE
	},
	{
		id: 'miks-sallamesh-dhe-proshutash',
		name: 'Miks Sallamesh Dhe Proshutash', name_en: 'Mixed Salami & Ham',
		ingredients: 'Salcë luna, mozzarella, gouda, miks sallamesh dhe proshutash',
		ingredients_en: 'Luna sauce, mozzarella, gouda, mixed salami and ham',
		prices: { normale: 900, big: 1400, extra: 1600 }, image: LUNA_DEFAULT_PIZZA_IMAGE
	},
	{
		id: 'proshute',
		name: 'Proshutë', name_en: 'Ham',
		ingredients: 'Salcë luna, mozzarella, gouda, proshutë viçi',
		ingredients_en: 'Luna sauce, mozzarella, gouda, beef ham',
		prices: { normale: 600, big: 850, extra: 1250 }, image: LUNA_DEFAULT_PIZZA_IMAGE
	},
	{
		id: 'proshute-kerpudha',
		name: 'Proshutë & Kërpudha', name_en: 'Ham & Mushrooms',
		ingredients: 'Salcë luna, mozzarella, gouda, proshutë viçi, kërpudha',
		ingredients_en: 'Luna sauce, mozzarella, gouda, beef ham, mushrooms',
		prices: { normale: 650, big: 900, extra: 1300 }, image: LUNA_DEFAULT_PIZZA_IMAGE
	},
	{
		id: 'sallam',
		name: 'Sallam', name_en: 'Salami',
		ingredients: 'Salcë luna, mozzarella, gouda, sallam viçi',
		ingredients_en: 'Luna sauce, mozzarella, gouda, beef salami',
		prices: { normale: 550, big: 700, extra: 1100 }, image: LUNA_DEFAULT_PIZZA_IMAGE
	},
	{
		id: 'ton',
		name: 'Ton', name_en: 'Tuna',
		ingredients: 'Salcë luna, mozzarella, gouda, ton',
		ingredients_en: 'Luna sauce, mozzarella, gouda, tuna',
		prices: { normale: 600, big: 850, extra: 1250 }, image: LUNA_DEFAULT_PIZZA_IMAGE
	},
	{
		id: 'sallam-pikant',
		name: 'Sallam Pikant', name_en: 'Spicy Salami',
		ingredients: 'Salcë luna, mozzarella, gouda, sallam pikant',
		ingredients_en: 'Luna sauce, mozzarella, gouda, spicy salami',
		prices: { normale: 550, big: 800, extra: 1250 }, image: LUNA_DEFAULT_PIZZA_IMAGE
	},
	{
		id: '4-stinet',
		name: '4 Stinët', name_en: '4 Seasons',
		ingredients: 'Salcë luna, ton, djathë, kërpudha, proshutë, sallam, speca, ullinj',
		ingredients_en: 'Luna sauce, tuna, cheese, mushrooms, ham, salami, peppers, olives',
		prices: { normale: 650, big: 950, extra: 1350 }, image: LUNA_DEFAULT_PIZZA_IMAGE
	},
	{
		id: '4-djatherat-suxhuk',
		name: '4 Djathërat & Suxhuk', name_en: '4 Cheeses & Sujuk',
		ingredients: 'Salcë luna, mozzarella, gouda, parmigiano, gorgonzola, suxhuk',
		ingredients_en: 'Luna sauce, mozzarella, gouda, parmigiano, gorgonzola, sujuk',
		prices: { normale: 700, big: 900, extra: 1350 }, image: LUNA_DEFAULT_PIZZA_IMAGE
	},
	{
		id: '4-djatherat',
		name: '4 Djathërat', name_en: '4 Cheeses',
		ingredients: 'Salcë luna, mozzarella, gouda, parmigiano, gorgonzola',
		ingredients_en: 'Luna sauce, mozzarella, gouda, parmigiano, gorgonzola',
		prices: { normale: 600, big: 850, extra: 1300 }, image: LUNA_DEFAULT_PIZZA_IMAGE
	},
	{
		id: 'ton-kerpudha',
		name: 'Ton & Kërpudha', name_en: 'Tuna & Mushrooms',
		ingredients: 'Salcë luna, mozzarella, gouda, ton, kërpudha',
		ingredients_en: 'Luna sauce, mozzarella, gouda, tuna, mushrooms',
		prices: { normale: 700, big: 950, extra: 1350 }, image: LUNA_DEFAULT_PIZZA_IMAGE
	},
	{
		id: 'sallam-proshute',
		name: 'Sallam & Proshutë', name_en: 'Salami & Ham',
		ingredients: 'Salcë luna, mozzarella, gouda, sallam & proshutë viçi',
		ingredients_en: 'Luna sauce, mozzarella, gouda, beef salami & ham',
		prices: { normale: 600, big: 850, extra: 1200 }, image: LUNA_DEFAULT_PIZZA_IMAGE
	},
	{
		id: 'sallam-kerpudha',
		name: 'Sallam & Kërpudha', name_en: 'Salami & Mushrooms',
		ingredients: 'Salcë luna, mozzarella, gouda, sallam viçi, kërpudha',
		ingredients_en: 'Luna sauce, mozzarella, gouda, beef salami, mushrooms',
		prices: { normale: 600, big: 850, extra: 1200 }, image: LUNA_DEFAULT_PIZZA_IMAGE
	},
	{
		id: 'kerpudha',
		name: 'Kërpudha', name_en: 'Mushrooms',
		ingredients: 'Salcë luna, mozzarella, gouda, kërpudha',
		ingredients_en: 'Luna sauce, mozzarella, gouda, mushrooms',
		prices: { normale: 550, big: 750, extra: 1250 }, image: LUNA_DEFAULT_PIZZA_IMAGE
	},
	{
		id: 'margarita',
		name: 'Margarita', name_en: 'Margherita',
		ingredients: 'Salcë luna, mozzarella, gouda',
		ingredients_en: 'Luna sauce, mozzarella, gouda',
		prices: { normale: 450, big: 600, extra: 1000 }, image: LUNA_DEFAULT_PIZZA_IMAGE
	},
	{
		id: 'tonata',
		name: 'Tonata', name_en: 'Tonata',
		ingredients: 'Salcë luna, gouda, qepë, ton, ullinj',
		ingredients_en: 'Luna sauce, gouda, onion, tuna, olives',
		prices: { normale: 700, big: 950, extra: 1350 }, image: LUNA_DEFAULT_PIZZA_IMAGE
	},
	{
		id: 'proshute-e-tymosur',
		name: 'Proshutë E Tymosur', name_en: 'Smoked Ham',
		ingredients: 'Salcë luna, mozzarella, gouda, proshutë e tymosur',
		ingredients_en: 'Luna sauce, mozzarella, gouda, smoked ham',
		prices: { normale: 750, big: 1150, extra: 1600 }, image: LUNA_DEFAULT_PIZZA_IMAGE
	},
	{
		id: 'rukola',
		name: 'Rukola', name_en: 'Arugula',
		ingredients: 'Salcë luna, mozzarella, gouda, proshutë viçi, pomodorini, parmigiano, rukola',
		ingredients_en: 'Luna sauce, mozzarella, gouda, beef ham, cherry tomatoes, parmigiano, arugula',
		prices: { normale: 700, big: 950, extra: 1350 }, image: LUNA_DEFAULT_PIZZA_IMAGE
	},
	{
		id: 'delicata',
		name: 'Delicata', name_en: 'Delicata',
		ingredients: 'Pesto, mozzarella, gouda, pomodorini, krem djathi',
		ingredients_en: 'Pesto, mozzarella, gouda, cherry tomatoes, cream cheese',
		prices: { normale: 700, big: 1000, extra: 1350 }, image: LUNA_DEFAULT_PIZZA_IMAGE
	},
	{
		id: 'me-pule',
		name: 'Me Pulë', name_en: 'Chicken',
		ingredients: 'Salcë kremëze, mozzarella, gouda',
		ingredients_en: 'Cream sauce, mozzarella, gouda',
		prices: { normale: 750, big: 1000, extra: 1350 }, image: LUNA_DEFAULT_PIZZA_IMAGE
	},
	{
		id: 'sole-mio',
		name: 'Sole Mio', name_en: 'Sole Mio',
		ingredients: 'Salcë luna, mozzarella, vezë, djathë i bardhë, gouda, proshutë',
		ingredients_en: 'Luna sauce, mozzarella, egg, white cheese, gouda, ham',
		prices: { normale: 650, big: 900, extra: 1300 }, image: LUNA_DEFAULT_PIZZA_IMAGE
	},
	{
		id: 'pana',
		name: 'Pana', name_en: 'Pana',
		ingredients: 'Salcë luna, mozzarella, gouda, kërpudha, proshutë, pana',
		ingredients_en: 'Luna sauce, mozzarella, gouda, mushrooms, ham, cream',
		prices: { normale: 700, big: 950, extra: 1400 }, image: LUNA_DEFAULT_PIZZA_IMAGE
	},
	{
		id: 'kalzone',
		name: 'Kalzone', name_en: 'Calzone',
		ingredients: 'Salcë luna, mozzarella, gouda, kërpudha, proshutë, sallam',
		ingredients_en: 'Luna sauce, mozzarella, gouda, mushrooms, ham, salami',
		prices: { normale: 650, big: 900, extra: 1350 }, image: LUNA_DEFAULT_PIZZA_IMAGE
	},
	{
		id: 'wudy',
		name: 'Wudy', name_en: 'Wudy',
		ingredients: 'Salcë luna, mozzarella, gouda, wudy',
		ingredients_en: 'Luna sauce, mozzarella, gouda, wudy',
		prices: { normale: 550, big: 800, extra: 1100 }, image: LUNA_DEFAULT_PIZZA_IMAGE
	},
	{
		id: 'mix',
		name: 'Mix', name_en: 'Mix',
		ingredients: 'Salcë luna, gouda, vezë, kërpudha, ullinj, proshutë, sallam viçi, suxhuk',
		ingredients_en: 'Luna sauce, gouda, egg, mushrooms, olives, ham, beef salami, sujuk',
		prices: { normale: 700, big: 1050, extra: 1450 }, image: LUNA_DEFAULT_PIZZA_IMAGE
	},
	{
		id: 'shef',
		name: 'Shef', name_en: 'Chef',
		ingredients: 'Salcë luna, gouda, sallam, kërpudha, mish, proshutë viçi, ullinj, suxhuk',
		ingredients_en: 'Luna sauce, gouda, salami, mushrooms, meat, beef ham, olives, sujuk',
		prices: { normale: 750, big: 1050, extra: 1500 }, image: LUNA_DEFAULT_PIZZA_IMAGE
	},
	{
		id: 'fruta-deti',
		name: 'Fruta Deti', name_en: 'Seafood',
		ingredients: 'Salcë domate, mozzarella, proshutë e tymosur, kërpudha, philadelphia',
		ingredients_en: 'Tomato sauce, mozzarella, smoked ham, mushrooms, philadelphia',
		prices: { normale: 650, big: 1000, extra: 1400 }, image: LUNA_DEFAULT_PIZZA_IMAGE
	},
	{
		id: 'karkaleca',
		name: 'Karkaleca', name_en: 'Shrimp',
		ingredients: 'Salcë domate, mozzarella, gouda, karkaleca',
		ingredients_en: 'Tomato sauce, mozzarella, gouda, shrimp',
		prices: { normale: 800, big: 1200, extra: 1750 }, image: LUNA_DEFAULT_PIZZA_IMAGE
	},
	{
		id: 'capolavoro',
		name: 'Capolavoro', name_en: 'Capolavoro',
		ingredients: 'Gouda, mozzarella, proshutë e tymosur, kërpudha, philadelphia',
		ingredients_en: 'Gouda, mozzarella, smoked ham, mushrooms, philadelphia',
		prices: { normale: 800, big: 1200, extra: 1600 }, image: LUNA_DEFAULT_PIZZA_IMAGE
	},
	{
		id: 'tartuf',
		name: 'Tartuf', name_en: 'Truffle',
		ingredients: 'Pesto tartufi, mozzarella, gouda, kërpudha, gorgonzola',
		ingredients_en: 'Truffle pesto, mozzarella, gouda, mushrooms, gorgonzola',
		prices: { normale: 750, big: 900, extra: 1450 }, image: LUNA_DEFAULT_PIZZA_IMAGE
	},
	{
		id: 'chicken-al-freddo',
		name: 'Chicken Al Freddo', name_en: 'Chicken Al Freddo',
		ingredients: 'Salcë Al Freddo, mish pule',
		ingredients_en: 'Alfredo sauce, chicken',
		prices: { normale: 850, big: 1350, extra: 1650 }, image: LUNA_DEFAULT_PIZZA_IMAGE
	}
];

var LUNA_OTHER_MENU = [
	{ id: 'role-me-shije-te-ndryshme', name: 'Role Me Shije Të Ndryshme', name_en: 'Variety Rolls', price: 250 },
	{ id: 'panine-me-wudy', name: 'Panine Me Wudy', name_en: 'Wudy Sandwich', price: 150 },
	{ id: 'schiacciata', name: 'Schiacciata', name_en: 'Schiacciata', price: 150 },
	{ id: 'pica-te-ndryshme', name: 'Pica Të Ndryshme', name_en: 'Assorted Pizza', price: 120 },
	{ id: 'skrocarella', name: 'Skroçarella', name_en: 'Skroçarella', price: 150 }
];

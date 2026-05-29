/**
 * Piceri Luna — menu i plotë me çmime sipas madhësisë
 * Renditja e çmimeve: normale (30cm), mini (22cm), familjare (35cm), extra (45cm)
 */
var LUNA_PIZZA_SIZES = [
	{ key: 'mini', label: 'Mini', cm: 22 },
	{ key: 'normale', label: 'Normale', cm: 30 },
	{ key: 'familjare', label: 'Familjare', cm: 35 },
	{ key: 'extra', label: 'Extra', cm: 45 }
];

var LUNA_PIZZA_MENU = [
	{ id: 'margarita', name: 'Margarita', ingredients: 'Salcë luna, mozzarella, gouda', prices: { normale: 400, mini: 350, familjare: 550, extra: 950 }, image: 'images/pizza-4.png' },
	{ id: 'sallam', name: 'Sallam', ingredients: 'Salcë luna, mozzarella, gouda, sallam viçi', prices: { normale: 500, mini: 400, familjare: 650, extra: 1000 }, image: 'images/pizza-1.png' },
	{ id: 'sallam-proshute', name: 'Sallam & Proshutë', ingredients: 'Salcë luna, mozzarella, gouda, sallam & proshutë viçi', prices: { normale: 550, mini: 450, familjare: 750, extra: 1150 }, image: 'images/pizza-2.png' },
	{ id: 'sallam-kerpudha', name: 'Sallam & Kërpudha', ingredients: 'Salcë luna, mozzarella, gouda, sallam viçi, kërpudha', prices: { normale: 550, mini: 450, familjare: 750, extra: 1150 }, image: 'images/pizza-3.png' },
	{ id: 'sallam-pikant', name: 'Sallam Pikant', ingredients: 'Salcë luna, mozzarella, gouda, sallam pikant', prices: { normale: 550, mini: 450, familjare: 700, extra: 1150 }, image: 'images/pizza-1.png' },
	{ id: 'proshute', name: 'Proshutë', ingredients: 'Salcë luna, mozzarella, gouda, proshutë viçi', prices: { normale: 550, mini: 450, familjare: 750, extra: 1150 }, image: 'images/pizza-2.png' },
	{ id: 'proshute-kerpudha', name: 'Proshutë & Kërpudha', ingredients: 'Salcë luna, mozzarella, gouda, proshutë viçi, kërpudha', prices: { normale: 600, mini: 500, familjare: 800, extra: 1250 }, image: 'images/pizza-3.png' },
	{ id: 'kerpudha', name: 'Kërpudha', ingredients: 'Salcë luna, mozzarella, gouda, kërpudha', prices: { normale: 500, mini: 450, familjare: 650, extra: 1150 }, image: 'images/pizza-4.png' },
	{ id: '4-djathrat', name: '4 Djathërat', ingredients: 'Salcë luna, mozzarella, gouda, parmigiano, gorgonzola', prices: { normale: 550, mini: 450, familjare: 700, extra: 1250 }, image: 'images/pizza-1.png' },
	{ id: '4-djathrat-suxhuk', name: '4 Djathërat & Suxhuk', ingredients: 'Salcë luna, mozzarella, gouda, parmigiano, gorgonzola, suxhuk', prices: { normale: 650, mini: 500, familjare: 800, extra: 1350 }, image: 'images/pizza-2.png' },
	{ id: 'me-ton', name: 'Me Ton', ingredients: 'Salcë luna, mozzarella, gouda, ton', prices: { normale: 550, mini: 450, familjare: 750, extra: 1150 }, image: 'images/pizza-3.png' },
	{ id: 'me-ton-kerpudha', name: 'Me Ton & Kërpudha', ingredients: 'Salcë luna, mozzarella, gouda, ton, kërpudha', prices: { normale: 650, mini: 500, familjare: 800, extra: 1250 }, image: 'images/pizza-4.png' },
	{ id: 'tonata', name: 'Tonata', ingredients: 'Salcë luna, gouda, qepë, ton, ulli', prices: { normale: 650, mini: 500, familjare: 800, extra: 1250 }, image: 'images/pizza-1.png' },
	{ id: 'proshute-tymosur', name: 'Proshutë E Tymosur', ingredients: 'Salcë luna, mozzarella, gouda, proshutë e tymosur', prices: { normale: 750, mini: 550, familjare: 1000, extra: 1600 }, image: 'images/pizza-2.png' },
	{ id: 'rukola', name: 'Rukola', ingredients: 'Salcë luna, mozzarella, gouda, proshutë viçi, pomodorini, parmigiano, rukola', prices: { normale: 650, mini: 500, familjare: 850, extra: 1350 }, image: 'images/pizza-3.png' },
	{ id: 'delicata', name: 'Delicata', ingredients: 'Pesto, mozzarella, gouda, pomodorini, krem djathi', prices: { normale: 650, mini: 500, familjare: 900, extra: 1350 }, image: 'images/pizza-4.png' },
	{ id: 'me-pule', name: 'Me Pulë', ingredients: 'Salcë kreme, mozzarella, gouda', prices: { normale: 750, mini: 500, familjare: 950, extra: 1350 }, image: 'images/pizza-1.png' },
	{ id: 'wudy', name: 'Wudy', ingredients: 'Salcë luna, mozzarella, gouda, wudy', prices: { normale: 500, mini: 450, familjare: 700, extra: 1150 }, image: 'images/pizza-2.png' },
	{ id: 'sole-mio', name: 'Sole Mio', ingredients: 'Salcë luna, mozzarella, vezë, djathë i bardhë, gouda, proshutë', prices: { normale: 650, mini: 500, familjare: 800, extra: 1200 }, image: 'images/pizza-3.png' },
	{ id: 'diavolo', name: 'Diavolo', ingredients: 'Salcë luna, mozzarella, gouda, sallam, suxhuk, speca, domate, speca djegës', prices: { normale: 600, mini: 500, familjare: 800, extra: 1200 }, image: 'images/pizza-4.png' },
	{ id: 'pana', name: 'Pana', ingredients: 'Salcë luna, mozzarella, gouda, kërpudha, proshutë, pana', prices: { normale: 650, mini: 500, familjare: 800, extra: 1300 }, image: 'images/pizza-1.png' },
	{ id: 'kalzone', name: 'Kalzone', ingredients: 'Salcë luna, mozzarella, gouda, kërpudha, proshutë, sallam', prices: { normale: 600, mini: 500, familjare: 750, extra: 1250 }, image: 'images/pizza-2.png' },
	{ id: 'kapricioze', name: 'Kapriçoze', ingredients: 'Salcë luna, mozzarella, gouda, ulli, kërpudha, proshutë, sallam', prices: { normale: 600, mini: 500, familjare: 800, extra: 1250 }, image: 'images/pizza-3.png' },
	{ id: 'vegjetariane', name: 'Vegjetariane', ingredients: 'Salcë luna, mozzarella, gouda, djathë i bardhë, ulli, speca, patëllxhanë', prices: { normale: 550, mini: 450, familjare: 750, extra: 1250 }, image: 'images/pizza-4.png' },
	{ id: '4-stinet', name: '4 Stinët', ingredients: 'Salcë luna, ton, djathë, kërpudha, proshutë, sallam, speca', prices: { normale: 600, mini: 500, familjare: 800, extra: 1250 }, image: 'images/pizza-1.png' },
	{ id: 'mix', name: 'Mix', ingredients: 'Salcë luna, gouda, vezë, kërpudha, ulli, proshutë, sallam viçi', prices: { normale: 650, mini: 500, familjare: 900, extra: 1350 }, image: 'images/pizza-2.png' },
	{ id: 'shef', name: 'Shef', ingredients: 'Salcë luna, gouda, sallam, kërpudha, mish, proshutë viçi', prices: { normale: 700, mini: 550, familjare: 950, extra: 1500 }, image: 'images/pizza-3.png' },
	{ id: 'me-fruta-deti', name: 'Me Fruta Deti', ingredients: 'Salcë domate, mozzarella, proshutë e tymosur, kërpudha, philadelphia', prices: { normale: 650, mini: 550, familjare: 900, extra: 1400 }, image: 'images/pizza-4.png' },
	{ id: 'me-karkaleca', name: 'Me Karkaleca', ingredients: 'Salcë domate, mozzarella, gouda, karkaleca', prices: { normale: 800, mini: 600, familjare: 1100, extra: 1750 }, image: 'images/pizza-1.png' },
	{ id: 'capolavoro', name: 'Capolavoro', ingredients: 'Gouda, mozzarella, proshutë e tymosur, kërpudha, philadelphia', prices: { normale: 750, mini: 550, familjare: 1100, extra: 1600 }, image: 'images/pizza-2.png' },
	{ id: 'tartuf', name: 'Tartuf', ingredients: 'Pesto tartufi, mozzarella, gouda, kërpudha, gorgonzola', prices: { normale: 700, mini: 500, familjare: 800, extra: 1450 }, image: 'images/pizza-3.png' },
	{ id: 'chicken-al-freddo', name: 'Chicken Al Freddo', ingredients: 'Salcë Al Freddo, mish pule', prices: { normale: 850, mini: 550, familjare: 1350, extra: 1650 }, image: 'images/pizza-4.png' },
	{ id: 'miks-sallamesh', name: 'Miks Sallamesh Dhe Proshutash', ingredients: 'Salcë luna, mozzarella, gouda, miks sallamesh dhe proshutash', prices: { normale: 850, mini: 500, familjare: 1300, extra: 1600 }, image: 'images/pizza-1.png' }
];

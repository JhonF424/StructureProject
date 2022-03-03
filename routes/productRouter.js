const express = require('express');
const faker = require('faker');
const router = express.Router();

router.get('/:productId', (req, res) => {
	const { productId } = req.params;
	res.json({
		productId,
		product: 'element1',
		brand: 'brand1',
		reference: {
			size: {
				option1: {
					specific_size: 'XS',
					specification: [
						{
							color: {
								option1: 'rojo',
								option2: 'azul',
							},
						},
					],
				},
			},
		},
	});
});

router.get('/api-faker/list-random', (req, res) => {
	const list_p = [];
	for (let index = 0; index < list_p.length; index++) {
		list_p.push({
			name: faker.commerce.productName(),
			price: parseInt(faker.commerce.price(), 10),
			image: faker.image.imageUrl(),
		});
	}
	res.json(list_p);
});

router.get('/page/list', (req, res) => {
	const array_products_faker = [];
	const { limit_optional } = req.query;
	const cant_products = limit_optional || 10;
	for (let i = 0; i < cant_products; i++) {
		array_products_faker.push({
			name: faker.commerce.productName(),
			price: parseInt(faker.commerce.price(), 10),
			image: faker.image.imageUrl(),
		});
	}
	res.json(array_products_faker);
});

module.exports = router;

const express = require('express');
const router = express.Router();

router.get('/:categoryID/products/:productId', (req, res) => {
	const { categoryId, productId } = req.params;
	res.json({
		category: [
			{
				categoryId,
				name_category: 'female',
				sub_category: [
					{
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
					},
				],
			},
		],
	});
});

module.exports = router;

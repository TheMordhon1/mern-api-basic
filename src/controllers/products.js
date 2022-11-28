const productData = require('../assets/json/products.json');

exports.createProduct = (req, res, next) => {
	const name = req.body.name;
	const price = req.body.price;
	// const findProduct = productData.data.find(item => item.id === 1);

	// res.json(findProduct);
	res.json(
		{
			message: 'find product',
			data: [{
				id: 1,
				name: name,
				price: price
			},
			{
				id: 2,
				name: name,
				price: price * 2
			},]
		},
	);
	next();
}


exports.getAllProduct = (req, res, next) => {
	res.json(productData.data);
	next();
}
const productData = require('../assets/json/products.json');

exports.createProduct = (req, res, next) => {
	const findProduct = productData.data.find(item => item.id === 1);

	res.json(findProduct);
	next();
}

exports.getAllProduct = (req, res, next) => {
	res.json(productData.data);
	next();
}
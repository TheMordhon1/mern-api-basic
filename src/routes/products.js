const express = require('express')

const router = express();

const productsController = require('../controllers/products');

router.get('/product', productsController.createProduct)
router.get('/products', productsController.getAllProduct)
/* Other method can be seen in postman cause browser only support for GET method */

module.exports = router;
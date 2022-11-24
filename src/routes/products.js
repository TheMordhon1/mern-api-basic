const express = require('express')

const router = express();

const productsController = require('../controllers/products');

// READ -> GET
router.get('/product', productsController.createProduct)
router.get('/products', productsController.getAllProduct)

/* Other method can be seen in postman cause browser only support for GET method */

// CREATE -> POST
router.post('/post/products', productsController.getAllProduct)

// UPDATE -> PUT
router.put('/put/products', productsController.getAllProduct)

// DELETE -> DELETE
router.delete('/delete/products', productsController.getAllProduct)

module.exports = router;
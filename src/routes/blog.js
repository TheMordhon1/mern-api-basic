const express = require('express');
const router = express();

const blogController = require('../controllers/blog');

router.post('/post', blogController.createBLogPost);
module.exports = router;
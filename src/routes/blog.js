const express = require('express');
const { body } = require('express-validator');
const router = express();

const blogController = require('../controllers/blog');

router.post('/post',
	[
		body('title').isLength({ min: 5 }).withMessage('input title minimal 5 karakter'),
		body('body').isLength({ min: 20 }).withMessage('input body minimal 20 karakter')
	],
	blogController.createBLogPost);

module.exports = router;
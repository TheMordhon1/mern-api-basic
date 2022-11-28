const express = require('express')

const router = express();

const authController = require('../controllers/auth');

router.post('/register', authController.register);

module.exports = router;
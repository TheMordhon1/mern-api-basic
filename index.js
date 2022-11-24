const express = require('express');

const app = express();

app.get('/product', (req, res, next) => {
	console.log('url', req.url);
	console.log('method', req.method);
})

// app.use()

app.listen(4000);
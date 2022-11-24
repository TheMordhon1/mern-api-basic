const express = require('express');

const app = express();

app.get('/product', (req, res, next) => {
	const data = {
		"id": 5,
		"name": "The Mordhon"
	}
	console.log('url', req.url);
	console.log('method', req.method);
	res.json(data);
	next();
})

// app.use()

app.listen(4000);
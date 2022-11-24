const express = require('express');

const app = express();

const productRoutes = require('./src/routes/products')

/* Handle CORS */
app.use((req, res, next) => {
	res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
	res.setHeader('Access-Control-Allow-Methods', 'GET, PUT, PATCH, DELETE, OPTIONS');
	res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
	next();
})


app.use('/v1', productRoutes);

app.listen(4000);
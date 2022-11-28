const express = require('express');
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

const app = express();

const productRoutes = require('./src/routes/products')
const authRoutes = require('./src/routes/auth')
const blogRoutes = require('./src/routes/blog')

/* Handle CORS */
app.use((req, res, next) => {
	res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
	res.setHeader('Access-Control-Allow-Methods', 'GET, PUT, PATCH, DELETE, OPTIONS');
	res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
	next();
})

app.use(bodyParser.json());


app.use('/v1/customer', productRoutes);
app.use('/v1/auth', authRoutes);
app.use('/v1/blog', blogRoutes);
app.use((error, req, res, next) => {
	const status = error.errStatus || 500;
	const message = error.errMessage || "invalid";
	const data = error.errData;

	res.status(status).json({ message: message, data: data })
})

mongoose.connect('mongodb+srv://themordhon:viral13120@cluster0.gz5o12j.mongodb.net/blog?retryWrites=true&w=majority')
	.then(() => {
		app.listen(5000, () => console.log('Connection Success'));
	})
	.catch(err => console.log(err))


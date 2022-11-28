const { validationResult } = require('express-validator');
const BlogPost = require('../models/blog');

exports.createBLogPost = (req, res, next) => {
	const title = req.body.title;
	// const image = req.body.image;
	const body = req.body.body;

	const errors = validationResult(req);
	// console.log(errors.isEmpty()) // false

	if (errors.isEmpty()) {

	} else {
		console.log(errors)
		const err = new Error();
		err.errMessage = "Input tidak sesuai";
		err.errStatus = 400;
		err.errData = errors.array();
		throw err;
	}

	const Posting = new BlogPost({
		title: title,
		body: body,
		author: { uid: 1, name: "The Mordhon" }
	})

	Posting.save()
		.then(result => {
			res.status(201).json({
				message: "Create Blog Post Success",
				data: result,
			})
		})
		.catch(err => console.log("error: ", err))
}
const { validationResult } = require('express-validator');

exports.createBLogPost = (req, res, next) => {
	const title = req.body.title;
	// const image = req.body.image;
	const body = req.body.body;

	const errors = validationResult(req);
	// console.log(errors.isEmpty()) // false
	if (errors.isEmpty()) {
		const result = {
			message: "Create Blog Post Success",
			data: {
				post_id: 1,
				created_at: "12/06/2022",
				title: title,
				image: "cover.png",
				body: body,
				author: {
					id: 1,
					name: "John Doe",
				}
			}
		}
		res.status(201).json(result)
	} else {
		console.log(errors)
		const err = new Error();
		err.errMessage = "Input tidak sesuai";
		err.errStatus = 400;
		err.errData = errors.array();
		throw err;
	}

}
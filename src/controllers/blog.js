exports.createBLogPost = (req, res, next) => {
	const title = req.body.title;
	// const image = req.body.image;
	const body = req.body.body;

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
}
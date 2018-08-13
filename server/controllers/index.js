module.exports = function(app) {

	require('./info')(app);
	require('./join')(app);
	require('./status')(app);

	app.use(function(req, res, next) {
		// If we get to this middleware, then none of the controllers matched the route.
		// Respond with a 404 error.
		var error = new Error();
		error.status = 404;
		next(error);
	});

	app.use(function(error, req, res, next) {

		// Catches errors from middleware and controllers.

		if (error) {

			if (!error.status) {
				app.error(error);
				error.status = 500;
				error.message = null;
			}

			if (!error.message) {
				error.message = error.status;
			}

			res.status(error.status).json({
				error: error.message,
				status: error.status,
			});
		}

		next();
	});
};

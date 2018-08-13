module.exports = function(app) {

	app.get('/status', function(req, res, next) {

		res.status(200).json({
			status: 'OK',
		});
	});
};

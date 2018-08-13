module.exports = function(app) {

	app.get('/info', function(req, res, next) {

		res.status(200).json({
			started: app.tournament.started,
			alias: req.session.alias,
		}).end();
	});
};

module.exports = function(app) {

	app.post('/join', function(req, res, next) {

		try {
			app.tournament.addParticipant(req.body);
		} catch (error) {
			error.status = 400;
			return next(error);
		}

		req.session.alias = req.body.alias;
		res.status(200).end();
	});
};

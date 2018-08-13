module.exports = function(app) {

	app.use(function(req, res, next) {

		if (req.headers['access-control-request-method']) {
			res.header('Access-Control-Allow-Methods', req.headers['access-control-request-method']);
		}

		if (req.headers['access-control-request-headers']) {
			res.header('Access-Control-Allow-Headers', req.headers['access-control-request-headers']);
		} else {
			res.header('Access-Control-Allow-Headers', 'Authorization, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, Origin');
		}

		res.header('Access-Control-Allow-Origin', req.headers['origin'] || '*');
		res.header('Access-Control-Allow-Credentials', 'true');

		if (req.method.toUpperCase() === 'OPTIONS') {
			/*
				Always respond with an HTTP status code of 200 for OPTIONS requests.

				See:
				https://stackoverflow.com/a/11176846
			*/
			return res.status(200).end();
		}

		next();
	});
};

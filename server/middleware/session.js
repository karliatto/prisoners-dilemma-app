module.exports = function(app) {

	var session = require('express-session');

	app.use(session(app.config.session));
};

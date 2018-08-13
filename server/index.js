var express = require('express');
var app = module.exports = express();

app.ready = false;
app.config = require('./config');
app.tournament = require('./tournament');
require('./middleware')(app);
require('./controllers')(app);

app.server = app.listen(app.config.port, app.config.host, function() {
	console.log('Server listening at ' + app.config.host + ':' + app.config.port);
	// Signal that the server is ready.
	// Needed for integration tests.
	app.ready = true;
});

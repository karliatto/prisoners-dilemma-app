var express = require('express');
var app = module.exports = express();

app.config = require('./config');
require('./middleware');
require('./controllers');

app.server = app.listen(app.config.port, app.config.host, function() {
	console.log('Server listening at ' + app.config.host + ':' + app.config.port);
});

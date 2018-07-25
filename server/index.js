var express = require('express');
var app = module.exports = express();
var cors = require('cors');

app.config = require('./config');
require('./middleware')(app);
require('./controllers')(app);
app.use(cors());

app.server = app.listen(app.config.port, app.config.host, function() {
	console.log('Server listening at ' + app.config.host + ':' + app.config.port);
});

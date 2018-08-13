module.exports = function(app) {

	require('./cors')(app);
	require('./parsers')(app);
	require('./session')(app);
};

var _ = require('underscore');
var async = require('async');

// The express server application.
var app = require('../');

// Helper functions for tests.
var manager = module.exports = {

	app: app,

	onServerReady: function(done) {

		// Wait for the server to be ready.
		async.until(function() {
			return app.ready === true;
		}, function(next) {
			// Wait then check again.
			_.delay(next, 10);
		}, done);
	},
};

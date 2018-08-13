var _ = require('underscore');
var chai = require('chai');
var chaiHttp = require('chai-http');
var expect = chai.expect;
var manager = require('../manager');

var verb = 'get';
var uri = '/status';

chai.use(chaiHttp);

describe([verb.toUpperCase(), uri].join(' '), function() {

	before(manager.onServerReady);

	it('OK', function(done) {

		chai.request(manager.app)[verb](uri).end(function(error, response) {
			expect(error).to.be.null;
			expect(response).to.have.status(200);
			expect(response.body).to.be.an('object');
			expect(response.body.status).to.equal('OK');
			done();
		});
	});
});

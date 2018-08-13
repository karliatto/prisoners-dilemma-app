module.exports = {
	'test-server-integration': {
		options: {
			reporter: 'spec',
			ui: 'bdd'
		},
		src: ['server/test/integration/**/*.js'],
	},
	'test-server-unit': {
		options: {
			reporter: 'spec',
			ui: 'bdd'
		},
		src: ['server/test/unit/**/*.js'],
	},
};

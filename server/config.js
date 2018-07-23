module.exports = {
	host: 'localhost',
	port: 3010,
	session: {
		secret: 'this-app-is-meant-for-demo-purposes-only',
		resave: false,
		saveUninitialized: true,
		cookie: { secure: false },
	},
};

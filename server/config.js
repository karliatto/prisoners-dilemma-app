module.exports = {
	host: 'localhost',
	port: process.env.SERVER_PORT && parseInt(process.env.SERVER_PORT) || 3010,
	session: {
		secret: 'this-app-is-meant-for-demo-purposes-only',
		resave: false,
		saveUninitialized: true,
		cookie: { secure: false },
	},
};

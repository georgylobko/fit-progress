const config = require('config');

module.exports = {
	type: 'mysql',
	host: config.get('db.host'),
	port: config.get('db.port'),
	username: config.get('db.username'),
	password: config.get('db.password'),
	database: config.get('db.database'),
	synchronize: true,
	logging: false,
	entities: [
		'src/entity/**/*.ts'
	],
	migrations: [
		'src/migration/**/*.ts'
	],
	subscribers: [
		'src/subscriber/**/*.ts'
	],
	cli: {
		entitiesDir: 'src/entity',
		migrationsDir: 'src/migration',
		subscribersDir: 'src/subscribe'
	}
};


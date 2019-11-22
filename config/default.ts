module.exports = {
  server: {
    host: 'http://localhost',
    port: 3000,
  },
  db: {
    host: process.env.MYSQL_HOST,
    port: process.env.MYSQL_PORT,
    database: process.env.MYSQL_DATABASE,
    username: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD
  }
};


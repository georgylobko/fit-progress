import Koa from 'koa';
import { Sequelize } from 'sequelize';
import config from 'config';

const sequelize = new Sequelize(config.get('db.database'), config.get('db.username'), config.get('db.password'), {
    host: config.get('db.host'),
    port: config.get('db.port'),
    dialect: 'mysql'
});

sequelize
    .authenticate()
    .then(() => {
        console.log('Connection has been established successfully.');
    })
    .catch(err => {
        console.error('Unable to connect to the database:', err);
    });

import exercisesRouter from './routes/exercises';

const app = new Koa();

app.use(exercisesRouter.routes());

export default app;

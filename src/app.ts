import Koa from 'koa';
import bodyParser from 'koa-bodyparser';
import config from 'config';

import sequelize from './db';
import errorHandler from './middlewares/errorHandler';

import exercisesRouter from './routes/exercises';
import muscleGroupsRouter from './routes/muscleGroups';
import workoutRouter from './routes/workouts';
import setsRouter from './routes/sets';

const app = new Koa();

sequelize
    .authenticate()
    .then(() => {
        console.log('Connection has been established successfully.');
    })
    .catch(err => {
        console.error('Unable to connect to the database:', err);
    });

sequelize.query(`CREATE DATABASE IF NOT EXISTS "${config.get('db.database')}"`)
    .then(() => console.log('Database created!'));

sequelize.sync({ force: true })
    .then(() => {
        console.log('Tables created!')
    });

app.use(bodyParser({
    jsonLimit: '56kb'
}));
app.use(errorHandler);

app.use(exercisesRouter.routes());
app.use(muscleGroupsRouter.routes());
app.use(workoutRouter.routes());
app.use(setsRouter.routes());

export default app;

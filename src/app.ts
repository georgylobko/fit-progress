import Koa from 'koa';
import bodyParser from 'koa-bodyparser';

import sequelize from './db';
import errorHandler from './middlewares/errorHandler';

import exercisesRouter from './routes/exercises';
import muscleGroupsRouter from './routes/muscleGroups';

const app = new Koa();

sequelize
    .authenticate()
    .then(() => {
        console.log('Connection has been established successfully.');
    })
    .catch(err => {
        console.error('Unable to connect to the database:', err);
    });

app.use(bodyParser({
    jsonLimit: '56kb'
}));
app.use(errorHandler);

app.use(exercisesRouter.routes());
app.use(muscleGroupsRouter.routes());

export default app;

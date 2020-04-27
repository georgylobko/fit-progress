import Koa from 'koa';
import { createConnection } from 'typeorm';
import bodyParser from 'koa-bodyparser';
import 'reflect-metadata';

import errorHandler from './middlewares/errorHandler';

import exercisesRouter from './routes/exercises';
import muscleGroupsRouter from './routes/muscleGroups';
import workoutRouter from './routes/workouts';
import workoutSetsRouter from './routes/workoutSet';

const app = new Koa();

createConnection().then(async () => {
    app.use(bodyParser({
        jsonLimit: '56kb'
    }));
    app.use(errorHandler);

    app.use(exercisesRouter.routes());
    app.use(muscleGroupsRouter.routes());
    app.use(workoutRouter.routes());
    app.use(workoutSetsRouter.routes());
}).catch((error) => {
    console.error(`Unable to connect to the database: ${error}`);
    process.exit(1);
});

export default app;

import Router from 'koa-router';

import Workout from '../models/Workout';
import Set from '../models/Set';

const workoutsRouter = new Router({
    prefix: '/workouts'
});

workoutsRouter
    .get('/', async (ctx) => {
        ctx.body = await Workout.findAll();
    })
    .get('/:workoutId', async (ctx) => {
        const { workoutId } = ctx.params;
        const item = await Workout.findByPk(workoutId, { include: [{
                model: Set,
                as: 'sets',
                attributes: ['set_id', 'weight', 'reps']
            }] });
        if (!item) ctx.throw(404);
        ctx.body = item;
    })
    .post('/', async (ctx) => {
        ctx.body = await Workout.create(ctx.request.body);
    })
    .put('/:workoutId', async (ctx) => {
        const { workoutId } = ctx.params;
        const item = await Workout.findByPk(workoutId);
        await item.update(ctx.request.body);
        ctx.body = item;
    })
    .delete('/:workoutId', async (ctx) => {
        const { workoutId } = ctx.params;
        const item = await Workout.findByPk(workoutId);
        await item.destroy();
        ctx.body = 'ok';
    });

export default workoutsRouter;

import Router from 'koa-router';

import Workout from '../entity/Workout';

const workoutsRouter = new Router({
    prefix: '/workouts'
});

workoutsRouter
    .get('/', async (ctx) => {
        ctx.body = await Workout.find({ relations: ['muscleGroup', 'workoutSets', 'workoutSets.exercise'] });
    })
    .get('/:id', async (ctx) => {
        const { id } = ctx.params;
        const item = await Workout.findOne(id, { relations: ['workoutSets', 'workoutSets.exercise'] });
        if (!item) ctx.throw(404);
        ctx.body = item;
    })
    .post('/', async (ctx) => {
        const data = await Workout.create(ctx.request.body);
        ctx.body = await Workout.save(data);
    })
    .put('/:id', async (ctx) => {
        const { id } = ctx.params;
        const data = await Workout.findOne(id);
        Workout.merge(data, ctx.request.body);
        ctx.body = await Workout.save(data);
    })
    .delete('/:id', async (ctx) => {
        const { id } = ctx.params;
        ctx.body = await Workout.delete(id);
    });

export default workoutsRouter;

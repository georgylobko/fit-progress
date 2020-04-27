import Router from 'koa-router';

import WorkoutSet from '../entity/WorkoutSet';

const workoutSetsRouter = new Router({
    prefix: '/workout_sets'
});

workoutSetsRouter
    .get('/', async (ctx) => {
        ctx.body = await WorkoutSet.find({ relations: ['workout', 'exercise'] });
    })
    .get('/:id', async (ctx) => {
        const { id } = ctx.params;
        const item = await WorkoutSet.findOne(id, { relations: ['workout', 'exercise'] });
        if (!item) ctx.throw(404);
        ctx.body = item;
    })
    .post('/', async (ctx) => {
        const data = await WorkoutSet.create(ctx.request.body);
        ctx.body = await WorkoutSet.save(data);
    })
    .put('/:id', async (ctx) => {
        const { id } = ctx.params;
        const data = await WorkoutSet.findOne(id);
        WorkoutSet.merge(data, ctx.request.body);
        ctx.body = await WorkoutSet.save(data);
    })
    .delete('/:id', async (ctx) => {
        const { id } = ctx.params;
        ctx.body = await WorkoutSet.delete(id);
    });

export default workoutSetsRouter;

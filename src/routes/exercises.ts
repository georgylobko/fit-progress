import Router from 'koa-router';

import Exercise from '../entity/Exercise';

const exercisesRouter = new Router({
    prefix: '/exercises'
});

exercisesRouter
    .get('/', async (ctx) => {
        ctx.body = await Exercise.find({ relations: ['muscleGroup'] });
    })
    .get('/:id', async (ctx) => {
        const { id } = ctx.params;
        const item = await Exercise.findOne(id);
        if (!item) ctx.throw(404);
        ctx.body = item;
    })
    .post('/', async (ctx) => {
        const muscleGroup = await Exercise.create(ctx.request.body);
        ctx.body = await Exercise.save(muscleGroup);
    })
    .put('/:id', async (ctx) => {
        const { id } = ctx.params;
        const data = await Exercise.findOne(id);
        Exercise.merge(data, ctx.request.body);
        ctx.body = await Exercise.save(data);
    })
    .delete('/:id', async (ctx) => {
        const { id } = ctx.params;
        ctx.body = await Exercise.delete(id);
    });

export default exercisesRouter;

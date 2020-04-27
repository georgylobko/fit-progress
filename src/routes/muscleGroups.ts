import Router from 'koa-router';

import MuscleGroup from '../entity/MuscleGroup';

const muscleGroupsRouter = new Router({
    prefix: '/muscle_groups'
});

muscleGroupsRouter
    .get('/', async (ctx) => {
        ctx.body = await MuscleGroup.find();
    })
    .get('/:id', async (ctx) => {
        const { id } = ctx.params;
        const item = await MuscleGroup.findOne(id);
        if (!item) ctx.throw(404);
        ctx.body = item;
    })
    .post('/', async (ctx) => {
        const muscleGroup = await MuscleGroup.create(ctx.request.body);
        ctx.body = await MuscleGroup.save(muscleGroup);
    })
    .put('/:id', async (ctx) => {
        const { id } = ctx.params;
        const muscleGroup = await MuscleGroup.findOne(id);
        MuscleGroup.merge(muscleGroup, ctx.request.body);
        ctx.body = await MuscleGroup.save(muscleGroup);
    })
    .delete('/:id', async (ctx) => {
        const { id } = ctx.params;
        ctx.body = await MuscleGroup.delete(id);
    });

export default muscleGroupsRouter;

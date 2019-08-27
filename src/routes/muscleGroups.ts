import Router from 'koa-router';

import MuscleGroup from '../models/MuscleGroup';

const muscleGroupsRouter = new Router({
    prefix: '/muscle_groups'
});

muscleGroupsRouter
    .get('/', async (ctx) => {
        ctx.body = await MuscleGroup.findAll();
    })
    .get('/:muscleGroupId', async (ctx) => {
        const { muscleGroupId } = ctx.params;
        const item = await MuscleGroup.findByPk(muscleGroupId);
        if (!item) ctx.throw(404);
        ctx.body = item;
    })
    .post('/', async (ctx) => {
        const newItem = await MuscleGroup.create(ctx.request.body);
        await newItem.save();
        ctx.body = newItem;
    })
    .put('/:muscleGroupId', async (ctx) => {
        const { muscleGroupId } = ctx.params;
        const item = await MuscleGroup.findByPk(muscleGroupId);
        await item.update(ctx.request.body);
        ctx.body = item;
    })
    .delete('/:muscleGroupId', async (ctx) => {
        const { muscleGroupId } = ctx.params;
        const item = await MuscleGroup.findByPk(muscleGroupId);
        await item.destroy();
        ctx.body = 'ok';
    });

export default muscleGroupsRouter;

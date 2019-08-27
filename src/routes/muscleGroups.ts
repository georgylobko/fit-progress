import Router from 'koa-router';

import db from '../db';
import MuscleGroup from '../models/MuscleGroup';

const muscleGroupsRouter = new Router({
    prefix: '/muscle_groups'
});

muscleGroupsRouter
    .get('/', async (ctx) => {
        await MuscleGroup.sync();
        ctx.body = await MuscleGroup.findAll();
    })
    .get('/:muscleGroupId', async (ctx) => {
        const id = ctx.params.muscleGroupId;
        ctx.body = `muscle group ${id}`;
    })
    .post('/', async (ctx) => {
        const newItem = await MuscleGroup.create(ctx.request.body);
        await newItem.save();
        ctx.body = newItem;
    });

export default muscleGroupsRouter;

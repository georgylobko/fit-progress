import Router from 'koa-router';
import omit from 'lodash/omit';

import Set from '../models/Set';
import WorkoutSet from '../models/WorkoutSet';

const setsRouter = new Router({
    prefix: '/sets'
});

setsRouter
    .get('/', async (ctx) => {
        ctx.body = await Set.findAll();
    })
    .get('/:setId', async (ctx) => {
        const { setId } = ctx.params;
        const item = await Set.findByPk(setId);
        if (!item) ctx.throw(404);
        ctx.body = item;
    })
    .post('/', async (ctx) => {
        const result = await Set.create(omit(ctx.request.body, 'workout_id'));
        await WorkoutSet.create({
            workout_id: ctx.request.body.workout_id,
            set_id: result.set_id
        });
        ctx.body = result;
    })
    .put('/:setId', async (ctx) => {
        const { setId } = ctx.params;
        const item = await Set.findByPk(setId);
        await item.update(ctx.request.body);
        ctx.body = item;
    })
    .delete('/:setId', async (ctx) => {
        const { setId } = ctx.params;
        const item = await Set.findByPk(setId);
        await item.destroy();
        ctx.body = 'ok';
    });

export default setsRouter;

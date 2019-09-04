import Router from 'koa-router';
import Exercise from '../models/Exercise';

const exercisesRouter = new Router({
    prefix: '/exercises'
});

exercisesRouter
    .get('/', async (ctx) => {
        ctx.body = await Exercise.findAll({
            include: ['muscleGroup']
        });
    })
    .get('/:exerciseId', async (ctx) => {
        const { exerciseId } = ctx.params;
        const item = await Exercise.findByPk(exerciseId);
        if (!item) ctx.throw(404);
        ctx.body = item;
    })
    .post('/', async (ctx) => {
        const newItem = await Exercise.create(ctx.request.body);
        ctx.body = newItem;
    })
    .put('/:exerciseId', async (ctx) => {
        const { exerciseId } = ctx.params;
        const item = await Exercise.findByPk(exerciseId);
        await item.update(ctx.request.body);
        ctx.body = item;
    })
    .delete('/:exerciseId', async (ctx) => {
        const { exerciseId } = ctx.params;
        const item = await Exercise.findByPk(exerciseId);
        await item.destroy();
        ctx.body = 'ok';
    });

export default exercisesRouter;
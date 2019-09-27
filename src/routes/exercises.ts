import Router from 'koa-router';
import Exercise from '../models/Exercise';
import MuscleGroup from '../models/MuscleGroup';

const exercisesRouter = new Router({
    prefix: '/exercises'
});

exercisesRouter
    .get('/', async (ctx) => {
        ctx.body = await Exercise.findAll({ include: [{ model: MuscleGroup, as: 'muscle_group' }] });
    })
    .get('/:exerciseId', async (ctx) => {
        const { exerciseId } = ctx.params;
        const item = await Exercise.findByPk(exerciseId);
        if (!item) ctx.throw(404);
        ctx.body = item;
    })
    .post('/', async (ctx) => {
        console.log(ctx.request.body);
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

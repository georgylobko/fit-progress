import Router from 'koa-router';

const exercisesRouter = new Router({
    prefix: '/exercises'
});

exercisesRouter
    .get('/', async (ctx) => {
        ctx.body = 'exercises list';
    })
    .get('/:exerciseId', async (ctx) => {
        const id = ctx.params.exerciseId;
        ctx.body = `exercise ${id}`;
    });

export default exercisesRouter;

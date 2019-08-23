import Koa from 'koa';
import bodyParser from 'koa-bodyparser';
import Router from 'koa-router';

const app = new Koa();
const router = new Router();

router.get('/', (ctx, next) => {
    ctx.body = { qwe: 'rty' };
});

router.get('/123', (ctx, next) => {
    ctx.body = { qwe: 'rtyqqq' };
});

app.use(bodyParser({
    jsonLimit: '56kb'
}));

app.use(router.routes()).use(router.allowedMethods());

export default app;

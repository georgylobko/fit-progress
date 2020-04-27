import { Context } from 'koa';
import { QueryFailedError } from 'typeorm';

const errorHandler = async (ctx: Context, next: Function) => {
    try {
        await next();
    } catch (error) {
        if (error instanceof QueryFailedError) {
            ctx.status = 400;
            ctx.body = error.message;
        } else if (error.status) {
            ctx.body = error.message;
            ctx.status = error.status;
        } else {
            ctx.body = 'Error 500';
            ctx.status = 500;
        }
    }
};

export default errorHandler;

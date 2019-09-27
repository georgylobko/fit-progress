import { Context } from 'koa';
import { ValidationError } from 'sequelize';

interface IError {
    field: string;
    message: string;
}

const parseValidationErrors = (error: ValidationError): IError[] => {
    console.dir(error);
    return error.errors.map((error) => ({
        field: error.path,
        message: error.message
    }));
};

const errorHandler = async (ctx: Context, next: Function) => {
    try {
        await next();
    } catch (error) {
        if (error.name.startsWith('Sequelize')) {
            ctx.status = 400;
            console.dir(error);
            ctx.body = error;
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

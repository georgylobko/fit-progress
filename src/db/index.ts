import { Sequelize } from 'sequelize';
import config from 'config';

export const sequelize = new Sequelize(config.get('db.database'), config.get('db.username'), config.get('db.password'), {
    host: config.get('db.host'),
    port: config.get('db.port'),
    dialect: 'mysql'
});

export default sequelize;

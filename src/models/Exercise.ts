import { Model, DataTypes } from 'sequelize';

import { sequelize } from '../db';

class Exercise extends Model {
    public id!: number;
    public name!: string;

    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;
}

Exercise.init({
    id: {
        type: DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true,
    },
    name: {
        type: new DataTypes.STRING(128),
        allowNull: false,
    }
}, {
    sequelize,
    tableName: 'exercises',
});

export default Exercise;

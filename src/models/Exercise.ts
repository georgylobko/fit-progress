import { Model, DataTypes } from 'sequelize';

import { sequelize } from '../db';
import MuscleGroup from './MuscleGroup';

class Exercise extends Model {
    public exercise_id!: number;
    public muscle_group_id: number;
    public name: string;
    public description: string;
}

Exercise.init({
    exercise_id: {
        type: DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true,
    },
    name: {
        type: new DataTypes.STRING(255),
        allowNull: false,
    },
    description: {
        type: new DataTypes.STRING(255),
        allowNull: true
    }
}, {
    timestamps: false,
    underscored: true,
    sequelize,
    tableName: 'exercises',
});

export default Exercise;

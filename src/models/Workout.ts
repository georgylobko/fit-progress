import { Model, DataTypes } from 'sequelize';

import { sequelize } from '../db';
import WorkoutSet from './WorkoutSet';

class Workout extends Model {
    public workout_id!: number;
    name: string;
    description: string;
    created_at: string;
    updated_at: string;
}


Workout.init({
    workout_id: {
        type: DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: new DataTypes.STRING(255),
        allowNull: false
    },
    description: {
        type: new DataTypes.STRING(255),
        allowNull: true
    },
    createdAt: { type: DataTypes.DATE, field: 'created_at' },
    updatedAt: { type: DataTypes.DATE, field: 'updated_at' },
}, {
    timestamps: true,
    underscored: true,
    sequelize,
    tableName: 'workouts'
});

export default Workout;

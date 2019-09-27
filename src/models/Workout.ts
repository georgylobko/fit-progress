import { Model, DataTypes } from 'sequelize';

import { sequelize } from '../db';

class Workout extends Model {
    public workout_id!: number;
    name: string;
    description: string;
    date: Date;
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
        allowNull: false
    }
}, {
    underscored: true,
    sequelize,
    tableName: 'workouts'
});

export default Workout;

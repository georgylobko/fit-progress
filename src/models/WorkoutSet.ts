import {DataTypes, Model} from 'sequelize';

import { sequelize } from '../db';

class WorkoutSet extends Model {}

WorkoutSet.init({
    workout_id: {
        type: DataTypes.INTEGER.UNSIGNED,
        primaryKey: true
    },
    set_id: {
        type: DataTypes.INTEGER.UNSIGNED,
        primaryKey: true
    }
}, {
    underscored: true,
    timestamps: false,
    sequelize,
    tableName: 'workout_sets'
});

export default WorkoutSet;

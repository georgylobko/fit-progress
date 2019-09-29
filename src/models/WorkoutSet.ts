import { Model, DataTypes } from 'sequelize';

import { sequelize } from '../db';

class WorkoutSet extends Model {}

WorkoutSet.init({}, {
    underscored: true,
    sequelize,
    tableName: 'workouts_sets'
});

export default WorkoutSet;

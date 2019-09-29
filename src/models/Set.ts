import { Model, DataTypes } from 'sequelize';

import { sequelize } from '../db';
import Exercise from './Exercise';
import WorkoutSet from './WorkoutSet';

class Set extends Model {
    set_id!: number;
    weight: number;
    reps: number;
}

Set.init({
    set_id: {
        type: DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true
    },
    weight: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    reps: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
}, {
    timestamps: false,
    underscored: true,
    sequelize,
    tableName: 'sets'
});

Set.belongsTo(Exercise, { foreignKey: 'exercise_id', as: 'exercises' });
Exercise.hasMany(Set, { foreignKey: 'set_id' });

WorkoutSet.hasMany(Set, { foreignKey: 'set_id' });

export default Set;

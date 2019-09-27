import { Model, DataTypes } from 'sequelize';

import { sequelize } from '../db';
import Exercise from './Exercise';

class MuscleGroup extends Model {
    public muscle_group_id!: number;
    public name: string;
}

MuscleGroup.init({
    muscle_group_id: {
        type: DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: new DataTypes.STRING(128),
        allowNull: false,
        unique: true
    }
}, {
    timestamps: false,
    underscored: true,
    sequelize,
    tableName: 'muscle_groups'
});

MuscleGroup.hasMany(Exercise, { foreignKey: 'muscle_group_id' });

export default MuscleGroup;

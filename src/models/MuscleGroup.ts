import { Model, DataTypes } from 'sequelize';

import { sequelize } from '../db';

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

export default MuscleGroup;

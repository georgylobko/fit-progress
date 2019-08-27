import { Model, DataTypes } from 'sequelize';

import { sequelize } from '../db';

class MuscleGroup extends Model {
    public id!: number;
    public name: string;
}

MuscleGroup.init({
    id: {
        type: DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true,
    },
    name: {
        type: new DataTypes.STRING(128),
        allowNull: false,
        unique: true
    }
}, {
    sequelize,
    tableName: 'muscle_groups'
});

export default MuscleGroup;

import { Model, DataTypes } from 'sequelize';

import { sequelize } from '../db';

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
    underscored: true,
    sequelize,
    tableName: 'sets'
})

export default Set;

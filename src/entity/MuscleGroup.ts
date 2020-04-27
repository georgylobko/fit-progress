import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, OneToMany } from 'typeorm';

import Exercise from './Exercise';

@Entity()
export default class MuscleGroup extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @OneToMany(type => Exercise, exercise => exercise.muscleGroup)
    exercises: Array<Exercise>;
}

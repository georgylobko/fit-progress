import {
	Entity,
	PrimaryGeneratedColumn,
	Column,
	BaseEntity,
	ManyToOne,
	OneToMany,
	CreateDateColumn,
	UpdateDateColumn
} from 'typeorm';

import MuscleGroup from './MuscleGroup';
import WorkoutSet from './WorkoutSet';

@Entity()
export default class Workout extends BaseEntity {
	@PrimaryGeneratedColumn()
	id: number;

	@Column({ nullable: true })
	name: string;

	@Column({ nullable: true })
	description: string;

	@CreateDateColumn()
	createdAt: Date;

	@UpdateDateColumn()
	updatedAt: Date;

	@ManyToOne(type => MuscleGroup)
	muscleGroup: MuscleGroup;

	@OneToMany(
	type => WorkoutSet,
		workoutSet => workoutSet.workout,
	{ nullable: true }
	)
	workoutSets: Array<WorkoutSet>;
}

import {
	Entity,
	PrimaryGeneratedColumn,
	Column,
	BaseEntity,
	ManyToOne,
	CreateDateColumn,
	UpdateDateColumn
} from 'typeorm';

import Exercise from './Exercise';
import Workout from './Workout';

@Entity()
export default class WorkoutSet extends BaseEntity {
	@PrimaryGeneratedColumn()
	id: number;

	@ManyToOne(type => Exercise)
	exercise: Exercise;

	@Column({ nullable: true })
	weight: number;

	@Column()
	reps: number;

	@ManyToOne(type => Workout, workout => workout.workoutSets)
	workout: Workout;

	@CreateDateColumn()
	createdAt: Date;

	@UpdateDateColumn()
	updatedAt: Date;
}

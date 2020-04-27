import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, ManyToOne } from 'typeorm';

import MuscleGroup from './MuscleGroup';

@Entity()
export default class Exercise extends BaseEntity {
	@PrimaryGeneratedColumn()
	id: number;

	@Column()
	name: string;

	@Column({ nullable: true })
	description: string;

	@ManyToOne(type => MuscleGroup, muscleGroup => muscleGroup.exercises)
	muscleGroup: MuscleGroup;
}

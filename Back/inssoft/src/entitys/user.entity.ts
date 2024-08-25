import { Entity, Column } from 'typeorm';
import { BaseEntity } from './base.entity';

@Entity('users')
export class User extends BaseEntity {
	@Column({ type: 'varchar', length: 255, unique: true, nullable: false })
	username: string;

	@Column({ type: 'varchar', length: 255, nullable: false })
	first_name: string;

	@Column({ type: 'varchar', length: 255, nullable: true })
	last_name: string;

	@Column({ type: 'varchar', length: 255, nullable: false, unique: true })
	email: string;

	@Column({ type: 'varchar', length: 255, nullable: true })
	phone: string;

	@Column({ type: 'varchar', length: 255, nullable: false })
	password: string;
}

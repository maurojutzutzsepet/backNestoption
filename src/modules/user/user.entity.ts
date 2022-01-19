import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  ObjectID,
  ObjectIdColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('users')
export class User extends BaseEntity {
  @ObjectIdColumn()
  id: ObjectID;

  @Column({ type: 'string', length: 25, unique: true })
  username: string;

  @Column({ type: 'string' })
  email: string;

  @Column({ type: 'string', nullable: false })
  password: string;

  @Column({ type: 'string' })
  id_detail: ObjectID;

  @Column({ type: 'array' })
  roles: [any];

  @Column({ type: 'boolean' })
  status: boolean;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;
}

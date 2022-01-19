import {
  Column,
  CreateDateColumn,
  Entity,
  ObjectID,
  ObjectIdColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('roles')
export class Role {
  @ObjectIdColumn()
  id: ObjectID;

  @Column({ type: 'string', length: 20, nullable: false })
  name: string;

  @Column({ type: 'string', nullable: false })
  description: string;

  @Column({ type: 'boolean' })
  status: boolean;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;
}

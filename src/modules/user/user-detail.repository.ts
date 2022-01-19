import { EntityRepository, Repository } from 'typeorm';
import { UserDetails } from './user.detail.entity';

@EntityRepository(UserDetails)
export class UserDetailRepository extends Repository<UserDetails> {}

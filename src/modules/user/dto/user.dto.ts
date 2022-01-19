import { IsNotEmpty } from 'class-validator';
import { RoleType } from 'src/modules/role/roletype';
import { UserDetails } from '../user.detail.entity';

export class UserDto {
  @IsNotEmpty()
  id: number;

  @IsNotEmpty()
  username: string;

  @IsNotEmpty()
  email: string;

  @IsNotEmpty()
  roles: RoleType[];

  @IsNotEmpty()
  details: UserDetails;
}

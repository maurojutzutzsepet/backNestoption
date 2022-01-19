import { RoleType } from '../role/roletype';

export interface IJwtPayload {
  id: any;
  username: string;
  email: string;
  roles: RoleType[];
  iat?: Date;
}

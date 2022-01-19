import { IsString, MaxLength } from 'class-validator';

export class UpdateRoleDto {
  @IsString()
  @MaxLength(50, { message: 'Name is not valid' })
  name: string;

  @IsString()
  @MaxLength(100, { message: 'This description is not valid' })
  description: string;
}

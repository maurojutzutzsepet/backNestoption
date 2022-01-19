import { IsString, MaxLength } from 'class-validator';

export class CreateRoleDto {
  @IsString()
  @MaxLength(50, { message: 'The name is not valid' })
  readonly name: string;

  @IsString()
  @MaxLength(100, { message: 'this description not valid' })
  readonly description: string;

  readonly status: boolean = true;
}

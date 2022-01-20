import { ApiProperty } from '@nestjs/swagger';
import { IsString, MaxLength } from 'class-validator';

export class CreateRoleDto {
  @IsString()
  @ApiProperty({ example: 'USER9' })
  @MaxLength(50, { message: 'The name is not valid' })
  readonly name: string;

  @IsString()
  @ApiProperty({ example: 'este es un usuario con nivel 9' })
  @MaxLength(100, { message: 'this description not valid' })
  readonly description: string;

  readonly status: boolean = true;
}

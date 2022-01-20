import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class SignupDto {
  @ApiProperty({ example: 'anderson' })
  @IsNotEmpty()
  @IsString()
  username: string;

  @ApiProperty({ example: 'anderson@option.com' })
  @IsNotEmpty()
  @IsString()
  email: string;

  @ApiProperty({ example: 'user123' })
  @IsNotEmpty()
  @IsString()
  password: string;

  readonly status: boolean = true;
}

import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class SigninDto {
  @ApiProperty({ example: 'Augusto' })
  @IsNotEmpty()
  @IsString()
  username: string;

  @ApiProperty({ example: 'user123' })
  @IsNotEmpty()
  @IsString()
  password: string;
}

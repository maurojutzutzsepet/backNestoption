import { Exclude, Expose } from 'class-transformer';
import { IsString, MaxLength } from 'class-validator';

@Exclude()
export class CreateUserDto {
  @IsString()
  @Expose()
  @MaxLength(20, { message: 'The name is not valid' })
  readonly username: string;

  @IsString()
  @Expose()
  @MaxLength(40, { message: 'The name is not valid' })
  readonly email: string;

  @IsString()
  @MaxLength(20, { message: 'The name is not valid' })
  readonly password: string;
}

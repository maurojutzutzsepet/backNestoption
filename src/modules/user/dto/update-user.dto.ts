import { Exclude, Expose } from 'class-transformer';
import { IsString, MaxLength } from 'class-validator';

@Exclude()
export class UpdateUserDto {
  @IsString()
  @Expose()
  @MaxLength(20, { message: 'The name is not valid' })
  readonly username: string;
}

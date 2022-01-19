import { Exclude, Expose, Type } from 'class-transformer';
import { IsArray, IsString, MaxLength } from 'class-validator';
import { ReadRoleDto } from 'src/modules/role/dto';
import { ReadUserDetailDto } from './read-user-detail.dto';

@Exclude()
export class ReadUserDto {
  @IsString()
  @Expose()
  readonly id: string;

  @IsString()
  @Expose()
  @MaxLength(20, { message: 'The name is not valid' })
  readonly username: string;

  @IsString()
  @Expose()
  @MaxLength(40, { message: 'The name is not valid' })
  readonly email: string;

  @Type((type) => ReadUserDetailDto)
  readonly details: ReadUserDetailDto;

  @IsArray()
  @Expose()
  readonly roles: ReadRoleDto[];
}

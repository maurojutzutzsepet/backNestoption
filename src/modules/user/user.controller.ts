import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  UseGuards,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { Roles } from '../role/decorators/role.decorator';
import { RoleGuard } from '../role/guards/role.guard';
import { RoleType } from '../role/roletype';
import { CreateUserDto, ReadUserDto } from './dto';
import { UserService } from './user.service';

@Controller('users')
export class UserController {
  constructor(private readonly _userService: UserService) {}

  @Get('/:id')
  getUser(@Param() id: number): Promise<ReadUserDto> {
    const user = this._userService.get(id);
    return user;
  }

  @UseGuards(AuthGuard(), RoleGuard)
  @Get()
  @Roles(RoleType.ADMIN, RoleType.GENERAL)
  getUsers(): Promise<ReadUserDto[]> {
    const users = this._userService.getAll();
    return users;
  }

  @Post()
  createUser(@Body() user: CreateUserDto): Promise<ReadUserDto> {
    return this._userService.create(user);
  }

  @Patch('/:id')
  updateUser(@Param() id: number, user: CreateUserDto): Promise<ReadUserDto> {
    const updateUser = this._userService.update(id, user);
    return updateUser;
  }

  @Delete('/:id')
  deleteUser(@Param() id: number): Promise<any> {
    const deleteUser = this._userService.delete(id);
    return deleteUser;
  }

  @Post('setRole/:idUser/:idRole')
  setRole(
    @Param('idUser') idUser: string,
    @Param('idRole') idRole: string,
  ): Promise<boolean> {
    return this._userService.setRole(idUser, idRole);
  }
}

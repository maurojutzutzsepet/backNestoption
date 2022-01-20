import {
  Body,
  Controller,
  Get,
  Param,
  Patch,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CreateRoleDto, ReadRoleDto, UpdateRoleDto } from './dto';
import { Role } from './role.entity';
import { RoleService } from './role.service';
@ApiTags('Role module')
@Controller('roles')
export class RoleController {
  constructor(private readonly _roleService: RoleService) {}

  @Get()
  getAll(): Promise<ReadRoleDto[]> {
    return this._roleService.getAll();
  }

  @Post()
  @UsePipes(new ValidationPipe({ transform: true }))
  create(@Body() role: CreateRoleDto): Promise<ReadRoleDto> {
    return this._roleService.create(role);
  }

  @Get('/:id')
  get(@Param('id') id: string): Promise<ReadRoleDto> {
    return this._roleService.get(id);
  }

  @Patch('/:id')
  updateRole(
    @Param('id') id: string,
    @Body() role: UpdateRoleDto,
  ): Promise<ReadRoleDto> {
    return this._roleService.update(id, role);
  }
}

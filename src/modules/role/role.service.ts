import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { plainToClass } from 'class-transformer';
import { CreateRoleDto, ReadRoleDto, UpdateRoleDto } from './dto';
import { Role } from './role.entity';
import { RoleRepository } from './role.repository';

@Injectable()
export class RoleService {
  constructor(
    @InjectRepository(RoleRepository)
    private readonly _roleRepository: RoleRepository,
  ) {}

  async get(id: string): Promise<ReadRoleDto> {
    const role = await this._roleRepository.findOne(id, {
      where: { status: true },
    });

    if (!role) throw new NotFoundException('Role does not exist');
    return plainToClass(ReadRoleDto, role);
  }

  async getAll(): Promise<ReadRoleDto[]> {
    const roles = await this._roleRepository.find({
      where: { status: true },
    });

    return roles.map((role) => plainToClass(ReadRoleDto, role));
  }

  async create(role: Partial<CreateRoleDto>): Promise<ReadRoleDto> {
    const createRole = await this._roleRepository.save(role);
    return plainToClass(ReadRoleDto, createRole);
  }

  async update(id: string, role: UpdateRoleDto): Promise<ReadRoleDto> {
    const foundRole: Role = await this._roleRepository.findOne(id, {
      where: { status: true },
    });

    if (!foundRole) throw new NotFoundException('Does role not exist');

    foundRole.name = role.name;
    foundRole.description = role.description;

    const updateRole: Role = await this._roleRepository.save(foundRole);

    return plainToClass(ReadRoleDto, updateRole);
  }
}

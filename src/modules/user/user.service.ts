import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { plainToClass } from 'class-transformer';
import { RoleRepository } from '../role/role.repository';
import { CreateUserDto, ReadUserDto, UpdateUserDto } from './dto';
import { UserDto } from './dto/user.dto';
import { User } from './user.entity';
import { UserRepository } from './user.repository';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserRepository)
    private readonly _userRepository: UserRepository,
    @InjectRepository(RoleRepository)
    private readonly _roleRepository: RoleRepository,
  ) {}

  async get(id: number): Promise<ReadUserDto> {
    if (!id) throw new BadRequestException('id must be send');

    const user = await this._userRepository.findOne(id, {
      where: { status: 'ACTIVE' },
    });

    if (!user) throw new NotFoundException('User does not exist');

    return plainToClass(ReadUserDto, user);
  }

  async getAll(): Promise<ReadUserDto[]> {
    const users = await this._userRepository.find({
      where: { status: true },
    });

    return users.map((user) => plainToClass(ReadUserDto, user));
  }

  async create(user: CreateUserDto): Promise<ReadUserDto> {
    const savedUser = await this._userRepository.save(user);
    return plainToClass(ReadUserDto, savedUser);
  }

  async update(id: number, user: UpdateUserDto): Promise<ReadUserDto> {
    const updateUser = await this._userRepository.update(id, user);
    return plainToClass(ReadUserDto, updateUser);
  }

  async delete(id: number): Promise<any> {
    const userExist = await this._userRepository.findOne(id, {
      where: { status: 'ACTIVE' },
    });

    if (!userExist) throw new NotFoundException();

    await this._userRepository.update(id, { status: true });
  }

  async setRole(idUser: string, idRole: string): Promise<boolean> {
    const userExist = await this._userRepository.findOne(idUser, {
      where: { status: true },
    });

    if (!userExist) throw new NotFoundException('User no exist');

    const roleExist = await this._roleRepository.findOne(idRole, {
      where: { status: true },
    });

    if (!roleExist) throw new NotFoundException('Role does not exist');

    userExist.roles.push(roleExist);

    await this._userRepository.save(userExist);
    return true;
  }
}

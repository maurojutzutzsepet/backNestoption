import { genSalt, hash } from 'bcryptjs';
import { EntityRepository, getConnection, Repository } from 'typeorm';
import { Role } from '../role/role.entity';
import { RoleRepository } from '../role/role.repository';
import { RoleType } from '../role/roletype';
import { UserDetails } from '../user/user.detail.entity';
import { User } from '../user/user.entity';
import { SignupDto } from './dto';

@EntityRepository(User)
export class AuthRepository extends Repository<User> {
  async signup(signupDto: SignupDto) {
    const { email, username, password, status } = signupDto;

    const user = new User();
    user.username = username;
    user.email = email;
    user.status = status;

    const detail = new UserDetails();
    detail.name = '';
    detail.lastname = '';

    await detail.save();

    user.id_detail = detail.id;

    const roleRepository: RoleRepository = await getConnection().getRepository(
      Role,
    );

    const defaultRole: Role = await roleRepository.findOne({
      where: { name: RoleType.GENERAL },
    });

    user.roles = [defaultRole];

    const salt = await genSalt();

    user.password = await hash(password, salt);

    await user.save();
  }
}

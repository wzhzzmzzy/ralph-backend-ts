import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { CreateUserDto } from '../dto/database.dto';
import { User } from '../entities';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>
  ) {}

  create(createUserDto: CreateUserDto) {
    const user = new User();
    Object.keys(createUserDto).forEach(key => {
      user[key] = createUserDto[key];
    });
    // 默认开五槽
    user.slot = 5;
    return this.userRepository.save(user);
  }

  find(id: number): Promise<User> {
    return this.userRepository.findOne(id);
  }

  findAll(): Promise<User[]> {
    return this.userRepository.find();
  }


}

import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Model } from 'mongoose';
import { User } from './entities/user.entity';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class UsersService {
  
  constructor(@InjectModel(User.name) private userSchema: Model<User>) {}

  create(createUserDto: CreateUserDto) {
    return this.userSchema.create(createUserDto);
  }

  findAll() {
    return this.userSchema.find();
  }

  findOne(name: string) {
    return this.userSchema.findOne({ name });
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}

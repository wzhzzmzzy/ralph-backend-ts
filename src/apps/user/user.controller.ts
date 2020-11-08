import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { UserService } from './user.service';
import { User } from '../entities';
import { FindOneParam } from '../dto/general.dto';
import { CreateUserDto } from '../dto/database.dto';

@ApiTags('用户')
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get(':id')
  @ApiOperation({ summary: '查找串' })
  find(@Param() params: FindOneParam): Promise<User> {
    return this.userService.find(params.id);
  }

  @Post()
  @ApiOperation({ summary: '新建串' })
  @ApiResponse({ status: 201, description: 'Created.' })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  create(@Body() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
  }
}

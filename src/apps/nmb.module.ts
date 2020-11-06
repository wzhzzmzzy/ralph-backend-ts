import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { UserController } from './user/user.controller';
import { UserService } from './user/user.service';
import { SegmentController } from './segment/segment.controller';
import { SegmentService } from './segment/segment.service';
import { User, Segment } from './entities';

@Module({
  imports: [TypeOrmModule.forFeature([User, Segment])],
  controllers: [UserController, SegmentController],
  providers: [UserService, SegmentService],
})
export class NmbModule {}

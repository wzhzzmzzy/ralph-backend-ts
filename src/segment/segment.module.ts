import { Module } from '@nestjs/common';
import { SegmentController } from './segment.controller';
import { SegmentService } from './segment.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Segment } from './entities/segment.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Segment])],
  controllers: [SegmentController],
  providers: [SegmentService],
})
export class SegmentModule {}

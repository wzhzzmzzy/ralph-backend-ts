import { Controller, Get, Post, Param, Body } from '@nestjs/common';
import {
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { SegmentService } from './segment.service';
import { CreateSegmentDto, FindOneParam } from './dto/segment.dto';
import { Segment } from './entities/segment.entity';

@ApiTags('串')
@Controller('segment')
export class SegmentController {
  constructor(private readonly segmentService: SegmentService) {}

  @Get(':id')
  @ApiOperation({ summary: '查找串' })
  find(@Param() params: FindOneParam): Promise<Segment> {
    return this.segmentService.find(params.id);
  }

  @Post()
  @ApiOperation({ summary: '新建串' })
  @ApiResponse({ status: 201, description: 'Created.' })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  create(@Body() createSegmentDto: CreateSegmentDto) {
    return this.segmentService.create(createSegmentDto);
  }
}

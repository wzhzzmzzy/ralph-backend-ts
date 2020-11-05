import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateSegmentDto } from './dto/segment.dto';
import { Segment } from './entities/segment.entity';
import { Repository } from 'typeorm';

@Injectable()
export class SegmentService {
  constructor(
    @InjectRepository(Segment)
    private readonly segmentRepo: Repository<Segment>
  ) {}

  create(createSegmentDto: CreateSegmentDto) {
    const segment = new Segment();
    Object.keys(createSegmentDto).forEach(key => {
      segment[key] = createSegmentDto[key];
    })
    return this.segmentRepo.save(segment);
  }

  find(id: number): Promise<Segment> {
    return this.segmentRepo.findOne(id);
  }
}

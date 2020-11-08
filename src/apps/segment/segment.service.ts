import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { CreateSegmentDto } from '../dto/database.dto';
import { Segment } from '../entities';

@Injectable()
export class SegmentService {
  constructor(
    @InjectRepository(Segment)
    private readonly segmentRepository: Repository<Segment>
  ) {}

  create(createSegmentDto: CreateSegmentDto) {
    const segment = new Segment();
    Object.keys(createSegmentDto).forEach(key => {
      segment[key] = createSegmentDto[key];
    })
    return this.segmentRepository.save(segment);
  }

  find(id: number): Promise<Segment> {
    return this.segmentRepository.findOne(id);
  }

  findAll(): Promise<Segment[]> {
    return this.segmentRepository.find();
  }
}

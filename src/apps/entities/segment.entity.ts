import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn, ManyToOne,
} from 'typeorm';
import { User } from './user.entity';

export enum SegmentStatus {
  SAGE = 'sage',
  DELETED = 'deleted',
  NORMAL = 'normal',
  FIXED = 'fixed'
}

@Entity()
export class Segment {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(type => User, user => user.id, {
    cascade: true
  })
  @JoinTable()
  user: User;

  @Column('varchar', {
    length: 7,
    comment: '发串饼干'
  })
  cookie: string;

  @Column('varchar', {
    length: 20,
    comment: '发串频道'
  })
  channel: string;

  @Column('text', {
    default: '',
    nullable: true
  })
  image: string;

  @Column({
    type: 'enum',
    enum: SegmentStatus,
    default: SegmentStatus.NORMAL,
    comment: '串的状态'
  })
  status: SegmentStatus;

  @Column('text', {
    default: '',
    nullable: true,
    comment: '提示信息，集中串等'
  })
  warning: string;

  @Column('timestamp')
  @CreateDateColumn()
  createTime: Date;

  @Column('timestamp', {
    nullable: true
  })
  @UpdateDateColumn()
  updateTime: Date;

  @Column('timestamp', {
    nullable: true
  })
  sageTime: Date;

  @Column('timestamp', {
    nullable: true
  })
  deletedTime: Date;
}

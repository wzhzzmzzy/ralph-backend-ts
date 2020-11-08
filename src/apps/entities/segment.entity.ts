import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { User, Reply } from './';

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

  @ManyToOne(() => User, user => user.id, {
    cascade: true
  })
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

  @OneToMany(() => Reply, reply => reply.segment)
  replies: Reply

  @Column({
    type: 'enum',
    enum: SegmentStatus,
    default: SegmentStatus.NORMAL,
    comment: '串的状态'
  })
  status: SegmentStatus;

  @Column('text', {
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

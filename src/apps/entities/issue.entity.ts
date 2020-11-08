import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { User } from './user.entity';

export enum IssueType {
  TIP_OFF = 'tipOff', // 举报
  ISSUE = 'issue'    // 建议
}

@Entity()
export class Issue {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: 'enum',
    enum: IssueType,
    default: IssueType.ISSUE,
    comment: '反馈类型'
  })
  issueType: IssueType;

  @Column('text')
  reason: string;

  @ManyToOne(() => User)
  @JoinColumn()
  user: User;

  @Column('int', {
    nullable: true
  })
  segmentId: number;
}

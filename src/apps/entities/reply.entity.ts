import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { User } from './user.entity';
import { Segment } from './segment.entity';

@Entity()
export class Reply {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('text', {
    nullable: true
  })
  title: string;

  @Column('text')
  text: string;

  @Column('text', {
    nullable: false
  })
  image: string

  @Column('varchar', {
    length: 7,
    comment: '发串饼干'
  })
  cookie: string;

  @Column('bool', {
    default: false,
    comment: '是否已删除'
  })
  deleted: boolean;

  @ManyToOne(() => User)
  @JoinColumn()
  user: User;

  @ManyToOne(() => Segment, segment => segment.replies)
  @JoinColumn()
  segment: Segment;
}

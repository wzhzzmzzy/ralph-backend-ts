import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Segment {
  @PrimaryGeneratedColumn() id: number;

  @Column() cookie: string;

  @Column() channel: string;

  @Column({ default: '' }) title: string;

  @Column() text: string;

  @Column({ default: '' }) image: string;

  @Column({ default: false }) sage: boolean;

  @Column({ default: false }) deleted: boolean;

  @Column({ default: '' }) warning: string;

  @Column() createTime: number;

  @Column() updateTime: number;

  @Column() sageTime: number;

  @Column() deletedTime: number;
}

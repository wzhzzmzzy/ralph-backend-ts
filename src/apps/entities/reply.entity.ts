import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Reply {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()

}

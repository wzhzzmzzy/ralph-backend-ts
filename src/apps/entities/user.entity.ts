import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from 'typeorm';

export enum UserStatus {
  NORMAL = 'normal',
  ADMIN = 'admin',
  ANONYMOUS = 'anonymous'
}

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('simple-array', {
    nullable: true
  })
  cookies: string[];

  @Column('int', {
    default: 5
  })
  slot: number;

  @Column('varchar', {
    length: 320,
    unique: true
  })
  email: string;

  @Column('varchar', {
    length: 32
  })
  password: string;

  @Column('timestamp')
  @CreateDateColumn()
  createTime: Date;

  @Column({
    type: 'enum',
    enum: UserStatus,
    default: UserStatus.NORMAL,
    comment: '用户状态'
  })
  statue: UserStatus;
}

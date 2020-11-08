import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import DevelopmentConfig from './config/config.development';
import ProductConfig from './config/config.development';
import { TypeOrmModule } from '@nestjs/typeorm';
import { NmbModule } from './apps/nmb.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: [
        '.env',
        '.env.development'
      ],
      load: [
        process.env.NODE_ENV === 'development'
          ? DevelopmentConfig
          : ProductConfig
      ]
    }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: '59.110.156.20',
      port: 3306,
      username: process.env.MYSQL_USERNAME,
      password: process.env.MYSQL_PASSWORD,
      database: 'nmb-test',
      entities: ['dist/**/*.entity{.ts,.js}'],
      synchronize: true
    }),
    NmbModule,
  ],
})
export class AppModule {}

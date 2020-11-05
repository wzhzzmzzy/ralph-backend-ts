import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { SegmentModule } from './segment/segment.module';
import DevelopmentConfig from './config/config.development';
import ProductConfig from './config/config.development';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot(),
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
    SegmentModule,
  ],
})
export class AppModule {}

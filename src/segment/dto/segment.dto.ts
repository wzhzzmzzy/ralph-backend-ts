import { ApiProperty } from '@nestjs/swagger';
import { IsNumberString, IsString, IsUrl } from 'class-validator';

export class CreateSegmentDto {
  @ApiProperty({
    description: '发串饼干',
  })
  @IsString()
  readonly cookie: string;

  @ApiProperty({
    description: '发串频道',
  })
  @IsString()
  readonly channel: string;

  @ApiProperty({
    description: '串标题，可选',
    required: false
  })
  @IsString()
  readonly title?: string;

  @ApiProperty({
    description: '串内容'
  })
  @IsString()
  readonly text: string;

  @ApiProperty({
    description: '图片URL'
  })
  @IsUrl()
  readonly image: string;
}

export class FindOneParam {
  @IsNumberString()
  id: number
}

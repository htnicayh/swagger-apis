import { ApiProperty } from '@nestjs/swagger';

export class BookEntity {
  @ApiProperty({ example: 'Lord of the flies', description: 'Name of book' })
  name: string

  @ApiProperty({ example: 'Novel', description: 'Type of book' })
  type: string

  @ApiProperty({ example: 'William Golding', description: 'Arthur of book' })
  arthur: string
}
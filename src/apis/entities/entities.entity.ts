import { ApiProperty } from '@nestjs/swagger';

export class Entity {
  @ApiProperty({ example: 'cats', description: 'Name of entity' })
  name: string

  @ApiProperty({ example: 1, description: 'The age of the entity' })
  age: number

  @ApiProperty({
    example: 'Maine Coon',
    description: 'The breed of the Entity',
  })
  breed: string
}
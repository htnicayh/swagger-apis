import { Injectable } from '@nestjs/common';
import { CreateEntityDto } from './dtos/create-entity.dto';
import { Entity } from './entities/entities.entity';

@Injectable()
export class ApisService {
  private readonly entities: Entity[] = [];

  create(entity: CreateEntityDto): Entity {
    this.entities.push(entity)
    return entity
  }

  findOne(id: number): Entity {
    return this.entities[id];
  }
}
import { Body, Controller, Get, Param, Post } from '@nestjs/common'
import {
    ApiBearerAuth,
    ApiOperation,
    ApiResponse,
    ApiTags,
} from '@nestjs/swagger'
import { ApisService } from './api.service'
import { CreateEntityDto } from './dtos/create-entity.dto'
import { Entity } from './entities/entities.entity'

@ApiBearerAuth()
@ApiTags('apis')
@Controller('apis')
export class ApisController {
  constructor(private readonly apisService: ApisService) {}

  @Post()
  @ApiOperation({ summary: 'Create entity' })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  async create(@Body() createEntityDto: CreateEntityDto): Promise<Entity> {
    return this.apisService.create(createEntityDto)
  }

  @Get(':id')
  @ApiResponse({
    status: 200,
    description: 'The found record',
    type: Entity,
  })
  findOne(@Param('id') id: string): Entity {
    return this.apisService.findOne(+id)
  }
}
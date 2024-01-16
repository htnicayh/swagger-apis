import { Module } from '@nestjs/common';
import { ApisController } from './api.controller';
import { ApisService } from './api.service';

@Module({
  controllers: [ApisController],
  providers: [ApisService],
})
export class ApisModule {}
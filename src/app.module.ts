import { Module } from '@nestjs/common';
import { ApisModule } from './apis/api.module';

@Module({
  imports: [ApisModule]
})
export class AppModule {}

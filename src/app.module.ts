import { Module } from '@nestjs/common';
import { BookModule } from './apis/book.module';

@Module({
  imports: [BookModule]
})
export class AppModule {}

import { Module } from '@nestjs/common';
import { NyNameService } from './ny-name.service';

@Module({
  providers: [NyNameService]
})
export class NyNameModule {}

import { Module } from '@nestjs/common';
import { SpaceTimeFactoryModule } from './modules/space-time-factory/space-time-factory.module';

@Module({
  imports: [SpaceTimeFactoryModule.registerAsync()],
})
export class AppModule {}

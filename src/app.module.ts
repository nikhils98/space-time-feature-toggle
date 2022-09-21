import { Module } from '@nestjs/common';
import { SpaceTimeFactoryModule } from './modules/space-time-factory/space-time-factory.module';
import { SpaceTimeNonFactoryModule } from './modules/space-time-non-factory/space-time-non-factory.module';

@Module({
  imports: [SpaceTimeFactoryModule.registerAsync(), SpaceTimeNonFactoryModule],
})
export class AppModule {}

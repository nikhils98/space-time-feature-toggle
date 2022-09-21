import { Module } from '@nestjs/common';
import { FeatureToggleModule } from '../feature-toggle/feature-toggle.module';
import { SpaceTimeNonFactoryController } from './space-time-non-factory.controller';
import {
  BaseSpaceTimeService,
  DefaultSpaceTimeService,
} from './space-time-non-factory.service';

@Module({
  imports: [FeatureToggleModule],
  providers: [
    {
      provide: BaseSpaceTimeService,
      useClass: DefaultSpaceTimeService,
    },
  ],
  controllers: [SpaceTimeNonFactoryController],
})
export class SpaceTimeNonFactoryModule {}

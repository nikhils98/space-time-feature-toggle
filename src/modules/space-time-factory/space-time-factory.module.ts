import { DynamicModule, FactoryProvider, Module, Scope } from '@nestjs/common';
import { FeatureToggleModule } from '../feature-toggle/feature-toggle.module';
import { BaseFeatureToggleService } from '../feature-toggle/feature-toggle.service';
import { SpaceTimeFactoryController } from './space-time-factory.controller';
import {
  EinsteiniumService,
  NewtonianService,
  BaseSpaceTimeService as BaseSpaceTimeService,
} from './space-time-factory.service';

@Module({})
export class SpaceTimeFactoryModule {
  static registerAsync(): DynamicModule {
    const spaceTimeFactoryService: FactoryProvider = {
      provide: BaseSpaceTimeService,
      useFactory: async (featureToggle: BaseFeatureToggleService) => {
        const isEinsteiniumTheoryEnabled =
          await featureToggle.isEinsteiniumTheoryEnabled();

        if (isEinsteiniumTheoryEnabled) {
          return new EinsteiniumService();
        }

        return new NewtonianService();
      },
      inject: [BaseFeatureToggleService],
      scope: Scope.REQUEST,
    };

    return {
      module: SpaceTimeFactoryModule,
      imports: [FeatureToggleModule],
      providers: [spaceTimeFactoryService],
      controllers: [SpaceTimeFactoryController],
    };
  }
}

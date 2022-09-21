import { DynamicModule, FactoryProvider, Module, Scope } from '@nestjs/common';
import { FeatureToggleModule } from '../feature-toggle/feature-toggle.module';
import { BaseFeatureToggleService } from '../feature-toggle/feature-toggle.service';
import { EinsteiniumService, NewtonianService, SpaceTimeService } from './space-time-factory.service';

@Module({})
export class SpaceTimeFactoryModule {
  static registerAsync(): DynamicModule {
    const spaceTimeFactoryService: FactoryProvider = {
      provide: SpaceTimeService,
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
      controllers: [],
    }
  }
}
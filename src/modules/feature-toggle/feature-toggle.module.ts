import { Module } from '@nestjs/common';
import { BaseFeatureToggleService, DefaultFeatureToggleService } from './feature-toggle.service';

@Module({
	providers: [
		{
			provide: BaseFeatureToggleService,
			useClass: DefaultFeatureToggleService
		}
	],
	exports: [BaseFeatureToggleService]
})
export class FeatureToggleModule { }

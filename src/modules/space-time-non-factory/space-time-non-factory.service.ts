import { Injectable } from '@nestjs/common';
import { BaseFeatureToggleService } from '../feature-toggle/feature-toggle.service';

@Injectable()
export abstract class BaseSpaceTimeService {
  abstract getSpaceTimeInfo(): Promise<string>
}

@Injectable()
export class DefaultSpaceTimeService extends BaseSpaceTimeService {

  constructor(private readonly featureToggle: BaseFeatureToggleService) {
    super();
  }

  async getSpaceTimeInfo(): Promise<string> {
    const isEinsteiniumTheoryEnabled = await this.featureToggle.isEinsteiniumTheoryEnabled()

    if(isEinsteiniumTheoryEnabled) {
      return this.getEinsteiniumSpaceTime()
    }

    return this.getNewtonianSpaceTime()
  }

  getEinsteiniumSpaceTime(): string {
    return "Both space and time are relative"
  }

  getNewtonianSpaceTime(): string {
    return "Space is relative but time is absolute"
  }
}

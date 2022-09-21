import { Injectable } from '@nestjs/common';

@Injectable()
export abstract class BaseFeatureToggleService {
  abstract isEinsteiniumTheoryEnabled(): Promise<boolean>;
}

@Injectable()
export class DefaultFeatureToggleService extends BaseFeatureToggleService {
  isEinsteiniumTheoryEnabled(): Promise<boolean> {
    return new Promise((resolve) => {
      const rand = Math.random();
      resolve(rand >= 0.5 ? true : false);
    });
  }
}

import { Injectable } from '@nestjs/common';

@Injectable()
export abstract class BaseSpaceTimeService {
  abstract getSpaceTimeInfo(): string;
}

@Injectable()
export class EinsteiniumService extends BaseSpaceTimeService {
  getSpaceTimeInfo(): string {
    return 'Both space and time are relative';
  }
}

@Injectable()
export class NewtonianService extends BaseSpaceTimeService {
  getSpaceTimeInfo(): string {
    return 'Space is relative but time is absolute';
  }
}

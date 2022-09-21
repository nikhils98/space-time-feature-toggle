import { Injectable } from '@nestjs/common';

@Injectable()
export abstract class SpaceTimeService {
  abstract getSpaceTimeInfo(): string
}

@Injectable()
export class NewtonianService extends SpaceTimeService {
  getSpaceTimeInfo(): string {
    return "Space is relative but time is absolute"
  }
}

@Injectable()
export class EinsteiniumService extends SpaceTimeService {
  getSpaceTimeInfo(): string {
    return "Both space and time are relative"
  }
}

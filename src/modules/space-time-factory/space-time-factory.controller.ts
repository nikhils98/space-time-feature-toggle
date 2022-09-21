import { Controller, Get } from '@nestjs/common';
import { BaseSpaceTimeService } from './space-time-factory.service';

@Controller('space-time-factory')
export class SpaceTimeFactoryController {
  constructor(private readonly spaceTimeService: BaseSpaceTimeService) {}

  @Get()
  getSpaceTimeInfo(): string {
    return this.spaceTimeService.getSpaceTimeInfo();
  }
}

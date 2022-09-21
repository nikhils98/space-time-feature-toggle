import { Controller, Get } from '@nestjs/common';
import { SpaceTimeService } from './space-time-factory.service';

@Controller('space-time-factory')
export class SpaceTimeFactoryController {

  constructor(private readonly spaceTimeService: SpaceTimeService) {}

  @Get()
  getSpaceTimeInfo(): string {
    return this.spaceTimeService.getSpaceTimeInfo()
  }
}

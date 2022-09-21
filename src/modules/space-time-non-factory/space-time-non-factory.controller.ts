import { Controller, Get } from '@nestjs/common';
import { BaseSpaceTimeService } from './space-time-non-factory.service';

@Controller('space-time-non-factory')
export class SpaceTimeNonFactoryController {
  constructor(private readonly spaceTimeService: BaseSpaceTimeService) {}

  @Get()
  async getSpaceTimeInfo(): Promise<string> {
    return this.spaceTimeService.getSpaceTimeInfo();
  }
}

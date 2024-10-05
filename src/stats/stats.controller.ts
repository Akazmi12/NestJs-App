import { Controller, Get, UseGuards } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { AuthGuard } from 'src/auth/auth.guard';

@ApiTags('Statistics')
@Controller('stats')
export class StatsController {
  @UseGuards(AuthGuard)
  @Get('barchart')
  getBarChart() {
    return true;
  }

  @UseGuards(AuthGuard)
  @Get('radialchart')
  getRadialChart() {
    return true;
  }

  @UseGuards(AuthGuard)
  @Get('linechart')
  getLineChart() {
    return true;
  }

  @UseGuards(AuthGuard)
  @Get('spiralchart')
  getSpiralChart() {
    return true;
  }
}

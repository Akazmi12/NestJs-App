import { Controller, Get, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { AuthGuard } from 'src/auth/auth.guard';

@ApiTags('Statistics')
@Controller('stats')
export class StatsController {
  @UseGuards(AuthGuard)
  @Get('barchart')
  @ApiBearerAuth()
  getBarChart() {
    return true;
  }

  @UseGuards(AuthGuard)
  @Get('radialchart')
  @ApiBearerAuth()
  getRadialChart() {
    return true;
  }

  @UseGuards(AuthGuard)
  @Get('linechart')
  @ApiBearerAuth()
  getLineChart() {
    return true;
  }

  @UseGuards(AuthGuard)
  @Get('spiralchart')
  @ApiBearerAuth()
  getSpiralChart() {
    return true;
  }
}

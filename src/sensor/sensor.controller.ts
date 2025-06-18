import {
  Controller,
  Post,
  Body,
  ValidationPipe,
  Get,
  Param,
  Put,
  Delete,
} from '@nestjs/common';
import { SensorService } from './sensor.service';
import { CreateSensorDto, UpdateSensorDto } from './dto/sensor';
@Controller('api/sensor')
export class SensorController {
  constructor(private readonly SensorService: SensorService) {}
  @Post('create')
  async createMerchant(
    @Body(new ValidationPipe({ whitelist: true }))
    CreateSensorDto: CreateSensorDto,
  ) {
    return this.SensorService.create(CreateSensorDto);
  }

  @Get('getAll')
  async getAllMerchants() {
    return this.SensorService.getAll();
  }

  @Get('getById/:id')
  async getMerchantById(@Param('id') id: string) {
    return this.SensorService.getById(id);
  }

  @Put('update/:id')
  async updateMerchant(
    @Param('id') id: string,
    @Body(new ValidationPipe({ whitelist: true }))
    UpdateSensorDto: UpdateSensorDto,
  ) {
    return this.SensorService.update(id, UpdateSensorDto);
  }

  @Delete('delete/:id')
  async deleteMerchant(@Param('id') id: string) {
    return this.SensorService.delete(id);
  }
}

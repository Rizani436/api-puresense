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
import { PuresenseService } from './puresense.service';
import { SensorService } from '../sensor/sensor.service';
import { CreatePureSenseDto, UpdatePureSenseDto } from './dto/puresense';
import { UpdateSensorDto } from '../sensor/dto/sensor';
import { get } from 'http';

@Controller('api/puresense')
export class PuresenseController {
  constructor(
    private readonly PuresenseService: PuresenseService,
    private readonly SensorService: SensorService,
  ) {}
  @Post('create')
  async createMerchant(
    @Body(new ValidationPipe({ whitelist: true }))
    CreatePureSenseDto: CreatePureSenseDto,
  ) {
    return this.PuresenseService.create(CreatePureSenseDto);
  }

  @Get('getAll')
  async getAllMerchants() {
    return this.PuresenseService.getAll();
  }

  @Get('getById/:id')
  async getMerchantById(@Param('id') id: string) {
    return this.PuresenseService.getById(id);
  }

  @Put('update/:id')
  async updateMerchant(
    @Param('id') id: string,
    @Body(new ValidationPipe({ whitelist: true }))
    UpdatePureSenseDto: UpdatePureSenseDto,
  ) {
    return this.PuresenseService.update(id, UpdatePureSenseDto);
  }

  @Delete('delete/:id')
  async deleteMerchant(@Param('id') id: string) {
    return this.PuresenseService.delete(id);
  }
  @Get('getStatus')
  async getStatus(@Param('id') id: string) {
    return this.PuresenseService.getStatus(id);
  }
  @Put('turnOn/:id')
  async turnOn(@Param('id') id: string) {
    return this.PuresenseService.turnOn(id);
  }
  @Put('turnOff/:id')
  async turnOff(@Param('id') id: string) {
    return this.PuresenseService.turnOff(id);
  }

  @Get('getSensorById/:id')
  async getSensorById(@Param('id') id: string) {
    return this.SensorService.getByPuresenseId(id);
  }

  @Put('updateSensorById/:id')
  async updateSensor(
    @Param('id') id: string,
    @Body(new ValidationPipe({ whitelist: true }))
    updateSensorDto: UpdateSensorDto,
  ) {
    return this.SensorService.updateByPuresenseId(id, updateSensorDto);
  }
}

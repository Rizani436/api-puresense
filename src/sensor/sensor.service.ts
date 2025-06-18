import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { CreateSensorDto, UpdateSensorDto } from './dto/sensor';

@Injectable()
export class SensorService {
  private prisma = new PrismaClient();

  async create(CreateSensorDto: CreateSensorDto) {
    const existingPuresense = await this.prisma.puresense.findUnique({
      where: {
        id: CreateSensorDto.puresenseId,
      },
    });
    if (existingPuresense) {
      throw new HttpException(
        'puresense already exists',
        HttpStatus.BAD_REQUEST,
      );
    }

    return this.prisma.sensor.create({
      data: {
        id: CreateSensorDto.id,
        puresenseId: CreateSensorDto.puresenseId,
        voltage: CreateSensorDto.voltage,
        analogReadValue: CreateSensorDto.analogReadValue,
        digitalReadValue: CreateSensorDto.digitalReadValue,
        NTU: CreateSensorDto.NTU,
        statusKejernihan: CreateSensorDto.statusKejernihan,
      },
    });
  }

  async getAll() {
    const sensor = await this.prisma.sensor.findMany();
    if (sensor.length == 0) {
      throw new HttpException('No sensors found', HttpStatus.NOT_FOUND);
    }
    return sensor;
  }

  async getById(id: string) {
    const sensor = await this.prisma.sensor.findUnique({
      where: {
        id: id,
      },
    });
    if (!sensor) {
      throw new HttpException('sensor not found', HttpStatus.NOT_FOUND);
    }
    return sensor;
  }
  async getByPuresenseId(puresenseId: string) {
    const sensor = await this.prisma.sensor.findFirst({
      where: {
        puresenseId: puresenseId,
      },
    });
    if (!sensor) {
      throw new HttpException('sensor not found', HttpStatus.NOT_FOUND);
    }
    return sensor;
  }

  async update(id: string, UpdateSensorDto: UpdateSensorDto) {
    const sensor = await this.prisma.sensor.findUnique({
      where: {
        id: id,
      },
    });
    if (!sensor) {
      throw new HttpException('sensor not found', HttpStatus.NOT_FOUND);
    }
    return this.prisma.sensor.update({
      where: { id: id },
      data: UpdateSensorDto,
    });
  }
  async updateByPuresenseId(id: string, UpdateSensorDto: UpdateSensorDto) {
    const sensor = await this.prisma.sensor.findFirst({
      where: {
        puresenseId: id,
      },
    });
    if (!sensor) {
      throw new HttpException('sensor not found', HttpStatus.NOT_FOUND);
    }
    return this.prisma.sensor.update({
      where: { id: sensor.id },
      data: UpdateSensorDto,
    });
  }

  async delete(id: string) {
    const sensor = await this.prisma.sensor.findUnique({
      where: {
        id: id,
      },
    });
    if (!sensor) {
      throw new HttpException('sensor not found', HttpStatus.NOT_FOUND);
    }

    return this.prisma.sensor.delete({
      where: {
        id: id,
      },
    });
  }
}

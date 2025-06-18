import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { CreatePureSenseDto, UpdatePureSenseDto } from './dto/puresense';

@Injectable()
export class PuresenseService {
private prisma = new PrismaClient();

  async create(CreatePureSenseDto: CreatePureSenseDto) {

    return this.prisma.puresense.create({
      data: {
        id: CreatePureSenseDto.id,
        status: CreatePureSenseDto.status,
      },
    });
  }

  async getAll() {
    const puresense = await this.prisma.puresense.findMany();
    if (puresense.length == 0) {
      throw new HttpException('No puresenses found', HttpStatus.NOT_FOUND);
    }
    return puresense;
  }

  async getById(id: string) {
    const puresense = await this.prisma.puresense.findUnique({
      where: {
        id: id,
      },
    });
    if (!puresense) {
      throw new HttpException('puresense not found', HttpStatus.NOT_FOUND);
    }
    return puresense;
  }

  async update(id: string, UpdatePureSenseDto: UpdatePureSenseDto) {
    const puresense = await this.prisma.puresense.findUnique({
      where: {
        id: id,
      },
    });
    if (!puresense) {
      throw new HttpException('puresense not found', HttpStatus.NOT_FOUND);
    }
    return this.prisma.puresense.update({
      where: { id: id },
      data: {
        status: UpdatePureSenseDto.status,
      },
    });
  }

  async delete(id: string) {
    const puresense = await this.prisma.puresense.findUnique({
      where: {
        id: id,
      },
    });
    if (!puresense) {
      throw new HttpException('puresense not found', HttpStatus.NOT_FOUND);
    }

    return this.prisma.puresense.delete({
      where: {
        id: id,
      },
    });
  }
    async getStatus(id: string) {
    const puresense = await this.prisma.puresense.findUnique({
      where: {
        id: id,
      },
    });
    if (!puresense) {
        throw new HttpException('puresense not found', HttpStatus.NOT_FOUND);
    }
    return puresense.status;
  }


    async turnOn(id: string) {
    const puresense = await this.prisma.puresense.findUnique({
      where: {
        id: id,
      },
    });
    if (!puresense) {
        throw new HttpException('puresense not found', HttpStatus.NOT_FOUND);
    }
    return this.prisma.puresense.update({
      where: { id: id },
      data: {
        status: 'ON',
      },
    });
    }
    async turnOff(id: string) {
    const puresense = await this.prisma.puresense.findUnique({
      where: {
        id: id,
      },
    });
    if (!puresense) {
        throw new HttpException('puresense not found', HttpStatus.NOT_FOUND);
    }
    return this.prisma.puresense.update({
      where: { id: id },
      data: {
        status: 'OFF',
      },
    });
    }

}

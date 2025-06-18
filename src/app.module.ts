import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SensorController } from './sensor/sensor.controller';
import { PuresenseController } from './puresense/puresense.controller';
import { PuresenseService } from './puresense/puresense.service';
import { SensorService } from './sensor/sensor.service';

@Module({
  imports: [],
  controllers: [AppController, SensorController, PuresenseController],
  providers: [AppService, PuresenseService, SensorService],
})
export class AppModule {}

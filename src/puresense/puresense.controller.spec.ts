import { Test, TestingModule } from '@nestjs/testing';
import { PuresenseController } from './puresense.controller';

describe('PuresenseController', () => {
  let controller: PuresenseController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PuresenseController],
    }).compile();

    controller = module.get<PuresenseController>(PuresenseController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

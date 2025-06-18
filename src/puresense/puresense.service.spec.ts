import { Test, TestingModule } from '@nestjs/testing';
import { PuresenseService } from './puresense.service';

describe('PuresenseService', () => {
  let service: PuresenseService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PuresenseService],
    }).compile();

    service = module.get<PuresenseService>(PuresenseService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

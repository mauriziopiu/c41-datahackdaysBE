import { Test, TestingModule } from '@nestjs/testing';
import { Photob64stringService } from './photob64string.service';

describe('Photob64stringService', () => {
  let service: Photob64stringService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [Photob64stringService],
    }).compile();

    service = module.get<Photob64stringService>(Photob64stringService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

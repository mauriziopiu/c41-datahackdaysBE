import { Test, TestingModule } from '@nestjs/testing';
import { Photob64stringController } from './photob64string.controller';
import { Photob64stringService } from './photob64string.service';

describe('Photob64stringController', () => {
  let controller: Photob64stringController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [Photob64stringController],
      providers: [Photob64stringService],
    }).compile();

    controller = module.get<Photob64stringController>(Photob64stringController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

import { Test, TestingModule } from '@nestjs/testing';
import { NyNameService } from './ny-name.service';

describe('NyNameService', () => {
  let service: NyNameService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [NyNameService],
    }).compile();

    service = module.get<NyNameService>(NyNameService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

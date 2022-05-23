import { TestBed } from '@angular/core/testing';

import { MapperRiotApiService } from './mapper-riot-api.service';

describe('MapperRiotApiService', () => {
  let service: MapperRiotApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MapperRiotApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

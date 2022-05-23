import { TestBed } from '@angular/core/testing';

import { ApiRiotService } from './api-riot.service';

describe('ApiRiotService', () => {
  let service: ApiRiotService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiRiotService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

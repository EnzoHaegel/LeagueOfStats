import { TestBed } from '@angular/core/testing';

import { RiotPicturesService } from './riot-pictures.service';

describe('RiotPicturesService', () => {
  let service: RiotPicturesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RiotPicturesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { DurumService } from './durum.service';

describe('DurumService', () => {
  let service: DurumService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DurumService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { CoomonService } from './coomon.service';

describe('CoomonService', () => {
  let service: CoomonService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CoomonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

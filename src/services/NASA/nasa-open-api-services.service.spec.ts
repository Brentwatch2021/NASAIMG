import { TestBed } from '@angular/core/testing';

import { NASAOPENAPISERVICESService } from './nasa-open-api-services.service';

describe('NASAOPENAPISERVICESService', () => {
  let service: NASAOPENAPISERVICESService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NASAOPENAPISERVICESService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

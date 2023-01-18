import { TestBed } from '@angular/core/testing';

import { OpenApisService } from './open-apis.service';

describe('OpenApisService', () => {
  let service: OpenApisService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OpenApisService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

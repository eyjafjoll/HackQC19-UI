import { TestBed } from '@angular/core/testing';

import { ApiCallService } from './api-call.service';

describe('ApiCallService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ApiCallService = TestBed.get(ApiCallService);
    expect(service).toBeTruthy();
  });
});

// Licensed to the Eyjafjoll under one or more agreements.
// Eyjafjoll licenses this file to you under the MIT license.
// See the LICENSE file in the project root for more information.

import { TestBed } from '@angular/core/testing';

import { ApiCallService } from './api-call.service';

describe('ApiCallService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ApiCallService = TestBed.get(ApiCallService);
    expect(service).toBeTruthy();
  });
});

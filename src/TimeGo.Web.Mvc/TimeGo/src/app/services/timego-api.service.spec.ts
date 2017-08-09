import { TestBed, inject } from '@angular/core/testing';

import { TimegoApiService } from './timego-api.service';

describe('TimegoApiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TimegoApiService]
    });
  });

  it('should be created', inject([TimegoApiService], (service: TimegoApiService) => {
    expect(service).toBeTruthy();
  }));
});

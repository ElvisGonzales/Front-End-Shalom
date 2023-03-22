import { TestBed } from '@angular/core/testing';

import { ServicehomeService } from './servicehome.service';

describe('ServicehomeService', () => {
  let service: ServicehomeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicehomeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

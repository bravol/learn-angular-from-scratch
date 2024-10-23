import { TestBed } from '@angular/core/testing';

import { ServationService } from './servation.service';

describe('ServationService', () => {
  let service: ServationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

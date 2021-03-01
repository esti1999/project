import { TestBed } from '@angular/core/testing';

import { AssistedService } from './assisted.service';

describe('AssistedService', () => {
  let service: AssistedService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AssistedService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

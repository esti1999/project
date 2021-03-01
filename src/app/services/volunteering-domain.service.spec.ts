import { TestBed } from '@angular/core/testing';

import { VolunteeringDomainService } from './volunteering-domain.service';

describe('VolunteeringDomainService', () => {
  let service: VolunteeringDomainService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VolunteeringDomainService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

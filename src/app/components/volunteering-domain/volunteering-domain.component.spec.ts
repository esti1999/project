import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VolunteeringDomainComponent } from './volunteering-domain.component';

describe('VolunteeringDomainComponent', () => {
  let component: VolunteeringDomainComponent;
  let fixture: ComponentFixture<VolunteeringDomainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VolunteeringDomainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VolunteeringDomainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

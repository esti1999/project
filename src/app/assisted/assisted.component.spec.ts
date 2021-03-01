import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssistedComponent } from './assisted.component';

describe('AssistedComponent', () => {
  let component: AssistedComponent;
  let fixture: ComponentFixture<AssistedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssistedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssistedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

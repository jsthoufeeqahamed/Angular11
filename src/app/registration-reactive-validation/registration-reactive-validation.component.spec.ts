import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrationReactiveValidationComponent } from './registration-reactive-validation.component';

describe('RegistrationReactiveValidationComponent', () => {
  let component: RegistrationReactiveValidationComponent;
  let fixture: ComponentFixture<RegistrationReactiveValidationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistrationReactiveValidationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrationReactiveValidationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarwasherRegistartionComponent } from './carwasher-registartion.component';

describe('CarwasherRegistartionComponent', () => {
  let component: CarwasherRegistartionComponent;
  let fixture: ComponentFixture<CarwasherRegistartionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarwasherRegistartionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarwasherRegistartionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

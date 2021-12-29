import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarwashersComponent } from './carwashers.component';

describe('CarwashersComponent', () => {
  let component: CarwashersComponent;
  let fixture: ComponentFixture<CarwashersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarwashersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarwashersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

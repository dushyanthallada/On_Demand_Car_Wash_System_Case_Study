import { TestBed } from '@angular/core/testing';

import { CarwashersService } from './carwashers.service';

describe('CarwashersService', () => {
  let service: CarwashersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CarwashersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

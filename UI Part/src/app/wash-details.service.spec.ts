import { TestBed } from '@angular/core/testing';

import { WashDetailsService } from './wash-details.service';

describe('WashDetailsService', () => {
  let service: WashDetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WashDetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { ImjioService } from './imjio.service';

describe('ImjioService', () => {
  let service: ImjioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ImjioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

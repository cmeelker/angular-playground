import { TestBed } from '@angular/core/testing';

import { HttpErrorService } from './error.service';

describe('ErrorService', () => {
  let service: HttpErrorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HttpErrorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

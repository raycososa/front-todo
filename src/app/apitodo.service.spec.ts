import { TestBed } from '@angular/core/testing';

import { ApitodoService } from './apitodo.service';

describe('ApitodoService', () => {
  let service: ApitodoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApitodoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

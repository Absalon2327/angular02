import { TestBed } from '@angular/core/testing';

import { FutboolService } from './futbool.service';

describe('FutboolService', () => {
  let service: FutboolService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FutboolService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

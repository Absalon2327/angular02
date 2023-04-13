import { TestBed } from '@angular/core/testing';

import { MascotasserviceService } from './mascotasservice.service';

describe('MascotasserviceService', () => {
  let service: MascotasserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MascotasserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

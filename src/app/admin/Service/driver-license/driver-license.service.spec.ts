import { TestBed } from '@angular/core/testing';

import { DriverLicenseService } from './driver-license.service';

describe('DriverLicenseService', () => {
  let service: DriverLicenseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DriverLicenseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

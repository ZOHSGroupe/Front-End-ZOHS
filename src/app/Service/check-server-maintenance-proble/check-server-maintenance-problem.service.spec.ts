import { TestBed } from '@angular/core/testing';

import { CheckServerMaintenanceProblemService } from './check-server-maintenance-problem/check-server-maintenance-problem.service';

describe('CheckServerMaintenanceProblemService', () => {
  let service: CheckServerMaintenanceProblemService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CheckServerMaintenanceProblemService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

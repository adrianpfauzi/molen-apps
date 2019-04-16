import { TestBed } from '@angular/core/testing';

import { MolenMainService } from './molen-main.service';

describe('MolenMainService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MolenMainService = TestBed.get(MolenMainService);
    expect(service).toBeTruthy();
  });
});

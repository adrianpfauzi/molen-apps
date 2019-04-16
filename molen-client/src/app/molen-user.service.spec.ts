import { TestBed } from '@angular/core/testing';

import { MolenUserService } from './molen-user.service';

describe('MolenUserService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MolenUserService = TestBed.get(MolenUserService);
    expect(service).toBeTruthy();
  });
});

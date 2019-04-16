import { TestBed } from '@angular/core/testing';

import { MolenLapakService } from './molen-lapak.service';

describe('MolenLapakService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MolenLapakService = TestBed.get(MolenLapakService);
    expect(service).toBeTruthy();
  });
});

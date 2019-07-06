import { TestBed } from '@angular/core/testing';

import { AutoSearchUserService } from './auto-search-user.service';

describe('AutoSearchUserService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AutoSearchUserService = TestBed.get(AutoSearchUserService);
    expect(service).toBeTruthy();
  });
});

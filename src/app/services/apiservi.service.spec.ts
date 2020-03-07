import { TestBed } from '@angular/core/testing';

import { ApiserviService } from './apiservi.service';

describe('ApiserviService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ApiserviService = TestBed.get(ApiserviService);
    expect(service).toBeTruthy();
  });
});

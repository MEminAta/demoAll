import { TestBed } from '@angular/core/testing';

import { DevexService } from './devex.service';

describe('DevexService', () => {
  let service: DevexService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DevexService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

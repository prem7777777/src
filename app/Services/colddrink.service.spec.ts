import { TestBed } from '@angular/core/testing';

import { ColddrinkService } from './colddrink.service';

describe('ColddrinkService', () => {
  let service: ColddrinkService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ColddrinkService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

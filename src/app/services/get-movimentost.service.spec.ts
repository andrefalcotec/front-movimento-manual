import { TestBed } from '@angular/core/testing';

import { GetMovimentostService } from './get-movimentost.service';

describe('GetMovimentostService', () => {
  let service: GetMovimentostService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetMovimentostService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

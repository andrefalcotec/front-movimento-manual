import { TestBed } from '@angular/core/testing';

import { GetProdutosCosifService } from './get-produtos-cosif.service';

describe('GetProdutosCosifService', () => {
  let service: GetProdutosCosifService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetProdutosCosifService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

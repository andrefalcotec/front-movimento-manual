import { TestBed } from '@angular/core/testing';

import { GetProdutosService } from './get-produtos.service';

describe('GetProdutosService', () => {
  let service: GetProdutosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetProdutosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

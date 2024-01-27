import { TestBed } from '@angular/core/testing';

import { TabelaProdutosService } from './tabela-produtos.service';

describe('TabelaProdutosService', () => {
  let service: TabelaProdutosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TabelaProdutosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

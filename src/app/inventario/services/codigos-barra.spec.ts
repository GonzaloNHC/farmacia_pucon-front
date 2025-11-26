import { TestBed } from '@angular/core/testing';

import { CodigosBarraService } from '../services/codigos-barra.service';

describe('CodigosBarra', () => {
  let service: CodigosBarraService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CodigosBarraService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

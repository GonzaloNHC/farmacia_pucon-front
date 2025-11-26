import { TestBed } from '@angular/core/testing';

import { EtiquetasService } from './etiquetas.service';

describe('Etiquetas', () => {
  let service: EtiquetasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EtiquetasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

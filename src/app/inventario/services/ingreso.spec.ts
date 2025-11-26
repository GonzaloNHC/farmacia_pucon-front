import { TestBed } from '@angular/core/testing';

import { Ingreso } from './ingreso.service';

describe('Ingreso', () => {
  let service: Ingreso;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Ingreso);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

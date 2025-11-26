import { TestBed } from '@angular/core/testing';
import { HttpInterceptorFn } from '@angular/common/http';

import { mockInventarioInterceptor } from './mock-inventario-interceptor';

describe('mockInventarioInterceptor', () => {
  const interceptor: HttpInterceptorFn = (req, next) => 
    TestBed.runInInjectionContext(() => mockInventarioInterceptor(req, next));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(interceptor).toBeTruthy();
  });
});

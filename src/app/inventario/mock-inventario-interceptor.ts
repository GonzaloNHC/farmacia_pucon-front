import { Injectable } from '@angular/core';
import {
  HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse
} from '@angular/common/http';
import { Observable, of } from 'rxjs';

// Simple in-memory mocks
const MEDS = [
  { id: 1, nombreComercial: 'Paracetamol 500mg', nombreGenerico: 'Paracetamol', activo: true },
  { id: 2, nombreComercial: 'Ibuprofeno 400mg', nombreGenerico: 'Ibuprofeno', activo: true }
];

const LOTES = [
  { id: 1, medicamentoId: 1, codigoLote: 'L-PA-001', fechaVencimiento: '2026-06-01', stockInicial: 100, cantidadDisponible: 100 },
  { id: 2, medicamentoId: 1, codigoLote: 'L-PA-002', fechaVencimiento: '2026-12-01', stockInicial: 50, cantidadDisponible: 50 },
  { id: 3, medicamentoId: 2, codigoLote: 'L-IB-001', fechaVencimiento: '2025-11-01', stockInicial: 200, cantidadDisponible: 200 }
];

const PROVEEDORES = [
  { id: 1, rut: '12.345.678-9', nombre: 'Proveedor A', contacto: 'Juan', email: 'a@prov.cl', activo: true }
];

@Injectable()
export class MockInventarioInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // GET /api/medicamentos
    if (req.url.endsWith('/api/medicamentos') && req.method === 'GET') {
      return of(new HttpResponse({ status: 200, body: MEDS }));
    }
    if (req.url.match(/\/api\/medicamentos\/\d+$/) && req.method === 'GET') {
      const id = Number(req.url.split('/').pop());
      const m = MEDS.find(x => x.id === id);
      return of(new HttpResponse({ status: 200, body: m }));
    }

    // GET /api/lotes
    if (req.url.endsWith('/api/lotes') && req.method === 'GET') {
      return of(new HttpResponse({ status: 200, body: LOTES }));
    }
    if (req.url.match(/\/api\/lotes\/medicamento\/\d+$/) && req.method === 'GET') {
      const id = Number(req.url.split('/').pop());
      const list = LOTES.filter(l => l.medicamentoId === id);
      return of(new HttpResponse({ status: 200, body: list }));
    }

    // proveedores
    if (req.url.endsWith('/api/proveedores') && req.method === 'GET') {
      return of(new HttpResponse({ status: 200, body: PROVEEDORES }));
    }

    // passthrough other requests to real backend
    return next.handle(req);
  }
}

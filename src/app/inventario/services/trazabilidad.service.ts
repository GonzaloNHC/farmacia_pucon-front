import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { EventoTrazabilidad } from '../models/trazabilidad.model';

@Injectable({ providedIn: 'root' })
export class TrazabilidadService {
  private base = '/api/trazabilidad';
  constructor(private http: HttpClient) {}

  byProducto(productoId: number): Observable<EventoTrazabilidad[]> {
    return this.http.get<EventoTrazabilidad[]>(`${this.base}/producto/${productoId}`);
  }
  byLote(loteId: number) { return this.http.get<EventoTrazabilidad[]>(`${this.base}/lote/${loteId}`); }
  completa(id: number) { return this.http.get<EventoTrazabilidad[]>(`${this.base}/completa/${id}`); }
}

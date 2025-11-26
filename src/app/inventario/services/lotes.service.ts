import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Lote } from '../models/lote.model';

@Injectable({ providedIn: 'root' })
export class LotesService {
  private base = '/api/lotes';
  constructor(private http: HttpClient) {}

  list(): Observable<Lote[]> { return this.http.get<Lote[]>(this.base); }
  listByMedicamento(medicamentoId: number) { return this.http.get<Lote[]>(`${this.base}/medicamento/${medicamentoId}`); }
  get(id: number) { return this.http.get<Lote>(`${this.base}/${id}`); }
  create(payload: Partial<Lote>) { return this.http.post<Lote>(this.base, payload); }
  updateStock(id: number, payload: any) { return this.http.put<Lote>(`${this.base}/${id}/stock`, payload); }
  deactivate(id: number) { return this.http.delete(`${this.base}/${id}`); }
}

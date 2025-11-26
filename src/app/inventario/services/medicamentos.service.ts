import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Medicamento } from '../models/medicamento.model';

@Injectable({ providedIn: 'root' })
export class MedicamentosService {
  private base = '/api/medicamentos';
  constructor(private http: HttpClient) {}

  list(): Observable<Medicamento[]> { return this.http.get<Medicamento[]>(this.base); }
  get(id: number) { return this.http.get<Medicamento>(`${this.base}/${id}`); }
  create(payload: Partial<Medicamento>) { return this.http.post<Medicamento>(this.base, payload); }
  update(id: number, payload: Partial<Medicamento>) { return this.http.put<Medicamento>(`${this.base}/${id}`, payload); }
  delete(id: number) { return this.http.delete(`${this.base}/${id}`); }
}

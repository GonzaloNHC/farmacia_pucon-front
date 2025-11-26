import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Proveedor } from '../models/proveedor.model';

@Injectable({ providedIn: 'root' })
export class ProveedoresService {
  private base = '/api/proveedores';
  constructor(private http: HttpClient) {}

  list(): Observable<Proveedor[]> { return this.http.get<Proveedor[]>(this.base); }
  get(id: number) { return this.http.get<Proveedor>(`${this.base}/${id}`); }
  create(payload: Partial<Proveedor>) { return this.http.post<Proveedor>(this.base, payload); }
  update(id: number, payload: Partial<Proveedor>) { return this.http.put<Proveedor>(`${this.base}/${id}`, payload); }
  toggleActive(id: number, active: boolean) { return this.http.put(`${this.base}/${id}/activo`, { activo: active }); }
}

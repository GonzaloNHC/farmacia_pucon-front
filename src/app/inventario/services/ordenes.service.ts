import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { OrdenCompra } from '../models/orden-compra.model';

@Injectable({ providedIn: 'root' })
export class OrdenesService {
  private base = '/api/orden-compra';
  constructor(private http: HttpClient) {}

  list(): Observable<OrdenCompra[]> { return this.http.get<OrdenCompra[]>(this.base); }
  get(id: number) { return this.http.get<OrdenCompra>(`${this.base}/${id}`); }
  create(payload: Partial<OrdenCompra>) { return this.http.post<OrdenCompra>(this.base, payload); }
  receive(id: number) { return this.http.put(`${this.base}/${id}/recepcionar`, {}); }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class EtiquetasService {
  private base = '/api/productos';
  constructor(private http: HttpClient) {}

  getEtiqueta(productoId: number) {
    return this.http.get(`${this.base}/${productoId}/etiqueta`, { responseType: 'blob' });
  }
  getEtiquetaPorLote(loteId: number) {
    return this.http.get(`/api/lotes/${loteId}/etiqueta`, { responseType: 'blob' });
  }
}
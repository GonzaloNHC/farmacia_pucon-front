import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class CodigosBarraService {
  private base = '/api/productos';
  constructor(private http: HttpClient) {}

  getBarcode(productId: number) { return this.http.get(`${this.base}/${productId}/barcode`); }
  generateForProduct(productId: number) { return this.http.post(`${this.base}/${productId}/barcode`, {}); }
}

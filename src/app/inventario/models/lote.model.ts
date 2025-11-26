export interface Lote {
  id: number;
  medicamentoId: number;
  codigoLote: string;
  fechaVencimiento?: string; // ISO date
  stockInicial: number;
  cantidadDisponible: number;
  stockMinimo?: number;
  precioCompra?: number;
  precioVenta?: number;
  activo?: boolean;
}

export interface DetalleOrden {
  medicamentoId: number;
  cantidad: number;
  codigoLote?: string;
  fechaVencimiento?: string;
  precioCompra?: number;
}

export interface OrdenCompra {
  id: number;
  proveedorId?: number;
  fechaSolicitud?: string;
  estado?: 'PENDIENTE' | 'RECIBIDA';
  observacion?: string;
  detalles?: DetalleOrden[];
}

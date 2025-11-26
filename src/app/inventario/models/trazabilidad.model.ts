export type TipoEvento = 'INGRESO' | 'VENTA' | 'DEVOLUCION' | 'FRACCIONAMIENTO' | 'RECEPCION_ORDEN';

export interface EventoTrazabilidad {
  id: number;
  productoId?: number;
  loteId?: number;
  tipo: TipoEvento;
  descripcion?: string;
  fecha: string; // ISO
  usuario?: string;
  referenciaId?: number;
}

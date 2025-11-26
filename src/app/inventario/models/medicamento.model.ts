export interface Medicamento {
  id: number;
  nombreComercial: string;
  nombreGenerico?: string;
  presentacion?: string;
  dosificacion?: string;
  activo?: boolean;
  barcodes?: string[];
}
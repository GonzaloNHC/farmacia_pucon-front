import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-inventario-list',
  imports: [CommonModule, RouterModule],
  templateUrl: './inventario-list.html'
})
export class InventarioListComponent {

  loading = false; 
  error?: string;

 
 medicamentos = [
  { id: 1, nombreComercial: 'Paracetamol 500mg', stock: 120 },
  { id: 2, nombreComercial: 'Ibuprofeno 400mg', stock: 80 },
  { id: 3, nombreComercial: 'Amoxicilina 500mg', stock: 45 },
  { id: 4, nombreComercial: 'Omeprazol 20mg', stock: 200 },
  { id: 5, nombreComercial: 'Losartan 50mg', stock: 150 },
  { id: 6, nombreComercial: 'Metformina 850mg', stock: 95 },
  { id: 7, nombreComercial: 'Atorvastatina 20mg', stock: 60 },
  { id: 8, nombreComercial: 'Clorfenamina 4mg', stock: 210 },
  { id: 9, nombreComercial: 'Diclofenaco 50mg', stock: 130 },
  { id: 10, nombreComercial: 'Enalapril 10mg', stock: 70 },
  { id: 11, nombreComercial: 'Vitamina C 1g', stock: 300 },
  { id: 12, nombreComercial: 'Salbutamol Inhalador', stock: 40 },
  { id: 13, nombreComercial: 'Levotiroxina 100mcg', stock: 88 },
  { id: 14, nombreComercial: 'Insulina NPH', stock: 22 },
  { id: 15, nombreComercial: 'Omniprazol 40mg', stock: 110 },
  { id: 16, nombreComercial: 'Loratadina 10mg', stock: 180 },
  { id: 17, nombreComercial: 'Aspirina 100mg', stock: 260 },
  { id: 18, nombreComercial: 'Cefalexina 500mg', stock: 54 },
  { id: 19, nombreComercial: 'Ketorolaco 10mg', stock: 36 },
  { id: 20, nombreComercial: 'Doxiciclina 100mg', stock: 41 }
];

}

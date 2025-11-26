import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, ReactiveFormsModule, FormGroup } from '@angular/forms';

@Component({
  standalone: true,
  selector: 'app-devolucion-form',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './devolucion-form.html'
})
export class DevolucionForm {

  form!: FormGroup;

  constructor(private fb: FormBuilder) {

    this.form = this.fb.group({
      ventaId: [null],
      productoId: [null],
      loteId: [null],
      cantidad: [1],
      motivo: ['']
    });
  }

  submit() {
    console.log('Simular devolución', this.form.value);
    alert('Devolución registrada (simulada)');
  }
}

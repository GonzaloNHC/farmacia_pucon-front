import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, ReactiveFormsModule, FormGroup } from '@angular/forms';
import { MedicamentosService } from '../../services/medicamentos.service';

@Component({
  standalone: true,
  selector: 'app-crear-ingreso',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './crear-ingreso.html'
})
export class CrearIngreso {

  form!: FormGroup;
  medicamentos: any[] = [];

  constructor(
    private fb: FormBuilder,
    private meds: MedicamentosService
  ) {

    // ahora sí puedes usar this.fb
    this.form = this.fb.group({
      observacion: [''],
      detalles: this.fb.control([
        { medicamentoId: null, cantidad: 0, fechaVencimiento: null, codigoLote: '' }
      ])
    });

    // carga de medicamentos
    this.meds.list().subscribe(d => this.medicamentos = d);
  }

  submit() {
    const body = {
      observacion: this.form.value.observacion,
      detalles: this.form.value.detalles
    };
    console.log('Simular registrar ingreso', body);
    alert('Ingreso registrado (simulado)');
  }
}

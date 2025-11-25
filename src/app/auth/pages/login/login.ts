import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Auth } from '../../../auth/auth';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './login.html',
  styleUrls: ['./login.css']
})
export class Login {

  private fb = inject(FormBuilder);
  private auth = inject(Auth);
  private router = inject(Router);

  // ===== FORMULARIO =====
  form = this.fb.group({
    username: ['', Validators.required],
    password: ['', Validators.required],
    remember: [false] 
  });

  // Estado para mostrar error
  errorMessage: string | null = null;

  // ===== LOGIN =====
  submit() {
    this.errorMessage = null;

    if (this.form.invalid) {
      this.errorMessage = 'Debes completar todos los campos.';
      return;
    }

    const credentials = this.form.value as { username: string; password: string };

    this.auth.login(credentials).subscribe({
      next: (response) => {
        // Guardamos sesión
        this.auth.saveSession(response);

        // Redirigimos al dashboard (luego puedes cambiarlo)
        this.router.navigate(['/dashboard']);
      },
      error: () => {
        this.errorMessage = 'Credenciales incorrectas.';
      }
    });
  }
}

import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login';

// Más adelante importaremos Dashboard, Usuarios, Roles, etc.

export const routes: Routes = [

  // Login
  { path: 'login', component: LoginComponent },

  // Ruta raíz → redirige a login
  { path: '', redirectTo: 'login', pathMatch: 'full' },

  // Si alguien escribe algo que no existe
  { path: '**', redirectTo: 'login' }
];

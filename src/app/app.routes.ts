import { Routes } from '@angular/router';
import { authGuard } from './auth/auth-guard';

export const routes: Routes = [

  // ===== LOGIN =====
  {
    path: 'login',
    loadComponent: () =>
      import('./auth/pages/login/login')
        .then(m => m.Login)
  },

  // ===== DASHBOARD PROTEGIDO =====
  {
    path: 'dashboard',
    canActivate: [authGuard],
    loadComponent: () =>
      import('./pages/dashboard/dashboard')
        .then(m => m.Dashboard)
  },

  // ===== DEFAULT =====
  { path: '', redirectTo: 'login', pathMatch: 'full' },

  // ===== WILDCARD =====
  { path: '**', redirectTo: 'login' }
];

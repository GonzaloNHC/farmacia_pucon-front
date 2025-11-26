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

  // ===== INVENTARIO (PROTEGIDO TAMBIÉN) =====
  {
    path: 'inventario',
    canActivate: [authGuard],
    children: [
      {
        path: '',
        loadComponent: () =>
          import('./inventario/pages/inventario-list')
            .then(m => m.InventarioListComponent)
      },
      {
        path: 'lotes/:id',
        loadComponent: () =>
          import('./inventario/pages/lotes/lotes-list')
            .then(m => m.LotesList)
      },
      {
        path: 'ingreso/crear',
        loadComponent: () =>
          import('./inventario/pages/ingresos/crear-ingreso')
            .then(m => m.CrearIngreso)
      },
      {
        path: 'devoluciones/crear',
        loadComponent: () =>
          import('./inventario/pages/devoluciones/devolucion-form')
            .then(m => m.DevolucionForm)
      }
    ]
  },

  // ===== DEFAULT =====
  { path: '', redirectTo: 'login', pathMatch: 'full' },

  // ===== WILDCARD =====
  { path: '**', redirectTo: 'login' }
];

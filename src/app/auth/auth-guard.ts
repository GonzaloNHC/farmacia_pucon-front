import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { Auth } from './auth';

export const authGuard: CanActivateFn = (route, state) => {

  const auth = inject(Auth);
  const router = inject(Router);

  // 1. Validar si está logueado
  if (!auth.isLogged()) {
    router.navigate(['/login']);
    return false;
  }

  // 2. Validar permisos si la ruta tiene data
  const requiredPermission = route.data?.['permiso'];

  if (requiredPermission) {
    if (!auth.hasPermission(requiredPermission)) {
      // ⚠ No tiene permiso → redirigimos a página no autorizada o home
      router.navigate(['/no-autorizado']);
      return false;
    }
  }

  return true;
};

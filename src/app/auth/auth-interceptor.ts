import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { Auth } from './auth';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  
  const auth = inject(Auth);
  const token = auth.getToken();

  // Si NO hay token → seguir sin modificar
  if (!token) {
    return next(req);
  }

  // Clonar request agregando el header Authorization
  const authReq = req.clone({
    setHeaders: {
      Authorization: `Bearer ${token}`
    }
  });

  return next(authReq);
};

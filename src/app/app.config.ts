import {
  ApplicationConfig,
  provideBrowserGlobalErrorListeners,
  provideZonelessChangeDetection
} from '@angular/core';

import { provideRouter } from '@angular/router';
import { routes } from './app.routes';

import {
  provideClientHydration,
  withEventReplay
} from '@angular/platform-browser';

import {
  provideHttpClient,
  withInterceptors
} from '@angular/common/http';

import { authInterceptor } from './auth/auth-interceptor';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection(),

    // Rutas
    provideRouter(routes),

    // SSR / Hydration
    provideClientHydration(withEventReplay()),

    // HTTP + Interceptores
    provideHttpClient(
      withInterceptors([authInterceptor])
    )
  ]
};

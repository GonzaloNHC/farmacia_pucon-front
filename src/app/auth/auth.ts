import { isPlatformBrowser } from '@angular/common';
import { inject, PLATFORM_ID } from '@angular/core';
import { Injectable, signal, computed } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

interface LoginRequest {
  username: string;
  password: string;
}

interface LoginResponse {
  token: string;
  username: string;
  authorities: string[];
}

@Injectable({
  providedIn: 'root'
})
export class Auth {

  private API_URL = 'http://localhost:8082/api/auth/login';

  // Saber si estamos en navegador o SSR
  private platformId = inject(PLATFORM_ID);

  private isBrowser(): boolean {
    return isPlatformBrowser(this.platformId);
  }

  // ===== Función segura para parsear JSON =====
  private safeParseAuthorities(value: string | null): string[] {
    try {
      if (!value) return [];
      const parsed = JSON.parse(value);
      return Array.isArray(parsed) ? parsed : [];
    } catch {
      return [];
    }
  }

  // ===== Signals =====
  private _token = signal<string | null>(
    this.isBrowser() ? localStorage.getItem('token') : null
  );

  private _username = signal<string | null>(
    this.isBrowser() ? localStorage.getItem('username') : null
  );

  private _authorities = signal<string[]>(
    this.isBrowser()
      ? this.safeParseAuthorities(localStorage.getItem('authorities'))
      : []
  );

  // Computed
  isLogged = computed(() => !!this._token());
  userAuthorities = computed(() => this._authorities());
  username = computed(() => this._username());

  constructor(private http: HttpClient, private router: Router) {}

  // ==========================
  // LOGIN
  // ==========================
  login(credentials: LoginRequest) {
    return this.http.post<LoginResponse>(this.API_URL, credentials);
  }

  // ==========================
  // GUARDAR SESIÓN
  // ==========================
  saveSession(data: LoginResponse) {
    this._token.set(data.token);
    this._username.set(data.username);
    this._authorities.set(data.authorities);

    if (this.isBrowser()) {
      localStorage.setItem('token', data.token);
      localStorage.setItem('username', data.username);
      localStorage.setItem('authorities', JSON.stringify(data.authorities));
    }
  }

  // ==========================
  // LOGOUT
  // ==========================
  logout() {
    this._token.set(null);
    this._username.set(null);
    this._authorities.set([]);

    if (this.isBrowser()) {
      localStorage.removeItem('token');
      localStorage.removeItem('username');
      localStorage.removeItem('authorities');
    }

    this.router.navigate(['/login']);
  }

  // ==========================
  // OBTENER TOKEN
  // ==========================
  getToken(): string | null {
    return this._token();
  }

  // ==========================
  // VALIDAR PERMISO
  // ==========================
  hasPermission(permiso: string): boolean {
    return this._authorities().includes(permiso);
  }
}

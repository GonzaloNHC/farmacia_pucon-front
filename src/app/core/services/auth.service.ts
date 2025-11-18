import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { UserAuth } from '../../core/models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl = 'http://localhost:8080/api/auth'; // <- tu backend

  constructor(private http: HttpClient) {}

  login(username: string, password: string): Observable<UserAuth> {
    return this.http.post<UserAuth>(`${this.apiUrl}/login`, { username, password })
      .pipe(
        tap(user => {
          localStorage.setItem('auth', JSON.stringify(user));
        })
      );
  }

  logout() {
    localStorage.removeItem('auth');
  }

  getAuth(): UserAuth | null {
    const item = localStorage.getItem('auth');
    return item ? JSON.parse(item) : null;
  }

  isLogged(): boolean {
    return this.getAuth() !== null;
  }
}

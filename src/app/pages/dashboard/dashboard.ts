import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-dashboard',
  imports: [CommonModule],
  templateUrl: './dashboard.html'
})
export class Dashboard {

  private router = inject(Router);

  username = () => localStorage.getItem('username') ?? '';
  authorities = () => (localStorage.getItem('authorities')?.split(',') ?? []);

  logout() {
    localStorage.clear();
    this.router.navigate(['/login']);
  }

  // 🔹 Nueva función
  goInventario() {
    this.router.navigate(['/inventario']);
  }
}

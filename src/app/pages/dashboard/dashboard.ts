import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Auth } from '../../auth/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard.html',
  styleUrls: ['./dashboard.css']
})
export class Dashboard {
  
  private auth = inject(Auth);
  private router = inject(Router);

  username = this.auth.username;
  authorities = this.auth.userAuthorities;

  logout() {
    this.auth.logout();
  }
}

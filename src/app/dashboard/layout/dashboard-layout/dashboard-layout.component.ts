import { Component, inject } from '@angular/core';
import { AuthService } from '../../../auth/service/auth.service';

@Component({
  selector: 'app-dashboard-layout',
  templateUrl: './dashboard-layout.component.html',
  styleUrl: './dashboard-layout.component.css',
})
export class DashboardLayoutComponent {
  constructor(private AuthService: AuthService) {}

  // get use() {
  //   return this.AuthService.currentUser()
  // }

  onLogout() {
    if (this.AuthService) {
      // Check if AuthService is initialized
      console.log(this.AuthService.logout());
    } else {
      console.error('AuthService not initialized');
    }
  }
}

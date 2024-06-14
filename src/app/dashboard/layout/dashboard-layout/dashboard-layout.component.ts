import { Component, computed, inject } from '@angular/core';
import { AuthService } from '../../../auth/service/auth.service';

@Component({
  selector: 'app-dashboard-layout',
  templateUrl: './dashboard-layout.component.html',
  styleUrl: './dashboard-layout.component.css',
})
export class DashboardLayoutComponent {
  private AuthService = inject(AuthService);

  public user = computed(() => this.AuthService.currentUser());

  // get use() {
  //   return this.AuthService.currentUser()
  // }

  onLogout() {
    this.AuthService.logout();
  }
}

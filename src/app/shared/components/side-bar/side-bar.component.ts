import { Component, Input, inject } from '@angular/core';
import { AuthService } from '../../../auth/service/auth.service';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrl: './side-bar.component.css',
})
export class SideBarComponent {
  private authService = inject(AuthService);

  // get use() {
  //   return this.AuthService.currentUser()
  // }
  onLogout() {
    this.authService.logout();
  }
}

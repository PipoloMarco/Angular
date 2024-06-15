import { Component, computed, inject } from '@angular/core';
import { AuthService } from '../../../auth/service/auth.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  private AuthService = inject(AuthService);

  public name = computed(() => this.AuthService.currentUser()?.name);
  public email = computed(() => this.AuthService.currentUser()?.email);

  // get use() {
  //   return this.AuthService.currentUser()
  // }
}

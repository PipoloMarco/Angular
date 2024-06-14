import { Component, computed, effect, inject } from '@angular/core';
import { AuthService } from './auth/service/auth.service';
import { AuthStatus } from './auth/interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  private authService = inject(AuthService);
  private router = inject(Router);
  public finashedAuthCheck = computed<boolean>(() => {
    console.log(this.authService.authStatus());

    if (this.authService.authStatus() === AuthStatus.checking) {
      return false;
    }

    return true;
  });

  public authStatusChangedEffect = effect(() => {
    switch (this.authService.authStatus()) {
      case AuthStatus.checking:
        this.router.navigateByUrl('/dashboard');
        return;
      case AuthStatus.aunthenticated:
        this.router.navigateByUrl('/dashboard');
        return;
      case AuthStatus.noAunthenticated:
        this.router.navigateByUrl('auth/login');
        return;
    }
  });
}

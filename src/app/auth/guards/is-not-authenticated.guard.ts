import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../service/auth.service';
import { AuthStatus } from '../interface';

export const isNotAuthenticatedGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);

  if (authService.authStatus() === AuthStatus.aunthenticated) {
    router.navigateByUrl('dashboard');
    return false;
  }
  if (authService.authStatus() === AuthStatus.checking) {
    // router.navigateByUrl('/login');
    return false;
  }

  return true;
};

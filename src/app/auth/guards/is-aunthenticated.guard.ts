import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { AuthService } from '../service/auth.service';
import { AuthStatus } from '../interface';

export const isAuthenticatedGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);

  if (authService.authStatus() === AuthStatus.aunthenticated) {
    return true;
  }
  // if (authService.authStatus() === AuthStatus.checking) {
  //   return false;
  // }
  // const url = state.url;
  // localStorage.setItem('path', url);
  router.navigateByUrl('/auth/login');
  return false;
};

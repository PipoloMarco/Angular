import { Injectable, computed, inject, signal } from '@angular/core';
import { environments } from '../../../environments/environments';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, catchError, map, of, tap, throwError } from 'rxjs';
import {
  AuthStatus,
  CheckTokenResponse,
  LoginResponse,
  RegisterUser,
  User,
} from '../interface';
import { ErrorResponse } from '../interface/errorMessageResponse.interfa';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly baseUrl: string = environments.baseUrl;
  private hhtp = inject(HttpClient);

  private _currentUser = signal<User | null>(null);
  private _authStatus = signal<AuthStatus>(AuthStatus.checking);

  public currentUser = computed(() => this._currentUser());
  public authStatus = computed(() => this._authStatus());

  private setAuthentication(user: User, token: string): boolean {
    this._currentUser.set(user);
    this._authStatus.set(AuthStatus.aunthenticated);
    localStorage.setItem('token', token);
    return true;
  }

  constructor() {
    this.checkAuthStatus().subscribe();
  }
  checkAuthStatus(): Observable<boolean> {
    const url = `${this.baseUrl}/auth/check-token`;
    const token = localStorage.getItem('token');
    if (!token) {
      this.logout();
      return of(false);
    }
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.hhtp.get<CheckTokenResponse>(url, { headers }).pipe(
      map(({ user, token }) => this.setAuthentication(user, token)),
      catchError(() => {
        this._authStatus.set(AuthStatus.noAunthenticated);
        return of(false);
      })
    );
  }

  logout() {
    localStorage.removeItem('token');
    this._authStatus.set(AuthStatus.noAunthenticated);
    this._currentUser.set(null);
  }
  login(email: string, password: string): Observable<boolean> {
    const url = `${this.baseUrl}/auth/login`;

    const body = { email, password };

    return this.hhtp.post<LoginResponse>(url, body).pipe(
      map(({ user, token }) => this.setAuthentication(user, token)),

      catchError((err) => {
        const errorResponse: ErrorResponse = err.error;
        return throwError(() => errorResponse.message);
      })
    );
  }

  register(
    email: string,
    password: string,
    name: string
  ): Observable<RegisterUser> {
    const url = `${this.baseUrl}/auth/register`;
    const body = { email, password, name };

    return this.hhtp.post<RegisterUser>(url, body).pipe(
      tap((data: RegisterUser) => console.log('Usuario registrado:', data)),
      catchError((error) => {
        console.error('Error en el registro:', error);
        return throwError(error);
      })
    );
  }
}

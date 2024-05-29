import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { AuthCredentials, AuthResponse } from '../interfaces/auth-response';
import { environment } from '../../../environments/environment';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private BASE_URL = environment.TRICEL_BACKEND_BASE_URL;
  private BASE_PATH = 'auth/api/v1';
  private user: AuthResponse | null = null;

  constructor(private httpClient: HttpClient) {}

  get currentUser(): AuthResponse | null {
    if (!this.user) return null;
    return structuredClone(this.user);
  }

  login(credentials: AuthCredentials): Observable<AuthResponse> {
    return this.httpClient
      .post<AuthResponse>(`${this.BASE_URL}/${this.BASE_PATH}`, credentials)
      .pipe(
        tap((response) => (this.user = response)),
        tap((response) => localStorage.setItem('token', response.token))
      );
  }
}

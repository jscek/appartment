import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { map, subscribeOn } from 'rxjs/operators';
import * as moment from 'moment';
import decode from 'jwt-decode';
import { UserStructure } from '../models/userStructures';
import { BehaviorSubject, Observable } from 'rxjs';

export const TOKEN_NAME = 'access_token';
export const TOKEN_EXPIRY = 'expired';

export interface DecodedAccessToken {
  avatar: string;
  email: string;
  name: string;
  score: number;
  exp: number;
  iat: number;
  sub: number;
}

export interface TokenResponse {
  accessToken: string;
  expiresIn: number;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private _currentUser: BehaviorSubject<UserStructure>;
  public currentUser: Observable<UserStructure>;

  constructor(private http: HttpClient) {
    let loggedUser = null;

    if (this.isLoggedIn()) {
      const token = this.getToken();
      loggedUser = this.getUserFromToken(token);
    }

    this._currentUser = new BehaviorSubject<UserStructure>(loggedUser);
    this.currentUser = this._currentUser.asObservable();
  }

  login(email: string, password: string) {
    return this.http
      .post<TokenResponse>(`${environment.baseUrl}/auth/login`, {
        email,
        password,
      })
      .pipe(
        map((res) => {
          this.setSession(res);
          const user = this.getUserFromToken(res.accessToken);
          this._currentUser.next(user);
          return user;
        })
      );
  }

  register(email: string, password: string, name: string) {
    return this.http.post<UserStructure>(
      `${environment.baseUrl}/auth/register`,
      {
        email,
        password,
        name,
      }
    );
  }

  private setSession(tokenResponse: TokenResponse): void {
    const expiresAt = moment().add(tokenResponse.expiresIn, 'second');

    localStorage.setItem('access_token', tokenResponse.accessToken);
    localStorage.setItem('expires_at', JSON.stringify(expiresAt.valueOf()));
  }

  private getUserFromToken(accessToken: string): UserStructure {
    const { sub, exp, iat, ...userInfo } = decode(
      accessToken
    ) as DecodedAccessToken;

    const user: UserStructure = { id: sub, ...userInfo };
    return user;
  }

  logout(): void {
    localStorage.removeItem('access_token');
    localStorage.removeItem('expires_at');
    this._currentUser.next(null);
  }

  public isLoggedIn(): boolean {
    return this.getToken() && moment().isBefore(this.getExpiration());
  }

  isLoggedOut(): boolean {
    return !this.isLoggedIn();
  }

  getToken() {
    return localStorage.getItem('access_token');
  }

  getExpiration() {
    const expiration = localStorage.getItem('expires_at');
    const expiresAt = JSON.parse(expiration);
    return moment(expiresAt);
  }
}

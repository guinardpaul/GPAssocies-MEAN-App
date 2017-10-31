import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { tokenNotExpired } from 'angular2-jwt';
// Models
import { User } from '../../models/User';

/**
 * Authentication Service
 * @author Paul GUINARD
 * @export AuthService
 * @class AuthService
 */
@Injectable()
export class AuthService {
  private url: string;
  private authToken: string;
  private authHeaders: HttpHeaders;

  /**
   * Creates an instance of AuthService.
   * @param {HttpClient} _http httpClient
   * @memberof AuthService
   */
  constructor(
    private _http: HttpClient
  ) {
    this.url = 'http://localhost:3000/auth';
  }

  /**
   * Store token et user in localStorage
   *
   * @param {string} token token
   * @param {User} user User Object
   * @memberof AuthService
   */
  storeUserData(token: string, user: User) {
    localStorage.setItem('token', token);
    localStorage.setItem('user', JSON.stringify(user));
  }

  /**
   * Login User
   *
   * @param {User} user User Object
   * @memberof AuthService
   */
  login(user: User): Observable<any> {
    return this._http.post(`${this.url}/login`, user);
  }

  /**
   * Register User
   *
   * @param {User} user User Object
   * @memberof AuthService
   */
  register(user: User): Observable<any> {
    return this._http.post(`${this.url}/register`, user);
  }

  /**
   * Clear le localStorage
   *
   * @memberof AuthService
   */
  clearLocalStorage() {
    localStorage.clear();
  }

  /**
   * Vérifie si token dans localStorage et tokenNotExpired
   *
   * @returns {boolean} tokenNotExpired
   * @memberof AuthService
   */
  loggedIn(): boolean {
    return tokenNotExpired();
  }

}

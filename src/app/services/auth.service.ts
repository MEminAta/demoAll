import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  login = false;
  userToken = '';

  constructor() {
  }

  setToken(token: string): void {
    this.userToken = token;
    this.login = true;
  }

  delToken(): void {
    this.userToken = '';
    this.login = false;
  }
}

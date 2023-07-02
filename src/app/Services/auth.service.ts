import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isLoggedIn = false;
  private username = '';

  login(username: string, password: string): boolean {
    if (username === 'admin' && password === 'admin123') {
      this.isLoggedIn = true;
      this.username = username;
      return true;
    } else {
      return false;
    }
  }

  logout(): void {
    this.isLoggedIn = false;
    this.username = '';
  }

  isLoggedInStatus(): boolean {
    return this.isLoggedIn;
  }

  getUsername(): string {
    return this.username;
  }
}

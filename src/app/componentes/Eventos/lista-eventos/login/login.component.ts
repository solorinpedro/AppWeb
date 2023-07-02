import { Component } from '@angular/core';
import { AuthService } from 'src/app/Services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username?: string;
  password?: string;
  error?: string;

  constructor(private authService: AuthService, private router: Router) {}

  login(): void {
    if (this.username && this.password) {
      const loggedIn = this.authService.login(this.username, this.password);

      if (loggedIn) {
        this.router.navigate(['/eventos']);
      } else {
        this.error = 'No se puede iniciar sesión';
      }
    }
  }

  logout(): void {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}

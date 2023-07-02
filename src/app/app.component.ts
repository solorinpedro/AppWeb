import { Component } from '@angular/core';
import { AuthService } from 'src/app/Services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Aplicacion_de_Eventos';

  constructor(public authService: AuthService) {}

  logout(): void {
    this.authService.logout();
  }
}

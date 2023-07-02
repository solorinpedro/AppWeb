import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaEventosComponent } from './componentes/Eventos/lista-eventos/lista-eventos.component';
import { HttpClientModule } from '@angular/common/http';
import { CrearEventoComponent } from './componentes/Eventos/lista-eventos/crear-evento/crear-evento.component';
import { FormsModule } from '@angular/forms';
import { EditarEventoComponent } from './componentes/Eventos/lista-eventos/editar-evento/editar-evento.component';
import { LoginComponent } from './componentes/Eventos/lista-eventos/login/login.component';
import { AuthService } from 'src/app/Services/auth.service';

@NgModule({
  declarations: [
    AppComponent,
    ListaEventosComponent,
    CrearEventoComponent,
    EditarEventoComponent,
    LoginComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }

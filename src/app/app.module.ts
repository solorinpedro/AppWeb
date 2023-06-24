import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaEventosComponent } from './componentes/Eventos/lista-eventos/lista-eventos.component';
import { HttpClientModule } from '@angular/common/http';
import { CrearEventoComponent } from './componentes/Eventos/lista-eventos/crear-evento/crear-evento.component';
import { FormsModule } from '@angular/forms';
import { EditarEventoComponent } from './componentes/Eventos/lista-eventos/editar-evento/editar-evento.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaEventosComponent,
    CrearEventoComponent,
    EditarEventoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

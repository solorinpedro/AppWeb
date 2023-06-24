import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaEventosComponent } from './componentes/Eventos/lista-eventos/lista-eventos.component';
import{CrearEventoComponent} from'./componentes/Eventos/lista-eventos/crear-evento/crear-evento.component';
import{EditarEventoComponent} from'./componentes/Eventos/lista-eventos/editar-evento/editar-evento.component';



const routes: Routes = [
  {
    path:'',
    component:ListaEventosComponent
  },

  {
    path:'eventos',
    component:ListaEventosComponent
  },

  {
    path:'eventos/crear',
    component:CrearEventoComponent
  },
  {
    path:'eventos/editar/:id',
    component:EditarEventoComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

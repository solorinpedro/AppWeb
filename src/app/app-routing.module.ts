import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaEventosComponent } from './componentes/Eventos/lista-eventos/lista-eventos.component';
import{CrearEventoComponent} from'./componentes/Eventos/lista-eventos/crear-evento/crear-evento.component';
import{EditarEventoComponent} from'./componentes/Eventos/lista-eventos/editar-evento/editar-evento.component';
import { LoginComponent } from './componentes/Eventos/lista-eventos/login/login.component';


const routes: Routes = [

  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },

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

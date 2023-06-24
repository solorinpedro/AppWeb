import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { Evento } from 'src/app/models/Evento';
import { EventosService } from 'src/app/Services/eventos.service';

@Component({
  selector: 'app-crear-evento',
  templateUrl: './crear-evento.component.html',
  styleUrls: ['./crear-evento.component.css']
})
export class CrearEventoComponent implements OnInit{

  crearEventoRequest: Evento = {
    id: 0,
    imagen: '',
    fecha: '',
    nombre: '',
    lugar: ''
  };
  constructor(private eventoService: EventosService, private router:Router){ }

  ngOnInit(): void {

  }
  CrearEvento(){
    this.eventoService.CrearEvento(this.crearEventoRequest)
    .subscribe({
      next:(eventos) => {
        this.router.navigate(['/eventos'])
      }
    });
  }
}

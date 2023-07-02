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
    lugar: '',
    cantidadTicket: 0
  };
  constructor(private eventoService: EventosService, private router:Router){ }

  ngOnInit(): void {

  }
  CrearEvento(){
    const formattedFecha = this.formatFecha(this.crearEventoRequest.fecha);
    this.crearEventoRequest.fecha = formattedFecha;
    this.eventoService.CrearEvento(this.crearEventoRequest)
    .subscribe({
      next:(eventos) => {
        this.router.navigate(['/eventos'])
      }
    });
  }
  private formatFecha(fecha: string): string {
    // Obtener las partes de la fecha
    const parts = fecha.split('-');
    const year = parts[0];
    const month = parts[1];
    const day = parts[2];

    // Formatear la fecha en el formato deseado (dd/MM/yyyy)
    return `${day}/${month}/${year}`;
  }
}

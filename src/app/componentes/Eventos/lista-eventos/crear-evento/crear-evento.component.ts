import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Evento } from 'src/app/models/Evento';
import { EventosService } from 'src/app/Services/eventos.service';


@Component({
  selector: 'app-crear-evento',
  templateUrl: './crear-evento.component.html',
  styleUrls: ['./crear-evento.component.css']
})
export class CrearEventoComponent implements OnInit {

  crearEventoRequest: Evento = {
    id: 0,
    imagen: '',
    fecha: '',
    nombre: '',
    lugar: '',
    cantidadTicket: 0
  };
  errorMessage: string = '';

  constructor(private eventoService: EventosService, private router: Router) { }

  ngOnInit(): void {

  }

  CrearEvento() {
    if (this.camposValidos() && this.crearEventoRequest.cantidadTicket > 0) {
      const formattedFecha = this.formatFecha(this.crearEventoRequest.fecha);
      this.crearEventoRequest.fecha = formattedFecha;
      this.eventoService.CrearEvento(this.crearEventoRequest)
        .subscribe({
          next: (eventos) => {
            this.router.navigate(['/eventos']);
          },
          error: (error) => {
            this.errorMessage = 'Ocurrió un error al crear el evento.';
          }
        });
    } else {
      this.errorMessage = 'Por favor, complete todos los campos';
    }
  }

  private camposValidos(): boolean {
    return (
      this.crearEventoRequest.imagen !== '' &&
      this.crearEventoRequest.fecha !== '' &&
      this.crearEventoRequest.nombre !== '' &&
      this.crearEventoRequest.lugar !== ''
    );
  }

  private formatFecha(fecha: string): string {
    const parts = fecha.split('-');
    const year = parts[0];
    const month = parts[1];
    const day = parts[2];

    return `${day}/${month}/${year}`;
  }
}

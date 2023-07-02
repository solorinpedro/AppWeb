import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EventosService } from 'src/app/Services/eventos.service';
import { Evento } from 'src/app/models/Evento';

@Component({
  selector: 'app-editar-evento',
  templateUrl: './editar-evento.component.html',
  styleUrls: ['./editar-evento.component.css']
})
export class EditarEventoComponent implements OnInit {
  DetalleEvento: Evento = {
    id: 0,
    imagen: '',
    fecha: '',
    nombre: '',
    lugar: '',
    cantidadTicket: 0,
  };

  errorMessage: string = '';

  constructor(
    private route: ActivatedRoute,
    private eventosService: EventosService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe({
      next: (params) => {
        const id = params.get('id');

        if (id !== null) {
          const numericId = +id; // Convertir ID a número utilizando el operador +

          this.eventosService.getEvento(numericId).subscribe({
            next: (response) => {
              this.DetalleEvento = response;
            },
            error: (error) => {
              console.log(error);
            }
          });
        }
      }
    });
  }

  ActualizarEvento() {

    if (this.camposValidos() && this.DetalleEvento.cantidadTicket > 0) {
      const formattedFecha = this.formatFecha(this.DetalleEvento.fecha);
      this.DetalleEvento.fecha = formattedFecha;
      this.eventosService.ActualizarEvento(this.DetalleEvento.id, this.DetalleEvento).subscribe({
        next: (response) => {
          this.router.navigate(['/eventos']);
        },
        error: (error) => {
          this.errorMessage = 'Ocurrió un error al actualizar el evento.';
        }
      });
    } else {
      this.errorMessage = 'Por favor, complete todos los campos obligatorio';
    }
  }

  EliminarEvento(id: number) {
    this.eventosService.EliminarEvento(id).subscribe({
      next: (response) => {
        this.router.navigate(['/eventos']);
      }
    });
  }

  private camposValidos(): boolean {
    return (
      this.DetalleEvento.imagen !== '' &&
      this.DetalleEvento.fecha !== '' &&
      this.DetalleEvento.nombre !== '' &&
      this.DetalleEvento.lugar !== ''
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

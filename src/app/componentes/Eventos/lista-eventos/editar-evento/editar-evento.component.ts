import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EventosService } from 'src/app/Services/eventos.service';
import { Evento } from 'src/app/models/Evento';
import { idText } from 'typescript';


@Component({
  selector: 'app-editar-evento',
  templateUrl: './editar-evento.component.html',
  styleUrls: ['./editar-evento.component.css']
})
export class EditarEventoComponent implements OnInit{
  constructor(private route: ActivatedRoute, private eventosService: EventosService, private eventoService: EventosService, private router:Router) { }

  DetalleEvento: Evento = {
    id: 0,
    imagen: '',
    fecha: '',
    nombre: '',
    lugar: '',
    cantidadTicket: 0,
  };
  ngOnInit(): void {
    this.route.paramMap.subscribe({
      next: (params) => {
        const id = params.get('id');

        if (id !== null) {
          const numericId = +id; // Convertir ID a número utilizando el operador +

          this.eventosService.getEvento(numericId)
            .subscribe({
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
    ActualizarEvento(){
      this.eventosService.ActualizarEvento(this.DetalleEvento.id, this.DetalleEvento)
      .subscribe({
        next:(response) =>
        this.router.navigate(['/eventos'])

      });
    }

    EliminarEvento(id: number){
      this.eventoService.EliminarEvento(id)
      .subscribe({
        next:(response) => {
          this.router.navigate(['/eventos'])
        }
      });
    }
}


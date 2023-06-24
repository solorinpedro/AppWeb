import { Component, OnInit} from '@angular/core';
import { EventosService } from 'src/app/Services/eventos.service';
import { Evento } from 'src/app/models/Evento';

@Component({
  selector: 'app-lista-eventos',
  templateUrl: './lista-eventos.component.html',
  styleUrls: ['./lista-eventos.component.css']
})
export class ListaEventosComponent implements OnInit{

  eventos: Evento[] = [];
  constructor (private eventoService: EventosService) { }

  ngOnInit(): void {
    this.eventoService.GetEventos()
    .subscribe({
      next:(eventos) => {
        this.eventos = eventos;
      },
      error: (response) => {
        console.log(response);
      },
    })
  }
}

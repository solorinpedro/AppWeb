import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Evento } from '../models/Evento';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventosService {

  baseApiUrl: string = environment.baseApiUrl;

  constructor(private http: HttpClient) { }

  GetEventos(): Observable<Evento[]>{
   return this.http.get<Evento[]>(this.baseApiUrl + '/Eventos/GetEventos');
  }

  CrearEvento(crearEventoRequest: Evento): Observable<Evento>{
    crearEventoRequest.id = 0;
    return this.http.post<Evento>(this.baseApiUrl + '/Eventos/PostEvento',crearEventoRequest);
  }

  getEvento(id: number): Observable<Evento>{
    return this.http.get<Evento>(this.baseApiUrl + '/Eventos/GetEventos' + id);
  }

  ActualizarEvento(id: number, ActualizarEventoRequest: Evento): Observable<Evento>{
      return this.http.put<Evento>(this.baseApiUrl + '/Eventos/PutEventos' + id, ActualizarEventoRequest)
  }
  EliminarEvento(id: number): Observable<Evento>{
    return this.http.delete<Evento>(this.baseApiUrl + '/Eventos/DeleteEvento' + id)
  }
}

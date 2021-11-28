import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pelicula } from '../models/pelicula.model';


const baseUrl = 'http://localhost:8080/rest/peliculas';

@Injectable({
  providedIn: 'root'
})
export class PeliculaService {

  constructor(private http : HttpClient) { 
    
  }
  listarTodos(): Observable<Pelicula[]>{
    return this.http.get<Pelicula[]>(baseUrl);
  }
}

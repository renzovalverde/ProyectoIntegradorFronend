import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Genero } from '../models/genero.model';

const baseUrl = 'http://localhost:8080/rest/generos';

@Injectable({
  providedIn: 'root'
})
export class GeneroService {

  constructor(private http : HttpClient) { }
  listarTodos(): Observable<Genero[]>{
    return this.http.get<Genero[]>(baseUrl);
  }
}

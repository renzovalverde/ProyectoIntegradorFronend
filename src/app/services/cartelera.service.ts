import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cartelera } from '../models/cartelera.model';

const baseUrl = 'http://localhost:8080/rest/cartelera';

@Injectable({
  providedIn: 'root'
})
export class CarteleraService {

  constructor(private http : HttpClient) { }
  listarTodos(): Observable<Cartelera[]>{
    return this.http.get<Cartelera[]>(baseUrl);
  }
}

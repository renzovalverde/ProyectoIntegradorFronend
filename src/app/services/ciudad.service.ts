import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Ciudad } from '../models/ciudad.model';

const baseUrl = 'http://localhost:8080/rest/ciudades';

@Injectable({
  providedIn: 'root'
})
export class CiudadService {

  constructor(private http : HttpClient) { }

  listarTodos(): Observable<Ciudad[]>{
    return this.http.get<Ciudad[]>(baseUrl);
  }
}

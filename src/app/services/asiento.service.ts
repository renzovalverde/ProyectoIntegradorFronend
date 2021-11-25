import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Asiento } from '../models/asiento.model';

const baseUrl = 'http://localhost:8080/rest/asientos';
@Injectable({
  providedIn: 'root'
})
export class AsientoService {

  constructor(private http : HttpClient) { }
  listarTodos(): Observable<Asiento[]>{
    return this.http.get<Asiento[]>(baseUrl);
  }
}

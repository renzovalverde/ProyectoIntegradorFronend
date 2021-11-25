import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Boleto } from '../models/boleto.model';

const baseUrl = 'http://localhost:8080/rest/boletos';

@Injectable({
  providedIn: 'root'
})
export class BoletoService {

  constructor(private http : HttpClient) { }
  listarTodos(): Observable<Boleto[]>{
    return this.http.get<Boleto[]>(baseUrl);
  }
}

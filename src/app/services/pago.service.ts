import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pago } from '../models/pago.model';

const baseUrl = 'http://localhost:8080/rest/pagos';

@Injectable({
  providedIn: 'root'
})
export class PagoService {

  constructor(private http : HttpClient) { }
  listarTodos(): Observable<Pago[]>{
    return this.http.get<Pago[]>(baseUrl);
  }
}

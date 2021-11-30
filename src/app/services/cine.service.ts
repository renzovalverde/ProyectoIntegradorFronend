import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cine } from '../models/cine.model';

const baseUrl = 'http://localhost:8080/rest/cines';

@Injectable({
  providedIn: 'root'
})
export class CineService {

  constructor(private http : HttpClient) { }
  
  consultaCineXciudad( idCiudad:number): Observable<any> {
    const params = new HttpParams().set("idCiudad", idCiudad);
    return this.http.get(baseUrl + "/listCineByCiudad", {params});

  }
  listarTodos(): Observable<Cine[]>{
    let username='ana@gmail.com'
    let password='admin'
    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password) });
    return this.http.get<Cine[]>(baseUrl);
  }
}

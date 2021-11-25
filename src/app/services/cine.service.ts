import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

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
}

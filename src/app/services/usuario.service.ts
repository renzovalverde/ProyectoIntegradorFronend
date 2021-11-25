import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

const baseUrl = 'http://localhost:8080/rest/usuario';

@Injectable({
  providedIn: 'root'
})

export class UsuarioService {

  constructor(private http: HttpClient) { }
  /*login(user: Any): Observable<any> {
    return this.http.post("https://reqres.in/api/login", user);
  }*/
}

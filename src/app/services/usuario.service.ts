import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { Usuario } from '../models/usuario.model';

const baseUrl = 'http://localhost:8080/rest/usuarios';

@Injectable({
  providedIn: 'root'
})

export class UsuarioService {

  constructor(private http: HttpClient) { }
  /*login(user: Any): Observable<any> {
    return this.http.post("https://reqres.in/api/login", user);
  }*/


listarUsuario():Observable<Usuario[]>{
  return this.http.get<Usuario[]>(baseUrl+"/listaUsuarios")
}
registrar(data:Usuario) : Observable<any>{
  return this.http.post(baseUrl+"/registroUsuarios",data);
}


}



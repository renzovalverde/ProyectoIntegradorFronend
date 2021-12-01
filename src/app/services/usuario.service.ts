import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { Usuario } from '../models/usuario.model';
import { map } from 'rxjs/operators';
const baseUrl = 'http://localhost:8080/rest/usuarios';

@Injectable({
  providedIn: 'root'
})

export class UsuarioService {

  
  constructor(private http: HttpClient) { }
  
listarUsuario():Observable<Usuario[]>{
  return this.http.get<Usuario[]>(baseUrl+"/listaUsuarios")
}
registrar(data:Usuario) : Observable<any>{
  
  this.authenticate(data.email!,data.password!);
  return this.http.post<any>('http://localhost:8080/register',data);
}

authenticate(username:string, password:string) {
  return this.http.post<any>('http://localhost:8080/authenticate',{username,password}).pipe(
   map(
     userData => {
      sessionStorage.setItem('username',username);
      let tokenStr= 'Bearer '+userData.token;
      sessionStorage.setItem('token', tokenStr);
      return userData;
     }
   )
  );
}

isUserLoggedIn() {
  let user = sessionStorage.getItem('username')
  console.log(!(user === null))
  return !(user === null)
}

logOut() {
  sessionStorage.removeItem('username')
}
}



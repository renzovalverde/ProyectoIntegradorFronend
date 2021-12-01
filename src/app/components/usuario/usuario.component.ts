import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/models/usuario.model';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})

export class UsuarioComponent implements OnInit {

  username = ''
  password = ''
  invalidLogin = false

  usuario:Usuario = {
    idUsuario:0,
    //email:this.username,
   // password:this.password
  }

  constructor(private router: Router, private loginservice: UsuarioService) { }

  ngOnInit(): void {
    this.loginservice.logOut();
    this.router.navigate(['Usuario']);
  }
  checkLogin() {
    (this.loginservice.authenticate(this.username, this.password).subscribe(
      data => {
        this.router.navigate(['Compra'])
        this.invalidLogin = false
      },
      error => {
        this.invalidLogin = true

      }
    )
    );
  }
  registrar(){
    this.loginservice.registrar(this.usuario).subscribe(

      data => {
        (this.loginservice.authenticate(this.usuario.email!, this.usuario.password!).subscribe(
          data => {
            this.router.navigate(['Compra'])
            this.invalidLogin = false
          },
          error => {
            this.invalidLogin = true
    
          }
        ));
        this.usuario= {
          idUsuario:0,
          nombres:"",
          amaterno:"",
          apaterno:"",
          dni:"",
          password:"",
          login:"",
          email:"",

        }
       alert("Registro Exitoso")
      },
      err => {
        console.log(err.error.message);
      }
    );
  }
}

import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../services/usuario.service';
import { Usuario } from '../../models/usuario.model';

@Component({
  selector: 'app-registra-usuario',
  templateUrl: './registra-usuario.component.html',
  styleUrls: ['./registra-usuario.component.css']
})
export class RegistraUsuarioComponent implements OnInit {

  usuario: Usuario = new Usuario;

  constructor(private usuarioService:UsuarioService) { }




  registraUsuarios(){
    console.log(this.usuario)
    this.usuarioService.registrar(this.usuario).subscribe(  
      response => {
        console.log(response.mensaje);
        alert(response.mensaje);
      },
      error => {
        console.log(error);
        
      },
    );
  } 



  ngOnInit(): void {
  }

}

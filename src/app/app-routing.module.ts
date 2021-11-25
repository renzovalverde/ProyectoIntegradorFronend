import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { UsuarioComponent } from './components/usuario/usuario.component';
import { PeliculaComponent } from './components/pelicula/pelicula.component';
import { CineComponent } from './components/cine/cine.component';
import { RegistraUsuarioComponent } from './components/registra-usuario/registra-usuario.component';
import { CiudadComponent } from './components/ciudad/ciudad.component';


const routes: Routes = [
  {path:"Usuario", component:UsuarioComponent },
  {path:"RegistraUsuario", component:RegistraUsuarioComponent },
  {path:"Pelicula", component:PeliculaComponent },
  {path:"Cine", component:CineComponent },
  {path:"Ciudad", component:CiudadComponent }

]; // <== newly added variable

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
}) // <== newly modified structure




/*@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})*/
export class AppRoutingModule { }

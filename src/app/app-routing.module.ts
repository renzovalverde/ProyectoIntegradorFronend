import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { UsuarioComponent } from './components/usuario/usuario.component';
import { PeliculaComponent } from './components/pelicula/pelicula.component';
import { CineComponent } from './components/cine/cine.component';



const routes: Routes = [
  {path:"Usuario", component:UsuarioComponent },
  {path:"Pelicula", component:PeliculaComponent },
  {path:"Cine", component:CineComponent },
  

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

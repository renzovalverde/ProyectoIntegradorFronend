import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { UsuarioComponent } from './components/usuario/usuario.component';
import { PeliculaComponent } from './components/pelicula/pelicula.component';
import { CineComponent } from './components/cine/cine.component';
import { RegistraUsuarioComponent } from './components/registra-usuario/registra-usuario.component';
import { CiudadComponent } from './components/ciudad/ciudad.component';
import { PeliculaDetalleComponent } from './components/pelicula-detalle/pelicula-detalle.component';
import { CompraComponent } from './components/compra/compra.component';
import { DetalleCompraComponent } from './components/detalle-compra/detalle-compra.component';
import { CarteleraComponent } from './components/cartelera/cartelera.component';
import { AuthGuardService } from './services/auth-guard.service';



const routes: Routes = [
  {path:"Usuario", component:UsuarioComponent },
  {path:"contacto", component:RegistraUsuarioComponent },
  {path:"Pelicula", component:PeliculaComponent },
  {path:"Cine", component:CineComponent },
  {path:"Ciudad", component:CiudadComponent },
  {path:"Compra", component:CompraComponent ,canActivate:[AuthGuardService] },
  {path:"Cartelera", component:CarteleraComponent },
  {path:"Compra-detalle", component: DetalleCompraComponent,canActivate:[AuthGuardService]},
  {path: "Pelicula-detalle" , component: PeliculaDetalleComponent}

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

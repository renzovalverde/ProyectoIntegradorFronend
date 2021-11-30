import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PeliculaComponent } from './components/pelicula/pelicula.component';
import { AppRoutingModule } from './app-routing.module';
import { GeneroComponent } from './components/genero/genero.component';
import { AsientoComponent } from './components/asiento/asiento.component';
import { BoletoComponent } from './components/boleto/boleto.component';
import { CarteleraComponent } from './components/cartelera/cartelera.component';
import { CineComponent } from './components/cine/cine.component';
import { CiudadComponent } from './components/ciudad/ciudad.component';
import { CompraComponent } from './components/compra/compra.component';
import { DetalleCompraComponent } from './components/detalle-compra/detalle-compra.component';
import { PagoComponent } from './components/pago/pago.component';
import { SalaComponent } from './components/sala/sala.component';
import { SalaAsientoComponent } from './components/sala-asiento/sala-asiento.component';
import { UsuarioComponent } from './components/usuario/usuario.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegistraUsuarioComponent } from './components/registra-usuario/registra-usuario.component';
import { PeliculaDetalleComponent } from './components/pelicula-detalle/pelicula-detalle.component';
import { BasicAuthHtppInterceptorServiceService } from './services/basic-auth-htpp-interceptor-service.service';


@NgModule({
  declarations: [
    AppComponent,
    PeliculaComponent,
    GeneroComponent,
    AsientoComponent,
    BoletoComponent,
    CarteleraComponent,
    CineComponent,
    CiudadComponent,
    CompraComponent,
    DetalleCompraComponent,
    PagoComponent,
    SalaComponent,
    SalaAsientoComponent,
    UsuarioComponent,
    RegistraUsuarioComponent,
    PeliculaDetalleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule, // added  to project
    FormsModule, // added  to project
    ReactiveFormsModule // added  to project
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

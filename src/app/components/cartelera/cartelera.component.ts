import { Component, OnInit } from '@angular/core';
import { Cartelera } from 'src/app/models/cartelera.model';
import { Cine } from 'src/app/models/cine.model';
import { Pelicula } from 'src/app/models/pelicula.model';
import { CarteleraService } from 'src/app/services/cartelera.service';
import { PeliculaService } from 'src/app/services/pelicula.service';

@Component({
  selector: 'app-cartelera',
  templateUrl: './cartelera.component.html',
  styleUrls: ['./cartelera.component.css']
})
export class CarteleraComponent implements OnInit {

  carteleras: Cartelera[] =[];
  peliculas: Pelicula[] =[];
  cines: Cine[] =[]
  constructor(private carteleraService:CarteleraService,peliculaService:PeliculaService) {
    carteleraService.listarTodos().subscribe(
      response => this.carteleras = response
    );
    peliculaService.listarTodos().subscribe(
      response => this.peliculas = response
    );
   }

  ngOnInit(): void {
  }
  getCine(cine:Cine){

  }
}

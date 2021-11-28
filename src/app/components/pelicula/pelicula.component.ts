import { Component, OnInit } from '@angular/core';
import { Cine } from 'src/app/models/cine.model';
import { Genero } from 'src/app/models/genero.model';
import { Pelicula } from 'src/app/models/pelicula.model';
import { CineService } from 'src/app/services/cine.service';
import { GeneroService } from 'src/app/services/genero.service';
import { PeliculaService } from 'src/app/services/pelicula.service';

@Component({
  selector: 'app-pelicula',
  templateUrl: './pelicula.component.html',
  styleUrls: ['./pelicula.component.css']
})
export class PeliculaComponent implements OnInit {

  cines: Cine[] =[];
  generos: Genero[] =[];
  peliculas: Pelicula[] =[];
  pelicula: Pelicula ={
    
  }
  

  constructor(private generoService:GeneroService, private cineService:CineService,private peliculaService:PeliculaService) {

    cineService.listarTodos().subscribe(
      response => this.cines = response
    );
    generoService.listarTodos().subscribe(
      response => this.generos = response
    );
    peliculaService.listarTodos().subscribe(
      response => this.peliculas = response
    );
    
   }

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';
import { Cine } from 'src/app/models/cine.model';
import { Ciudad } from 'src/app/models/ciudad.model';
import { CineService } from 'src/app/services/cine.service';
import { CiudadService } from 'src/app/services/ciudad.service';
@Component({
  selector: 'app-cine',
  templateUrl: './cine.component.html',
  styleUrls: ['./cine.component.css']
})
export class CineComponent implements OnInit {

  selCiudad:number = 0; 

  cines: Cine[] =[];
  ciudades: Ciudad[] =[];
  cine: Cine ={

    ciudad:{
      idCiudad:0
    }
  }

  constructor(private ciudadService:CiudadService, private cineService:CineService) { 
    ciudadService.listarTodos().subscribe(
      response => this.ciudades = response
    );
   this.consultaCines();
  }



  consultaCines(){
    this.cineService.consultaCineXciudad(this.selCiudad).subscribe(
        response => this.cines = response.lista
    );
    }
  ngOnInit(): void {
  }

}

import { Component, OnInit , Input } from '@angular/core';

@Component({
  selector: 'app-pelicula-detalle',
  templateUrl: './pelicula-detalle.component.html',
  styleUrls: ['./pelicula-detalle.component.css']
})
export class PeliculaDetalleComponent implements OnInit {

  @Input() datoEntrante:any
  constructor() {
  
   }

  ngOnInit(): void {
  }

}

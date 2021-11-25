import { Genero } from "./genero.model";

export class Pelicula {
    idPelicula?:number;
	nombre?:string;
	duracion?:string ;
	idioma ?:string ;
	director?:string ; 
    restinccion?:string ;
    imagen?:string;
    genero?:Genero;
}
import { Cine } from "./cine.model";
import { Pelicula } from "./pelicula.model";

export class Cartelera {
    idCartelera?:number;
    pelicula?:Pelicula;
    cine?:Cine;
    hora?:string;
    fecha?:Date;
}

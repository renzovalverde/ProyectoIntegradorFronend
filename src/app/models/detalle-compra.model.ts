import { Boleto } from "./boleto.model";
import { Compra } from "./compra.model";

export class DetalleCompra {
    detalleCompra?:number;
	compra?:Compra ;
	boleto?:Boleto;	
	cantidad?:number;
}

import { DetalleCompra } from "./detalle-compra.model";
import { Pago } from "./pago.model";
import { Usuario } from "./usuario.model";

export class Compra {
    idCompra?:number;
    fechaRegistro?:Date;
	usuario?:Usuario ;
    pago?:Pago;
    detalleCompra?:Array<DetalleCompra>;
}

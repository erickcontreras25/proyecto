export class Cancha {
    idCancha: number;
    precio: number;
    estado: string;
    idComplejo: number;

    constructor(id: number, precio: number, estado: string, idCom: number) {
        this.idCancha = id;
        this.precio = precio;
        this.estado = estado;
        this.idComplejo = idCom;
    }
}

export class Cancha {
    idCancha: number;
    precio;
    foto;
    idComplejo;

    constructor(id: number, precio, fot, idCom) {
        this.idCancha = id;
        this.precio = precio;
        this.foto = fot;
        this.idComplejo = idCom;
    }
}

export class Cancha {
    idCancha: number;
    precio;
    foto;
    tamanioCancha;
    idComplejo;

    constructor(id: number, precio, fot, tamanio, idCom) {
        this.idCancha = id;
        this.precio = precio;
        this.foto = fot;
        this.tamanioCancha = tamanio;
        this.idComplejo = idCom;
    }
}

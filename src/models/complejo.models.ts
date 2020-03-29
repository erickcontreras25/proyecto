export class Complejo {
    idComplejo: number;
    nombre;
    localidad;
    foto;
    estado;
    idAdmin;

    constructor(id: number, nombre, loc, fot, est, adminId) {
        this.idComplejo = id;
        this.nombre = nombre;
        this.localidad = loc;
        this.foto = fot;
        this.estado = est;
        this.idAdmin = adminId;
    }
}

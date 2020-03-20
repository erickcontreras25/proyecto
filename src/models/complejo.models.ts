export class Complejo {
    idComplejo: number;
    nombre: string;
    localidad: string;
    cantCanchas: number;
    idAdmin: number;

    constructor(id: number, nombre: string, loc: string, cant: number, adminId: number) {
        this.idComplejo = id;
        this.nombre = nombre;
        this.localidad = loc;
        this.cantCanchas = cant;
        this.idAdmin = adminId;
    }
}

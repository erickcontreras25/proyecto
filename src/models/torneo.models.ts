export class Torneo {
    idTorneo: number;
    nombre;
    cantEquipos;
    descripcion;
    premioFoto;
    diaTorneo;
    usuarioId;
    idComplejo;

    constructor(idT, nombre, cantE, des, premio, diaT, usuId, idCom) {
        this.idTorneo = idT;
        this.nombre = nombre;
        this.cantEquipos = cantE;
        this.descripcion = des;
        this.premioFoto = premio;
        this.diaTorneo = diaT;
        this.usuarioId = usuId;
        this.idComplejo = idCom;
    }
}

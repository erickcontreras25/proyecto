export class Reservacion {
    idReservacion: number;
    horaInicial: Date;
    horaFinal: Date;
    idCancha: number;
    idUsuario: number;

    constructor(id: number, hInicial: Date, hFinal: Date, idCan: number, idUsu: number) {
        this.idReservacion = id;
        this.horaInicial = hInicial;
        this.horaFinal = hFinal;
        this.idCancha = idCan;
        this.idUsuario = idUsu;
    }
}

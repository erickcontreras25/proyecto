export class Reservacion {
    idReservacion: number;
    horaInicial: Date;
    horaFinal: Date;
    pago: boolean;
    idCancha: number;
    userId: string;

    constructor(id: number, hInicial: Date, hFinal: Date, pago: boolean, idCan: number, idUsu: string) {
        this.idReservacion = id;
        this.horaInicial = hInicial;
        this.horaFinal = hFinal;
        this.pago = pago;
        this.idCancha = idCan;
        this.userId = idUsu;
    }
}

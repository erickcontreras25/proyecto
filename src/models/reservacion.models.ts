export class Reservacion {
    idReservacion: number;
    horaInicial;
    horaFinal;
    pago: boolean;
    pagoParcial: boolean;
    idCancha: number;
    userId: string;

    constructor(id: number, hInicial, hFinal, pago: boolean, pagoP: boolean, idCan: number, idUsu: string) {
        this.idReservacion = id;
        this.horaInicial = hInicial;
        this.horaFinal = hFinal;
        this.pago = pago;
        this.idCancha = idCan;
        this.userId = idUsu;
    }
}

export class Equipo {
    idEquipo: number;
    nombre;
    cantJugadores;
    userId;

    constructor(id, nombre, cantidad, usuarioId) {
        this.idEquipo = id;
        this.nombre = nombre;
        this.cantJugadores = cantidad;
        this.userId = usuarioId;
    }
}

export class Equipo {
    idEquipo: number;
    nombre;
    userId;

    constructor(id, nombre, usuarioId) {
        this.idEquipo = id;
        this.nombre = nombre;
        this.userId = usuarioId;
    }
}

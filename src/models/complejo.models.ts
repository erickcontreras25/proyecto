export class Complejo {
    idComplejo: number;
    nombre;
    localidad;
    foto;
    estado;
    longitud;
    latitud;
    horaInicio;
    horaCierre;
    userId;

    constructor(id: number, nombre, loc, fot, est, lng, lat, hInicio, hCierre, adminId) {
        this.idComplejo = id;
        this.nombre = nombre;
        this.localidad = loc;
        this.foto = fot;
        this.estado = est;
        this.longitud = lng;
        this.latitud = lat;
        this.horaInicio = hInicio;
        this.horaCierre = hCierre;
        this.userId = adminId;
    }
}

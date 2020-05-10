export class Complejo {
    idComplejo: number;
    nombre;
    localidad;
    numero;
    foto;
    estado;
    longitud;
    latitud;
    horaInicio;
    horaCierre;
    parqueo;
    seguridad;
    userId;

    constructor(id: number, nombre, loc, num, fot, est, lng, lat, hInicio, hCierre, par, seg, adminId) {
        this.idComplejo = id;
        this.nombre = nombre;
        this.localidad = loc;
        this.numero = num;
        this.foto = fot;
        this.estado = est;
        this.longitud = lng;
        this.latitud = lat;
        this.horaInicio = hInicio;
        this.horaCierre = hCierre;
        this.parqueo = par;
        this.seguridad = seg;
        this.userId = adminId;
    }
}

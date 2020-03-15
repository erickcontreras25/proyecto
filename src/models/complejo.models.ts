export class Complejo{
    idComplejo: number;
    nombre: string;
    latitud: number;
    longitud: number;
    cantCanchas: number;

    constructor(id:number, nombre: string, lat: number, long: number, cant: number){
        this.nombre = nombre;
        this.latitud = lat;
        this.longitud = long;
        this.cantCanchas = cant;

    }
}
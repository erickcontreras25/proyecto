export class Admin {
    idAdmin: number;
    nombre: string;
    email: string;
    password: string;
    rol: boolean;

    constructor(id: number, nombre: string, email: string, password: string, rol: boolean) {
        this.idAdmin = id;
        this.nombre = nombre;
        this.email = email;
        this.password = password;
        this.rol = rol;
    }
}
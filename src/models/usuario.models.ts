export class Usuario {
    idUsuario: number;
    nombre: string;
    nombreUsuario: string;
    edad: number;
    email: string;
    password: string;
    rol: boolean;

    constructor(id: number, nombre: string, nUsuario: string,
                edad: number, email: string, password: string, rol: boolean) {
        this.idUsuario = id;
        this.nombre = nombre;
        this.nombreUsuario = nUsuario;
        this.edad = edad;
        this.email = email;
        this.password = password;
        this.rol = rol;
    }
}

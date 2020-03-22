export class Usuario {
    nombre: string;
    nombreUsuario: string;
    edad: number;
    email: string;
    password: string;
    rol: boolean;

    constructor(nombre: string, nUsuario: string,
                edad: number, email: string, password: string, rol: boolean) {
        this.nombre = nombre;
        this.nombreUsuario = nUsuario;
        this.edad = edad;
        this.email = email;
        this.password = password;
        this.rol = rol;
    }
}

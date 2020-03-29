export class Usuario {
    nombre;
    nombreUsuario;
    edad;
    email;
    password;
    rol;
    foto;

    constructor(nombre, nUsuario, edad, email, password, rol, fot) {
        this.nombre = nombre;
        this.nombreUsuario = nUsuario;
        this.edad = edad;
        this.email = email;
        this.password = password;
        this.rol = rol;
        this.foto = fot;
    }
}
